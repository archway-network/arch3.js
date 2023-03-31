#!/bin/sh

# set -euo pipefail

echo "Start deployment of contract"
deployer_addr="${1:-deployer}"
echo "deployer: ${deployer_addr}"

echo "Start Build"
pwd
archway build --optimize

cd ../artifacts
ls -la
cd ../scripts
pwd

archway accounts list

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