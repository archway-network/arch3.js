/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgRequestCallback, MsgCancelCallback } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/archway.callback.v1.MsgUpdateParams", MsgUpdateParams], ["/archway.callback.v1.MsgRequestCallback", MsgRequestCallback], ["/archway.callback.v1.MsgCancelCallback", MsgCancelCallback]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.callback.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    requestCallback(value: MsgRequestCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgRequestCallback",
        value: MsgRequestCallback.encode(value).finish()
      };
    },
    cancelCallback(value: MsgCancelCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgCancelCallback",
        value: MsgCancelCallback.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.callback.v1.MsgUpdateParams",
        value
      };
    },
    requestCallback(value: MsgRequestCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgRequestCallback",
        value
      };
    },
    cancelCallback(value: MsgCancelCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgCancelCallback",
        value
      };
    }
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.callback.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    requestCallback(value: MsgRequestCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgRequestCallback",
        value: MsgRequestCallback.toJSON(value)
      };
    },
    cancelCallback(value: MsgCancelCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgCancelCallback",
        value: MsgCancelCallback.toJSON(value)
      };
    }
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/archway.callback.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    requestCallback(value: any) {
      return {
        typeUrl: "/archway.callback.v1.MsgRequestCallback",
        value: MsgRequestCallback.fromJSON(value)
      };
    },
    cancelCallback(value: any) {
      return {
        typeUrl: "/archway.callback.v1.MsgCancelCallback",
        value: MsgCancelCallback.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.callback.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    requestCallback(value: MsgRequestCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgRequestCallback",
        value: MsgRequestCallback.fromPartial(value)
      };
    },
    cancelCallback(value: MsgCancelCallback) {
      return {
        typeUrl: "/archway.callback.v1.MsgCancelCallback",
        value: MsgCancelCallback.fromPartial(value)
      };
    }
  }
};