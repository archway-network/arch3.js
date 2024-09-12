/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/archway.cwica.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount], ["/archway.cwica.v1.MsgSendTx", MsgSendTx], ["/archway.cwica.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.encode(value).finish()
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/archway.cwica.v1.MsgSendTx",
        value: MsgSendTx.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwica.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
        value
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/archway.cwica.v1.MsgSendTx",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwica.v1.MsgUpdateParams",
        value
      };
    }
  },
  toJSON: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.toJSON(value)
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/archway.cwica.v1.MsgSendTx",
        value: MsgSendTx.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwica.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    }
  },
  fromJSON: {
    registerInterchainAccount(value: any) {
      return {
        typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromJSON(value)
      };
    },
    sendTx(value: any) {
      return {
        typeUrl: "/archway.cwica.v1.MsgSendTx",
        value: MsgSendTx.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/archway.cwica.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromPartial(value)
      };
    },
    sendTx(value: MsgSendTx) {
      return {
        typeUrl: "/archway.cwica.v1.MsgSendTx",
        value: MsgSendTx.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/archway.cwica.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};