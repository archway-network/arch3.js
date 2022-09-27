#!/usr/bin/env sh

set -eu

TMPDIR="$(mktemp -d)"
git clone https://github.com/archway-network/archway --depth=1 --single-branch "$TMPDIR"

REPO_ROOT="$(git rev-parse --show-toplevel)"
[ -d "$REPO_ROOT/proto" ] && rm -rf "$REPO_ROOT/proto"
cp -r "$TMPDIR/proto" "$REPO_ROOT"
git add "$REPO_ROOT/proto"
git commit -m "build: update proto files"
