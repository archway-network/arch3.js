/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgSubscribeToError } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/archway.cwerrors.v1.MsgUpdateParams", MsgUpdateParams], ["/archway.cwerrors.v1.MsgSubscribeToError", MsgSubscribeToError]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    subscribeToError(value: MsgSubscribeToError) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
        value: MsgSubscribeToError.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
        value
      };
    },
    subscribeToError(value: MsgSubscribeToError) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    subscribeToError(value: MsgSubscribeToError) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
        value: MsgSubscribeToError.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    subscribeToError(value: any) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
        value: MsgSubscribeToError.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    subscribeToError(value: MsgSubscribeToError) {
      return {
        typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
        value: MsgSubscribeToError.fromPartial(value)
      };
    }
  }
};