import { Coin } from '@cosmjs/amino';
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import {
  Tendermint37Client,
  HttpEndpoint,
  RpcClient,
  HttpBatchClient,
  HttpBatchClientOptions,
  CometClient
} from '@cosmjs/tendermint-rpc';

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

  protected constructor(cometClient: CometClient | undefined) {
    super(cometClient);
    this.archwayQueryClient = createArchwayQueryClient(cometClient);
  }

  /**
   * Creates an instance by connecting to the given Tendermint/Comet RPC endpoint.
   *
   * @param endpoint - String URL of the RPC endpoint to connect or an {@link HttpEndpoint} object.
   * @returns An {@link ArchwayClient} connected to the endpoint.
   *
   * @see Use {@link ArchwayClient.create} if you need to support a specific CometBFT version.
   */
  public static override async connect(endpoint: string | HttpEndpoint): Promise<ArchwayClient> {
    const tmClient = await Tendermint37Client.connect(endpoint);
    return ArchwayClient.create(tmClient);
  }

  /**
   * Creates an instance by connecting to the given Tendermint/Comet RPC endpoint using an {@link HttpBatchClient} to batch
   * multiple requests and reduce queries to the server.
   *
   * @param endpoint - String URL of the RPC endpoint to connect or an {@link HttpEndpoint} object.
   * @param options - Optional configuration to control how the {@link HttpBatchClient} will batch requests.
   * @returns An {@link ArchwayClient} connected to the endpoint.
   *
   * @remarks This factory method doesn't support WebSocket endpoints.
   */
  public static async connectWithBatchClient(endpoint: string | HttpEndpoint, options?: Partial<HttpBatchClientOptions>): Promise<ArchwayClient> {
    const rpcClient: RpcClient = new HttpBatchClient(endpoint, options);
    const tmClient = await Tendermint37Client.create(rpcClient);
    return ArchwayClient.create(tmClient);
  }

  /**
   * Creates an instance from a manually created Comet client.
   *
   * @param cometClient - A Comet client for a given endpoint.
   * @returns An {@link ArchwayClient} connected to the endpoint.
   */
  /* eslint-disable-next-line @typescript-eslint/require-await */
  public static override async create(cometClient: CometClient): Promise<ArchwayClient> {
    return new ArchwayClient(cometClient);
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

  /**
   * Queries all balances for all denoms that belong to this address.
   *
   * Uses the grpc queries (which iterates over the store internally), and we cannot get
   * proofs from such a method.
   *
   * @param address - Address to query balances for.
   *
   * @returns All balances for all denoms that belong to this address.
   */
  public async getAllBalances(address: string): Promise<readonly Coin[]> {
    return this.forceGetQueryClient().bank.allBalances(address);
  }
}
