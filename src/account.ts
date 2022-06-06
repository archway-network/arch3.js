import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient, assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { extractAddress, ArchwaySigningClient } from "./connect";

// Get account info of Signing Client
export async function getAccount(wallet: DirectSecp256k1HdWallet) {
    const account = await extractAddress(wallet)
    return account
}

// Get balance of client wallet
export async function getBalance(archway_client: ArchwaySigningClient ) {
    const address = await extractAddress(archway_client.wallet);
    const balance = await archway_client.client.getBalance(address, "uconst");
    return balance
}

// Send tokens to another Archway address
export async function sendTokens(archway_client: ArchwaySigningClient,archway_recipient_address: string, amount: Coin[]) {
    const wallet = archway_client.wallet;
    const wallet_address = await wallet.getAccounts()
    const testnet_client = archway_client.client;
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
export async function delegateTokens(archway_client: ArchwaySigningClient,archway_validator_address: string, amount: Coin) {
  const wallet = archway_client.wallet;
  const wallet_address = await wallet.getAccounts()
  const testnet_client = archway_client.client;
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
