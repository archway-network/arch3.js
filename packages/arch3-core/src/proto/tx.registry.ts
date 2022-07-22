import { ContractInstanceMetadata } from "./types";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetContractMetadata } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/archway.gastracker.v1.MsgSetContractMetadata", MsgSetContractMetadata]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        type_url: "/archway.gastracker.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata",
        value
      };
    }

  },
  toJSON: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.toJSON(value)
      };
    }

  },
  fromJSON: {
    setContractMetadata(value: any) {
      return {
        typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.fromJSON(value)
      };
    }

  },
  fromPartial: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.fromPartial(value)
      };
    }

  }
};