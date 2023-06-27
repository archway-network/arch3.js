import { Coin, addCoins } from '@cosmjs/amino';
import {
  createWasmAminoConverters,
  HttpEndpoint,
  SigningCosmWasmClient,
  SigningCosmWasmClientOptions
} from '@cosmjs/cosmwasm-stargate';
import { wasmTypes } from '@cosmjs/cosmwasm-stargate/build/modules';
import { EncodeObject, OfflineSigner, Registry } from '@cosmjs/proto-signing';
import {
  AminoTypes,
  assertIsDeliverTxSuccess,
  createDefaultAminoConverters,
  defaultRegistryTypes,
  DeliverTxResponse,
  Event,
  GasPrice,
  logs,
  StdFee
} from '@cosmjs/stargate';
import {
  HttpBatchClient,
  HttpBatchClientOptions,
  RpcClient,
  Tendermint34Client,
  TendermintClient
} from '@cosmjs/tendermint-rpc';
import _ from 'lodash';
import Long from 'long';

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

export interface SigningArchwayClientOptions extends SigningCosmWasmClientOptions {
  /**
   * @deprecated
   * The Archway protocol has built-in mechanisms for calculating the optimal gas price based on network
   * usage and contract premiums. Specifying a gasPrice can cause unintended behaviour when calculating tx fees.
   */
  readonly gasPrice?: GasPrice;

  /**
   * Default adjustment factor to be multiplied against the estimate returned by the tx simulation.
   * If the gas limit is set manually in the transaction, this option is ignored.
   *
   * @default 1.3
   */
  readonly gasAdjustment?: number;
}

const defaultGasAdjustment = 1.3;

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

const flatFeeRequiredTypes: readonly string[] = [
  '/cosmwasm.wasm.v1.MsgExecuteContract',
  '/cosmwasm.wasm.v1.MsgMigrateContract',
];

/**
 * Extension to the {@link SigningCosmWasmClient} for transacting with Archway's modules.
 */
export class SigningArchwayClient extends SigningCosmWasmClient implements IArchwayQueryClient {
  private readonly archwayQueryClient: IArchwayQueryClient;
  private readonly gasAdjustment: number;

  protected constructor(tmClient: TendermintClient | undefined, signer: OfflineSigner, options: SigningArchwayClientOptions) {
    const {
      registry = new Registry([...defaultRegistryTypes, ...wasmTypes, ...rewardsTypes]),
      aminoTypes = new AminoTypes({
        ...createDefaultAminoConverters(),
        ...createWasmAminoConverters(),
        ...createRewardsAminoConverters(),
      }),
      gasAdjustment = defaultGasAdjustment,
    } = options;

    super(tmClient, signer, { ...options, registry, aminoTypes });

    this.archwayQueryClient = createArchwayQueryClient(tmClient);
    this.gasAdjustment = gasAdjustment;
  }

  /**
   * Creates an instance by connecting to the given Tendermint RPC endpoint.
   *
   * @param endpoint - String URL of the RPC endpoint to connect or an `HttpEndpoint` object.
   * @param signer - The transaction signer configuration.
   * @param options - Options for the signing client.
   * @returns A {@link SigningArchwayClient} connected to the endpoint.
   *
   * @see {@link SigningArchwayClient.createWithSigner} if you need Tendermint 0.37 support.
   */
  public static override async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningArchwayClientOptions = {},
  ): Promise<SigningArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return SigningArchwayClient.createWithSigner(tmClient, signer, options);
  }

  /**
   * Creates an instance by connecting to the given Tendermint RPC endpoint using an {@link HttpBatchClient} to batch
   * multiple requests and reduce queries to the server.
   *
   * @param endpoint - String URL of the RPC endpoint to connect or an {@link HttpEndpoint} object.
   * @param signer - The transaction signer configuration.
   * @param options - Options for the signing client.
   * @param batchClientOptions - Optional configuration to control how the {@link HttpBatchClient} will batch requests.
   * @returns A {@link SigningArchwayClient} connected to the endpoint.
   *
   * @remarks This factory method doesn't support WebSocket endpoints.
   *
   * @see {@link SigningArchwayClient.createWithSigner} if you need Tendermint 0.37 support.
   */
  public static async connectWithSignerAndBatchClient(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options?: SigningArchwayClientOptions,
    batchClientOptions?: Partial<HttpBatchClientOptions>
  ): Promise<SigningArchwayClient> {
    const rpcClient: RpcClient = new HttpBatchClient(endpoint, batchClientOptions);
    const tmClient = await Tendermint34Client.create(rpcClient);
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
    options: SigningArchwayClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(tmClient, signer, options);
  }

  /**
   * Creates a client in offline mode.
   *
   * @remarks
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
    options: SigningArchwayClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(undefined, signer, options);
  }

  /**
   * Updates the rewards metadata of a contract.
   *
   * @param senderAddress - Address of the message sender.
   * @param metadata - The rewards metadata.
   * @param fee - Fee to pay for the transaction. Use 'auto' or a number to calculate the fees automatically.
   *              When a number is set, it will be used as a gas adjustment multiplier for the estimated fees.
   * @param memo - Optional memo to add to the transaction.
   * @returns A {@link SetContractMetadataResult} with the contract's metadata.
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
    const metadataAttr = logs.findAttribute(response.parsedLogs, 'archway.rewards.v1.ContractMetadataSetEvent', 'metadata');
    /* eslint-disable @typescript-eslint/naming-convention */
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
   * @param fee - Fee to pay for the transaction. Use 'auto' or a number to calculate the fees automatically.
   *              When a number is set, it will be used as a gas adjustment multiplier for the estimated fees.
   * @param memo - Optional memo to add to the transaction.
   * @returns A {@link SetContractPremiumResult} with the contract's premium fee.
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
    const flatFeeAttr = logs.findAttribute(response.parsedLogs, 'archway.rewards.v1.ContractFlatFeeSetEvent', 'flat_fee');
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
   * @remarks
   * This method is useful when the contract has a large number of rewards to withdraw,
   * so they can be processed in batches.
   *
   * @param senderAddress - Address of the message sender and rewards destination.
   * @param limit - Maximum number of rewards to withdraw.
   * @param fee - Fee to pay for the transaction. Use 'auto' or a number to calculate the fees automatically.
   *              When a number is set, it will be used as a gas adjustment multiplier for the estimated fees.
   * @param memo - Optional memo to add to the transaction.
   * @returns A {@link WithdrawContractRewardsResult} with information about the rewards withdrawn.
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

    const firstLogs = response.parsedLogs.find(() => true);
    const rewardsAttr = firstLogs?.events
      .find(event => event.type === 'archway.rewards.v1.RewardsWithdrawEvent')
      ?.attributes.find(attr => attr.key === 'rewards')
      ?.value;
    const rewards: Coin[] = rewardsAttr ? JSON.parse(rewardsAttr) as Coin[] : [];

    return {
      ...buildResult(response),
      rewardsAddress,
      rewards,
    };
  }

  /**
   * Creates a transaction with the given messages, fee and memo. Then signs and broadcasts the transaction.
   *
   * When setting the fee to 'auto' or a number, the fee will be calculated automatically based on the messages,
   * the minimum price of gas (mPoG) and the minimum consensus fee. If the messages include a contract execution
   * or migration, the contract premium fee will be added to the transaction fee.
   *
   * @param signerAddress - The address that will sign transactions using this instance.
   *                        The signer must be able to sign with this address.
   * @param messages - The messages to include in the transaction. The messages types should be registered in the
   *                  {@link SigningArchwayClient.registry} when the client is instantiated.
   * @param fee - Fee to pay for the transaction. Use 'auto' or a number to calculate the fees automatically.
   *              When a number is set, it will be used as a gas adjustment multiplier for the estimated fees.
   * @param memo - Optional memo to add to the transaction.
   * @returns A {@link DeliverTxResponse} after successfully broadcasting the transaction.
   *
   * @see {@link SigningArchwayClient.calculateFee} for calculating the fees before broadcasting.
   */
  public override async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: number | StdFee | 'auto',
    memo?: string
  ): Promise<DeliverTxResponse> {
    let usedFee: StdFee;
    if (fee === 'auto' || typeof fee === 'number') {
      const gasAdjustment = typeof fee === 'number' ? fee : this.gasAdjustment;
      usedFee = await this.calculateFee(signerAddress, messages, memo, gasAdjustment);
    } else {
      usedFee = fee;
    }
    return super.signAndBroadcast(signerAddress, messages, usedFee, memo);
  }

  /**
   * Calculates tx fees by simulating the execution of a transaction with the given messages.
   * The fee will be calculated based on the  minimum price of gas (mPoG) and the minimum consensus
   * fee of the network. If the messages include a contract execution or migration, the contract
   * premium fee will be added to the calculation.
   *
   * @param signerAddress - Address used in the gas simulation that will sign transactions.
   *                        The signer must be able to sign with this address.
   * @param messages - The messages to include in the transaction for simulating the gas wanted.
   *                   The messages types should be registered in the {@link SigningArchwayClient.registry}
   *                   when the client is instantiated.
   * @param memo - Optional memo to add to the transaction.
   * @param gasAdjustment - Adjustment factor to be multiplied against the gas estimate.
   * @param granter - The granter address that is used for paying with feegrants.
   * @param payer - The fee payer address. The payer must have signed the transaction.
   * @returns A {@link StdFee} with the estimated fee for the transaction.
   *
   * @see {@link SigningCosmWasmClient.simulate} for simulating the execution of a transaction.
   * @see {@link SigningArchwayClient.getEstimateTxFees} for getting the minimum price of gas (mPoG) and the minimum
   * consensus fee of the network.
   */
  public async calculateFee(
    signerAddress: string,
    messages: readonly EncodeObject[],
    memo?: string,
    gasAdjustment: number = this.gasAdjustment,
    granter?: string,
    payer?: string,
  ): Promise<StdFee> {
    const gasEstimation = await this.simulate(signerAddress, messages, memo);
    const gas = Math.round(gasEstimation * gasAdjustment);
    const { estimatedFee } = await this.getEstimateTxFees(gas);
    const fee = await this.includeFlatFees(messages, estimatedFee);
    return {
      ...fee,
      granter,
      payer
    };
  }

  private async includeFlatFees(messages: readonly EncodeObject[], fee: StdFee): Promise<StdFee> {
    // We memoize the contract premium fee to avoid querying the same contract multiple times.
    const _getContractPremium = _.memoize((contractAddress: string) => this.getContractPremium(contractAddress));
    const flatFees = await Promise.all(
      messages
        .filter(({ typeUrl }) => flatFeeRequiredTypes.includes(typeUrl))
        .map(async ({ value }) => {
          const contractAddress = _.get(value, 'contract') as string;
          const { flatFee } = await _getContractPremium(contractAddress);
          return flatFee;
        })
    ).then(_.compact); // eslint-disable-line @typescript-eslint/unbound-method

    const amount = [...fee.amount, ...flatFees].reduce(addCoins);
    return {
      ...fee,
      amount: [amount]
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

  /**
   * Withdraws staking rewards.
   *
   * @param delegatorAddress - Address of the delegator withdrawing the staking rewards.
   * @param validatorAddress - Address of the validator in the format `archwayval` + hex encoded public key.
   * @param fee - Fee to pay for the transaction. Use 'auto' to calculate the fee automatically.
   * @param memo - Optional memo to add to the transaction.
   * @returns A {@link DeliverTxResponse} with information about the the withdraw tx.
   */
  /* istanbul ignore next */
  public override async withdrawRewards(
    delegatorAddress: string,
    validatorAddress: string,
    fee: number | StdFee | 'auto',
    memo?: string
  ): Promise<DeliverTxResponse> {
    return await super.withdrawRewards(delegatorAddress, validatorAddress, fee, memo);
  }

  /* istanbul ignore next */
  public async getBlockRewardsTracking(): Promise<BlockTracking> {
    return await this.archwayQueryClient.getBlockRewardsTracking();
  }

  /* istanbul ignore next */
  public async getContractMetadata(contractAddress: string): Promise<ContractMetadata | undefined> {
    return await this.archwayQueryClient.getContractMetadata(contractAddress);
  }

  /* istanbul ignore next */
  public async getContractPremium(contractAddress: string): Promise<ContractPremium> {
    return await this.archwayQueryClient.getContractPremium(contractAddress);
  }

  /* istanbul ignore next */
  public async getEstimateTxFees(gasLimit?: number, contractAddress?: string): Promise<EstimateTxFees> {
    return await this.archwayQueryClient.getEstimateTxFees(gasLimit, contractAddress);
  }

  /* istanbul ignore next */
  public async getOutstandingRewards(rewardsAddress: string): Promise<OutstandingRewards> {
    return await this.archwayQueryClient.getOutstandingRewards(rewardsAddress);
  }

  /* istanbul ignore next */
  public async getRewardsPool(): Promise<RewardsPool> {
    return await this.archwayQueryClient.getRewardsPool();
  }

  /* istanbul ignore next */
  public async getAllRewardsRecords(rewardsAddress: string): Promise<readonly RewardsRecord[]> {
    return await this.archwayQueryClient.getAllRewardsRecords(rewardsAddress);
  }
}
