import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import * as _m0 from "protobufjs/minimal";
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */

export enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,

  /**
   * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   */
  BROADCAST_MODE_BLOCK = 1,

  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,

  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */

export enum BroadcastModeSDKType {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,

  /**
   * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   */
  BROADCAST_MODE_BLOCK = 1,

  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,

  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;

    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;

    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;

    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";

    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";

    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";

    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";

    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventRequest {
  /** events is the list of transaction event type. */
  events: string[];
  /** pagination defines an pagination for the request. */

  pagination?: PageRequest;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventRequestSDKType {
  /** events is the list of transaction event type. */
  events: string[];
  /** pagination defines an pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs: Tx[];
  /** tx_responses is the list of queried TxResponses. */

  txResponses: TxResponse[];
  /** pagination defines an pagination for the response. */

  pagination?: PageResponse;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventResponseSDKType {
  /** txs is the list of queried transactions. */
  txs: TxSDKType[];
  /** tx_responses is the list of queried TxResponses. */

  tx_responses: TxResponseSDKType[];
  /** pagination defines an pagination for the response. */

  pagination?: PageResponseSDKType;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

export interface BroadcastTxRequest {
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
  mode: BroadcastMode;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

export interface BroadcastTxRequestSDKType {
  /** tx_bytes is the raw transaction. */
  tx_bytes: Uint8Array;
  mode: BroadcastModeSDKType;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

export interface BroadcastTxResponse {
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

export interface BroadcastTxResponseSDKType {
  /** tx_response is the queried TxResponses. */
  tx_response?: TxResponseSDKType;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

export interface SimulateRequest {
  /** tx is the transaction to simulate. */
  tx?: Tx;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

export interface SimulateRequestSDKType {
  /** tx is the transaction to simulate. */
  tx?: TxSDKType;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gasInfo?: GasInfo;
  /** result is the result of the simulation. */

  result?: Result;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

export interface SimulateResponseSDKType {
  /** gas_info is the information about gas used in the simulation. */
  gas_info?: GasInfoSDKType;
  /** result is the result of the simulation. */

  result?: ResultSDKType;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

export interface GetTxRequest {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

export interface GetTxRequestSDKType {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */

export interface GetTxResponse {
  /** tx is the queried transaction. */
  tx?: Tx;
  /** tx_response is the queried TxResponses. */

  txResponse?: TxResponse;
}
/** GetTxResponse is the response type for the Service.GetTx method. */

export interface GetTxResponseSDKType {
  /** tx is the queried transaction. */
  tx?: TxSDKType;
  /** tx_response is the queried TxResponses. */

  tx_response?: TxResponseSDKType;
}

function createBaseGetTxsEventRequest(): GetTxsEventRequest {
  return {
    events: [],
    pagination: undefined
  };
}

export const GetTxsEventRequest = {
  encode(message: GetTxsEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseGetTxsEventResponse(): GetTxsEventResponse {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined
  };
}

export const GetTxsEventResponse = {
  encode(message: GetTxsEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;

        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.txResponses = object.txResponses?.map(e => TxResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseBroadcastTxRequest(): BroadcastTxRequest {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}

export const BroadcastTxRequest = {
  encode(message: BroadcastTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }

    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;

        case 2:
          message.mode = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<BroadcastTxRequest>): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    return message;
  }

};

function createBaseBroadcastTxResponse(): BroadcastTxResponse {
  return {
    txResponse: undefined
  };
}

export const BroadcastTxResponse = {
  encode(message: BroadcastTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<BroadcastTxResponse>): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }

};

function createBaseSimulateRequest(): SimulateRequest {
  return {
    tx: undefined
  };
}

export const SimulateRequest = {
  encode(message: SimulateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<SimulateRequest>): SimulateRequest {
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  }

};

function createBaseSimulateResponse(): SimulateResponse {
  return {
    gasInfo: undefined,
    result: undefined
  };
}

export const SimulateResponse = {
  encode(message: SimulateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<SimulateResponse>): SimulateResponse {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }

};

function createBaseGetTxRequest(): GetTxRequest {
  return {
    hash: ""
  };
}

export const GetTxRequest = {
  encode(message: GetTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GetTxRequest>): GetTxRequest {
    const message = createBaseGetTxRequest();
    message.hash = object.hash ?? "";
    return message;
  }

};

function createBaseGetTxResponse(): GetTxResponse {
  return {
    tx: undefined,
    txResponse: undefined
  };
}

export const GetTxResponse = {
  encode(message: GetTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GetTxResponse>): GetTxResponse {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  }

};