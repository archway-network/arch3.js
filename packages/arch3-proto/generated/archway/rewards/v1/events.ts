/* eslint-disable */
import { ContractMetadata } from "./rewards";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ContractMetadataSetEvent is emitted when the contract metadata is created or
 * updated.
 */
export interface ContractMetadataSetEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /** metadata defines the new contract metadata state. */
  metadata?: ContractMetadata;
}
/**
 * ContractRewardCalculationEvent is emitted when the contract reward is
 * calculated.
 */
export interface ContractRewardCalculationEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /**
   * gas_consumed defines the total gas consumption by all WASM operations
   * within one transaction.
   */
  gasConsumed: Long;
  /** inflation_rewards defines the inflation rewards portions of the rewards. */
  inflationRewards?: Coin;
  /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */
  feeRebateRewards: Coin[];
  /** metadata defines the contract metadata (if set). */
  metadata?: ContractMetadata;
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific
 * rewards_address are distributed. Event could be triggered by a transaction
 * (via CLI for example) or by a contract via WASM bindings.
 */
export interface RewardsWithdrawEvent {
  /** rewards_address defines the rewards address rewards are distributed to. */
  rewardAddress: string;
  /** rewards defines the total rewards being distributed. */
  rewards: Coin[];
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */
export interface MinConsensusFeeSetEvent {
  /** fee defines the updated minimum gas unit price. */
  fee?: DecCoin;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */
export interface ContractFlatFeeSetEvent {
  /**
   * contract_address defines the bech32 address of the contract for which the
   * flat fee is set
   */
  contractAddress: string;
  /**
   * flat_fee defines the amount that has been set as the minimum fee for the
   * contract
   */
  flatFee?: Coin;
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
  fromJSON(object: any): ContractMetadataSetEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      metadata: isSet(object.metadata) ? ContractMetadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: ContractMetadataSetEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractMetadata.toJSON(message.metadata) : undefined);
    return obj;
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
  fromJSON(object: any): ContractRewardCalculationEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      gasConsumed: isSet(object.gasConsumed) ? Long.fromValue(object.gasConsumed) : Long.UZERO,
      inflationRewards: isSet(object.inflationRewards) ? Coin.fromJSON(object.inflationRewards) : undefined,
      feeRebateRewards: Array.isArray(object?.feeRebateRewards) ? object.feeRebateRewards.map((e: any) => Coin.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? ContractMetadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: ContractRewardCalculationEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.gasConsumed !== undefined && (obj.gasConsumed = (message.gasConsumed || Long.UZERO).toString());
    message.inflationRewards !== undefined && (obj.inflationRewards = message.inflationRewards ? Coin.toJSON(message.inflationRewards) : undefined);
    if (message.feeRebateRewards) {
      obj.feeRebateRewards = message.feeRebateRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeRebateRewards = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractMetadata.toJSON(message.metadata) : undefined);
    return obj;
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
  fromJSON(object: any): RewardsWithdrawEvent {
    return {
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: RewardsWithdrawEvent): unknown {
    const obj: any = {};
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
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
  fromJSON(object: any): MinConsensusFeeSetEvent {
    return {
      fee: isSet(object.fee) ? DecCoin.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: MinConsensusFeeSetEvent): unknown {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
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
  fromJSON(object: any): ContractFlatFeeSetEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      flatFee: isSet(object.flatFee) ? Coin.fromJSON(object.flatFee) : undefined
    };
  },
  toJSON(message: ContractFlatFeeSetEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.flatFee !== undefined && (obj.flatFee = message.flatFee ? Coin.toJSON(message.flatFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ContractFlatFeeSetEvent>): ContractFlatFeeSetEvent {
    const message = createBaseContractFlatFeeSetEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.flatFee = object.flatFee !== undefined && object.flatFee !== null ? Coin.fromPartial(object.flatFee) : undefined;
    return message;
  }
};