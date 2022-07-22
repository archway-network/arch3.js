import { DecCoin, Coin } from "./cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** Denotes which operation consumed this gas */
export enum ContractOperation {
  /** CONTRACT_OPERATION_UNSPECIFIED - Invalid or unknown operation */
  CONTRACT_OPERATION_UNSPECIFIED = 0,

  /** CONTRACT_OPERATION_INSTANTIATION - Initialization of the contract */
  CONTRACT_OPERATION_INSTANTIATION = 1,

  /** CONTRACT_OPERATION_EXECUTION - Execution of the contract */
  CONTRACT_OPERATION_EXECUTION = 2,

  /** CONTRACT_OPERATION_QUERY - Querying the contract */
  CONTRACT_OPERATION_QUERY = 3,

  /** CONTRACT_OPERATION_MIGRATE - Migrating the contract */
  CONTRACT_OPERATION_MIGRATE = 4,

  /** CONTRACT_OPERATION_IBC - IBC operation */
  CONTRACT_OPERATION_IBC = 5,

  /** CONTRACT_OPERATION_SUDO - Sudo operation */
  CONTRACT_OPERATION_SUDO = 6,

  /** CONTRACT_OPERATION_REPLY - Reply operation */
  CONTRACT_OPERATION_REPLY = 7,
  UNRECOGNIZED = -1,
}
export function contractOperationFromJSON(object: any): ContractOperation {
  switch (object) {
    case 0:
    case "CONTRACT_OPERATION_UNSPECIFIED":
      return ContractOperation.CONTRACT_OPERATION_UNSPECIFIED;

    case 1:
    case "CONTRACT_OPERATION_INSTANTIATION":
      return ContractOperation.CONTRACT_OPERATION_INSTANTIATION;

    case 2:
    case "CONTRACT_OPERATION_EXECUTION":
      return ContractOperation.CONTRACT_OPERATION_EXECUTION;

    case 3:
    case "CONTRACT_OPERATION_QUERY":
      return ContractOperation.CONTRACT_OPERATION_QUERY;

    case 4:
    case "CONTRACT_OPERATION_MIGRATE":
      return ContractOperation.CONTRACT_OPERATION_MIGRATE;

    case 5:
    case "CONTRACT_OPERATION_IBC":
      return ContractOperation.CONTRACT_OPERATION_IBC;

    case 6:
    case "CONTRACT_OPERATION_SUDO":
      return ContractOperation.CONTRACT_OPERATION_SUDO;

    case 7:
    case "CONTRACT_OPERATION_REPLY":
      return ContractOperation.CONTRACT_OPERATION_REPLY;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractOperation.UNRECOGNIZED;
  }
}
export function contractOperationToJSON(object: ContractOperation): string {
  switch (object) {
    case ContractOperation.CONTRACT_OPERATION_UNSPECIFIED:
      return "CONTRACT_OPERATION_UNSPECIFIED";

    case ContractOperation.CONTRACT_OPERATION_INSTANTIATION:
      return "CONTRACT_OPERATION_INSTANTIATION";

    case ContractOperation.CONTRACT_OPERATION_EXECUTION:
      return "CONTRACT_OPERATION_EXECUTION";

    case ContractOperation.CONTRACT_OPERATION_QUERY:
      return "CONTRACT_OPERATION_QUERY";

    case ContractOperation.CONTRACT_OPERATION_MIGRATE:
      return "CONTRACT_OPERATION_MIGRATE";

    case ContractOperation.CONTRACT_OPERATION_IBC:
      return "CONTRACT_OPERATION_IBC";

    case ContractOperation.CONTRACT_OPERATION_SUDO:
      return "CONTRACT_OPERATION_SUDO";

    case ContractOperation.CONTRACT_OPERATION_REPLY:
      return "CONTRACT_OPERATION_REPLY";

    default:
      return "UNKNOWN";
  }
}

/** Tracking contract gas usage and total gas consumption per transaction */
export interface TransactionTracking {
  maxGasAllowed: Long;
  maxContractRewards: DecCoin[];
  contractTrackingInfos: ContractGasTracking[];
}

/** Tracking contract gas usage */
export interface ContractGasTracking {
  address: string;
  originalVmGas: Long;
  originalSdkGas: Long;
  operation: ContractOperation;
}

/** Tracking gas consumption for all tx in a particular block */
export interface BlockGasTracking {
  txTrackingInfos: TransactionTracking[];
}

/** Contract instance metadata */
export interface ContractInstanceMetadata {
  /** Developer address of the contract */
  developerAddress: string;
  rewardAddress: string;
  gasRebateToUser: boolean;

  /** Flag to indicate whether to charge premium or not */
  collectPremium: boolean;

  /** Percentage of gas consumed to be charged. */
  premiumPercentageCharged: Long;
}

/** Reward entry per beneficiary address */
export interface LeftOverRewardEntry {
  contractRewards: DecCoin[];
}

/** Event emitted when Reward is allocated */
export interface RewardDistributionEvent {
  rewardAddress: string;
  contractRewards: Coin[];
  leftoverRewards: DecCoin[];
}

/** Event emitted when contract reward is calculated */
export interface ContractRewardCalculationEvent {
  contractAddress: string;
  gasConsumed: Long;
  inflationRewards: DecCoin;
  contractRewards: DecCoin[];
  metadata: ContractInstanceMetadata;
}

/** Genesis state of the Gastracker module */
export interface GenesisState {}
export interface Params {
  gasTrackingSwitch: boolean;
  gasRebateToUserSwitch: boolean;
  contractPremiumSwitch: boolean;
  dappInflationRewardsRatio: string;
  dappTxFeeRebateRatio: string;
}

function createBaseTransactionTracking(): TransactionTracking {
  return {
    maxGasAllowed: Long.UZERO,
    maxContractRewards: [],
    contractTrackingInfos: []
  };
}

export const TransactionTracking = {
  encode(message: TransactionTracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxGasAllowed.isZero()) {
      writer.uint32(8).uint64(message.maxGasAllowed);
    }

    for (const v of message.maxContractRewards) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.contractTrackingInfos) {
      ContractGasTracking.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionTracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionTracking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.maxGasAllowed = (reader.uint64() as Long);
          break;

        case 3:
          message.maxContractRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.contractTrackingInfos.push(ContractGasTracking.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransactionTracking {
    return {
      maxGasAllowed: isSet(object.maxGasAllowed) ? Long.fromString(object.maxGasAllowed) : Long.UZERO,
      maxContractRewards: Array.isArray(object?.maxContractRewards) ? object.maxContractRewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      contractTrackingInfos: Array.isArray(object?.contractTrackingInfos) ? object.contractTrackingInfos.map((e: any) => ContractGasTracking.fromJSON(e)) : []
    };
  },

  toJSON(message: TransactionTracking): unknown {
    const obj: any = {};
    message.maxGasAllowed !== undefined && (obj.maxGasAllowed = (message.maxGasAllowed || Long.UZERO).toString());

    if (message.maxContractRewards) {
      obj.maxContractRewards = message.maxContractRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.maxContractRewards = [];
    }

    if (message.contractTrackingInfos) {
      obj.contractTrackingInfos = message.contractTrackingInfos.map(e => e ? ContractGasTracking.toJSON(e) : undefined);
    } else {
      obj.contractTrackingInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<TransactionTracking>): TransactionTracking {
    const message = createBaseTransactionTracking();
    message.maxGasAllowed = object.maxGasAllowed !== undefined && object.maxGasAllowed !== null ? Long.fromValue(object.maxGasAllowed) : Long.UZERO;
    message.maxContractRewards = object.maxContractRewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.contractTrackingInfos = object.contractTrackingInfos?.map(e => ContractGasTracking.fromPartial(e)) || [];
    return message;
  }

};

function createBaseContractGasTracking(): ContractGasTracking {
  return {
    address: "",
    originalVmGas: Long.UZERO,
    originalSdkGas: Long.UZERO,
    operation: 0
  };
}

export const ContractGasTracking = {
  encode(message: ContractGasTracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (!message.originalVmGas.isZero()) {
      writer.uint32(16).uint64(message.originalVmGas);
    }

    if (!message.originalSdkGas.isZero()) {
      writer.uint32(24).uint64(message.originalSdkGas);
    }

    if (message.operation !== 0) {
      writer.uint32(32).int32(message.operation);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractGasTracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractGasTracking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.originalVmGas = (reader.uint64() as Long);
          break;

        case 3:
          message.originalSdkGas = (reader.uint64() as Long);
          break;

        case 4:
          message.operation = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractGasTracking {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      originalVmGas: isSet(object.originalVmGas) ? Long.fromString(object.originalVmGas) : Long.UZERO,
      originalSdkGas: isSet(object.originalSdkGas) ? Long.fromString(object.originalSdkGas) : Long.UZERO,
      operation: isSet(object.operation) ? contractOperationFromJSON(object.operation) : 0
    };
  },

  toJSON(message: ContractGasTracking): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.originalVmGas !== undefined && (obj.originalVmGas = (message.originalVmGas || Long.UZERO).toString());
    message.originalSdkGas !== undefined && (obj.originalSdkGas = (message.originalSdkGas || Long.UZERO).toString());
    message.operation !== undefined && (obj.operation = contractOperationToJSON(message.operation));
    return obj;
  },

  fromPartial(object: DeepPartial<ContractGasTracking>): ContractGasTracking {
    const message = createBaseContractGasTracking();
    message.address = object.address ?? "";
    message.originalVmGas = object.originalVmGas !== undefined && object.originalVmGas !== null ? Long.fromValue(object.originalVmGas) : Long.UZERO;
    message.originalSdkGas = object.originalSdkGas !== undefined && object.originalSdkGas !== null ? Long.fromValue(object.originalSdkGas) : Long.UZERO;
    message.operation = object.operation ?? 0;
    return message;
  }

};

function createBaseBlockGasTracking(): BlockGasTracking {
  return {
    txTrackingInfos: []
  };
}

export const BlockGasTracking = {
  encode(message: BlockGasTracking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txTrackingInfos) {
      TransactionTracking.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockGasTracking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockGasTracking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txTrackingInfos.push(TransactionTracking.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BlockGasTracking {
    return {
      txTrackingInfos: Array.isArray(object?.txTrackingInfos) ? object.txTrackingInfos.map((e: any) => TransactionTracking.fromJSON(e)) : []
    };
  },

  toJSON(message: BlockGasTracking): unknown {
    const obj: any = {};

    if (message.txTrackingInfos) {
      obj.txTrackingInfos = message.txTrackingInfos.map(e => e ? TransactionTracking.toJSON(e) : undefined);
    } else {
      obj.txTrackingInfos = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<BlockGasTracking>): BlockGasTracking {
    const message = createBaseBlockGasTracking();
    message.txTrackingInfos = object.txTrackingInfos?.map(e => TransactionTracking.fromPartial(e)) || [];
    return message;
  }

};

function createBaseContractInstanceMetadata(): ContractInstanceMetadata {
  return {
    developerAddress: "",
    rewardAddress: "",
    gasRebateToUser: false,
    collectPremium: false,
    premiumPercentageCharged: Long.UZERO
  };
}

export const ContractInstanceMetadata = {
  encode(message: ContractInstanceMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.developerAddress !== "") {
      writer.uint32(10).string(message.developerAddress);
    }

    if (message.rewardAddress !== "") {
      writer.uint32(18).string(message.rewardAddress);
    }

    if (message.gasRebateToUser === true) {
      writer.uint32(24).bool(message.gasRebateToUser);
    }

    if (message.collectPremium === true) {
      writer.uint32(32).bool(message.collectPremium);
    }

    if (!message.premiumPercentageCharged.isZero()) {
      writer.uint32(40).uint64(message.premiumPercentageCharged);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInstanceMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInstanceMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.developerAddress = reader.string();
          break;

        case 2:
          message.rewardAddress = reader.string();
          break;

        case 3:
          message.gasRebateToUser = reader.bool();
          break;

        case 4:
          message.collectPremium = reader.bool();
          break;

        case 5:
          message.premiumPercentageCharged = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContractInstanceMetadata {
    return {
      developerAddress: isSet(object.developerAddress) ? String(object.developerAddress) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      gasRebateToUser: isSet(object.gasRebateToUser) ? Boolean(object.gasRebateToUser) : false,
      collectPremium: isSet(object.collectPremium) ? Boolean(object.collectPremium) : false,
      premiumPercentageCharged: isSet(object.premiumPercentageCharged) ? Long.fromString(object.premiumPercentageCharged) : Long.UZERO
    };
  },

  toJSON(message: ContractInstanceMetadata): unknown {
    const obj: any = {};
    message.developerAddress !== undefined && (obj.developerAddress = message.developerAddress);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.gasRebateToUser !== undefined && (obj.gasRebateToUser = message.gasRebateToUser);
    message.collectPremium !== undefined && (obj.collectPremium = message.collectPremium);
    message.premiumPercentageCharged !== undefined && (obj.premiumPercentageCharged = (message.premiumPercentageCharged || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ContractInstanceMetadata>): ContractInstanceMetadata {
    const message = createBaseContractInstanceMetadata();
    message.developerAddress = object.developerAddress ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.gasRebateToUser = object.gasRebateToUser ?? false;
    message.collectPremium = object.collectPremium ?? false;
    message.premiumPercentageCharged = object.premiumPercentageCharged !== undefined && object.premiumPercentageCharged !== null ? Long.fromValue(object.premiumPercentageCharged) : Long.UZERO;
    return message;
  }

};

function createBaseLeftOverRewardEntry(): LeftOverRewardEntry {
  return {
    contractRewards: []
  };
}

export const LeftOverRewardEntry = {
  encode(message: LeftOverRewardEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.contractRewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LeftOverRewardEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeftOverRewardEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LeftOverRewardEntry {
    return {
      contractRewards: Array.isArray(object?.contractRewards) ? object.contractRewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: LeftOverRewardEntry): unknown {
    const obj: any = {};

    if (message.contractRewards) {
      obj.contractRewards = message.contractRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.contractRewards = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<LeftOverRewardEntry>): LeftOverRewardEntry {
    const message = createBaseLeftOverRewardEntry();
    message.contractRewards = object.contractRewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRewardDistributionEvent(): RewardDistributionEvent {
  return {
    rewardAddress: "",
    contractRewards: [],
    leftoverRewards: []
  };
}

export const RewardDistributionEvent = {
  encode(message: RewardDistributionEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardAddress !== "") {
      writer.uint32(10).string(message.rewardAddress);
    }

    for (const v of message.contractRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.leftoverRewards) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardDistributionEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardDistributionEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewardAddress = reader.string();
          break;

        case 2:
          message.contractRewards.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.leftoverRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RewardDistributionEvent {
    return {
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      contractRewards: Array.isArray(object?.contractRewards) ? object.contractRewards.map((e: any) => Coin.fromJSON(e)) : [],
      leftoverRewards: Array.isArray(object?.leftoverRewards) ? object.leftoverRewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: RewardDistributionEvent): unknown {
    const obj: any = {};
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);

    if (message.contractRewards) {
      obj.contractRewards = message.contractRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.contractRewards = [];
    }

    if (message.leftoverRewards) {
      obj.leftoverRewards = message.leftoverRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.leftoverRewards = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RewardDistributionEvent>): RewardDistributionEvent {
    const message = createBaseRewardDistributionEvent();
    message.rewardAddress = object.rewardAddress ?? "";
    message.contractRewards = object.contractRewards?.map(e => Coin.fromPartial(e)) || [];
    message.leftoverRewards = object.leftoverRewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseContractRewardCalculationEvent(): ContractRewardCalculationEvent {
  return {
    contractAddress: "",
    gasConsumed: Long.UZERO,
    inflationRewards: undefined,
    contractRewards: [],
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
      DecCoin.encode(message.inflationRewards, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.contractRewards) {
      DecCoin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.metadata !== undefined) {
      ContractInstanceMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
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
          message.inflationRewards = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.contractRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.metadata = ContractInstanceMetadata.decode(reader, reader.uint32());
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
      gasConsumed: isSet(object.gasConsumed) ? Long.fromString(object.gasConsumed) : Long.UZERO,
      inflationRewards: isSet(object.inflationRewards) ? DecCoin.fromJSON(object.inflationRewards) : undefined,
      contractRewards: Array.isArray(object?.contractRewards) ? object.contractRewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? ContractInstanceMetadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: ContractRewardCalculationEvent): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.gasConsumed !== undefined && (obj.gasConsumed = (message.gasConsumed || Long.UZERO).toString());
    message.inflationRewards !== undefined && (obj.inflationRewards = message.inflationRewards ? DecCoin.toJSON(message.inflationRewards) : undefined);

    if (message.contractRewards) {
      obj.contractRewards = message.contractRewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.contractRewards = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractInstanceMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ContractRewardCalculationEvent>): ContractRewardCalculationEvent {
    const message = createBaseContractRewardCalculationEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.gasConsumed = object.gasConsumed !== undefined && object.gasConsumed !== null ? Long.fromValue(object.gasConsumed) : Long.UZERO;
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? DecCoin.fromPartial(object.inflationRewards) : undefined;
    message.contractRewards = object.contractRewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractInstanceMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {};
}

export const GenesisState = {
  encode(_: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): GenesisState {
    return {};
  },

  toJSON(_: GenesisState): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    return message;
  }

};

function createBaseParams(): Params {
  return {
    gasTrackingSwitch: false,
    gasRebateToUserSwitch: false,
    contractPremiumSwitch: false,
    dappInflationRewardsRatio: "",
    dappTxFeeRebateRatio: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gasTrackingSwitch === true) {
      writer.uint32(8).bool(message.gasTrackingSwitch);
    }

    if (message.gasRebateToUserSwitch === true) {
      writer.uint32(16).bool(message.gasRebateToUserSwitch);
    }

    if (message.contractPremiumSwitch === true) {
      writer.uint32(24).bool(message.contractPremiumSwitch);
    }

    if (message.dappInflationRewardsRatio !== "") {
      writer.uint32(34).string(message.dappInflationRewardsRatio);
    }

    if (message.dappTxFeeRebateRatio !== "") {
      writer.uint32(42).string(message.dappTxFeeRebateRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gasTrackingSwitch = reader.bool();
          break;

        case 2:
          message.gasRebateToUserSwitch = reader.bool();
          break;

        case 3:
          message.contractPremiumSwitch = reader.bool();
          break;

        case 4:
          message.dappInflationRewardsRatio = reader.string();
          break;

        case 5:
          message.dappTxFeeRebateRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      gasTrackingSwitch: isSet(object.gasTrackingSwitch) ? Boolean(object.gasTrackingSwitch) : false,
      gasRebateToUserSwitch: isSet(object.gasRebateToUserSwitch) ? Boolean(object.gasRebateToUserSwitch) : false,
      contractPremiumSwitch: isSet(object.contractPremiumSwitch) ? Boolean(object.contractPremiumSwitch) : false,
      dappInflationRewardsRatio: isSet(object.dappInflationRewardsRatio) ? String(object.dappInflationRewardsRatio) : "",
      dappTxFeeRebateRatio: isSet(object.dappTxFeeRebateRatio) ? String(object.dappTxFeeRebateRatio) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gasTrackingSwitch !== undefined && (obj.gasTrackingSwitch = message.gasTrackingSwitch);
    message.gasRebateToUserSwitch !== undefined && (obj.gasRebateToUserSwitch = message.gasRebateToUserSwitch);
    message.contractPremiumSwitch !== undefined && (obj.contractPremiumSwitch = message.contractPremiumSwitch);
    message.dappInflationRewardsRatio !== undefined && (obj.dappInflationRewardsRatio = message.dappInflationRewardsRatio);
    message.dappTxFeeRebateRatio !== undefined && (obj.dappTxFeeRebateRatio = message.dappTxFeeRebateRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.gasTrackingSwitch = object.gasTrackingSwitch ?? false;
    message.gasRebateToUserSwitch = object.gasRebateToUserSwitch ?? false;
    message.contractPremiumSwitch = object.contractPremiumSwitch ?? false;
    message.dappInflationRewardsRatio = object.dappInflationRewardsRatio ?? "";
    message.dappTxFeeRebateRatio = object.dappTxFeeRebateRatio ?? "";
    return message;
  }

};