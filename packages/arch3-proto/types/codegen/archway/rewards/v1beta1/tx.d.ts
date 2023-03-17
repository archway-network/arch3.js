import { ContractMetadata, ContractMetadataSDKType } from "./rewards";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */
export interface MsgSetContractMetadata {
    /** sender_address is the msg sender address (bech32 encoded). */
    senderAddress: string;
    /**
     * metadata is the contract metadata to set / update.
     * If metadata exists, non-empty fields will be updated.
     */
    metadata?: ContractMetadata;
}
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataSDKType {
    /** sender_address is the msg sender address (bech32 encoded). */
    sender_address: string;
    /**
     * metadata is the contract metadata to set / update.
     * If metadata exists, non-empty fields will be updated.
     */
    metadata?: ContractMetadataSDKType;
}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataResponse {
}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataResponseSDKType {
}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */
export interface MsgWithdrawRewards {
    /** rewards_address is the address to distribute rewards to (bech32 encoded). */
    rewardsAddress: string;
    /**
     * records_limit defines the maximum number of RewardsRecord objects to process.
     * If provided limit is 0, the default limit is used.
     */
    recordsLimit?: MsgWithdrawRewards_RecordsLimit;
    /** record_ids defines specific RewardsRecord object IDs to process. */
    recordIds?: MsgWithdrawRewards_RecordIDs;
}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsSDKType {
    /** rewards_address is the address to distribute rewards to (bech32 encoded). */
    rewards_address: string;
    /**
     * records_limit defines the maximum number of RewardsRecord objects to process.
     * If provided limit is 0, the default limit is used.
     */
    records_limit?: MsgWithdrawRewards_RecordsLimitSDKType;
    /** record_ids defines specific RewardsRecord object IDs to process. */
    record_ids?: MsgWithdrawRewards_RecordIDsSDKType;
}
export interface MsgWithdrawRewards_RecordsLimit {
    limit: Long;
}
export interface MsgWithdrawRewards_RecordsLimitSDKType {
    limit: Long;
}
export interface MsgWithdrawRewards_RecordIDs {
    ids: Long[];
}
export interface MsgWithdrawRewards_RecordIDsSDKType {
    ids: Long[];
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsResponse {
    /** records_num is the number of RewardsRecord objects processed. */
    recordsNum: Long;
    /** rewards are the total rewards transferred. */
    totalRewards: Coin[];
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsResponseSDKType {
    /** records_num is the number of RewardsRecord objects processed. */
    records_num: Long;
    /** rewards are the total rewards transferred. */
    total_rewards: CoinSDKType[];
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */
export interface MsgSetFlatFee {
    /** sender_address is the msg sender address (bech32 encoded). */
    senderAddress: string;
    /** contract_address is the contract address (bech32 encoded). */
    contractAddress: string;
    /** flat_fee_amount defines the minimum flat fee set by the contract_owner */
    flatFeeAmount?: Coin;
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */
export interface MsgSetFlatFeeSDKType {
    /** sender_address is the msg sender address (bech32 encoded). */
    sender_address: string;
    /** contract_address is the contract address (bech32 encoded). */
    contract_address: string;
    /** flat_fee_amount defines the minimum flat fee set by the contract_owner */
    flat_fee_amount?: CoinSDKType;
}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */
export interface MsgSetFlatFeeResponse {
}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */
export interface MsgSetFlatFeeResponseSDKType {
}
export declare const MsgSetContractMetadata: {
    encode(message: MsgSetContractMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetContractMetadata;
    fromPartial(object: Partial<MsgSetContractMetadata>): MsgSetContractMetadata;
};
export declare const MsgSetContractMetadataResponse: {
    encode(_: MsgSetContractMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetContractMetadataResponse;
    fromPartial(_: Partial<MsgSetContractMetadataResponse>): MsgSetContractMetadataResponse;
};
export declare const MsgWithdrawRewards: {
    encode(message: MsgWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards;
    fromPartial(object: Partial<MsgWithdrawRewards>): MsgWithdrawRewards;
};
export declare const MsgWithdrawRewards_RecordsLimit: {
    encode(message: MsgWithdrawRewards_RecordsLimit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards_RecordsLimit;
    fromPartial(object: Partial<MsgWithdrawRewards_RecordsLimit>): MsgWithdrawRewards_RecordsLimit;
};
export declare const MsgWithdrawRewards_RecordIDs: {
    encode(message: MsgWithdrawRewards_RecordIDs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards_RecordIDs;
    fromPartial(object: Partial<MsgWithdrawRewards_RecordIDs>): MsgWithdrawRewards_RecordIDs;
};
export declare const MsgWithdrawRewardsResponse: {
    encode(message: MsgWithdrawRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardsResponse;
    fromPartial(object: Partial<MsgWithdrawRewardsResponse>): MsgWithdrawRewardsResponse;
};
export declare const MsgSetFlatFee: {
    encode(message: MsgSetFlatFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFlatFee;
    fromPartial(object: Partial<MsgSetFlatFee>): MsgSetFlatFee;
};
export declare const MsgSetFlatFeeResponse: {
    encode(_: MsgSetFlatFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFlatFeeResponse;
    fromPartial(_: Partial<MsgSetFlatFeeResponse>): MsgSetFlatFeeResponse;
};
