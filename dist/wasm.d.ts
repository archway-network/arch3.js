import { ExecuteResult, InstantiateResult, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/proto-signing";
import { StdFee } from "@cosmjs/stargate";
import { ArchwaySigningClient } from "./connect";
/** Upload a contract to the  blockchain
 Returns a receipt if contract successfully uploaded with Code ID */
export declare function uploadContract(this: ArchwaySigningClient, wasmPath: string, fee: StdFee): Promise<UploadResult>;
/** Instantiates contract from Code ID and message
 Returns contract address from instantiation with result */
export declare function instantiateContract(this: ArchwaySigningClient, code_id: number, msg: any, fee: StdFee, label?: string, memo?: string): Promise<readonly [InstantiateResult, string]>;
/** Execute an exisiting smart contract on the blockchain
 Returns the result of the execution (pass or fail) */
export declare function executeContract(this: ArchwaySigningClient, contract_address: string, msg: any, fee: StdFee, memo?: string, funds?: Coin[]): Promise<ExecuteResult>;
