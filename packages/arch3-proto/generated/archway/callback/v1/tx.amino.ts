/* eslint-disable */
import { MsgUpdateParams, MsgRequestCallback, MsgCancelCallback } from "./tx";
export const AminoConverter = {
  "/archway.callback.v1.MsgUpdateParams": {
    aminoType: "/archway.callback.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/archway.callback.v1.MsgRequestCallback": {
    aminoType: "/archway.callback.v1.MsgRequestCallback",
    toAmino: MsgRequestCallback.toAmino,
    fromAmino: MsgRequestCallback.fromAmino
  },
  "/archway.callback.v1.MsgCancelCallback": {
    aminoType: "/archway.callback.v1.MsgCancelCallback",
    toAmino: MsgCancelCallback.toAmino,
    fromAmino: MsgCancelCallback.fromAmino
  }
};