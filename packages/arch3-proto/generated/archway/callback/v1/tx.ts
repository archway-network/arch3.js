/* eslint-disable */
import { Params, ParamsAmino } from "./callback";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/callback parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/archway.callback.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/callback parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/archway.callback.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/archway.callback.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/archway.callback.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgRequestCallback is the Msg/RequestCallback request type. */
export interface MsgRequestCallback {
  /** sender is the address who is requesting the callback (bech32 encoded) */
  sender: string;
  /** contract_address is the address of the contract which is requesting the callback (bech32 encoded) */
  contractAddress: string;
  /** job_id is an identifier the callback requestor can pass in to identify the callback when it happens */
  jobId: bigint;
  /** callback_height is the height at which the callback is executed. */
  callbackHeight: bigint;
  /** fees is the amount of fees being paid to register the contract */
  fees: Coin;
}
export interface MsgRequestCallbackProtoMsg {
  typeUrl: "/archway.callback.v1.MsgRequestCallback";
  value: Uint8Array;
}
/** MsgRequestCallback is the Msg/RequestCallback request type. */
export interface MsgRequestCallbackAmino {
  /** sender is the address who is requesting the callback (bech32 encoded) */
  sender?: string;
  /** contract_address is the address of the contract which is requesting the callback (bech32 encoded) */
  contract_address?: string;
  /** job_id is an identifier the callback requestor can pass in to identify the callback when it happens */
  job_id?: string;
  /** callback_height is the height at which the callback is executed. */
  callback_height?: string;
  /** fees is the amount of fees being paid to register the contract */
  fees?: CoinAmino;
}
export interface MsgRequestCallbackAminoMsg {
  type: "/archway.callback.v1.MsgRequestCallback";
  value: MsgRequestCallbackAmino;
}
/** MsgRequestCallbackResponse defines the response structure for executing a MsgRequestCallback message. */
export interface MsgRequestCallbackResponse {}
export interface MsgRequestCallbackResponseProtoMsg {
  typeUrl: "/archway.callback.v1.MsgRequestCallbackResponse";
  value: Uint8Array;
}
/** MsgRequestCallbackResponse defines the response structure for executing a MsgRequestCallback message. */
export interface MsgRequestCallbackResponseAmino {}
export interface MsgRequestCallbackResponseAminoMsg {
  type: "/archway.callback.v1.MsgRequestCallbackResponse";
  value: MsgRequestCallbackResponseAmino;
}
/** MsgCancelCallback is the Msg/CancelCallback request type. */
export interface MsgCancelCallback {
  /** sender is the address of the contract which is cancelling the callback (bech32 encoded) */
  sender: string;
  /** contract_address is the address of the contract (bech32 encoded) */
  contractAddress: string;
  /** job_id is an identifier the callback requestor had passed during registration of the callback */
  jobId: bigint;
  /** callback_height is the height at which the callback requestor had registered the callback */
  callbackHeight: bigint;
}
export interface MsgCancelCallbackProtoMsg {
  typeUrl: "/archway.callback.v1.MsgCancelCallback";
  value: Uint8Array;
}
/** MsgCancelCallback is the Msg/CancelCallback request type. */
export interface MsgCancelCallbackAmino {
  /** sender is the address of the contract which is cancelling the callback (bech32 encoded) */
  sender?: string;
  /** contract_address is the address of the contract (bech32 encoded) */
  contract_address?: string;
  /** job_id is an identifier the callback requestor had passed during registration of the callback */
  job_id?: string;
  /** callback_height is the height at which the callback requestor had registered the callback */
  callback_height?: string;
}
export interface MsgCancelCallbackAminoMsg {
  type: "/archway.callback.v1.MsgCancelCallback";
  value: MsgCancelCallbackAmino;
}
/** MsgCancelCallbackResponse defines the response structure for executing a MsgCancelCallback message. */
export interface MsgCancelCallbackResponse {
  /** refund is the amount of fees being refunded due to the cancellation of the callback */
  refund: Coin;
}
export interface MsgCancelCallbackResponseProtoMsg {
  typeUrl: "/archway.callback.v1.MsgCancelCallbackResponse";
  value: Uint8Array;
}
/** MsgCancelCallbackResponse defines the response structure for executing a MsgCancelCallback message. */
export interface MsgCancelCallbackResponseAmino {
  /** refund is the amount of fees being refunded due to the cancellation of the callback */
  refund?: CoinAmino;
}
export interface MsgCancelCallbackResponseAminoMsg {
  type: "/archway.callback.v1.MsgCancelCallbackResponse";
  value: MsgCancelCallbackResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.callback.v1.MsgUpdateParams",
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
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.callback.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/archway.callback.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRequestCallback(): MsgRequestCallback {
  return {
    sender: "",
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    fees: Coin.fromPartial({})
  };
}
export const MsgRequestCallback = {
  typeUrl: "/archway.callback.v1.MsgRequestCallback",
  encode(message: MsgRequestCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(24).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.callbackHeight);
    }
    if (message.fees !== undefined) {
      Coin.encode(message.fees, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.jobId = reader.uint64();
          break;
        case 4:
          message.callbackHeight = reader.int64();
          break;
        case 5:
          message.fees = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRequestCallback {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      callbackHeight: isSet(object.callbackHeight) ? BigInt(object.callbackHeight.toString()) : BigInt(0),
      fees: isSet(object.fees) ? Coin.fromJSON(object.fees) : undefined
    };
  },
  toJSON(message: MsgRequestCallback): JsonSafe<MsgRequestCallback> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined && (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.fees !== undefined && (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgRequestCallback>): MsgRequestCallback {
    const message = createBaseMsgRequestCallback();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.callbackHeight = object.callbackHeight !== undefined && object.callbackHeight !== null ? BigInt(object.callbackHeight.toString()) : BigInt(0);
    message.fees = object.fees !== undefined && object.fees !== null ? Coin.fromPartial(object.fees) : undefined;
    return message;
  },
  fromAmino(object: MsgRequestCallbackAmino): MsgRequestCallback {
    const message = createBaseMsgRequestCallback();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.job_id !== undefined && object.job_id !== null) {
      message.jobId = BigInt(object.job_id);
    }
    if (object.callback_height !== undefined && object.callback_height !== null) {
      message.callbackHeight = BigInt(object.callback_height);
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Coin.fromAmino(object.fees);
    }
    return message;
  },
  toAmino(message: MsgRequestCallback): MsgRequestCallbackAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.callback_height = message.callbackHeight !== BigInt(0) ? message.callbackHeight.toString() : undefined;
    obj.fees = message.fees ? Coin.toAmino(message.fees) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRequestCallbackAminoMsg): MsgRequestCallback {
    return MsgRequestCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestCallbackProtoMsg): MsgRequestCallback {
    return MsgRequestCallback.decode(message.value);
  },
  toProto(message: MsgRequestCallback): Uint8Array {
    return MsgRequestCallback.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestCallback): MsgRequestCallbackProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.MsgRequestCallback",
      value: MsgRequestCallback.encode(message).finish()
    };
  }
};
function createBaseMsgRequestCallbackResponse(): MsgRequestCallbackResponse {
  return {};
}
export const MsgRequestCallbackResponse = {
  typeUrl: "/archway.callback.v1.MsgRequestCallbackResponse",
  encode(_: MsgRequestCallbackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestCallbackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestCallbackResponse();
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
  fromJSON(_: any): MsgRequestCallbackResponse {
    return {};
  },
  toJSON(_: MsgRequestCallbackResponse): JsonSafe<MsgRequestCallbackResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRequestCallbackResponse>): MsgRequestCallbackResponse {
    const message = createBaseMsgRequestCallbackResponse();
    return message;
  },
  fromAmino(_: MsgRequestCallbackResponseAmino): MsgRequestCallbackResponse {
    const message = createBaseMsgRequestCallbackResponse();
    return message;
  },
  toAmino(_: MsgRequestCallbackResponse): MsgRequestCallbackResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRequestCallbackResponseAminoMsg): MsgRequestCallbackResponse {
    return MsgRequestCallbackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRequestCallbackResponseProtoMsg): MsgRequestCallbackResponse {
    return MsgRequestCallbackResponse.decode(message.value);
  },
  toProto(message: MsgRequestCallbackResponse): Uint8Array {
    return MsgRequestCallbackResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRequestCallbackResponse): MsgRequestCallbackResponseProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.MsgRequestCallbackResponse",
      value: MsgRequestCallbackResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelCallback(): MsgCancelCallback {
  return {
    sender: "",
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0)
  };
}
export const MsgCancelCallback = {
  typeUrl: "/archway.callback.v1.MsgCancelCallback",
  encode(message: MsgCancelCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(24).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.callbackHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCallback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.jobId = reader.uint64();
          break;
        case 4:
          message.callbackHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelCallback {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      callbackHeight: isSet(object.callbackHeight) ? BigInt(object.callbackHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCancelCallback): JsonSafe<MsgCancelCallback> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined && (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCancelCallback>): MsgCancelCallback {
    const message = createBaseMsgCancelCallback();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.callbackHeight = object.callbackHeight !== undefined && object.callbackHeight !== null ? BigInt(object.callbackHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCancelCallbackAmino): MsgCancelCallback {
    const message = createBaseMsgCancelCallback();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.job_id !== undefined && object.job_id !== null) {
      message.jobId = BigInt(object.job_id);
    }
    if (object.callback_height !== undefined && object.callback_height !== null) {
      message.callbackHeight = BigInt(object.callback_height);
    }
    return message;
  },
  toAmino(message: MsgCancelCallback): MsgCancelCallbackAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.callback_height = message.callbackHeight !== BigInt(0) ? message.callbackHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelCallbackAminoMsg): MsgCancelCallback {
    return MsgCancelCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelCallbackProtoMsg): MsgCancelCallback {
    return MsgCancelCallback.decode(message.value);
  },
  toProto(message: MsgCancelCallback): Uint8Array {
    return MsgCancelCallback.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCallback): MsgCancelCallbackProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.MsgCancelCallback",
      value: MsgCancelCallback.encode(message).finish()
    };
  }
};
function createBaseMsgCancelCallbackResponse(): MsgCancelCallbackResponse {
  return {
    refund: Coin.fromPartial({})
  };
}
export const MsgCancelCallbackResponse = {
  typeUrl: "/archway.callback.v1.MsgCancelCallbackResponse",
  encode(message: MsgCancelCallbackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.refund !== undefined) {
      Coin.encode(message.refund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCallbackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCallbackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refund = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelCallbackResponse {
    return {
      refund: isSet(object.refund) ? Coin.fromJSON(object.refund) : undefined
    };
  },
  toJSON(message: MsgCancelCallbackResponse): JsonSafe<MsgCancelCallbackResponse> {
    const obj: any = {};
    message.refund !== undefined && (obj.refund = message.refund ? Coin.toJSON(message.refund) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelCallbackResponse>): MsgCancelCallbackResponse {
    const message = createBaseMsgCancelCallbackResponse();
    message.refund = object.refund !== undefined && object.refund !== null ? Coin.fromPartial(object.refund) : undefined;
    return message;
  },
  fromAmino(object: MsgCancelCallbackResponseAmino): MsgCancelCallbackResponse {
    const message = createBaseMsgCancelCallbackResponse();
    if (object.refund !== undefined && object.refund !== null) {
      message.refund = Coin.fromAmino(object.refund);
    }
    return message;
  },
  toAmino(message: MsgCancelCallbackResponse): MsgCancelCallbackResponseAmino {
    const obj: any = {};
    obj.refund = message.refund ? Coin.toAmino(message.refund) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCancelCallbackResponseAminoMsg): MsgCancelCallbackResponse {
    return MsgCancelCallbackResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelCallbackResponseProtoMsg): MsgCancelCallbackResponse {
    return MsgCancelCallbackResponse.decode(message.value);
  },
  toProto(message: MsgCancelCallbackResponse): Uint8Array {
    return MsgCancelCallbackResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelCallbackResponse): MsgCancelCallbackResponseProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.MsgCancelCallbackResponse",
      value: MsgCancelCallbackResponse.encode(message).finish()
    };
  }
};