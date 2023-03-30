#!/bin/bash

# set -euo pipefail

SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
[[ -f ${SCRIPT_DIR}/../local-node.env ]] && source ${SCRIPT_DIR}/../local-node.env || true

CHAIN_ID="${CHAIN_ID:-local-1}"

alias gas-prices-estimate="archwayd q rewards estimate-fees 1 --output json | jq -r '.gas_unit_price | (.amount + .denom)'"

function validate_tx() {
  local tx="$(archwayd tx ${@} \
    --chain-id "${CHAIN_ID}" \
    --gas-prices $(gas-prices-estimate) \
    --gas-adjustment 1.5 \
    --broadcast-mode block \
    --output json \
    --yes)"

  echo "${tx}" | jq -re '.code == 0' &> /dev/null || exit 1
}

echo "Starting / Restarting node..."
docker compose down --remove-orphans --volumes
docker compose up -d

echo "Waiting for node to start and generate first block..."
curl --retry 15 -f --retry-all-errors --retry-delay 6 -s "http://localhost:26657/block?height=1" | \
  jq '.error == null' && \
  echo "Node started" || {
    echo "Node failed to start."
    exit 1
}

VALIDATOR_ADDRESS="$(docker compose exec node archwayd keys show validator -a --bech val)"
echo "Delegating to validator ${VALIDATOR_ADDRESS}..."

for account in $(echo "${GENESIS_ACCOUNTS}" | awk -F',' '{ for( i=1; i<=NF; i++ ) print $i }'); do
  [[ -n "${account}" ]] || break
  
  BALANCE="$(archwayd q bank balances "${account}" --output json | jq '.balances[0]')"
  BALANCE_AMOUNT=$(echo "${BALANCE}" | jq -r '.amount')
  BALANCE_DENOM=$(echo "${BALANCE}" | jq -r '.denom')
  STAKING_AMOUNT=$(( BALANCE_AMOUNT / 2 ))

  echo "Delegating ${STAKING_AMOUNT}${BALANCE_DENOM} from ${account}..."
  validate_tx staking delegate \
    "${VALIDATOR_ADDRESS}" \
    "${STAKING_AMOUNT}${BALANCE_DENOM}" \
    --from "${account}"
done
echo "Delegations done"

archwayd q staking delegations-to "${VALIDATOR_ADDRESS}"
