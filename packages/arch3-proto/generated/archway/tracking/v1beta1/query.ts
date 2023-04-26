/* eslint-disable */
import { BlockTracking } from "./tracking";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryBlockGasTrackingRequest is the request for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingRequest {}
/** QueryBlockGasTrackingResponse is the response for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingResponse {
  block?: BlockTracking;
}
function createBaseQueryBlockGasTrackingRequest(): QueryBlockGasTrackingRequest {
  return {};
}
export const QueryBlockGasTrackingRequest = {
  encode(_: QueryBlockGasTrackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasTrackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockGasTrackingRequest();
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
  fromJSON(_: any): QueryBlockGasTrackingRequest {
    return {};
  },
  toJSON(_: QueryBlockGasTrackingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryBlockGasTrackingRequest>): QueryBlockGasTrackingRequest {
    const message = createBaseQueryBlockGasTrackingRequest();
    return message;
  }
};
function createBaseQueryBlockGasTrackingResponse(): QueryBlockGasTrackingResponse {
  return {
    block: undefined
  };
}
export const QueryBlockGasTrackingResponse = {
  encode(message: QueryBlockGasTrackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockTracking.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasTrackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockGasTrackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockTracking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBlockGasTrackingResponse {
    return {
      block: isSet(object.block) ? BlockTracking.fromJSON(object.block) : undefined
    };
  },
  toJSON(message: QueryBlockGasTrackingResponse): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockTracking.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryBlockGasTrackingResponse>): QueryBlockGasTrackingResponse {
    const message = createBaseQueryBlockGasTrackingResponse();
    message.block = object.block !== undefined && object.block !== null ? BlockTracking.fromPartial(object.block) : undefined;
    return message;
  }
};