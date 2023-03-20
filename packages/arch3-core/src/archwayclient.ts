import { archway } from '@archwayhq/arch3-proto';
import {
  QueryBlockRewardsTrackingRequest,
  QueryBlockRewardsTrackingResponse,
  QueryContractMetadataRequest,
  QueryContractMetadataResponse,
  QueryEstimateTxFeesRequest,
  QueryEstimateTxFeesResponse,
  QueryOutstandingRewardsRequest,
  QueryOutstandingRewardsResponse
} from '@archwayhq/arch3-proto/src/codegen/archway/rewards/v1beta1/query';
import { MsgSetContractMetadata, MsgSetContractMetadataResponse, MsgSetFlatFee, MsgSetFlatFeeResponse, MsgWithdrawRewards, MsgWithdrawRewardsResponse } from '@archwayhq/arch3-proto/src/codegen/archway/rewards/v1beta1/tx';
import { CosmWasmClient, HttpEndpoint, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from "@cosmjs/proto-signing";
import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';


type RpcQueryClient = Awaited<ReturnType<typeof archway.ClientFactory.createRPCQueryClient>>;
type RpcMsgClient = Awaited<ReturnType<typeof archway.ClientFactory.createRPCMsgClient>>;

/**
 * Extension to the {@link CosmWasmClient }.
 * @public
 */
export class ArchwayClient extends CosmWasmClient {
  private static rpcQueryClient: RpcQueryClient;

  protected constructor(tmClient: Tendermint34Client | undefined) {
    super(tmClient);
  }

  private static async init(rpcUrl: string): Promise<void> {
    ArchwayClient.rpcQueryClient = await archway.ClientFactory.createRPCQueryClient({
      rpcEndpoint: rpcUrl
    });
  }

  /**
   * @param endpoint - String URL of the RPC endpoint to connect or an `HttpEndpoint` object.
   * @returns An `ArchwayClient` connected to the endpoint.
   */
  public static override async connect(endpoint: string | HttpEndpoint): Promise<ArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);

    const rpcUrl = typeof endpoint === 'string' ? endpoint : (endpoint).url;

    await ArchwayClient.init(rpcUrl);
    return new ArchwayClient(tmClient);
  }

  public static async getBlockRewardsTracking(request: QueryBlockRewardsTrackingRequest | undefined): Promise<QueryBlockRewardsTrackingResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.blockRewardsTracking(request);
  }

  public static async getContractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse | undefined> {
    try {
      return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.contractMetadata(request);
    } catch (e) {
      console.log("error", e);
      return undefined;
    }
  }

  public static async getEstimateFees(request: QueryEstimateTxFeesRequest): Promise<QueryEstimateTxFeesResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.estimateTxFees(request);
  }

  public static async getOutstandingRewards(request: QueryOutstandingRewardsRequest): Promise<QueryOutstandingRewardsResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.outstandingRewards(request);
  }
}

/**
 * Extension to the {@link SigningCosmWasmClient }.
 * @public
 */
export class SigningArchwayClient extends SigningCosmWasmClient {
  private static rpcMsgClient: RpcMsgClient;

  protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningCosmWasmClientOptions) {
    super(tmClient, signer, options);
  }

  /**
   * @param tmClient - Tendermint client that will be used for the generation of the Msg Client.
   * @returns void
   */
  private static async init(tmClient: Tendermint34Client): Promise<void> {
    const client = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(client);
    SigningArchwayClient.rpcMsgClient = await archway.ClientFactory.createRPCMsgClient({ rpc });
  }

  /**
   * @param endpoint - String URL of the RPC endpoint to connect or an `HttpEndpoint` object.
   * @param signer - The transaction signer configuration.
   * @param options - Options for signing and broadcasting transactions.
   * @returns A `SigningArchwayClient` connected to the endpoint.
   */
  public static override async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    await SigningArchwayClient.init(tmClient);
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
   * @returns An offline `SigningArchwayClient`.
   */
  public static override async offline(
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(undefined, signer, options);
  }

  /**
   * @param message - Data for 'Set Contract Metadata' transaction in Rewards Module.
   * @returns The transaction response `MsgSetContractMetadataResponse`.
   */
  public async rewardsSetContractMetadata(message: MsgSetContractMetadata): Promise<MsgSetContractMetadataResponse> {
    return await SigningArchwayClient.rpcMsgClient.archway.rewards.v1beta1.setContractMetadata(
      message
    );
  }

  /**
   * @param message - Data for 'Withdraw Rewards' transaction in Rewards Module.
   * @returns The transaction response `MsgWithdrawRewardsResponse`.
   */
  public async rewardsWithdrawRewards(message: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse> {
    return await SigningArchwayClient.rpcMsgClient.archway.rewards.v1beta1.withdrawRewards(
      message
    );
  }

  /**
   * @param message - Data for 'Set Flat Fee' transaction in Rewards Module.
   * @returns The transaction response `MsgSetFlatFeeResponse`.
   */
  public async rewardsSetFlatFee(message: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse> {
    return await SigningArchwayClient.rpcMsgClient.archway.rewards.v1beta1.setFlatFee(
      message
    );
  }
}
