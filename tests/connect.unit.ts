import { Coin } from "@cosmjs/proto-signing";
import { expect } from "chai";
import { CreateArchwaySigningClient } from "../src/connect";
import {generateWallet, extractAddress, importWallet, CreateSigningClientTestnet, } from "../src/index"

// Testing that generateWallet function actually generates a wallet
describe('generate a random wallet and check address', function() {
    it('generateWallet', async function() {
      let wallet = await generateWallet();
      // Remove comments to be able to view what wallet structure returns
      // console.log(wallet)
      let address_wallet = await extractAddress(wallet);
      // Remove comments to see Archway address
      // console.log(address_wallet)
      let [{address}] = await wallet.getAccounts();
      expect(address).equal(address_wallet)
    }); 
  });

// Import of an already created archway wallet and check balance 
// (ordering tokens from testnet faucet)
// Expected balance changes after each transaction so we should keep a constant testnet wallet for this case
describe('import of wallet and check balance', function() {
  it('importAndCheck', async function() {
    let wallet = await importWallet("worth pencil mountain plug talk wink discover demise guess dish comic cloud alley trend game nurse era return canvas dry word primary turtle tattoo");
    let client = await CreateArchwaySigningClient(wallet);
    let balance = await client.getBalance();
    console.log(balance)
    let expected_balance: Coin = {denom: 'uconst', amount: '1000000'};
    expect(balance).eql(expected_balance);
  }); 
});

