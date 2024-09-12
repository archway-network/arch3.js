/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterAsGranter, MsgUnregisterAsGranter } from "./cwfees";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/archway.cwfees.v1.MsgRegisterAsGranter", MsgRegisterAsGranter], ["/archway.cwfees.v1.MsgUnregisterAsGranter", MsgUnregisterAsGranter]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerAsGranter(value: MsgRegisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
        value: MsgRegisterAsGranter.encode(value).finish()
      };
    },
    unregisterAsGranter(value: MsgUnregisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
        value: MsgUnregisterAsGranter.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerAsGranter(value: MsgRegisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
        value
      };
    },
    unregisterAsGranter(value: MsgUnregisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
        value
      };
    }
  },
  toJSON: {
    registerAsGranter(value: MsgRegisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
        value: MsgRegisterAsGranter.toJSON(value)
      };
    },
    unregisterAsGranter(value: MsgUnregisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
        value: MsgUnregisterAsGranter.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerAsGranter(value: any) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
        value: MsgRegisterAsGranter.fromJSON(value)
      };
    },
    unregisterAsGranter(value: any) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
        value: MsgUnregisterAsGranter.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerAsGranter(value: MsgRegisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
        value: MsgRegisterAsGranter.fromPartial(value)
      };
    },
    unregisterAsGranter(value: MsgUnregisterAsGranter) {
      return {
        typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
        value: MsgUnregisterAsGranter.fromPartial(value)
      };
    }
  }
};