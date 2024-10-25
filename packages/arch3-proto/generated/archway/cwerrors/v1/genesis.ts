/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { SudoError, SudoErrorAmino } from "./cwerrors";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** GenesisState defines the cwerrors module's genesis state. */
export interface GenesisState {
  /** params defines all the module parameters. */
  params: Params;
  /** errors defines all the sudo errors currently registered. */
  errors: SudoError[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/archway.cwerrors.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the cwerrors module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the module parameters. */
  params?: ParamsAmino;
  /** errors defines all the sudo errors currently registered. */
  errors?: SudoErrorAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/archway.cwerrors.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    errors: []
  };
}
export const GenesisState = {
  typeUrl: "/archway.cwerrors.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.errors) {
      SudoError.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.errors.push(SudoError.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      errors: Array.isArray(object?.errors) ? object.errors.map((e: any) => SudoError.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? SudoError.toJSON(e) : undefined);
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.errors = object.errors?.map(e => SudoError.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.errors = object.errors?.map(e => SudoError.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.errors) {
      obj.errors = message.errors.map(e => e ? SudoError.toAmino(e) : undefined);
    } else {
      obj.errors = message.errors;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};