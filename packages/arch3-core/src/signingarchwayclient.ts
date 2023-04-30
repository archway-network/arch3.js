import { HttpEndpoint, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from '@cosmjs/proto-signing';
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
 * Extension to the {@link SigningCosmWasmClient }.
 *
 */
export class SigningArchwayClient extends SigningCosmWasmClient implements IArchwayQueryClient {
  private readonly archwayQueryClient: IArchwayQueryClient;

  protected constructor(tmClient: TendermintClient | undefined, signer: OfflineSigner, options: SigningCosmWasmClientOptions) {
    super(tmClient, signer, options);
    this.archwayQueryClient = createArchwayQueryClient(tmClient);
  }

  /**
   * Creates an instance by connecting to the given Tendermint RPC endpoint.
   *
   * @param endpoint - String URL of the RPC endpoint to connect or an `HttpEndpoint` object.
   * @param signer - The transaction signer configuration.
   * @param options - Options for the signing client.
   * @returns A {@link SigningArchwayClient} connected to the endpoint.
   *
   * @see Use {@link SigningCosmWasmClient.createWithSigner} if you need Tendermint 0.37 support.
   */
  public static override async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return SigningArchwayClient.createWithSigner(tmClient, signer, options);
  }

  /**
   * Creates an instance from a manually created Tendermint client.
   *
   * @param tmClient - A Tendermint client for a given endpoint.
   * @param signer - The transaction signer configuration.
   * @param options - Options for the signing client.
   * @returns A {@link SigningArchwayClient} connected to the endpoint.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public static override async createWithSigner(
    tmClient: TendermintClient,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(tmClient, signer, options);
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   *
   * @param signer - the transaction signer configuration.
   * @param options - options for signing and broadcasting transactions.
   * @returns An offline {@link SigningArchwayClient}.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  public static override async offline(
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(undefined, signer, options);
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

  public async getEstimateTxFees(gasLimit: number, contractAddress?: string): Promise<EstimateTxFees> {
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
