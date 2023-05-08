import { setupWasmExtension, WasmExtension } from '@cosmjs/cosmwasm-stargate';
import {
  AuthExtension,
  BankExtension,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupTxExtension,
  TxExtension
} from '@cosmjs/stargate';
import { fromSeconds, TendermintClient, toRfc3339WithNanoseconds } from '@cosmjs/tendermint-rpc';

import { RewardsExtension, setupRewardsExtension } from './modules';
import {
  BlockTracking,
  ContractMetadata,
  ContractPremium,
  EstimateTxFees,
  OutstandingRewards,
  RewardsPool,
  RewardsRecord
} from './types';

type ExtendedQueryClient = QueryClient & AuthExtension & BankExtension & TxExtension & WasmExtension & RewardsExtension;

/**
 * Interface for querying the Archway modules.
 */
export interface IArchwayQueryClient {
  /**
   * Queries the rewards tracking data for the current block height.
   *
   * @returns The current block rewards tracking information.
   */
  getBlockRewardsTracking(): Promise<BlockTracking>;

  /**
   * Queries a contract metadata for information on the rewards destination.
   *
   * @param contractAddress - Contract address to query the metadata for.
   * @returns The contract metadata.
   */
  getContractMetadata(contractAddress: string): Promise<ContractMetadata | undefined>;

  /**
   * Queries the premium fee for a contract.
   *
   * @param contractAddress - Contract address to query the premium for.
   * @returns The contract premium data.
   */
  getContractPremium(contractAddress: string): Promise<ContractPremium>;

  /**
   * Queries the transaction fees estimation for a given gas limit.
   * Optionally takes in contract address to include the flat fees in the estimate.
   *
   * @param gasLimit - Gas limit to estimate the fees for.
   * @param contractAddress - Contract address to include the flat fees in the estimate.
   * @returns The estimated transaction fees for the lastest block.
   */
  getEstimateTxFees(gasLimit: number, contractAddress?: string): Promise<EstimateTxFees>;

  /**
   * Queries the unclaimed rewards available for a given address.
   *
   * @param rewardsAddress - address set in a contract's metadata to receive rewards
   * @returns The outstanding rewards for the given address.
   */
  getOutstandingRewards(rewardsAddress: string): Promise<OutstandingRewards>;

  /**
   * Queries the pool with undistributed rewards and the treasury pool funds.
   *
   * @returns The rewards pool information.
   */
  getRewardsPool(): Promise<RewardsPool>;

  /**
   * Queries all available rewards stored for a given address set in a contract's metadata.
   *
   * @param rewardsAddress - Address set in a contract's metadata to receive rewards.
   * @returns All rewards records for the given address.
   *
   * @see {@link ArchwayClient.getContractMetadata}
   */
  getAllRewardsRecords(rewardsAddress: string): Promise<readonly RewardsRecord[]>;
}

class ArchwayQueryClientImpl implements IArchwayQueryClient {
  private readonly queryClient: ExtendedQueryClient | undefined;

  public constructor(tmClient: TendermintClient | undefined) {
    if (tmClient) {
      this.queryClient = QueryClient.withExtensions(
        tmClient,
        setupAuthExtension,
        setupBankExtension,
        setupWasmExtension,
        setupRewardsExtension,
        setupTxExtension,
      );
    }
  }

  protected getQueryClient(): ExtendedQueryClient | undefined {
    return this.queryClient;
  }

  protected forceGetQueryClient(): ExtendedQueryClient {
    if (!this.queryClient) {
      throw new Error('Query client not available. You cannot use online functionality in offline mode.');
    }
    return this.queryClient;
  }

  public async getBlockRewardsTracking(): Promise<BlockTracking> {
    const client = this.forceGetQueryClient();
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

  public async getContractMetadata(contractAddress: string): Promise<ContractMetadata | undefined> {
    const client = this.forceGetQueryClient();
    const {
      metadata: { ownerAddress, rewardsAddress }
    } = await client.rewards.contractMetadata(contractAddress);

    return {
      contractAddress,
      ownerAddress,
      rewardsAddress
    };
  }

  public async getContractPremium(contractAddress: string): Promise<ContractPremium> {
    const client = this.forceGetQueryClient();
    const { flatFeeAmount } = await client.rewards.flatFee(contractAddress);

    return {
      contractAddress,
      flatFee: flatFeeAmount,
    };
  }

  public async getEstimateTxFees(gasLimit: number, contractAddress?: string): Promise<EstimateTxFees> {
    const client = this.forceGetQueryClient();
    const { estimatedFee, gasUnitPrice } = await client.rewards.estimateTxFees(gasLimit, contractAddress || '');

    return {
      gasLimit,
      contractAddress,
      estimatedFee,
      gasUnitPrice,
    };
  }

  public async getOutstandingRewards(rewardsAddress: string): Promise<OutstandingRewards> {
    const client = this.forceGetQueryClient();
    const { totalRewards, recordsNum } = await client.rewards.outstandingRewards(rewardsAddress);

    return {
      rewardsAddress,
      totalRewards,
      recordsNum: recordsNum.toNumber(),
    };
  }

  public async getRewardsPool(): Promise<RewardsPool> {
    const client = this.forceGetQueryClient();
    const { undistributedFunds, treasuryFunds } = await client.rewards.rewardsPool();

    return {
      undistributedFunds,
      treasuryFunds
    };
  }

  public async getAllRewardsRecords(rewardsAddress: string): Promise<readonly RewardsRecord[]> {
    const client = this.forceGetQueryClient();

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

/**
 * Created a facade for querying archway modules using the
 * {@link QueryClient} extended with the {@link RewardsExtension}.
 *
 * @param tmClient - A Tendermint client for a given endpoint.
 * @returns A new {@link IArchwayQueryClient} implementation.
 */
export function createArchwayQueryClient(tmClient: TendermintClient | undefined): IArchwayQueryClient {
  return new ArchwayQueryClientImpl(tmClient);
}