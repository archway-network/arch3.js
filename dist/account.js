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
exports.getAccount = void 0;
const stargate_1 = require("@cosmjs/stargate");
const connect_1 = require("./connect");
// Get account info of Signing Client
function getAccount(wallet) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield (0, connect_1.extractAddress)(wallet);
        return account;
    });
}
exports.getAccount = getAccount;
// Send tokens to another Archway address
connect_1.ArchwaySigningClient.prototype.sendTokens = function (archway_recipient_address, fee, amount) {
    return __awaiter(this, void 0, void 0, function* () {
        const wallet = this.wallet;
        const wallet_address = yield wallet.getAccounts();
        const testnet_client = this.client;
        const result = yield testnet_client.sendTokens(wallet_address[0].address, archway_recipient_address, amount, fee);
        // Asserts that the TX was successful or creates an error
        (0, stargate_1.assertIsDeliverTxSuccess)(result);
    });
};
