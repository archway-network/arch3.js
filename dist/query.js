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
exports.ArchwayClient = void 0;
// Interface that holds the Read Client and Wallet Account
class ArchwayClient {
    constructor(client) {
        this.client = client;
    }
    // Get balance of any address on the blockchain
    getBalance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const balance = yield this.client.getBalance(address, "uconst");
            return balance;
        });
    }
    ;
    /** Get the Block info at any height */
    getBlock(height) {
        return __awaiter(this, void 0, void 0, function* () {
            const block_height = yield this.client.getBlock(height);
            return block_height;
        });
    }
    ;
    /** Get the Chain ID of the chain */
    getChainID() {
        return __awaiter(this, void 0, void 0, function* () {
            const chain_id = yield this.client.getChainId();
            return chain_id;
        });
    }
    ;
    /** Get the latest block height of the chain */
    getBlockHeight() {
        return __awaiter(this, void 0, void 0, function* () {
            const height = yield this.client.getHeight();
            return height;
        });
    }
    ;
    /** Get TX info from the transaction hash */
    getTX(tx_hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = yield this.client.getTx(tx_hash);
            return tx;
        });
    }
    ;
    /** Search for certain transactions according to certain queries and filters.
     Filters set to null by default */
    searchTx(search_tx_type, filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const indexed_txs = yield this.client.searchTx(search_tx_type, filter);
            return indexed_txs;
        });
    }
    ;
    /** Returns Code Info from Code ID  */
    getCodeInfo(code_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let details = this.client.getCodeDetails(code_id);
            return details;
        });
    }
    /** Returns creator of Code ID */
    getCodeCreator(code_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let details = yield this.getCodeInfo(code_id);
            return details.creator;
        });
    }
    /**  get Contract Info from address
     Contract returns address, admin, label, creator, code_id, and IBCPortID */
    getContract(contract_address) {
        return __awaiter(this, void 0, void 0, function* () {
            let contract = yield this.client.getContract(contract_address);
            return contract;
        });
    }
    /** get history of messages executed or instantiated on contract as readonly array */
    getContractHistory(contract_address) {
        return __awaiter(this, void 0, void 0, function* () {
            let history = yield this.client.getContractCodeHistory(contract_address);
            return history;
        });
    }
    /** Get all contract addresses instantiated from a certain code ID */
    getContractsFromCode(code_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let contracts = yield this.client.getContracts(code_id);
            return contracts;
        });
    }
    /** Makes a smart query on the contract, returns the parsed JSON document.
     * Promise is rejected when contract does not exist or if invalid query format.
     * If there is also no response format in the smart contract, promise will be rejected.
     */
    queryContract(contract_address, query_msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.client.queryContractSmart(contract_address, query_msg);
            return response;
        });
    }
}
exports.ArchwayClient = ArchwayClient;
