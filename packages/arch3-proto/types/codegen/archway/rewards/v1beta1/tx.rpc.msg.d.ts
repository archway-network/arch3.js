import { Rpc } from "../../../helpers";
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
     * Rewards might be credited from multiple contracts (rewards_address must be set in the corresponding contract metadata).
     */
    withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
    /**
     * SetFlatFee sets or updates or removes the flat fee to interact with the contract
     * Method is authorized to the contract owner.
     */
    setFlatFee(request: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setContractMetadata(request: MsgSetContractMetadata): Promise<MsgSetContractMetadataResponse>;
    withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
    setFlatFee(request: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse>;
}
