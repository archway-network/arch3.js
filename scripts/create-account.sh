#!/usr/bin/expect -f
  
set timeout -1

puts "Start create testing account"

CHAIN_ID="${CHAIN_ID:-local-1}"
DEVX_MNEMONIC="${DEVX_MNEMONIC:-}"

archwayd config chain-id "${CHAIN_ID}"

spawn archwayd keys add --recover ""

expect "Enter your bip39 mnemonic"
send -- "${DEVX_MNEMONIC}\r"

expect eof

archwayd config
archwayd keys list