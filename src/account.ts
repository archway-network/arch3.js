import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient, assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { extractAddress, ArchwaySigningClient } from "./connect";

// Get account info of Signing Client
export async function getAccount(wallet: DirectSecp256k1HdWallet) {
    const account = await extractAddress(wallet)
    return account
}

// Get balance of client wallet
ArchwaySigningClient.prototype.getBalance = async function() {
  const address = await extractAddress(this.wallet);
  const balance = await this.client.getBalance(address, "uconst");
  return balance
}

// Send tokens to another Archway address
ArchwaySigningClient.prototype.sendTokens = async function(archway_recipient_address: string, amount: Coin[]) {
    const wallet = this.wallet;
    const wallet_address = await wallet.getAccounts()
    const testnet_client = this.client;
    const fee = {
        amount: [
          {
            denom: "uconst",
            amount: "2000",
          },
        ],
        gas: "180000", // 180k
      };
    const result = await testnet_client.sendTokens(wallet_address[0].address, archway_recipient_address,amount, fee);
    // Asserts that the TX was successful or creates an error
    assertIsDeliverTxSuccess(result)
}


// Delegate tokens to an Archway validator
ArchwaySigningClient.prototype.delegateTokens = async function(archway_validator_address: string, amount: Coin) {
  const wallet = this.wallet;
  const wallet_address = await wallet.getAccounts()
  const testnet_client = this.client;
  const fee = {
      amount: [
        {
          denom: "uconst",
          amount: "2000",
        },
      ],
      gas: "180000", // 180k
    };
  const result = await testnet_client.delegateTokens(wallet_address[0].address, archway_validator_address,amount, fee);
  // Asserts that the TX was successful or creates an error
  assertIsDeliverTxSuccess(result)
}
