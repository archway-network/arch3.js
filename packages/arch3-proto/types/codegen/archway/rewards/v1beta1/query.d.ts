import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ContractMetadata, ContractMetadataSDKType, BlockRewards, BlockRewardsSDKType, TxRewards, TxRewardsSDKType, RewardsRecord, RewardsRecordSDKType } from "./rewards";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryBlockRewardsTrackingRequest {
}
/** QueryBlockRewardsTrackingRequest is the request for Query.BlockRewardsTracking. */
export interface QueryBlockRewardsTrackingRequestSDKType {
}
/** QueryBlockRewardsTrackingResponse is the response for Query.BlockRewardsTracking. */
export interface QueryBlockRewardsTrackingResponse {
    block?: BlockTracking;
}
/** QueryBlockRewardsTrackingResponse is the response for Query.BlockRewardsTracking. */
export interface QueryBlockRewardsTrackingResponseSDKType {
    block?: BlockTrackingSDKType;
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */
export interface QueryRewardsPoolRequest {
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */
export interface QueryRewardsPoolRequestSDKType {
}
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
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryContractMetadataRequest: {
    encode(message: QueryContractMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractMetadataRequest;
    fromPartial(object: Partial<QueryContractMetadataRequest>): QueryContractMetadataRequest;
};
export declare const QueryContractMetadataResponse: {
    encode(message: QueryContractMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractMetadataResponse;
    fromPartial(object: Partial<QueryContractMetadataResponse>): QueryContractMetadataResponse;
};
export declare const QueryBlockRewardsTrackingRequest: {
    encode(_: QueryBlockRewardsTrackingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockRewardsTrackingRequest;
    fromPartial(_: Partial<QueryBlockRewardsTrackingRequest>): QueryBlockRewardsTrackingRequest;
};
export declare const QueryBlockRewardsTrackingResponse: {
    encode(message: QueryBlockRewardsTrackingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockRewardsTrackingResponse;
    fromPartial(object: Partial<QueryBlockRewardsTrackingResponse>): QueryBlockRewardsTrackingResponse;
};
export declare const QueryRewardsPoolRequest: {
    encode(_: QueryRewardsPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsPoolRequest;
    fromPartial(_: Partial<QueryRewardsPoolRequest>): QueryRewardsPoolRequest;
};
export declare const QueryRewardsPoolResponse: {
    encode(message: QueryRewardsPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsPoolResponse;
    fromPartial(object: Partial<QueryRewardsPoolResponse>): QueryRewardsPoolResponse;
};
export declare const QueryEstimateTxFeesRequest: {
    encode(message: QueryEstimateTxFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateTxFeesRequest;
    fromPartial(object: Partial<QueryEstimateTxFeesRequest>): QueryEstimateTxFeesRequest;
};
export declare const QueryEstimateTxFeesResponse: {
    encode(message: QueryEstimateTxFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEstimateTxFeesResponse;
    fromPartial(object: Partial<QueryEstimateTxFeesResponse>): QueryEstimateTxFeesResponse;
};
export declare const BlockTracking: {
    encode(message: BlockTracking, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockTracking;
    fromPartial(object: Partial<BlockTracking>): BlockTracking;
};
export declare const QueryRewardsRecordsRequest: {
    encode(message: QueryRewardsRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRecordsRequest;
    fromPartial(object: Partial<QueryRewardsRecordsRequest>): QueryRewardsRecordsRequest;
};
export declare const QueryRewardsRecordsResponse: {
    encode(message: QueryRewardsRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardsRecordsResponse;
    fromPartial(object: Partial<QueryRewardsRecordsResponse>): QueryRewardsRecordsResponse;
};
export declare const QueryOutstandingRewardsRequest: {
    encode(message: QueryOutstandingRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutstandingRewardsRequest;
    fromPartial(object: Partial<QueryOutstandingRewardsRequest>): QueryOutstandingRewardsRequest;
};
export declare const QueryOutstandingRewardsResponse: {
    encode(message: QueryOutstandingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutstandingRewardsResponse;
    fromPartial(object: Partial<QueryOutstandingRewardsResponse>): QueryOutstandingRewardsResponse;
};
export declare const QueryFlatFeeRequest: {
    encode(message: QueryFlatFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFlatFeeRequest;
    fromPartial(object: Partial<QueryFlatFeeRequest>): QueryFlatFeeRequest;
};
export declare const QueryFlatFeeResponse: {
    encode(message: QueryFlatFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFlatFeeResponse;
    fromPartial(object: Partial<QueryFlatFeeResponse>): QueryFlatFeeResponse;
};
