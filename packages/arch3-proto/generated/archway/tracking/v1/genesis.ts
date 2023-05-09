/* eslint-disable */
import { TxInfo, ContractOperationInfo } from "./tracking";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
  /** tx_info_last_id defines the last unique ID for a TxInfo objs. */
  txInfoLastId: Long;
  /** tx_infos defines a list of all the tracked transactions. */
  txInfos: TxInfo[];
  /**
   * contract_op_info_last_id defines the last unique ID for
   * ContractOperationInfo objs.
   */
  contractOpInfoLastId: Long;
  /** contract_op_infos defines a list of all the tracked contract operations. */
  contractOpInfos: ContractOperationInfo[];
}
function createBaseGenesisState(): GenesisState {
  return {
    txInfoLastId: Long.UZERO,
    txInfos: [],
    contractOpInfoLastId: Long.UZERO,
    contractOpInfos: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.txInfoLastId.isZero()) {
      writer.uint32(8).uint64(message.txInfoLastId);
    }
    for (const v of message.txInfos) {
      TxInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.contractOpInfoLastId.isZero()) {
      writer.uint32(24).uint64(message.contractOpInfoLastId);
    }
    for (const v of message.contractOpInfos) {
      ContractOperationInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txInfoLastId = (reader.uint64() as Long);
          break;
        case 2:
          message.txInfos.push(TxInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contractOpInfoLastId = (reader.uint64() as Long);
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
      txInfoLastId: isSet(object.txInfoLastId) ? Long.fromValue(object.txInfoLastId) : Long.UZERO,
      txInfos: Array.isArray(object?.txInfos) ? object.txInfos.map((e: any) => TxInfo.fromJSON(e)) : [],
      contractOpInfoLastId: isSet(object.contractOpInfoLastId) ? Long.fromValue(object.contractOpInfoLastId) : Long.UZERO,
      contractOpInfos: Array.isArray(object?.contractOpInfos) ? object.contractOpInfos.map((e: any) => ContractOperationInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.txInfoLastId !== undefined && (obj.txInfoLastId = (message.txInfoLastId || Long.UZERO).toString());
    if (message.txInfos) {
      obj.txInfos = message.txInfos.map(e => e ? TxInfo.toJSON(e) : undefined);
    } else {
      obj.txInfos = [];
    }
    message.contractOpInfoLastId !== undefined && (obj.contractOpInfoLastId = (message.contractOpInfoLastId || Long.UZERO).toString());
    if (message.contractOpInfos) {
      obj.contractOpInfos = message.contractOpInfos.map(e => e ? ContractOperationInfo.toJSON(e) : undefined);
    } else {
      obj.contractOpInfos = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.txInfoLastId = object.txInfoLastId !== undefined && object.txInfoLastId !== null ? Long.fromValue(object.txInfoLastId) : Long.UZERO;
    message.txInfos = object.txInfos?.map(e => TxInfo.fromPartial(e)) || [];
    message.contractOpInfoLastId = object.contractOpInfoLastId !== undefined && object.contractOpInfoLastId !== null ? Long.fromValue(object.contractOpInfoLastId) : Long.UZERO;
    message.contractOpInfos = object.contractOpInfos?.map(e => ContractOperationInfo.fromPartial(e)) || [];
    return message;
  }
};