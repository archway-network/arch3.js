#!/bin/sh

# set -euo pipefail

deployer_addr="${1:-deployer}"

cd scripts/contract/arch3test/scripts
sh deploy-gh.sh "${deployer_addr}"