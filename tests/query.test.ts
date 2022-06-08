import { Coin } from "@cosmjs/proto-signing";
import { expect } from "chai";
import { CreateArchwayClient, CreateArchwaySigningClient, CreateReadOnlyClientTestnet } from "../src/connect";
import {generateWallet, extractAddress, importWallet, CreateSigningClientTestnet, } from "../src/index"

// Testing sending tokens from one account to another
// Keep constant wallet with constant balance 
test('test', async () => {
    let client = await CreateArchwayClient();
    let balance_final = await client.getBalance("archway1hymxhxrkyv933chdfwzkm450ytxcft33ekr8w9");
    console.log(balance_final)
    expect(balance_final).eql({denom: "uconst", amount: 692053})
  })
