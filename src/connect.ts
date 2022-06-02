import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { calculateFee, GasPrice } from "@cosmjs/stargate";
import { Secp256k1HdWallet, SigningCosmosClient } from "@cosmjs/launchpad";

import * as fs from "fs";
// Wrapper for connecting to RPC client from COSM JS
// Can either connect to testnet or mainnet
// TODO: add mainnet

// Generate a wallet structure randomly 
export async function generateWallet() {
    const wallet: Secp256k1HdWallet = await Secp256k1HdWallet.generate(15, {prefix: "archway"});
    return wallet;
}   

// Generate the address from a certain wallet structure
export async function generateAddress(wallet: Secp256k1HdWallet) {
    const [{address}] = await wallet.getAccounts();
    return address
}

// Import a wallet using the mnemonic key
export async function importWallet(mnemonic: string) {
    const wallet: Secp256k1HdWallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "archway"});
    return wallet
}

// Create a signing client to be able to sign transactions
// Solely for testnet
// Create for mainnet
export async function CreateSigningClientTestnet(wallet: Secp256k1HdWallet) {
    const lcdApiTestnet = "https://...";
    const address: string = await generateAddress(wallet);
    const client: SigningCosmosClient = new SigningCosmosClient(lcdApiTestnet, address, wallet)
    return client
}




