import { calculateFee, StdFee } from "@cosmjs/stargate";

/** Calculates fee in Constantine Testnet */
export function CalculateFee(gasLimit: number): StdFee {
    let fee = calculateFee(gasLimit,"0uconst");
    return fee
}