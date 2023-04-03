import { archway, getRpcClient } from "@archwayhq/arch3-proto";
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
  QueryRewardsRecordsResponse,
} from "@archwayhq/arch3-proto/build/codegen/archway/rewards/v1beta1/query";
import {
  MsgSetContractMetadata,
  MsgSetFlatFee,
  MsgWithdrawRewards
} from "@archwayhq/arch3-proto/build/codegen/archway/rewards/v1beta1/tx";
import {
  CosmWasmClient,
  DeliverTxResponse,
  HttpEndpoint,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions,
} from "@cosmjs/cosmwasm-stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
/* eslint-disable */
import {
  MsgExecuteContract
} from "cosmjs-types/cosmwasm/wasm/v1/tx";
import Long from "long";


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

  /**
   * Note: Contract Metadata MUST be set before it can be gotten!
   */
  public static async getContractMetadata(request: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.contractMetadata(request);
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

  /**
   * Note: Flat Fee MUST be set before it can be gotten!
   */
  public static async getFlatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse> {
    return await ArchwayClient.rpcQueryClient.archway.rewards.v1beta1.flatFee(request);
  }
}

interface MsgSetContractMetadataEncodeObject extends EncodeObject {
  readonly typeUrl: "/archway.rewards.v1beta1.MsgSetContractMetadata";
  readonly value: Partial<MsgSetContractMetadata>;
}

interface MsgWithdrawRewardsEncodeObject extends EncodeObject {
  readonly typeUrl: "/archway.rewards.v1beta1.MsgWithdrawRewards";
  readonly value: Partial<MsgWithdrawRewards>;
}

interface MsgSetFlatFeeEncodeObject extends EncodeObject {
  readonly typeUrl: "/archway.rewards.v1beta1.MsgSetFlatFee",
  readonly value: Partial<MsgSetFlatFee>
}

const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/archway.rewards.v1beta1.MsgSetContractMetadata", MsgSetContractMetadata],
  ["/archway.rewards.v1beta1.MsgWithdrawRewards", MsgWithdrawRewards],
  ["/archway.rewards.v1beta1.MsgSetFlatFee", MsgSetFlatFee],
  ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract]
];

/**
 * Extension to the {@link SigningCosmWasmClient }.
 * @public
 */
export class SigningArchwayClient extends SigningCosmWasmClient {
  private rpcMsgClient: RpcMsgClient;
  private readonly currentSigner: OfflineSigner;
  public override readonly registry: Registry;

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions
  ) {
    super(tmClient, signer, options);
    this.currentSigner = signer;

    const {
      registry = new Registry(defaultRegistryTypes)
    } = options;
    this.registry = registry;
  }

  /**
   * @param tmClient - Tendermint client that will be used for the generation of the Msg Client.
   * @returns void
   */
  private async init(endpoint: string | HttpEndpoint): Promise<void> {
    const rpc = await getRpcClient(endpoint);
    this.rpcMsgClient = await archway.ClientFactory.createRPCMsgClient({ rpc });
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
    options: SigningCosmWasmClientOptions = {}
  ): Promise<SigningArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    const signingClient = new SigningArchwayClient(tmClient, signer, options);
    await signingClient.init(endpoint);

    return signingClient;
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
    options: SigningCosmWasmClientOptions = {}
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(undefined, signer, options);
  }

  /**
   * Updates the rewards metadata of a contract.
   *
   * @param senderAddress - Address of the message sender.
   * @param contractAddress - Address of the deployed contract for which rewards metadata will be updated.
   * @param ownerAddress - Optional. Address that will be the contract owner. Defaults to senderAddress.
   * @param rewardsAddress - Optional. Address that will receive the rewards. Defaults to ownerAddress, or to senderAddress.
   * @returns The transaction response DeliverTxResponse
   */
  public async setContractRewardsMetadata(
    senderAddress: string,
    contractAddress: string,
    ownerAddress?: string,
    rewardsAddress?: string
  ): Promise<DeliverTxResponse> {
    const signerAddr = (await this.currentSigner.getAccounts())[0];

    const message: MsgSetContractMetadataEncodeObject = {
      typeUrl: "/archway.rewards.v1beta1.MsgSetContractMetadata",
      value: {
        senderAddress,
        metadata: {
          contractAddress: contractAddress,
          ownerAddress: ownerAddress || senderAddress,
          rewardsAddress: rewardsAddress || ownerAddress || senderAddress,
        }
      },
    };
    return this.signAndBroadcast(signerAddr.address, [message], "auto");
  }

  /**
   * Withdraws the developer incentives rewards. This is NOT the users' claims rewards.
   *
   * @param rewardsAddress - Address where the rewards will be distributed to.
   * @param recordsLimit - Optional. Maximum number of RewardsRecord to be processed. Either this parameter or recordIds has to be set.
   * @param recordIds - Optional. List of specific RewardsRecord IDs to be processed. Either this parameter or recordsLimit has to be set.
   * @returns The transaction response DeliverTxResponse
   */
  public async withdrawContractRewards(
    rewardsAddress: string,
    recordsLimit: Long | number | string,
    recordIds?: Array<Long | number | string>
  ): Promise<DeliverTxResponse> {
    const signerAddr = (await this.currentSigner.getAccounts())[0];

    const message: MsgWithdrawRewardsEncodeObject = {
      typeUrl: "/archway.rewards.v1beta1.MsgWithdrawRewards",
      value: {
        rewardsAddress,
        recordsLimit: {
          limit: Long.fromValue(recordsLimit || 0),
        },
        recordIds: {
          ids: recordIds?.map(item => Long.fromValue(item)) || [],
        },
      }
    };
    return this.signAndBroadcast(signerAddr.address, [message], "auto");
  }

  /**
   * Updates the flat fee config of a contract.
   *
   * @param senderAddress - Address of the message sender.
   * @param contractAddress - Address of the deployed contract for which flat fees will be updated.
   * @param feeDenom - Denomination of fee.
   * @param feeAmount - Amount of fee.
   * @returns The transaction response DeliverTxResponse
   */
  public async setFlatFee(
    senderAddress: string,
    contractAddress: string,
    denom: string,
    amount: string
  ): Promise<DeliverTxResponse> {
    const signerAddr = (await this.currentSigner.getAccounts())[0];

    const message: MsgSetFlatFeeEncodeObject = {
      typeUrl: "/archway.rewards.v1beta1.MsgSetFlatFee",
      value: {
        senderAddress: senderAddress,
        contractAddress: contractAddress,
        flatFeeAmount: {
          denom,
          amount
        }
      }
    };
    return this.signAndBroadcast(signerAddr.address, [message], "auto");
  }
}
