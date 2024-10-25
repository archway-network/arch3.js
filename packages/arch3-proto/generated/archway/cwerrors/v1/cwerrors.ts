/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/** ModuleErrors defines the module level error codes */
export enum ModuleErrors {
  /** ERR_UNKNOWN - ERR_UNKNOWN is the default error code */
  ERR_UNKNOWN = 0,
  /** ERR_CALLBACK_EXECUTION_FAILED - ERR_CALLBACK_EXECUTION_FAILED is the error code for when the error callback fails */
  ERR_CALLBACK_EXECUTION_FAILED = 1,
  UNRECOGNIZED = -1,
}
export const ModuleErrorsAmino = ModuleErrors;
export function moduleErrorsFromJSON(object: any): ModuleErrors {
  switch (object) {
    case 0:
    case "ERR_UNKNOWN":
      return ModuleErrors.ERR_UNKNOWN;
    case 1:
    case "ERR_CALLBACK_EXECUTION_FAILED":
      return ModuleErrors.ERR_CALLBACK_EXECUTION_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModuleErrors.UNRECOGNIZED;
  }
}
export function moduleErrorsToJSON(object: ModuleErrors): string {
  switch (object) {
    case ModuleErrors.ERR_UNKNOWN:
      return "ERR_UNKNOWN";
    case ModuleErrors.ERR_CALLBACK_EXECUTION_FAILED:
      return "ERR_CALLBACK_EXECUTION_FAILED";
    case ModuleErrors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SudoError defines the sudo message for the error callback */
export interface SudoError {
  /** module_name is the name of the module throwing the error */
  moduleName: string;
  /** error_code is the module level error code */
  errorCode: number;
  /**
   * contract_address is the address of the contract which will receive the
   * error callback
   */
  contractAddress: string;
  /** input_payload is any input which caused the error */
  inputPayload: string;
  /** error_message is the error message */
  errorMessage: string;
}
export interface SudoErrorProtoMsg {
  typeUrl: "/archway.cwerrors.v1.SudoError";
  value: Uint8Array;
}
/** SudoError defines the sudo message for the error callback */
export interface SudoErrorAmino {
  /** module_name is the name of the module throwing the error */
  module_name?: string;
  /** error_code is the module level error code */
  error_code?: number;
  /**
   * contract_address is the address of the contract which will receive the
   * error callback
   */
  contract_address?: string;
  /** input_payload is any input which caused the error */
  input_payload?: string;
  /** error_message is the error message */
  error_message?: string;
}
export interface SudoErrorAminoMsg {
  type: "/archway.cwerrors.v1.SudoError";
  value: SudoErrorAmino;
}
function createBaseSudoError(): SudoError {
  return {
    moduleName: "",
    errorCode: 0,
    contractAddress: "",
    inputPayload: "",
    errorMessage: ""
  };
}
export const SudoError = {
  typeUrl: "/archway.cwerrors.v1.SudoError",
  encode(message: SudoError, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).int32(message.errorCode);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.inputPayload !== "") {
      writer.uint32(34).string(message.inputPayload);
    }
    if (message.errorMessage !== "") {
      writer.uint32(42).string(message.errorMessage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoError {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.errorCode = reader.int32();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.inputPayload = reader.string();
          break;
        case 5:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoError {
    return {
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
      errorCode: isSet(object.errorCode) ? Number(object.errorCode) : 0,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      inputPayload: isSet(object.inputPayload) ? String(object.inputPayload) : "",
      errorMessage: isSet(object.errorMessage) ? String(object.errorMessage) : ""
    };
  },
  toJSON(message: SudoError): JsonSafe<SudoError> {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.errorCode !== undefined && (obj.errorCode = Math.round(message.errorCode));
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.inputPayload !== undefined && (obj.inputPayload = message.inputPayload);
    message.errorMessage !== undefined && (obj.errorMessage = message.errorMessage);
    return obj;
  },
  fromPartial(object: Partial<SudoError>): SudoError {
    const message = createBaseSudoError();
    message.moduleName = object.moduleName ?? "";
    message.errorCode = object.errorCode ?? 0;
    message.contractAddress = object.contractAddress ?? "";
    message.inputPayload = object.inputPayload ?? "";
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
  fromAmino(object: SudoErrorAmino): SudoError {
    const message = createBaseSudoError();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    if (object.error_code !== undefined && object.error_code !== null) {
      message.errorCode = object.error_code;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.input_payload !== undefined && object.input_payload !== null) {
      message.inputPayload = object.input_payload;
    }
    if (object.error_message !== undefined && object.error_message !== null) {
      message.errorMessage = object.error_message;
    }
    return message;
  },
  toAmino(message: SudoError): SudoErrorAmino {
    const obj: any = {};
    obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
    obj.error_code = message.errorCode === 0 ? undefined : message.errorCode;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.input_payload = message.inputPayload === "" ? undefined : message.inputPayload;
    obj.error_message = message.errorMessage === "" ? undefined : message.errorMessage;
    return obj;
  },
  fromAminoMsg(object: SudoErrorAminoMsg): SudoError {
    return SudoError.fromAmino(object.value);
  },
  fromProtoMsg(message: SudoErrorProtoMsg): SudoError {
    return SudoError.decode(message.value);
  },
  toProto(message: SudoError): Uint8Array {
    return SudoError.encode(message).finish();
  },
  toProtoMsg(message: SudoError): SudoErrorProtoMsg {
    return {
      typeUrl: "/archway.cwerrors.v1.SudoError",
      value: SudoError.encode(message).finish()
    };
  }
};