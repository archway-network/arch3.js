/* eslint-disable */
import { DecCoin, DecCoinAmino, Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
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
  maxWithdrawRecords: bigint;
  /**
   * min_price_of_gas defines the minimum price for each single unit of gas in
   * the network. during the min consensus fee ante handler we will be taking
   * the max between min consensus fee and minimum price of gas to compute the
   * minimum tx computational fees, which are independent from contract flat
   * fees (premiums)
   */
  minPriceOfGas: DecCoin;
}
export interface ParamsProtoMsg {
  typeUrl: "/archway.rewards.v1.Params";
  value: Uint8Array;
}
/** Params defines the module parameters. */
export interface ParamsAmino {
  /**
   * inflation_rewards_ratio defines the percentage of minted inflation tokens
   * that are used for dApp rewards [0.0, 1.0]. If set to 0.0, no inflation
   * rewards are distributed.
   */
  inflation_rewards_ratio?: string;
  /**
   * tx_fee_rebate_ratio defines the percentage of tx fees that are used for
   * dApp rewards [0.0, 1.0]. If set to 0.0, no fee rewards are distributed.
   */
  tx_fee_rebate_ratio?: string;
  /**
   * max_withdraw_records defines the maximum number of RewardsRecord objects
   * used for the withdrawal operation.
   */
  max_withdraw_records?: string;
  /**
   * min_price_of_gas defines the minimum price for each single unit of gas in
   * the network. during the min consensus fee ante handler we will be taking
   * the max between min consensus fee and minimum price of gas to compute the
   * minimum tx computational fees, which are independent from contract flat
   * fees (premiums)
   */
  min_price_of_gas?: DecCoinAmino;
}
export interface ParamsAminoMsg {
  type: "/archway.rewards.v1.Params";
  value: ParamsAmino;
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
export interface ContractMetadataProtoMsg {
  typeUrl: "/archway.rewards.v1.ContractMetadata";
  value: Uint8Array;
}
/**
 * ContractMetadata defines the contract rewards distribution options for a
 * particular contract.
 */
export interface ContractMetadataAmino {
  /** contract_address defines the contract address (bech32 encoded). */
  contract_address?: string;
  /**
   * owner_address is the contract owner address that can modify contract reward
   * options (bech32 encoded). That could be the contract admin or the contract
   * itself. If owner_address is set to contract address, contract can modify
   * the metadata on its own using WASM bindings.
   */
  owner_address?: string;
  /**
   * rewards_address is an address to distribute rewards to (bech32 encoded).
   * If not set (empty), rewards are not distributed for this contract.
   */
  rewards_address?: string;
  /**
   * withdraw_to_wallet is a flag that defines if rewards should be immediately
   * withdrawn to the wallet instead of creating a rewards record to be lazily
   * withdrawn after.
   */
  withdraw_to_wallet?: boolean;
}
export interface ContractMetadataAminoMsg {
  type: "/archway.rewards.v1.ContractMetadata";
  value: ContractMetadataAmino;
}
/** BlockRewards defines block related rewards distribution data. */
export interface BlockRewards {
  /** height defines the block height. */
  height: bigint;
  /** inflation_rewards is the rewards to be distributed. */
  inflationRewards: Coin;
  /**
   * max_gas defines the maximum gas for the block that is used to distribute
   * inflation rewards (consensus parameter).
   */
  maxGas: bigint;
}
export interface BlockRewardsProtoMsg {
  typeUrl: "/archway.rewards.v1.BlockRewards";
  value: Uint8Array;
}
/** BlockRewards defines block related rewards distribution data. */
export interface BlockRewardsAmino {
  /** height defines the block height. */
  height?: string;
  /** inflation_rewards is the rewards to be distributed. */
  inflation_rewards?: CoinAmino;
  /**
   * max_gas defines the maximum gas for the block that is used to distribute
   * inflation rewards (consensus parameter).
   */
  max_gas?: string;
}
export interface BlockRewardsAminoMsg {
  type: "/archway.rewards.v1.BlockRewards";
  value: BlockRewardsAmino;
}
/** TxRewards defines transaction related rewards distribution data. */
export interface TxRewards {
  /**
   * tx_id is the tracking transaction ID (x/tracking is the data source for
   * this value).
   */
  txId: bigint;
  /** height defines the block height. */
  height: bigint;
  /** fee_rewards is the rewards to be distributed. */
  feeRewards: Coin[];
}
export interface TxRewardsProtoMsg {
  typeUrl: "/archway.rewards.v1.TxRewards";
  value: Uint8Array;
}
/** TxRewards defines transaction related rewards distribution data. */
export interface TxRewardsAmino {
  /**
   * tx_id is the tracking transaction ID (x/tracking is the data source for
   * this value).
   */
  tx_id?: string;
  /** height defines the block height. */
  height?: string;
  /** fee_rewards is the rewards to be distributed. */
  fee_rewards?: CoinAmino[];
}
export interface TxRewardsAminoMsg {
  type: "/archway.rewards.v1.TxRewards";
  value: TxRewardsAmino;
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
  id: bigint;
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewardsAddress: string;
  /** rewards are the rewards to be transferred later. */
  rewards: Coin[];
  /** calculated_height defines the block height of rewards calculation event. */
  calculatedHeight: bigint;
  /** calculated_time defines the block time of rewards calculation event. */
  calculatedTime: Timestamp;
}
export interface RewardsRecordProtoMsg {
  typeUrl: "/archway.rewards.v1.RewardsRecord";
  value: Uint8Array;
}
/**
 * RewardsRecord defines a record that is used to distribute rewards later (lazy
 * distribution). This record is being created by the x/rewards EndBlocker and
 * pruned after the rewards are distributed. An actual rewards x/bank transfer
 * might be triggered by a Tx (via CLI for example) or by a contract via WASM
 * bindings. For a contract to trigger rewards transfer, contract address must
 * be set as the rewards_address in a corresponding ContractMetadata.
 */
export interface RewardsRecordAmino {
  /** id is the unique ID of the record. */
  id?: string;
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewards_address?: string;
  /** rewards are the rewards to be transferred later. */
  rewards?: CoinAmino[];
  /** calculated_height defines the block height of rewards calculation event. */
  calculated_height?: string;
  /** calculated_time defines the block time of rewards calculation event. */
  calculated_time?: string;
}
export interface RewardsRecordAminoMsg {
  type: "/archway.rewards.v1.RewardsRecord";
  value: RewardsRecordAmino;
}
/** FlatFee defines the flat fee for a particular contract. */
export interface FlatFee {
  /** contract_address defines the contract address (bech32 encoded). */
  contractAddress: string;
  /** flat_fee defines the minimum flat fee set by the contract_owner */
  flatFee: Coin;
}
export interface FlatFeeProtoMsg {
  typeUrl: "/archway.rewards.v1.FlatFee";
  value: Uint8Array;
}
/** FlatFee defines the flat fee for a particular contract. */
export interface FlatFeeAmino {
  /** contract_address defines the contract address (bech32 encoded). */
  contract_address?: string;
  /** flat_fee defines the minimum flat fee set by the contract_owner */
  flat_fee?: CoinAmino;
}
export interface FlatFeeAminoMsg {
  type: "/archway.rewards.v1.FlatFee";
  value: FlatFeeAmino;
}
function createBaseParams(): Params {
  return {
    inflationRewardsRatio: "",
    txFeeRebateRatio: "",
    maxWithdrawRecords: BigInt(0),
    minPriceOfGas: DecCoin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/archway.rewards.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRewardsRatio !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationRewardsRatio, 18).atomics);
    }
    if (message.txFeeRebateRatio !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.txFeeRebateRatio, 18).atomics);
    }
    if (message.maxWithdrawRecords !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxWithdrawRecords);
    }
    if (message.minPriceOfGas !== undefined) {
      DecCoin.encode(message.minPriceOfGas, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRewardsRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.txFeeRebateRatio = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.maxWithdrawRecords = reader.uint64();
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
      maxWithdrawRecords: isSet(object.maxWithdrawRecords) ? BigInt(object.maxWithdrawRecords.toString()) : BigInt(0),
      minPriceOfGas: isSet(object.minPriceOfGas) ? DecCoin.fromJSON(object.minPriceOfGas) : undefined
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.inflationRewardsRatio !== undefined && (obj.inflationRewardsRatio = message.inflationRewardsRatio);
    message.txFeeRebateRatio !== undefined && (obj.txFeeRebateRatio = message.txFeeRebateRatio);
    message.maxWithdrawRecords !== undefined && (obj.maxWithdrawRecords = (message.maxWithdrawRecords || BigInt(0)).toString());
    message.minPriceOfGas !== undefined && (obj.minPriceOfGas = message.minPriceOfGas ? DecCoin.toJSON(message.minPriceOfGas) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.inflationRewardsRatio = object.inflationRewardsRatio ?? "";
    message.txFeeRebateRatio = object.txFeeRebateRatio ?? "";
    message.maxWithdrawRecords = object.maxWithdrawRecords !== undefined && object.maxWithdrawRecords !== null ? BigInt(object.maxWithdrawRecords.toString()) : BigInt(0);
    message.minPriceOfGas = object.minPriceOfGas !== undefined && object.minPriceOfGas !== null ? DecCoin.fromPartial(object.minPriceOfGas) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.inflation_rewards_ratio !== undefined && object.inflation_rewards_ratio !== null) {
      message.inflationRewardsRatio = object.inflation_rewards_ratio;
    }
    if (object.tx_fee_rebate_ratio !== undefined && object.tx_fee_rebate_ratio !== null) {
      message.txFeeRebateRatio = object.tx_fee_rebate_ratio;
    }
    if (object.max_withdraw_records !== undefined && object.max_withdraw_records !== null) {
      message.maxWithdrawRecords = BigInt(object.max_withdraw_records);
    }
    if (object.min_price_of_gas !== undefined && object.min_price_of_gas !== null) {
      message.minPriceOfGas = DecCoin.fromAmino(object.min_price_of_gas);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.inflation_rewards_ratio = message.inflationRewardsRatio;
    obj.tx_fee_rebate_ratio = message.txFeeRebateRatio;
    obj.max_withdraw_records = message.maxWithdrawRecords ? message.maxWithdrawRecords.toString() : undefined;
    obj.min_price_of_gas = message.minPriceOfGas ? DecCoin.toAmino(message.minPriceOfGas) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.Params",
      value: Params.encode(message).finish()
    };
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
  typeUrl: "/archway.rewards.v1.ContractMetadata",
  encode(message: ContractMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ContractMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: ContractMetadataAmino): ContractMetadata {
    const message = createBaseContractMetadata();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.owner_address !== undefined && object.owner_address !== null) {
      message.ownerAddress = object.owner_address;
    }
    if (object.rewards_address !== undefined && object.rewards_address !== null) {
      message.rewardsAddress = object.rewards_address;
    }
    if (object.withdraw_to_wallet !== undefined && object.withdraw_to_wallet !== null) {
      message.withdrawToWallet = object.withdraw_to_wallet;
    }
    return message;
  },
  toAmino(message: ContractMetadata): ContractMetadataAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.owner_address = message.ownerAddress;
    obj.rewards_address = message.rewardsAddress;
    obj.withdraw_to_wallet = message.withdrawToWallet;
    return obj;
  },
  fromAminoMsg(object: ContractMetadataAminoMsg): ContractMetadata {
    return ContractMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractMetadataProtoMsg): ContractMetadata {
    return ContractMetadata.decode(message.value);
  },
  toProto(message: ContractMetadata): Uint8Array {
    return ContractMetadata.encode(message).finish();
  },
  toProtoMsg(message: ContractMetadata): ContractMetadataProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.ContractMetadata",
      value: ContractMetadata.encode(message).finish()
    };
  }
};
function createBaseBlockRewards(): BlockRewards {
  return {
    height: BigInt(0),
    inflationRewards: Coin.fromPartial({}),
    maxGas: BigInt(0)
  };
}
export const BlockRewards = {
  typeUrl: "/archway.rewards.v1.BlockRewards",
  encode(message: BlockRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.inflationRewards !== undefined) {
      Coin.encode(message.inflationRewards, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.inflationRewards = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxGas = reader.uint64();
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
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      inflationRewards: isSet(object.inflationRewards) ? Coin.fromJSON(object.inflationRewards) : undefined,
      maxGas: isSet(object.maxGas) ? BigInt(object.maxGas.toString()) : BigInt(0)
    };
  },
  toJSON(message: BlockRewards): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.inflationRewards !== undefined && (obj.inflationRewards = message.inflationRewards ? Coin.toJSON(message.inflationRewards) : undefined);
    message.maxGas !== undefined && (obj.maxGas = (message.maxGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockRewards>): BlockRewards {
    const message = createBaseBlockRewards();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? Coin.fromPartial(object.inflationRewards) : undefined;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? BigInt(object.maxGas.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlockRewardsAmino): BlockRewards {
    const message = createBaseBlockRewards();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.inflation_rewards !== undefined && object.inflation_rewards !== null) {
      message.inflationRewards = Coin.fromAmino(object.inflation_rewards);
    }
    if (object.max_gas !== undefined && object.max_gas !== null) {
      message.maxGas = BigInt(object.max_gas);
    }
    return message;
  },
  toAmino(message: BlockRewards): BlockRewardsAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.inflation_rewards = message.inflationRewards ? Coin.toAmino(message.inflationRewards) : undefined;
    obj.max_gas = message.maxGas ? message.maxGas.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockRewardsAminoMsg): BlockRewards {
    return BlockRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockRewardsProtoMsg): BlockRewards {
    return BlockRewards.decode(message.value);
  },
  toProto(message: BlockRewards): Uint8Array {
    return BlockRewards.encode(message).finish();
  },
  toProtoMsg(message: BlockRewards): BlockRewardsProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.BlockRewards",
      value: BlockRewards.encode(message).finish()
    };
  }
};
function createBaseTxRewards(): TxRewards {
  return {
    txId: BigInt(0),
    height: BigInt(0),
    feeRewards: []
  };
}
export const TxRewards = {
  typeUrl: "/archway.rewards.v1.TxRewards",
  encode(message: TxRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txId !== BigInt(0)) {
      writer.uint32(8).uint64(message.txId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    for (const v of message.feeRewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
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
      txId: isSet(object.txId) ? BigInt(object.txId.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      feeRewards: Array.isArray(object?.feeRewards) ? object.feeRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: TxRewards): unknown {
    const obj: any = {};
    message.txId !== undefined && (obj.txId = (message.txId || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    if (message.feeRewards) {
      obj.feeRewards = message.feeRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<TxRewards>): TxRewards {
    const message = createBaseTxRewards();
    message.txId = object.txId !== undefined && object.txId !== null ? BigInt(object.txId.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.feeRewards = object.feeRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TxRewardsAmino): TxRewards {
    const message = createBaseTxRewards();
    if (object.tx_id !== undefined && object.tx_id !== null) {
      message.txId = BigInt(object.tx_id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    message.feeRewards = object.fee_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxRewards): TxRewardsAmino {
    const obj: any = {};
    obj.tx_id = message.txId ? message.txId.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    if (message.feeRewards) {
      obj.fee_rewards = message.feeRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxRewardsAminoMsg): TxRewards {
    return TxRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: TxRewardsProtoMsg): TxRewards {
    return TxRewards.decode(message.value);
  },
  toProto(message: TxRewards): Uint8Array {
    return TxRewards.encode(message).finish();
  },
  toProtoMsg(message: TxRewards): TxRewardsProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.TxRewards",
      value: TxRewards.encode(message).finish()
    };
  }
};
function createBaseRewardsRecord(): RewardsRecord {
  return {
    id: BigInt(0),
    rewardsAddress: "",
    rewards: [],
    calculatedHeight: BigInt(0),
    calculatedTime: Timestamp.fromPartial({})
  };
}
export const RewardsRecord = {
  typeUrl: "/archway.rewards.v1.RewardsRecord",
  encode(message: RewardsRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(18).string(message.rewardsAddress);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.calculatedHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.calculatedHeight);
    }
    if (message.calculatedTime !== undefined) {
      Timestamp.encode(message.calculatedTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.rewardsAddress = reader.string();
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.calculatedHeight = reader.int64();
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
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      rewardsAddress: isSet(object.rewardsAddress) ? String(object.rewardsAddress) : "",
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : [],
      calculatedHeight: isSet(object.calculatedHeight) ? BigInt(object.calculatedHeight.toString()) : BigInt(0),
      calculatedTime: isSet(object.calculatedTime) ? fromJsonTimestamp(object.calculatedTime) : undefined
    };
  },
  toJSON(message: RewardsRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.rewardsAddress !== undefined && (obj.rewardsAddress = message.rewardsAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.calculatedHeight !== undefined && (obj.calculatedHeight = (message.calculatedHeight || BigInt(0)).toString());
    message.calculatedTime !== undefined && (obj.calculatedTime = fromTimestamp(message.calculatedTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<RewardsRecord>): RewardsRecord {
    const message = createBaseRewardsRecord();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    message.calculatedHeight = object.calculatedHeight !== undefined && object.calculatedHeight !== null ? BigInt(object.calculatedHeight.toString()) : BigInt(0);
    message.calculatedTime = object.calculatedTime !== undefined && object.calculatedTime !== null ? Timestamp.fromPartial(object.calculatedTime) : undefined;
    return message;
  },
  fromAmino(object: RewardsRecordAmino): RewardsRecord {
    const message = createBaseRewardsRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.rewards_address !== undefined && object.rewards_address !== null) {
      message.rewardsAddress = object.rewards_address;
    }
    message.rewards = object.rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.calculated_height !== undefined && object.calculated_height !== null) {
      message.calculatedHeight = BigInt(object.calculated_height);
    }
    if (object.calculated_time !== undefined && object.calculated_time !== null) {
      message.calculatedTime = Timestamp.fromAmino(object.calculated_time);
    }
    return message;
  },
  toAmino(message: RewardsRecord): RewardsRecordAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.rewards_address = message.rewardsAddress;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    obj.calculated_height = message.calculatedHeight ? message.calculatedHeight.toString() : undefined;
    obj.calculated_time = message.calculatedTime ? Timestamp.toAmino(message.calculatedTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardsRecordAminoMsg): RewardsRecord {
    return RewardsRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: RewardsRecordProtoMsg): RewardsRecord {
    return RewardsRecord.decode(message.value);
  },
  toProto(message: RewardsRecord): Uint8Array {
    return RewardsRecord.encode(message).finish();
  },
  toProtoMsg(message: RewardsRecord): RewardsRecordProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.RewardsRecord",
      value: RewardsRecord.encode(message).finish()
    };
  }
};
function createBaseFlatFee(): FlatFee {
  return {
    contractAddress: "",
    flatFee: Coin.fromPartial({})
  };
}
export const FlatFee = {
  typeUrl: "/archway.rewards.v1.FlatFee",
  encode(message: FlatFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.flatFee !== undefined) {
      Coin.encode(message.flatFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlatFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  },
  fromAmino(object: FlatFeeAmino): FlatFee {
    const message = createBaseFlatFee();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.flat_fee !== undefined && object.flat_fee !== null) {
      message.flatFee = Coin.fromAmino(object.flat_fee);
    }
    return message;
  },
  toAmino(message: FlatFee): FlatFeeAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.flat_fee = message.flatFee ? Coin.toAmino(message.flatFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: FlatFeeAminoMsg): FlatFee {
    return FlatFee.fromAmino(object.value);
  },
  fromProtoMsg(message: FlatFeeProtoMsg): FlatFee {
    return FlatFee.decode(message.value);
  },
  toProto(message: FlatFee): Uint8Array {
    return FlatFee.encode(message).finish();
  },
  toProtoMsg(message: FlatFee): FlatFeeProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.FlatFee",
      value: FlatFee.encode(message).finish()
    };
  }
};