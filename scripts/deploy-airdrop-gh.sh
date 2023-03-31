#!/bin/bash

# set -euo pipefail

echo "setup variables"

cd scripts/tmp/archway-airdrops
echo "current $(pwd)"

echo "switch to local network"
archway network -m -e local

echo "start deployment of contract"
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

ARCHWAY_CLI_CONFIG="$SCRIPT_DIR/../config.json"

denom="$(jq -r .network.fees.feeDenom "${ARCHWAY_CLI_CONFIG}")"
network_type="$(jq -r .network.urls.faucets[0] "${ARCHWAY_CLI_CONFIG}")"

deployer_name="${1:-deployer}"
deployer_addr=$(archwayd keys show -a "${deployer_name}")

echo "Build"
archway build --optimize
mv artifacts/genesis-aarch64.wasm artifacts/genesis.wasm

echo "Use faucet to get coins for deployer wallet"
if [[ "$network_type" == "testnet" ]]; then
  faucet_url="$(jq -r .network.urls.faucets[0] "${ARCHWAY_CLI_CONFIG}")"
  echo "Requesting coins from faucet: ${faucet_url}"
  jq --null-input \
    --arg address "${deployer_addr}" \
    --arg amount "5000000${denom}" \
    '{ address: $address, coins: [$amount] }' | curl "${faucet_url}"
fi

echo "Store"
archway store --no-confirm --from "$deployer_name" --no-verify

# Instantiate
echo "Instantiating the contract..."

instantiate="$(jq -r . "${SCRIPT_DIR}/tx/instantiate.json")"
archway instantiate \
  --default-label \
  --no-confirm \
  --from "${deployer_name}" \
  --admin-address "${deployer_addr}" \
  --args "${instantiate}"

# Add addresses elegible
echo "Adding addresses to the airdrop..."

add_claims="$(jq -r . "${SCRIPT_DIR}/tx/add_claims.json")"
total_amount="$(echo "${add_claims}" | jq -r '.admin.add_claims.addresses | map_values(tonumber) | add')"
total_airdrop_amount="${total_amount}${denom}"
echo "Total airdrop amount: ${total_airdrop_amount}"

archway tx \
  --no-confirm \
  --from "${deployer_name}" \
  --args "${add_claims}" \
  --flags --amount "${total_airdrop_amount}"

# Set ArchID contract and enable airdrop
echo "Configuring ArchID and enabling the claims..."

update_airdrop_action_params="$(jq -r . ${SCRIPT_DIR}/tx/update_airdrop_action_params.json)"
archway tx \
  --no-confirm \
  --from "${deployer_name}" \
  --args "${update_airdrop_action_params}"

toggle_airdrop_claims="$(jq -r . ${SCRIPT_DIR}/tx/toggle_airdrop_claims.json)"
archway tx \
  --no-confirm \
  --from "${deployer_name}" \
  --args "${toggle_airdrop_claims}"

# Query
archway query contract-state smart -a '{ "config": {} }'
archway query contract-state smart -a '{ "airdrop_actions": {} }'
