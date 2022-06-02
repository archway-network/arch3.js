import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { calculateFee, GasPrice } from "@cosmjs/stargate";
import { Secp256k1HdWallet, SigningCosmosClient } from "@cosmjs/launchpad";

import * as fs from "fs";
// Wrapper for connecting to RPC client from COSM JS
// Can either connect to testnet or mainnet
// TODO: add mainnet

// Generate a wallet structure randomly 
export function generateWallet() {
    const wallet = Secp256k1HdWallet.generate(15, {prefix: "archway"});
    return wallet;
}   

// Generate the address from a certain wallet structure
export function generateAddress(wallet) {
    const [{address}] = wallet.getAccounts();
    return address
}

// Import a wallet using the mnemonic key
export async function importWallet(mnemonic) {
    const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "archway"});
    return wallet
}

// Create a signing client to be able to sign transactions
// Solely for testnet
// Create for mainnet
export async function CreateSigningClientTestnet(wallet) {
    const lcdApiTestnet = "https://...";
    const address = await generateAddress(wallet);
    const client = new SigningCosmosClient(lcdApiTestnet, address, wallet)
}




