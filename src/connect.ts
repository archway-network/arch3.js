import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { calculateFee, GasPrice } from "@cosmjs/stargate";
import {SigningStargateClient, StargateClient } from "@cosmjs/stargate";

// Wrapper for connecting to RPC client from COSM JS
// Can either connect to testnet or mainnet
// TODO: add mainnet

// Interface that holds the Sign Client and Wallet Account
export type ArchwaySigningClient = {
    client: SigningStargateClient,
    wallet: DirectSecp256k1HdWallet
}

// Generate a wallet structure randomly 
export async function generateWallet() {
    const wallet: DirectSecp256k1HdWallet = await DirectSecp256k1HdWallet.generate(15, {prefix: "archway"});
    return wallet;
}   

// Creates a new archway wallet and returns the mnemonic key
// Usable for key storage generators
export async function createMnemonic() {
    const wallet: DirectSecp256k1HdWallet = await DirectSecp256k1HdWallet.generate(15, {prefix: "archway"});
    return wallet.mnemonic;
}

// Extract the address from a certain wallet structure
export async function extractAddress(wallet: DirectSecp256k1HdWallet) {
    const [{address}] = await wallet.getAccounts();
    return address
}

// Import a wallet using the mnemonic key
export async function importWallet(mnemonic: string) {
    const wallet: DirectSecp256k1HdWallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {prefix: "archway"});
    return wallet
}

// Create a signing client to be able to sign transactions
// Solely for testnet
// Create for mainnet
export async function CreateSigningClientTestnet(wallet: DirectSecp256k1HdWallet) {
    const lcdApiTestnet = "https://rpc.constantine-1.archway.tech";
    const address: string = await extractAddress(wallet);
    const client: SigningStargateClient = await SigningStargateClient.connectWithSigner(lcdApiTestnet, wallet)
    return client
}

// Create an Archway Client Interface
export async function CreateArchwaySigningClient(wallet: DirectSecp256k1HdWallet) {
    const client = await CreateSigningClientTestnet(wallet);
    const archway_client: ArchwaySigningClient = {client, wallet};
    return archway_client
}











