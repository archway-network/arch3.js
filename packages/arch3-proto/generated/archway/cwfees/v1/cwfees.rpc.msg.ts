/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterAsGranter, MsgRegisterAsGranterResponse, MsgUnregisterAsGranter, MsgUnregisterAsGranterResponse } from "./cwfees";
export interface Msg {
  /** RegisterAsGranter allows a cosmwasm contract to register itself as a fee granter. */
  registerAsGranter(request: MsgRegisterAsGranter): Promise<MsgRegisterAsGranterResponse>;
  /** UnregisterAsGranter allows a cosmwasm contract to unregister itself as a fee granter. */
  unregisterAsGranter(request: MsgUnregisterAsGranter): Promise<MsgUnregisterAsGranterResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerAsGranter = this.registerAsGranter.bind(this);
    this.unregisterAsGranter = this.unregisterAsGranter.bind(this);
  }
  registerAsGranter(request: MsgRegisterAsGranter): Promise<MsgRegisterAsGranterResponse> {
    const data = MsgRegisterAsGranter.encode(request).finish();
    const promise = this.rpc.request("archway.cwfees.v1.Msg", "RegisterAsGranter", data);
    return promise.then(data => MsgRegisterAsGranterResponse.decode(new BinaryReader(data)));
  }
  unregisterAsGranter(request: MsgUnregisterAsGranter): Promise<MsgUnregisterAsGranterResponse> {
    const data = MsgUnregisterAsGranter.encode(request).finish();
    const promise = this.rpc.request("archway.cwfees.v1.Msg", "UnregisterAsGranter", data);
    return promise.then(data => MsgUnregisterAsGranterResponse.decode(new BinaryReader(data)));
  }
}