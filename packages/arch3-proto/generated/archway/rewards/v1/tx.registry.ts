/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetContractMetadata, MsgWithdrawRewards, MsgSetFlatFee } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/archway.rewards.v1.MsgSetContractMetadata", MsgSetContractMetadata], ["/archway.rewards.v1.MsgWithdrawRewards", MsgWithdrawRewards], ["/archway.rewards.v1.MsgSetFlatFee", MsgSetFlatFee]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.encode(value).finish()
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.encode(value).finish()
      };
    },
    setFlatFee(value: MsgSetFlatFee) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
        value: MsgSetFlatFee.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
        value
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
        value
      };
    },
    setFlatFee(value: MsgSetFlatFee) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
        value
      };
    }
  },
  toJSON: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.toJSON(value)
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.toJSON(value)
      };
    },
    setFlatFee(value: MsgSetFlatFee) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
        value: MsgSetFlatFee.toJSON(value)
      };
    }
  },
  fromJSON: {
    setContractMetadata(value: any) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.fromJSON(value)
      };
    },
    withdrawRewards(value: any) {
      return {
        typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromJSON(value)
      };
    },
    setFlatFee(value: any) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
        value: MsgSetFlatFee.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setContractMetadata(value: MsgSetContractMetadata) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
        value: MsgSetContractMetadata.fromPartial(value)
      };
    },
    withdrawRewards(value: MsgWithdrawRewards) {
      return {
        typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
        value: MsgWithdrawRewards.fromPartial(value)
      };
    },
    setFlatFee(value: MsgSetFlatFee) {
      return {
        typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
        value: MsgSetFlatFee.fromPartial(value)
      };
    }
  }
};