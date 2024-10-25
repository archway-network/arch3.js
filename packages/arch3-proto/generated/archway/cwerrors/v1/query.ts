/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { SudoError, SudoErrorAmino } from "./cwerrors";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/archway.cwerrors.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/archway.cwerrors.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  /** params defines all the module parameters. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/archway.cwerrors.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponseAmino {
  /** params defines all the module parameters. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/archway.cwerrors.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryErrorsRequest is the request for Query.Errors. */
export interface QueryErrorsRequest {
  /** contract_address is the address of the contract whose errors to query for */
  contractAddress: string;
}
export interface QueryErrorsRequestProtoMsg {
  typeUrl: "/archway.cwerrors.v1.QueryErrorsRequest";
  value: Uint8Array;
}
/** QueryErrorsRequest is the request for Query.Errors. */
export interface QueryErrorsRequestAmino {
  /** contract_address is the address of the contract whose errors to query for */
  contract_address?: string;
}
export interface QueryErrorsRequestAminoMsg {
  type: "/archway.cwerrors.v1.QueryErrorsRequest";
  value: QueryErrorsRequestAmino;
}
/** QueryErrorsResponse is the response for Query.Errors. */
export interface QueryErrorsResponse {
  /** errors defines all the contract errors which will be returned */
  errors: SudoError[];
}
export interface QueryErrorsResponseProtoMsg {
  typeUrl: "/archway.cwerrors.v1.QueryErrorsResponse";
  value: Uint8Array;
}
/** QueryErrorsResponse is the response for Query.Errors. */
export interface QueryErrorsResponseAmino {
  /** errors defines all the contract errors which will be returned */
  errors?: SudoErrorAmino[];
}
export interface QueryErrorsResponseAminoMsg {
  type: "/archway.cwerrors.v1.QueryErrorsResponse";
  value: QueryErrorsResponseAmino;
}
/** QueryIsSubscribedRequest is the request for Query.IsSubscribed. */
export interface QueryIsSubscribedRequest {
  /** contract_address is the address of the contract to query if subscribed */
  contractAddress: string;
}
export interface QueryIsSubscribedRequestProtoMsg {
  typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedRequest";
  value: Uint8Array;
}
/** QueryIsSubscribedRequest is the request for Query.IsSubscribed. */
export interface QueryIsSubscribedRequestAmino {
  /** contract_address is the address of the contract to query if subscribed */
  contract_address?: string;
}
export interface QueryIsSubscribedRequestAminoMsg {
  type: "/archway.cwerrors.v1.QueryIsSubscribedRequest";
  value: QueryIsSubscribedRequestAmino;
}
/** QueryIsSubscribedResponse is the response for Query.IsSubscribed. */
export interface QueryIsSubscribedResponse {
  /** subscribed defines if the contract is subscribed to sudo error callbacks */
  subscribed: boolean;
  /**
   * subscription_valid_till defines the block height till which the
   * subscription is valid
   */
  subscriptionValidTill: bigint;
}
export interface QueryIsSubscribedResponseProtoMsg {
  typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedResponse";
  value: Uint8Array;
}
/** QueryIsSubscribedResponse is the response for Query.IsSubscribed. */
export interface QueryIsSubscribedResponseAmino {
  /** subscribed defines if the contract is subscribed to sudo error callbacks */
  subscribed?: boolean;
  /**
   * subscription_valid_till defines the block height till which the
   * subscription is valid
   */
  subscription_valid_till?: string;
}
export interface QueryIsSubscribedResponseAminoMsg {
  type: "/archway.cwerrors.v1.QueryIsSubscribedResponse";
  value: QueryIsSubscribedResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/archway.cwerrors.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/archway.cwerrors.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryErrorsRequest(): QueryErrorsRequest {
  return {
    contractAddress: ""
  };
}
export const QueryErrorsRequest = {
  typeUrl: "/archway.cwerrors.v1.QueryErrorsRequest",
  encode(message: QueryErrorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryErrorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryErrorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryErrorsRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryErrorsRequest): JsonSafe<QueryErrorsRequest> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryErrorsRequest>): QueryErrorsRequest {
    const message = createBaseQueryErrorsRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryErrorsRequestAmino): QueryErrorsRequest {
    const message = createBaseQueryErrorsRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryErrorsRequest): QueryErrorsRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryErrorsRequestAminoMsg): QueryErrorsRequest {
    return QueryErrorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryErrorsRequestProtoMsg): QueryErrorsRequest {
    return QueryErrorsRequest.decode(message.value);
  },
  toProto(message: QueryErrorsRequest): Uint8Array {
    return QueryErrorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryErrorsRequest): QueryErrorsRequestProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.QueryErrorsRequest",
      value: QueryErrorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryErrorsResponse(): QueryErrorsResponse {
  return {
    errors: []
  };
}
export const QueryErrorsResponse = {
  typeUrl: "/archway.cwerrors.v1.QueryErrorsResponse",
  encode(message: QueryErrorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.errors) {
      SudoError.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryErrorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryErrorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(SudoError.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryErrorsResponse {
    return {
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => SudoError.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryErrorsResponse): JsonSafe<QueryErrorsResponse> {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? SudoError.toJSON(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryErrorsResponse>): QueryErrorsResponse {
    const message = createBaseQueryErrorsResponse();
    message.errors = object.errors?.map(e => SudoError.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryErrorsResponseAmino): QueryErrorsResponse {
    const message = createBaseQueryErrorsResponse();
    message.errors = object.errors?.map(e => SudoError.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryErrorsResponse): QueryErrorsResponseAmino {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? SudoError.toAmino(e) : undefined);
    } else {
      obj.errors = message.errors;
    }
    return obj;
  },
  fromAminoMsg(object: QueryErrorsResponseAminoMsg): QueryErrorsResponse {
    return QueryErrorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryErrorsResponseProtoMsg): QueryErrorsResponse {
    return QueryErrorsResponse.decode(message.value);
  },
  toProto(message: QueryErrorsResponse): Uint8Array {
    return QueryErrorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryErrorsResponse): QueryErrorsResponseProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.QueryErrorsResponse",
      value: QueryErrorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIsSubscribedRequest(): QueryIsSubscribedRequest {
  return {
    contractAddress: ""
  };
}
export const QueryIsSubscribedRequest = {
  typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedRequest",
  encode(message: QueryIsSubscribedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsSubscribedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsSubscribedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsSubscribedRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryIsSubscribedRequest): JsonSafe<QueryIsSubscribedRequest> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryIsSubscribedRequest>): QueryIsSubscribedRequest {
    const message = createBaseQueryIsSubscribedRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryIsSubscribedRequestAmino): QueryIsSubscribedRequest {
    const message = createBaseQueryIsSubscribedRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryIsSubscribedRequest): QueryIsSubscribedRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryIsSubscribedRequestAminoMsg): QueryIsSubscribedRequest {
    return QueryIsSubscribedRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsSubscribedRequestProtoMsg): QueryIsSubscribedRequest {
    return QueryIsSubscribedRequest.decode(message.value);
  },
  toProto(message: QueryIsSubscribedRequest): Uint8Array {
    return QueryIsSubscribedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIsSubscribedRequest): QueryIsSubscribedRequestProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedRequest",
      value: QueryIsSubscribedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIsSubscribedResponse(): QueryIsSubscribedResponse {
  return {
    subscribed: false,
    subscriptionValidTill: BigInt(0)
  };
}
export const QueryIsSubscribedResponse = {
  typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedResponse",
  encode(message: QueryIsSubscribedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscribed === true) {
      writer.uint32(8).bool(message.subscribed);
    }
    if (message.subscriptionValidTill !== BigInt(0)) {
      writer.uint32(16).int64(message.subscriptionValidTill);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIsSubscribedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsSubscribedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribed = reader.bool();
          break;
        case 2:
          message.subscriptionValidTill = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsSubscribedResponse {
    return {
      subscribed: isSet(object.subscribed) ? Boolean(object.subscribed) : false,
      subscriptionValidTill: isSet(object.subscriptionValidTill) ? BigInt(object.subscriptionValidTill.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryIsSubscribedResponse): JsonSafe<QueryIsSubscribedResponse> {
    const obj: any = {};
    message.subscribed !== undefined && (obj.subscribed = message.subscribed);
    message.subscriptionValidTill !== undefined && (obj.subscriptionValidTill = (message.subscriptionValidTill || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryIsSubscribedResponse>): QueryIsSubscribedResponse {
    const message = createBaseQueryIsSubscribedResponse();
    message.subscribed = object.subscribed ?? false;
    message.subscriptionValidTill = object.subscriptionValidTill !== undefined && object.subscriptionValidTill !== null ? BigInt(object.subscriptionValidTill.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryIsSubscribedResponseAmino): QueryIsSubscribedResponse {
    const message = createBaseQueryIsSubscribedResponse();
    if (object.subscribed !== undefined && object.subscribed !== null) {
      message.subscribed = object.subscribed;
    }
    if (object.subscription_valid_till !== undefined && object.subscription_valid_till !== null) {
      message.subscriptionValidTill = BigInt(object.subscription_valid_till);
    }
    return message;
  },
  toAmino(message: QueryIsSubscribedResponse): QueryIsSubscribedResponseAmino {
    const obj: any = {};
    obj.subscribed = message.subscribed === false ? undefined : message.subscribed;
    obj.subscription_valid_till = message.subscriptionValidTill !== BigInt(0) ? message.subscriptionValidTill.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIsSubscribedResponseAminoMsg): QueryIsSubscribedResponse {
    return QueryIsSubscribedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIsSubscribedResponseProtoMsg): QueryIsSubscribedResponse {
    return QueryIsSubscribedResponse.decode(message.value);
  },
  toProto(message: QueryIsSubscribedResponse): Uint8Array {
    return QueryIsSubscribedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIsSubscribedResponse): QueryIsSubscribedResponseProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedResponse",
      value: QueryIsSubscribedResponse.encode(message).finish()
    };
  }
};