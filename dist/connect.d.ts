import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { ArchwayClient } from "./query";
import { SigningCosmWasmClient, CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { executeContract, instantiateContract, uploadContract } from "./wasm";
import { StdFee } from "@cosmjs/stargate";
export declare class ArchwaySigningClient {
    wallet: DirectSecp256k1HdWallet;
    client: SigningCosmWasmClient;
    uploadContract: typeof uploadContract;
    instantiateContract: typeof instantiateContract;
    executeContract: typeof executeContract;
    constructor(wallet: DirectSecp256k1HdWallet, client: SigningCosmWasmClient);
    getBalance(): Promise<Coin>;
    sendTokens(archway_recipient_address: string, fee: StdFee, amount: Coin[]): void;
    delegateTokens(archway_validator_address: string, fee: StdFee, amount: Coin): void;
}
export declare function generateWallet(): Promise<DirectSecp256k1HdWallet>;
export declare function createMnemonic(): Promise<string>;
export declare function extractAddress(wallet: DirectSecp256k1HdWallet): Promise<string>;
export declare function importWallet(mnemonic: string): Promise<DirectSecp256k1HdWallet>;
export declare function CreateSigningClientTestnet(wallet: DirectSecp256k1HdWallet): Promise<SigningCosmWasmClient>;
export declare function CreateReadOnlyClientTestnet(): Promise<CosmWasmClient>;
export declare function CreateArchwaySigningClient(wallet: DirectSecp256k1HdWallet): Promise<ArchwaySigningClient>;
export declare function CreateArchwayClient(): Promise<ArchwayClient>;
