/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { SudoError, SudoErrorAmino } from "./cwerrors";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * ParamsUpdatedEvent defines the event which is thrown when the module
 * parameters are updated
 */
export interface ParamsUpdatedEvent {
  /** new_params are the new parameters for the module */
  newParams: Params;
  /** authority is the address of the authority that updated the parameters */
  authority: string;
}
export interface ParamsUpdatedEventProtoMsg {
  typeUrl: "/archway.cwerrors.v1.ParamsUpdatedEvent";
  value: Uint8Array;
}
/**
 * ParamsUpdatedEvent defines the event which is thrown when the module
 * parameters are updated
 */
export interface ParamsUpdatedEventAmino {
  /** new_params are the new parameters for the module */
  new_params?: ParamsAmino;
  /** authority is the address of the authority that updated the parameters */
  authority?: string;
}
export interface ParamsUpdatedEventAminoMsg {
  type: "/archway.cwerrors.v1.ParamsUpdatedEvent";
  value: ParamsUpdatedEventAmino;
}
/**
 * SubscribedToErrorsEvent defines the event which is thrown when a contract
 * subscribes to errors
 */
export interface SubscribedToErrorsEvent {
  /** sender is the address which initiated the subscription */
  sender: string;
  /**
   * contract_address is the address of the contract which is subscribed to
   * errors
   */
  contractAddress: string;
  /** fees_paid is the fees paid for the subscription */
  feesPaid: Coin;
  /**
   * subscription_valid_till is the block height till which the subscription is
   * valid
   */
  subscriptionValidTill: bigint;
}
export interface SubscribedToErrorsEventProtoMsg {
  typeUrl: "/archway.cwerrors.v1.SubscribedToErrorsEvent";
  value: Uint8Array;
}
/**
 * SubscribedToErrorsEvent defines the event which is thrown when a contract
 * subscribes to errors
 */
export interface SubscribedToErrorsEventAmino {
  /** sender is the address which initiated the subscription */
  sender?: string;
  /**
   * contract_address is the address of the contract which is subscribed to
   * errors
   */
  contract_address?: string;
  /** fees_paid is the fees paid for the subscription */
  fees_paid?: CoinAmino;
  /**
   * subscription_valid_till is the block height till which the subscription is
   * valid
   */
  subscription_valid_till?: string;
}
export interface SubscribedToErrorsEventAminoMsg {
  type: "/archway.cwerrors.v1.SubscribedToErrorsEvent";
  value: SubscribedToErrorsEventAmino;
}
/** StoringErrorEvent defines the event which is thrown when an error is stored */
export interface StoringErrorEvent {
  /** error is the error which is stored */
  error: SudoError;
  /**
   * deletion_block_height is the block height at which the error will be pruned
   * from the state
   */
  deletionBlockHeight: bigint;
}
export interface StoringErrorEventProtoMsg {
  typeUrl: "/archway.cwerrors.v1.StoringErrorEvent";
  value: Uint8Array;
}
/** StoringErrorEvent defines the event which is thrown when an error is stored */
export interface StoringErrorEventAmino {
  /** error is the error which is stored */
  error?: SudoErrorAmino;
  /**
   * deletion_block_height is the block height at which the error will be pruned
   * from the state
   */
  deletion_block_height?: string;
}
export interface StoringErrorEventAminoMsg {
  type: "/archway.cwerrors.v1.StoringErrorEvent";
  value: StoringErrorEventAmino;
}
/**
 * SudoErrorCallbackFailedEvent defines the event which is thrown when a sudo
 * error callback fails
 */
export interface SudoErrorCallbackFailedEvent {
  /** error is the error for which the callback is executed */
  error: SudoError;
  /** callback_error_message is the error message of why the callback failed */
  callbackErrorMessage: string;
}
export interface SudoErrorCallbackFailedEventProtoMsg {
  typeUrl: "/archway.cwerrors.v1.SudoErrorCallbackFailedEvent";
  value: Uint8Array;
}
/**
 * SudoErrorCallbackFailedEvent defines the event which is thrown when a sudo
 * error callback fails
 */
export interface SudoErrorCallbackFailedEventAmino {
  /** error is the error for which the callback is executed */
  error?: SudoErrorAmino;
  /** callback_error_message is the error message of why the callback failed */
  callback_error_message?: string;
}
export interface SudoErrorCallbackFailedEventAminoMsg {
  type: "/archway.cwerrors.v1.SudoErrorCallbackFailedEvent";
  value: SudoErrorCallbackFailedEventAmino;
}
function createBaseParamsUpdatedEvent(): ParamsUpdatedEvent {
  return {
    newParams: Params.fromPartial({}),
    authority: ""
  };
}
export const ParamsUpdatedEvent = {
  typeUrl: "/archway.cwerrors.v1.ParamsUpdatedEvent",
  encode(message: ParamsUpdatedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newParams !== undefined) {
      Params.encode(message.newParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsUpdatedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newParams = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsUpdatedEvent {
    return {
      newParams: isSet(object.newParams) ? Params.fromJSON(object.newParams) : undefined,
      authority: isSet(object.authority) ? String(object.authority) : ""
    };
  },
  toJSON(message: ParamsUpdatedEvent): JsonSafe<ParamsUpdatedEvent> {
    const obj: any = {};
    message.newParams !== undefined && (obj.newParams = message.newParams ? Params.toJSON(message.newParams) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<ParamsUpdatedEvent>): ParamsUpdatedEvent {
    const message = createBaseParamsUpdatedEvent();
    message.newParams = object.newParams !== undefined && object.newParams !== null ? Params.fromPartial(object.newParams) : undefined;
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ParamsUpdatedEventAmino): ParamsUpdatedEvent {
    const message = createBaseParamsUpdatedEvent();
    if (object.new_params !== undefined && object.new_params !== null) {
      message.newParams = Params.fromAmino(object.new_params);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: ParamsUpdatedEvent): ParamsUpdatedEventAmino {
    const obj: any = {};
    obj.new_params = message.newParams ? Params.toAmino(message.newParams) : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: ParamsUpdatedEventAminoMsg): ParamsUpdatedEvent {
    return ParamsUpdatedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsUpdatedEventProtoMsg): ParamsUpdatedEvent {
    return ParamsUpdatedEvent.decode(message.value);
  },
  toProto(message: ParamsUpdatedEvent): Uint8Array {
    return ParamsUpdatedEvent.encode(message).finish();
  },
  toProtoMsg(message: ParamsUpdatedEvent): ParamsUpdatedEventProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.ParamsUpdatedEvent",
      value: ParamsUpdatedEvent.encode(message).finish()
    };
  }
};
function createBaseSubscribedToErrorsEvent(): SubscribedToErrorsEvent {
  return {
    sender: "",
    contractAddress: "",
    feesPaid: Coin.fromPartial({}),
    subscriptionValidTill: BigInt(0)
  };
}
export const SubscribedToErrorsEvent = {
  typeUrl: "/archway.cwerrors.v1.SubscribedToErrorsEvent",
  encode(message: SubscribedToErrorsEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.feesPaid !== undefined) {
      Coin.encode(message.feesPaid, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscriptionValidTill !== BigInt(0)) {
      writer.uint32(32).int64(message.subscriptionValidTill);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SubscribedToErrorsEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribedToErrorsEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.feesPaid = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.subscriptionValidTill = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubscribedToErrorsEvent {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      feesPaid: isSet(object.feesPaid) ? Coin.fromJSON(object.feesPaid) : undefined,
      subscriptionValidTill: isSet(object.subscriptionValidTill) ? BigInt(object.subscriptionValidTill.toString()) : BigInt(0)
    };
  },
  toJSON(message: SubscribedToErrorsEvent): JsonSafe<SubscribedToErrorsEvent> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.feesPaid !== undefined && (obj.feesPaid = message.feesPaid ? Coin.toJSON(message.feesPaid) : undefined);
    message.subscriptionValidTill !== undefined && (obj.subscriptionValidTill = (message.subscriptionValidTill || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<SubscribedToErrorsEvent>): SubscribedToErrorsEvent {
    const message = createBaseSubscribedToErrorsEvent();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.feesPaid = object.feesPaid !== undefined && object.feesPaid !== null ? Coin.fromPartial(object.feesPaid) : undefined;
    message.subscriptionValidTill = object.subscriptionValidTill !== undefined && object.subscriptionValidTill !== null ? BigInt(object.subscriptionValidTill.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SubscribedToErrorsEventAmino): SubscribedToErrorsEvent {
    const message = createBaseSubscribedToErrorsEvent();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.fees_paid !== undefined && object.fees_paid !== null) {
      message.feesPaid = Coin.fromAmino(object.fees_paid);
    }
    if (object.subscription_valid_till !== undefined && object.subscription_valid_till !== null) {
      message.subscriptionValidTill = BigInt(object.subscription_valid_till);
    }
    return message;
  },
  toAmino(message: SubscribedToErrorsEvent): SubscribedToErrorsEventAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.fees_paid = message.feesPaid ? Coin.toAmino(message.feesPaid) : undefined;
    obj.subscription_valid_till = message.subscriptionValidTill !== BigInt(0) ? message.subscriptionValidTill.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SubscribedToErrorsEventAminoMsg): SubscribedToErrorsEvent {
    return SubscribedToErrorsEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SubscribedToErrorsEventProtoMsg): SubscribedToErrorsEvent {
    return SubscribedToErrorsEvent.decode(message.value);
  },
  toProto(message: SubscribedToErrorsEvent): Uint8Array {
    return SubscribedToErrorsEvent.encode(message).finish();
  },
  toProtoMsg(message: SubscribedToErrorsEvent): SubscribedToErrorsEventProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.SubscribedToErrorsEvent",
      value: SubscribedToErrorsEvent.encode(message).finish()
    };
  }
};
function createBaseStoringErrorEvent(): StoringErrorEvent {
  return {
    error: SudoError.fromPartial({}),
    deletionBlockHeight: BigInt(0)
  };
}
export const StoringErrorEvent = {
  typeUrl: "/archway.cwerrors.v1.StoringErrorEvent",
  encode(message: StoringErrorEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== undefined) {
      SudoError.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.deletionBlockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.deletionBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoringErrorEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoringErrorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = SudoError.decode(reader, reader.uint32());
          break;
        case 2:
          message.deletionBlockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoringErrorEvent {
    return {
      error: isSet(object.error) ? SudoError.fromJSON(object.error) : undefined,
      deletionBlockHeight: isSet(object.deletionBlockHeight) ? BigInt(object.deletionBlockHeight.toString()) : BigInt(0)
    };
  },
  toJSON(message: StoringErrorEvent): JsonSafe<StoringErrorEvent> {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error ? SudoError.toJSON(message.error) : undefined);
    message.deletionBlockHeight !== undefined && (obj.deletionBlockHeight = (message.deletionBlockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<StoringErrorEvent>): StoringErrorEvent {
    const message = createBaseStoringErrorEvent();
    message.error = object.error !== undefined && object.error !== null ? SudoError.fromPartial(object.error) : undefined;
    message.deletionBlockHeight = object.deletionBlockHeight !== undefined && object.deletionBlockHeight !== null ? BigInt(object.deletionBlockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: StoringErrorEventAmino): StoringErrorEvent {
    const message = createBaseStoringErrorEvent();
    if (object.error !== undefined && object.error !== null) {
      message.error = SudoError.fromAmino(object.error);
    }
    if (object.deletion_block_height !== undefined && object.deletion_block_height !== null) {
      message.deletionBlockHeight = BigInt(object.deletion_block_height);
    }
    return message;
  },
  toAmino(message: StoringErrorEvent): StoringErrorEventAmino {
    const obj: any = {};
    obj.error = message.error ? SudoError.toAmino(message.error) : undefined;
    obj.deletion_block_height = message.deletionBlockHeight !== BigInt(0) ? message.deletionBlockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StoringErrorEventAminoMsg): StoringErrorEvent {
    return StoringErrorEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: StoringErrorEventProtoMsg): StoringErrorEvent {
    return StoringErrorEvent.decode(message.value);
  },
  toProto(message: StoringErrorEvent): Uint8Array {
    return StoringErrorEvent.encode(message).finish();
  },
  toProtoMsg(message: StoringErrorEvent): StoringErrorEventProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.StoringErrorEvent",
      value: StoringErrorEvent.encode(message).finish()
    };
  }
};
function createBaseSudoErrorCallbackFailedEvent(): SudoErrorCallbackFailedEvent {
  return {
    error: SudoError.fromPartial({}),
    callbackErrorMessage: ""
  };
}
export const SudoErrorCallbackFailedEvent = {
  typeUrl: "/archway.cwerrors.v1.SudoErrorCallbackFailedEvent",
  encode(message: SudoErrorCallbackFailedEvent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== undefined) {
      SudoError.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.callbackErrorMessage !== "") {
      writer.uint32(18).string(message.callbackErrorMessage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoErrorCallbackFailedEvent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoErrorCallbackFailedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = SudoError.decode(reader, reader.uint32());
          break;
        case 2:
          message.callbackErrorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoErrorCallbackFailedEvent {
    return {
      error: isSet(object.error) ? SudoError.fromJSON(object.error) : undefined,
      callbackErrorMessage: isSet(object.callbackErrorMessage) ? String(object.callbackErrorMessage) : ""
    };
  },
  toJSON(message: SudoErrorCallbackFailedEvent): JsonSafe<SudoErrorCallbackFailedEvent> {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error ? SudoError.toJSON(message.error) : undefined);
    message.callbackErrorMessage !== undefined && (obj.callbackErrorMessage = message.callbackErrorMessage);
    return obj;
  },
  fromPartial(object: Partial<SudoErrorCallbackFailedEvent>): SudoErrorCallbackFailedEvent {
    const message = createBaseSudoErrorCallbackFailedEvent();
    message.error = object.error !== undefined && object.error !== null ? SudoError.fromPartial(object.error) : undefined;
    message.callbackErrorMessage = object.callbackErrorMessage ?? "";
    return message;
  },
  fromAmino(object: SudoErrorCallbackFailedEventAmino): SudoErrorCallbackFailedEvent {
    const message = createBaseSudoErrorCallbackFailedEvent();
    if (object.error !== undefined && object.error !== null) {
      message.error = SudoError.fromAmino(object.error);
    }
    if (object.callback_error_message !== undefined && object.callback_error_message !== null) {
      message.callbackErrorMessage = object.callback_error_message;
    }
    return message;
  },
  toAmino(message: SudoErrorCallbackFailedEvent): SudoErrorCallbackFailedEventAmino {
    const obj: any = {};
    obj.error = message.error ? SudoError.toAmino(message.error) : undefined;
    obj.callback_error_message = message.callbackErrorMessage === "" ? undefined : message.callbackErrorMessage;
    return obj;
  },
  fromAminoMsg(object: SudoErrorCallbackFailedEventAminoMsg): SudoErrorCallbackFailedEvent {
    return SudoErrorCallbackFailedEvent.fromAmino(object.value);
  },
  fromProtoMsg(message: SudoErrorCallbackFailedEventProtoMsg): SudoErrorCallbackFailedEvent {
    return SudoErrorCallbackFailedEvent.decode(message.value);
  },
  toProto(message: SudoErrorCallbackFailedEvent): Uint8Array {
    return SudoErrorCallbackFailedEvent.encode(message).finish();
  },
  toProtoMsg(message: SudoErrorCallbackFailedEvent): SudoErrorCallbackFailedEventProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.SudoErrorCallbackFailedEvent",
      value: SudoErrorCallbackFailedEvent.encode(message).finish()
    };
  }
};