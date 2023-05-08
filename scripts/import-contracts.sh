#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

ARCHWAY_BRANCH="${ARCHWAY_BRANCH:-main}"

curl -sSfL "https://github.com/archway-network/archway/raw/${ARCHWAY_BRANCH}/contracts/go/voter/code.wasm" \
  -o "${SCRIPT_DIR}/contracts/voter.wasm"
