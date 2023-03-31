#!/bin/sh

# set -euo pipefail

echo "Start deployment of contract"
deployer_name="${1:-deployer}"
# deployer_addr=$(archwayd keys show -a "${deployer_name}")
echo "deployer: ${deployer_name}"
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

echo "Start Build"
archway build --optimize
mv "$SCRIPT_DIR/../artifacts/arch3test-aarch64.wasm" "$SCRIPT_DIR/../artifacts/arch3test.wasm"


echo "Store"
archway store --no-confirm --from "$deployer_name" --no-verify


echo "Instantiating the contract"
archway instantiate \
  --default-label \
  --no-confirm \
  --from "${deployer_name}" \
  --admin-address "${deployer_name}" \
  --args '{"count":0}'


echo "Set metadata"
archway metadata \
  --no-confirm \
  --from "${deployer_name}" \
  --owner-address "${deployer_name}" \
  --rewards-address "${deployer_name}"