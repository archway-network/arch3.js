import { Rpc } from "../../../helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgDeposit, MsgDepositResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /** SubmitProposal defines a method to create new proposal given a content. */
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    /** Vote defines a method to add a vote on a specific proposal. */
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    /** Deposit defines a method to add deposit on a specific proposal. */
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
