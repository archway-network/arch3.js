/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
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
export const ContractOperationAmino = ContractOperation;
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
  id: bigint;
  /** height defines the block height of the transaction. */
  height: bigint;
  /**
   * total_gas defines total gas consumption by the transaction.
   * It is the sum of gas consumed by all contract operations (VM + SDK gas).
   */
  totalGas: bigint;
}
export interface TxInfoProtoMsg {
  typeUrl: "/archway.tracking.v1.TxInfo";
  value: Uint8Array;
}
/**
 * TxInfo keeps a transaction gas tracking data.
 * Object is being created at the module EndBlocker.
 */
export interface TxInfoAmino {
  /** id defines the unique transaction ID. */
  id?: string;
  /** height defines the block height of the transaction. */
  height?: string;
  /**
   * total_gas defines total gas consumption by the transaction.
   * It is the sum of gas consumed by all contract operations (VM + SDK gas).
   */
  total_gas?: string;
}
export interface TxInfoAminoMsg {
  type: "/archway.tracking.v1.TxInfo";
  value: TxInfoAmino;
}
/**
 * ContractOperationInfo keeps a single contract operation gas consumption data.
 * Object is being created by the IngestGasRecord call from the wasmd.
 */
export interface ContractOperationInfo {
  /** id defines the unique operation ID. */
  id: bigint;
  /** tx_id defines a transaction ID operation relates to (TxInfo.id). */
  txId: bigint;
  /** contract_address defines the contract address operation relates to. */
  contractAddress: string;
  /** operation_type defines the gas consumption type. */
  operationType: ContractOperation;
  /**
   * vm_gas is the gas consumption reported by the WASM VM.
   * Value is adjusted by this module (CalculateUpdatedGas func).
   */
  vmGas: bigint;
  /**
   * sdk_gas is the gas consumption reported by the SDK gas meter and the WASM
   * GasRegister (cost of Execute/Query/etc). Value is adjusted by this module
   * (CalculateUpdatedGas func).
   */
  sdkGas: bigint;
}
export interface ContractOperationInfoProtoMsg {
  typeUrl: "/archway.tracking.v1.ContractOperationInfo";
  value: Uint8Array;
}
/**
 * ContractOperationInfo keeps a single contract operation gas consumption data.
 * Object is being created by the IngestGasRecord call from the wasmd.
 */
export interface ContractOperationInfoAmino {
  /** id defines the unique operation ID. */
  id?: string;
  /** tx_id defines a transaction ID operation relates to (TxInfo.id). */
  tx_id?: string;
  /** contract_address defines the contract address operation relates to. */
  contract_address?: string;
  /** operation_type defines the gas consumption type. */
  operation_type?: ContractOperation;
  /**
   * vm_gas is the gas consumption reported by the WASM VM.
   * Value is adjusted by this module (CalculateUpdatedGas func).
   */
  vm_gas?: string;
  /**
   * sdk_gas is the gas consumption reported by the SDK gas meter and the WASM
   * GasRegister (cost of Execute/Query/etc). Value is adjusted by this module
   * (CalculateUpdatedGas func).
   */
  sdk_gas?: string;
}
export interface ContractOperationInfoAminoMsg {
  type: "/archway.tracking.v1.ContractOperationInfo";
  value: ContractOperationInfoAmino;
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
  /** txs defines the list of transactions tracked in the block. */
  txs: TxTracking[];
}
export interface BlockTrackingProtoMsg {
  typeUrl: "/archway.tracking.v1.BlockTracking";
  value: Uint8Array;
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTrackingAmino {
  /** txs defines the list of transactions tracked in the block. */
  txs?: TxTrackingAmino[];
}
export interface BlockTrackingAminoMsg {
  type: "/archway.tracking.v1.BlockTracking";
  value: BlockTrackingAmino;
}
/** TxTracking is the tracking information for a single transaction. */
export interface TxTracking {
  /** info defines the transaction details. */
  info: TxInfo;
  /**
   * contract_operations defines the list of contract operations consumed by the
   * transaction.
   */
  contractOperations: ContractOperationInfo[];
}
export interface TxTrackingProtoMsg {
  typeUrl: "/archway.tracking.v1.TxTracking";
  value: Uint8Array;
}
/** TxTracking is the tracking information for a single transaction. */
export interface TxTrackingAmino {
  /** info defines the transaction details. */
  info?: TxInfoAmino;
  /**
   * contract_operations defines the list of contract operations consumed by the
   * transaction.
   */
  contract_operations?: ContractOperationInfoAmino[];
}
export interface TxTrackingAminoMsg {
  type: "/archway.tracking.v1.TxTracking";
  value: TxTrackingAmino;
}
function createBaseTxInfo(): TxInfo {
  return {
    id: BigInt(0),
    height: BigInt(0),
    totalGas: BigInt(0)
  };
}
export const TxInfo = {
  typeUrl: "/archway.tracking.v1.TxInfo",
  encode(message: TxInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.totalGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.totalGas = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      totalGas: isSet(object.totalGas) ? BigInt(object.totalGas.toString()) : BigInt(0)
    };
  },
  toJSON(message: TxInfo): JsonSafe<TxInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.totalGas !== undefined && (obj.totalGas = (message.totalGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<TxInfo>): TxInfo {
    const message = createBaseTxInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.totalGas = object.totalGas !== undefined && object.totalGas !== null ? BigInt(object.totalGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TxInfoAmino): TxInfo {
    const message = createBaseTxInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.total_gas !== undefined && object.total_gas !== null) {
      message.totalGas = BigInt(object.total_gas);
    }
    return message;
  },
  toAmino(message: TxInfo): TxInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height.toString() : undefined;
    obj.total_gas = message.totalGas !== BigInt(0) ? message.totalGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TxInfoAminoMsg): TxInfo {
    return TxInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TxInfoProtoMsg): TxInfo {
    return TxInfo.decode(message.value);
  },
  toProto(message: TxInfo): Uint8Array {
    return TxInfo.encode(message).finish();
  },
  toProtoMsg(message: TxInfo): TxInfoProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.TxInfo",
      value: TxInfo.encode(message).finish()
    };
  }
};
function createBaseContractOperationInfo(): ContractOperationInfo {
  return {
    id: BigInt(0),
    txId: BigInt(0),
    contractAddress: "",
    operationType: 0,
    vmGas: BigInt(0),
    sdkGas: BigInt(0)
  };
}
export const ContractOperationInfo = {
  typeUrl: "/archway.tracking.v1.ContractOperationInfo",
  encode(message: ContractOperationInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.txId !== BigInt(0)) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    if (message.vmGas !== BigInt(0)) {
      writer.uint32(40).uint64(message.vmGas);
    }
    if (message.sdkGas !== BigInt(0)) {
      writer.uint32(48).uint64(message.sdkGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractOperationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractOperationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.txId = reader.uint64();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.operationType = (reader.int32() as any);
          break;
        case 5:
          message.vmGas = reader.uint64();
          break;
        case 6:
          message.sdkGas = reader.uint64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      txId: isSet(object.txId) ? BigInt(object.txId.toString()) : BigInt(0),
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      operationType: isSet(object.operationType) ? contractOperationFromJSON(object.operationType) : -1,
      vmGas: isSet(object.vmGas) ? BigInt(object.vmGas.toString()) : BigInt(0),
      sdkGas: isSet(object.sdkGas) ? BigInt(object.sdkGas.toString()) : BigInt(0)
    };
  },
  toJSON(message: ContractOperationInfo): JsonSafe<ContractOperationInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.txId !== undefined && (obj.txId = (message.txId || BigInt(0)).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.operationType !== undefined && (obj.operationType = contractOperationToJSON(message.operationType));
    message.vmGas !== undefined && (obj.vmGas = (message.vmGas || BigInt(0)).toString());
    message.sdkGas !== undefined && (obj.sdkGas = (message.sdkGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ContractOperationInfo>): ContractOperationInfo {
    const message = createBaseContractOperationInfo();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    message.operationType = object.operationType ?? 0;
    message.vmGas = object.vmGas !== undefined && object.vmGas !== null ? BigInt(object.vmGas.toString()) : BigInt(0);
    message.sdkGas = object.sdkGas !== undefined && object.sdkGas !== null ? BigInt(object.sdkGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ContractOperationInfoAmino): ContractOperationInfo {
    const message = createBaseContractOperationInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = BigInt(object.tx_id);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.operation_type !== undefined && object.operation_type !== null) {
      message.operationType = object.operation_type;
    }
    if (object.vm_gas !== undefined && object.vm_gas !== null) {
      message.vmGas = BigInt(object.vm_gas);
    }
    if (object.sdk_gas !== undefined && object.sdk_gas !== null) {
      message.sdkGas = BigInt(object.sdk_gas);
    }
    return message;
  },
  toAmino(message: ContractOperationInfo): ContractOperationInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.tx_id = message.txId !== BigInt(0) ? message.txId.toString() : undefined;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.operation_type = message.operationType === 0 ? undefined : message.operationType;
    obj.vm_gas = message.vmGas !== BigInt(0) ? message.vmGas.toString() : undefined;
    obj.sdk_gas = message.sdkGas !== BigInt(0) ? message.sdkGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractOperationInfoAminoMsg): ContractOperationInfo {
    return ContractOperationInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractOperationInfoProtoMsg): ContractOperationInfo {
    return ContractOperationInfo.decode(message.value);
  },
  toProto(message: ContractOperationInfo): Uint8Array {
    return ContractOperationInfo.encode(message).finish();
  },
  toProtoMsg(message: ContractOperationInfo): ContractOperationInfoProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.ContractOperationInfo",
      value: ContractOperationInfo.encode(message).finish()
    };
  }
};
function createBaseBlockTracking(): BlockTracking {
  return {
    txs: []
  };
}
export const BlockTracking = {
  typeUrl: "/archway.tracking.v1.BlockTracking",
  encode(message: BlockTracking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      TxTracking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockTracking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: BlockTracking): JsonSafe<BlockTracking> {
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
  },
  fromAmino(object: BlockTrackingAmino): BlockTracking {
    const message = createBaseBlockTracking();
    message.txs = object.txs?.map(e => TxTracking.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BlockTracking): BlockTrackingAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? TxTracking.toAmino(e) : undefined);
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: BlockTrackingAminoMsg): BlockTracking {
    return BlockTracking.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockTrackingProtoMsg): BlockTracking {
    return BlockTracking.decode(message.value);
  },
  toProto(message: BlockTracking): Uint8Array {
    return BlockTracking.encode(message).finish();
  },
  toProtoMsg(message: BlockTracking): BlockTrackingProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.BlockTracking",
      value: BlockTracking.encode(message).finish()
    };
  }
};
function createBaseTxTracking(): TxTracking {
  return {
    info: TxInfo.fromPartial({}),
    contractOperations: []
  };
}
export const TxTracking = {
  typeUrl: "/archway.tracking.v1.TxTracking",
  encode(message: TxTracking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      TxInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractOperations) {
      ContractOperationInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxTracking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: TxTracking): JsonSafe<TxTracking> {
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
  },
  fromAmino(object: TxTrackingAmino): TxTracking {
    const message = createBaseTxTracking();
    if (object.info !== undefined && object.info !== null) {
      message.info = TxInfo.fromAmino(object.info);
    }
    message.contractOperations = object.contract_operations?.map(e => ContractOperationInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxTracking): TxTrackingAmino {
    const obj: any = {};
    obj.info = message.info ? TxInfo.toAmino(message.info) : undefined;
    if (message.contractOperations) {
      obj.contract_operations = message.contractOperations.map(e => e ? ContractOperationInfo.toAmino(e) : undefined);
    } else {
      obj.contract_operations = message.contractOperations;
    }
    return obj;
  },
  fromAminoMsg(object: TxTrackingAminoMsg): TxTracking {
    return TxTracking.fromAmino(object.value);
  },
  fromProtoMsg(message: TxTrackingProtoMsg): TxTracking {
    return TxTracking.decode(message.value);
  },
  toProto(message: TxTracking): Uint8Array {
    return TxTracking.encode(message).finish();
  },
  toProtoMsg(message: TxTracking): TxTrackingProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.TxTracking",
      value: TxTracking.encode(message).finish()
    };
  }
};