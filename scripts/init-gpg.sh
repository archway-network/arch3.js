#!/bin/sh

echo "show keys"

gpg --batch --passphrase '' --quick-generate-key test@test.com default default

gpg_key="$( gpg --list-keys | sed -n '/pub/{n;p;}' | sed -n 's/.*      //p' )"
echo "my key ${gpg_key}"

pass init "${gpg_key}"
