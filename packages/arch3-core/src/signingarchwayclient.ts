import { Long } from '@archwayhq/arch3-proto/helpers';
import {
  createWasmAminoConverters,
  HttpEndpoint,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions
} from '@cosmjs/cosmwasm-stargate';
import { wasmTypes } from '@cosmjs/cosmwasm-stargate/build/modules';
import { Coin, EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import {
  AminoTypes,
  assertIsDeliverTxSuccess,
  createDefaultAminoConverters,
  defaultRegistryTypes,
  DeliverTxResponse,
  Event,
  logs,
  StdFee
} from '@cosmjs/stargate';
import { Tendermint34Client, TendermintClient } from '@cosmjs/tendermint-rpc';

import { createRewardsAminoConverters, RewardsMsgEncoder, rewardsTypes } from './modules';
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

interface DeliverTxResponseWithLogs extends DeliverTxResponse {
  readonly parsedLogs: readonly logs.Log[];
}

/**
 * A base interface for all transaction results.
 */
export interface TxResult {
  /** Block height in which the transaction is included. */
  readonly height: number;
  /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex. */
  readonly transactionHash: string;
  /** Transaction logs. */
  readonly logs: readonly logs.Log[];
  /** Transaction events. */
  readonly events: readonly Event[];
  /** Amount of gas sent with the transaction. */
  readonly gasWanted: number;
  /** Amount of gas consumed by the transaction. */
  readonly gasUsed: number;
}

/**
 * The result of a {@link SigningArchwayClient.setContractMetadata} transaction.
 */
export interface SetContractMetadataResult extends TxResult {
  /** Contract rewards distribution options for a particular contract. */
  readonly metadata: ContractMetadata;
}

/**
 * The result of a {@link SigningArchwayClient.setContractPremium} transaction.
 */
export interface SetContractPremiumResult extends TxResult {
  /** Contract premium fee for a particular contract. */
  readonly premium: ContractPremium;
}

/**
 * The result of a {@link SigningArchwayClient.withdrawContractRewards} transaction.
 */
export interface WithdrawContractRewardsResult extends TxResult {
  /** Address receiving the rewards. */
  rewardsAddress: string;
  /** Total rewards withdrawn. */
  rewards: Coin[];
}

function buildResult(response: DeliverTxResponseWithLogs): TxResult {
  const { height, transactionHash, gasWanted, gasUsed, events, parsedLogs } = response;
  return {
    logs: parsedLogs,
    height,
    transactionHash,
    events,
    gasWanted,
    gasUsed,
  };
}

/**
 * Extension to the {@link SigningCosmWasmClient} for transacting with Archway's modules.
 */
export class SigningArchwayClient extends SigningCosmWasmClient implements IArchwayQueryClient {
  private readonly archwayQueryClient: IArchwayQueryClient;

  protected constructor(tmClient: TendermintClient | undefined, signer: OfflineSigner, options: SigningCosmWasmClientOptions) {
    const {
      registry = new Registry([...defaultRegistryTypes, ...wasmTypes, ...rewardsTypes]),
      aminoTypes = new AminoTypes({
        ...createDefaultAminoConverters(),
        ...createWasmAminoConverters(),
        ...createRewardsAminoConverters(),
      }),
    } = options;
    super(tmClient, signer, { ...options, registry, aminoTypes });
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
   * @see {@link SigningCosmWasmClient.createWithSigner} if you need Tendermint 0.37 support.
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
  /* eslint-disable-next-line @typescript-eslint/require-await */
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
  /* eslint-disable-next-line @typescript-eslint/require-await */
  public static override async offline(
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(undefined, signer, options);
  }

  /**
   * Updates the rewards metadata of a contract.
   *
   * @param senderAddress - Address of the message sender.
   * @param metadata - The rewards metadata.
   * @param fee - Fee to pay for the transaction. Use 'auto' to calculate the fee automatically.
   * @param memo - Optional memo to add to the transaction.
   * @returns A transaction result with the contract's metadata.
   * @throws Error if the transaction fails.
   *
   * @see {@link SigningArchwayClient.withdrawContractRewards} for details on how to withdraw rewards.
   * @see Check the [Archway Bindings](https://github.com/archway-network/archway-bindings) repository
   * for more information on how to withdraw rewards from a contract.
   */
  public async setContractMetadata(
    senderAddress: string,
    metadata: ContractMetadata,
    fee: StdFee | 'auto' | number,
    memo?: string,
  ): Promise<SetContractMetadataResult> {
    const message = RewardsMsgEncoder.setContractMetadata({
      senderAddress,
      metadata: {
        contractAddress: metadata.contractAddress,
        ownerAddress: metadata.ownerAddress ?? '',
        rewardsAddress: metadata.rewardsAddress ?? '',
      }
    });
    const response = await this.assertSignAndBroadcast(senderAddress, [message], fee, memo);
    const metadataAttr = logs.findAttribute(response.parsedLogs, 'archway.rewards.v1beta1.ContractMetadataSetEvent', 'metadata');
    /* eslint-disable camelcase, @typescript-eslint/naming-convention */
    const contractMetadata = JSON.parse(metadataAttr.value) as {
      contract_address: string,
      owner_address?: string,
      rewards_address?: string,
    };
    /* eslint-enable */
    return {
      ...buildResult(response),
      metadata: {
        contractAddress: contractMetadata.contract_address,
        ownerAddress: contractMetadata.owner_address,
        rewardsAddress: contractMetadata.rewards_address,
      },
    };
  }

  /**
   * Updates the contract's premium fee. Only the owner of the contract metadata can update the fee.
   *
   * @param senderAddress - Address of the message sender.
   * @param contractAddress - Contract address to set the premium fee.
   * @param flatFee - The contract premium fee. To disable the fee, set its `amount` to `0`.
   * @param fee - Fee to pay for the transaction. Use 'auto' to calculate the fee automatically.
   * @param memo - Optional memo to add to the transaction.
   * @returns A transaction result with the contract's premium fee.
   * @throws Error if the transaction fails.
   *
   * @see {@link SigningArchwayClient.withdrawContractRewards} for details on how to withdraw rewards.
   * @see Check the [Archway Bindings](https://github.com/archway-network/archway-bindings) repository
   * for more information on how to withdraw rewards from a contract.
   */
  public async setContractPremium(
    senderAddress: string,
    contractAddress: string,
    flatFee: Coin,
    fee: StdFee | 'auto' | number,
    memo?: string,
  ): Promise<SetContractPremiumResult> {
    const message = RewardsMsgEncoder.setFlatFee({
      senderAddress,
      contractAddress,
      flatFeeAmount: flatFee,
    });
    const response = await this.assertSignAndBroadcast(senderAddress, [message], fee, memo);
    const flatFeeAttr = logs.findAttribute(response.parsedLogs, 'archway.rewards.v1beta1.ContractFlatFeeSetEvent', 'flat_fee');
    return {
      ...buildResult(response),
      premium: {
        contractAddress,
        flatFee: JSON.parse(flatFeeAttr.value) as Coin,
      }
    };
  }

  /**
   * Withdraws rewards for the `senderAddress` up to the given `limit` of records to process.
   * If the limit is set to `0`, it will use the default limit from the protocol.
   * The default limit is a parameter on the rewards module and it can be updated via governance.
   *
   * This method is useful when the contract has a large number of rewards to withdraw,
   * so they can be processed in batches.
   *
   * @param senderAddress - Address of the message sender and rewards destination.
   * @param limit - Maximum number of rewards to withdraw.
   * @param fee - Fee to pay for the transaction. Use 'auto' to calculate the fee automatically.
   * @param memo - Optional memo to add to the transaction.
   * @returns A transaction result with information about the rewards withdrawn.
   * @throws Error if the transaction fails.
   *
   * @see Check the [Archway Bindings](https://github.com/archway-network/archway-bindings) repository
   * for more information on how to withdraw rewards from a contract.
   */
  public async withdrawContractRewards(
    senderAddress: string,
    limit: number,
    fee: StdFee | 'auto' | number,
    memo?: string,
  ): Promise<WithdrawContractRewardsResult> {
    const rewardsAddress = senderAddress;
    const message = RewardsMsgEncoder.withdrawRewards({
      rewardsAddress,
      recordsLimit: {
        limit: Long.fromNumber(limit),
      }
    });
    const response = await this.assertSignAndBroadcast(senderAddress, [message], fee, memo);
    const rewardsAttr = logs.findAttribute(response.parsedLogs, 'archway.rewards.v1beta1.RewardsWithdrawEvent', 'rewards');
    const rewards = JSON.parse(rewardsAttr.value) as Coin[];
    return {
      ...buildResult(response),
      rewardsAddress,
      rewards,
    };
  }

  private async assertSignAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | 'auto' | number,
    memo?: string
  ): Promise<DeliverTxResponseWithLogs> {
    const response = await this.signAndBroadcast(signerAddress, messages, fee, memo);
    assertIsDeliverTxSuccess(response);

    const parsedLogs = logs.parseRawLog(response.rawLog);

    return {
      ...response,
      parsedLogs,
    };
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
