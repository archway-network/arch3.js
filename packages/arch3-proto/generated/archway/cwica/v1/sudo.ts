/* eslint-disable */
import { Packet, PacketAmino } from "../../../ibc/core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * Sudopayload is the payload for the sudo call sent by the cwica module on IBC
 * actions
 */
export interface SudoPayload {
  /** ICA is the message which carries the success responses */
  ica?: ICASuccess;
}
export interface SudoPayloadProtoMsg {
  typeUrl: "/archway.cwica.v1.SudoPayload";
  value: Uint8Array;
}
/**
 * Sudopayload is the payload for the sudo call sent by the cwica module on IBC
 * actions
 */
export interface SudoPayloadAmino {
  /** ICA is the message which carries the success responses */
  ica?: ICASuccessAmino;
}
export interface SudoPayloadAminoMsg {
  type: "/archway.cwica.v1.SudoPayload";
  value: SudoPayloadAmino;
}
/** ICASuccess is the success message after the ICA operation has taken place */
export interface ICASuccess {
  /**
   * account_registered is the message which carries the success response after
   * the ica account has been registered
   */
  accountRegistered?: AccountRegistered;
  /**
   * tx_executed is the message which carries the success response after the ica
   * tx has been executed
   */
  txExecuted?: TxExecuted;
}
export interface ICASuccessProtoMsg {
  typeUrl: "/archway.cwica.v1.ICASuccess";
  value: Uint8Array;
}
/** ICASuccess is the success message after the ICA operation has taken place */
export interface ICASuccessAmino {
  /**
   * account_registered is the message which carries the success response after
   * the ica account has been registered
   */
  account_registered?: AccountRegisteredAmino;
  /**
   * tx_executed is the message which carries the success response after the ica
   * tx has been executed
   */
  tx_executed?: TxExecutedAmino;
}
export interface ICASuccessAminoMsg {
  type: "/archway.cwica.v1.ICASuccess";
  value: ICASuccessAmino;
}
/**
 * AccountRegistered is contains the address of the registered account on the
 * counterparty chain
 */
export interface AccountRegistered {
  /**
   * counterparty_address is the address of the account on the counterparty
   * chain
   */
  counterpartyAddress: string;
}
export interface AccountRegisteredProtoMsg {
  typeUrl: "/archway.cwica.v1.AccountRegistered";
  value: Uint8Array;
}
/**
 * AccountRegistered is contains the address of the registered account on the
 * counterparty chain
 */
export interface AccountRegisteredAmino {
  /**
   * counterparty_address is the address of the account on the counterparty
   * chain
   */
  counterparty_address?: string;
}
export interface AccountRegisteredAminoMsg {
  type: "/archway.cwica.v1.AccountRegistered";
  value: AccountRegisteredAmino;
}
/** TxExecuted is the response message after the execute of the ICA tx */
export interface TxExecuted {
  /** packet is the ibc packet which was executed */
  packet?: Packet;
  /** data is the response data after the tx has been executed */
  data: Uint8Array;
}
export interface TxExecutedProtoMsg {
  typeUrl: "/archway.cwica.v1.TxExecuted";
  value: Uint8Array;
}
/** TxExecuted is the response message after the execute of the ICA tx */
export interface TxExecutedAmino {
  /** packet is the ibc packet which was executed */
  packet?: PacketAmino;
  /** data is the response data after the tx has been executed */
  data?: string;
}
export interface TxExecutedAminoMsg {
  type: "/archway.cwica.v1.TxExecuted";
  value: TxExecutedAmino;
}
function createBaseSudoPayload(): SudoPayload {
  return {
    ica: undefined
  };
}
export const SudoPayload = {
  typeUrl: "/archway.cwica.v1.SudoPayload",
  encode(message: SudoPayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ica !== undefined) {
      ICASuccess.encode(message.ica, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoPayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ica = ICASuccess.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoPayload {
    return {
      ica: isSet(object.ica) ? ICASuccess.fromJSON(object.ica) : undefined
    };
  },
  toJSON(message: SudoPayload): JsonSafe<SudoPayload> {
    const obj: any = {};
    message.ica !== undefined && (obj.ica = message.ica ? ICASuccess.toJSON(message.ica) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SudoPayload>): SudoPayload {
    const message = createBaseSudoPayload();
    message.ica = object.ica !== undefined && object.ica !== null ? ICASuccess.fromPartial(object.ica) : undefined;
    return message;
  },
  fromAmino(object: SudoPayloadAmino): SudoPayload {
    const message = createBaseSudoPayload();
    if (object.ica !== undefined && object.ica !== null) {
      message.ica = ICASuccess.fromAmino(object.ica);
    }
    return message;
  },
  toAmino(message: SudoPayload): SudoPayloadAmino {
    const obj: any = {};
    obj.ica = message.ica ? ICASuccess.toAmino(message.ica) : undefined;
    return obj;
  },
  fromAminoMsg(object: SudoPayloadAminoMsg): SudoPayload {
    return SudoPayload.fromAmino(object.value);
  },
  fromProtoMsg(message: SudoPayloadProtoMsg): SudoPayload {
    return SudoPayload.decode(message.value);
  },
  toProto(message: SudoPayload): Uint8Array {
    return SudoPayload.encode(message).finish();
  },
  toProtoMsg(message: SudoPayload): SudoPayloadProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.SudoPayload",
      value: SudoPayload.encode(message).finish()
    };
  }
};
function createBaseICASuccess(): ICASuccess {
  return {
    accountRegistered: undefined,
    txExecuted: undefined
  };
}
export const ICASuccess = {
  typeUrl: "/archway.cwica.v1.ICASuccess",
  encode(message: ICASuccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountRegistered !== undefined) {
      AccountRegistered.encode(message.accountRegistered, writer.uint32(10).fork()).ldelim();
    }
    if (message.txExecuted !== undefined) {
      TxExecuted.encode(message.txExecuted, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICASuccess {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICASuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountRegistered = AccountRegistered.decode(reader, reader.uint32());
          break;
        case 2:
          message.txExecuted = TxExecuted.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ICASuccess {
    return {
      accountRegistered: isSet(object.accountRegistered) ? AccountRegistered.fromJSON(object.accountRegistered) : undefined,
      txExecuted: isSet(object.txExecuted) ? TxExecuted.fromJSON(object.txExecuted) : undefined
    };
  },
  toJSON(message: ICASuccess): JsonSafe<ICASuccess> {
    const obj: any = {};
    message.accountRegistered !== undefined && (obj.accountRegistered = message.accountRegistered ? AccountRegistered.toJSON(message.accountRegistered) : undefined);
    message.txExecuted !== undefined && (obj.txExecuted = message.txExecuted ? TxExecuted.toJSON(message.txExecuted) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ICASuccess>): ICASuccess {
    const message = createBaseICASuccess();
    message.accountRegistered = object.accountRegistered !== undefined && object.accountRegistered !== null ? AccountRegistered.fromPartial(object.accountRegistered) : undefined;
    message.txExecuted = object.txExecuted !== undefined && object.txExecuted !== null ? TxExecuted.fromPartial(object.txExecuted) : undefined;
    return message;
  },
  fromAmino(object: ICASuccessAmino): ICASuccess {
    const message = createBaseICASuccess();
    if (object.account_registered !== undefined && object.account_registered !== null) {
      message.accountRegistered = AccountRegistered.fromAmino(object.account_registered);
    }
    if (object.tx_executed !== undefined && object.tx_executed !== null) {
      message.txExecuted = TxExecuted.fromAmino(object.tx_executed);
    }
    return message;
  },
  toAmino(message: ICASuccess): ICASuccessAmino {
    const obj: any = {};
    obj.account_registered = message.accountRegistered ? AccountRegistered.toAmino(message.accountRegistered) : undefined;
    obj.tx_executed = message.txExecuted ? TxExecuted.toAmino(message.txExecuted) : undefined;
    return obj;
  },
  fromAminoMsg(object: ICASuccessAminoMsg): ICASuccess {
    return ICASuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: ICASuccessProtoMsg): ICASuccess {
    return ICASuccess.decode(message.value);
  },
  toProto(message: ICASuccess): Uint8Array {
    return ICASuccess.encode(message).finish();
  },
  toProtoMsg(message: ICASuccess): ICASuccessProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.ICASuccess",
      value: ICASuccess.encode(message).finish()
    };
  }
};
function createBaseAccountRegistered(): AccountRegistered {
  return {
    counterpartyAddress: ""
  };
}
export const AccountRegistered = {
  typeUrl: "/archway.cwica.v1.AccountRegistered",
  encode(message: AccountRegistered, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.counterpartyAddress !== "") {
      writer.uint32(10).string(message.counterpartyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountRegistered {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountRegistered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountRegistered {
    return {
      counterpartyAddress: isSet(object.counterpartyAddress) ? String(object.counterpartyAddress) : ""
    };
  },
  toJSON(message: AccountRegistered): JsonSafe<AccountRegistered> {
    const obj: any = {};
    message.counterpartyAddress !== undefined && (obj.counterpartyAddress = message.counterpartyAddress);
    return obj;
  },
  fromPartial(object: Partial<AccountRegistered>): AccountRegistered {
    const message = createBaseAccountRegistered();
    message.counterpartyAddress = object.counterpartyAddress ?? "";
    return message;
  },
  fromAmino(object: AccountRegisteredAmino): AccountRegistered {
    const message = createBaseAccountRegistered();
    if (object.counterparty_address !== undefined && object.counterparty_address !== null) {
      message.counterpartyAddress = object.counterparty_address;
    }
    return message;
  },
  toAmino(message: AccountRegistered): AccountRegisteredAmino {
    const obj: any = {};
    obj.counterparty_address = message.counterpartyAddress === "" ? undefined : message.counterpartyAddress;
    return obj;
  },
  fromAminoMsg(object: AccountRegisteredAminoMsg): AccountRegistered {
    return AccountRegistered.fromAmino(object.value);
  },
  fromProtoMsg(message: AccountRegisteredProtoMsg): AccountRegistered {
    return AccountRegistered.decode(message.value);
  },
  toProto(message: AccountRegistered): Uint8Array {
    return AccountRegistered.encode(message).finish();
  },
  toProtoMsg(message: AccountRegistered): AccountRegisteredProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.AccountRegistered",
      value: AccountRegistered.encode(message).finish()
    };
  }
};
function createBaseTxExecuted(): TxExecuted {
  return {
    packet: undefined,
    data: new Uint8Array()
  };
}
export const TxExecuted = {
  typeUrl: "/archway.cwica.v1.TxExecuted",
  encode(message: TxExecuted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxExecuted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxExecuted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxExecuted {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: TxExecuted): JsonSafe<TxExecuted> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<TxExecuted>): TxExecuted {
    const message = createBaseTxExecuted();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxExecutedAmino): TxExecuted {
    const message = createBaseTxExecuted();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: TxExecuted): TxExecutedAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxExecutedAminoMsg): TxExecuted {
    return TxExecuted.fromAmino(object.value);
  },
  fromProtoMsg(message: TxExecutedProtoMsg): TxExecuted {
    return TxExecuted.decode(message.value);
  },
  toProto(message: TxExecuted): Uint8Array {
    return TxExecuted.encode(message).finish();
  },
  toProtoMsg(message: TxExecuted): TxExecutedProtoMsg {
    return {
      typeUrl: "/archway.cwica.v1.TxExecuted",
      value: TxExecuted.encode(message).finish()
    };
  }
};