"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateFee = void 0;
const stargate_1 = require("@cosmjs/stargate");
/** Calculates fee in Constantine Testnet */
function CalculateFee(gasLimit) {
    let fee = (0, stargate_1.calculateFee)(gasLimit, "0uconst");
    return fee;
}
exports.CalculateFee = CalculateFee;
