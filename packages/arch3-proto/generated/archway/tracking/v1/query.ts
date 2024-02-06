/* eslint-disable */
import { BlockTracking, BlockTrackingAmino } from "./tracking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryBlockGasTrackingRequest is the request for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingRequest {}
export interface QueryBlockGasTrackingRequestProtoMsg {
  typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingRequest";
  value: Uint8Array;
}
/** QueryBlockGasTrackingRequest is the request for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingRequestAmino {}
export interface QueryBlockGasTrackingRequestAminoMsg {
  type: "/archway.tracking.v1.QueryBlockGasTrackingRequest";
  value: QueryBlockGasTrackingRequestAmino;
}
/** QueryBlockGasTrackingResponse is the response for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingResponse {
  block: BlockTracking;
}
export interface QueryBlockGasTrackingResponseProtoMsg {
  typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingResponse";
  value: Uint8Array;
}
/** QueryBlockGasTrackingResponse is the response for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingResponseAmino {
  block?: BlockTrackingAmino;
}
export interface QueryBlockGasTrackingResponseAminoMsg {
  type: "/archway.tracking.v1.QueryBlockGasTrackingResponse";
  value: QueryBlockGasTrackingResponseAmino;
}
function createBaseQueryBlockGasTrackingRequest(): QueryBlockGasTrackingRequest {
  return {};
}
export const QueryBlockGasTrackingRequest = {
  typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingRequest",
  encode(_: QueryBlockGasTrackingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockGasTrackingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: QueryBlockGasTrackingRequestAmino): QueryBlockGasTrackingRequest {
    const message = createBaseQueryBlockGasTrackingRequest();
    return message;
  },
  toAmino(_: QueryBlockGasTrackingRequest): QueryBlockGasTrackingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBlockGasTrackingRequestAminoMsg): QueryBlockGasTrackingRequest {
    return QueryBlockGasTrackingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockGasTrackingRequestProtoMsg): QueryBlockGasTrackingRequest {
    return QueryBlockGasTrackingRequest.decode(message.value);
  },
  toProto(message: QueryBlockGasTrackingRequest): Uint8Array {
    return QueryBlockGasTrackingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockGasTrackingRequest): QueryBlockGasTrackingRequestProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingRequest",
      value: QueryBlockGasTrackingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBlockGasTrackingResponse(): QueryBlockGasTrackingResponse {
  return {
    block: BlockTracking.fromPartial({})
  };
}
export const QueryBlockGasTrackingResponse = {
  typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingResponse",
  encode(message: QueryBlockGasTrackingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      BlockTracking.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockGasTrackingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBlockGasTrackingResponseAmino): QueryBlockGasTrackingResponse {
    const message = createBaseQueryBlockGasTrackingResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockTracking.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: QueryBlockGasTrackingResponse): QueryBlockGasTrackingResponseAmino {
    const obj: any = {};
    obj.block = message.block ? BlockTracking.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlockGasTrackingResponseAminoMsg): QueryBlockGasTrackingResponse {
    return QueryBlockGasTrackingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockGasTrackingResponseProtoMsg): QueryBlockGasTrackingResponse {
    return QueryBlockGasTrackingResponse.decode(message.value);
  },
  toProto(message: QueryBlockGasTrackingResponse): Uint8Array {
    return QueryBlockGasTrackingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockGasTrackingResponse): QueryBlockGasTrackingResponseProtoMsg {
    return {
      typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingResponse",
      value: QueryBlockGasTrackingResponse.encode(message).finish()
    };
  }
};