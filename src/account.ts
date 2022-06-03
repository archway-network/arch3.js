import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { extractAddress } from "./connect";

// Get account info of Signing Client
export async function getAccount(wallet: DirectSecp256k1HdWallet) {
    const account = await extractAddress(wallet)
    return account
}

// Get balance of client wallet
export async function getBalance(wallet: DirectSecp256k1HdWallet, client: SigningStargateClient) {
    const address = await extractAddress(wallet);
    const balance = await client.getBalance(address, "uconst");
    return balance
}

