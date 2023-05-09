/* eslint-disable */
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetContractMetadata, MsgSetContractMetadataResponse, MsgWithdrawRewards, MsgWithdrawRewardsResponse, MsgSetFlatFee, MsgSetFlatFeeResponse } from "./tx";
/** Msg defines the module messaging service. */
export interface Msg {
  /**
   * SetContractMetadata creates or updates an existing contract metadata.
   * Method is authorized to the contract owner (admin if no metadata exists).
   */
  setContractMetadata(request: MsgSetContractMetadata): Promise<MsgSetContractMetadataResponse>;
  /**
   * WithdrawRewards performs collected rewards distribution.
   * Rewards might be credited from multiple contracts (rewards_address must be
   * set in the corresponding contract metadata).
   */
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
  /**
   * SetFlatFee sets or updates or removes the flat fee to interact with the
   * contract Method is authorized to the contract owner.
   */
  setFlatFee(request: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.setContractMetadata = this.setContractMetadata.bind(this);
    this.withdrawRewards = this.withdrawRewards.bind(this);
    this.setFlatFee = this.setFlatFee.bind(this);
  }
  setContractMetadata(request: MsgSetContractMetadata): Promise<MsgSetContractMetadataResponse> {
    const data = MsgSetContractMetadata.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1.Msg", "SetContractMetadata", data);
    return promise.then(data => MsgSetContractMetadataResponse.decode(new _m0.Reader(data)));
  }
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse> {
    const data = MsgWithdrawRewards.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1.Msg", "WithdrawRewards", data);
    return promise.then(data => MsgWithdrawRewardsResponse.decode(new _m0.Reader(data)));
  }
  setFlatFee(request: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse> {
    const data = MsgSetFlatFee.encode(request).finish();
    const promise = this.rpc.request("archway.rewards.v1.Msg", "SetFlatFee", data);
    return promise.then(data => MsgSetFlatFeeResponse.decode(new _m0.Reader(data)));
  }
}