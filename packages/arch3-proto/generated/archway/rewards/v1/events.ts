/* eslint-disable */
import { ContractMetadata, ContractMetadataAmino } from "./rewards";
import { Coin, CoinAmino, DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * ContractMetadataSetEvent is emitted when the contract metadata is created or
 * updated.
 */
export interface ContractMetadataSetEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /** metadata defines the new contract metadata state. */
  metadata: ContractMetadata;
}
export interface ContractMetadataSetEventProtoMsg {
  typeUrl: "/archway.rewards.v1.ContractMetadataSetEvent";
  value: Uint8Array;
}
/**
 * ContractMetadataSetEvent is emitted when the contract metadata is created or
 * updated.
 */
export interface ContractMetadataSetEventAmino {
  /** contract_address defines the contract address. */
  contract_address?: string;
  /** metadata defines the new contract metadata state. */
  metadata?: ContractMetadataAmino;
}
export interface ContractMetadataSetEventAminoMsg {
  type: "/archway.rewards.v1.ContractMetadataSetEvent";
  value: ContractMetadataSetEventAmino;
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
  gasConsumed: bigint;
  /** inflation_rewards defines the inflation rewards portions of the rewards. */
  inflationRewards: Coin;
  /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */
  feeRebateRewards: Coin[];
  /** metadata defines the contract metadata (if set). */
  metadata?: ContractMetadata;
}
export interface ContractRewardCalculationEventProtoMsg {
  typeUrl: "/archway.rewards.v1.ContractRewardCalculationEvent";
  value: Uint8Array;
}
/**
 * ContractRewardCalculationEvent is emitted when the contract reward is
 * calculated.
 */
export interface ContractRewardCalculationEventAmino {
  /** contract_address defines the contract address. */
  contract_address?: string;
  /**
   * gas_consumed defines the total gas consumption by all WASM operations
   * within one transaction.
   */
  gas_consumed?: string;
  /** inflation_rewards defines the inflation rewards portions of the rewards. */
  inflation_rewards?: CoinAmino;
  /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */
  fee_rebate_rewards?: CoinAmino[];
  /** metadata defines the contract metadata (if set). */
  metadata?: ContractMetadataAmino;
}
export interface ContractRewardCalculationEventAminoMsg {
  type: "/archway.rewards.v1.ContractRewardCalculationEvent";
  value: ContractRewardCalculationEventAmino;
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
export interface RewardsWithdrawEventProtoMsg {
  typeUrl: "/archway.rewards.v1.RewardsWithdrawEvent";
  value: Uint8Array;
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific
 * rewards_address are distributed. Event could be triggered by a transaction
 * (via CLI for example) or by a contract via WASM bindings.
 */
export interface RewardsWithdrawEventAmino {
  /** rewards_address defines the rewards address rewards are distributed to. */
  reward_address?: string;
  /** rewards defines the total rewards being distributed. */
  rewards?: CoinAmino[];
}
export interface RewardsWithdrawEventAminoMsg {
  type: "/archway.rewards.v1.RewardsWithdrawEvent";
  value: RewardsWithdrawEventAmino;
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */
export interface MinConsensusFeeSetEvent {
  /** fee defines the updated minimum gas unit price. */
  fee: DecCoin;
}
export interface MinConsensusFeeSetEventProtoMsg {
  typeUrl: "/archway.rewards.v1.MinConsensusFeeSetEvent";
  value: Uint8Array;
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */
export interface MinConsensusFeeSetEventAmino {
  /** fee defines the updated minimum gas unit price. */
  fee?: DecCoinAmino;
}
export interface MinConsensusFeeSetEventAminoMsg {
  type: "/archway.rewards.v1.MinConsensusFeeSetEvent";
  value: MinConsensusFeeSetEventAmino;
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
  flatFee: Coin;
}
export interface ContractFlatFeeSetEventProtoMsg {
  typeUrl: "/archway.rewards.v1.ContractFlatFeeSetEvent";
  value: Uint8Array;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */
export interface ContractFlatFeeSetEventAmino {
  /**
   * contract_address defines the bech32 address of the contract for which the
   * flat fee is set
   */
  contract_address?: string;
  /**
   * flat_fee defines the amount that has been set as the minimum fee for the
   * contract
   */
  flat_fee?: CoinAmino;
}
export interface ContractFlatFeeSetEventAminoMsg {
  type: "/archway.rewards.v1.ContractFlatFeeSetEvent";
  value: ContractFlatFeeSetEventAmino;
}
function createBaseContractMetadataSetEvent(): ContractMetadataSetEvent {
  return {
    contractAddress: "",
    metadata: ContractMetadata.fromPartial({})
  };
}
export const ContractMetadataSetEvent = {
  typeUrl: "/archway.rewards.v1.ContractMetadataSetEvent",
  encode(message: ContractMetadataSetEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractMetadataSetEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: ContractMetadataSetEvent): JsonSafe<ContractMetadataSetEvent> {
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
  },
  fromAmino(object: ContractMetadataSetEventAmino): ContractMetadataSetEvent {
    const message = createBaseContractMetadataSetEvent();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: ContractMetadataSetEvent): ContractMetadataSetEventAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.metadata = message.metadata ? ContractMetadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractMetadataSetEventAminoMsg): ContractMetadataSetEvent {
    return ContractMetadataSetEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractMetadataSetEventProtoMsg): ContractMetadataSetEvent {
    return ContractMetadataSetEvent.decode(message.value);
  },
  toProto(message: ContractMetadataSetEvent): Uint8Array {
    return ContractMetadataSetEvent.encode(message).finish();
  },
  toProtoMsg(message: ContractMetadataSetEvent): ContractMetadataSetEventProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.ContractMetadataSetEvent",
      value: ContractMetadataSetEvent.encode(message).finish()
    };
  }
};
function createBaseContractRewardCalculationEvent(): ContractRewardCalculationEvent {
  return {
    contractAddress: "",
    gasConsumed: BigInt(0),
    inflationRewards: Coin.fromPartial({}),
    feeRebateRewards: [],
    metadata: undefined
  };
}
export const ContractRewardCalculationEvent = {
  typeUrl: "/archway.rewards.v1.ContractRewardCalculationEvent",
  encode(message: ContractRewardCalculationEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.gasConsumed !== BigInt(0)) {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ContractRewardCalculationEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRewardCalculationEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.gasConsumed = reader.uint64();
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
      gasConsumed: isSet(object.gasConsumed) ? BigInt(object.gasConsumed.toString()) : BigInt(0),
      inflationRewards: isSet(object.inflationRewards) ? Coin.fromJSON(object.inflationRewards) : undefined,
      feeRebateRewards: Array.isArray(object?.feeRebateRewards) ? object.feeRebateRewards.map((e: any) => Coin.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? ContractMetadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: ContractRewardCalculationEvent): JsonSafe<ContractRewardCalculationEvent> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.gasConsumed !== undefined && (obj.gasConsumed = (message.gasConsumed || BigInt(0)).toString());
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
    message.gasConsumed = object.gasConsumed !== undefined && object.gasConsumed !== null ? BigInt(object.gasConsumed.toString()) : BigInt(0);
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? Coin.fromPartial(object.inflationRewards) : undefined;
    message.feeRebateRewards = object.feeRebateRewards?.map(e => Coin.fromPartial(e)) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: ContractRewardCalculationEventAmino): ContractRewardCalculationEvent {
    const message = createBaseContractRewardCalculationEvent();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.gas_consumed !== undefined && object.gas_consumed !== null) {
      message.gasConsumed = BigInt(object.gas_consumed);
    }
    if (object.inflation_rewards !== undefined && object.inflation_rewards !== null) {
      message.inflationRewards = Coin.fromAmino(object.inflation_rewards);
    }
    message.feeRebateRewards = object.fee_rebate_rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: ContractRewardCalculationEvent): ContractRewardCalculationEventAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.gas_consumed = message.gasConsumed !== BigInt(0) ? message.gasConsumed.toString() : undefined;
    obj.inflation_rewards = message.inflationRewards ? Coin.toAmino(message.inflationRewards) : undefined;
    if (message.feeRebateRewards) {
      obj.fee_rebate_rewards = message.feeRebateRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_rebate_rewards = message.feeRebateRewards;
    }
    obj.metadata = message.metadata ? ContractMetadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractRewardCalculationEventAminoMsg): ContractRewardCalculationEvent {
    return ContractRewardCalculationEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractRewardCalculationEventProtoMsg): ContractRewardCalculationEvent {
    return ContractRewardCalculationEvent.decode(message.value);
  },
  toProto(message: ContractRewardCalculationEvent): Uint8Array {
    return ContractRewardCalculationEvent.encode(message).finish();
  },
  toProtoMsg(message: ContractRewardCalculationEvent): ContractRewardCalculationEventProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.ContractRewardCalculationEvent",
      value: ContractRewardCalculationEvent.encode(message).finish()
    };
  }
};
function createBaseRewardsWithdrawEvent(): RewardsWithdrawEvent {
  return {
    rewardAddress: "",
    rewards: []
  };
}
export const RewardsWithdrawEvent = {
  typeUrl: "/archway.rewards.v1.RewardsWithdrawEvent",
  encode(message: RewardsWithdrawEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardAddress !== "") {
      writer.uint32(10).string(message.rewardAddress);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsWithdrawEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: RewardsWithdrawEvent): JsonSafe<RewardsWithdrawEvent> {
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
  },
  fromAmino(object: RewardsWithdrawEventAmino): RewardsWithdrawEvent {
    const message = createBaseRewardsWithdrawEvent();
    if (object.reward_address !== undefined && object.reward_address !== null) {
      message.rewardAddress = object.reward_address;
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: RewardsWithdrawEvent): RewardsWithdrawEventAmino {
    const obj: any = {};
    obj.reward_address = message.rewardAddress === "" ? undefined : message.rewardAddress;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = message.rewards;
    }
    return obj;
  },
  fromAminoMsg(object: RewardsWithdrawEventAminoMsg): RewardsWithdrawEvent {
    return RewardsWithdrawEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsWithdrawEventProtoMsg): RewardsWithdrawEvent {
    return RewardsWithdrawEvent.decode(message.value);
  },
  toProto(message: RewardsWithdrawEvent): Uint8Array {
    return RewardsWithdrawEvent.encode(message).finish();
  },
  toProtoMsg(message: RewardsWithdrawEvent): RewardsWithdrawEventProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.RewardsWithdrawEvent",
      value: RewardsWithdrawEvent.encode(message).finish()
    };
  }
};
function createBaseMinConsensusFeeSetEvent(): MinConsensusFeeSetEvent {
  return {
    fee: DecCoin.fromPartial({})
  };
}
export const MinConsensusFeeSetEvent = {
  typeUrl: "/archway.rewards.v1.MinConsensusFeeSetEvent",
  encode(message: MinConsensusFeeSetEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MinConsensusFeeSetEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: MinConsensusFeeSetEvent): JsonSafe<MinConsensusFeeSetEvent> {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MinConsensusFeeSetEvent>): MinConsensusFeeSetEvent {
    const message = createBaseMinConsensusFeeSetEvent();
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    return message;
  },
  fromAmino(object: MinConsensusFeeSetEventAmino): MinConsensusFeeSetEvent {
    const message = createBaseMinConsensusFeeSetEvent();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DecCoin.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: MinConsensusFeeSetEvent): MinConsensusFeeSetEventAmino {
    const obj: any = {};
    obj.fee = message.fee ? DecCoin.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MinConsensusFeeSetEventAminoMsg): MinConsensusFeeSetEvent {
    return MinConsensusFeeSetEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: MinConsensusFeeSetEventProtoMsg): MinConsensusFeeSetEvent {
    return MinConsensusFeeSetEvent.decode(message.value);
  },
  toProto(message: MinConsensusFeeSetEvent): Uint8Array {
    return MinConsensusFeeSetEvent.encode(message).finish();
  },
  toProtoMsg(message: MinConsensusFeeSetEvent): MinConsensusFeeSetEventProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MinConsensusFeeSetEvent",
      value: MinConsensusFeeSetEvent.encode(message).finish()
    };
  }
};
function createBaseContractFlatFeeSetEvent(): ContractFlatFeeSetEvent {
  return {
    contractAddress: "",
    flatFee: Coin.fromPartial({})
  };
}
export const ContractFlatFeeSetEvent = {
  typeUrl: "/archway.rewards.v1.ContractFlatFeeSetEvent",
  encode(message: ContractFlatFeeSetEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.flatFee !== undefined) {
      Coin.encode(message.flatFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractFlatFeeSetEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: ContractFlatFeeSetEvent): JsonSafe<ContractFlatFeeSetEvent> {
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
  },
  fromAmino(object: ContractFlatFeeSetEventAmino): ContractFlatFeeSetEvent {
    const message = createBaseContractFlatFeeSetEvent();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.flat_fee !== undefined && object.flat_fee !== null) {
      message.flatFee = Coin.fromAmino(object.flat_fee);
    }
    return message;
  },
  toAmino(message: ContractFlatFeeSetEvent): ContractFlatFeeSetEventAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.flat_fee = message.flatFee ? Coin.toAmino(message.flatFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ContractFlatFeeSetEventAminoMsg): ContractFlatFeeSetEvent {
    return ContractFlatFeeSetEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractFlatFeeSetEventProtoMsg): ContractFlatFeeSetEvent {
    return ContractFlatFeeSetEvent.decode(message.value);
  },
  toProto(message: ContractFlatFeeSetEvent): Uint8Array {
    return ContractFlatFeeSetEvent.encode(message).finish();
  },
  toProtoMsg(message: ContractFlatFeeSetEvent): ContractFlatFeeSetEventProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.ContractFlatFeeSetEvent",
      value: ContractFlatFeeSetEvent.encode(message).finish()
    };
  }
};