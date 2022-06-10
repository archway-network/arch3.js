import { Coin } from "@cosmjs/proto-signing";
import { expect } from "chai";
import { CreateArchwaySigningClient } from "../src/connect";
import {generateWallet, extractAddress, importWallet } from "../src/index"

// Testing that generateWallet function actually generates a wallet
test('test', async () => {
  let wallet = await generateWallet();
      let address_wallet = await extractAddress(wallet);
      let [{address}] = await wallet.getAccounts();
      expect(address).equal(address_wallet)
})


// Import of an already created archway wallet and check balance 
// (ordering tokens from testnet faucet)
// Expected balance changes after each transaction so we should keep a constant testnet wallet for this case
test('test', async () => {
  let wallet = await importWallet("change vocal student disorder quiz refuse fatigue busy deny evoke polar build grace add planet cinnamon axis matrix frequent glare dutch odor patch pair");
    let client = await CreateArchwaySigningClient(wallet);
    let balance = await client.getBalance();
    let expected_balance: Coin = {denom: 'uconst', amount: '1000000'};
    expect(balance).eql(expected_balance);
})


