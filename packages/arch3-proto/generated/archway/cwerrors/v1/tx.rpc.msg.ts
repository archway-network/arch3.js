/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgSubscribeToError, MsgSubscribeToErrorResponse } from "./tx";
/** Msg defines the cwerrors Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/cwerrors
   * module parameters. The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SubscribeToError defines an operation which will register a contract for a
   * sudo callback on errors
   */
  subscribeToError(request: MsgSubscribeToError): Promise<MsgSubscribeToErrorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.subscribeToError = this.subscribeToError.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("archway.cwerrors.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  subscribeToError(request: MsgSubscribeToError): Promise<MsgSubscribeToErrorResponse> {
    const data = MsgSubscribeToError.encode(request).finish();
    const promise = this.rpc.request("archway.cwerrors.v1.Msg", "SubscribeToError", data);
    return promise.then(data => MsgSubscribeToErrorResponse.decode(new BinaryReader(data)));
  }
}