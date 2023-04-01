#!/usr/bin/expect -f
  
set timeout -1

puts "Start create testing account"

DEVX_MNEMONIC="${DEVX_MNEMONIC:-}"

archwayd config chain-id "local-1"

spawn archwayd keys add --recover ""

expect "Enter your bip39 mnemonic"
send -- "${DEVX_MNEMONIC}\r"

expect eof

archwayd config
archwayd keys list