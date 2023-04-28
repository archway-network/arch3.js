import { CosmWasmClient, HttpEndpoint, setupWasmExtension, WasmExtension } from '@cosmjs/cosmwasm-stargate';
import {
  AuthExtension,
  BankExtension,
  Coin,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupTxExtension,
  TxExtension
} from '@cosmjs/stargate';
import { fromSeconds, Tendermint34Client, TendermintClient, toRfc3339WithNanoseconds } from '@cosmjs/tendermint-rpc';

import { RewardsExtension, setupRewardsExtension } from './modules';

/**
 * Defines the contract rewards distribution options for a particular contract.
 *
 * @see {@link ArchwayClient.getContractMetadata}
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
  readonly ownerAddress: string;
  /**
   * Address to distribute rewards to. If not set, rewards are not distributed for this contract.
   */
  readonly rewardsAddress: string;
}

/**
 * Defines the contract premium fee for a particular contract.
 *
 * @see {@link ArchwayClient.getContractPremium}
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
 * @see {@link ArchwayClient.getEstimateTxFees}
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
 * @see {@link ArchwayClient.getBlockRewardsTracking}
 */
export interface OutstandingRewards {
  /** Address to which the rewards are deposited. */
  readonly rewardsAddress: string;
  /** Total rewards credited to the rewards address. */
  readonly totalRewards: Coin[];
  /** Total number of RewardsRecord objects stored for the rewards address. */
  readonly recordsNum: number;
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
 * This record is being created by the x/rewards EndBlocker and pruned after the rewards are distributed.
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

type ArchwayQueryClient = QueryClient & AuthExtension & BankExtension & TxExtension & WasmExtension & RewardsExtension;

/**
 * Extension to the {@link CosmWasmClient } with queries for Archway's modules.
 */
export class ArchwayClient extends CosmWasmClient {
  private readonly archwayQueryClient: ArchwayQueryClient | undefined;

  /**
   * @param endpoint - String URL of the RPC endpoint to connect or an `HttpEndpoint` object.
   * @returns An `ArchwayClient` connected to the endpoint.
   */
  public static override async connect(endpoint: string | HttpEndpoint): Promise<ArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ArchwayClient(tmClient);
  }

  protected constructor(tmClient: TendermintClient | undefined) {
    super(tmClient);
    if (tmClient) {
      this.archwayQueryClient = QueryClient.withExtensions(
        tmClient,
        setupAuthExtension,
        setupBankExtension,
        setupWasmExtension,
        setupRewardsExtension,
        setupTxExtension,
      );
    }
  }

  protected getArchwayQueryClient(): ArchwayQueryClient | undefined {
    return this.archwayQueryClient;
  }

  protected forceGetArchwayQueryClient(): ArchwayQueryClient {
    if (!this.archwayQueryClient) {
      throw new Error('Query client not available. You cannot use online functionality in offline mode.');
    }
    return this.archwayQueryClient;
  }

  /**
   * Queries the rewards tracking data for the current block height.
   *
   * @returns The current block rewards tracking information.
   */
  public async getBlockRewardsTracking(): Promise<BlockTracking> {
    const client = this.forceGetArchwayQueryClient();
    const {
      block: { txRewards: txRewardsResponse, inflationRewards }
    } = await client.rewards.blockRewardsTracking();

    const txRewards = txRewardsResponse.map(txReward => { return {
      txId: txReward.txId.toNumber(),
      height: txReward.height.toNumber(),
      feeRewards: txReward.feeRewards,
    }; });

    return {
      inflationRewards: {
        height: inflationRewards.height.toNumber(),
        inflationRewards: inflationRewards.inflationRewards,
        maxGas: inflationRewards.maxGas.toNumber(),
      },
      txRewards,
    };
  }

  /**
   * Queries a contract metadata for information on the rewards destination.
   *
   * @param contractAddress - Contract address to query the metadata for.
   * @returns The contract metadata.
   */
  public async getContractMetadata(contractAddress: string): Promise<ContractMetadata | undefined> {
    const client = this.forceGetArchwayQueryClient();
    const {
      metadata: { ownerAddress, rewardsAddress }
    } = await client.rewards.contractMetadata(contractAddress);

    return {
      contractAddress,
      ownerAddress,
      rewardsAddress
    };
  }

  /**
   * Queries the premium fee for a contract.
   *
   * @param contractAddress - Contract address to query the premium for.
   * @returns The contract premium data.
   */
  public async getContractPremium(contractAddress: string): Promise<ContractPremium> {
    const client = this.forceGetArchwayQueryClient();
    const { flatFeeAmount } = await client.rewards.flatFee(contractAddress);

    return {
      contractAddress,
      flatFee: flatFeeAmount,
    };
  }

  /**
   * Queries the transaction fees estimation for a given gas limit.
   * Optionally takes in contract address to include the flat fees in the estimate.
   *
   * @param gasLimit - Gas limit to estimate the fees for.
   * @param contractAddress - Contract address to include the flat fees in the estimate.
   * @returns The estimated transaction fees for the lastest block.
   */
  public async getEstimateTxFees(gasLimit: number, contractAddress?: string): Promise<EstimateTxFees> {
    const client = this.forceGetArchwayQueryClient();
    const { estimatedFee, gasUnitPrice } = await client.rewards.estimateTxFees(gasLimit, contractAddress || '');

    return {
      gasLimit,
      contractAddress,
      estimatedFee,
      gasUnitPrice,
    };
  }

  /**
   * Queries the unclaimed rewards available for a given address.
   *
   * @param rewardsAddress - address set in a contract's metadata to receive rewards
   * @returns The outstanding rewards for the given address.
   */
  public async getOutstandingRewards(rewardsAddress: string): Promise<OutstandingRewards> {
    const client = this.forceGetArchwayQueryClient();
    const { totalRewards, recordsNum } = await client.rewards.outstandingRewards(rewardsAddress);

    return {
      rewardsAddress,
      totalRewards,
      recordsNum: recordsNum.toNumber(),
    };
  }

  /**
   * Queries the pool with undistributed rewards and the treasury pool funds.
   *
   * @returns The rewards pool information.
   */
  public async getRewardsPool(): Promise<RewardsPool> {
    const client = this.forceGetArchwayQueryClient();
    const { undistributedFunds, treasuryFunds } = await client.rewards.rewardsPool();

    return {
      undistributedFunds,
      treasuryFunds
    };
  }

  /**
   * Queries all available rewards stored for a given address set in a contract's metadata.
   *
   * @param rewardsAddress - Address set in a contract's metadata to receive rewards.
   * @returns All rewards records for the given address.
   *
   * @see {@link ArchwayClient.getContractMetadata}
   */
  public async getAllRewardsRecords(rewardsAddress: string): Promise<readonly RewardsRecord[]> {
    const client = this.forceGetArchwayQueryClient();

    const allRewardsRecords = new Array<RewardsRecord>();
    let startAtKey: Uint8Array | undefined = undefined;

    do {
      /* eslint no-await-in-loop: "off" */
      const { records, pagination } = await client.rewards.rewardsRecords(rewardsAddress, startAtKey);

      const rewardsRecords = records.map(record => {
        const calculatedTime = fromSeconds(
          record.calculatedTime.seconds.toNumber(),
          record.calculatedTime.nanos
        );
        return {
          id: record.id.toNumber(),
          rewardsAddress: record.rewardsAddress,
          calculatedHeight: record.calculatedHeight.toNumber(),
          calculatedTime: toRfc3339WithNanoseconds(calculatedTime),
          rewards: record.rewards,
        };
      });

      allRewardsRecords.push(...rewardsRecords);

      startAtKey = pagination?.nextKey;
    } while (startAtKey?.length !== 0);

    return allRewardsRecords;
  }
}
