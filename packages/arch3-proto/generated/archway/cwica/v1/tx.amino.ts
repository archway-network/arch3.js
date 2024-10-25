/* eslint-disable */
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export const AminoConverter = {
  "/archway.cwica.v1.MsgRegisterInterchainAccount": {
    aminoType: "/archway.cwica.v1.MsgRegisterInterchainAccount",
    toAmino: MsgRegisterInterchainAccount.toAmino,
    fromAmino: MsgRegisterInterchainAccount.fromAmino
  },
  "/archway.cwica.v1.MsgSendTx": {
    aminoType: "/archway.cwica.v1.MsgSendTx",
    toAmino: MsgSendTx.toAmino,
    fromAmino: MsgSendTx.fromAmino
  },
  "/archway.cwica.v1.MsgUpdateParams": {
    aminoType: "cwica/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  }
};