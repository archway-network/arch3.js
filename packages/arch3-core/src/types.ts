import { Coin, GasPrice, StdFee } from '@cosmjs/stargate';

/**
 * Defines the contract rewards distribution options for a particular contract.
 *
 * @see {@link ArchwayClient.getContractMetadata}
 * @see {@link SigningArchwayClient.setContractMetadata}
 * @see {@link SigningArchwayClient.withdrawContractRewards}
 */
export interface ContractMetadata {
  /** Address of the contract with the rewards metadata. */
  readonly contractAddress: string;
  /**
   * Owner address who can modify contract the metadata.
   * That could be the contract admin or the contract itself.
   * If the `ownerAddress` is set to a contract address, only the contract
   * will be able to modify the metadata using the [WASM bindings](https://github.com/archway-network/archway-bindings).
   */
  readonly ownerAddress?: string;
  /**
   * Address to distribute rewards to. If not set, rewards are not distributed for this contract.
   *
   * If a contract address is set as the `rewardsAddress`, only the contract will be able to withdraw
   * the rewards using the [WASM bindings](https://github.com/archway-network/archway-bindings).
   */
  readonly rewardsAddress?: string;
  /**
   * Flag that defines if rewards should be immediately withdrawn to the wallet
   * instead of creating a rewards record to be lazily withdrawn after.
   */
  readonly withdrawToWallet?: boolean;
}

/**
 * Defines a contract premium fee for a particular contract.
 * Only the contract metadata owner can set the premium fee.
 *
 * @see {@link ArchwayClient.getContractPremium}
 * @see {@link SigningArchwayClient.setContractPremium}
 */
export interface ContractPremium {
  /** Contract address with the premium fee. */
  readonly contractAddress: string;
  /** Premium fee set by the contract metadata owner. */
  readonly flatFee?: Coin;
}

/**
 * Contains the transaction fees estimation for a given gas limit,
 * including the contract premium if a contract address is provided.
 *
 * @see {@link ArchwayClient.getEstimateTxFees}
 */
export interface EstimateTxFees {
  /** Minimum transaction fee per gas unit. */
  readonly gasUnitPrice?: GasPrice;
  /** Contract address used to query for premium fees. */
  readonly contractAddress?: string;
  /** Estimated transaction fee for a given gas limit and contract premium. */
  readonly estimatedFee: StdFee;
}

/**
 * Outstanding rewards available for a rewards address.
 *
 * @see {@link ArchwayClient.getBlockRewardsTracking}
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
 * @see {@link ArchwayClient.getRewardsPool}
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
 * This record is created by the `x/rewards` EndBlocker and deleted after the rewards are withdrawn.
 *
 * @see {@link ArchwayClient.getAllRewardsRecords}
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
 * @see {@link ArchwayClient.getBlockRewardsTracking}
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
 * @see {@link ArchwayClient.getBlockRewardsTracking}
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
 * @see {@link ArchwayClient.getBlockRewardsTracking}
 */
export interface BlockTracking {
  /** Inflation rewards for the block. */
  readonly inflationRewards?: BlockRewards;
  /** Transaction rewards for the block. */
  readonly txRewards: TxRewards[];
}
