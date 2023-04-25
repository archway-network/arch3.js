/* eslint-disable */
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ContractOperation denotes which operation consumed gas. */
export enum ContractOperation {
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
  UNRECOGNIZED = -1,
}
export function contractOperationFromJSON(object: any): ContractOperation {
  switch (object) {
    case 0:
    case "CONTRACT_OPERATION_UNSPECIFIED":
      return ContractOperation.CONTRACT_OPERATION_UNSPECIFIED;
    case 1:
    case "CONTRACT_OPERATION_INSTANTIATION":
      return ContractOperation.CONTRACT_OPERATION_INSTANTIATION;
    case 2:
    case "CONTRACT_OPERATION_EXECUTION":
      return ContractOperation.CONTRACT_OPERATION_EXECUTION;
    case 3:
    case "CONTRACT_OPERATION_QUERY":
      return ContractOperation.CONTRACT_OPERATION_QUERY;
    case 4:
    case "CONTRACT_OPERATION_MIGRATE":
      return ContractOperation.CONTRACT_OPERATION_MIGRATE;
    case 5:
    case "CONTRACT_OPERATION_IBC":
      return ContractOperation.CONTRACT_OPERATION_IBC;
    case 6:
    case "CONTRACT_OPERATION_SUDO":
      return ContractOperation.CONTRACT_OPERATION_SUDO;
    case 7:
    case "CONTRACT_OPERATION_REPLY":
      return ContractOperation.CONTRACT_OPERATION_REPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractOperation.UNRECOGNIZED;
  }
}
export function contractOperationToJSON(object: ContractOperation): string {
  switch (object) {
    case ContractOperation.CONTRACT_OPERATION_UNSPECIFIED:
      return "CONTRACT_OPERATION_UNSPECIFIED";
    case ContractOperation.CONTRACT_OPERATION_INSTANTIATION:
      return "CONTRACT_OPERATION_INSTANTIATION";
    case ContractOperation.CONTRACT_OPERATION_EXECUTION:
      return "CONTRACT_OPERATION_EXECUTION";
    case ContractOperation.CONTRACT_OPERATION_QUERY:
      return "CONTRACT_OPERATION_QUERY";
    case ContractOperation.CONTRACT_OPERATION_MIGRATE:
      return "CONTRACT_OPERATION_MIGRATE";
    case ContractOperation.CONTRACT_OPERATION_IBC:
      return "CONTRACT_OPERATION_IBC";
    case ContractOperation.CONTRACT_OPERATION_SUDO:
      return "CONTRACT_OPERATION_SUDO";
    case ContractOperation.CONTRACT_OPERATION_REPLY:
      return "CONTRACT_OPERATION_REPLY";
    case ContractOperation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
  /** txs defines the list of transactions tracked in the block. */
  txs: TxTracking[];
}
/** TxTracking is the tracking information for a single transaction. */
export interface TxTracking {
  /** info defines the transaction details. */
  info?: TxInfo;
  /** contract_operations defines the list of contract operations consumed by the transaction. */
  contractOperations: ContractOperationInfo[];
}
function createBaseTxInfo(): TxInfo {
  return {
    id: Long.UZERO,
    height: Long.ZERO,
    totalGas: Long.UZERO
  };
}
export const TxInfo = {
  encode(message: TxInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (!message.totalGas.isZero()) {
      writer.uint32(24).uint64(message.totalGas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        case 3:
          message.totalGas = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      totalGas: isSet(object.totalGas) ? Long.fromValue(object.totalGas) : Long.UZERO
    };
  },
  toJSON(message: TxInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.totalGas !== undefined && (obj.totalGas = (message.totalGas || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<TxInfo>): TxInfo {
    const message = createBaseTxInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.totalGas = object.totalGas !== undefined && object.totalGas !== null ? Long.fromValue(object.totalGas) : Long.UZERO;
    return message;
  }
};
function createBaseContractOperationInfo(): ContractOperationInfo {
  return {
    id: Long.UZERO,
    txId: Long.UZERO,
    contractAddress: "",
    operationType: 0,
    vmGas: Long.UZERO,
    sdkGas: Long.UZERO
  };
}
export const ContractOperationInfo = {
  encode(message: ContractOperationInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.txId.isZero()) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    if (!message.vmGas.isZero()) {
      writer.uint32(40).uint64(message.vmGas);
    }
    if (!message.sdkGas.isZero()) {
      writer.uint32(48).uint64(message.sdkGas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractOperationInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractOperationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.txId = (reader.uint64() as Long);
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.operationType = (reader.int32() as any);
          break;
        case 5:
          message.vmGas = (reader.uint64() as Long);
          break;
        case 6:
          message.sdkGas = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractOperationInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      txId: isSet(object.txId) ? Long.fromValue(object.txId) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      operationType: isSet(object.operationType) ? contractOperationFromJSON(object.operationType) : 0,
      vmGas: isSet(object.vmGas) ? Long.fromValue(object.vmGas) : Long.UZERO,
      sdkGas: isSet(object.sdkGas) ? Long.fromValue(object.sdkGas) : Long.UZERO
    };
  },
  toJSON(message: ContractOperationInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.txId !== undefined && (obj.txId = (message.txId || Long.UZERO).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.operationType !== undefined && (obj.operationType = contractOperationToJSON(message.operationType));
    message.vmGas !== undefined && (obj.vmGas = (message.vmGas || Long.UZERO).toString());
    message.sdkGas !== undefined && (obj.sdkGas = (message.sdkGas || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ContractOperationInfo>): ContractOperationInfo {
    const message = createBaseContractOperationInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.txId = object.txId !== undefined && object.txId !== null ? Long.fromValue(object.txId) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    message.operationType = object.operationType ?? 0;
    message.vmGas = object.vmGas !== undefined && object.vmGas !== null ? Long.fromValue(object.vmGas) : Long.UZERO;
    message.sdkGas = object.sdkGas !== undefined && object.sdkGas !== null ? Long.fromValue(object.sdkGas) : Long.UZERO;
    return message;
  }
};
function createBaseBlockTracking(): BlockTracking {
  return {
    txs: []
  };
}
export const BlockTracking = {
  encode(message: BlockTracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      TxTracking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockTracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(TxTracking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockTracking {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => TxTracking.fromJSON(e)) : []
    };
  },
  toJSON(message: BlockTracking): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxTracking.toJSON(e) : undefined);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<BlockTracking>): BlockTracking {
    const message = createBaseBlockTracking();
    message.txs = object.txs?.map(e => TxTracking.fromPartial(e)) || [];
    return message;
  }
};
function createBaseTxTracking(): TxTracking {
  return {
    info: undefined,
    contractOperations: []
  };
}
export const TxTracking = {
  encode(message: TxTracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.info !== undefined) {
      TxInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractOperations) {
      ContractOperationInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxTracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = TxInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractOperations.push(ContractOperationInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxTracking {
    return {
      info: isSet(object.info) ? TxInfo.fromJSON(object.info) : undefined,
      contractOperations: Array.isArray(object?.contractOperations) ? object.contractOperations.map((e: any) => ContractOperationInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: TxTracking): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? TxInfo.toJSON(message.info) : undefined);
    if (message.contractOperations) {
      obj.contractOperations = message.contractOperations.map(e => e ? ContractOperationInfo.toJSON(e) : undefined);
    } else {
      obj.contractOperations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TxTracking>): TxTracking {
    const message = createBaseTxTracking();
    message.info = object.info !== undefined && object.info !== null ? TxInfo.fromPartial(object.info) : undefined;
    message.contractOperations = object.contractOperations?.map(e => ContractOperationInfo.fromPartial(e)) || [];
    return message;
  }
};