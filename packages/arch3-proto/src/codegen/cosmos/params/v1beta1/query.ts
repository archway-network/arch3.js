import { ParamChange, ParamChangeSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */

  key: string;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */

  key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** param defines the queried parameter. */
  param?: ParamChange;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** param defines the queried parameter. */
  param?: ParamChangeSDKType;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }

    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;

        case 2:
          message.key = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    param: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.param = ParamChange.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
    return message;
  }

};