/* eslint-disable */
import { CallbackFeesFeeSplit, CallbackFeesFeeSplitAmino } from "./callback";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** CallbackRegisteredEvent is emitted when a callback is registered. */
export interface CallbackRegisteredEvent {
  /** contract_address is the address of the contract for which callback is being registered (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier of the callback. */
  jobId: bigint;
  /** callback_height is the height at which the callback is executed. */
  callbackHeight: bigint;
  /** fee_split is the breakdown of the fees paid by the contract to reserve the callback */
  feeSplit?: CallbackFeesFeeSplit;
  /** reserved_by is the address which reserved the callback (bech32 encoded). */
  reservedBy: string;
}
export interface CallbackRegisteredEventProtoMsg {
  typeUrl: "/archway.callback.v1.CallbackRegisteredEvent";
  value: Uint8Array;
}
/** CallbackRegisteredEvent is emitted when a callback is registered. */
export interface CallbackRegisteredEventAmino {
  /** contract_address is the address of the contract for which callback is being registered (bech32 encoded). */
  contract_address?: string;
  /** job_id is an identifier of the callback. */
  job_id?: string;
  /** callback_height is the height at which the callback is executed. */
  callback_height?: string;
  /** fee_split is the breakdown of the fees paid by the contract to reserve the callback */
  fee_split?: CallbackFeesFeeSplitAmino;
  /** reserved_by is the address which reserved the callback (bech32 encoded). */
  reserved_by?: string;
}
export interface CallbackRegisteredEventAminoMsg {
  type: "/archway.callback.v1.CallbackRegisteredEvent";
  value: CallbackRegisteredEventAmino;
}
/** CallbackCancelledEvent is emitted when a callback is cancelled. */
export interface CallbackCancelledEvent {
  /** cancelled_by is the address of the contract whose callback is being cancelled (bech32 encoded) */
  cancelledBy: string;
  /** contract_address is the address of the contract (bech32 encoded) */
  contractAddress: string;
  /** job_id is an identifier the callback requestor had passed during registration of the callback */
  jobId: bigint;
  /** callback_height is the height at which the callback requestor had registered the callback */
  callbackHeight: bigint;
  /** refund_amount is the amount of fees which was refunded on cancellation */
  refundAmount: Coin;
}
export interface CallbackCancelledEventProtoMsg {
  typeUrl: "/archway.callback.v1.CallbackCancelledEvent";
  value: Uint8Array;
}
/** CallbackCancelledEvent is emitted when a callback is cancelled. */
export interface CallbackCancelledEventAmino {
  /** cancelled_by is the address of the contract whose callback is being cancelled (bech32 encoded) */
  cancelled_by?: string;
  /** contract_address is the address of the contract (bech32 encoded) */
  contract_address?: string;
  /** job_id is an identifier the callback requestor had passed during registration of the callback */
  job_id?: string;
  /** callback_height is the height at which the callback requestor had registered the callback */
  callback_height?: string;
  /** refund_amount is the amount of fees which was refunded on cancellation */
  refund_amount?: CoinAmino;
}
export interface CallbackCancelledEventAminoMsg {
  type: "/archway.callback.v1.CallbackCancelledEvent";
  value: CallbackCancelledEventAmino;
}
/** CallbackExecutedSuccessEvent is emitted when a callback is executed successfully. */
export interface CallbackExecutedSuccessEvent {
  /** contract_address is the address of the contract for which callback is being executed (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier of the callback. */
  jobId: bigint;
  /** sudo_msg is the input passed by the module to the contract */
  sudoMsg: string;
  /** gas_used is the amount of gas consumed during the callback execution */
  gasUsed: bigint;
}
export interface CallbackExecutedSuccessEventProtoMsg {
  typeUrl: "/archway.callback.v1.CallbackExecutedSuccessEvent";
  value: Uint8Array;
}
/** CallbackExecutedSuccessEvent is emitted when a callback is executed successfully. */
export interface CallbackExecutedSuccessEventAmino {
  /** contract_address is the address of the contract for which callback is being executed (bech32 encoded). */
  contract_address?: string;
  /** job_id is an identifier of the callback. */
  job_id?: string;
  /** sudo_msg is the input passed by the module to the contract */
  sudo_msg?: string;
  /** gas_used is the amount of gas consumed during the callback execution */
  gas_used?: string;
}
export interface CallbackExecutedSuccessEventAminoMsg {
  type: "/archway.callback.v1.CallbackExecutedSuccessEvent";
  value: CallbackExecutedSuccessEventAmino;
}
/** CallbackExecutedFailedEvent is emitted when a callback execution fails. */
export interface CallbackExecutedFailedEvent {
  /** contract_address is the address of the contract for which callback is being executed (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier of the callback. */
  jobId: bigint;
  /** sudo_msg is the input passed by the module to the contract */
  sudoMsg: string;
  /** gas_used is the amount of gas consumed during the callback execution */
  gasUsed: bigint;
  /** error is the error returned during the callback execution */
  error: string;
}
export interface CallbackExecutedFailedEventProtoMsg {
  typeUrl: "/archway.callback.v1.CallbackExecutedFailedEvent";
  value: Uint8Array;
}
/** CallbackExecutedFailedEvent is emitted when a callback execution fails. */
export interface CallbackExecutedFailedEventAmino {
  /** contract_address is the address of the contract for which callback is being executed (bech32 encoded). */
  contract_address?: string;
  /** job_id is an identifier of the callback. */
  job_id?: string;
  /** sudo_msg is the input passed by the module to the contract */
  sudo_msg?: string;
  /** gas_used is the amount of gas consumed during the callback execution */
  gas_used?: string;
  /** error is the error returned during the callback execution */
  error?: string;
}
export interface CallbackExecutedFailedEventAminoMsg {
  type: "/archway.callback.v1.CallbackExecutedFailedEvent";
  value: CallbackExecutedFailedEventAmino;
}
function createBaseCallbackRegisteredEvent(): CallbackRegisteredEvent {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    feeSplit: undefined,
    reservedBy: ""
  };
}
export const CallbackRegisteredEvent = {
  typeUrl: "/archway.callback.v1.CallbackRegisteredEvent",
  encode(message: CallbackRegisteredEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackRegisteredEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackRegisteredEvent();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackRegisteredEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      callbackHeight: isSet(object.callbackHeight) ? BigInt(object.callbackHeight.toString()) : BigInt(0),
      feeSplit: isSet(object.feeSplit) ? CallbackFeesFeeSplit.fromJSON(object.feeSplit) : undefined,
      reservedBy: isSet(object.reservedBy) ? String(object.reservedBy) : ""
    };
  },
  toJSON(message: CallbackRegisteredEvent): JsonSafe<CallbackRegisteredEvent> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined && (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.feeSplit !== undefined && (obj.feeSplit = message.feeSplit ? CallbackFeesFeeSplit.toJSON(message.feeSplit) : undefined);
    message.reservedBy !== undefined && (obj.reservedBy = message.reservedBy);
    return obj;
  },
  fromPartial(object: Partial<CallbackRegisteredEvent>): CallbackRegisteredEvent {
    const message = createBaseCallbackRegisteredEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.callbackHeight = object.callbackHeight !== undefined && object.callbackHeight !== null ? BigInt(object.callbackHeight.toString()) : BigInt(0);
    message.feeSplit = object.feeSplit !== undefined && object.feeSplit !== null ? CallbackFeesFeeSplit.fromPartial(object.feeSplit) : undefined;
    message.reservedBy = object.reservedBy ?? "";
    return message;
  },
  fromAmino(object: CallbackRegisteredEventAmino): CallbackRegisteredEvent {
    const message = createBaseCallbackRegisteredEvent();
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
    return message;
  },
  toAmino(message: CallbackRegisteredEvent): CallbackRegisteredEventAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.callback_height = message.callbackHeight !== BigInt(0) ? message.callbackHeight.toString() : undefined;
    obj.fee_split = message.feeSplit ? CallbackFeesFeeSplit.toAmino(message.feeSplit) : undefined;
    obj.reserved_by = message.reservedBy === "" ? undefined : message.reservedBy;
    return obj;
  },
  fromAminoMsg(object: CallbackRegisteredEventAminoMsg): CallbackRegisteredEvent {
    return CallbackRegisteredEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackRegisteredEventProtoMsg): CallbackRegisteredEvent {
    return CallbackRegisteredEvent.decode(message.value);
  },
  toProto(message: CallbackRegisteredEvent): Uint8Array {
    return CallbackRegisteredEvent.encode(message).finish();
  },
  toProtoMsg(message: CallbackRegisteredEvent): CallbackRegisteredEventProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.CallbackRegisteredEvent",
      value: CallbackRegisteredEvent.encode(message).finish()
    };
  }
};
function createBaseCallbackCancelledEvent(): CallbackCancelledEvent {
  return {
    cancelledBy: "",
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    refundAmount: Coin.fromPartial({})
  };
}
export const CallbackCancelledEvent = {
  typeUrl: "/archway.callback.v1.CallbackCancelledEvent",
  encode(message: CallbackCancelledEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cancelledBy !== "") {
      writer.uint32(10).string(message.cancelledBy);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(24).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.callbackHeight);
    }
    if (message.refundAmount !== undefined) {
      Coin.encode(message.refundAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackCancelledEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackCancelledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cancelledBy = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.jobId = reader.uint64();
          break;
        case 4:
          message.callbackHeight = reader.int64();
          break;
        case 5:
          message.refundAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackCancelledEvent {
    return {
      cancelledBy: isSet(object.cancelledBy) ? String(object.cancelledBy) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      callbackHeight: isSet(object.callbackHeight) ? BigInt(object.callbackHeight.toString()) : BigInt(0),
      refundAmount: isSet(object.refundAmount) ? Coin.fromJSON(object.refundAmount) : undefined
    };
  },
  toJSON(message: CallbackCancelledEvent): JsonSafe<CallbackCancelledEvent> {
    const obj: any = {};
    message.cancelledBy !== undefined && (obj.cancelledBy = message.cancelledBy);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined && (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.refundAmount !== undefined && (obj.refundAmount = message.refundAmount ? Coin.toJSON(message.refundAmount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CallbackCancelledEvent>): CallbackCancelledEvent {
    const message = createBaseCallbackCancelledEvent();
    message.cancelledBy = object.cancelledBy ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.callbackHeight = object.callbackHeight !== undefined && object.callbackHeight !== null ? BigInt(object.callbackHeight.toString()) : BigInt(0);
    message.refundAmount = object.refundAmount !== undefined && object.refundAmount !== null ? Coin.fromPartial(object.refundAmount) : undefined;
    return message;
  },
  fromAmino(object: CallbackCancelledEventAmino): CallbackCancelledEvent {
    const message = createBaseCallbackCancelledEvent();
    if (object.cancelled_by !== undefined && object.cancelled_by !== null) {
      message.cancelledBy = object.cancelled_by;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.job_id !== undefined && object.job_id !== null) {
      message.jobId = BigInt(object.job_id);
    }
    if (object.callback_height !== undefined && object.callback_height !== null) {
      message.callbackHeight = BigInt(object.callback_height);
    }
    if (object.refund_amount !== undefined && object.refund_amount !== null) {
      message.refundAmount = Coin.fromAmino(object.refund_amount);
    }
    return message;
  },
  toAmino(message: CallbackCancelledEvent): CallbackCancelledEventAmino {
    const obj: any = {};
    obj.cancelled_by = message.cancelledBy === "" ? undefined : message.cancelledBy;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.callback_height = message.callbackHeight !== BigInt(0) ? message.callbackHeight.toString() : undefined;
    obj.refund_amount = message.refundAmount ? Coin.toAmino(message.refundAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: CallbackCancelledEventAminoMsg): CallbackCancelledEvent {
    return CallbackCancelledEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackCancelledEventProtoMsg): CallbackCancelledEvent {
    return CallbackCancelledEvent.decode(message.value);
  },
  toProto(message: CallbackCancelledEvent): Uint8Array {
    return CallbackCancelledEvent.encode(message).finish();
  },
  toProtoMsg(message: CallbackCancelledEvent): CallbackCancelledEventProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.CallbackCancelledEvent",
      value: CallbackCancelledEvent.encode(message).finish()
    };
  }
};
function createBaseCallbackExecutedSuccessEvent(): CallbackExecutedSuccessEvent {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    sudoMsg: "",
    gasUsed: BigInt(0)
  };
}
export const CallbackExecutedSuccessEvent = {
  typeUrl: "/archway.callback.v1.CallbackExecutedSuccessEvent",
  encode(message: CallbackExecutedSuccessEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(16).uint64(message.jobId);
    }
    if (message.sudoMsg !== "") {
      writer.uint32(26).string(message.sudoMsg);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackExecutedSuccessEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackExecutedSuccessEvent();
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
          message.sudoMsg = reader.string();
          break;
        case 4:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackExecutedSuccessEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      sudoMsg: isSet(object.sudoMsg) ? String(object.sudoMsg) : "",
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0)
    };
  },
  toJSON(message: CallbackExecutedSuccessEvent): JsonSafe<CallbackExecutedSuccessEvent> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.sudoMsg !== undefined && (obj.sudoMsg = message.sudoMsg);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<CallbackExecutedSuccessEvent>): CallbackExecutedSuccessEvent {
    const message = createBaseCallbackExecutedSuccessEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.sudoMsg = object.sudoMsg ?? "";
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: CallbackExecutedSuccessEventAmino): CallbackExecutedSuccessEvent {
    const message = createBaseCallbackExecutedSuccessEvent();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.job_id !== undefined && object.job_id !== null) {
      message.jobId = BigInt(object.job_id);
    }
    if (object.sudo_msg !== undefined && object.sudo_msg !== null) {
      message.sudoMsg = object.sudo_msg;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    return message;
  },
  toAmino(message: CallbackExecutedSuccessEvent): CallbackExecutedSuccessEventAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.sudo_msg = message.sudoMsg === "" ? undefined : message.sudoMsg;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CallbackExecutedSuccessEventAminoMsg): CallbackExecutedSuccessEvent {
    return CallbackExecutedSuccessEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackExecutedSuccessEventProtoMsg): CallbackExecutedSuccessEvent {
    return CallbackExecutedSuccessEvent.decode(message.value);
  },
  toProto(message: CallbackExecutedSuccessEvent): Uint8Array {
    return CallbackExecutedSuccessEvent.encode(message).finish();
  },
  toProtoMsg(message: CallbackExecutedSuccessEvent): CallbackExecutedSuccessEventProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.CallbackExecutedSuccessEvent",
      value: CallbackExecutedSuccessEvent.encode(message).finish()
    };
  }
};
function createBaseCallbackExecutedFailedEvent(): CallbackExecutedFailedEvent {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    sudoMsg: "",
    gasUsed: BigInt(0),
    error: ""
  };
}
export const CallbackExecutedFailedEvent = {
  typeUrl: "/archway.callback.v1.CallbackExecutedFailedEvent",
  encode(message: CallbackExecutedFailedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(16).uint64(message.jobId);
    }
    if (message.sudoMsg !== "") {
      writer.uint32(26).string(message.sudoMsg);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.gasUsed);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CallbackExecutedFailedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackExecutedFailedEvent();
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
          message.sudoMsg = reader.string();
          break;
        case 4:
          message.gasUsed = reader.uint64();
          break;
        case 5:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackExecutedFailedEvent {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      jobId: isSet(object.jobId) ? BigInt(object.jobId.toString()) : BigInt(0),
      sudoMsg: isSet(object.sudoMsg) ? String(object.sudoMsg) : "",
      gasUsed: isSet(object.gasUsed) ? BigInt(object.gasUsed.toString()) : BigInt(0),
      error: isSet(object.error) ? String(object.error) : ""
    };
  },
  toJSON(message: CallbackExecutedFailedEvent): JsonSafe<CallbackExecutedFailedEvent> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined && (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.sudoMsg !== undefined && (obj.sudoMsg = message.sudoMsg);
    message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<CallbackExecutedFailedEvent>): CallbackExecutedFailedEvent {
    const message = createBaseCallbackExecutedFailedEvent();
    message.contractAddress = object.contractAddress ?? "";
    message.jobId = object.jobId !== undefined && object.jobId !== null ? BigInt(object.jobId.toString()) : BigInt(0);
    message.sudoMsg = object.sudoMsg ?? "";
    message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
    message.error = object.error ?? "";
    return message;
  },
  fromAmino(object: CallbackExecutedFailedEventAmino): CallbackExecutedFailedEvent {
    const message = createBaseCallbackExecutedFailedEvent();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.job_id !== undefined && object.job_id !== null) {
      message.jobId = BigInt(object.job_id);
    }
    if (object.sudo_msg !== undefined && object.sudo_msg !== null) {
      message.sudoMsg = object.sudo_msg;
    }
    if (object.gas_used !== undefined && object.gas_used !== null) {
      message.gasUsed = BigInt(object.gas_used);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: CallbackExecutedFailedEvent): CallbackExecutedFailedEventAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.job_id = message.jobId !== BigInt(0) ? message.jobId.toString() : undefined;
    obj.sudo_msg = message.sudoMsg === "" ? undefined : message.sudoMsg;
    obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
    obj.error = message.error === "" ? undefined : message.error;
    return obj;
  },
  fromAminoMsg(object: CallbackExecutedFailedEventAminoMsg): CallbackExecutedFailedEvent {
    return CallbackExecutedFailedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: CallbackExecutedFailedEventProtoMsg): CallbackExecutedFailedEvent {
    return CallbackExecutedFailedEvent.decode(message.value);
  },
  toProto(message: CallbackExecutedFailedEvent): Uint8Array {
    return CallbackExecutedFailedEvent.encode(message).finish();
  },
  toProtoMsg(message: CallbackExecutedFailedEvent): CallbackExecutedFailedEventProtoMsg {
    return {
      typeUrl: "/archway.callback.v1.CallbackExecutedFailedEvent",
      value: CallbackExecutedFailedEvent.encode(message).finish()
    };
  }
};