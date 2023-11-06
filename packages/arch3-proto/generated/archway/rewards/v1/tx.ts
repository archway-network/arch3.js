/* eslint-disable */
import { ContractMetadata, Params } from "./rewards";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataResponse {}
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
export interface MsgWithdrawRewards_RecordsLimit {
  limit: Long;
}
export interface MsgWithdrawRewards_RecordIDs {
  ids: Long[];
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsResponse {
  /** records_num is the number of RewardsRecord objects processed. */
  recordsNum: Long;
  /** rewards are the total rewards transferred. */
  totalRewards: Coin[];
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
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */
export interface MsgSetFlatFeeResponse {}
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
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * 
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgSetContractMetadata(): MsgSetContractMetadata {
  return {
    senderAddress: "",
    metadata: ContractMetadata.fromPartial({})
  };
}
export const MsgSetContractMetadata = {
  encode(message: MsgSetContractMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.metadata !== undefined) {
      ContractMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetContractMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgSetContractMetadataResponse(): MsgSetContractMetadataResponse {
  return {};
}
export const MsgSetContractMetadataResponse = {
  encode(_: MsgSetContractMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetContractMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  encode(message: MsgWithdrawRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgWithdrawRewards_RecordsLimit(): MsgWithdrawRewards_RecordsLimit {
  return {
    limit: Long.UZERO
  };
}
export const MsgWithdrawRewards_RecordsLimit = {
  encode(message: MsgWithdrawRewards_RecordsLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards_RecordsLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = (reader.uint64() as Long);
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
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO
    };
  },
  toJSON(message: MsgWithdrawRewards_RecordsLimit): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewards_RecordsLimit>): MsgWithdrawRewards_RecordsLimit {
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  }
};
function createBaseMsgWithdrawRewards_RecordIDs(): MsgWithdrawRewards_RecordIDs {
  return {
    ids: []
  };
}
export const MsgWithdrawRewards_RecordIDs = {
  encode(message: MsgWithdrawRewards_RecordIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards_RecordIDs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
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
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
  },
  toJSON(message: MsgWithdrawRewards_RecordIDs): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewards_RecordIDs>): MsgWithdrawRewards_RecordIDs {
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {
    recordsNum: Long.UZERO,
    totalRewards: []
  };
}
export const MsgWithdrawRewardsResponse = {
  encode(message: MsgWithdrawRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.recordsNum.isZero()) {
      writer.uint32(8).uint64(message.recordsNum);
    }
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordsNum = (reader.uint64() as Long);
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
      recordsNum: isSet(object.recordsNum) ? Long.fromValue(object.recordsNum) : Long.UZERO,
      totalRewards: Array.isArray(object?.totalRewards) ? object.totalRewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgWithdrawRewardsResponse): unknown {
    const obj: any = {};
    message.recordsNum !== undefined && (obj.recordsNum = (message.recordsNum || Long.UZERO).toString());
    if (message.totalRewards) {
      obj.totalRewards = message.totalRewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalRewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    message.recordsNum = object.recordsNum !== undefined && object.recordsNum !== null ? Long.fromValue(object.recordsNum) : Long.UZERO;
    message.totalRewards = object.totalRewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
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
  encode(message: MsgSetFlatFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFlatFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgSetFlatFeeResponse(): MsgSetFlatFeeResponse {
  return {};
}
export const MsgSetFlatFeeResponse = {
  encode(_: MsgSetFlatFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFlatFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  }
};