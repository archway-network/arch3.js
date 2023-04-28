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
  echo "OK: $1"
}

function error() {
  echo "Error: $1" >&2
  exit 1
}

function archwayd() {
  docker compose exec node archwayd "$@"
}

function archwayd-tx() {
  archwayd tx "$@" \
    --from validator \
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
  eval $(echo "${TX_RESULT}" | jq -r '.code == 0') || {
    jq . "${TX_RESULT}"
    error "${error_message}"
  }
}

function gas-prices-estimate() {
  local contract_address="${1:-}"
  archwayd q rewards estimate-fees 1 ${contract_address} --output json |
    jq -r '.gas_unit_price | (.amount + .denom)'
}

function dotenv-add() {
  local name="${1:-}"
  local value="${2:-}"

  local dotenv="${SCRIPT_DIR}/../.env"

  [[ -f ${dotenv} ]] || touch ${dotenv}

  if grep -qF -- "${name}=" ${dotenv}; then
    replace="s/^${name}=.*/${name}=${value}/g"
    if [[ "$OSTYPE" =~ ^darwin ]]; then
      sed -i '' -e "${replace}" ${dotenv}
    else
      sed -i -e "${replace}" ${dotenv}
    fi
  else
    echo "${name}=${value}" >>${dotenv}
  fi
}

function cleanup() {
  if [[ ${CI:-} == true ]]; then
    echo "Shutting down..."
    docker compose down --volumes
  fi
}

trap cleanup ERR

echo "Starting the node..."
docker compose up --remove-orphans -d

echo "Waiting for the node to generate the first block..."
eval $(
  curl --retry 30 -f --retry-all-errors --retry-delay 1 -s "http://localhost:26657/block?height=1" |
    jq -r '.error == null'
) || {
  docker compose logs --tail 100
  error "node failed to start!"
}
ok "node started"

VALIDATOR_ADDR="$(archwayd keys show validator -a)"
DENOM="$(archwayd q staking params | jq -r '.bond_denom')"

echo
echo "Deploying contracts..."

echo
echo "-> voter"
# Source: https://github.com/archway-network/archway/tree/main/contracts/go/voter

WASM="contracts/voter.wasm"

SALT="$(echo -n "testing" | xxd -ps)"

INSTANTIATE_PARAMS="$(
  jq --null-input \
    --arg owner_addr "${VALIDATOR_ADDR}" \
    --arg new_voting_cost "10${DENOM}" \
    --arg vote_cost "1${DENOM}" \
    '{
      params: {
        owner_addr: $owner_addr,
        new_voting_cost: $new_voting_cost,
        vote_cost: $vote_cost,
        ibc_send_timeout: 10000000000
      }
    }'
)"

VOTER_CONTRACT_ADDRESS="$(
  archwayd q wasm build-address \
    "$(sha256sum "${SCRIPT_DIR}/${WASM}" | awk '{ print $1 }')" \
    "${VALIDATOR_ADDR}" \
    "${SALT}" \
    "${INSTANTIATE_PARAMS}"
)"
dotenv-add VOTER_CONTRACT_ADDRESS "$VOTER_CONTRACT_ADDRESS"

CONTRACT_INFO="$(archwayd q wasm contract "${VOTER_CONTRACT_ADDRESS}" --output json 2>/dev/null || echo '{}')"
CONTRACT_INSTANTIATED="$(echo "${CONTRACT_INFO}" | jq -r '.contract_info != null')"

if [[ ${CONTRACT_INSTANTIATED} == true ]]; then
  echo "! contract already stored and instantiated"
  CONTRACT_CODE_ID="$(echo "${CONTRACT_INFO}" | jq -r '.contract_info.code_id')"
  echo "  code id: ${CONTRACT_CODE_ID}"
  echo "  contract address: ${VOTER_CONTRACT_ADDRESS}"
else
  echo "- storing..."
  TX_RESULT="$(
    archwayd-tx wasm store /"${WASM}"
  )"
  validate-tx "$TX_RESULT" "failed to store contract!"
  TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
  CONTRACT_CODE_ID="$(echo $TX_RESULT | jq -r '.logs[].events[] | select(.type == "store_code") | .attributes[] | select(.key == "code_id") | .value')"
  echo "  tx: ${TX_HASH}"
  echo "  code id: ${CONTRACT_CODE_ID}"

  echo "- instantiating..."
  TX_RESULT="$(
    archwayd-tx wasm instantiate2 \
      "${CONTRACT_CODE_ID}" \
      "${INSTANTIATE_PARAMS}" \
      "${SALT}" \
      --fix-msg \
      --label "voter" \
      --admin "${VALIDATOR_ADDR}"
  )"
  validate-tx "$TX_RESULT" "failed to instantiate contract!"
  TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
  TX_CONTRACT_ADDRESS="$(echo $TX_RESULT | jq -r '.logs[].events[] | select(.type == "instantiate") | .attributes[] | select(.key == "_contract_address") | .value')"
  [[ "${VOTER_CONTRACT_ADDRESS}" == "${TX_CONTRACT_ADDRESS}" ]] || error "contract address mismatch: expected ${VOTER_CONTRACT_ADDRESS}, got ${TX_CONTRACT_ADDRESS}"
  echo "  tx: ${TX_HASH}"
  echo "  contract address: ${VOTER_CONTRACT_ADDRESS}"
fi

echo "- setting metadata..."
TX_RESULT="$(
  archwayd-tx rewards set-contract-metadata \
    "${VOTER_CONTRACT_ADDRESS}" \
    --owner-address "${VALIDATOR_ADDR}" \
    --rewards-address "${VALIDATOR_ADDR}"
)"
validate-tx "$TX_RESULT" "failed to set metadata!"
TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
echo "  tx: ${TX_HASH}"

echo "- setting contract premium..."
TX_RESULT="$(
  archwayd-tx rewards set-flat-fee \
    "${VOTER_CONTRACT_ADDRESS}" \
    "100${DENOM}"
)"
validate-tx "$TX_RESULT" "failed to set flat fee!"
TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
echo "  tx: ${TX_HASH}"

ok "voter contract deployed!"
