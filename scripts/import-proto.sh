#!/bin/bash

set -euo pipefail

ARCHWAY_BRANCH="${ARCHWAY_BRANCH:-main}"

TMPDIR="$(mktemp -d)"
git clone https://github.com/archway-network/archway --depth=1 --single-branch -b "${ARCHWAY_BRANCH}" "$TMPDIR"

PROTO_ROOT="$(git rev-parse --show-toplevel)/packages/arch3-proto"
[ -d "$PROTO_ROOT/proto" ] && rm -rf "$PROTO_ROOT/proto"

cp -r "$TMPDIR/proto" "$PROTO_ROOT"
cp -r "$TMPDIR/third_party/proto" "$PROTO_ROOT"

cat <<EOF

$(tput setaf 2)✔$(tput sgr0) Proto files imported from archway-network/archway@${ARCHWAY_BRANCH}.

$(tput setaf 6)To re-generate the client files, run the codegen script:
$(tput setaf 7)
yarn workspace @archwayhq/arch3-proto codegen
$(tput sgr0)
$(tput setaf 6)After reviewing and testing, commit the changes using:
$(tput setaf 7)
git add packages/arch3-proto/{generated,proto}
git commit -m "build(arch3-proto): update and generate files"
$(tput sgr0)
EOF
