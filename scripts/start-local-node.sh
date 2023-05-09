#!/bin/bash
#
# Starts a local node using Docker Compose and deploys the testing contracts.
#

set -euo pipefail

command -v jq >/dev/null 2>&1 || {
  echo >&2 "jq is required but not installed. Aborting."
  exit 1
}

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

function ok() {
  echo " ✔ $1"
}

function error() {
  echo " 𝗑 Error: $1" >&2
  exit 1
}

function archwayd() {
  docker compose exec node archwayd "$@"
}

function gas-prices-estimate() {
  archwayd q rewards estimate-fees 1 --output json |
    jq -r '.gas_unit_price | (.amount + .denom)'
}

function archwayd-tx() {
  archwayd tx "$@" \
    --gas auto \
    --gas-prices "$(gas-prices-estimate)" \
    --gas-adjustment 1.3 \
    --broadcast-mode block \
    --output json \
    --yes
}

function validate-tx() {
  local tx_result="${1:-}"
  local error_message="${2:-}"
  if [[ -z "${tx_result}" ]] || ! jq -e '.code == 0' >/dev/null 2>&1 <<<"${tx_result}"; then
    [[ -n "${tx_result}" ]] && jq -r '.raw_log' <<<"${tx_result}" >&2
    error "${error_message}"
  fi
}

function store-contract() {
  local name="${1:-}"

  local wasm="contracts/${name}.wasm"
  local checksum
  checksum="$(sha256sum "${SCRIPT_DIR}/${wasm}" | awk '{ print $1 }')"

  local code_id
  code_id="$(
    archwayd q wasm list-code |
      jq -r --arg checksum "${checksum}" \
        'first(.code_infos[] | select(.data_hash == ($checksum | ascii_upcase)) | .code_id)'
  )"

  local tx_hash

  if [[ -z "${code_id}" ]]; then
    tx_result="$(
      archwayd-tx --from validator wasm store /"${wasm}"
    )"
    validate-tx "${tx_result}" "failed to store contract!"

    tx_hash="$(jq -r '.txhash' <<<"${tx_result}")"
    code_id="$(jq -r '.logs[].events[] | select(.type == "store_code") | .attributes[] | select(.key == "code_id") | .value' <<<"${tx_result}")"
  fi

  jq --null-input \
    --argjson code_id "${code_id}" \
    --arg checksum "${checksum}" \
    --arg tx_hash "${tx_hash:-}" \
    '{
      "code_id": $code_id,
      "checksum": $checksum,
      "tx_hash": $tx_hash
    }'
}

function instantiate-contract() {
  local label="${1:-}"
  local address="${2:-}"
  local code_id="${3:-}"
  local checksum="${4:-}"
  local denom="${5:-}"

  local salt
  salt="$(echo -n "${label}" | xxd -ps)"

  local instantiate_params
  instantiate_params="$(
    jq --null-input \
      --arg owner_addr "${address}" \
      --arg new_voting_cost "10${denom}" \
      --arg vote_cost "1${denom}" \
      '{
      params: {
        owner_addr: $owner_addr,
        new_voting_cost: $new_voting_cost,
        vote_cost: $vote_cost,
        ibc_send_timeout: 10000000000
      }
    }'
  )"

  local contract_address
  contract_address="$(
    archwayd q wasm build-address \
      "${checksum}" \
      "${address}" \
      "${salt}" \
      "${instantiate_params}"
  )"

  local contract_info
  contract_info="$(archwayd q wasm contract "${contract_address}" --output json 2>/dev/null || echo '{}')"

  local tx_hash

  if jq -e '.contract_info == null' <<<"${contract_info}" >/dev/null; then
    tx_result="$(
      archwayd-tx wasm instantiate2 \
        --from "${address}" \
        --admin "${address}" \
        --label "${label}" \
        --fix-msg \
        "${code_id}" \
        "${instantiate_params}" \
        "${salt}"
    )"
    validate-tx "$tx_result" "failed to instantiate contract!"
    tx_hash="$(jq -r '.txhash' <<<"${tx_result}")"
    tx_contract_address="$(jq -r '.logs[].events[] | select(.type == "instantiate") | .attributes[] | select(.key == "_contract_address") | .value' <<<"${tx_result}")"
    [[ "${contract_address}" == "${tx_contract_address}" ]] || error "contract address mismatch: expected ${contract_address}, got ${tx_contract_address}"
  fi

  jq --null-input \
    --arg contract_address "${contract_address}" \
    --arg tx_hash "${tx_hash:-}" \
    '{
      "contract_address": $contract_address,
      "tx_hash": $tx_hash
    }'
}

function execute-contract() {
  local address="${1:-}"
  local contract_address="${2:-}"
  local msg="${3:-}"
  local amount="${4:-}"

  local gas=300000
  local fees
  fees="$(
    archwayd q rewards estimate-fees ${gas} "${contract_address}" --output json |
      jq -r '.estimated_fee[0] | (.amount + .denom)'
  )"

  local tx_result
  tx_result="$(
    if [[ -n "${amount}" ]]; then
      archwayd tx wasm execute \
        --from "${address}" \
        --amount "${amount}" \
        --gas ${gas} \
        --fees "${fees}" \
        --broadcast-mode block \
        --output json \
        --yes \
        "${contract_address}" \
        "${msg}"
    else
      archwayd tx wasm execute \
        --from "${address}" \
        --fees "${fees}" \
        --broadcast-mode block \
        --output json \
        --yes \
        "${contract_address}" \
        "${msg}"
    fi
  )"
  validate-tx "${tx_result}" "failed to execute contract!"

  jq --null-input \
    --arg tx_hash "$(jq -r '.txhash' <<<"${tx_result}")" \
    '{
      "tx_hash": $tx_hash
    }'
}

function dotenv-add() {
  local name="${1:-}"
  local value="\"${2:-}\""

  local dotenv="${SCRIPT_DIR}/../.env"

  [[ -f ${dotenv} ]] || touch "${dotenv}"

  if grep -qF -- "${name}=" "${dotenv}"; then
    replace="s/^${name}=.*/${name}=${value}/g"
    if [[ "$OSTYPE" =~ ^darwin ]]; then
      sed -i '' -e "${replace}" "${dotenv}"
    else
      sed -i -e "${replace}" "${dotenv}"
    fi
  else
    echo "${name}=${value}" >>"${dotenv}"
  fi
}

# shellcheck disable=SC2317
function cleanup() {
  if [[ ${CI:-} == true ]]; then
    echo "Shutting down..."
    docker compose down --volumes
  fi
}

trap cleanup ERR

echo "Starting the node..."
docker compose up --remove-orphans -d

echo
echo "Waiting for the node to generate the first block..."
if ! curl --retry 30 -f --retry-all-errors --retry-delay 1 -s "http://localhost:26657/block?height=1" | jq -e '.error == null' >/dev/null; then
  docker compose logs node --tail 300
  error "node failed to start!"
fi
ok "node started"

echo
echo "Preparing test wallets..."
ALICE_MNEMONIC="culture ten bar chase cross obey margin owner recycle trim valid logic forward mixed render have patrol dynamic tuition choose thing salute inside blossom"
dotenv-add ALICE_MNEMONIC "${ALICE_MNEMONIC}"

declare -a alice_addresses=()
for i in {0..4}; do
  key_name="alice-$i"
  echo
  echo "[‣] $key_name"
  if ! archwayd keys list --output json | jq --arg key_name "${key_name}" -e '.[] | select(.name == $key_name) | any' >/dev/null; then
    docker compose exec -e ALICE_MNEMONIC="${ALICE_MNEMONIC}" node \
      sh -c "echo \$ALICE_MNEMONIC | archwayd keys add --recover --index $i $key_name"
  fi

  address="$(archwayd keys show -a "${key_name}")"

  if archwayd q bank balances "${address}" | jq -e '.balances[0].amount // "0" | tonumber < 1000000000000' >/dev/null; then
    "${SCRIPT_DIR}"/faucet.sh "${address}"
  fi

  alice_addresses+=("${address}")
  ok "account created: ${address}"
done

echo
echo "Deploying voter contract..."
# Source: https://github.com/archway-network/archway/tree/main/contracts/go/voter

denom="$(archwayd q staking params | jq -r '.bond_denom')"
dotenv-add DENOM "${denom}"

echo
echo "[‣] storing..."
store_result="$(store-contract voter)"
IFS=, read -r code_id checksum tx_hash < <(jq -r '"\(.code_id),\(.checksum),\(.tx_hash)"' <<<"${store_result}")
if [[ -z "${tx_hash}" ]]; then
  echo "   contract already stored!"
else
  echo "   tx: ${tx_hash}"
fi
echo "   code id: ${code_id}"
echo "   checksum: ${checksum}"

dotenv-add VOTER_CONTRACT_CODE_ID "$code_id"
ok "contract stored"

echo
echo "[‣] instantiating..."

declare -a contract_addresses=()
for i in "${!alice_addresses[@]}"; do
  label="voter-$i"

  echo " • ${label}..."
  instantiate_result="$(
    instantiate-contract \
      "${label}" \
      "${alice_addresses[i]}" \
      "${code_id}" \
      "${checksum}" \
      "${denom}"
  )"
  IFS=, read -r contract_address tx_hash < <(jq -r '"\(.contract_address),\(.tx_hash)"' <<<"${instantiate_result}")
  if [[ -z "${tx_hash}" ]]; then
    echo "   contract already instantiated!"
  else
    echo "   tx: ${tx_hash}"
  fi
  echo "   address: ${contract_address}"

  contract_addresses[i]="${contract_address}"
done

dotenv-add "VOTER_CONTRACT_ADDRESSES" "${contract_addresses[*]}"
ok "contracts instantiated"

echo
echo "[‣] setting metadata..."
for i in {0..3}; do
  echo " • voter-$i"
  tx_result="$(
    archwayd-tx rewards set-contract-metadata \
      --from "${alice_addresses[i]}" \
      --owner-address "${alice_addresses[i]}" \
      --rewards-address "${alice_addresses[i]}" \
      "${contract_addresses[i]}"
  )"
  validate-tx "$tx_result" "failed to set metadata!"
  tx_hash="$(jq -r '.txhash' <<<"${tx_result}")"
  echo "   tx: ${tx_hash}"
done
ok "contract metadata set"

echo
echo "[‣] setting contract premium..."
for i in {0..1}; do
  echo " • voter-$i..."
  tx_result="$(
    archwayd-tx rewards set-flat-fee \
      --from "${alice_addresses[i]}" \
      "${contract_addresses[i]}" \
      "1000${denom}"
  )"
  validate-tx "$tx_result" "failed to set flat fee!"
  tx_hash="$(jq -r '.txhash' <<<"${tx_result}")"
  echo "   tx: ${tx_hash}"
done
ok "contract premium set"

echo
echo "[‣] generating rewards..."
i=0
echo " • voter-$i..."
execute_result="$(
  execute-contract \
    "${alice_addresses[i]}" \
    "${contract_addresses[i]}" \
    "$(
      jq --null-input \
        '{
          new_voting: {
            name: "test_voting_rewards",
            vote_options: ["yes", "no"],
            duration: 10000000000,
          }
        }'
    )" \
    "10${denom}"
)"
tx_hash="$(jq -r '.tx_hash' <<<"${execute_result}")"
echo "   tx: ${tx_hash}"
