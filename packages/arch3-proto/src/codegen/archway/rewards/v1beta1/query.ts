import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ContractMetadata, ContractMetadataSDKType, BlockRewards, BlockRewardsSDKType, TxRewards, TxRewardsSDKType, RewardsRecord, RewardsRecordSDKType } from "./rewards";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest is the request for Query.Params. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is the request for Query.Params. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response for Query.Params. */

export interface QueryParamsResponse {
  params?: Params;
}
/** QueryParamsResponse is the response for Query.Params. */

export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryContractMetadataRequest is the request for Query.ContractMetadata. */

export interface QueryContractMetadataRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
/** QueryContractMetadataRequest is the request for Query.ContractMetadata. */

export interface QueryContractMetadataRequestSDKType {
  /** contract_address is the contract address (bech32 encoded). */
  contract_address: string;
}
/** QueryContractMetadataResponse is the response for Query.ContractMetadata. */

export interface QueryContractMetadataResponse {
  metadata?: ContractMetadata;
}
/** QueryContractMetadataResponse is the response for Query.ContractMetadata. */

export interface QueryContractMetadataResponseSDKType {
  metadata?: ContractMetadataSDKType;
}
/** QueryBlockRewardsTrackingRequest is the request for Query.BlockRewardsTracking. */

export interface QueryBlockRewardsTrackingRequest {}
/** QueryBlockRewardsTrackingRequest is the request for Query.BlockRewardsTracking. */

export interface QueryBlockRewardsTrackingRequestSDKType {}
/** QueryBlockRewardsTrackingResponse is the response for Query.BlockRewardsTracking. */

export interface QueryBlockRewardsTrackingResponse {
  block?: BlockTracking;
}
/** QueryBlockRewardsTrackingResponse is the response for Query.BlockRewardsTracking. */

export interface QueryBlockRewardsTrackingResponseSDKType {
  block?: BlockTrackingSDKType;
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */

export interface QueryRewardsPoolRequest {}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */

export interface QueryRewardsPoolRequestSDKType {}
/** QueryRewardsPoolResponse is the response for Query.RewardsPool. */

export interface QueryRewardsPoolResponse {
  /** undistributed_funds are undistributed yet tokens (ready for withdrawal). */
  undistributedFunds: Coin[];
  /**
   * treasury_funds are treasury tokens available (no mechanism is available to withdraw ATM).
   * Treasury tokens are collected on a block basis. Those tokens are unused block rewards.
   */

  treasuryFunds: Coin[];
}
/** QueryRewardsPoolResponse is the response for Query.RewardsPool. */

export interface QueryRewardsPoolResponseSDKType {
  /** undistributed_funds are undistributed yet tokens (ready for withdrawal). */
  undistributed_funds: CoinSDKType[];
  /**
   * treasury_funds are treasury tokens available (no mechanism is available to withdraw ATM).
   * Treasury tokens are collected on a block basis. Those tokens are unused block rewards.
   */

  treasury_funds: CoinSDKType[];
}
/** QueryEstimateTxFeesRequest is the request for Query.EstimateTxFees. */

export interface QueryEstimateTxFeesRequest {
  /** gas_limit is the transaction gas limit. */
  gasLimit: Long;
  /** contract_address whose flat fee is considered when estimating tx fees. */

  contractAddress: string;
}
/** QueryEstimateTxFeesRequest is the request for Query.EstimateTxFees. */

export interface QueryEstimateTxFeesRequestSDKType {
  /** gas_limit is the transaction gas limit. */
  gas_limit: Long;
  /** contract_address whose flat fee is considered when estimating tx fees. */

  contract_address: string;
}
/** QueryEstimateTxFeesResponse is the response for Query.EstimateTxFees. */

export interface QueryEstimateTxFeesResponse {
  /** gas_unit_price defines the minimum transaction fee per gas unit. */
  gasUnitPrice?: DecCoin;
  /** estimated_fee is the estimated transaction fee for a given gas limit. */

  estimatedFee: Coin[];
}
/** QueryEstimateTxFeesResponse is the response for Query.EstimateTxFees. */

export interface QueryEstimateTxFeesResponseSDKType {
  /** gas_unit_price defines the minimum transaction fee per gas unit. */
  gas_unit_price?: DecCoinSDKType;
  /** estimated_fee is the estimated transaction fee for a given gas limit. */

  estimated_fee: CoinSDKType[];
}
/** BlockTracking is the tracking information for a block. */

export interface BlockTracking {
  /** inflation_rewards defines the inflation rewards for the block. */
  inflationRewards?: BlockRewards;
  /** tx_rewards defines the transaction rewards for the block. */

  txRewards: TxRewards[];
}
/** BlockTracking is the tracking information for a block. */

export interface BlockTrackingSDKType {
  /** inflation_rewards defines the inflation rewards for the block. */
  inflation_rewards?: BlockRewardsSDKType;
  /** tx_rewards defines the transaction rewards for the block. */

  tx_rewards: TxRewardsSDKType[];
}
/** QueryRewardsRecordsRequest is the request for Query.RewardsRecords. */

export interface QueryRewardsRecordsRequest {
  /** rewards_address is the target address to query records for (bech32 encoded). */
  rewardsAddress: string;
  /** pagination is an optional pagination options for the request. */

  pagination?: PageRequest;
}
/** QueryRewardsRecordsRequest is the request for Query.RewardsRecords. */

export interface QueryRewardsRecordsRequestSDKType {
  /** rewards_address is the target address to query records for (bech32 encoded). */
  rewards_address: string;
  /** pagination is an optional pagination options for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryRewardsRecordsResponse is the response for Query.RewardsRecords. */

export interface QueryRewardsRecordsResponse {
  /** records is the list of rewards records. */
  records: RewardsRecord[];
  /** pagination is the pagination details in the response. */

  pagination?: PageResponse;
}
/** QueryRewardsRecordsResponse is the response for Query.RewardsRecords. */

export interface QueryRewardsRecordsResponseSDKType {
  /** records is the list of rewards records. */
  records: RewardsRecordSDKType[];
  /** pagination is the pagination details in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryOutstandingRewardsRequest is the request for Query.OutstandingRewards. */

export interface QueryOutstandingRewardsRequest {
  /** rewards_address is the target address to query calculated rewards for (bech32 encoded). */
  rewardsAddress: string;
}
/** QueryOutstandingRewardsRequest is the request for Query.OutstandingRewards. */

export interface QueryOutstandingRewardsRequestSDKType {
  /** rewards_address is the target address to query calculated rewards for (bech32 encoded). */
  rewards_address: string;
}
/** QueryOutstandingRewardsResponse is the response for Query.OutstandingRewards. */

export interface QueryOutstandingRewardsResponse {
  /** total_rewards is the total rewards credited to the rewards_address. */
  totalRewards: Coin[];
  /** records_num is the total number of RewardsRecord objects stored for the rewards_address. */

  recordsNum: Long;
}
/** QueryOutstandingRewardsResponse is the response for Query.OutstandingRewards. */

export interface QueryOutstandingRewardsResponseSDKType {
  /** total_rewards is the total rewards credited to the rewards_address. */
  total_rewards: CoinSDKType[];
  /** records_num is the total number of RewardsRecord objects stored for the rewards_address. */

  records_num: Long;
}
/** QueryFlatFeeRequest is the request for Query.FlatFeet */

export interface QueryFlatFeeRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
/** QueryFlatFeeRequest is the request for Query.FlatFeet */

export interface QueryFlatFeeRequestSDKType {
  /** contract_address is the contract address (bech32 encoded). */
  contract_address: string;
}
/** QueryFlatFeeResponse is the response for Query.FlatFee */

export interface QueryFlatFeeResponse {
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner per contract execution. */
  flatFeeAmount?: Coin;
}
/** QueryFlatFeeResponse is the response for Query.FlatFee */

export interface QueryFlatFeeResponseSDKType {
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner per contract execution. */
  flat_fee_amount?: CoinSDKType;
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

  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
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

  fromPartial(object: Partial<QueryContractMetadataRequest>): QueryContractMetadataRequest {
    const message = createBaseQueryContractMetadataRequest();
    message.contractAddress = object.contractAddress ?? "";
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

  fromPartial(_: Partial<QueryBlockRewardsTrackingRequest>): QueryBlockRewardsTrackingRequest {
    const message = createBaseQueryBlockRewardsTrackingRequest();
    return message;
  }

};

function createBaseQueryBlockRewardsTrackingResponse(): QueryBlockRewardsTrackingResponse {
  return {
    block: undefined
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

  fromPartial(object: Partial<QueryEstimateTxFeesRequest>): QueryEstimateTxFeesRequest {
    const message = createBaseQueryEstimateTxFeesRequest();
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? Long.fromValue(object.gasLimit) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryEstimateTxFeesResponse(): QueryEstimateTxFeesResponse {
  return {
    gasUnitPrice: undefined,
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

  fromPartial(object: Partial<QueryEstimateTxFeesResponse>): QueryEstimateTxFeesResponse {
    const message = createBaseQueryEstimateTxFeesResponse();
    message.gasUnitPrice = object.gasUnitPrice !== undefined && object.gasUnitPrice !== null ? DecCoin.fromPartial(object.gasUnitPrice) : undefined;
    message.estimatedFee = object.estimatedFee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseBlockTracking(): BlockTracking {
  return {
    inflationRewards: undefined,
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
    pagination: undefined
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
    pagination: undefined
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

  fromPartial(object: Partial<QueryFlatFeeRequest>): QueryFlatFeeRequest {
    const message = createBaseQueryFlatFeeRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }

};

function createBaseQueryFlatFeeResponse(): QueryFlatFeeResponse {
  return {
    flatFeeAmount: undefined
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

  fromPartial(object: Partial<QueryFlatFeeResponse>): QueryFlatFeeResponse {
    const message = createBaseQueryFlatFeeResponse();
    message.flatFeeAmount = object.flatFeeAmount !== undefined && object.flatFeeAmount !== null ? Coin.fromPartial(object.flatFeeAmount) : undefined;
    return message;
  }

};