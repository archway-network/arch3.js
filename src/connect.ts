import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Block, calculateFee, GasPrice } from "@cosmjs/stargate";
import {SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { ArchwayTxFilter, ArchwayTXSearch } from "./query";
// Wrapper for connecting to RPC client from COSM JS
// Can either connect to testnet or mainnet
// TODO: add mainnet

// Interface that holds the Signing Client and Wallet Account
// Interface that holds the Read Client and Wallet Account
export class ArchwayClient {
    public client: StargateClient

    constructor(client: StargateClient) {
        this.client = client
    }

    getBalance(address: string): any {};
    getStakedBalance(delegator_address: string) {};
    getBlock(height: number) {};
    getChainID() {};
    getDelegations(delegator_address: string, validator_address: string) {};
    getBlockHeight() {};
    getTX(tx_hash: string) {};
    searchTx(search_tx_type: ArchwayTXSearch, filter: ArchwayTxFilter) {};

}

export class ArchwaySigningClient extends ArchwayClient {
    wallet: DirectSecp256k1HdWallet;

    constructor(wallet:DirectSecp256k1HdWallet, client: SigningStargateClient) {
        super(client);
        this.wallet = wallet;
    }

    getBalance() {};
    sendTokens(archway_recipient_address: string, amount: Coin[]): void {};
    delegateTokens(archway_validator_address: string, amount: Coin): void {};

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
    const client: SigningStargateClient = await SigningStargateClient.connectWithSigner(lcdApiTestnet, wallet)
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
    const lcdApiTestnet = "https://rpc.constantine-1.archway.tech";
    const client: StargateClient = await StargateClient.connect(lcdApiTestnet);
    const archway_client: ArchwayClient = new ArchwayClient(client);
    return archway_client
}











