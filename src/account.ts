import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {assertIsDeliverTxSuccess, StdFee } from "@cosmjs/stargate";
import { extractAddress, ArchwaySigningClient } from "./connect";

// Get account info of Signing Client
export async function getAccount(wallet: DirectSecp256k1HdWallet) {
    const account = await extractAddress(wallet)
    return account
}


// Send tokens to another Archway address
ArchwaySigningClient.prototype.sendTokens = async function(archway_recipient_address: string, fee: StdFee, amount: Coin[]) {
    const wallet = this.wallet;
    const wallet_address = await wallet.getAccounts()
    const testnet_client = this.client;
    const result = await testnet_client.sendTokens(wallet_address[0].address, archway_recipient_address,amount, fee);
    // Asserts that the TX was successful or creates an error
    assertIsDeliverTxSuccess(result)
}


// Delegate tokens to an Archway validator
ArchwaySigningClient.prototype.delegateTokens = async function(archway_validator_address: string, amount: Coin, fee: StdFee) {
  const wallet = this.wallet;
  const wallet_address = await wallet.getAccounts()
  const testnet_client = this.client;
  const result = await testnet_client.delegateTokens(wallet_address[0].address, archway_validator_address,amount, fee);
  
  // Asserts that the TX was successful or creates an error
  assertIsDeliverTxSuccess(result)
}



