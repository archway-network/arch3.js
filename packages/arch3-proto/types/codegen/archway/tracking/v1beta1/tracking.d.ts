import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** ContractOperation denotes which operation consumed gas. */
export declare enum ContractOperation {
    /** CONTRACT_OPERATION_UNSPECIFIED - Invalid or unknown operation */
    CONTRACT_OPERATION_UNSPECIFIED = 0,
    /** CONTRACT_OPERATION_INSTANTIATION - Instantiate operation */
    CONTRACT_OPERATION_INSTANTIATION = 1,
    /** CONTRACT_OPERATION_EXECUTION - Execute operation */
    CONTRACT_OPERATION_EXECUTION = 2,
    /** CONTRACT_OPERATION_QUERY - Query */
    CONTRACT_OPERATION_QUERY = 3,
    /** CONTRACT_OPERATION_MIGRATE - Migrate operation */
    CONTRACT_OPERATION_MIGRATE = 4,
    /** CONTRACT_OPERATION_IBC - IBC operations */
    CONTRACT_OPERATION_IBC = 5,
    /** CONTRACT_OPERATION_SUDO - Sudo operation */
    CONTRACT_OPERATION_SUDO = 6,
    /** CONTRACT_OPERATION_REPLY - Reply callback operation */
    CONTRACT_OPERATION_REPLY = 7,
    UNRECOGNIZED = -1
}
/** ContractOperation denotes which operation consumed gas. */
export declare enum ContractOperationSDKType {
    /** CONTRACT_OPERATION_UNSPECIFIED - Invalid or unknown operation */
    CONTRACT_OPERATION_UNSPECIFIED = 0,
    /** CONTRACT_OPERATION_INSTANTIATION - Instantiate operation */
    CONTRACT_OPERATION_INSTANTIATION = 1,
    /** CONTRACT_OPERATION_EXECUTION - Execute operation */
    CONTRACT_OPERATION_EXECUTION = 2,
    /** CONTRACT_OPERATION_QUERY - Query */
    CONTRACT_OPERATION_QUERY = 3,
    /** CONTRACT_OPERATION_MIGRATE - Migrate operation */
    CONTRACT_OPERATION_MIGRATE = 4,
    /** CONTRACT_OPERATION_IBC - IBC operations */
    CONTRACT_OPERATION_IBC = 5,
    /** CONTRACT_OPERATION_SUDO - Sudo operation */
    CONTRACT_OPERATION_SUDO = 6,
    /** CONTRACT_OPERATION_REPLY - Reply callback operation */
    CONTRACT_OPERATION_REPLY = 7,
    UNRECOGNIZED = -1
}
export declare function contractOperationFromJSON(object: any): ContractOperation;
export declare function contractOperationToJSON(object: ContractOperation): string;
/**
 * TxInfo keeps a transaction gas tracking data.
 * Object is being created at the module EndBlocker.
 */
export interface TxInfo {
    /** id defines the unique transaction ID. */
    id: Long;
    /** height defines the block height of the transaction. */
    height: Long;
    /**
     * total_gas defines total gas consumption by the transaction.
     * It is the sum of gas consumed by all contract operations (VM + SDK gas).
     */
    totalGas: Long;
}
/**
 * TxInfo keeps a transaction gas tracking data.
 * Object is being created at the module EndBlocker.
 */
export interface TxInfoSDKType {
    /** id defines the unique transaction ID. */
    id: Long;
    /** height defines the block height of the transaction. */
    height: Long;
    /**
     * total_gas defines total gas consumption by the transaction.
     * It is the sum of gas consumed by all contract operations (VM + SDK gas).
     */
    total_gas: Long;
}
/**
 * ContractOperationInfo keeps a single contract operation gas consumption data.
 * Object is being created by the IngestGasRecord call from the wasmd.
 */
export interface ContractOperationInfo {
    /** id defines the unique operation ID. */
    id: Long;
    /** tx_id defines a transaction ID operation relates to (TxInfo.id). */
    txId: Long;
    /** contract_address defines the contract address operation relates to. */
    contractAddress: string;
    /** operation_type defines the gas consumption type. */
    operationType: ContractOperation;
    /**
     * vm_gas is the gas consumption reported by the WASM VM.
     * Value is adjusted by this module (CalculateUpdatedGas func).
     */
    vmGas: Long;
    /**
     * sdk_gas is the gas consumption reported by the SDK gas meter and the WASM GasRegister (cost of Execute/Query/etc).
     * Value is adjusted by this module (CalculateUpdatedGas func).
     */
    sdkGas: Long;
}
/**
 * ContractOperationInfo keeps a single contract operation gas consumption data.
 * Object is being created by the IngestGasRecord call from the wasmd.
 */
export interface ContractOperationInfoSDKType {
    /** id defines the unique operation ID. */
    id: Long;
    /** tx_id defines a transaction ID operation relates to (TxInfo.id). */
    tx_id: Long;
    /** contract_address defines the contract address operation relates to. */
    contract_address: string;
    /** operation_type defines the gas consumption type. */
    operation_type: ContractOperationSDKType;
    /**
     * vm_gas is the gas consumption reported by the WASM VM.
     * Value is adjusted by this module (CalculateUpdatedGas func).
     */
    vm_gas: Long;
    /**
     * sdk_gas is the gas consumption reported by the SDK gas meter and the WASM GasRegister (cost of Execute/Query/etc).
     * Value is adjusted by this module (CalculateUpdatedGas func).
     */
    sdk_gas: Long;
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
    /** txs defines the list of transactions tracked in the block. */
    txs: TxTracking[];
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTrackingSDKType {
    /** txs defines the list of transactions tracked in the block. */
    txs: TxTrackingSDKType[];
}
/** TxTracking is the tracking information for a single transaction. */
export interface TxTracking {
    /** info defines the transaction details. */
    info?: TxInfo;
    /** contract_operations defines the list of contract operations consumed by the transaction. */
    contractOperations: ContractOperationInfo[];
}
/** TxTracking is the tracking information for a single transaction. */
export interface TxTrackingSDKType {
    /** info defines the transaction details. */
    info?: TxInfoSDKType;
    /** contract_operations defines the list of contract operations consumed by the transaction. */
    contract_operations: ContractOperationInfoSDKType[];
}
export declare const TxInfo: {
    encode(message: TxInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxInfo;
    fromPartial(object: Partial<TxInfo>): TxInfo;
};
export declare const ContractOperationInfo: {
    encode(message: ContractOperationInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractOperationInfo;
    fromPartial(object: Partial<ContractOperationInfo>): ContractOperationInfo;
};
export declare const BlockTracking: {
    encode(message: BlockTracking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockTracking;
    fromPartial(object: Partial<BlockTracking>): BlockTracking;
};
export declare const TxTracking: {
    encode(message: TxTracking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxTracking;
    fromPartial(object: Partial<TxTracking>): TxTracking;
};
