import { archway } from '@archwayhq/arch3-proto';
import {
  QueryBlockRewardsTrackingResponse,
  QueryContractMetadataResponse,
  QueryEstimateTxFeesResponse,
  QueryFlatFeeResponse,
  QueryOutstandingRewardsResponse,
  QueryParamsResponse,
  QueryRewardsPoolResponse,
  QueryRewardsRecordsResponse
} from '@archwayhq/arch3-proto/build/archway/rewards/v1/query';
import { createPagination, QueryClient } from '@cosmjs/stargate';

export interface RewardsExtension {
  readonly rewards: {
    readonly params: () => Promise<QueryParamsResponse>;
    readonly contractMetadata: (contractAddress: string) => Promise<QueryContractMetadataResponse>;
    readonly blockRewardsTracking: () => Promise<QueryBlockRewardsTrackingResponse>;
    readonly rewardsPool: () => Promise<QueryRewardsPoolResponse>;
    readonly estimateTxFees: (gasLimit: number, contractAddress: string) => Promise<QueryEstimateTxFeesResponse>;
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
  const queryService = archway.rewards.v1.createRpcQueryExtension(base);

  return {
    rewards: {
      params: async () => queryService.params(),
      contractMetadata: (contractAddress: string) => queryService.contractMetadata({ contractAddress }),
      blockRewardsTracking: () => queryService.blockRewardsTracking(),
      rewardsPool: () => queryService.rewardsPool(),
      estimateTxFees: (gasLimit: number, contractAddress: string) => queryService.estimateTxFees({
        gasLimit: BigInt(gasLimit),
        contractAddress,
      }),
      rewardsRecords: (rewardsAddress: string, paginationKey?: Uint8Array) => queryService.rewardsRecords({
        rewardsAddress,
        pagination: createPagination(paginationKey),
      }),
      outstandingRewards: (rewardsAddress: string) => queryService.outstandingRewards({ rewardsAddress }),
      flatFee: (contractAddress: string) => queryService.flatFee({ contractAddress }),
    }
  };
}
