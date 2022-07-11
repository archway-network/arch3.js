"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArchwayClient = exports.CreateArchwaySigningClient = exports.CreateReadOnlyClientTestnet = exports.CreateSigningClientTestnet = exports.importWallet = exports.extractAddress = exports.createMnemonic = exports.generateWallet = exports.ArchwaySigningClient = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const query_1 = require("./query");
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const wasm_1 = require("./wasm");
// Wrapper for connecting to RPC client from COSM JS
// Can either connect to testnet or mainnet
// TODO: add mainnet
// Interface that holds the Signing Client and Wallet Account
class ArchwaySigningClient {
    constructor(wallet, client) {
        this.uploadContract = wasm_1.uploadContract;
        this.instantiateContract = wasm_1.instantiateContract;
        this.executeContract = wasm_1.executeContract;
        this.client = client;
        this.wallet = wallet;
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield extractAddress(this.wallet);
            const balance = yield this.client.getBalance(address, "uconst");
            return balance;
        });
    }
    ;
    sendTokens(archway_recipient_address, fee, amount) { }
    ;
    delegateTokens(archway_validator_address, fee, amount) { }
    ;
}
exports.ArchwaySigningClient = ArchwaySigningClient;
// Generate a wallet structure randomly 
function generateWallet() {
    return __awaiter(this, void 0, void 0, function* () {
        const wallet = yield proto_signing_1.DirectSecp256k1HdWallet.generate(15, { prefix: "archway" });
        return wallet;
    });
}
exports.generateWallet = generateWallet;
// Creates a new archway wallet and returns the mnemonic key
// Usable for key storage generators
function createMnemonic() {
    return __awaiter(this, void 0, void 0, function* () {
        const wallet = yield proto_signing_1.DirectSecp256k1HdWallet.generate(15, { prefix: "archway" });
        return wallet.mnemonic;
    });
}
exports.createMnemonic = createMnemonic;
// Extract the address from a certain wallet structure
function extractAddress(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const [{ address }] = yield wallet.getAccounts();
        return address;
    });
}
exports.extractAddress = extractAddress;
// Import a wallet using the mnemonic key
function importWallet(mnemonic) {
    return __awaiter(this, void 0, void 0, function* () {
        const wallet = yield proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: "archway" });
        return wallet;
    });
}
exports.importWallet = importWallet;
// Create a signing client to be able to sign transactions
// Solely for testnet
// Create for mainnet
function CreateSigningClientTestnet(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const lcdApiTestnet = "https://rpc.constantine-1.archway.tech";
        // const address: string = await extractAddress(wallet);
        const client = yield cosmwasm_stargate_1.SigningCosmWasmClient.connectWithSigner(lcdApiTestnet, wallet);
        return client;
    });
}
exports.CreateSigningClientTestnet = CreateSigningClientTestnet;
function CreateReadOnlyClientTestnet() {
    return __awaiter(this, void 0, void 0, function* () {
        const lcdApiTestnet = "https://rpc.constantine-1.archway.tech";
        // const address: string = await extractAddress(wallet);
        const client = yield cosmwasm_stargate_1.CosmWasmClient.connect(lcdApiTestnet);
        return client;
    });
}
exports.CreateReadOnlyClientTestnet = CreateReadOnlyClientTestnet;
// Create an Archway Signing Client Interface
function CreateArchwaySigningClient(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield CreateSigningClientTestnet(wallet);
        const archway_client = new ArchwaySigningClient(wallet, client);
        return archway_client;
    });
}
exports.CreateArchwaySigningClient = CreateArchwaySigningClient;
// Create an Archway Read Client Interface
function CreateArchwayClient() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield CreateReadOnlyClientTestnet();
        const archway_client = new query_1.ArchwayClient(client);
        return archway_client;
    });
}
exports.CreateArchwayClient = CreateArchwayClient;
