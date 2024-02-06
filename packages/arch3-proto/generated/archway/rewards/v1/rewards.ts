/* eslint-disable */
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the module parameters. */
export interface Params {
  /**
   * inflation_rewards_ratio defines the percentage of minted inflation tokens
   * that are used for dApp rewards [0.0, 1.0]. If set to 0.0, no inflation
   * rewards are distributed.
   */
  inflationRewardsRatio: string;
  /**
   * tx_fee_rebate_ratio defines the percentage of tx fees that are used for
   * dApp rewards [0.0, 1.0]. If set to 0.0, no fee rewards are distributed.
   */
  txFeeRebateRatio: string;
  /**
   * max_withdraw_records defines the maximum number of RewardsRecord objects
   * used for the withdrawal operation.
   */
  maxWithdrawRecords: Long;
  /**
   * min_price_of_gas defines the minimum price for each single unit of gas in
   * the network. during the min consensus fee ante handler we will be taking
   * the max between min consensus fee and minimum price of gas to compute the
   * minimum tx computational fees, which are independent from contract flat
   * fees (premiums)
   */
  minPriceOfGas: DecCoin;
}
/**
 * ContractMetadata defines the contract rewards distribution options for a
 * particular contract.
 */
export interface ContractMetadata {
  /** contract_address defines the contract address (bech32 encoded). */
  contractAddress: string;
  /**
   * owner_address is the contract owner address that can modify contract reward
   * options (bech32 encoded). That could be the contract admin or the contract
   * itself. If owner_address is set to contract address, contract can modify
   * the metadata on its own using WASM bindings.
   */
  ownerAddress: string;
  /**
   * rewards_address is an address to distribute rewards to (bech32 encoded).
   * If not set (empty), rewards are not distributed for this contract.
   */
  rewardsAddress: string;
  /**
   * withdraw_to_wallet is a flag that defines if rewards should be immediately
   * withdrawn to the wallet instead of creating a rewards record to be lazily
   * withdrawn after.
   */
  withdrawToWallet: boolean;
}
/** BlockRewards defines block related rewards distribution data. */
export interface BlockRewards {
  /** height defines the block height. */
  height: Long;
  /** inflation_rewards is the rewards to be distributed. */
  inflationRewards: Coin;
  /**
   * max_gas defines the maximum gas for the block that is used to distribute
   * inflation rewards (consensus parameter).
   */
  maxGas: Long;
}
/** TxRewards defines transaction related rewards distribution data. */
export interface TxRewards {
  /**
   * tx_id is the tracking transaction ID (x/tracking is the data source for
   * this value).
   */
  txId: Long;
  /** height defines the block height. */
  height: Long;
  /** fee_rewards is the rewards to be distributed. */
  feeRewards: Coin[];
}
/**
 * RewardsRecord defines a record that is used to distribute rewards later (lazy
 * distribution). This record is being created by the x/rewards EndBlocker and
 * pruned after the rewards are distributed. An actual rewards x/bank transfer
 * might be triggered by a Tx (via CLI for example) or by a contract via WASM
 * bindings. For a contract to trigger rewards transfer, contract address must
 * be set as the rewards_address in a corresponding ContractMetadata.
 */
export interface RewardsRecord {
  /** id is the unique ID of the record. */
  id: Long;
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewardsAddress: string;
  /** rewards are the rewards to be transferred later. */
  rewards: Coin[];
  /** calculated_height defines the block height of rewards calculation event. */
  calculatedHeight: Long;
  /** calculated_time defines the block time of rewards calculation event. */
  calculatedTime: Timestamp;
}
/** FlatFee defines the flat fee for a particular contract. */
export interface FlatFee {
  /** contract_address defines the contract address (bech32 encoded). */
  contractAddress: string;
  /** flat_fee defines the minimum flat fee set by the contract_owner */
  flatFee: Coin;
}
function createBaseParams(): Params {
  return {
    inflationRewardsRatio: "",
    txFeeRebateRatio: "",
    maxWithdrawRecords: Long.UZERO,
    minPriceOfGas: DecCoin.fromPartial({})
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflationRewardsRatio !== "") {
      writer.uint32(10).string(message.inflationRewardsRatio);
    }
    if (message.txFeeRebateRatio !== "") {
      writer.uint32(18).string(message.txFeeRebateRatio);
    }
    if (!message.maxWithdrawRecords.isZero()) {
      writer.uint32(24).uint64(message.maxWithdrawRecords);
    }
    if (message.minPriceOfGas !== undefined) {
      DecCoin.encode(message.minPriceOfGas, writer.uint32(34).fork()).ldelim();
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
          message.inflationRewardsRatio = reader.string();
          break;
        case 2:
          message.txFeeRebateRatio = reader.string();
          break;
        case 3:
          message.maxWithdrawRecords = (reader.uint64() as Long);
          break;
        case 4:
          message.minPriceOfGas = DecCoin.decode(reader, reader.uint32());
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
      inflationRewardsRatio: isSet(object.inflationRewardsRatio) ? String(object.inflationRewardsRatio) : "",
      txFeeRebateRatio: isSet(object.txFeeRebateRatio) ? String(object.txFeeRebateRatio) : "",
      maxWithdrawRecords: isSet(object.maxWithdrawRecords) ? Long.fromValue(object.maxWithdrawRecords) : Long.UZERO,
      minPriceOfGas: isSet(object.minPriceOfGas) ? DecCoin.fromJSON(object.minPriceOfGas) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.inflationRewardsRatio !== undefined && (obj.inflationRewardsRatio = message.inflationRewardsRatio);
    message.txFeeRebateRatio !== undefined && (obj.txFeeRebateRatio = message.txFeeRebateRatio);
    message.maxWithdrawRecords !== undefined && (obj.maxWithdrawRecords = (message.maxWithdrawRecords || Long.UZERO).toString());
    message.minPriceOfGas !== undefined && (obj.minPriceOfGas = message.minPriceOfGas ? DecCoin.toJSON(message.minPriceOfGas) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.inflationRewardsRatio = object.inflationRewardsRatio ?? "";
    message.txFeeRebateRatio = object.txFeeRebateRatio ?? "";
    message.maxWithdrawRecords = object.maxWithdrawRecords !== undefined && object.maxWithdrawRecords !== null ? Long.fromValue(object.maxWithdrawRecords) : Long.UZERO;
    message.minPriceOfGas = object.minPriceOfGas !== undefined && object.minPriceOfGas !== null ? DecCoin.fromPartial(object.minPriceOfGas) : undefined;
    return message;
  }
};
function createBaseContractMetadata(): ContractMetadata {
  return {
    contractAddress: "",
    ownerAddress: "",
    rewardsAddress: "",
    withdrawToWallet: false
  };
}
export const ContractMetadata = {
  encode(message: ContractMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(26).string(message.rewardsAddress);
    }
    if (message.withdrawToWallet === true) {
      writer.uint32(32).bool(message.withdrawToWallet);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.rewardsAddress = reader.string();
          break;
        case 4:
          message.withdrawToWallet = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractMetadata {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      rewardsAddress: isSet(object.rewardsAddress) ? String(object.rewardsAddress) : "",
      withdrawToWallet: isSet(object.withdrawToWallet) ? Boolean(object.withdrawToWallet) : false
    };
  },
  toJSON(message: ContractMetadata): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.rewardsAddress !== undefined && (obj.rewardsAddress = message.rewardsAddress);
    message.withdrawToWallet !== undefined && (obj.withdrawToWallet = message.withdrawToWallet);
    return obj;
  },
  fromPartial(object: Partial<ContractMetadata>): ContractMetadata {
    const message = createBaseContractMetadata();
    message.contractAddress = object.contractAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.withdrawToWallet = object.withdrawToWallet ?? false;
    return message;
  }
};
function createBaseBlockRewards(): BlockRewards {
  return {
    height: Long.ZERO,
    inflationRewards: Coin.fromPartial({}),
    maxGas: Long.UZERO
  };
}
export const BlockRewards = {
  encode(message: BlockRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.inflationRewards !== undefined) {
      Coin.encode(message.inflationRewards, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(24).uint64(message.maxGas);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.inflationRewards = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxGas = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockRewards {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      inflationRewards: isSet(object.inflationRewards) ? Coin.fromJSON(object.inflationRewards) : undefined,
      maxGas: isSet(object.maxGas) ? Long.fromValue(object.maxGas) : Long.UZERO
    };
  },
  toJSON(message: BlockRewards): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.inflationRewards !== undefined && (obj.inflationRewards = message.inflationRewards ? Coin.toJSON(message.inflationRewards) : undefined);
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockRewards>): BlockRewards {
    const message = createBaseBlockRewards();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? Coin.fromPartial(object.inflationRewards) : undefined;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? Long.fromValue(object.maxGas) : Long.UZERO;
    return message;
  }
};
function createBaseTxRewards(): TxRewards {
  return {
    txId: Long.UZERO,
    height: Long.ZERO,
    feeRewards: []
  };
}
export const TxRewards = {
  encode(message: TxRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.txId.isZero()) {
      writer.uint32(8).uint64(message.txId);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    for (const v of message.feeRewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TxRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = (reader.uint64() as Long);
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        case 3:
          message.feeRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxRewards {
    return {
      txId: isSet(object.txId) ? Long.fromValue(object.txId) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      feeRewards: Array.isArray(object?.feeRewards) ? object.feeRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TxRewards): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = (message.txId || Long.UZERO).toString());
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    if (message.feeRewards) {
      obj.feeRewards = message.feeRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TxRewards>): TxRewards {
    const message = createBaseTxRewards();
    message.txId = object.txId !== undefined && object.txId !== null ? Long.fromValue(object.txId) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.feeRewards = object.feeRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseRewardsRecord(): RewardsRecord {
  return {
    id: Long.UZERO,
    rewardsAddress: "",
    rewards: [],
    calculatedHeight: Long.ZERO,
    calculatedTime: Timestamp.fromPartial({})
  };
}
export const RewardsRecord = {
  encode(message: RewardsRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(18).string(message.rewardsAddress);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.calculatedHeight.isZero()) {
      writer.uint32(32).int64(message.calculatedHeight);
    }
    if (message.calculatedTime !== undefined) {
      Timestamp.encode(message.calculatedTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RewardsRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.rewardsAddress = reader.string();
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.calculatedHeight = (reader.int64() as Long);
          break;
        case 5:
          message.calculatedTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsRecord {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      rewardsAddress: isSet(object.rewardsAddress) ? String(object.rewardsAddress) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
      calculatedHeight: isSet(object.calculatedHeight) ? Long.fromValue(object.calculatedHeight) : Long.ZERO,
      calculatedTime: isSet(object.calculatedTime) ? fromJsonTimestamp(object.calculatedTime) : undefined
    };
  },
  toJSON(message: RewardsRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.rewardsAddress !== undefined && (obj.rewardsAddress = message.rewardsAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.calculatedHeight !== undefined && (obj.calculatedHeight = (message.calculatedHeight || Long.ZERO).toString());
    message.calculatedTime !== undefined && (obj.calculatedTime = fromTimestamp(message.calculatedTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<RewardsRecord>): RewardsRecord {
    const message = createBaseRewardsRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.calculatedHeight = object.calculatedHeight !== undefined && object.calculatedHeight !== null ? Long.fromValue(object.calculatedHeight) : Long.ZERO;
    message.calculatedTime = object.calculatedTime !== undefined && object.calculatedTime !== null ? Timestamp.fromPartial(object.calculatedTime) : undefined;
    return message;
  }
};
function createBaseFlatFee(): FlatFee {
  return {
    contractAddress: "",
    flatFee: Coin.fromPartial({})
  };
}
export const FlatFee = {
  encode(message: FlatFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.flatFee !== undefined) {
      Coin.encode(message.flatFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FlatFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlatFee();
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
  fromJSON(object: any): FlatFee {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      flatFee: isSet(object.flatFee) ? Coin.fromJSON(object.flatFee) : undefined
    };
  },
  toJSON(message: FlatFee): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.flatFee !== undefined && (obj.flatFee = message.flatFee ? Coin.toJSON(message.flatFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<FlatFee>): FlatFee {
    const message = createBaseFlatFee();
    message.contractAddress = object.contractAddress ?? "";
    message.flatFee = object.flatFee !== undefined && object.flatFee !== null ? Coin.fromPartial(object.flatFee) : undefined;
    return message;
  }
};