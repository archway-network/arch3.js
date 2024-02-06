/* eslint-disable */
import { ContractMetadata, ContractMetadataAmino, Params, ParamsAmino } from "./rewards";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */
export interface MsgSetContractMetadata {
  /** sender_address is the msg sender address (bech32 encoded). */
  senderAddress: string;
  /**
   * metadata is the contract metadata to set / update.
   * If metadata exists, non-empty fields will be updated.
   */
  metadata: ContractMetadata;
}
export interface MsgSetContractMetadataProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgSetContractMetadata";
  value: Uint8Array;
}
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataAmino {
  /** sender_address is the msg sender address (bech32 encoded). */
  sender_address?: string;
  /**
   * metadata is the contract metadata to set / update.
   * If metadata exists, non-empty fields will be updated.
   */
  metadata?: ContractMetadataAmino;
}
export interface MsgSetContractMetadataAminoMsg {
  type: "/archway.rewards.v1.MsgSetContractMetadata";
  value: MsgSetContractMetadataAmino;
}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataResponse {}
export interface MsgSetContractMetadataResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgSetContractMetadataResponse";
  value: Uint8Array;
}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataResponseAmino {}
export interface MsgSetContractMetadataResponseAminoMsg {
  type: "/archway.rewards.v1.MsgSetContractMetadataResponse";
  value: MsgSetContractMetadataResponseAmino;
}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */
export interface MsgWithdrawRewards {
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewardsAddress: string;
  /**
   * records_limit defines the maximum number of RewardsRecord objects to
   * process. If provided limit is 0, the default limit is used.
   */
  recordsLimit?: MsgWithdrawRewards_RecordsLimit;
  /** record_ids defines specific RewardsRecord object IDs to process. */
  recordIds?: MsgWithdrawRewards_RecordIDs;
}
export interface MsgWithdrawRewardsProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgWithdrawRewards";
  value: Uint8Array;
}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsAmino {
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewards_address?: string;
  /**
   * records_limit defines the maximum number of RewardsRecord objects to
   * process. If provided limit is 0, the default limit is used.
   */
  records_limit?: MsgWithdrawRewards_RecordsLimitAmino;
  /** record_ids defines specific RewardsRecord object IDs to process. */
  record_ids?: MsgWithdrawRewards_RecordIDsAmino;
}
export interface MsgWithdrawRewardsAminoMsg {
  type: "/archway.rewards.v1.MsgWithdrawRewards";
  value: MsgWithdrawRewardsAmino;
}
export interface MsgWithdrawRewards_RecordsLimit {
  limit: bigint;
}
export interface MsgWithdrawRewards_RecordsLimitProtoMsg {
  typeUrl: "/archway.rewards.v1.RecordsLimit";
  value: Uint8Array;
}
export interface MsgWithdrawRewards_RecordsLimitAmino {
  limit?: string;
}
export interface MsgWithdrawRewards_RecordsLimitAminoMsg {
  type: "/archway.rewards.v1.RecordsLimit";
  value: MsgWithdrawRewards_RecordsLimitAmino;
}
export interface MsgWithdrawRewards_RecordIDs {
  ids: bigint[];
}
export interface MsgWithdrawRewards_RecordIDsProtoMsg {
  typeUrl: "/archway.rewards.v1.RecordIDs";
  value: Uint8Array;
}
export interface MsgWithdrawRewards_RecordIDsAmino {
  ids?: string[];
}
export interface MsgWithdrawRewards_RecordIDsAminoMsg {
  type: "/archway.rewards.v1.RecordIDs";
  value: MsgWithdrawRewards_RecordIDsAmino;
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsResponse {
  /** records_num is the number of RewardsRecord objects processed. */
  recordsNum: bigint;
  /** rewards are the total rewards transferred. */
  totalRewards: Coin[];
}
export interface MsgWithdrawRewardsResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgWithdrawRewardsResponse";
  value: Uint8Array;
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsResponseAmino {
  /** records_num is the number of RewardsRecord objects processed. */
  records_num?: string;
  /** rewards are the total rewards transferred. */
  total_rewards?: CoinAmino[];
}
export interface MsgWithdrawRewardsResponseAminoMsg {
  type: "/archway.rewards.v1.MsgWithdrawRewardsResponse";
  value: MsgWithdrawRewardsResponseAmino;
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */
export interface MsgSetFlatFee {
  /** sender_address is the msg sender address (bech32 encoded). */
  senderAddress: string;
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner */
  flatFeeAmount: Coin;
}
export interface MsgSetFlatFeeProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgSetFlatFee";
  value: Uint8Array;
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */
export interface MsgSetFlatFeeAmino {
  /** sender_address is the msg sender address (bech32 encoded). */
  sender_address?: string;
  /** contract_address is the contract address (bech32 encoded). */
  contract_address?: string;
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner */
  flat_fee_amount?: CoinAmino;
}
export interface MsgSetFlatFeeAminoMsg {
  type: "/archway.rewards.v1.MsgSetFlatFee";
  value: MsgSetFlatFeeAmino;
}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */
export interface MsgSetFlatFeeResponse {}
export interface MsgSetFlatFeeResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgSetFlatFeeResponse";
  value: Uint8Array;
}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */
export interface MsgSetFlatFeeResponseAmino {}
export interface MsgSetFlatFeeResponseAminoMsg {
  type: "/archway.rewards.v1.MsgSetFlatFeeResponse";
  value: MsgSetFlatFeeResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/rewards parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * 
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /**
   * params defines the x/rewards parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/archway.rewards.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/archway.rewards.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/archway.rewards.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgSetContractMetadata(): MsgSetContractMetadata {
  return {
    senderAddress: "",
    metadata: ContractMetadata.fromPartial({})
  };
}
export const MsgSetContractMetadata = {
  typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
  encode(message: MsgSetContractMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContractMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
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
  fromJSON(object: any): MsgSetContractMetadata {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      metadata: isSet(object.metadata) ? ContractMetadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: MsgSetContractMetadata): unknown {
    const obj: any = {};
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetContractMetadata>): MsgSetContractMetadata {
    const message = createBaseMsgSetContractMetadata();
    message.senderAddress = object.senderAddress ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromAmino(object: MsgSetContractMetadataAmino): MsgSetContractMetadata {
    const message = createBaseMsgSetContractMetadata();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: MsgSetContractMetadata): MsgSetContractMetadataAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.metadata = message.metadata ? ContractMetadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetContractMetadataAminoMsg): MsgSetContractMetadata {
    return MsgSetContractMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContractMetadataProtoMsg): MsgSetContractMetadata {
    return MsgSetContractMetadata.decode(message.value);
  },
  toProto(message: MsgSetContractMetadata): Uint8Array {
    return MsgSetContractMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContractMetadata): MsgSetContractMetadataProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
      value: MsgSetContractMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgSetContractMetadataResponse(): MsgSetContractMetadataResponse {
  return {};
}
export const MsgSetContractMetadataResponse = {
  typeUrl: "/archway.rewards.v1.MsgSetContractMetadataResponse",
  encode(_: MsgSetContractMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetContractMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractMetadataResponse();
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
  fromJSON(_: any): MsgSetContractMetadataResponse {
    return {};
  },
  toJSON(_: MsgSetContractMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetContractMetadataResponse>): MsgSetContractMetadataResponse {
    const message = createBaseMsgSetContractMetadataResponse();
    return message;
  },
  fromAmino(_: MsgSetContractMetadataResponseAmino): MsgSetContractMetadataResponse {
    const message = createBaseMsgSetContractMetadataResponse();
    return message;
  },
  toAmino(_: MsgSetContractMetadataResponse): MsgSetContractMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetContractMetadataResponseAminoMsg): MsgSetContractMetadataResponse {
    return MsgSetContractMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetContractMetadataResponseProtoMsg): MsgSetContractMetadataResponse {
    return MsgSetContractMetadataResponse.decode(message.value);
  },
  toProto(message: MsgSetContractMetadataResponse): Uint8Array {
    return MsgSetContractMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetContractMetadataResponse): MsgSetContractMetadataResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgSetContractMetadataResponse",
      value: MsgSetContractMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    rewardsAddress: "",
    recordsLimit: undefined,
    recordIds: undefined
  };
}
export const MsgWithdrawRewards = {
  typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
  encode(message: MsgWithdrawRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.recordsLimit !== undefined) {
      MsgWithdrawRewards_RecordsLimit.encode(message.recordsLimit, writer.uint32(18).fork()).ldelim();
    }
    if (message.recordIds !== undefined) {
      MsgWithdrawRewards_RecordIDs.encode(message.recordIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
          break;
        case 2:
          message.recordsLimit = MsgWithdrawRewards_RecordsLimit.decode(reader, reader.uint32());
          break;
        case 3:
          message.recordIds = MsgWithdrawRewards_RecordIDs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewards {
    return {
      rewardsAddress: isSet(object.rewardsAddress) ? String(object.rewardsAddress) : "",
      recordsLimit: isSet(object.recordsLimit) ? MsgWithdrawRewards_RecordsLimit.fromJSON(object.recordsLimit) : undefined,
      recordIds: isSet(object.recordIds) ? MsgWithdrawRewards_RecordIDs.fromJSON(object.recordIds) : undefined
    };
  },
  toJSON(message: MsgWithdrawRewards): unknown {
    const obj: any = {};
    message.rewardsAddress !== undefined && (obj.rewardsAddress = message.rewardsAddress);
    message.recordsLimit !== undefined && (obj.recordsLimit = message.recordsLimit ? MsgWithdrawRewards_RecordsLimit.toJSON(message.recordsLimit) : undefined);
    message.recordIds !== undefined && (obj.recordIds = message.recordIds ? MsgWithdrawRewards_RecordIDs.toJSON(message.recordIds) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.recordsLimit = object.recordsLimit !== undefined && object.recordsLimit !== null ? MsgWithdrawRewards_RecordsLimit.fromPartial(object.recordsLimit) : undefined;
    message.recordIds = object.recordIds !== undefined && object.recordIds !== null ? MsgWithdrawRewards_RecordIDs.fromPartial(object.recordIds) : undefined;
    return message;
  },
  fromAmino(object: MsgWithdrawRewardsAmino): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    if (object.rewards_address !== undefined && object.rewards_address !== null) {
      message.rewardsAddress = object.rewards_address;
    }
    if (object.records_limit !== undefined && object.records_limit !== null) {
      message.recordsLimit = MsgWithdrawRewards_RecordsLimit.fromAmino(object.records_limit);
    }
    if (object.record_ids !== undefined && object.record_ids !== null) {
      message.recordIds = MsgWithdrawRewards_RecordIDs.fromAmino(object.record_ids);
    }
    return message;
  },
  toAmino(message: MsgWithdrawRewards): MsgWithdrawRewardsAmino {
    const obj: any = {};
    obj.rewards_address = message.rewardsAddress;
    obj.records_limit = message.recordsLimit ? MsgWithdrawRewards_RecordsLimit.toAmino(message.recordsLimit) : undefined;
    obj.record_ids = message.recordIds ? MsgWithdrawRewards_RecordIDs.toAmino(message.recordIds) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsAminoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsProtoMsg): MsgWithdrawRewards {
    return MsgWithdrawRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawRewards): Uint8Array {
    return MsgWithdrawRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewards): MsgWithdrawRewardsProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
      value: MsgWithdrawRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewards_RecordsLimit(): MsgWithdrawRewards_RecordsLimit {
  return {
    limit: BigInt(0)
  };
}
export const MsgWithdrawRewards_RecordsLimit = {
  typeUrl: "/archway.rewards.v1.RecordsLimit",
  encode(message: MsgWithdrawRewards_RecordsLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.limit !== BigInt(0)) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewards_RecordsLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewards_RecordsLimit {
    return {
      limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgWithdrawRewards_RecordsLimit): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewards_RecordsLimit>): MsgWithdrawRewards_RecordsLimit {
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgWithdrawRewards_RecordsLimitAmino): MsgWithdrawRewards_RecordsLimit {
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    return message;
  },
  toAmino(message: MsgWithdrawRewards_RecordsLimit): MsgWithdrawRewards_RecordsLimitAmino {
    const obj: any = {};
    obj.limit = message.limit ? message.limit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewards_RecordsLimitAminoMsg): MsgWithdrawRewards_RecordsLimit {
    return MsgWithdrawRewards_RecordsLimit.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewards_RecordsLimitProtoMsg): MsgWithdrawRewards_RecordsLimit {
    return MsgWithdrawRewards_RecordsLimit.decode(message.value);
  },
  toProto(message: MsgWithdrawRewards_RecordsLimit): Uint8Array {
    return MsgWithdrawRewards_RecordsLimit.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewards_RecordsLimit): MsgWithdrawRewards_RecordsLimitProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.RecordsLimit",
      value: MsgWithdrawRewards_RecordsLimit.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewards_RecordIDs(): MsgWithdrawRewards_RecordIDs {
  return {
    ids: []
  };
}
export const MsgWithdrawRewards_RecordIDs = {
  typeUrl: "/archway.rewards.v1.RecordIDs",
  encode(message: MsgWithdrawRewards_RecordIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewards_RecordIDs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewards_RecordIDs {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: MsgWithdrawRewards_RecordIDs): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewards_RecordIDs>): MsgWithdrawRewards_RecordIDs {
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawRewards_RecordIDsAmino): MsgWithdrawRewards_RecordIDs {
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    message.ids = object.ids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawRewards_RecordIDs): MsgWithdrawRewards_RecordIDsAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewards_RecordIDsAminoMsg): MsgWithdrawRewards_RecordIDs {
    return MsgWithdrawRewards_RecordIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewards_RecordIDsProtoMsg): MsgWithdrawRewards_RecordIDs {
    return MsgWithdrawRewards_RecordIDs.decode(message.value);
  },
  toProto(message: MsgWithdrawRewards_RecordIDs): Uint8Array {
    return MsgWithdrawRewards_RecordIDs.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewards_RecordIDs): MsgWithdrawRewards_RecordIDsProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.RecordIDs",
      value: MsgWithdrawRewards_RecordIDs.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {
    recordsNum: BigInt(0),
    totalRewards: []
  };
}
export const MsgWithdrawRewardsResponse = {
  typeUrl: "/archway.rewards.v1.MsgWithdrawRewardsResponse",
  encode(message: MsgWithdrawRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recordsNum !== BigInt(0)) {
      writer.uint32(8).uint64(message.recordsNum);
    }
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordsNum = reader.uint64();
          break;
        case 2:
          message.totalRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewardsResponse {
    return {
      recordsNum: isSet(object.recordsNum) ? BigInt(object.recordsNum.toString()) : BigInt(0),
      totalRewards: Array.isArray(object?.totalRewards) ? object.totalRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgWithdrawRewardsResponse): unknown {
    const obj: any = {};
    message.recordsNum !== undefined && (obj.recordsNum = (message.recordsNum || BigInt(0)).toString());
    if (message.totalRewards) {
      obj.totalRewards = message.totalRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    message.recordsNum = object.recordsNum !== undefined && object.recordsNum !== null ? BigInt(object.recordsNum.toString()) : BigInt(0);
    message.totalRewards = object.totalRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgWithdrawRewardsResponseAmino): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    if (object.records_num !== undefined && object.records_num !== null) {
      message.recordsNum = BigInt(object.records_num);
    }
    message.totalRewards = object.total_rewards?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseAmino {
    const obj: any = {};
    obj.records_num = message.recordsNum ? message.recordsNum.toString() : undefined;
    if (message.totalRewards) {
      obj.total_rewards = message.totalRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawRewardsResponseAminoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawRewardsResponseProtoMsg): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawRewardsResponse): Uint8Array {
    return MsgWithdrawRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawRewardsResponse): MsgWithdrawRewardsResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgWithdrawRewardsResponse",
      value: MsgWithdrawRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetFlatFee(): MsgSetFlatFee {
  return {
    senderAddress: "",
    contractAddress: "",
    flatFeeAmount: Coin.fromPartial({})
  };
}
export const MsgSetFlatFee = {
  typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
  encode(message: MsgSetFlatFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.flatFeeAmount !== undefined) {
      Coin.encode(message.flatFeeAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFlatFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFlatFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.flatFeeAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetFlatFee {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      flatFeeAmount: isSet(object.flatFeeAmount) ? Coin.fromJSON(object.flatFeeAmount) : undefined
    };
  },
  toJSON(message: MsgSetFlatFee): unknown {
    const obj: any = {};
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.flatFeeAmount !== undefined && (obj.flatFeeAmount = message.flatFeeAmount ? Coin.toJSON(message.flatFeeAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSetFlatFee>): MsgSetFlatFee {
    const message = createBaseMsgSetFlatFee();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.flatFeeAmount = object.flatFeeAmount !== undefined && object.flatFeeAmount !== null ? Coin.fromPartial(object.flatFeeAmount) : undefined;
    return message;
  },
  fromAmino(object: MsgSetFlatFeeAmino): MsgSetFlatFee {
    const message = createBaseMsgSetFlatFee();
    if (object.sender_address !== undefined && object.sender_address !== null) {
      message.senderAddress = object.sender_address;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.flat_fee_amount !== undefined && object.flat_fee_amount !== null) {
      message.flatFeeAmount = Coin.fromAmino(object.flat_fee_amount);
    }
    return message;
  },
  toAmino(message: MsgSetFlatFee): MsgSetFlatFeeAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    obj.contract_address = message.contractAddress;
    obj.flat_fee_amount = message.flatFeeAmount ? Coin.toAmino(message.flatFeeAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetFlatFeeAminoMsg): MsgSetFlatFee {
    return MsgSetFlatFee.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFlatFeeProtoMsg): MsgSetFlatFee {
    return MsgSetFlatFee.decode(message.value);
  },
  toProto(message: MsgSetFlatFee): Uint8Array {
    return MsgSetFlatFee.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFlatFee): MsgSetFlatFeeProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
      value: MsgSetFlatFee.encode(message).finish()
    };
  }
};
function createBaseMsgSetFlatFeeResponse(): MsgSetFlatFeeResponse {
  return {};
}
export const MsgSetFlatFeeResponse = {
  typeUrl: "/archway.rewards.v1.MsgSetFlatFeeResponse",
  encode(_: MsgSetFlatFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFlatFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFlatFeeResponse();
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
  fromJSON(_: any): MsgSetFlatFeeResponse {
    return {};
  },
  toJSON(_: MsgSetFlatFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetFlatFeeResponse>): MsgSetFlatFeeResponse {
    const message = createBaseMsgSetFlatFeeResponse();
    return message;
  },
  fromAmino(_: MsgSetFlatFeeResponseAmino): MsgSetFlatFeeResponse {
    const message = createBaseMsgSetFlatFeeResponse();
    return message;
  },
  toAmino(_: MsgSetFlatFeeResponse): MsgSetFlatFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetFlatFeeResponseAminoMsg): MsgSetFlatFeeResponse {
    return MsgSetFlatFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetFlatFeeResponseProtoMsg): MsgSetFlatFeeResponse {
    return MsgSetFlatFeeResponse.decode(message.value);
  },
  toProto(message: MsgSetFlatFeeResponse): Uint8Array {
    return MsgSetFlatFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetFlatFeeResponse): MsgSetFlatFeeResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgSetFlatFeeResponse",
      value: MsgSetFlatFeeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.rewards.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.rewards.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/archway.rewards.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};