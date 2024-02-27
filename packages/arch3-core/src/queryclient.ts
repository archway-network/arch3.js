import { setupWasmExtension, WasmExtension } from '@cosmjs/cosmwasm-stargate';
import {
  AuthExtension,
  BankExtension,
  decodeCosmosSdkDecFromProto,
  GasPrice,
  QueryClient,
  setupAuthExtension,
  setupBankExtension,
  setupTxExtension,
  TxExtension
} from '@cosmjs/stargate';
import { fromSeconds, CometClient, toRfc3339WithNanoseconds } from '@cosmjs/tendermint-rpc';

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
  getEstimateTxFees(gasLimit?: number, contractAddress?: string): Promise<EstimateTxFees>;

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
   * @see {@link IArchwayQueryClient.getContractMetadata}
   */
  getAllRewardsRecords(rewardsAddress: string): Promise<readonly RewardsRecord[]>;
}

class ArchwayQueryClientImpl implements IArchwayQueryClient {
  private readonly queryClient: ExtendedQueryClient | undefined;

  public constructor(cometClient: CometClient | undefined) {
    if (cometClient) {
      this.queryClient = QueryClient.withExtensions(
        cometClient,
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
    if (!this.getQueryClient()) {
      throw new Error('Query client not available. You cannot use online functionality in offline mode.');
    }
    return this.queryClient;
  }

  public async getBlockRewardsTracking(): Promise<BlockTracking> {
    const client = this.forceGetQueryClient();
    const {
      block: { txRewards: txRewardsResponse, inflationRewards }
    } = await client.rewards.blockRewardsTracking();

    const txRewards = txRewardsResponse.map(txReward => {
      return {
        txId: Number(txReward.txId),
        height: Number(txReward.height),
        feeRewards: txReward.feeRewards,
      };
    });

    return {
      inflationRewards: {
        height: Number(inflationRewards.height),
        inflationRewards: inflationRewards.inflationRewards,
        maxGas: Number(inflationRewards.maxGas),
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
    try {
      const { flatFeeAmount } = await client.rewards.flatFee(contractAddress);
      return {
        contractAddress,
        flatFee: flatFeeAmount,
      };
    } catch (e) {
      return {
        contractAddress,
      };
    }
  }

  public async getEstimateTxFees(gasLimit: number = 1, contractAddress?: string): Promise<EstimateTxFees> {
    const client = this.forceGetQueryClient();
    const {
      estimatedFee,
      gasUnitPrice: { amount: gasPriceAmount, denom: gasPriceDenom }
    } = await client.rewards.estimateTxFees(gasLimit, contractAddress ?? '');

    // The RPC queries do not include the decimal precision fot types.Dec,
    // so we need to manually decode the gas amount from the proto, as suggested in
    // https://github.com/osmosis-labs/telescope/issues/247#issuecomment-1292407464
    // See also: https://github.com/cosmos/cosmos-sdk/issues/10863
    const gasUnitPriceAmount = decodeCosmosSdkDecFromProto(gasPriceAmount);
    const gasUnitPrice = new GasPrice(gasUnitPriceAmount, gasPriceDenom);

    return {
      contractAddress,
      gasUnitPrice,
      estimatedFee: {
        amount: estimatedFee,
        gas: gasLimit.toString(),
      }
    };
  }

  public async getOutstandingRewards(rewardsAddress: string): Promise<OutstandingRewards> {
    const client = this.forceGetQueryClient();
    const { totalRewards, recordsNum } = await client.rewards.outstandingRewards(rewardsAddress);

    return {
      rewardsAddress,
      totalRewards,
      totalRecords: Number(recordsNum),
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
          Number(record.calculatedTime.seconds),
          record.calculatedTime.nanos
        );
        return {
          id: Number(record.id),
          rewardsAddress: record.rewardsAddress,
          calculatedHeight: Number(record.calculatedHeight),
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
 * @param cometClient - A CometBFT client for a given endpoint.
 * @returns A new {@link IArchwayQueryClient} implementation.
 */
export function createArchwayQueryClient(cometClient: CometClient | undefined): IArchwayQueryClient {
  return new ArchwayQueryClientImpl(cometClient);
}
