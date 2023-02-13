import { ContractMetadata, ContractMetadataSDKType } from "./rewards";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */

export interface MsgSetContractMetadata {
  /** sender_address is the msg sender address (bech32 encoded). */
  senderAddress: string;
  /**
   * metadata is the contract metadata to set / update.
   * If metadata exists, non-empty fields will be updated.
   */

  metadata?: ContractMetadata;
}
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */

export interface MsgSetContractMetadataSDKType {
  /** sender_address is the msg sender address (bech32 encoded). */
  sender_address: string;
  /**
   * metadata is the contract metadata to set / update.
   * If metadata exists, non-empty fields will be updated.
   */

  metadata?: ContractMetadataSDKType;
}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */

export interface MsgSetContractMetadataResponse {}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */

export interface MsgSetContractMetadataResponseSDKType {}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */

export interface MsgWithdrawRewards {
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewardsAddress: string;
  /**
   * records_limit defines the maximum number of RewardsRecord objects to process.
   * If provided limit is 0, the default limit is used.
   */

  recordsLimit?: MsgWithdrawRewards_RecordsLimit;
  /** record_ids defines specific RewardsRecord object IDs to process. */

  recordIds?: MsgWithdrawRewards_RecordIDs;
}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */

export interface MsgWithdrawRewardsSDKType {
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewards_address: string;
  /**
   * records_limit defines the maximum number of RewardsRecord objects to process.
   * If provided limit is 0, the default limit is used.
   */

  records_limit?: MsgWithdrawRewards_RecordsLimitSDKType;
  /** record_ids defines specific RewardsRecord object IDs to process. */

  record_ids?: MsgWithdrawRewards_RecordIDsSDKType;
}
export interface MsgWithdrawRewards_RecordsLimit {
  limit: Long;
}
export interface MsgWithdrawRewards_RecordsLimitSDKType {
  limit: Long;
}
export interface MsgWithdrawRewards_RecordIDs {
  ids: Long[];
}
export interface MsgWithdrawRewards_RecordIDsSDKType {
  ids: Long[];
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */

export interface MsgWithdrawRewardsResponse {
  /** records_num is the number of RewardsRecord objects processed. */
  recordsNum: Long;
  /** rewards are the total rewards transferred. */

  totalRewards: Coin[];
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */

export interface MsgWithdrawRewardsResponseSDKType {
  /** records_num is the number of RewardsRecord objects processed. */
  records_num: Long;
  /** rewards are the total rewards transferred. */

  total_rewards: CoinSDKType[];
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */

export interface MsgSetFlatFee {
  /** sender_address is the msg sender address (bech32 encoded). */
  senderAddress: string;
  /** contract_address is the contract address (bech32 encoded). */

  contractAddress: string;
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner */

  flatFeeAmount?: Coin;
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */

export interface MsgSetFlatFeeSDKType {
  /** sender_address is the msg sender address (bech32 encoded). */
  sender_address: string;
  /** contract_address is the contract address (bech32 encoded). */

  contract_address: string;
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner */

  flat_fee_amount?: CoinSDKType;
}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */

export interface MsgSetFlatFeeResponse {}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */

export interface MsgSetFlatFeeResponseSDKType {}

function createBaseMsgSetContractMetadata(): MsgSetContractMetadata {
  return {
    senderAddress: "",
    metadata: undefined
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
    flatFeeAmount: undefined
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

  fromPartial(_: Partial<MsgSetFlatFeeResponse>): MsgSetFlatFeeResponse {
    const message = createBaseMsgSetFlatFeeResponse();
    return message;
  }

};