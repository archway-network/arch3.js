#!/bin/sh
#
# This script should be executed from the Docker container only.
# It will initialize the node if it's not configured yet.
#

set -euo pipefail

echo "Logging from docker-entrypoint" > log/docker-entrypoint.logging

ARCHWAY_HOME="${ARCHWAY_HOME:-$HOME/.archway}"

CHAIN_ID="${CHAIN_ID:-local-1}"
DENOM="${DENOM:-uarch}"

MONIKER="${MONIKER:-docker-node}"
VALIDATOR_MNEMONIC="${VALIDATOR_MNEMONIC:-}"

GENESIS_ACCOUNTS="${GENESIS_ACCOUNTS:-}"

alias archwayd="archwayd --home ${ARCHWAY_HOME}"


# Check if required tools are installed
command -v curl > /dev/null 2>&1 && command -v jq > /dev/null 2>&1 && command -v sponge > /dev/null 2>&1 || {
  apk add --no-cache ca-certificates curl jq moreutils
}
command -v dasel > /dev/null 2>&1 || {
  bin_url="$(curl -sSLf https://api.github.com/repos/tomwright/dasel/releases/latest | grep browser_download_url | grep linux_amd64 | grep -v .gz | cut -d\" -f 4)"
  curl -sSLf "${bin_url}" -L -o /usr/local/bin/dasel && chmod +x /usr/local/bin/dasel
}

if [[ ! -f "${ARCHWAY_HOME}/config/genesis.json" ]]; then
  echo "Initializing the node ${MONIKER} on chain ${CHAIN_ID}..."
  archwayd init --chain-id "${CHAIN_ID}" "${MONIKER}" | jq .

  archwayd config chain-id "${CHAIN_ID}"
  archwayd config keyring-backend test
  archwayd config output json

  echo "Creating validator key..."
  echo "${VALIDATOR_MNEMONIC}" | archwayd keys add validator --recover

  echo "Configuring genesis accounts and total supply..."
  TOTAL_SUPPLY_AMOUNT=1000000000000000

  VALIDATOR_ACCOUNT_BALANCE=$(( TOTAL_SUPPLY_AMOUNT / 3 ))
  echo "Adding validator account with ${VALIDATOR_ACCOUNT_BALANCE}${DENOM}"
  archwayd add-genesis-account validator "${VALIDATOR_ACCOUNT_BALANCE}${DENOM}"

  ADDRESSES=0
  GENESIS_ACCOUNTS_BALANCE=$(( TOTAL_SUPPLY_AMOUNT / 10 ))
  for account in $(echo "${GENESIS_ACCOUNTS}" | awk -F',' '{ for( i=1; i<=NF; i++ ) print $i }'); do
    [[ -n "${account}" ]] || break
    echo "Adding account ${account} with ${GENESIS_ACCOUNTS_BALANCE}${DENOM}"
    archwayd add-genesis-account "${account}" "${GENESIS_ACCOUNTS_BALANCE}${DENOM}"
    ADDRESSES=$(( ADDRESSES + 1 ))
  done

  REMAINING_SUPPLY_AMOUNT=$(( TOTAL_SUPPLY_AMOUNT - VALIDATOR_ACCOUNT_BALANCE - (ADDRESSES * GENESIS_ACCOUNTS_BALANCE) ))
  if [[ ${REMAINING_SUPPLY_AMOUNT} -gt 0 ]]; then
    echo "Setting up treasury account with ${REMAINING_SUPPLY_AMOUNT}${DENOM}"
    archwayd keys add treasury
    archwayd add-genesis-account treasury "${REMAINING_SUPPLY_AMOUNT}${DENOM}"
  fi

  ACTUAL_SUPPLY_AMOUNT=$(jq -r '.app_state.bank.supply[0].amount' ${ARCHWAY_HOME}/config/genesis.json)
  [[ ${ACTUAL_SUPPLY_AMOUNT} -eq ${TOTAL_SUPPLY_AMOUNT} ]] || {
    echo "Genesis supply amount of ${ACTUAL_SUPPLY_AMOUNT}${DENOM} is not equal to ${TOTAL_SUPPLY_AMOUNT}${DENOM}"
    exit 1
  }

  echo "Defining genesis parameters..."
  GENESIS_PARAMS='
    .app_state.crisis.constant_fee.denom = $denom |
    .app_state.gov.deposit_params.min_deposit[0].denom = $denom |
    .app_state.gov.deposit_params.min_deposit[0].amount = "1000" |
    .app_state.gov.deposit_params.max_deposit_period = "10s" |
    .app_state.gov.voting_params.voting_period = "2h" |
    .app_state.mint.params.mint_denom = $denom |
    .app_state.mint.params.inflation_max = "0.100000000000000000" |
    .app_state.mint.params.inflation_min = "0.100000000000000000" |
    .app_state.mint.params.blocks_per_year = "31557600" |
    .app_state.rewards.min_consensus_fee.denom = $denom |
    .app_state.staking.params.bond_denom = $denom |
    .consensus_params.block.max_gas = "10000000"
  '
  jq \
    --arg denom "${DENOM}" \
    "${GENESIS_PARAMS}" \
    ${ARCHWAY_HOME}/config/genesis.json | \
    sponge ${ARCHWAY_HOME}/config/genesis.json

  echo "Signing the genesis tx..."
  DELEGATION_AMOUNT=$(( VALIDATOR_ACCOUNT_BALANCE / 2 ))
  archwayd gentx validator "${DELEGATION_AMOUNT}${DENOM}" --chain-id ${CHAIN_ID}

  archwayd collect-gentxs
  archwayd validate-genesis

  cat ${ARCHWAY_HOME}/config/app.toml | \
    dasel put -r toml -t string -v "0.0001${DENOM}" 'minimum-gas-prices' | \
    dasel put -r toml -t bool -v true 'api.enable' | \
    dasel put -r toml -t bool -v true 'grpc-web.enable-unsafe-cors' | \
    sponge ${ARCHWAY_HOME}/config/app.toml

  cat ${ARCHWAY_HOME}/config/config.toml | \
    dasel put -r toml -t string -v 'tcp://0.0.0.0:26658' 'proxy_app' | \
    dasel put -r toml -t string -v 'tcp://0.0.0.0:26657' 'rpc.laddr' | \
    dasel put -r toml -t string -v '*' 'rpc.cors_allowed_origins.[]' | \
    dasel put -r toml -t bool -v true 'rpc.unsafe' | \
    sponge ${ARCHWAY_HOME}/config/config.toml
fi

archwayd "$@"
