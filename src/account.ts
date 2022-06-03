import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { extractAddress, ArchwayClient } from "./connect";

// Get account info of Signing Client
export async function getAccount(wallet: DirectSecp256k1HdWallet) {
    const account = await extractAddress(wallet)
    return account
}

// Get balance of client wallet
export async function getBalance(archway_client: ArchwayClient ) {
    const address = await extractAddress(archway_client.wallet);
    const balance = await archway_client.client.getBalance(address, "uconst");
    return balance
}

// Send tokens to another Archway address
export async function sendTokens(archway_client: ArchwayClient,archway_recipient_address: string, amount: Coin[]) {
    const wallet = archway_client.wallet;
    const wallet_address = await wallet.getAccounts()[0]
    const testnet_client = archway_client.client;
    testnet_client.sendTokens(wallet_address, archway_recipient_address,amount, "auto");
}
