/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/cwerrors parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/archway.cwerrors.v1.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/cwerrors parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/archway.cwerrors.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/archway.cwerrors.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/archway.cwerrors.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgSubscribeToError is the Msg/SubscribeToError request type. */
export interface MsgSubscribeToError {
  /**
   * sender is the address of who is registering the contarcts for callback on
   * error
   */
  sender: string;
  /** contract is the address of the contract that will be called on error */
  contractAddress: string;
  /**
   * fee is the subscription fee for the feature (current no fee is charged for
   * this feature)
   */
  fee: Coin;
}
export interface MsgSubscribeToErrorProtoMsg {
  typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError";
  value: Uint8Array;
}
/** MsgSubscribeToError is the Msg/SubscribeToError request type. */
export interface MsgSubscribeToErrorAmino {
  /**
   * sender is the address of who is registering the contarcts for callback on
   * error
   */
  sender?: string;
  /** contract is the address of the contract that will be called on error */
  contract_address?: string;
  /**
   * fee is the subscription fee for the feature (current no fee is charged for
   * this feature)
   */
  fee?: CoinAmino;
}
export interface MsgSubscribeToErrorAminoMsg {
  type: "/archway.cwerrors.v1.MsgSubscribeToError";
  value: MsgSubscribeToErrorAmino;
}
/**
 * MsgSubscribeToErrorResponse defines the response structure for executing a
 * MsgSubscribeToError message.
 */
export interface MsgSubscribeToErrorResponse {
  /**
   * subscription_valid_till is the block height till which the subscription is
   * valid
   */
  subscriptionValidTill: bigint;
}
export interface MsgSubscribeToErrorResponseProtoMsg {
  typeUrl: "/archway.cwerrors.v1.MsgSubscribeToErrorResponse";
  value: Uint8Array;
}
/**
 * MsgSubscribeToErrorResponse defines the response structure for executing a
 * MsgSubscribeToError message.
 */
export interface MsgSubscribeToErrorResponseAmino {
  /**
   * subscription_valid_till is the block height till which the subscription is
   * valid
   */
  subscription_valid_till?: string;
}
export interface MsgSubscribeToErrorResponseAminoMsg {
  type: "/archway.cwerrors.v1.MsgSubscribeToErrorResponse";
  value: MsgSubscribeToErrorResponseAmino;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
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
      typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.cwerrors.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/archway.cwerrors.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubscribeToError(): MsgSubscribeToError {
  return {
    sender: "",
    contractAddress: "",
    fee: Coin.fromPartial({})
  };
}
export const MsgSubscribeToError = {
  typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
  encode(message: MsgSubscribeToError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubscribeToError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToError();
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
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubscribeToError {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MsgSubscribeToError): JsonSafe<MsgSubscribeToError> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSubscribeToError>): MsgSubscribeToError {
    const message = createBaseMsgSubscribeToError();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MsgSubscribeToErrorAmino): MsgSubscribeToError {
    const message = createBaseMsgSubscribeToError();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MsgSubscribeToError): MsgSubscribeToErrorAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.fee = message.fee ? Coin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubscribeToErrorAminoMsg): MsgSubscribeToError {
    return MsgSubscribeToError.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubscribeToErrorProtoMsg): MsgSubscribeToError {
    return MsgSubscribeToError.decode(message.value);
  },
  toProto(message: MsgSubscribeToError): Uint8Array {
    return MsgSubscribeToError.encode(message).finish();
  },
  toProtoMsg(message: MsgSubscribeToError): MsgSubscribeToErrorProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
      value: MsgSubscribeToError.encode(message).finish()
    };
  }
};
function createBaseMsgSubscribeToErrorResponse(): MsgSubscribeToErrorResponse {
  return {
    subscriptionValidTill: BigInt(0)
  };
}
export const MsgSubscribeToErrorResponse = {
  typeUrl: "/archway.cwerrors.v1.MsgSubscribeToErrorResponse",
  encode(message: MsgSubscribeToErrorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionValidTill !== BigInt(0)) {
      writer.uint32(8).int64(message.subscriptionValidTill);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubscribeToErrorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionValidTill = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubscribeToErrorResponse {
    return {
      subscriptionValidTill: isSet(object.subscriptionValidTill) ? BigInt(object.subscriptionValidTill.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSubscribeToErrorResponse): JsonSafe<MsgSubscribeToErrorResponse> {
    const obj: any = {};
    message.subscriptionValidTill !== undefined && (obj.subscriptionValidTill = (message.subscriptionValidTill || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSubscribeToErrorResponse>): MsgSubscribeToErrorResponse {
    const message = createBaseMsgSubscribeToErrorResponse();
    message.subscriptionValidTill = object.subscriptionValidTill !== undefined && object.subscriptionValidTill !== null ? BigInt(object.subscriptionValidTill.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubscribeToErrorResponseAmino): MsgSubscribeToErrorResponse {
    const message = createBaseMsgSubscribeToErrorResponse();
    if (object.subscription_valid_till !== undefined && object.subscription_valid_till !== null) {
      message.subscriptionValidTill = BigInt(object.subscription_valid_till);
    }
    return message;
  },
  toAmino(message: MsgSubscribeToErrorResponse): MsgSubscribeToErrorResponseAmino {
    const obj: any = {};
    obj.subscription_valid_till = message.subscriptionValidTill !== BigInt(0) ? message.subscriptionValidTill.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubscribeToErrorResponseAminoMsg): MsgSubscribeToErrorResponse {
    return MsgSubscribeToErrorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubscribeToErrorResponseProtoMsg): MsgSubscribeToErrorResponse {
    return MsgSubscribeToErrorResponse.decode(message.value);
  },
  toProto(message: MsgSubscribeToErrorResponse): Uint8Array {
    return MsgSubscribeToErrorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubscribeToErrorResponse): MsgSubscribeToErrorResponseProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.MsgSubscribeToErrorResponse",
      value: MsgSubscribeToErrorResponse.encode(message).finish()
    };
  }
};