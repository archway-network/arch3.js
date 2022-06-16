import { ExecuteResult, InstantiateResult, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import * as fs from "fs";
import { ArchwaySigningClient, extractAddress } from "./connect";

/** Upload a contract to the  blockchain
 Returns a receipt if contract successfully uploaded with Code ID */ 
export async function uploadContract(this: ArchwaySigningClient, wasmPath: string, fee: StdFee ): Promise<UploadResult> {
    let wasm_file = fs.readFileSync(wasmPath);
    let address = await extractAddress(this.wallet);
    let receipt = await this.client.upload(address,wasm_file,fee);
    return receipt
}

/** Instantiates contract from Code ID and message
 Returns contract address from instantiation with result */ 
export async function instantiateContract(this: ArchwaySigningClient, code_id: number, msg: any, fee : StdFee, label = "default", memo = ""): Promise<readonly [InstantiateResult,string]> {
    let address = await extractAddress(this.wallet);
    let result = await this.client.instantiate(
        address,
        code_id,
        msg,
        label,
        fee,
        {memo: memo}
    );

    return [result,result.contractAddress] as const
}



/** Execute an exisiting smart contract on the blockchain
 Returns the result of the execution (pass or fail) */ 
export async function executeContract(this:ArchwaySigningClient, contract_address: string, msg: any, fee: StdFee, memo = "", funds?: Coin[]): Promise<ExecuteResult> {
    let address = await extractAddress(this.wallet);
      // Check if funds were sent
    if (typeof funds !== 'undefined') {
      // If no, then no need to dd to execute message
        let result = await this.client.execute(address, contract_address,msg,fee,memo);
        return result
    }
    // Otherwise add to execute message
    let result = await this.client.execute(address, contract_address,msg,fee,memo, funds);
    return result
}