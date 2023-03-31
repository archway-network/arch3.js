#!/bin/sh

# set -euo pipefail

deployer_name="${1:-deployer}"

cd scripts/contract/arch3test/scripts
sh deploy.sh "${deployer_name}"