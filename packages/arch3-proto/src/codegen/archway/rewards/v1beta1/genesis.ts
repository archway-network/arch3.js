import { Params, ParamsSDKType, ContractMetadata, ContractMetadataSDKType, BlockRewards, BlockRewardsSDKType, TxRewards, TxRewardsSDKType, RewardsRecord, RewardsRecordSDKType } from "./rewards";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the initial state of the tracking module. */

export interface GenesisState {
  /** params defines all the module parameters. */
  params?: Params;
  /** contracts_metadata defines a list of all contracts metadata. */

  contractsMetadata: ContractMetadata[];
  /** block_rewards defines a list of all block rewards objects. */

  blockRewards: BlockRewards[];
  /** tx_rewards defines a list of all tx rewards objects. */

  txRewards: TxRewards[];
  /** min_consensus_fee defines the minimum gas unit price. */

  minConsensusFee?: DecCoin;
  /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */

  rewardsRecordLastId: Long;
  /** rewards_records defines a list of all active (undistributed) rewards records. */

  rewardsRecords: RewardsRecord[];
}
/** GenesisState defines the initial state of the tracking module. */

export interface GenesisStateSDKType {
  /** params defines all the module parameters. */
  params?: ParamsSDKType;
  /** contracts_metadata defines a list of all contracts metadata. */

  contracts_metadata: ContractMetadataSDKType[];
  /** block_rewards defines a list of all block rewards objects. */

  block_rewards: BlockRewardsSDKType[];
  /** tx_rewards defines a list of all tx rewards objects. */

  tx_rewards: TxRewardsSDKType[];
  /** min_consensus_fee defines the minimum gas unit price. */

  min_consensus_fee?: DecCoinSDKType;
  /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */

  rewards_record_last_id: Long;
  /** rewards_records defines a list of all active (undistributed) rewards records. */

  rewards_records: RewardsRecordSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    contractsMetadata: [],
    blockRewards: [],
    txRewards: [],
    minConsensusFee: undefined,
    rewardsRecordLastId: Long.UZERO,
    rewardsRecords: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (!message.rewardsRecordLastId.isZero()) {
      writer.uint32(48).uint64(message.rewardsRecordLastId);
    }

    for (const v of message.rewardsRecords) {
      RewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.rewardsRecordLastId = (reader.uint64() as Long);
          break;

        case 7:
          message.rewardsRecords.push(RewardsRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.contractsMetadata = object.contractsMetadata?.map(e => ContractMetadata.fromPartial(e)) || [];
    message.blockRewards = object.blockRewards?.map(e => BlockRewards.fromPartial(e)) || [];
    message.txRewards = object.txRewards?.map(e => TxRewards.fromPartial(e)) || [];
    message.minConsensusFee = object.minConsensusFee !== undefined && object.minConsensusFee !== null ? DecCoin.fromPartial(object.minConsensusFee) : undefined;
    message.rewardsRecordLastId = object.rewardsRecordLastId !== undefined && object.rewardsRecordLastId !== null ? Long.fromValue(object.rewardsRecordLastId) : Long.UZERO;
    message.rewardsRecords = object.rewardsRecords?.map(e => RewardsRecord.fromPartial(e)) || [];
    return message;
  }

};