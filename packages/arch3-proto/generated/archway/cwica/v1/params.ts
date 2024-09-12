/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** Params defines the parameters for the module. */
export interface Params {
  /** Defines maximum amount of messages which can be passed in MsgSendTx */
  msgSendTxMaxMessages: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/archway.cwica.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /** Defines maximum amount of messages which can be passed in MsgSendTx */
  msg_send_tx_max_messages?: string;
}
export interface ParamsAminoMsg {
  type: "/archway.cwica.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    msgSendTxMaxMessages: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/archway.cwica.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgSendTxMaxMessages !== BigInt(0)) {
      writer.uint32(8).uint64(message.msgSendTxMaxMessages);
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
          message.msgSendTxMaxMessages = reader.uint64();
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
      msgSendTxMaxMessages: isSet(object.msgSendTxMaxMessages) ? BigInt(object.msgSendTxMaxMessages.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.msgSendTxMaxMessages !== undefined && (obj.msgSendTxMaxMessages = (message.msgSendTxMaxMessages || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.msgSendTxMaxMessages = object.msgSendTxMaxMessages !== undefined && object.msgSendTxMaxMessages !== null ? BigInt(object.msgSendTxMaxMessages.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.msg_send_tx_max_messages !== undefined && object.msg_send_tx_max_messages !== null) {
      message.msgSendTxMaxMessages = BigInt(object.msg_send_tx_max_messages);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.msg_send_tx_max_messages = message.msgSendTxMaxMessages !== BigInt(0) ? message.msgSendTxMaxMessages.toString() : undefined;
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
      typeUrl: "/archway.cwica.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};