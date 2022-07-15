#!/bin/bash
# Copies the proto from Archway Protocol Repo
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
ARCHWAY_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
COSMOS_SDK_REF=${COSMOS_SDK_REF:-"master"}
SUFFIX=${COSMOS_SDK_REF}

[[ $SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && SUFFIX=${SUFFIX#v}

mkdir -p "$ARCHWAY_DIR"

wget -qO "$ZIP_FILE" ""
unzip "$ZIP_FILE" "*.proto" -d "$ARCHWAY_DIR"
mv "$ARCHWAY_SDK_DIR-$SUFFIX" "$ARCHWAY_SDK_DIR"
rm "$ZIP_FILE"

