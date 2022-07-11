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
exports.executeContract = exports.instantiateContract = exports.uploadContract = void 0;
const fs = require("fs");
const connect_1 = require("./connect");
/** Upload a contract to the  blockchain
 Returns a receipt if contract successfully uploaded with Code ID */
function uploadContract(wasmPath, fee) {
    return __awaiter(this, void 0, void 0, function* () {
        let wasm_file = fs.readFileSync(wasmPath);
        let address = yield (0, connect_1.extractAddress)(this.wallet);
        let receipt = yield this.client.upload(address, wasm_file, fee);
        return receipt;
    });
}
exports.uploadContract = uploadContract;
/** Instantiates contract from Code ID and message
 Returns contract address from instantiation with result */
function instantiateContract(code_id, msg, fee, label = "default", memo = "") {
    return __awaiter(this, void 0, void 0, function* () {
        let address = yield (0, connect_1.extractAddress)(this.wallet);
        let result = yield this.client.instantiate(address, code_id, msg, label, fee, { memo: memo });
        return [result, result.contractAddress];
    });
}
exports.instantiateContract = instantiateContract;
/** Execute an exisiting smart contract on the blockchain
 Returns the result of the execution (pass or fail) */
function executeContract(contract_address, msg, fee, memo = "", funds) {
    return __awaiter(this, void 0, void 0, function* () {
        let address = yield (0, connect_1.extractAddress)(this.wallet);
        // Check if funds were sent
        if (typeof funds !== 'undefined') {
            // If no, then no need to dd to execute message
            let result = yield this.client.execute(address, contract_address, msg, fee, memo);
            return result;
        }
        // Otherwise add to execute message
        let result = yield this.client.execute(address, contract_address, msg, fee, memo, funds);
        return result;
    });
}
exports.executeContract = executeContract;
