/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { Decimal } from "@cosmjs/math";
/** Callback defines the callback structure. */
export interface Callback {
  /** contract_address is the address of the contract which is requesting the callback (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier the callback requestor can pass in to identify the callback when it happens. */
  jobId: bigint;
  /** callback_height is the height at which the callback is executed. */
  callbackHeight: bigint;
  /** fee_split is the breakdown of the fees paid by the contract to reserve the callback */
  feeSplit?: CallbackFeesFeeSplit;
  /** reserved_by is the address which reserved the callback (bech32 encoded). */
  reservedBy: string;
  /** callback_gas_limit is the maximum gas that can be consumed by this callback. */
  maxGasLimit: bigint;
}
export interface CallbackProtoMsg {
  typeUrl: "/archway.callback.v1.Callback";
  value: Uint8Array;
}
/** Callback defines the callback structure. */
export interface CallbackAmino {
  /** contract_address is the address of the contract which is requesting the callback (bech32 encoded). */
  contract_address?: string;
  /** job_id is an identifier the callback requestor can pass in to identify the callback when it happens. */
  job_id?: string;
  /** callback_height is the height at which the callback is executed. */
  callback_height?: string;
  /** fee_split is the breakdown of the fees paid by the contract to reserve the callback */
  fee_split?: CallbackFeesFeeSplitAmino;
  /** reserved_by is the address which reserved the callback (bech32 encoded). */
  reserved_by?: string;
  /** callback_gas_limit is the maximum gas that can be consumed by this callback. */
  max_gas_limit?: string;
}
export interface CallbackAminoMsg {
  type: "/archway.callback.v1.Callback";
  value: CallbackAmino;
}
/** CallbackFeesFeeSplit is the breakdown of all the fees that need to be paid by the contract to reserve a callback */
export interface CallbackFeesFeeSplit {
  /** transaction_fees is the transaction fees for the callback based on its gas consumption */
  transactionFees?: Coin;
  /** block_reservation_fees is the block reservation fees portion of the callback reservation fees */
  blockReservationFees?: Coin;
  /** future_reservation_fees is the future reservation fees portion of the callback reservation fees */
  futureReservationFees?: Coin;
  /** surplus_fees is any extra fees passed in for the registration of the callback */
  surplusFees?: Coin;
}
export interface CallbackFeesFeeSplitProtoMsg {
  typeUrl: "/archway.callback.v1.CallbackFeesFeeSplit";
  value: Uint8Array;
}
/** CallbackFeesFeeSplit is the breakdown of all the fees that need to be paid by the contract to reserve a callback */
export interface CallbackFeesFeeSplitAmino {
  /** transaction_fees is the transaction fees for the callback based on its gas consumption */
  transaction_fees?: CoinAmino;
  /** block_reservation_fees is the block reservation fees portion of the callback reservation fees */
  block_reservation_fees?: CoinAmino;
  /** future_reservation_fees is the future reservation fees portion of the callback reservation fees */
  future_reservation_fees?: CoinAmino;
  /** surplus_fees is any extra fees passed in for the registration of the callback */
  surplus_fees?: CoinAmino;
}
export interface CallbackFeesFeeSplitAminoMsg {
  type: "/archway.callback.v1.CallbackFeesFeeSplit";
  value: CallbackFeesFeeSplitAmino;
}
/** Params defines the module parameters. */
export interface Params {
  /** callback_gas_limit is the maximum gas that can be consumed by a callback. */
  callbackGasLimit: bigint;
  /** max_block_reservation_limit is the maximum number of callbacks which can be registered in a given block. */
  maxBlockReservationLimit: bigint;
  /** max_future_reservation_limit is the maximum number of blocks in the future that a contract can request a callback in. */
  maxFutureReservationLimit: bigint;
  /** block_reservation_fee_multiplier is used to calculate a part of the reservation fees which will need to be paid when requesting the callback. */
  blockReservationFeeMultiplier: string;
  /** future_reservation_fee_multiplier is used to calculate a part of the reservation fees which will need to be paid while requesting the callback. */
  futureReservationFeeMultiplier: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/archway.callback.v1.Params";
  value: Uint8Array;
}
/** Params defines the module parameters. */
export interface ParamsAmino {
  /** callback_gas_limit is the maximum gas that can be consumed by a callback. */
  callback_gas_limit?: string;
  /** max_block_reservation_limit is the maximum number of callbacks which can be registered in a given block. */
  max_block_reservation_limit?: string;
  /** max_future_reservation_limit is the maximum number of blocks in the future that a contract can request a callback in. */
  max_future_reservation_limit?: string;
  /** block_reservation_fee_multiplier is used to calculate a part of the reservation fees which will need to be paid when requesting the callback. */
  block_reservation_fee_multiplier?: string;
  /** future_reservation_fee_multiplier is used to calculate a part of the reservation fees which will need to be paid while requesting the callback. */
  future_reservation_fee_multiplier?: string;
}
export interface ParamsAminoMsg {
  type: "/archway.callback.v1.Params";
  value: ParamsAmino;
}
function createBaseCallback(): Callback {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    feeSplit: undefined,
    reservedBy: "",
    maxGasLimit: BigInt(0)
  };
}
export const Callback = {
  typeUrl: "/archway.callback.v1.Callback",
  encode(message: Callback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(16).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.callbackHeight);
    }
    if (message.feeSplit !== undefined) {
      CallbackFeesFeeSplit.encode(message.feeSplit, writer.uint32(34).fork()).ldelim();
    }
    if (message.reservedBy !== "") {
      writer.uint32(42).string(message.reservedBy);
    }
    if (message.maxGasLimit !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxGasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Callback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.jobId = reader.uint64();
          break;
        case 3:
          message.callbackHeight = reader.int64();
          break;
        case 4:
          message.feeSplit = CallbackFeesFeeSplit.decode(reader, reader.uint32());
          break;
        case 5:
          message.reservedBy = reader.string();
          break;
        case 6:
          message.maxGasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Callback {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      callbackHeight: isSet(object.callbackHeight) ? BigInt(object.callbackHeight.toString()) : BigInt(0),
      feeSplit: isSet(object.feeSplit) ? CallbackFeesFeeSplit.fromJSON(object.feeSplit) : undefined,
      reservedBy: isSet(object.reservedBy) ? String(object.reservedBy) : "",
      maxGasLimit: isSet(object.maxGasLimit) ? BigInt(object.maxGasLimit.toString()) : BigInt(0)
    };
  },
  toJSON(message: Callback): JsonSafe<Callback> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined && (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.feeSplit !== undefined && (obj.feeSplit = message.feeSplit ? CallbackFeesFeeSplit.toJSON(message.feeSplit) : undefined);
    message.reservedBy !== undefined && (obj.reservedBy = message.reservedBy);
    message.maxGasLimit !== undefined && (obj.maxGasLimit = (message.maxGasLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Callback>): Callback {
    const message = createBaseCallback();
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.callbackHeight = object.callbackHeight !== undefined && object.callbackHeight !== null ? BigInt(object.callbackHeight.toString()) : BigInt(0);
    message.feeSplit = object.feeSplit !== undefined && object.feeSplit !== null ? CallbackFeesFeeSplit.fromPartial(object.feeSplit) : undefined;
    message.reservedBy = object.reservedBy ?? "";
    message.maxGasLimit = object.maxGasLimit !== undefined && object.maxGasLimit !== null ? BigInt(object.maxGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CallbackAmino): Callback {
    const message = createBaseCallback();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.job_id !== undefined && object.job_id !== null) {
      message.jobId = BigInt(object.job_id);
    }
    if (object.callback_height !== undefined && object.callback_height !== null) {
      message.callbackHeight = BigInt(object.callback_height);
    }
    if (object.fee_split !== undefined && object.fee_split !== null) {
      message.feeSplit = CallbackFeesFeeSplit.fromAmino(object.fee_split);
    }
    if (object.reserved_by !== undefined && object.reserved_by !== null) {
      message.reservedBy = object.reserved_by;
    }
    if (object.max_gas_limit !== undefined && object.max_gas_limit !== null) {
      message.maxGasLimit = BigInt(object.max_gas_limit);
    }
    return message;
  },
  toAmino(message: Callback): CallbackAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.callback_height = message.callbackHeight !== BigInt(0) ? message.callbackHeight.toString() : undefined;
    obj.fee_split = message.feeSplit ? CallbackFeesFeeSplit.toAmino(message.feeSplit) : undefined;
    obj.reserved_by = message.reservedBy === "" ? undefined : message.reservedBy;
    obj.max_gas_limit = message.maxGasLimit !== BigInt(0) ? message.maxGasLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CallbackAminoMsg): Callback {
    return Callback.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackProtoMsg): Callback {
    return Callback.decode(message.value);
  },
  toProto(message: Callback): Uint8Array {
    return Callback.encode(message).finish();
  },
  toProtoMsg(message: Callback): CallbackProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.Callback",
      value: Callback.encode(message).finish()
    };
  }
};
function createBaseCallbackFeesFeeSplit(): CallbackFeesFeeSplit {
  return {
    transactionFees: undefined,
    blockReservationFees: undefined,
    futureReservationFees: undefined,
    surplusFees: undefined
  };
}
export const CallbackFeesFeeSplit = {
  typeUrl: "/archway.callback.v1.CallbackFeesFeeSplit",
  encode(message: CallbackFeesFeeSplit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.transactionFees !== undefined) {
      Coin.encode(message.transactionFees, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockReservationFees !== undefined) {
      Coin.encode(message.blockReservationFees, writer.uint32(18).fork()).ldelim();
    }
    if (message.futureReservationFees !== undefined) {
      Coin.encode(message.futureReservationFees, writer.uint32(26).fork()).ldelim();
    }
    if (message.surplusFees !== undefined) {
      Coin.encode(message.surplusFees, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackFeesFeeSplit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackFeesFeeSplit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionFees = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockReservationFees = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.futureReservationFees = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.surplusFees = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackFeesFeeSplit {
    return {
      transactionFees: isSet(object.transactionFees) ? Coin.fromJSON(object.transactionFees) : undefined,
      blockReservationFees: isSet(object.blockReservationFees) ? Coin.fromJSON(object.blockReservationFees) : undefined,
      futureReservationFees: isSet(object.futureReservationFees) ? Coin.fromJSON(object.futureReservationFees) : undefined,
      surplusFees: isSet(object.surplusFees) ? Coin.fromJSON(object.surplusFees) : undefined
    };
  },
  toJSON(message: CallbackFeesFeeSplit): JsonSafe<CallbackFeesFeeSplit> {
    const obj: any = {};
    message.transactionFees !== undefined && (obj.transactionFees = message.transactionFees ? Coin.toJSON(message.transactionFees) : undefined);
    message.blockReservationFees !== undefined && (obj.blockReservationFees = message.blockReservationFees ? Coin.toJSON(message.blockReservationFees) : undefined);
    message.futureReservationFees !== undefined && (obj.futureReservationFees = message.futureReservationFees ? Coin.toJSON(message.futureReservationFees) : undefined);
    message.surplusFees !== undefined && (obj.surplusFees = message.surplusFees ? Coin.toJSON(message.surplusFees) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CallbackFeesFeeSplit>): CallbackFeesFeeSplit {
    const message = createBaseCallbackFeesFeeSplit();
    message.transactionFees = object.transactionFees !== undefined && object.transactionFees !== null ? Coin.fromPartial(object.transactionFees) : undefined;
    message.blockReservationFees = object.blockReservationFees !== undefined && object.blockReservationFees !== null ? Coin.fromPartial(object.blockReservationFees) : undefined;
    message.futureReservationFees = object.futureReservationFees !== undefined && object.futureReservationFees !== null ? Coin.fromPartial(object.futureReservationFees) : undefined;
    message.surplusFees = object.surplusFees !== undefined && object.surplusFees !== null ? Coin.fromPartial(object.surplusFees) : undefined;
    return message;
  },
  fromAmino(object: CallbackFeesFeeSplitAmino): CallbackFeesFeeSplit {
    const message = createBaseCallbackFeesFeeSplit();
    if (object.transaction_fees !== undefined && object.transaction_fees !== null) {
      message.transactionFees = Coin.fromAmino(object.transaction_fees);
    }
    if (object.block_reservation_fees !== undefined && object.block_reservation_fees !== null) {
      message.blockReservationFees = Coin.fromAmino(object.block_reservation_fees);
    }
    if (object.future_reservation_fees !== undefined && object.future_reservation_fees !== null) {
      message.futureReservationFees = Coin.fromAmino(object.future_reservation_fees);
    }
    if (object.surplus_fees !== undefined && object.surplus_fees !== null) {
      message.surplusFees = Coin.fromAmino(object.surplus_fees);
    }
    return message;
  },
  toAmino(message: CallbackFeesFeeSplit): CallbackFeesFeeSplitAmino {
    const obj: any = {};
    obj.transaction_fees = message.transactionFees ? Coin.toAmino(message.transactionFees) : undefined;
    obj.block_reservation_fees = message.blockReservationFees ? Coin.toAmino(message.blockReservationFees) : undefined;
    obj.future_reservation_fees = message.futureReservationFees ? Coin.toAmino(message.futureReservationFees) : undefined;
    obj.surplus_fees = message.surplusFees ? Coin.toAmino(message.surplusFees) : undefined;
    return obj;
  },
  fromAminoMsg(object: CallbackFeesFeeSplitAminoMsg): CallbackFeesFeeSplit {
    return CallbackFeesFeeSplit.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackFeesFeeSplitProtoMsg): CallbackFeesFeeSplit {
    return CallbackFeesFeeSplit.decode(message.value);
  },
  toProto(message: CallbackFeesFeeSplit): Uint8Array {
    return CallbackFeesFeeSplit.encode(message).finish();
  },
  toProtoMsg(message: CallbackFeesFeeSplit): CallbackFeesFeeSplitProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.CallbackFeesFeeSplit",
      value: CallbackFeesFeeSplit.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    callbackGasLimit: BigInt(0),
    maxBlockReservationLimit: BigInt(0),
    maxFutureReservationLimit: BigInt(0),
    blockReservationFeeMultiplier: "",
    futureReservationFeeMultiplier: ""
  };
}
export const Params = {
  typeUrl: "/archway.callback.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.callbackGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.callbackGasLimit);
    }
    if (message.maxBlockReservationLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBlockReservationLimit);
    }
    if (message.maxFutureReservationLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxFutureReservationLimit);
    }
    if (message.blockReservationFeeMultiplier !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.blockReservationFeeMultiplier, 18).atomics);
    }
    if (message.futureReservationFeeMultiplier !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.futureReservationFeeMultiplier, 18).atomics);
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
          message.callbackGasLimit = reader.uint64();
          break;
        case 2:
          message.maxBlockReservationLimit = reader.uint64();
          break;
        case 3:
          message.maxFutureReservationLimit = reader.uint64();
          break;
        case 4:
          message.blockReservationFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.futureReservationFeeMultiplier = Decimal.fromAtomics(reader.string(), 18).toString();
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
      callbackGasLimit: isSet(object.callbackGasLimit) ? BigInt(object.callbackGasLimit.toString()) : BigInt(0),
      maxBlockReservationLimit: isSet(object.maxBlockReservationLimit) ? BigInt(object.maxBlockReservationLimit.toString()) : BigInt(0),
      maxFutureReservationLimit: isSet(object.maxFutureReservationLimit) ? BigInt(object.maxFutureReservationLimit.toString()) : BigInt(0),
      blockReservationFeeMultiplier: isSet(object.blockReservationFeeMultiplier) ? String(object.blockReservationFeeMultiplier) : "",
      futureReservationFeeMultiplier: isSet(object.futureReservationFeeMultiplier) ? String(object.futureReservationFeeMultiplier) : ""
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.callbackGasLimit !== undefined && (obj.callbackGasLimit = (message.callbackGasLimit || BigInt(0)).toString());
    message.maxBlockReservationLimit !== undefined && (obj.maxBlockReservationLimit = (message.maxBlockReservationLimit || BigInt(0)).toString());
    message.maxFutureReservationLimit !== undefined && (obj.maxFutureReservationLimit = (message.maxFutureReservationLimit || BigInt(0)).toString());
    message.blockReservationFeeMultiplier !== undefined && (obj.blockReservationFeeMultiplier = message.blockReservationFeeMultiplier);
    message.futureReservationFeeMultiplier !== undefined && (obj.futureReservationFeeMultiplier = message.futureReservationFeeMultiplier);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.callbackGasLimit = object.callbackGasLimit !== undefined && object.callbackGasLimit !== null ? BigInt(object.callbackGasLimit.toString()) : BigInt(0);
    message.maxBlockReservationLimit = object.maxBlockReservationLimit !== undefined && object.maxBlockReservationLimit !== null ? BigInt(object.maxBlockReservationLimit.toString()) : BigInt(0);
    message.maxFutureReservationLimit = object.maxFutureReservationLimit !== undefined && object.maxFutureReservationLimit !== null ? BigInt(object.maxFutureReservationLimit.toString()) : BigInt(0);
    message.blockReservationFeeMultiplier = object.blockReservationFeeMultiplier ?? "";
    message.futureReservationFeeMultiplier = object.futureReservationFeeMultiplier ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.callback_gas_limit !== undefined && object.callback_gas_limit !== null) {
      message.callbackGasLimit = BigInt(object.callback_gas_limit);
    }
    if (object.max_block_reservation_limit !== undefined && object.max_block_reservation_limit !== null) {
      message.maxBlockReservationLimit = BigInt(object.max_block_reservation_limit);
    }
    if (object.max_future_reservation_limit !== undefined && object.max_future_reservation_limit !== null) {
      message.maxFutureReservationLimit = BigInt(object.max_future_reservation_limit);
    }
    if (object.block_reservation_fee_multiplier !== undefined && object.block_reservation_fee_multiplier !== null) {
      message.blockReservationFeeMultiplier = object.block_reservation_fee_multiplier;
    }
    if (object.future_reservation_fee_multiplier !== undefined && object.future_reservation_fee_multiplier !== null) {
      message.futureReservationFeeMultiplier = object.future_reservation_fee_multiplier;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.callback_gas_limit = message.callbackGasLimit !== BigInt(0) ? message.callbackGasLimit.toString() : undefined;
    obj.max_block_reservation_limit = message.maxBlockReservationLimit !== BigInt(0) ? message.maxBlockReservationLimit.toString() : undefined;
    obj.max_future_reservation_limit = message.maxFutureReservationLimit !== BigInt(0) ? message.maxFutureReservationLimit.toString() : undefined;
    obj.block_reservation_fee_multiplier = message.blockReservationFeeMultiplier === "" ? undefined : message.blockReservationFeeMultiplier;
    obj.future_reservation_fee_multiplier = message.futureReservationFeeMultiplier === "" ? undefined : message.futureReservationFeeMultiplier;
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
      typeUrl: "/archway.callback.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};