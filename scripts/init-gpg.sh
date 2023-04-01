#!/bin/sh

echo "show keys"
gpg_keys="$( find /home/runner/.password-store/ -name \*.gpg | xargs -n 1 gpg )"
echo "my keys ${gpg_keys}"

gpg_pub="$( echo ${gpg_keys} | sed -n -e 's/.*      //p' )"
echo "my pub ${gpg_pub}"

pass init "${gpg_pub}"