/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * MsgRegisterInterchainAccount defines the Msg/RegisterInterchainAccount
 * request type.
 */
export interface MsgRegisterInterchainAccount {
  /**
   * contract_address is the address of the contrat who wants to register an ica
   * account on the counterparty chain
   */
  contractAddress: string;
  /** connection_id is the connection id between the two chains */
  connectionId: string;
}
export interface MsgRegisterInterchainAccountProtoMsg {
  typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount";
  value: Uint8Array;
}
/**
 * MsgRegisterInterchainAccount defines the Msg/RegisterInterchainAccount
 * request type.
 */
export interface MsgRegisterInterchainAccountAmino {
  /**
   * contract_address is the address of the contrat who wants to register an ica
   * account on the counterparty chain
   */
  contract_address?: string;
  /** connection_id is the connection id between the two chains */
  connection_id?: string;
}
export interface MsgRegisterInterchainAccountAminoMsg {
  type: "/archway.cwica.v1.MsgRegisterInterchainAccount";
  value: MsgRegisterInterchainAccountAmino;
}
/**
 * MsgRegisterInterchainAccountResponse defines the response for
 * Msg/RegisterInterchainAccount
 */
export interface MsgRegisterInterchainAccountResponse {}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
  typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccountResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterInterchainAccountResponse defines the response for
 * Msg/RegisterInterchainAccount
 */
export interface MsgRegisterInterchainAccountResponseAmino {}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
  type: "/archway.cwica.v1.MsgRegisterInterchainAccountResponse";
  value: MsgRegisterInterchainAccountResponseAmino;
}
/** MsgSendTx defines the Msg/SendTx request type. */
export interface MsgSendTx {
  /**
   * contract_address is the address of the who wants to submit a transaction to
   * the counterparty chain
   */
  contractAddress: string;
  /** connection_id is the connection id between the two chains */
  connectionId: string;
  /** msgs are the messages to be submitted to the counterparty chain */
  msgs: Any[];
  /** memo is the memo to be included in the packet */
  memo: string;
  /** timeout in seconds after which the packet times out */
  timeout: bigint;
}
export interface MsgSendTxProtoMsg {
  typeUrl: "/archway.cwica.v1.MsgSendTx";
  value: Uint8Array;
}
/** MsgSendTx defines the Msg/SendTx request type. */
export interface MsgSendTxAmino {
  /**
   * contract_address is the address of the who wants to submit a transaction to
   * the counterparty chain
   */
  contract_address?: string;
  /** connection_id is the connection id between the two chains */
  connection_id?: string;
  /** msgs are the messages to be submitted to the counterparty chain */
  msgs?: AnyAmino[];
  /** memo is the memo to be included in the packet */
  memo?: string;
  /** timeout in seconds after which the packet times out */
  timeout?: string;
}
export interface MsgSendTxAminoMsg {
  type: "/archway.cwica.v1.MsgSendTx";
  value: MsgSendTxAmino;
}
/** MsgSendTxResponse defines the response for Msg/SendTx */
export interface MsgSendTxResponse {
  /**
   * sequence_id is the channel's sequence_id for outgoing ibc packet. Unique
   * per a channel.
   */
  sequenceId: bigint;
  /** channel is the channel id the transaction was submitted from */
  channel: string;
}
export interface MsgSendTxResponseProtoMsg {
  typeUrl: "/archway.cwica.v1.MsgSendTxResponse";
  value: Uint8Array;
}
/** MsgSendTxResponse defines the response for Msg/SendTx */
export interface MsgSendTxResponseAmino {
  /**
   * sequence_id is the channel's sequence_id for outgoing ibc packet. Unique
   * per a channel.
   */
  sequence_id?: string;
  /** channel is the channel id the transaction was submitted from */
  channel?: string;
}
export interface MsgSendTxResponseAminoMsg {
  type: "/archway.cwica.v1.MsgSendTxResponse";
  value: MsgSendTxResponseAmino;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address of the authority that is allowed to update the
   * cwica module parameters.
   */
  authority: string;
  /**
   * params deines the module parmeters to update
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/archway.cwica.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the authority that is allowed to update the
   * cwica module parameters.
   */
  authority?: string;
  /**
   * params deines the module parmeters to update
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cwica/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParamsResponse is the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/archway.cwica.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse is the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/archway.cwica.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    contractAddress: "",
    connectionId: ""
  };
}
export const MsgRegisterInterchainAccount = {
  typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
  encode(message: MsgRegisterInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : ""
    };
  },
  toJSON(message: MsgRegisterInterchainAccount): JsonSafe<MsgRegisterInterchainAccount> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.contractAddress = object.contractAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg): MsgRegisterInterchainAccount {
    return MsgRegisterInterchainAccount.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainAccount): Uint8Array {
    return MsgRegisterInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
      value: MsgRegisterInterchainAccount.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}
export const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccountResponse",
  encode(_: MsgRegisterInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    return {};
  },
  toJSON(_: MsgRegisterInterchainAccountResponse): JsonSafe<MsgRegisterInterchainAccountResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  fromAmino(_: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
  toAmino(_: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg): MsgRegisterInterchainAccountResponse {
    return MsgRegisterInterchainAccountResponse.decode(message.value);
  },
  toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array {
    return MsgRegisterInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccountResponse",
      value: MsgRegisterInterchainAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSendTx(): MsgSendTx {
  return {
    contractAddress: "",
    connectionId: "",
    msgs: [],
    memo: "",
    timeout: BigInt(0)
  };
}
export const MsgSendTx = {
  typeUrl: "/archway.cwica.v1.MsgSendTx",
  encode(message: MsgSendTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeout);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 4:
          message.memo = reader.string();
          break;
        case 5:
          message.timeout = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendTx {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => Any.fromJSON(e)) : [],
      memo: isSet(object.memo) ? String(object.memo) : "",
      timeout: isSet(object.timeout) ? BigInt(object.timeout.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSendTx): JsonSafe<MsgSendTx> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeout !== undefined && (obj.timeout = (message.timeout || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSendTx>): MsgSendTx {
    const message = createBaseMsgSendTx();
    message.contractAddress = object.contractAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    message.timeout = object.timeout !== undefined && object.timeout !== null ? BigInt(object.timeout.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSendTxAmino): MsgSendTx {
    const message = createBaseMsgSendTx();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    message.msgs = object.msgs?.map(e => Any.fromAmino(e)) || [];
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout);
    }
    return message;
  },
  toAmino(message: MsgSendTx): MsgSendTxAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.timeout = message.timeout !== BigInt(0) ? message.timeout.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendTxAminoMsg): MsgSendTx {
    return MsgSendTx.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendTxProtoMsg): MsgSendTx {
    return MsgSendTx.decode(message.value);
  },
  toProto(message: MsgSendTx): Uint8Array {
    return MsgSendTx.encode(message).finish();
  },
  toProtoMsg(message: MsgSendTx): MsgSendTxProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.MsgSendTx",
      value: MsgSendTx.encode(message).finish()
    };
  }
};
function createBaseMsgSendTxResponse(): MsgSendTxResponse {
  return {
    sequenceId: BigInt(0),
    channel: ""
  };
}
export const MsgSendTxResponse = {
  typeUrl: "/archway.cwica.v1.MsgSendTxResponse",
  encode(message: MsgSendTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequenceId = reader.uint64();
          break;
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendTxResponse {
    return {
      sequenceId: isSet(object.sequenceId) ? BigInt(object.sequenceId.toString()) : BigInt(0),
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  toJSON(message: MsgSendTxResponse): JsonSafe<MsgSendTxResponse> {
    const obj: any = {};
    message.sequenceId !== undefined && (obj.sequenceId = (message.sequenceId || BigInt(0)).toString());
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial(object: Partial<MsgSendTxResponse>): MsgSendTxResponse {
    const message = createBaseMsgSendTxResponse();
    message.sequenceId = object.sequenceId !== undefined && object.sequenceId !== null ? BigInt(object.sequenceId.toString()) : BigInt(0);
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgSendTxResponseAmino): MsgSendTxResponse {
    const message = createBaseMsgSendTxResponse();
    if (object.sequence_id !== undefined && object.sequence_id !== null) {
      message.sequenceId = BigInt(object.sequence_id);
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = object.channel;
    }
    return message;
  },
  toAmino(message: MsgSendTxResponse): MsgSendTxResponseAmino {
    const obj: any = {};
    obj.sequence_id = message.sequenceId !== BigInt(0) ? message.sequenceId.toString() : undefined;
    obj.channel = message.channel === "" ? undefined : message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgSendTxResponseAminoMsg): MsgSendTxResponse {
    return MsgSendTxResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSendTxResponseProtoMsg): MsgSendTxResponse {
    return MsgSendTxResponse.decode(message.value);
  },
  toProto(message: MsgSendTxResponse): Uint8Array {
    return MsgSendTxResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendTxResponse): MsgSendTxResponseProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.MsgSendTxResponse",
      value: MsgSendTxResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.cwica.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cwica/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.cwica.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};