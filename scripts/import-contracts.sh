#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

curl -sSfL 'https://github.com/archway-network/archway/raw/main/contracts/go/voter/code.wasm' \
  -o ${SCRIPT_DIR}/contracts/voter.wasm
