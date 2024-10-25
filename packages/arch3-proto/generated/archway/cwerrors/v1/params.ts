/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Params defines the set of parameters for the cwerrors module. */
export interface Params {
  /** error_stored_time is the block height until which error is stored */
  errorStoredTime: bigint;
  /** subsciption_fee is the fee required to subscribe to error callbacks */
  subscriptionFee: Coin;
  /** subscription_period is the period for which the subscription is valid */
  subscriptionPeriod: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/archway.cwerrors.v1.Params";
  value: Uint8Array;
}
/** Params defines the set of parameters for the cwerrors module. */
export interface ParamsAmino {
  /** error_stored_time is the block height until which error is stored */
  error_stored_time?: string;
  /** subsciption_fee is the fee required to subscribe to error callbacks */
  subscription_fee?: CoinAmino;
  /** subscription_period is the period for which the subscription is valid */
  subscription_period?: string;
}
export interface ParamsAminoMsg {
  type: "/archway.cwerrors.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    errorStoredTime: BigInt(0),
    subscriptionFee: Coin.fromPartial({}),
    subscriptionPeriod: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/archway.cwerrors.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.errorStoredTime !== BigInt(0)) {
      writer.uint32(8).int64(message.errorStoredTime);
    }
    if (message.subscriptionFee !== undefined) {
      Coin.encode(message.subscriptionFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscriptionPeriod !== BigInt(0)) {
      writer.uint32(24).int64(message.subscriptionPeriod);
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
          message.errorStoredTime = reader.int64();
          break;
        case 2:
          message.subscriptionFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.subscriptionPeriod = reader.int64();
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
      errorStoredTime: isSet(object.errorStoredTime) ? BigInt(object.errorStoredTime.toString()) : BigInt(0),
      subscriptionFee: isSet(object.subscriptionFee) ? Coin.fromJSON(object.subscriptionFee) : undefined,
      subscriptionPeriod: isSet(object.subscriptionPeriod) ? BigInt(object.subscriptionPeriod.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.errorStoredTime !== undefined && (obj.errorStoredTime = (message.errorStoredTime || BigInt(0)).toString());
    message.subscriptionFee !== undefined && (obj.subscriptionFee = message.subscriptionFee ? Coin.toJSON(message.subscriptionFee) : undefined);
    message.subscriptionPeriod !== undefined && (obj.subscriptionPeriod = (message.subscriptionPeriod || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.errorStoredTime = object.errorStoredTime !== undefined && object.errorStoredTime !== null ? BigInt(object.errorStoredTime.toString()) : BigInt(0);
    message.subscriptionFee = object.subscriptionFee !== undefined && object.subscriptionFee !== null ? Coin.fromPartial(object.subscriptionFee) : undefined;
    message.subscriptionPeriod = object.subscriptionPeriod !== undefined && object.subscriptionPeriod !== null ? BigInt(object.subscriptionPeriod.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.error_stored_time !== undefined && object.error_stored_time !== null) {
      message.errorStoredTime = BigInt(object.error_stored_time);
    }
    if (object.subscription_fee !== undefined && object.subscription_fee !== null) {
      message.subscriptionFee = Coin.fromAmino(object.subscription_fee);
    }
    if (object.subscription_period !== undefined && object.subscription_period !== null) {
      message.subscriptionPeriod = BigInt(object.subscription_period);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.error_stored_time = message.errorStoredTime !== BigInt(0) ? message.errorStoredTime.toString() : undefined;
    obj.subscription_fee = message.subscriptionFee ? Coin.toAmino(message.subscriptionFee) : undefined;
    obj.subscription_period = message.subscriptionPeriod !== BigInt(0) ? message.subscriptionPeriod.toString() : undefined;
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
      typeUrl: "/archway.cwerrors.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};