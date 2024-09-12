/* eslint-disable */
import { MsgUpdateParams, MsgSubscribeToError } from "./tx";
export const AminoConverter = {
  "/archway.cwerrors.v1.MsgUpdateParams": {
    aminoType: "/archway.cwerrors.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/archway.cwerrors.v1.MsgSubscribeToError": {
    aminoType: "/archway.cwerrors.v1.MsgSubscribeToError",
    toAmino: MsgSubscribeToError.toAmino,
    fromAmino: MsgSubscribeToError.fromAmino
  }
};