#!/bin/sh

# set -euo pipefail

echo "Start deployment of contract"
deployer_addr="${1:-deployer}"
echo "deployer: ${deployer_addr}"

echo "Start Build"
pwd
archway build --optimize

cd ../artifacts
current_path="$(pwd)"
echo "pwd: ${current_path}"

mv -v arch3test-aarch64.wasm arch3test.wasm

cd ../scripts
current_path="$(pwd)"
echo "pwd: ${current_path}"


echo "Store"
archway store --no-confirm --from "$deployer_addr" --no-verify


echo "Instantiating the contract"
archway instantiate \
  --default-label \
  --no-confirm \
  --from "${deployer_addr}" \
  --admin-address "${deployer_addr}" \
  --args '{"count":0}'


echo "Set metadata"
archway metadata \
  --no-confirm \
  --from "${deployer_addr}" \
  --owner-address "${deployer_addr}" \
  --rewards-address "${deployer_addr}"


contract_addr="$( archway history | sed -n -e 's/.*contract://p' )"
echo "${contract_addr}"
echo "{CONTRACT_ADDRESS}=${contract_addr}" >> $GITHUB_ENV