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

function docker-exec-archwayd() {
  docker compose exec node archwayd "$@"
}

function docker-run-archwayd() {
  docker compose run --rm -it \
    --volume ${SCRIPT_DIR}/contracts:/contracts:ro \
    node "$@"
}

function docker-run-archwayd-tx() {
  docker-run-archwayd tx "$@" \
    --from validator \
    --gas auto \
    --gas-prices "$(gas-prices-estimate)" \
    --gas-adjustment 1.3 \
    --broadcast-mode block \
    --output json \
    --yes
}

function gas-prices-estimate() {
  local contract_address="${1:-}"
  docker-exec-archwayd q rewards estimate-fees 1 ${contract_address} --output json |
    jq -r '.gas_unit_price | (.amount + .denom)'
}

function cleanup() {
  if [[ ${CI:-} == true ]]; then
    docker compose down --volumes
  fi
}

trap cleanup EXIT

docker compose up --remove-orphans -d

echo "Waiting for the node to generate the first block..."
eval $(
  curl --retry 30 -f --retry-all-errors --retry-delay 1 -s "http://localhost:26657/block?height=1" |
    jq -er '.error == null'
) || {
  docker compose logs --tail 100
  docker compose down --volumes
  error "node failed to start!"
}
ok "node started"

VALIDATOR_ADDR="$(docker-exec-archwayd keys show validator -a)"
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

CONTRACT_ADDRESS="$(
  docker-exec-archwayd q wasm build-address \
    "$(sha256sum "${SCRIPT_DIR}/${WASM}" | awk '{ print $1 }')" \
    "${VALIDATOR_ADDR}" \
    "${SALT}" \
    "${INSTANTIATE_PARAMS}"
)"

CONTRACT_LABEL="validator-voter-0.4.0"

CONTRACT_INFO="$(
  docker-exec-archwayd q wasm contract "${CONTRACT_ADDRESS}" --output json
)"
CONTRACT_INSTANTIATED="$(
  echo "${CONTRACT_INFO}" |
    jq -er --arg contract_label "${CONTRACT_LABEL}" '.contract_info.label == $contract_label'
)"

if [[ ${CONTRACT_INSTANTIATED} == true ]]; then
  echo "- already stored and instantiated"
  CONTRACT_CODE_ID="$(echo "${CONTRACT_INFO}" | jq -r '.contract_info.code_id')"
  echo "  code id: ${CONTRACT_CODE_ID}"
  echo "  contract address: ${CONTRACT_ADDRESS}"
else
  echo "- storing..."
  TX_RESULT="$(
    docker-run-archwayd-tx wasm store /"${WASM}"
  )"
  eval $(echo $TX_RESULT | jq -er '.code == 0') || error "failed to store contract!"
  TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
  CONTRACT_CODE_ID="$(echo $TX_RESULT | jq -r '.logs[].events[] | select(.type == "store_code") | .attributes[] | select(.key == "code_id") | .value')"
  echo "  tx: ${TX_HASH}"
  echo "  code id: ${CONTRACT_CODE_ID}"

  echo "- instantiating..."
  TX_RESULT="$(
    docker-run-archwayd-tx wasm instantiate2 \
      "${CONTRACT_CODE_ID}" \
      "${INSTANTIATE_PARAMS}" \
      "${SALT}" \
      --fix-msg \
      --label "${CONTRACT_LABEL}" \
      --admin "${VALIDATOR_ADDR}"
  )"
  eval $(echo $TX_RESULT | jq -er '.code == 0') || error "failed to instantiate contract!"
  TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
  TX_CONTRACT_ADDRESS="$(echo $TX_RESULT | jq -r '.logs[].events[] | select(.type == "instantiate") | .attributes[] | select(.key == "_contract_address") | .value')"
  [[ "${CONTRACT_ADDRESS}" == "${TX_CONTRACT_ADDRESS}" ]] || error "contract address mismatch: expected ${CONTRACT_ADDRESS}, got ${TX_CONTRACT_ADDRESS}"
  echo "  tx: ${TX_HASH}"
  echo "  contract address: ${CONTRACT_ADDRESS}"
fi

echo "- setting metadata..."
TX_RESULT="$(
  docker-run-archwayd-tx rewards set-contract-metadata \
    "${CONTRACT_ADDRESS}" \
    --owner-address "${VALIDATOR_ADDR}" \
    --rewards-address "${VALIDATOR_ADDR}"
)"
eval $(echo $TX_RESULT | jq -er '.code == 0') || error "failed to set metadata!"
TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
echo "  tx: ${TX_HASH}"

echo "- setting contract premium..."
TX_RESULT="$(
  docker-run-archwayd-tx rewards set-flat-fee \
    "${CONTRACT_ADDRESS}" \
    "100${DENOM}"
)"
eval $(echo $TX_RESULT | jq -er '.code == 0') || error "failed to set flat fee!"
TX_HASH="$(echo $TX_RESULT | jq -r '.txhash')"
echo "  tx: ${TX_HASH}"

ok "voter contract deployed!"
