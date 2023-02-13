import { ContractMetadata, ContractMetadataSDKType } from "./rewards";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** ContractMetadataSetEvent is emitted when the contract metadata is created or updated. */

export interface ContractMetadataSetEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /** metadata defines the new contract metadata state. */

  metadata?: ContractMetadata;
}
/** ContractMetadataSetEvent is emitted when the contract metadata is created or updated. */

export interface ContractMetadataSetEventSDKType {
  /** contract_address defines the contract address. */
  contract_address: string;
  /** metadata defines the new contract metadata state. */

  metadata?: ContractMetadataSDKType;
}
/** ContractRewardCalculationEvent is emitted when the contract reward is calculated. */

export interface ContractRewardCalculationEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /** gas_consumed defines the total gas consumption by all WASM operations within one transaction. */

  gasConsumed: Long;
  /** inflation_rewards defines the inflation rewards portions of the rewards. */

  inflationRewards?: Coin;
  /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */

  feeRebateRewards: Coin[];
  /** metadata defines the contract metadata (if set). */

  metadata?: ContractMetadata;
}
/** ContractRewardCalculationEvent is emitted when the contract reward is calculated. */

export interface ContractRewardCalculationEventSDKType {
  /** contract_address defines the contract address. */
  contract_address: string;
  /** gas_consumed defines the total gas consumption by all WASM operations within one transaction. */

  gas_consumed: Long;
  /** inflation_rewards defines the inflation rewards portions of the rewards. */

  inflation_rewards?: CoinSDKType;
  /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */

  fee_rebate_rewards: CoinSDKType[];
  /** metadata defines the contract metadata (if set). */

  metadata?: ContractMetadataSDKType;
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific rewards_address are distributed.
 * Event could be triggered by a transaction (via CLI for example) or by a contract via WASM bindings.
 */

export interface RewardsWithdrawEvent {
  /** rewards_address defines the rewards address rewards are distributed to. */
  rewardAddress: string;
  /** rewards defines the total rewards being distributed. */

  rewards: Coin[];
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific rewards_address are distributed.
 * Event could be triggered by a transaction (via CLI for example) or by a contract via WASM bindings.
 */

export interface RewardsWithdrawEventSDKType {
  /** rewards_address defines the rewards address rewards are distributed to. */
  reward_address: string;
  /** rewards defines the total rewards being distributed. */

  rewards: CoinSDKType[];
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */

export interface MinConsensusFeeSetEvent {
  /** fee defines the updated minimum gas unit price. */
  fee?: DecCoin;
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */

export interface MinConsensusFeeSetEventSDKType {
  /** fee defines the updated minimum gas unit price. */
  fee?: DecCoinSDKType;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */

export interface ContractFlatFeeSetEvent {
  /** contract_address defines the bech32 address of the contract for which the flat fee is set */
  contractAddress: string;
  /** flat_fee defines the amount that has been set as the minimum fee for the contract */

  flatFee?: Coin;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */

export interface ContractFlatFeeSetEventSDKType {
  /** contract_address defines the bech32 address of the contract for which the flat fee is set */
  contract_address: string;
  /** flat_fee defines the amount that has been set as the minimum fee for the contract */

  flat_fee?: CoinSDKType;
}

function createBaseContractMetadataSetEvent(): ContractMetadataSetEvent {
  return {
    contractAddress: "",
    metadata: undefined
  };
}

export const ContractMetadataSetEvent = {
  encode(message: ContractMetadataSetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractMetadataSetEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMetadataSetEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.metadata = ContractMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<ContractMetadataSetEvent>): ContractMetadataSetEvent {
    const message = createBaseContractMetadataSetEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseContractRewardCalculationEvent(): ContractRewardCalculationEvent {
  return {
    contractAddress: "",
    gasConsumed: Long.UZERO,
    inflationRewards: undefined,
    feeRebateRewards: [],
    metadata: undefined
  };
}

export const ContractRewardCalculationEvent = {
  encode(message: ContractRewardCalculationEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (!message.gasConsumed.isZero()) {
      writer.uint32(16).uint64(message.gasConsumed);
    }

    if (message.inflationRewards !== undefined) {
      Coin.encode(message.inflationRewards, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.feeRebateRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractRewardCalculationEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRewardCalculationEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.gasConsumed = (reader.uint64() as Long);
          break;

        case 3:
          message.inflationRewards = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.feeRebateRewards.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.metadata = ContractMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<ContractRewardCalculationEvent>): ContractRewardCalculationEvent {
    const message = createBaseContractRewardCalculationEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.gasConsumed = object.gasConsumed !== undefined && object.gasConsumed !== null ? Long.fromValue(object.gasConsumed) : Long.UZERO;
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? Coin.fromPartial(object.inflationRewards) : undefined;
    message.feeRebateRewards = object.feeRebateRewards?.map(e => Coin.fromPartial(e)) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseRewardsWithdrawEvent(): RewardsWithdrawEvent {
  return {
    rewardAddress: "",
    rewards: []
  };
}

export const RewardsWithdrawEvent = {
  encode(message: RewardsWithdrawEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardAddress !== "") {
      writer.uint32(10).string(message.rewardAddress);
    }

    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsWithdrawEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsWithdrawEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardAddress = reader.string();
          break;

        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<RewardsWithdrawEvent>): RewardsWithdrawEvent {
    const message = createBaseRewardsWithdrawEvent();
    message.rewardAddress = object.rewardAddress ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMinConsensusFeeSetEvent(): MinConsensusFeeSetEvent {
  return {
    fee: undefined
  };
}

export const MinConsensusFeeSetEvent = {
  encode(message: MinConsensusFeeSetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinConsensusFeeSetEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinConsensusFeeSetEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.fee = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<MinConsensusFeeSetEvent>): MinConsensusFeeSetEvent {
    const message = createBaseMinConsensusFeeSetEvent();
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    return message;
  }

};

function createBaseContractFlatFeeSetEvent(): ContractFlatFeeSetEvent {
  return {
    contractAddress: "",
    flatFee: undefined
  };
}

export const ContractFlatFeeSetEvent = {
  encode(message: ContractFlatFeeSetEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    if (message.flatFee !== undefined) {
      Coin.encode(message.flatFee, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractFlatFeeSetEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractFlatFeeSetEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        case 2:
          message.flatFee = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<ContractFlatFeeSetEvent>): ContractFlatFeeSetEvent {
    const message = createBaseContractFlatFeeSetEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.flatFee = object.flatFee !== undefined && object.flatFee !== null ? Coin.fromPartial(object.flatFee) : undefined;
    return message;
  }

};