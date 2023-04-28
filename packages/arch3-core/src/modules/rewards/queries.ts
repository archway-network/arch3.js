import {
  QueryBlockRewardsTrackingResponse,
  QueryContractMetadataResponse,
  QueryEstimateTxFeesResponse,
  QueryFlatFeeResponse,
  QueryOutstandingRewardsResponse,
  QueryParamsResponse,
  QueryRewardsPoolResponse,
  QueryRewardsRecordsResponse
} from '@archwayhq/arch3-proto/archway/rewards/v1beta1/query';
import { createRpcQueryExtension } from '@archwayhq/arch3-proto/archway/rewards/v1beta1/query.rpc.Query';
import { Long } from '@archwayhq/arch3-proto/helpers';
import { createPagination, QueryClient } from '@cosmjs/stargate';

export interface RewardsExtension {
  readonly rewards: {
    readonly params: () => Promise<QueryParamsResponse>;
    readonly contractMetadata: (contractAddress: string) => Promise<QueryContractMetadataResponse>;
    readonly blockRewardsTracking: () => Promise<QueryBlockRewardsTrackingResponse>;
    readonly rewardsPool: () => Promise<QueryRewardsPoolResponse>;
    readonly estimateTxFees: (gasLimit: number, contractAddress?: string) => Promise<QueryEstimateTxFeesResponse>;
    readonly rewardsRecords: (rewardsAddress: string, paginationKey?: Uint8Array) => Promise<QueryRewardsRecordsResponse>;
    readonly outstandingRewards: (rewardsAddress: string) => Promise<QueryOutstandingRewardsResponse>;
    readonly flatFee: (contractAddress: string) => Promise<QueryFlatFeeResponse>;
  }
}

/**
 * Creates a rewards extension for the given {@link QueryClient}.
 *
 * @param base - The base query client to use for RPC queries.
 * @returns A {@link RewardsExtension}.
 */
export function setupRewardsExtension(base: QueryClient): RewardsExtension {
  const queryService = createRpcQueryExtension(base);

  return {
    rewards: {
      params: async () => queryService.params(),
      contractMetadata: (contractAddress: string) => queryService.contractMetadata({ contractAddress }),
      blockRewardsTracking: () => queryService.blockRewardsTracking(),
      rewardsPool: () => queryService.rewardsPool(),
      estimateTxFees: (gasLimit: number, contractAddress: string) => {
        const request = {
          gasLimit: Long.fromNumber(gasLimit),
          contractAddress,
        };
        return queryService.estimateTxFees(request);
      },
      rewardsRecords: (rewardsAddress: string, paginationKey?: Uint8Array) => {
        const request = {
          rewardsAddress,
          pagination: createPagination(paginationKey),
        };
        return queryService.rewardsRecords(request);
      },
      outstandingRewards: (rewardsAddress: string) => queryService.outstandingRewards({ rewardsAddress }),
      flatFee: (contractAddress: string) => queryService.flatFee({ contractAddress }),
    }
  };
}
