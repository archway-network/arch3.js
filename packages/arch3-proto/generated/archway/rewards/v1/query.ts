/* eslint-disable */
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ContractMetadata, ContractMetadataAmino, BlockRewards, BlockRewardsAmino, TxRewards, TxRewardsAmino, RewardsRecord, RewardsRecordAmino } from "./rewards";
import { Coin, CoinAmino, DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/archway.rewards.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/archway.rewards.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryContractMetadataRequest is the request for Query.ContractMetadata. */
export interface QueryContractMetadataRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
export interface QueryContractMetadataRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryContractMetadataRequest";
  value: Uint8Array;
}
/** QueryContractMetadataRequest is the request for Query.ContractMetadata. */
export interface QueryContractMetadataRequestAmino {
  /** contract_address is the contract address (bech32 encoded). */
  contract_address?: string;
}
export interface QueryContractMetadataRequestAminoMsg {
  type: "/archway.rewards.v1.QueryContractMetadataRequest";
  value: QueryContractMetadataRequestAmino;
}
/** QueryContractMetadataResponse is the response for Query.ContractMetadata. */
export interface QueryContractMetadataResponse {
  metadata: ContractMetadata;
}
export interface QueryContractMetadataResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryContractMetadataResponse";
  value: Uint8Array;
}
/** QueryContractMetadataResponse is the response for Query.ContractMetadata. */
export interface QueryContractMetadataResponseAmino {
  metadata?: ContractMetadataAmino;
}
export interface QueryContractMetadataResponseAminoMsg {
  type: "/archway.rewards.v1.QueryContractMetadataResponse";
  value: QueryContractMetadataResponseAmino;
}
/**
 * QueryBlockRewardsTrackingRequest is the request for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingRequest {}
export interface QueryBlockRewardsTrackingRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingRequest";
  value: Uint8Array;
}
/**
 * QueryBlockRewardsTrackingRequest is the request for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingRequestAmino {}
export interface QueryBlockRewardsTrackingRequestAminoMsg {
  type: "/archway.rewards.v1.QueryBlockRewardsTrackingRequest";
  value: QueryBlockRewardsTrackingRequestAmino;
}
/**
 * QueryBlockRewardsTrackingResponse is the response for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingResponse {
  block: BlockTracking;
}
export interface QueryBlockRewardsTrackingResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingResponse";
  value: Uint8Array;
}
/**
 * QueryBlockRewardsTrackingResponse is the response for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingResponseAmino {
  block?: BlockTrackingAmino;
}
export interface QueryBlockRewardsTrackingResponseAminoMsg {
  type: "/archway.rewards.v1.QueryBlockRewardsTrackingResponse";
  value: QueryBlockRewardsTrackingResponseAmino;
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */
export interface QueryRewardsPoolRequest {}
export interface QueryRewardsPoolRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryRewardsPoolRequest";
  value: Uint8Array;
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */
export interface QueryRewardsPoolRequestAmino {}
export interface QueryRewardsPoolRequestAminoMsg {
  type: "/archway.rewards.v1.QueryRewardsPoolRequest";
  value: QueryRewardsPoolRequestAmino;
}
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
export interface QueryRewardsPoolResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryRewardsPoolResponse";
  value: Uint8Array;
}
/** QueryRewardsPoolResponse is the response for Query.RewardsPool. */
export interface QueryRewardsPoolResponseAmino {
  /** undistributed_funds are undistributed yet tokens (ready for withdrawal). */
  undistributed_funds?: CoinAmino[];
  /**
   * treasury_funds are treasury tokens available (no mechanism is available to
   * withdraw ATM). Treasury tokens are collected on a block basis. Those tokens
   * are unused block rewards.
   */
  treasury_funds?: CoinAmino[];
}
export interface QueryRewardsPoolResponseAminoMsg {
  type: "/archway.rewards.v1.QueryRewardsPoolResponse";
  value: QueryRewardsPoolResponseAmino;
}
/** QueryEstimateTxFeesRequest is the request for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesRequest {
  /** gas_limit is the transaction gas limit. */
  gasLimit: bigint;
  /** contract_address whose flat fee is considered when estimating tx fees. */
  contractAddress: string;
}
export interface QueryEstimateTxFeesRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesRequest";
  value: Uint8Array;
}
/** QueryEstimateTxFeesRequest is the request for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesRequestAmino {
  /** gas_limit is the transaction gas limit. */
  gas_limit?: string;
  /** contract_address whose flat fee is considered when estimating tx fees. */
  contract_address?: string;
}
export interface QueryEstimateTxFeesRequestAminoMsg {
  type: "/archway.rewards.v1.QueryEstimateTxFeesRequest";
  value: QueryEstimateTxFeesRequestAmino;
}
/** QueryEstimateTxFeesResponse is the response for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesResponse {
  /** gas_unit_price defines the minimum transaction fee per gas unit. */
  gasUnitPrice: DecCoin;
  /** estimated_fee is the estimated transaction fee for a given gas limit. */
  estimatedFee: Coin[];
}
export interface QueryEstimateTxFeesResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesResponse";
  value: Uint8Array;
}
/** QueryEstimateTxFeesResponse is the response for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesResponseAmino {
  /** gas_unit_price defines the minimum transaction fee per gas unit. */
  gas_unit_price?: DecCoinAmino;
  /** estimated_fee is the estimated transaction fee for a given gas limit. */
  estimated_fee?: CoinAmino[];
}
export interface QueryEstimateTxFeesResponseAminoMsg {
  type: "/archway.rewards.v1.QueryEstimateTxFeesResponse";
  value: QueryEstimateTxFeesResponseAmino;
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
  /** inflation_rewards defines the inflation rewards for the block. */
  inflationRewards: BlockRewards;
  /** tx_rewards defines the transaction rewards for the block. */
  txRewards: TxRewards[];
}
export interface BlockTrackingProtoMsg {
  typeUrl: "/archway.rewards.v1.BlockTracking";
  value: Uint8Array;
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTrackingAmino {
  /** inflation_rewards defines the inflation rewards for the block. */
  inflation_rewards?: BlockRewardsAmino;
  /** tx_rewards defines the transaction rewards for the block. */
  tx_rewards?: TxRewardsAmino[];
}
export interface BlockTrackingAminoMsg {
  type: "/archway.rewards.v1.BlockTracking";
  value: BlockTrackingAmino;
}
/** QueryRewardsRecordsRequest is the request for Query.RewardsRecords. */
export interface QueryRewardsRecordsRequest {
  /**
   * rewards_address is the target address to query records for (bech32
   * encoded).
   */
  rewardsAddress: string;
  /** pagination is an optional pagination options for the request. */
  pagination?: PageRequest;
}
export interface QueryRewardsRecordsRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryRewardsRecordsRequest";
  value: Uint8Array;
}
/** QueryRewardsRecordsRequest is the request for Query.RewardsRecords. */
export interface QueryRewardsRecordsRequestAmino {
  /**
   * rewards_address is the target address to query records for (bech32
   * encoded).
   */
  rewards_address?: string;
  /** pagination is an optional pagination options for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryRewardsRecordsRequestAminoMsg {
  type: "/archway.rewards.v1.QueryRewardsRecordsRequest";
  value: QueryRewardsRecordsRequestAmino;
}
/** QueryRewardsRecordsResponse is the response for Query.RewardsRecords. */
export interface QueryRewardsRecordsResponse {
  /** records is the list of rewards records. */
  records: RewardsRecord[];
  /** pagination is the pagination details in the response. */
  pagination?: PageResponse;
}
export interface QueryRewardsRecordsResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryRewardsRecordsResponse";
  value: Uint8Array;
}
/** QueryRewardsRecordsResponse is the response for Query.RewardsRecords. */
export interface QueryRewardsRecordsResponseAmino {
  /** records is the list of rewards records. */
  records?: RewardsRecordAmino[];
  /** pagination is the pagination details in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryRewardsRecordsResponseAminoMsg {
  type: "/archway.rewards.v1.QueryRewardsRecordsResponse";
  value: QueryRewardsRecordsResponseAmino;
}
/** QueryOutstandingRewardsRequest is the request for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsRequest {
  /**
   * rewards_address is the target address to query calculated rewards for
   * (bech32 encoded).
   */
  rewardsAddress: string;
}
export interface QueryOutstandingRewardsRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsRequest";
  value: Uint8Array;
}
/** QueryOutstandingRewardsRequest is the request for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsRequestAmino {
  /**
   * rewards_address is the target address to query calculated rewards for
   * (bech32 encoded).
   */
  rewards_address?: string;
}
export interface QueryOutstandingRewardsRequestAminoMsg {
  type: "/archway.rewards.v1.QueryOutstandingRewardsRequest";
  value: QueryOutstandingRewardsRequestAmino;
}
/** QueryOutstandingRewardsResponse is the response for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsResponse {
  /** total_rewards is the total rewards credited to the rewards_address. */
  totalRewards: Coin[];
  /**
   * records_num is the total number of RewardsRecord objects stored for the
   * rewards_address.
   */
  recordsNum: bigint;
}
export interface QueryOutstandingRewardsResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsResponse";
  value: Uint8Array;
}
/** QueryOutstandingRewardsResponse is the response for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsResponseAmino {
  /** total_rewards is the total rewards credited to the rewards_address. */
  total_rewards?: CoinAmino[];
  /**
   * records_num is the total number of RewardsRecord objects stored for the
   * rewards_address.
   */
  records_num?: string;
}
export interface QueryOutstandingRewardsResponseAminoMsg {
  type: "/archway.rewards.v1.QueryOutstandingRewardsResponse";
  value: QueryOutstandingRewardsResponseAmino;
}
/** QueryFlatFeeRequest is the request for Query.FlatFeet */
export interface QueryFlatFeeRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
export interface QueryFlatFeeRequestProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryFlatFeeRequest";
  value: Uint8Array;
}
/** QueryFlatFeeRequest is the request for Query.FlatFeet */
export interface QueryFlatFeeRequestAmino {
  /** contract_address is the contract address (bech32 encoded). */
  contract_address?: string;
}
export interface QueryFlatFeeRequestAminoMsg {
  type: "/archway.rewards.v1.QueryFlatFeeRequest";
  value: QueryFlatFeeRequestAmino;
}
/** QueryFlatFeeResponse is the response for Query.FlatFee */
export interface QueryFlatFeeResponse {
  /**
   * flat_fee_amount defines the minimum flat fee set by the contract_owner per
   * contract execution.
   */
  flatFeeAmount: Coin;
}
export interface QueryFlatFeeResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.QueryFlatFeeResponse";
  value: Uint8Array;
}
/** QueryFlatFeeResponse is the response for Query.FlatFee */
export interface QueryFlatFeeResponseAmino {
  /**
   * flat_fee_amount defines the minimum flat fee set by the contract_owner per
   * contract execution.
   */
  flat_fee_amount?: CoinAmino;
}
export interface QueryFlatFeeResponseAminoMsg {
  type: "/archway.rewards.v1.QueryFlatFeeResponse";
  value: QueryFlatFeeResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/archway.rewards.v1.QueryParamsRequest",
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
  toJSON(_: QueryParamsRequest): unknown {
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
      typeUrl: "/archway.rewards.v1.QueryParamsRequest",
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
  typeUrl: "/archway.rewards.v1.QueryParamsResponse",
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
  toJSON(message: QueryParamsResponse): unknown {
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
      typeUrl: "/archway.rewards.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryContractMetadataRequest(): QueryContractMetadataRequest {
  return {
    contractAddress: ""
  };
}
export const QueryContractMetadataRequest = {
  typeUrl: "/archway.rewards.v1.QueryContractMetadataRequest",
  encode(message: QueryContractMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryContractMetadataRequestAmino): QueryContractMetadataRequest {
    const message = createBaseQueryContractMetadataRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryContractMetadataRequest): QueryContractMetadataRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryContractMetadataRequestAminoMsg): QueryContractMetadataRequest {
    return QueryContractMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractMetadataRequestProtoMsg): QueryContractMetadataRequest {
    return QueryContractMetadataRequest.decode(message.value);
  },
  toProto(message: QueryContractMetadataRequest): Uint8Array {
    return QueryContractMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContractMetadataRequest): QueryContractMetadataRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryContractMetadataRequest",
      value: QueryContractMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryContractMetadataResponse(): QueryContractMetadataResponse {
  return {
    metadata: ContractMetadata.fromPartial({})
  };
}
export const QueryContractMetadataResponse = {
  typeUrl: "/archway.rewards.v1.QueryContractMetadataResponse",
  encode(message: QueryContractMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContractMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryContractMetadataResponseAmino): QueryContractMetadataResponse {
    const message = createBaseQueryContractMetadataResponse();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: QueryContractMetadataResponse): QueryContractMetadataResponseAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? ContractMetadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContractMetadataResponseAminoMsg): QueryContractMetadataResponse {
    return QueryContractMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContractMetadataResponseProtoMsg): QueryContractMetadataResponse {
    return QueryContractMetadataResponse.decode(message.value);
  },
  toProto(message: QueryContractMetadataResponse): Uint8Array {
    return QueryContractMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContractMetadataResponse): QueryContractMetadataResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryContractMetadataResponse",
      value: QueryContractMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBlockRewardsTrackingRequest(): QueryBlockRewardsTrackingRequest {
  return {};
}
export const QueryBlockRewardsTrackingRequest = {
  typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingRequest",
  encode(_: QueryBlockRewardsTrackingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockRewardsTrackingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: QueryBlockRewardsTrackingRequestAmino): QueryBlockRewardsTrackingRequest {
    const message = createBaseQueryBlockRewardsTrackingRequest();
    return message;
  },
  toAmino(_: QueryBlockRewardsTrackingRequest): QueryBlockRewardsTrackingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBlockRewardsTrackingRequestAminoMsg): QueryBlockRewardsTrackingRequest {
    return QueryBlockRewardsTrackingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockRewardsTrackingRequestProtoMsg): QueryBlockRewardsTrackingRequest {
    return QueryBlockRewardsTrackingRequest.decode(message.value);
  },
  toProto(message: QueryBlockRewardsTrackingRequest): Uint8Array {
    return QueryBlockRewardsTrackingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockRewardsTrackingRequest): QueryBlockRewardsTrackingRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingRequest",
      value: QueryBlockRewardsTrackingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBlockRewardsTrackingResponse(): QueryBlockRewardsTrackingResponse {
  return {
    block: BlockTracking.fromPartial({})
  };
}
export const QueryBlockRewardsTrackingResponse = {
  typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingResponse",
  encode(message: QueryBlockRewardsTrackingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block !== undefined) {
      BlockTracking.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBlockRewardsTrackingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryBlockRewardsTrackingResponseAmino): QueryBlockRewardsTrackingResponse {
    const message = createBaseQueryBlockRewardsTrackingResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockTracking.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: QueryBlockRewardsTrackingResponse): QueryBlockRewardsTrackingResponseAmino {
    const obj: any = {};
    obj.block = message.block ? BlockTracking.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBlockRewardsTrackingResponseAminoMsg): QueryBlockRewardsTrackingResponse {
    return QueryBlockRewardsTrackingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBlockRewardsTrackingResponseProtoMsg): QueryBlockRewardsTrackingResponse {
    return QueryBlockRewardsTrackingResponse.decode(message.value);
  },
  toProto(message: QueryBlockRewardsTrackingResponse): Uint8Array {
    return QueryBlockRewardsTrackingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBlockRewardsTrackingResponse): QueryBlockRewardsTrackingResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingResponse",
      value: QueryBlockRewardsTrackingResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsPoolRequest(): QueryRewardsPoolRequest {
  return {};
}
export const QueryRewardsPoolRequest = {
  typeUrl: "/archway.rewards.v1.QueryRewardsPoolRequest",
  encode(_: QueryRewardsPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(_: QueryRewardsPoolRequestAmino): QueryRewardsPoolRequest {
    const message = createBaseQueryRewardsPoolRequest();
    return message;
  },
  toAmino(_: QueryRewardsPoolRequest): QueryRewardsPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRewardsPoolRequestAminoMsg): QueryRewardsPoolRequest {
    return QueryRewardsPoolRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsPoolRequestProtoMsg): QueryRewardsPoolRequest {
    return QueryRewardsPoolRequest.decode(message.value);
  },
  toProto(message: QueryRewardsPoolRequest): Uint8Array {
    return QueryRewardsPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsPoolRequest): QueryRewardsPoolRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryRewardsPoolRequest",
      value: QueryRewardsPoolRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsPoolResponse(): QueryRewardsPoolResponse {
  return {
    undistributedFunds: [],
    treasuryFunds: []
  };
}
export const QueryRewardsPoolResponse = {
  typeUrl: "/archway.rewards.v1.QueryRewardsPoolResponse",
  encode(message: QueryRewardsPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.undistributedFunds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.treasuryFunds) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryRewardsPoolResponseAmino): QueryRewardsPoolResponse {
    const message = createBaseQueryRewardsPoolResponse();
    message.undistributedFunds = object.undistributed_funds?.map(e => Coin.fromAmino(e)) || [];
    message.treasuryFunds = object.treasury_funds?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRewardsPoolResponse): QueryRewardsPoolResponseAmino {
    const obj: any = {};
    if (message.undistributedFunds) {
      obj.undistributed_funds = message.undistributedFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.undistributed_funds = [];
    }
    if (message.treasuryFunds) {
      obj.treasury_funds = message.treasuryFunds.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.treasury_funds = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRewardsPoolResponseAminoMsg): QueryRewardsPoolResponse {
    return QueryRewardsPoolResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsPoolResponseProtoMsg): QueryRewardsPoolResponse {
    return QueryRewardsPoolResponse.decode(message.value);
  },
  toProto(message: QueryRewardsPoolResponse): Uint8Array {
    return QueryRewardsPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsPoolResponse): QueryRewardsPoolResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryRewardsPoolResponse",
      value: QueryRewardsPoolResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateTxFeesRequest(): QueryEstimateTxFeesRequest {
  return {
    gasLimit: BigInt(0),
    contractAddress: ""
  };
}
export const QueryEstimateTxFeesRequest = {
  typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesRequest",
  encode(message: QueryEstimateTxFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasLimit);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateTxFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTxFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasLimit = reader.uint64();
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
      gasLimit: isSet(object.gasLimit) ? BigInt(object.gasLimit.toString()) : BigInt(0),
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryEstimateTxFeesRequest): unknown {
    const obj: any = {};
    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || BigInt(0)).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryEstimateTxFeesRequest>): QueryEstimateTxFeesRequest {
    const message = createBaseQueryEstimateTxFeesRequest();
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryEstimateTxFeesRequestAmino): QueryEstimateTxFeesRequest {
    const message = createBaseQueryEstimateTxFeesRequest();
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = BigInt(object.gas_limit);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryEstimateTxFeesRequest): QueryEstimateTxFeesRequestAmino {
    const obj: any = {};
    obj.gas_limit = message.gasLimit ? message.gasLimit.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryEstimateTxFeesRequestAminoMsg): QueryEstimateTxFeesRequest {
    return QueryEstimateTxFeesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateTxFeesRequestProtoMsg): QueryEstimateTxFeesRequest {
    return QueryEstimateTxFeesRequest.decode(message.value);
  },
  toProto(message: QueryEstimateTxFeesRequest): Uint8Array {
    return QueryEstimateTxFeesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateTxFeesRequest): QueryEstimateTxFeesRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesRequest",
      value: QueryEstimateTxFeesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEstimateTxFeesResponse(): QueryEstimateTxFeesResponse {
  return {
    gasUnitPrice: DecCoin.fromPartial({}),
    estimatedFee: []
  };
}
export const QueryEstimateTxFeesResponse = {
  typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesResponse",
  encode(message: QueryEstimateTxFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasUnitPrice !== undefined) {
      DecCoin.encode(message.gasUnitPrice, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.estimatedFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateTxFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryEstimateTxFeesResponseAmino): QueryEstimateTxFeesResponse {
    const message = createBaseQueryEstimateTxFeesResponse();
    if (object.gas_unit_price !== undefined && object.gas_unit_price !== null) {
      message.gasUnitPrice = DecCoin.fromAmino(object.gas_unit_price);
    }
    message.estimatedFee = object.estimated_fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEstimateTxFeesResponse): QueryEstimateTxFeesResponseAmino {
    const obj: any = {};
    obj.gas_unit_price = message.gasUnitPrice ? DecCoin.toAmino(message.gasUnitPrice) : undefined;
    if (message.estimatedFee) {
      obj.estimated_fee = message.estimatedFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.estimated_fee = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryEstimateTxFeesResponseAminoMsg): QueryEstimateTxFeesResponse {
    return QueryEstimateTxFeesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEstimateTxFeesResponseProtoMsg): QueryEstimateTxFeesResponse {
    return QueryEstimateTxFeesResponse.decode(message.value);
  },
  toProto(message: QueryEstimateTxFeesResponse): Uint8Array {
    return QueryEstimateTxFeesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEstimateTxFeesResponse): QueryEstimateTxFeesResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesResponse",
      value: QueryEstimateTxFeesResponse.encode(message).finish()
    };
  }
};
function createBaseBlockTracking(): BlockTracking {
  return {
    inflationRewards: BlockRewards.fromPartial({}),
    txRewards: []
  };
}
export const BlockTracking = {
  typeUrl: "/archway.rewards.v1.BlockTracking",
  encode(message: BlockTracking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRewards !== undefined) {
      BlockRewards.encode(message.inflationRewards, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txRewards) {
      TxRewards.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockTracking {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: BlockTrackingAmino): BlockTracking {
    const message = createBaseBlockTracking();
    if (object.inflation_rewards !== undefined && object.inflation_rewards !== null) {
      message.inflationRewards = BlockRewards.fromAmino(object.inflation_rewards);
    }
    message.txRewards = object.tx_rewards?.map(e => TxRewards.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BlockTracking): BlockTrackingAmino {
    const obj: any = {};
    obj.inflation_rewards = message.inflationRewards ? BlockRewards.toAmino(message.inflationRewards) : undefined;
    if (message.txRewards) {
      obj.tx_rewards = message.txRewards.map(e => e ? TxRewards.toAmino(e) : undefined);
    } else {
      obj.tx_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: BlockTrackingAminoMsg): BlockTracking {
    return BlockTracking.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockTrackingProtoMsg): BlockTracking {
    return BlockTracking.decode(message.value);
  },
  toProto(message: BlockTracking): Uint8Array {
    return BlockTracking.encode(message).finish();
  },
  toProtoMsg(message: BlockTracking): BlockTrackingProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.BlockTracking",
      value: BlockTracking.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsRecordsRequest(): QueryRewardsRecordsRequest {
  return {
    rewardsAddress: "",
    pagination: undefined
  };
}
export const QueryRewardsRecordsRequest = {
  typeUrl: "/archway.rewards.v1.QueryRewardsRecordsRequest",
  encode(message: QueryRewardsRecordsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsRecordsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryRewardsRecordsRequestAmino): QueryRewardsRecordsRequest {
    const message = createBaseQueryRewardsRecordsRequest();
    if (object.rewards_address !== undefined && object.rewards_address !== null) {
      message.rewardsAddress = object.rewards_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRewardsRecordsRequest): QueryRewardsRecordsRequestAmino {
    const obj: any = {};
    obj.rewards_address = message.rewardsAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsRecordsRequestAminoMsg): QueryRewardsRecordsRequest {
    return QueryRewardsRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsRecordsRequestProtoMsg): QueryRewardsRecordsRequest {
    return QueryRewardsRecordsRequest.decode(message.value);
  },
  toProto(message: QueryRewardsRecordsRequest): Uint8Array {
    return QueryRewardsRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsRecordsRequest): QueryRewardsRecordsRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryRewardsRecordsRequest",
      value: QueryRewardsRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRewardsRecordsResponse(): QueryRewardsRecordsResponse {
  return {
    records: [],
    pagination: undefined
  };
}
export const QueryRewardsRecordsResponse = {
  typeUrl: "/archway.rewards.v1.QueryRewardsRecordsResponse",
  encode(message: QueryRewardsRecordsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      RewardsRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRewardsRecordsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryRewardsRecordsResponseAmino): QueryRewardsRecordsResponse {
    const message = createBaseQueryRewardsRecordsResponse();
    message.records = object.records?.map(e => RewardsRecord.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRewardsRecordsResponse): QueryRewardsRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? RewardsRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRewardsRecordsResponseAminoMsg): QueryRewardsRecordsResponse {
    return QueryRewardsRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRewardsRecordsResponseProtoMsg): QueryRewardsRecordsResponse {
    return QueryRewardsRecordsResponse.decode(message.value);
  },
  toProto(message: QueryRewardsRecordsResponse): Uint8Array {
    return QueryRewardsRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRewardsRecordsResponse): QueryRewardsRecordsResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryRewardsRecordsResponse",
      value: QueryRewardsRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutstandingRewardsRequest(): QueryOutstandingRewardsRequest {
  return {
    rewardsAddress: ""
  };
}
export const QueryOutstandingRewardsRequest = {
  typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsRequest",
  encode(message: QueryOutstandingRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryOutstandingRewardsRequestAmino): QueryOutstandingRewardsRequest {
    const message = createBaseQueryOutstandingRewardsRequest();
    if (object.rewards_address !== undefined && object.rewards_address !== null) {
      message.rewardsAddress = object.rewards_address;
    }
    return message;
  },
  toAmino(message: QueryOutstandingRewardsRequest): QueryOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.rewards_address = message.rewardsAddress;
    return obj;
  },
  fromAminoMsg(object: QueryOutstandingRewardsRequestAminoMsg): QueryOutstandingRewardsRequest {
    return QueryOutstandingRewardsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutstandingRewardsRequestProtoMsg): QueryOutstandingRewardsRequest {
    return QueryOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryOutstandingRewardsRequest): Uint8Array {
    return QueryOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutstandingRewardsRequest): QueryOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsRequest",
      value: QueryOutstandingRewardsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutstandingRewardsResponse(): QueryOutstandingRewardsResponse {
  return {
    totalRewards: [],
    recordsNum: BigInt(0)
  };
}
export const QueryOutstandingRewardsResponse = {
  typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsResponse",
  encode(message: QueryOutstandingRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.recordsNum !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordsNum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.recordsNum = reader.uint64();
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
      recordsNum: isSet(object.recordsNum) ? BigInt(object.recordsNum.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryOutstandingRewardsResponse): unknown {
    const obj: any = {};
    if (message.totalRewards) {
      obj.totalRewards = message.totalRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalRewards = [];
    }
    message.recordsNum !== undefined && (obj.recordsNum = (message.recordsNum || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryOutstandingRewardsResponse>): QueryOutstandingRewardsResponse {
    const message = createBaseQueryOutstandingRewardsResponse();
    message.totalRewards = object.totalRewards?.map(e => Coin.fromPartial(e)) || [];
    message.recordsNum = object.recordsNum !== undefined && object.recordsNum !== null ? BigInt(object.recordsNum.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryOutstandingRewardsResponseAmino): QueryOutstandingRewardsResponse {
    const message = createBaseQueryOutstandingRewardsResponse();
    message.totalRewards = object.total_rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.records_num !== undefined && object.records_num !== null) {
      message.recordsNum = BigInt(object.records_num);
    }
    return message;
  },
  toAmino(message: QueryOutstandingRewardsResponse): QueryOutstandingRewardsResponseAmino {
    const obj: any = {};
    if (message.totalRewards) {
      obj.total_rewards = message.totalRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_rewards = [];
    }
    obj.records_num = message.recordsNum ? message.recordsNum.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOutstandingRewardsResponseAminoMsg): QueryOutstandingRewardsResponse {
    return QueryOutstandingRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutstandingRewardsResponseProtoMsg): QueryOutstandingRewardsResponse {
    return QueryOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryOutstandingRewardsResponse): Uint8Array {
    return QueryOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutstandingRewardsResponse): QueryOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsResponse",
      value: QueryOutstandingRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFlatFeeRequest(): QueryFlatFeeRequest {
  return {
    contractAddress: ""
  };
}
export const QueryFlatFeeRequest = {
  typeUrl: "/archway.rewards.v1.QueryFlatFeeRequest",
  encode(message: QueryFlatFeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlatFeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryFlatFeeRequestAmino): QueryFlatFeeRequest {
    const message = createBaseQueryFlatFeeRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryFlatFeeRequest): QueryFlatFeeRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryFlatFeeRequestAminoMsg): QueryFlatFeeRequest {
    return QueryFlatFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlatFeeRequestProtoMsg): QueryFlatFeeRequest {
    return QueryFlatFeeRequest.decode(message.value);
  },
  toProto(message: QueryFlatFeeRequest): Uint8Array {
    return QueryFlatFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFlatFeeRequest): QueryFlatFeeRequestProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryFlatFeeRequest",
      value: QueryFlatFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFlatFeeResponse(): QueryFlatFeeResponse {
  return {
    flatFeeAmount: Coin.fromPartial({})
  };
}
export const QueryFlatFeeResponse = {
  typeUrl: "/archway.rewards.v1.QueryFlatFeeResponse",
  encode(message: QueryFlatFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.flatFeeAmount !== undefined) {
      Coin.encode(message.flatFeeAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFlatFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: QueryFlatFeeResponseAmino): QueryFlatFeeResponse {
    const message = createBaseQueryFlatFeeResponse();
    if (object.flat_fee_amount !== undefined && object.flat_fee_amount !== null) {
      message.flatFeeAmount = Coin.fromAmino(object.flat_fee_amount);
    }
    return message;
  },
  toAmino(message: QueryFlatFeeResponse): QueryFlatFeeResponseAmino {
    const obj: any = {};
    obj.flat_fee_amount = message.flatFeeAmount ? Coin.toAmino(message.flatFeeAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFlatFeeResponseAminoMsg): QueryFlatFeeResponse {
    return QueryFlatFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFlatFeeResponseProtoMsg): QueryFlatFeeResponse {
    return QueryFlatFeeResponse.decode(message.value);
  },
  toProto(message: QueryFlatFeeResponse): Uint8Array {
    return QueryFlatFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFlatFeeResponse): QueryFlatFeeResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.QueryFlatFeeResponse",
      value: QueryFlatFeeResponse.encode(message).finish()
    };
  }
};