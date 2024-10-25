/* eslint-disable */
import { TxInfo, TxInfoAmino, ContractOperationInfo, ContractOperationInfoAmino } from "./tracking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
  /** tx_info_last_id defines the last unique ID for a TxInfo objs. */
  txInfoLastId: bigint;
  /** tx_infos defines a list of all the tracked transactions. */
  txInfos: TxInfo[];
  /**
   * contract_op_info_last_id defines the last unique ID for
   * ContractOperationInfo objs.
   */
  contractOpInfoLastId: bigint;
  /** contract_op_infos defines a list of all the tracked contract operations. */
  contractOpInfos: ContractOperationInfo[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/archway.tracking.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisStateAmino {
  /** tx_info_last_id defines the last unique ID for a TxInfo objs. */
  tx_info_last_id?: string;
  /** tx_infos defines a list of all the tracked transactions. */
  tx_infos?: TxInfoAmino[];
  /**
   * contract_op_info_last_id defines the last unique ID for
   * ContractOperationInfo objs.
   */
  contract_op_info_last_id?: string;
  /** contract_op_infos defines a list of all the tracked contract operations. */
  contract_op_infos?: ContractOperationInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/archway.tracking.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    txInfoLastId: BigInt(0),
    txInfos: [],
    contractOpInfoLastId: BigInt(0),
    contractOpInfos: []
  };
}
export const GenesisState = {
  typeUrl: "/archway.tracking.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txInfoLastId !== BigInt(0)) {
      writer.uint32(8).uint64(message.txInfoLastId);
    }
    for (const v of message.txInfos) {
      TxInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.contractOpInfoLastId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contractOpInfoLastId);
    }
    for (const v of message.contractOpInfos) {
      ContractOperationInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txInfoLastId = reader.uint64();
          break;
        case 2:
          message.txInfos.push(TxInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contractOpInfoLastId = reader.uint64();
          break;
        case 4:
          message.contractOpInfos.push(ContractOperationInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      txInfoLastId: isSet(object.txInfoLastId) ? BigInt(object.txInfoLastId.toString()) : BigInt(0),
      txInfos: Array.isArray(object?.txInfos) ? object.txInfos.map((e: any) => TxInfo.fromJSON(e)) : [],
      contractOpInfoLastId: isSet(object.contractOpInfoLastId) ? BigInt(object.contractOpInfoLastId.toString()) : BigInt(0),
      contractOpInfos: Array.isArray(object?.contractOpInfos) ? object.contractOpInfos.map((e: any) => ContractOperationInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.txInfoLastId !== undefined && (obj.txInfoLastId = (message.txInfoLastId || BigInt(0)).toString());
    if (message.txInfos) {
      obj.txInfos = message.txInfos.map(e => e ? TxInfo.toJSON(e) : undefined);
    } else {
      obj.txInfos = [];
    }
    message.contractOpInfoLastId !== undefined && (obj.contractOpInfoLastId = (message.contractOpInfoLastId || BigInt(0)).toString());
    if (message.contractOpInfos) {
      obj.contractOpInfos = message.contractOpInfos.map(e => e ? ContractOperationInfo.toJSON(e) : undefined);
    } else {
      obj.contractOpInfos = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.txInfoLastId = object.txInfoLastId !== undefined && object.txInfoLastId !== null ? BigInt(object.txInfoLastId.toString()) : BigInt(0);
    message.txInfos = object.txInfos?.map(e => TxInfo.fromPartial(e)) || [];
    message.contractOpInfoLastId = object.contractOpInfoLastId !== undefined && object.contractOpInfoLastId !== null ? BigInt(object.contractOpInfoLastId.toString()) : BigInt(0);
    message.contractOpInfos = object.contractOpInfos?.map(e => ContractOperationInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.tx_info_last_id !== undefined && object.tx_info_last_id !== null) {
      message.txInfoLastId = BigInt(object.tx_info_last_id);
    }
    message.txInfos = object.tx_infos?.map(e => TxInfo.fromAmino(e)) || [];
    if (object.contract_op_info_last_id !== undefined && object.contract_op_info_last_id !== null) {
      message.contractOpInfoLastId = BigInt(object.contract_op_info_last_id);
    }
    message.contractOpInfos = object.contract_op_infos?.map(e => ContractOperationInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.tx_info_last_id = message.txInfoLastId !== BigInt(0) ? message.txInfoLastId.toString() : undefined;
    if (message.txInfos) {
      obj.tx_infos = message.txInfos.map(e => e ? TxInfo.toAmino(e) : undefined);
    } else {
      obj.tx_infos = message.txInfos;
    }
    obj.contract_op_info_last_id = message.contractOpInfoLastId !== BigInt(0) ? message.contractOpInfoLastId.toString() : undefined;
    if (message.contractOpInfos) {
      obj.contract_op_infos = message.contractOpInfos.map(e => e ? ContractOperationInfo.toAmino(e) : undefined);
    } else {
      obj.contract_op_infos = message.contractOpInfos;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};