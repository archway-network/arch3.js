import { Coin } from '@cosmjs/stargate';

/**
 * Defines the contract rewards distribution options for a particular contract.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getContractMetadata}
 */
export interface ContractMetadata {
  /** Contract address. */
  readonly contractAddress: string;
  /**
   * Owner address who can modify contract the metadata.
   * That could be the contract admin or the contract itself.
   * If the owner address is set to a contract address,
   * the contract can modify the metadata on its own using the WASM bindings.
   */
  readonly ownerAddress?: string;
  /**
   * Address to distribute rewards to. If not set, rewards are not distributed for this contract.
   */
  readonly rewardsAddress?: string;
}

/**
 * Defines the contract premium fee for a particular contract.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getContractPremium}
 */
export interface ContractPremium {
  /** Contract address. */
  readonly contractAddress: string;
  /** Contract premium fee set by the contract metadata owner. */
  readonly flatFee?: Coin;
}

/**
 * Contains the transaction fees estimation for a given gas limit,
 * including the contract premium if a contract address is provided.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getEstimateTxFees}
 */
export interface EstimateTxFees {
  /** Maximum amount of gas to be used in this transaction. */
  readonly gasLimit: number;
  /** Minimum transaction fee per gas unit. */
  readonly gasUnitPrice?: Coin;
  /** Contract address used to query for premium fees. */
  readonly contractAddress?: string;
  /** Estimated transaction fee for a given gas limit and contract premium. */
  readonly estimatedFee: Coin[];
}

/**
 * Outstanding rewards available for a rewards address.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getBlockRewardsTracking}
 */
export interface OutstandingRewards {
  /** Address to which the rewards are deposited. */
  readonly rewardsAddress: string;
  /** Total rewards credited to the rewards address. */
  readonly totalRewards: Coin[];
  /** Total number of RewardsRecord objects stored for the rewards address. */
  readonly totalRecords: number;
}

/**
 * Contains all rewards ready for withdrawal and treasury funds.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getRewardsPool}
 */
export interface RewardsPool {
  /** Tokens ready for withdrawal. */
  readonly undistributedFunds: Coin[];
  /**
   * Treasury tokens available. Treasury tokens are collected on a block basis.
   * Those tokens are the unused block rewards.
   */
  readonly treasuryFunds: Coin[];
}

/**
 * Defines rewards that are pending withdraw.
 * This record is being created by the x/rewards EndBlocker and pruned after the rewards are distributed.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getAllRewardsRecords}
 */
export interface RewardsRecord {
  /** Unique ID of the record. */
  readonly id: number;
  /** Address to distribute rewards to. */
  readonly rewardsAddress: string;
  /** Rewards available for withdraw. */
  readonly rewards: Coin[];
  /** Block height at which the rewards were calculated. */
  readonly calculatedHeight: number;
  /** Block time at which the rewards were calculated. */
  readonly calculatedTime?: string;
}

/**
 * Defines rewards distribution data for a particular block.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getBlockRewardsTracking}
 */
export interface BlockRewards {
  /** Current the block height. */
  readonly height: number;
  /** Inflation rewards distributed in the block. */
  readonly inflationRewards?: Coin;
  /** Maximum gas for the block that is used to distribute inflation rewards (consensus parameter). */
  readonly maxGas: number;
}

/**
 * Defines rewards distribution data related to a transaction.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getBlockRewardsTracking}
 */
export interface TxRewards {
  /** Tracking transaction ID. */
  readonly txId: number;
  /** Block height when the rewards were calculated. */
  readonly height: number;
  /** Amount of fee rewards to be distributed. */
  readonly feeRewards: Coin[];
}

/**
 * Rewards tracking information for a particular block.
 *
 * @see {@link ./queryclient!IArchwayQueryClient.getBlockRewardsTracking}
 */
export interface BlockTracking {
  /** Inflation rewards for the block. */
  readonly inflationRewards?: BlockRewards;
  /** Transaction rewards for the block. */
  readonly txRewards: TxRewards[];
}
