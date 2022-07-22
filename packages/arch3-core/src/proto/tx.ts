import { ContractInstanceMetadata } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** Request to set contract metadata */
export interface MsgSetContractMetadata {
  sender: string;
  contractAddress: string;
  metadata: ContractInstanceMetadata;
}

/** Response returned in rpc call of SetContractMetadata */
export interface MsgSetContractMetadataResponse {}

function createBaseMsgSetContractMetadata(): MsgSetContractMetadata {
  return {
    sender: "",
    contractAddress: "",
    metadata: undefined
  };
}

export const MsgSetContractMetadata = {
  encode(message: MsgSetContractMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    if (message.metadata !== undefined) {
      ContractInstanceMetadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
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
          message.sender = reader.string();
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        case 3:
          message.metadata = ContractInstanceMetadata.decode(reader, reader.uint32());
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
      sender: isSet(object.sender) ? String(object.sender) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      metadata: isSet(object.metadata) ? ContractInstanceMetadata.fromJSON(object.metadata) : undefined
    };
  },

  toJSON(message: MsgSetContractMetadata): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata ? ContractInstanceMetadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetContractMetadata>): MsgSetContractMetadata {
    const message = createBaseMsgSetContractMetadata();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? ContractInstanceMetadata.fromPartial(object.metadata) : undefined;
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

  fromPartial(_: DeepPartial<MsgSetContractMetadataResponse>): MsgSetContractMetadataResponse {
    const message = createBaseMsgSetContractMetadataResponse();
    return message;
  }

};