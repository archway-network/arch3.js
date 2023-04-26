#!/usr/bin/env sh

set -eu

TMPDIR="$(mktemp -d)"
git clone https://github.com/archway-network/archway --depth=1 --single-branch "$TMPDIR"

PROTO_ROOT="$(git rev-parse --show-toplevel)/packages/arch3-proto"
[ -d "$PROTO_ROOT/proto" ] && rm -rf "$PROTO_ROOT/proto"
cp -r "$TMPDIR/proto" "$PROTO_ROOT"
cp -r "$TMPDIR/third_party/proto" "$PROTO_ROOT"
git add "$PROTO_ROOT/proto"
git commit -m "build: update proto files"
