/* eslint-disable */
import { MsgSetContractMetadata, MsgWithdrawRewards, MsgSetFlatFee, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/archway.rewards.v1.MsgSetContractMetadata": {
    aminoType: "/archway.rewards.v1.MsgSetContractMetadata",
    toAmino: MsgSetContractMetadata.toAmino,
    fromAmino: MsgSetContractMetadata.fromAmino
  },
  "/archway.rewards.v1.MsgWithdrawRewards": {
    aminoType: "/archway.rewards.v1.MsgWithdrawRewards",
    toAmino: MsgWithdrawRewards.toAmino,
    fromAmino: MsgWithdrawRewards.fromAmino
  },
  "/archway.rewards.v1.MsgSetFlatFee": {
    aminoType: "/archway.rewards.v1.MsgSetFlatFee",
    toAmino: MsgSetFlatFee.toAmino,
    fromAmino: MsgSetFlatFee.fromAmino
  },
  "/archway.rewards.v1.MsgUpdateParams": {
    aminoType: "/archway.rewards.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};