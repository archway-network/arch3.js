/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgRequestCallback, MsgRequestCallbackResponse, MsgCancelCallback, MsgCancelCallbackResponse } from "./tx";
/** Msg defines the module messaging service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/callback
   * module parameters. The authority is defined in the keeper.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** RequestCallback defines a message for registering a callback at a specific height by a given contract */
  requestCallback(request: MsgRequestCallback): Promise<MsgRequestCallbackResponse>;
  /** CancelCallback defines a message for cancelling an existing callback */
  cancelCallback(request: MsgCancelCallback): Promise<MsgCancelCallbackResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.updateParams = this.updateParams.bind(this);
    this.requestCallback = this.requestCallback.bind(this);
    this.cancelCallback = this.cancelCallback.bind(this);
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("archway.callback.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  requestCallback(request: MsgRequestCallback): Promise<MsgRequestCallbackResponse> {
    const data = MsgRequestCallback.encode(request).finish();
    const promise = this.rpc.request("archway.callback.v1.Msg", "RequestCallback", data);
    return promise.then(data => MsgRequestCallbackResponse.decode(new BinaryReader(data)));
  }
  cancelCallback(request: MsgCancelCallback): Promise<MsgCancelCallbackResponse> {
    const data = MsgCancelCallback.encode(request).finish();
    const promise = this.rpc.request("archway.callback.v1.Msg", "CancelCallback", data);
    return promise.then(data => MsgCancelCallbackResponse.decode(new BinaryReader(data)));
  }
}