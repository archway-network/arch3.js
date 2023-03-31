#!/bin/bash

set -euo pipefail

deployer_name="${1:-deployer}"

#SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd scripts/contract/arch3test/scripts
sh deploy.sh "${deployer_name}"