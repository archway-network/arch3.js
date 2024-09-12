/* eslint-disable */
import { MsgRegisterAsGranter, MsgUnregisterAsGranter } from "./cwfees";
export const AminoConverter = {
  "/archway.cwfees.v1.MsgRegisterAsGranter": {
    aminoType: "/archway.cwfees.v1.MsgRegisterAsGranter",
    toAmino: MsgRegisterAsGranter.toAmino,
    fromAmino: MsgRegisterAsGranter.fromAmino
  },
  "/archway.cwfees.v1.MsgUnregisterAsGranter": {
    aminoType: "/archway.cwfees.v1.MsgUnregisterAsGranter",
    toAmino: MsgUnregisterAsGranter.toAmino,
    fromAmino: MsgUnregisterAsGranter.fromAmino
  }
};