/* eslint-disable */
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ContractMetadata, BlockRewards, TxRewards, RewardsRecord } from "./rewards";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryContractMetadataRequest is the request for Query.ContractMetadata. */
export interface QueryContractMetadataRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
/** QueryContractMetadataResponse is the response for Query.ContractMetadata. */
export interface QueryContractMetadataResponse {
  metadata: ContractMetadata;
}
/**
 * QueryBlockRewardsTrackingRequest is the request for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingRequest {}
/**
 * QueryBlockRewardsTrackingResponse is the response for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingResponse {
  block: BlockTracking;
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */
export interface QueryRewardsPoolRequest {}
/** QueryRewardsPoolResponse is the response for Query.RewardsPool. */
export interface QueryRewardsPoolResponse {
  /** undistributed_funds are undistributed yet tokens (ready for withdrawal). */
  undistributedFunds: Coin[];
  /**
   * treasury_funds are treasury tokens available (no mechanism is available to
   * withdraw ATM). Treasury tokens are collected on a block basis. Those tokens
   * are unused block rewards.
   */
  treasuryFunds: Coin[];
}
/** QueryEstimateTxFeesRequest is the request for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesRequest {
  /** gas_limit is the transaction gas limit. */
  gasLimit: Long;
  /** contract_address whose flat fee is considered when estimating tx fees. */
  contractAddress: string;
}
/** QueryEstimateTxFeesResponse is the response for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesResponse {
  /** gas_unit_price defines the minimum transaction fee per gas unit. */
  gasUnitPrice: DecCoin;
  /** estimated_fee is the estimated transaction fee for a given gas limit. */
  estimatedFee: Coin[];
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
  /** inflation_rewards defines the inflation rewards for the block. */
  inflationRewards: BlockRewards;
  /** tx_rewards defines the transaction rewards for the block. */
  txRewards: TxRewards[];
}
/** QueryRewardsRecordsRequest is the request for Query.RewardsRecords. */
export interface QueryRewardsRecordsRequest {
  /**
   * rewards_address is the target address to query records for (bech32
   * encoded).
   */
  rewardsAddress: string;
  /** pagination is an optional pagination options for the request. */
  pagination: PageRequest;
}
/** QueryRewardsRecordsResponse is the response for Query.RewardsRecords. */
export interface QueryRewardsRecordsResponse {
  /** records is the list of rewards records. */
  records: RewardsRecord[];
  /** pagination is the pagination details in the response. */
  pagination: PageResponse;
}
/** QueryOutstandingRewardsRequest is the request for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsRequest {
  /**
   * rewards_address is the target address to query calculated rewards for
   * (bech32 encoded).
   */
  rewardsAddress: string;
}
/** QueryOutstandingRewardsResponse is the response for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsResponse {
  /** total_rewards is the total rewards credited to the rewards_address. */
  totalRewards: Coin[];
  /**
   * records_num is the total number of RewardsRecord objects stored for the
   * rewards_address.
   */
  recordsNum: Long;
}
/** QueryFlatFeeRequest is the request for Query.FlatFeet */
export interface QueryFlatFeeRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
/** QueryFlatFeeResponse is the response for Query.FlatFee */
export interface QueryFlatFeeResponse {
  /**
   * flat_fee_amount defines the minimum flat fee set by the contract_owner per
   * contract execution.
   */
  flatFeeAmount: Coin;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryContractMetadataRequest(): QueryContractMetadataRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractMetadataRequest = {
  encode(message: QueryContractMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
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
          message.contractAddress = reader.string();
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
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryContractMetadataRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryContractMetadataRequest>): QueryContractMetadataRequest {
    const message = createBaseQueryContractMetadataRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryContractMetadataResponse(): QueryContractMetadataResponse {
  return {
    metadata: ContractMetadata.fromPartial({})
  };
}
export const QueryContractMetadataResponse = {
  encode(message: QueryContractMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
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
          message.metadata = ContractMetadata.decode(reader, reader.uint32());
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
      metadata: isSet(object.metadata) ? ContractMetadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: QueryContractMetadataResponse): unknown {
    const obj: any = {};
    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryContractMetadataResponse>): QueryContractMetadataResponse {
    const message = createBaseQueryContractMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
function createBaseQueryBlockRewardsTrackingRequest(): QueryBlockRewardsTrackingRequest {
  return {};
}
export const QueryBlockRewardsTrackingRequest = {
  encode(_: QueryBlockRewardsTrackingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockRewardsTrackingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockRewardsTrackingRequest();
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
  fromJSON(_: any): QueryBlockRewardsTrackingRequest {
    return {};
  },
  toJSON(_: QueryBlockRewardsTrackingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryBlockRewardsTrackingRequest>): QueryBlockRewardsTrackingRequest {
    const message = createBaseQueryBlockRewardsTrackingRequest();
    return message;
  }
};
function createBaseQueryBlockRewardsTrackingResponse(): QueryBlockRewardsTrackingResponse {
  return {
    block: BlockTracking.fromPartial({})
  };
}
export const QueryBlockRewardsTrackingResponse = {
  encode(message: QueryBlockRewardsTrackingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockTracking.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockRewardsTrackingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockRewardsTrackingResponse();
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
  fromJSON(object: any): QueryBlockRewardsTrackingResponse {
    return {
      block: isSet(object.block) ? BlockTracking.fromJSON(object.block) : undefined
    };
  },
  toJSON(message: QueryBlockRewardsTrackingResponse): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? BlockTracking.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryBlockRewardsTrackingResponse>): QueryBlockRewardsTrackingResponse {
    const message = createBaseQueryBlockRewardsTrackingResponse();
    message.block = object.block !== undefined && object.block !== null ? BlockTracking.fromPartial(object.block) : undefined;
    return message;
  }
};
function createBaseQueryRewardsPoolRequest(): QueryRewardsPoolRequest {
  return {};
}
export const QueryRewardsPoolRequest = {
  encode(_: QueryRewardsPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPoolRequest();
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
  fromJSON(_: any): QueryRewardsPoolRequest {
    return {};
  },
  toJSON(_: QueryRewardsPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryRewardsPoolRequest>): QueryRewardsPoolRequest {
    const message = createBaseQueryRewardsPoolRequest();
    return message;
  }
};
function createBaseQueryRewardsPoolResponse(): QueryRewardsPoolResponse {
  return {
    undistributedFunds: [],
    treasuryFunds: []
  };
}
export const QueryRewardsPoolResponse = {
  encode(message: QueryRewardsPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.undistributedFunds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.treasuryFunds) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undistributedFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.treasuryFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsPoolResponse {
    return {
      undistributedFunds: Array.isArray(object?.undistributedFunds) ? object.undistributedFunds.map((e: any) => Coin.fromJSON(e)) : [],
      treasuryFunds: Array.isArray(object?.treasuryFunds) ? object.treasuryFunds.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryRewardsPoolResponse): unknown {
    const obj: any = {};
    if (message.undistributedFunds) {
      obj.undistributedFunds = message.undistributedFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.undistributedFunds = [];
    }
    if (message.treasuryFunds) {
      obj.treasuryFunds = message.treasuryFunds.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.treasuryFunds = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryRewardsPoolResponse>): QueryRewardsPoolResponse {
    const message = createBaseQueryRewardsPoolResponse();
    message.undistributedFunds = object.undistributedFunds?.map(e => Coin.fromPartial(e)) || [];
    message.treasuryFunds = object.treasuryFunds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryEstimateTxFeesRequest(): QueryEstimateTxFeesRequest {
  return {
    gasLimit: Long.UZERO,
    contractAddress: ""
  };
}
export const QueryEstimateTxFeesRequest = {
  encode(message: QueryEstimateTxFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gasLimit.isZero()) {
      writer.uint32(8).uint64(message.gasLimit);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateTxFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTxFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasLimit = (reader.uint64() as Long);
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateTxFeesRequest {
    return {
      gasLimit: isSet(object.gasLimit) ? Long.fromValue(object.gasLimit) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryEstimateTxFeesRequest): unknown {
    const obj: any = {};
    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || Long.UZERO).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryEstimateTxFeesRequest>): QueryEstimateTxFeesRequest {
    const message = createBaseQueryEstimateTxFeesRequest();
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryEstimateTxFeesResponse(): QueryEstimateTxFeesResponse {
  return {
    gasUnitPrice: DecCoin.fromPartial({}),
    estimatedFee: []
  };
}
export const QueryEstimateTxFeesResponse = {
  encode(message: QueryEstimateTxFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasUnitPrice !== undefined) {
      DecCoin.encode(message.gasUnitPrice, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.estimatedFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateTxFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTxFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasUnitPrice = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.estimatedFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateTxFeesResponse {
    return {
      gasUnitPrice: isSet(object.gasUnitPrice) ? DecCoin.fromJSON(object.gasUnitPrice) : undefined,
      estimatedFee: Array.isArray(object?.estimatedFee) ? object.estimatedFee.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryEstimateTxFeesResponse): unknown {
    const obj: any = {};
    message.gasUnitPrice !== undefined && (obj.gasUnitPrice = message.gasUnitPrice ? DecCoin.toJSON(message.gasUnitPrice) : undefined);
    if (message.estimatedFee) {
      obj.estimatedFee = message.estimatedFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.estimatedFee = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryEstimateTxFeesResponse>): QueryEstimateTxFeesResponse {
    const message = createBaseQueryEstimateTxFeesResponse();
    message.gasUnitPrice = object.gasUnitPrice !== undefined && object.gasUnitPrice !== null ? DecCoin.fromPartial(object.gasUnitPrice) : undefined;
    message.estimatedFee = object.estimatedFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBlockTracking(): BlockTracking {
  return {
    inflationRewards: BlockRewards.fromPartial({}),
    txRewards: []
  };
}
export const BlockTracking = {
  encode(message: BlockTracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationRewards !== undefined) {
      BlockRewards.encode(message.inflationRewards, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txRewards) {
      TxRewards.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockTracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRewards = BlockRewards.decode(reader, reader.uint32());
          break;
        case 2:
          message.txRewards.push(TxRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockTracking {
    return {
      inflationRewards: isSet(object.inflationRewards) ? BlockRewards.fromJSON(object.inflationRewards) : undefined,
      txRewards: Array.isArray(object?.txRewards) ? object.txRewards.map((e: any) => TxRewards.fromJSON(e)) : []
    };
  },
  toJSON(message: BlockTracking): unknown {
    const obj: any = {};
    message.inflationRewards !== undefined && (obj.inflationRewards = message.inflationRewards ? BlockRewards.toJSON(message.inflationRewards) : undefined);
    if (message.txRewards) {
      obj.txRewards = message.txRewards.map(e => e ? TxRewards.toJSON(e) : undefined);
    } else {
      obj.txRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<BlockTracking>): BlockTracking {
    const message = createBaseBlockTracking();
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? BlockRewards.fromPartial(object.inflationRewards) : undefined;
    message.txRewards = object.txRewards?.map(e => TxRewards.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryRewardsRecordsRequest(): QueryRewardsRecordsRequest {
  return {
    rewardsAddress: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryRewardsRecordsRequest = {
  encode(message: QueryRewardsRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
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
  fromJSON(object: any): QueryRewardsRecordsRequest {
    return {
      rewardsAddress: isSet(object.rewardsAddress) ? String(object.rewardsAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryRewardsRecordsRequest): unknown {
    const obj: any = {};
    message.rewardsAddress !== undefined && (obj.rewardsAddress = message.rewardsAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardsRecordsRequest>): QueryRewardsRecordsRequest {
    const message = createBaseQueryRewardsRecordsRequest();
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryRewardsRecordsResponse(): QueryRewardsRecordsResponse {
  return {
    records: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryRewardsRecordsResponse = {
  encode(message: QueryRewardsRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      RewardsRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(RewardsRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => RewardsRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryRewardsRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? RewardsRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRewardsRecordsResponse>): QueryRewardsRecordsResponse {
    const message = createBaseQueryRewardsRecordsResponse();
    message.records = object.records?.map(e => RewardsRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryOutstandingRewardsRequest(): QueryOutstandingRewardsRequest {
  return {
    rewardsAddress: ""
  };
}
export const QueryOutstandingRewardsRequest = {
  encode(message: QueryOutstandingRewardsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutstandingRewardsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutstandingRewardsRequest {
    return {
      rewardsAddress: isSet(object.rewardsAddress) ? String(object.rewardsAddress) : ""
    };
  },
  toJSON(message: QueryOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.rewardsAddress !== undefined && (obj.rewardsAddress = message.rewardsAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryOutstandingRewardsRequest>): QueryOutstandingRewardsRequest {
    const message = createBaseQueryOutstandingRewardsRequest();
    message.rewardsAddress = object.rewardsAddress ?? "";
    return message;
  }
};
function createBaseQueryOutstandingRewardsResponse(): QueryOutstandingRewardsResponse {
  return {
    totalRewards: [],
    recordsNum: Long.UZERO
  };
}
export const QueryOutstandingRewardsResponse = {
  encode(message: QueryOutstandingRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.recordsNum.isZero()) {
      writer.uint32(16).uint64(message.recordsNum);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutstandingRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.recordsNum = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutstandingRewardsResponse {
    return {
      totalRewards: Array.isArray(object?.totalRewards) ? object.totalRewards.map((e: any) => Coin.fromJSON(e)) : [],
      recordsNum: isSet(object.recordsNum) ? Long.fromValue(object.recordsNum) : Long.UZERO
    };
  },
  toJSON(message: QueryOutstandingRewardsResponse): unknown {
    const obj: any = {};
    if (message.totalRewards) {
      obj.totalRewards = message.totalRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalRewards = [];
    }
    message.recordsNum !== undefined && (obj.recordsNum = (message.recordsNum || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryOutstandingRewardsResponse>): QueryOutstandingRewardsResponse {
    const message = createBaseQueryOutstandingRewardsResponse();
    message.totalRewards = object.totalRewards?.map(e => Coin.fromPartial(e)) || [];
    message.recordsNum = object.recordsNum !== undefined && object.recordsNum !== null ? Long.fromValue(object.recordsNum) : Long.UZERO;
    return message;
  }
};
function createBaseQueryFlatFeeRequest(): QueryFlatFeeRequest {
  return {
    contractAddress: ""
  };
}
export const QueryFlatFeeRequest = {
  encode(message: QueryFlatFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFlatFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlatFeeRequest();
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
  fromJSON(object: any): QueryFlatFeeRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryFlatFeeRequest): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryFlatFeeRequest>): QueryFlatFeeRequest {
    const message = createBaseQueryFlatFeeRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
function createBaseQueryFlatFeeResponse(): QueryFlatFeeResponse {
  return {
    flatFeeAmount: Coin.fromPartial({})
  };
}
export const QueryFlatFeeResponse = {
  encode(message: QueryFlatFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.flatFeeAmount !== undefined) {
      Coin.encode(message.flatFeeAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFlatFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlatFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flatFeeAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlatFeeResponse {
    return {
      flatFeeAmount: isSet(object.flatFeeAmount) ? Coin.fromJSON(object.flatFeeAmount) : undefined
    };
  },
  toJSON(message: QueryFlatFeeResponse): unknown {
    const obj: any = {};
    message.flatFeeAmount !== undefined && (obj.flatFeeAmount = message.flatFeeAmount ? Coin.toJSON(message.flatFeeAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryFlatFeeResponse>): QueryFlatFeeResponse {
    const message = createBaseQueryFlatFeeResponse();
    message.flatFeeAmount = object.flatFeeAmount !== undefined && object.flatFeeAmount !== null ? Coin.fromPartial(object.flatFeeAmount) : undefined;
    return message;
  }
};