import { BlockGasTracking, ContractInstanceMetadata } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";

/** Request to get the block gas tracking */
export interface QueryBlockGasTrackingRequest {}

/** Response to get the block gas tracking response */
export interface QueryBlockGasTrackingResponse {
  blockGasTracking: BlockGasTracking;
}

/** Request to get contract metadata */
export interface QueryContractMetadataRequest {
  /** Request to get contract metadata */
  address: string;
}

/** Response to the contract metadata query */
export interface QueryContractMetadataResponse {
  /** Response to the contract metadata query */
  metadata: ContractInstanceMetadata;
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

  fromPartial(_: DeepPartial<QueryBlockGasTrackingRequest>): QueryBlockGasTrackingRequest {
    const message = createBaseQueryBlockGasTrackingRequest();
    return message;
  }

};

function createBaseQueryBlockGasTrackingResponse(): QueryBlockGasTrackingResponse {
  return {
    blockGasTracking: undefined
  };
}

export const QueryBlockGasTrackingResponse = {
  encode(message: QueryBlockGasTrackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockGasTracking !== undefined) {
      BlockGasTracking.encode(message.blockGasTracking, writer.uint32(10).fork()).ldelim();
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
          message.blockGasTracking = BlockGasTracking.decode(reader, reader.uint32());
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
      blockGasTracking: isSet(object.blockGasTracking) ? BlockGasTracking.fromJSON(object.blockGasTracking) : undefined
    };
  },

  toJSON(message: QueryBlockGasTrackingResponse): unknown {
    const obj: any = {};
    message.blockGasTracking !== undefined && (obj.blockGasTracking = message.blockGasTracking ? BlockGasTracking.toJSON(message.blockGasTracking) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBlockGasTrackingResponse>): QueryBlockGasTrackingResponse {
    const message = createBaseQueryBlockGasTrackingResponse();
    message.blockGasTracking = object.blockGasTracking !== undefined && object.blockGasTracking !== null ? BlockGasTracking.fromPartial(object.blockGasTracking) : undefined;
    return message;
  }

};

function createBaseQueryContractMetadataRequest(): QueryContractMetadataRequest {
  return {
    address: ""
  };
}

export const QueryContractMetadataRequest = {
  encode(message: QueryContractMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractMetadataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractMetadataRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: QueryContractMetadataRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractMetadataRequest>): QueryContractMetadataRequest {
    const message = createBaseQueryContractMetadataRequest();
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseQueryContractMetadataResponse(): QueryContractMetadataResponse {
  return {
    metadata: undefined
  };
}

export const QueryContractMetadataResponse = {
  encode(message: QueryContractMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      ContractInstanceMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata = ContractInstanceMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryContractMetadataResponse {
    return {
      metadata: isSet(object.metadata) ? ContractInstanceMetadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: QueryContractMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractInstanceMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryContractMetadataResponse>): QueryContractMetadataResponse {
    const message = createBaseQueryContractMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractInstanceMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};