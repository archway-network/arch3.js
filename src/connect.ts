import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { ArchwayClient, ArchwayTxFilter, ArchwayTXSearch } from "./query";
import { SigningCosmWasmClient, CosmWasmClient } from "@cosmjs/cosmwasm-stargate";

import {executeContract, instantiateContract, uploadContract} from "./wasm"
import { StdFee } from "@cosmjs/stargate";
// Wrapper for connecting to RPC client from COSM JS
// Can either connect to testnet or mainnet
// TODO: add mainnet


// Interface that holds the Signing Client and Wallet Account
export class ArchwaySigningClient {
    wallet: DirectSecp256k1HdWallet;
    client: SigningCosmWasmClient;
    public uploadContract = uploadContract;
    public instantiateContract = instantiateContract;
    public executeContract = executeContract;

    constructor(wallet:DirectSecp256k1HdWallet, client: SigningCosmWasmClient) {
        this.client = client;
        this.wallet = wallet;
    }

    async getBalance(): Promise<Coin> {
        const address = await extractAddress(this.wallet);
        const balance = await this.client.getBalance(address, "uconst");
        return balance
    };
    sendTokens(archway_recipient_address: string, fee: StdFee, amount: Coin[]): void {};
    delegateTokens(archway_validator_address: string, fee: StdFee, amount: Coin): void {};

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
   // const address: string = await extractAddress(wallet);
    const client: SigningCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(lcdApiTestnet, wallet)
    return client
}

 export async function CreateReadOnlyClientTestnet() {
    const lcdApiTestnet = "https://rpc.constantine-1.archway.tech";
   // const address: string = await extractAddress(wallet);
    const client: CosmWasmClient = await CosmWasmClient.connect(lcdApiTestnet);
    return client
}

// Create an Archway Signing Client Interface
export async function CreateArchwaySigningClient(wallet: DirectSecp256k1HdWallet) {
    const client = await CreateSigningClientTestnet(wallet);
    const archway_client: ArchwaySigningClient = new ArchwaySigningClient(wallet,client);
    return archway_client
}

// Create an Archway Read Client Interface
export async function CreateArchwayClient() {
    const client = await CreateReadOnlyClientTestnet();
    const archway_client: ArchwayClient = new ArchwayClient(client);
    return archway_client
}











