import { CosmWasmClient, HttpEndpoint } from '@cosmjs/cosmwasm-stargate';
import { Tendermint34Client, TendermintClient } from '@cosmjs/tendermint-rpc';

import { IArchwayQueryClient, createArchwayQueryClient } from './queryclient';
import {
  BlockTracking,
  ContractMetadata,
  ContractPremium,
  EstimateTxFees,
  OutstandingRewards,
  RewardsPool,
  RewardsRecord
} from './types';

/**
 * Extension to the {@link CosmWasmClient } with queries for Archway's modules.
 */
export class ArchwayClient extends CosmWasmClient implements IArchwayQueryClient {
  private readonly archwayQueryClient: IArchwayQueryClient;

  protected constructor(tmClient: TendermintClient | undefined) {
    super(tmClient);
    this.archwayQueryClient = createArchwayQueryClient(tmClient);
  }

  /**
   * Creates an instance by connecting to the given Tendermint RPC endpoint.
   *
   * @param endpoint - String URL of the RPC endpoint to connect or an `HttpEndpoint` object.
   * @returns An {@link ArchwayClient} connected to the endpoint.
   *
   * @see Use {@link ArchwayClient.create} if you need Tendermint 0.37 support.
   */
  public static override async connect(endpoint: string | HttpEndpoint): Promise<ArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return ArchwayClient.create(tmClient);
  }

  /**
   * Creates an instance from a manually created Tendermint client.
   * Use this to use `Tendermint37Client instead of {@link Tendermint34Client}.
   *
   * @param tmClient - A Tendermint client for a given endpoint.
   * @returns An {@link ArchwayClient} connected to the endpoint.
   */
  /* eslint-disable-next-line @typescript-eslint/require-await */
  public static override async create(tmClient: TendermintClient): Promise<ArchwayClient> {
    return new ArchwayClient(tmClient);
  }

  public async getBlockRewardsTracking(): Promise<BlockTracking> {
    return await this.archwayQueryClient.getBlockRewardsTracking();
  }

  public async getContractMetadata(contractAddress: string): Promise<ContractMetadata | undefined> {
    return await this.archwayQueryClient.getContractMetadata(contractAddress);
  }

  public async getContractPremium(contractAddress: string): Promise<ContractPremium> {
    return await this.archwayQueryClient.getContractPremium(contractAddress);
  }

  public async getEstimateTxFees(gasLimit?: number, contractAddress?: string): Promise<EstimateTxFees> {
    return await this.archwayQueryClient.getEstimateTxFees(gasLimit, contractAddress);
  }

  public async getOutstandingRewards(rewardsAddress: string): Promise<OutstandingRewards> {
    return await this.archwayQueryClient.getOutstandingRewards(rewardsAddress);
  }

  public async getRewardsPool(): Promise<RewardsPool> {
    return await this.archwayQueryClient.getRewardsPool();
  }

  public async getAllRewardsRecords(rewardsAddress: string): Promise<readonly RewardsRecord[]> {
    return await this.archwayQueryClient.getAllRewardsRecords(rewardsAddress);
  }
}
