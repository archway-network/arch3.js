/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** MsgRegisterAsGranter allows a contract to register itself as a fee granter. */
export interface MsgRegisterAsGranter {
  grantingContract: string;
}
export interface MsgRegisterAsGranterProtoMsg {
  typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter";
  value: Uint8Array;
}
/** MsgRegisterAsGranter allows a contract to register itself as a fee granter. */
export interface MsgRegisterAsGranterAmino {
  granting_contract?: string;
}
export interface MsgRegisterAsGranterAminoMsg {
  type: "/archway.cwfees.v1.MsgRegisterAsGranter";
  value: MsgRegisterAsGranterAmino;
}
/** MsgRegisterAsGranterResponse defines the response of RegisterAsGranter. */
export interface MsgRegisterAsGranterResponse {}
export interface MsgRegisterAsGranterResponseProtoMsg {
  typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranterResponse";
  value: Uint8Array;
}
/** MsgRegisterAsGranterResponse defines the response of RegisterAsGranter. */
export interface MsgRegisterAsGranterResponseAmino {}
export interface MsgRegisterAsGranterResponseAminoMsg {
  type: "/archway.cwfees.v1.MsgRegisterAsGranterResponse";
  value: MsgRegisterAsGranterResponseAmino;
}
/** MsgUnregisterAsGranter can be used by a cosmwasm contract to unregister itself as a fee granter. */
export interface MsgUnregisterAsGranter {
  grantingContract: string;
}
export interface MsgUnregisterAsGranterProtoMsg {
  typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter";
  value: Uint8Array;
}
/** MsgUnregisterAsGranter can be used by a cosmwasm contract to unregister itself as a fee granter. */
export interface MsgUnregisterAsGranterAmino {
  granting_contract?: string;
}
export interface MsgUnregisterAsGranterAminoMsg {
  type: "/archway.cwfees.v1.MsgUnregisterAsGranter";
  value: MsgUnregisterAsGranterAmino;
}
/** MsgUnregisterAsGranterResponse defines the response of UnregisterAsGranter. */
export interface MsgUnregisterAsGranterResponse {}
export interface MsgUnregisterAsGranterResponseProtoMsg {
  typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranterResponse";
  value: Uint8Array;
}
/** MsgUnregisterAsGranterResponse defines the response of UnregisterAsGranter. */
export interface MsgUnregisterAsGranterResponseAmino {}
export interface MsgUnregisterAsGranterResponseAminoMsg {
  type: "/archway.cwfees.v1.MsgUnregisterAsGranterResponse";
  value: MsgUnregisterAsGranterResponseAmino;
}
/** IsGrantingContract is the request type of IsGrantingContract RPC. */
export interface IsGrantingContractRequest {
  /**
   * contract_address defines the address of the contract
   * which we want to check if it is a granter or not.
   */
  contractAddress: string;
}
export interface IsGrantingContractRequestProtoMsg {
  typeUrl: "/archway.cwfees.v1.IsGrantingContractRequest";
  value: Uint8Array;
}
/** IsGrantingContract is the request type of IsGrantingContract RPC. */
export interface IsGrantingContractRequestAmino {
  /**
   * contract_address defines the address of the contract
   * which we want to check if it is a granter or not.
   */
  contract_address?: string;
}
export interface IsGrantingContractRequestAminoMsg {
  type: "/archway.cwfees.v1.IsGrantingContractRequest";
  value: IsGrantingContractRequestAmino;
}
/** IsGrantingContractResponse is the response type of IsGRantingContract RPC. */
export interface IsGrantingContractResponse {
  /** is_granting_contract report if the contract is a granter or not. */
  isGrantingContract: boolean;
}
export interface IsGrantingContractResponseProtoMsg {
  typeUrl: "/archway.cwfees.v1.IsGrantingContractResponse";
  value: Uint8Array;
}
/** IsGrantingContractResponse is the response type of IsGRantingContract RPC. */
export interface IsGrantingContractResponseAmino {
  /** is_granting_contract report if the contract is a granter or not. */
  is_granting_contract?: boolean;
}
export interface IsGrantingContractResponseAminoMsg {
  type: "/archway.cwfees.v1.IsGrantingContractResponse";
  value: IsGrantingContractResponseAmino;
}
/** GenesisState represents the genesis state of the cwfeesant module. */
export interface GenesisState {
  grantingContracts: string[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/archway.cwfees.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState represents the genesis state of the cwfeesant module. */
export interface GenesisStateAmino {
  granting_contracts?: string[];
}
export interface GenesisStateAminoMsg {
  type: "/archway.cwfees.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseMsgRegisterAsGranter(): MsgRegisterAsGranter {
  return {
    grantingContract: ""
  };
}
export const MsgRegisterAsGranter = {
  typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
  encode(message: MsgRegisterAsGranter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantingContract !== "") {
      writer.uint32(10).string(message.grantingContract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAsGranter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsGranter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantingContract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterAsGranter {
    return {
      grantingContract: isSet(object.grantingContract) ? String(object.grantingContract) : ""
    };
  },
  toJSON(message: MsgRegisterAsGranter): JsonSafe<MsgRegisterAsGranter> {
    const obj: any = {};
    message.grantingContract !== undefined && (obj.grantingContract = message.grantingContract);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterAsGranter>): MsgRegisterAsGranter {
    const message = createBaseMsgRegisterAsGranter();
    message.grantingContract = object.grantingContract ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterAsGranterAmino): MsgRegisterAsGranter {
    const message = createBaseMsgRegisterAsGranter();
    if (object.granting_contract !== undefined && object.granting_contract !== null) {
      message.grantingContract = object.granting_contract;
    }
    return message;
  },
  toAmino(message: MsgRegisterAsGranter): MsgRegisterAsGranterAmino {
    const obj: any = {};
    obj.granting_contract = message.grantingContract === "" ? undefined : message.grantingContract;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAsGranterAminoMsg): MsgRegisterAsGranter {
    return MsgRegisterAsGranter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAsGranterProtoMsg): MsgRegisterAsGranter {
    return MsgRegisterAsGranter.decode(message.value);
  },
  toProto(message: MsgRegisterAsGranter): Uint8Array {
    return MsgRegisterAsGranter.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAsGranter): MsgRegisterAsGranterProtoMsg {
    return {
      typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
      value: MsgRegisterAsGranter.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterAsGranterResponse(): MsgRegisterAsGranterResponse {
  return {};
}
export const MsgRegisterAsGranterResponse = {
  typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranterResponse",
  encode(_: MsgRegisterAsGranterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterAsGranterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsGranterResponse();
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
  fromJSON(_: any): MsgRegisterAsGranterResponse {
    return {};
  },
  toJSON(_: MsgRegisterAsGranterResponse): JsonSafe<MsgRegisterAsGranterResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterAsGranterResponse>): MsgRegisterAsGranterResponse {
    const message = createBaseMsgRegisterAsGranterResponse();
    return message;
  },
  fromAmino(_: MsgRegisterAsGranterResponseAmino): MsgRegisterAsGranterResponse {
    const message = createBaseMsgRegisterAsGranterResponse();
    return message;
  },
  toAmino(_: MsgRegisterAsGranterResponse): MsgRegisterAsGranterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterAsGranterResponseAminoMsg): MsgRegisterAsGranterResponse {
    return MsgRegisterAsGranterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterAsGranterResponseProtoMsg): MsgRegisterAsGranterResponse {
    return MsgRegisterAsGranterResponse.decode(message.value);
  },
  toProto(message: MsgRegisterAsGranterResponse): Uint8Array {
    return MsgRegisterAsGranterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterAsGranterResponse): MsgRegisterAsGranterResponseProtoMsg {
    return {
      typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranterResponse",
      value: MsgRegisterAsGranterResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterAsGranter(): MsgUnregisterAsGranter {
  return {
    grantingContract: ""
  };
}
export const MsgUnregisterAsGranter = {
  typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
  encode(message: MsgUnregisterAsGranter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantingContract !== "") {
      writer.uint32(10).string(message.grantingContract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterAsGranter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterAsGranter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantingContract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnregisterAsGranter {
    return {
      grantingContract: isSet(object.grantingContract) ? String(object.grantingContract) : ""
    };
  },
  toJSON(message: MsgUnregisterAsGranter): JsonSafe<MsgUnregisterAsGranter> {
    const obj: any = {};
    message.grantingContract !== undefined && (obj.grantingContract = message.grantingContract);
    return obj;
  },
  fromPartial(object: Partial<MsgUnregisterAsGranter>): MsgUnregisterAsGranter {
    const message = createBaseMsgUnregisterAsGranter();
    message.grantingContract = object.grantingContract ?? "";
    return message;
  },
  fromAmino(object: MsgUnregisterAsGranterAmino): MsgUnregisterAsGranter {
    const message = createBaseMsgUnregisterAsGranter();
    if (object.granting_contract !== undefined && object.granting_contract !== null) {
      message.grantingContract = object.granting_contract;
    }
    return message;
  },
  toAmino(message: MsgUnregisterAsGranter): MsgUnregisterAsGranterAmino {
    const obj: any = {};
    obj.granting_contract = message.grantingContract === "" ? undefined : message.grantingContract;
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterAsGranterAminoMsg): MsgUnregisterAsGranter {
    return MsgUnregisterAsGranter.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterAsGranterProtoMsg): MsgUnregisterAsGranter {
    return MsgUnregisterAsGranter.decode(message.value);
  },
  toProto(message: MsgUnregisterAsGranter): Uint8Array {
    return MsgUnregisterAsGranter.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterAsGranter): MsgUnregisterAsGranterProtoMsg {
    return {
      typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
      value: MsgUnregisterAsGranter.encode(message).finish()
    };
  }
};
function createBaseMsgUnregisterAsGranterResponse(): MsgUnregisterAsGranterResponse {
  return {};
}
export const MsgUnregisterAsGranterResponse = {
  typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranterResponse",
  encode(_: MsgUnregisterAsGranterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterAsGranterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterAsGranterResponse();
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
  fromJSON(_: any): MsgUnregisterAsGranterResponse {
    return {};
  },
  toJSON(_: MsgUnregisterAsGranterResponse): JsonSafe<MsgUnregisterAsGranterResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUnregisterAsGranterResponse>): MsgUnregisterAsGranterResponse {
    const message = createBaseMsgUnregisterAsGranterResponse();
    return message;
  },
  fromAmino(_: MsgUnregisterAsGranterResponseAmino): MsgUnregisterAsGranterResponse {
    const message = createBaseMsgUnregisterAsGranterResponse();
    return message;
  },
  toAmino(_: MsgUnregisterAsGranterResponse): MsgUnregisterAsGranterResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnregisterAsGranterResponseAminoMsg): MsgUnregisterAsGranterResponse {
    return MsgUnregisterAsGranterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnregisterAsGranterResponseProtoMsg): MsgUnregisterAsGranterResponse {
    return MsgUnregisterAsGranterResponse.decode(message.value);
  },
  toProto(message: MsgUnregisterAsGranterResponse): Uint8Array {
    return MsgUnregisterAsGranterResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnregisterAsGranterResponse): MsgUnregisterAsGranterResponseProtoMsg {
    return {
      typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranterResponse",
      value: MsgUnregisterAsGranterResponse.encode(message).finish()
    };
  }
};
function createBaseIsGrantingContractRequest(): IsGrantingContractRequest {
  return {
    contractAddress: ""
  };
}
export const IsGrantingContractRequest = {
  typeUrl: "/archway.cwfees.v1.IsGrantingContractRequest",
  encode(message: IsGrantingContractRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsGrantingContractRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsGrantingContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IsGrantingContractRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: IsGrantingContractRequest): JsonSafe<IsGrantingContractRequest> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<IsGrantingContractRequest>): IsGrantingContractRequest {
    const message = createBaseIsGrantingContractRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: IsGrantingContractRequestAmino): IsGrantingContractRequest {
    const message = createBaseIsGrantingContractRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: IsGrantingContractRequest): IsGrantingContractRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: IsGrantingContractRequestAminoMsg): IsGrantingContractRequest {
    return IsGrantingContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: IsGrantingContractRequestProtoMsg): IsGrantingContractRequest {
    return IsGrantingContractRequest.decode(message.value);
  },
  toProto(message: IsGrantingContractRequest): Uint8Array {
    return IsGrantingContractRequest.encode(message).finish();
  },
  toProtoMsg(message: IsGrantingContractRequest): IsGrantingContractRequestProtoMsg {
    return {
      typeUrl: "/archway.cwfees.v1.IsGrantingContractRequest",
      value: IsGrantingContractRequest.encode(message).finish()
    };
  }
};
function createBaseIsGrantingContractResponse(): IsGrantingContractResponse {
  return {
    isGrantingContract: false
  };
}
export const IsGrantingContractResponse = {
  typeUrl: "/archway.cwfees.v1.IsGrantingContractResponse",
  encode(message: IsGrantingContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.isGrantingContract === true) {
      writer.uint32(8).bool(message.isGrantingContract);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IsGrantingContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsGrantingContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isGrantingContract = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IsGrantingContractResponse {
    return {
      isGrantingContract: isSet(object.isGrantingContract) ? Boolean(object.isGrantingContract) : false
    };
  },
  toJSON(message: IsGrantingContractResponse): JsonSafe<IsGrantingContractResponse> {
    const obj: any = {};
    message.isGrantingContract !== undefined && (obj.isGrantingContract = message.isGrantingContract);
    return obj;
  },
  fromPartial(object: Partial<IsGrantingContractResponse>): IsGrantingContractResponse {
    const message = createBaseIsGrantingContractResponse();
    message.isGrantingContract = object.isGrantingContract ?? false;
    return message;
  },
  fromAmino(object: IsGrantingContractResponseAmino): IsGrantingContractResponse {
    const message = createBaseIsGrantingContractResponse();
    if (object.is_granting_contract !== undefined && object.is_granting_contract !== null) {
      message.isGrantingContract = object.is_granting_contract;
    }
    return message;
  },
  toAmino(message: IsGrantingContractResponse): IsGrantingContractResponseAmino {
    const obj: any = {};
    obj.is_granting_contract = message.isGrantingContract === false ? undefined : message.isGrantingContract;
    return obj;
  },
  fromAminoMsg(object: IsGrantingContractResponseAminoMsg): IsGrantingContractResponse {
    return IsGrantingContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: IsGrantingContractResponseProtoMsg): IsGrantingContractResponse {
    return IsGrantingContractResponse.decode(message.value);
  },
  toProto(message: IsGrantingContractResponse): Uint8Array {
    return IsGrantingContractResponse.encode(message).finish();
  },
  toProtoMsg(message: IsGrantingContractResponse): IsGrantingContractResponseProtoMsg {
    return {
      typeUrl: "/archway.cwfees.v1.IsGrantingContractResponse",
      value: IsGrantingContractResponse.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    grantingContracts: []
  };
}
export const GenesisState = {
  typeUrl: "/archway.cwfees.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.grantingContracts) {
      writer.uint32(10).string(v!);
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
          message.grantingContracts.push(reader.string());
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
      grantingContracts: Array.isArray(object?.grantingContracts) ? object.grantingContracts.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.grantingContracts) {
      obj.grantingContracts = message.grantingContracts.map(e => e);
    } else {
      obj.grantingContracts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.grantingContracts = object.grantingContracts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.grantingContracts = object.granting_contracts?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.grantingContracts) {
      obj.granting_contracts = message.grantingContracts.map(e => e);
    } else {
      obj.granting_contracts = message.grantingContracts;
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
      typeUrl: "/archway.cwfees.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};