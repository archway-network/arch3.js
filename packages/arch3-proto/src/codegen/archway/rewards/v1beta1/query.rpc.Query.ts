import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.contractMetadata = this.contractMetadata.bind(this);
    this.blockRewardsTracking = this.blockRewardsTracking.bind(this);
    this.rewardsPool = this.rewardsPool.bind(this);
    this.estimateTxFees = this.estimateTxFees.bind(this);
    this.rewardsRecords = this.rewardsRecords.bind(this);
    this.outstandingRewards = this.outstandingRewards.bind(this);
    this.flatFee = this.flatFee.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  contractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse> {
    const data = QueryContractMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "ContractMetadata", data);
    return promise.then(data => QueryContractMetadataResponse.decode(new _m0.Reader(data)));
  }

  blockRewardsTracking(request: QueryBlockRewardsTrackingRequest = {}): Promise<QueryBlockRewardsTrackingResponse> {
    const data = QueryBlockRewardsTrackingRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "BlockRewardsTracking", data);
    return promise.then(data => QueryBlockRewardsTrackingResponse.decode(new _m0.Reader(data)));
  }

  rewardsPool(request: QueryRewardsPoolRequest = {}): Promise<QueryRewardsPoolResponse> {
    const data = QueryRewardsPoolRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "RewardsPool", data);
    return promise.then(data => QueryRewardsPoolResponse.decode(new _m0.Reader(data)));
  }

  estimateTxFees(request: QueryEstimateTxFeesRequest): Promise<QueryEstimateTxFeesResponse> {
    const data = QueryEstimateTxFeesRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "EstimateTxFees", data);
    return promise.then(data => QueryEstimateTxFeesResponse.decode(new _m0.Reader(data)));
  }

  rewardsRecords(request: QueryRewardsRecordsRequest): Promise<QueryRewardsRecordsResponse> {
    const data = QueryRewardsRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "RewardsRecords", data);
    return promise.then(data => QueryRewardsRecordsResponse.decode(new _m0.Reader(data)));
  }

  outstandingRewards(request: QueryOutstandingRewardsRequest): Promise<QueryOutstandingRewardsResponse> {
    const data = QueryOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "OutstandingRewards", data);
    return promise.then(data => QueryOutstandingRewardsResponse.decode(new _m0.Reader(data)));
  }

  flatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse> {
    const data = QueryFlatFeeRequest.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1beta1.Query", "FlatFee", data);
    return promise.then(data => QueryFlatFeeResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    contractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse> {
      return queryService.contractMetadata(request);
    },

    blockRewardsTracking(request?: QueryBlockRewardsTrackingRequest): Promise<QueryBlockRewardsTrackingResponse> {
      return queryService.blockRewardsTracking(request);
    },

    rewardsPool(request?: QueryRewardsPoolRequest): Promise<QueryRewardsPoolResponse> {
      return queryService.rewardsPool(request);
    },

    estimateTxFees(request: QueryEstimateTxFeesRequest): Promise<QueryEstimateTxFeesResponse> {
      return queryService.estimateTxFees(request);
    },

    rewardsRecords(request: QueryRewardsRecordsRequest): Promise<QueryRewardsRecordsResponse> {
      return queryService.rewardsRecords(request);
    },

    outstandingRewards(request: QueryOutstandingRewardsRequest): Promise<QueryOutstandingRewardsResponse> {
      return queryService.outstandingRewards(request);
    },

    flatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse> {
      return queryService.flatFee(request);
    }

  };
};