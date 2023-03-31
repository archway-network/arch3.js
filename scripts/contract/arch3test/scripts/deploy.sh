#!/bin/sh

# set -euo pipefail

echo "Start deployment of contract"
deployer_addr="${1:-deployer}"
echo "deployer: ${deployer_addr}"

echo "Start Build"
archway build --optimize
pwd
mv "../artifacts/arch3test-aarch64.wasm" "../artifacts/arch3test.wasm"


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