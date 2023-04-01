#!/usr/bin/expect -f
  
set timeout -1

DEVX_MNEMONIC="${DEVX_MNEMONIC:-}"

spawn archwayd keys add --recover ""

expect "Enter your bip39 mnemonic"
send -- "${DEVX_MNEMONIC}\r"

expect eof

# tester_txt="$( archwayd keys add "tester2" )"
# echo "tester_txt ${tester_txt}"
# tester_addr="$( echo "${tester_txt}" | sed -n -e 's/.*address://p' )"
# tester_mnemonic="$( echo ${tester_txt} | sed '3q;d' )"
# echo "tester_addr: ${tester_addr}"
# echo "tester_mnemonic: ${tester_mnemonic}"