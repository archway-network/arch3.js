#!/usr/bin/expect -f
  
set timeout -1

puts "Start create testing account"

spawn archwayd keys add --recover ""

expect "Enter your bip39 mnemonic"
send -- "$env(DEVX_MNEMONIC)\r"

expect eof
