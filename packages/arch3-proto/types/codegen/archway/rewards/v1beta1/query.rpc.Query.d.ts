import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryContractMetadataRequest, QueryContractMetadataResponse, QueryBlockRewardsTrackingRequest, QueryBlockRewardsTrackingResponse, QueryRewardsPoolRequest, QueryRewardsPoolResponse, QueryEstimateTxFeesRequest, QueryEstimateTxFeesResponse, QueryRewardsRecordsRequest, QueryRewardsRecordsResponse, QueryOutstandingRewardsRequest, QueryOutstandingRewardsResponse, QueryFlatFeeRequest, QueryFlatFeeResponse } from "./query";
/** Query service for the tracking module. */
export interface Query {
    /** Params returns module parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ContractMetadata returns the contract rewards parameters (metadata). */
    contractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse>;
    /** BlockRewardsTracking returns block rewards tracking for the current block. */
    blockRewardsTracking(request?: QueryBlockRewardsTrackingRequest): Promise<QueryBlockRewardsTrackingResponse>;
    /** RewardsPool returns the current undistributed rewards pool funds. */
    rewardsPool(request?: QueryRewardsPoolRequest): Promise<QueryRewardsPoolResponse>;
    /**
     * EstimateTxFees returns the estimated transaction fees for the given transaction
     * gas limit using the minimum consensus fee value for the current block.
     */
    estimateTxFees(request: QueryEstimateTxFeesRequest): Promise<QueryEstimateTxFeesResponse>;
    /** RewardsRecords returns the paginated list of RewardsRecord objects stored for the provided rewards_address. */
    rewardsRecords(request: QueryRewardsRecordsRequest): Promise<QueryRewardsRecordsResponse>;
    /** OutstandingRewards returns total rewards credited from different contracts for the provided rewards_address. */
    outstandingRewards(request: QueryOutstandingRewardsRequest): Promise<QueryOutstandingRewardsResponse>;
    /** FlatFee returns the flat fee set by the contract owner for the provided contract_address */
    flatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse>;
    blockRewardsTracking(request?: QueryBlockRewardsTrackingRequest): Promise<QueryBlockRewardsTrackingResponse>;
    rewardsPool(request?: QueryRewardsPoolRequest): Promise<QueryRewardsPoolResponse>;
    estimateTxFees(request: QueryEstimateTxFeesRequest): Promise<QueryEstimateTxFeesResponse>;
    rewardsRecords(request: QueryRewardsRecordsRequest): Promise<QueryRewardsRecordsResponse>;
    outstandingRewards(request: QueryOutstandingRewardsRequest): Promise<QueryOutstandingRewardsResponse>;
    flatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse>;
    blockRewardsTracking(request?: QueryBlockRewardsTrackingRequest): Promise<QueryBlockRewardsTrackingResponse>;
    rewardsPool(request?: QueryRewardsPoolRequest): Promise<QueryRewardsPoolResponse>;
    estimateTxFees(request: QueryEstimateTxFeesRequest): Promise<QueryEstimateTxFeesResponse>;
    rewardsRecords(request: QueryRewardsRecordsRequest): Promise<QueryRewardsRecordsResponse>;
    outstandingRewards(request: QueryOutstandingRewardsRequest): Promise<QueryOutstandingRewardsResponse>;
    flatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse>;
};
