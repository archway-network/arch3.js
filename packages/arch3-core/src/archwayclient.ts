import { archway } from '@archwayhq/arch3-proto';
import {
  QueryBlockRewardsTrackingRequest,
  QueryBlockRewardsTrackingResponse,
  QueryContractMetadataRequest,
  QueryContractMetadataResponse,
  QueryEstimateTxFeesRequest,
  QueryEstimateTxFeesResponse,
  QueryFlatFeeRequest,
  QueryFlatFeeResponse,
  QueryOutstandingRewardsRequest,
  QueryOutstandingRewardsResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryRewardsPoolRequest,
  QueryRewardsPoolResponse,
  QueryRewardsRecordsRequest,
  QueryRewardsRecordsResponse
} from '@archwayhq/arch3-proto/archway/rewards/v1beta1/query';
import { CosmWasmClient, HttpEndpoint } from '@cosmjs/cosmwasm-stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';


type RpcQueryClient = Awaited<ReturnType<typeof archway.ClientFactory.createRPCQueryClient>>;

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

  public static async getBlockRewardsTracking(request: QueryBlockRewardsTrackingRequest): Promise<QueryBlockRewardsTrackingResponse> {
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

  public static async getParams(request: QueryParamsRequest | undefined): Promise<QueryParamsResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.params(request);
  }

  public static async getPool(request: QueryRewardsPoolRequest | undefined): Promise<QueryRewardsPoolResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.rewardsPool(request);
  }

  public static async getRewardsRecords(request: QueryRewardsRecordsRequest): Promise<QueryRewardsRecordsResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.rewardsRecords(request);
  }

  public static async getFlatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.flatFee(request);
  }
}
