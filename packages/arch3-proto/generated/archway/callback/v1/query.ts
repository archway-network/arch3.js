/* eslint-disable */
import { Params, ParamsAmino, CallbackFeesFeeSplit, CallbackFeesFeeSplitAmino, Callback, CallbackAmino } from "./callback";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/archway.callback.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/archway.callback.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  /** params defines all the module parameters. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/archway.callback.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponseAmino {
  /** params defines all the module parameters. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/archway.callback.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryEstimateCallbackFeesRequest is the request for Query.EstimateCallbackFees. */
export interface QueryEstimateCallbackFeesRequest {
  /** block_height is the height at which to estimate the callback fees */
  blockHeight: bigint;
}
export interface QueryEstimateCallbackFeesRequestProtoMsg {
  typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesRequest";
  value: Uint8Array;
}
/** QueryEstimateCallbackFeesRequest is the request for Query.EstimateCallbackFees. */
export interface QueryEstimateCallbackFeesRequestAmino {
  /** block_height is the height at which to estimate the callback fees */
  block_height?: string;
}
export interface QueryEstimateCallbackFeesRequestAminoMsg {
  type: "/archway.callback.v1.QueryEstimateCallbackFeesRequest";
  value: QueryEstimateCallbackFeesRequestAmino;
}
/** QueryEstimateCallbackFeesResponse is the response for Query.EstimateCallbackFees. */
export interface QueryEstimateCallbackFeesResponse {
  /** total_fees is the total fees that needs to be paid by the contract to reserve a callback */
  totalFees?: Coin;
  /** fee_split is the breakdown of the total_fees */
  feeSplit?: CallbackFeesFeeSplit;
}
export interface QueryEstimateCallbackFeesResponseProtoMsg {
  typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesResponse";
  value: Uint8Array;
}
/** QueryEstimateCallbackFeesResponse is the response for Query.EstimateCallbackFees. */
export interface QueryEstimateCallbackFeesResponseAmino {
  /** total_fees is the total fees that needs to be paid by the contract to reserve a callback */
  total_fees?: CoinAmino;
  /** fee_split is the breakdown of the total_fees */
  fee_split?: CallbackFeesFeeSplitAmino;
}
export interface QueryEstimateCallbackFeesResponseAminoMsg {
  type: "/archway.callback.v1.QueryEstimateCallbackFeesResponse";
  value: QueryEstimateCallbackFeesResponseAmino;
}
/** QueryCallbacksRequest is the request for Query.Callbacks. */
export interface QueryCallbacksRequest {
  /** block_height is the height at which to query the callbacks */
  blockHeight: bigint;
}
export interface QueryCallbacksRequestProtoMsg {
  typeUrl: "/archway.callback.v1.QueryCallbacksRequest";
  value: Uint8Array;
}
/** QueryCallbacksRequest is the request for Query.Callbacks. */
export interface QueryCallbacksRequestAmino {
  /** block_height is the height at which to query the callbacks */
  block_height?: string;
}
export interface QueryCallbacksRequestAminoMsg {
  type: "/archway.callback.v1.QueryCallbacksRequest";
  value: QueryCallbacksRequestAmino;
}
/** QueryCallbacksResponse is the response for Query.Callbacks. */
export interface QueryCallbacksResponse {
  /** callbacks is the list of callbacks registered at the given height */
  callbacks: Callback[];
}
export interface QueryCallbacksResponseProtoMsg {
  typeUrl: "/archway.callback.v1.QueryCallbacksResponse";
  value: Uint8Array;
}
/** QueryCallbacksResponse is the response for Query.Callbacks. */
export interface QueryCallbacksResponseAmino {
  /** callbacks is the list of callbacks registered at the given height */
  callbacks?: CallbackAmino[];
}
export interface QueryCallbacksResponseAminoMsg {
  type: "/archway.callback.v1.QueryCallbacksResponse";
  value: QueryCallbacksResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/archway.callback.v1.QueryParamsRequest",
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
      typeUrl: "/archway.callback.v1.QueryParamsRequest",
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
  typeUrl: "/archway.callback.v1.QueryParamsResponse",
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
      typeUrl: "/archway.callback.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateCallbackFeesRequest(): QueryEstimateCallbackFeesRequest {
  return {
    blockHeight: BigInt(0)
  };
}
export const QueryEstimateCallbackFeesRequest = {
  typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesRequest",
  encode(message: QueryEstimateCallbackFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateCallbackFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateCallbackFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateCallbackFeesRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryEstimateCallbackFeesRequest): JsonSafe<QueryEstimateCallbackFeesRequest> {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryEstimateCallbackFeesRequest>): QueryEstimateCallbackFeesRequest {
    const message = createBaseQueryEstimateCallbackFeesRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEstimateCallbackFeesRequestAmino): QueryEstimateCallbackFeesRequest {
    const message = createBaseQueryEstimateCallbackFeesRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: QueryEstimateCallbackFeesRequest): QueryEstimateCallbackFeesRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateCallbackFeesRequestAminoMsg): QueryEstimateCallbackFeesRequest {
    return QueryEstimateCallbackFeesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateCallbackFeesRequestProtoMsg): QueryEstimateCallbackFeesRequest {
    return QueryEstimateCallbackFeesRequest.decode(message.value);
  },
  toProto(message: QueryEstimateCallbackFeesRequest): Uint8Array {
    return QueryEstimateCallbackFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateCallbackFeesRequest): QueryEstimateCallbackFeesRequestProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesRequest",
      value: QueryEstimateCallbackFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateCallbackFeesResponse(): QueryEstimateCallbackFeesResponse {
  return {
    totalFees: undefined,
    feeSplit: undefined
  };
}
export const QueryEstimateCallbackFeesResponse = {
  typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesResponse",
  encode(message: QueryEstimateCallbackFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalFees !== undefined) {
      Coin.encode(message.totalFees, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeSplit !== undefined) {
      CallbackFeesFeeSplit.encode(message.feeSplit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateCallbackFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateCallbackFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalFees = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.feeSplit = CallbackFeesFeeSplit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateCallbackFeesResponse {
    return {
      totalFees: isSet(object.totalFees) ? Coin.fromJSON(object.totalFees) : undefined,
      feeSplit: isSet(object.feeSplit) ? CallbackFeesFeeSplit.fromJSON(object.feeSplit) : undefined
    };
  },
  toJSON(message: QueryEstimateCallbackFeesResponse): JsonSafe<QueryEstimateCallbackFeesResponse> {
    const obj: any = {};
    message.totalFees !== undefined && (obj.totalFees = message.totalFees ? Coin.toJSON(message.totalFees) : undefined);
    message.feeSplit !== undefined && (obj.feeSplit = message.feeSplit ? CallbackFeesFeeSplit.toJSON(message.feeSplit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryEstimateCallbackFeesResponse>): QueryEstimateCallbackFeesResponse {
    const message = createBaseQueryEstimateCallbackFeesResponse();
    message.totalFees = object.totalFees !== undefined && object.totalFees !== null ? Coin.fromPartial(object.totalFees) : undefined;
    message.feeSplit = object.feeSplit !== undefined && object.feeSplit !== null ? CallbackFeesFeeSplit.fromPartial(object.feeSplit) : undefined;
    return message;
  },
  fromAmino(object: QueryEstimateCallbackFeesResponseAmino): QueryEstimateCallbackFeesResponse {
    const message = createBaseQueryEstimateCallbackFeesResponse();
    if (object.total_fees !== undefined && object.total_fees !== null) {
      message.totalFees = Coin.fromAmino(object.total_fees);
    }
    if (object.fee_split !== undefined && object.fee_split !== null) {
      message.feeSplit = CallbackFeesFeeSplit.fromAmino(object.fee_split);
    }
    return message;
  },
  toAmino(message: QueryEstimateCallbackFeesResponse): QueryEstimateCallbackFeesResponseAmino {
    const obj: any = {};
    obj.total_fees = message.totalFees ? Coin.toAmino(message.totalFees) : undefined;
    obj.fee_split = message.feeSplit ? CallbackFeesFeeSplit.toAmino(message.feeSplit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateCallbackFeesResponseAminoMsg): QueryEstimateCallbackFeesResponse {
    return QueryEstimateCallbackFeesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateCallbackFeesResponseProtoMsg): QueryEstimateCallbackFeesResponse {
    return QueryEstimateCallbackFeesResponse.decode(message.value);
  },
  toProto(message: QueryEstimateCallbackFeesResponse): Uint8Array {
    return QueryEstimateCallbackFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateCallbackFeesResponse): QueryEstimateCallbackFeesResponseProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesResponse",
      value: QueryEstimateCallbackFeesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCallbacksRequest(): QueryCallbacksRequest {
  return {
    blockHeight: BigInt(0)
  };
}
export const QueryCallbacksRequest = {
  typeUrl: "/archway.callback.v1.QueryCallbacksRequest",
  encode(message: QueryCallbacksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCallbacksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCallbacksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCallbacksRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryCallbacksRequest): JsonSafe<QueryCallbacksRequest> {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryCallbacksRequest>): QueryCallbacksRequest {
    const message = createBaseQueryCallbacksRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCallbacksRequestAmino): QueryCallbacksRequest {
    const message = createBaseQueryCallbacksRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: QueryCallbacksRequest): QueryCallbacksRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCallbacksRequestAminoMsg): QueryCallbacksRequest {
    return QueryCallbacksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCallbacksRequestProtoMsg): QueryCallbacksRequest {
    return QueryCallbacksRequest.decode(message.value);
  },
  toProto(message: QueryCallbacksRequest): Uint8Array {
    return QueryCallbacksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCallbacksRequest): QueryCallbacksRequestProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.QueryCallbacksRequest",
      value: QueryCallbacksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCallbacksResponse(): QueryCallbacksResponse {
  return {
    callbacks: []
  };
}
export const QueryCallbacksResponse = {
  typeUrl: "/archway.callback.v1.QueryCallbacksResponse",
  encode(message: QueryCallbacksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.callbacks) {
      Callback.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCallbacksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCallbacksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbacks.push(Callback.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCallbacksResponse {
    return {
      callbacks: Array.isArray(object?.callbacks) ? object.callbacks.map((e: any) => Callback.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryCallbacksResponse): JsonSafe<QueryCallbacksResponse> {
    const obj: any = {};
    if (message.callbacks) {
      obj.callbacks = message.callbacks.map(e => e ? Callback.toJSON(e) : undefined);
    } else {
      obj.callbacks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCallbacksResponse>): QueryCallbacksResponse {
    const message = createBaseQueryCallbacksResponse();
    message.callbacks = object.callbacks?.map(e => Callback.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCallbacksResponseAmino): QueryCallbacksResponse {
    const message = createBaseQueryCallbacksResponse();
    message.callbacks = object.callbacks?.map(e => Callback.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCallbacksResponse): QueryCallbacksResponseAmino {
    const obj: any = {};
    if (message.callbacks) {
      obj.callbacks = message.callbacks.map(e => e ? Callback.toAmino(e) : undefined);
    } else {
      obj.callbacks = message.callbacks;
    }
    return obj;
  },
  fromAminoMsg(object: QueryCallbacksResponseAminoMsg): QueryCallbacksResponse {
    return QueryCallbacksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCallbacksResponseProtoMsg): QueryCallbacksResponse {
    return QueryCallbacksResponse.decode(message.value);
  },
  toProto(message: QueryCallbacksResponse): Uint8Array {
    return QueryCallbacksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCallbacksResponse): QueryCallbacksResponseProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.QueryCallbacksResponse",
      value: QueryCallbacksResponse.encode(message).finish()
    };
  }
};