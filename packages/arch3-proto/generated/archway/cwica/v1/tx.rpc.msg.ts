/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** RegisterInterchainAccount registers an account on the counterparty chain. */
  registerInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse>;
  /** SendTx submits a transaction with msgs to the counterparty chain. */
  sendTx(request: MsgSendTx): Promise<MsgSendTxResponse>;
  /** UpdateParams updates the cwica module parameters. */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
    this.sendTx = this.sendTx.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  registerInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("archway.cwica.v1.Msg", "RegisterInterchainAccount", data);
    return promise.then(data => MsgRegisterInterchainAccountResponse.decode(new BinaryReader(data)));
  }
  sendTx(request: MsgSendTx): Promise<MsgSendTxResponse> {
    const data = MsgSendTx.encode(request).finish();
    const promise = this.rpc.request("archway.cwica.v1.Msg", "SendTx", data);
    return promise.then(data => MsgSendTxResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("archway.cwica.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}