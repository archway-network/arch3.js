/* eslint-disable */
import { Params, ParamsAmino, ContractMetadata, ContractMetadataAmino, BlockRewards, BlockRewardsAmino, TxRewards, TxRewardsAmino, RewardsRecord, RewardsRecordAmino, FlatFee, FlatFeeAmino } from "./rewards";
import { DecCoin, DecCoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
  /** params defines all the module parameters. */
  params: Params;
  /** contracts_metadata defines a list of all contracts metadata. */
  contractsMetadata: ContractMetadata[];
  /** block_rewards defines a list of all block rewards objects. */
  blockRewards: BlockRewards[];
  /** tx_rewards defines a list of all tx rewards objects. */
  txRewards: TxRewards[];
  /** min_consensus_fee defines the minimum gas unit price. */
  minConsensusFee: DecCoin;
  /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */
  rewardsRecordLastId: bigint;
  /**
   * rewards_records defines a list of all active (undistributed) rewards
   * records.
   */
  rewardsRecords: RewardsRecord[];
  /** flat_fees defines a list of contract flat fee. */
  flatFees: FlatFee[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/archway.rewards.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisStateAmino {
  /** params defines all the module parameters. */
  params?: ParamsAmino;
  /** contracts_metadata defines a list of all contracts metadata. */
  contracts_metadata?: ContractMetadataAmino[];
  /** block_rewards defines a list of all block rewards objects. */
  block_rewards?: BlockRewardsAmino[];
  /** tx_rewards defines a list of all tx rewards objects. */
  tx_rewards?: TxRewardsAmino[];
  /** min_consensus_fee defines the minimum gas unit price. */
  min_consensus_fee?: DecCoinAmino;
  /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */
  rewards_record_last_id?: string;
  /**
   * rewards_records defines a list of all active (undistributed) rewards
   * records.
   */
  rewards_records?: RewardsRecordAmino[];
  /** flat_fees defines a list of contract flat fee. */
  flat_fees?: FlatFeeAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/archway.rewards.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    contractsMetadata: [],
    blockRewards: [],
    txRewards: [],
    minConsensusFee: DecCoin.fromPartial({}),
    rewardsRecordLastId: BigInt(0),
    rewardsRecords: [],
    flatFees: []
  };
}
export const GenesisState = {
  typeUrl: "/archway.rewards.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractsMetadata) {
      ContractMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.blockRewards) {
      BlockRewards.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txRewards) {
      TxRewards.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.minConsensusFee !== undefined) {
      DecCoin.encode(message.minConsensusFee, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardsRecordLastId !== BigInt(0)) {
      writer.uint32(48).uint64(message.rewardsRecordLastId);
    }
    for (const v of message.rewardsRecords) {
      RewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.flatFees) {
      FlatFee.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractsMetadata.push(ContractMetadata.decode(reader, reader.uint32()));
          break;
        case 3:
          message.blockRewards.push(BlockRewards.decode(reader, reader.uint32()));
          break;
        case 4:
          message.txRewards.push(TxRewards.decode(reader, reader.uint32()));
          break;
        case 5:
          message.minConsensusFee = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.rewardsRecordLastId = reader.uint64();
          break;
        case 7:
          message.rewardsRecords.push(RewardsRecord.decode(reader, reader.uint32()));
          break;
        case 8:
          message.flatFees.push(FlatFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      contractsMetadata: Array.isArray(object?.contractsMetadata) ? object.contractsMetadata.map((e: any) => ContractMetadata.fromJSON(e)) : [],
      blockRewards: Array.isArray(object?.blockRewards) ? object.blockRewards.map((e: any) => BlockRewards.fromJSON(e)) : [],
      txRewards: Array.isArray(object?.txRewards) ? object.txRewards.map((e: any) => TxRewards.fromJSON(e)) : [],
      minConsensusFee: isSet(object.minConsensusFee) ? DecCoin.fromJSON(object.minConsensusFee) : undefined,
      rewardsRecordLastId: isSet(object.rewardsRecordLastId) ? BigInt(object.rewardsRecordLastId.toString()) : BigInt(0),
      rewardsRecords: Array.isArray(object?.rewardsRecords) ? object.rewardsRecords.map((e: any) => RewardsRecord.fromJSON(e)) : [],
      flatFees: Array.isArray(object?.flatFees) ? object.flatFees.map((e: any) => FlatFee.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.contractsMetadata) {
      obj.contractsMetadata = message.contractsMetadata.map(e => e ? ContractMetadata.toJSON(e) : undefined);
    } else {
      obj.contractsMetadata = [];
    }
    if (message.blockRewards) {
      obj.blockRewards = message.blockRewards.map(e => e ? BlockRewards.toJSON(e) : undefined);
    } else {
      obj.blockRewards = [];
    }
    if (message.txRewards) {
      obj.txRewards = message.txRewards.map(e => e ? TxRewards.toJSON(e) : undefined);
    } else {
      obj.txRewards = [];
    }
    message.minConsensusFee !== undefined && (obj.minConsensusFee = message.minConsensusFee ? DecCoin.toJSON(message.minConsensusFee) : undefined);
    message.rewardsRecordLastId !== undefined && (obj.rewardsRecordLastId = (message.rewardsRecordLastId || BigInt(0)).toString());
    if (message.rewardsRecords) {
      obj.rewardsRecords = message.rewardsRecords.map(e => e ? RewardsRecord.toJSON(e) : undefined);
    } else {
      obj.rewardsRecords = [];
    }
    if (message.flatFees) {
      obj.flatFees = message.flatFees.map(e => e ? FlatFee.toJSON(e) : undefined);
    } else {
      obj.flatFees = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.contractsMetadata = object.contractsMetadata?.map(e => ContractMetadata.fromPartial(e)) || [];
    message.blockRewards = object.blockRewards?.map(e => BlockRewards.fromPartial(e)) || [];
    message.txRewards = object.txRewards?.map(e => TxRewards.fromPartial(e)) || [];
    message.minConsensusFee = object.minConsensusFee !== undefined && object.minConsensusFee !== null ? DecCoin.fromPartial(object.minConsensusFee) : undefined;
    message.rewardsRecordLastId = object.rewardsRecordLastId !== undefined && object.rewardsRecordLastId !== null ? BigInt(object.rewardsRecordLastId.toString()) : BigInt(0);
    message.rewardsRecords = object.rewardsRecords?.map(e => RewardsRecord.fromPartial(e)) || [];
    message.flatFees = object.flatFees?.map(e => FlatFee.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.contractsMetadata = object.contracts_metadata?.map(e => ContractMetadata.fromAmino(e)) || [];
    message.blockRewards = object.block_rewards?.map(e => BlockRewards.fromAmino(e)) || [];
    message.txRewards = object.tx_rewards?.map(e => TxRewards.fromAmino(e)) || [];
    if (object.min_consensus_fee !== undefined && object.min_consensus_fee !== null) {
      message.minConsensusFee = DecCoin.fromAmino(object.min_consensus_fee);
    }
    if (object.rewards_record_last_id !== undefined && object.rewards_record_last_id !== null) {
      message.rewardsRecordLastId = BigInt(object.rewards_record_last_id);
    }
    message.rewardsRecords = object.rewards_records?.map(e => RewardsRecord.fromAmino(e)) || [];
    message.flatFees = object.flat_fees?.map(e => FlatFee.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.contractsMetadata) {
      obj.contracts_metadata = message.contractsMetadata.map(e => e ? ContractMetadata.toAmino(e) : undefined);
    } else {
      obj.contracts_metadata = message.contractsMetadata;
    }
    if (message.blockRewards) {
      obj.block_rewards = message.blockRewards.map(e => e ? BlockRewards.toAmino(e) : undefined);
    } else {
      obj.block_rewards = message.blockRewards;
    }
    if (message.txRewards) {
      obj.tx_rewards = message.txRewards.map(e => e ? TxRewards.toAmino(e) : undefined);
    } else {
      obj.tx_rewards = message.txRewards;
    }
    obj.min_consensus_fee = message.minConsensusFee ? DecCoin.toAmino(message.minConsensusFee) : undefined;
    obj.rewards_record_last_id = message.rewardsRecordLastId !== BigInt(0) ? message.rewardsRecordLastId.toString() : undefined;
    if (message.rewardsRecords) {
      obj.rewards_records = message.rewardsRecords.map(e => e ? RewardsRecord.toAmino(e) : undefined);
    } else {
      obj.rewards_records = message.rewardsRecords;
    }
    if (message.flatFees) {
      obj.flat_fees = message.flatFees.map(e => e ? FlatFee.toAmino(e) : undefined);
    } else {
      obj.flat_fees = message.flatFees;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};