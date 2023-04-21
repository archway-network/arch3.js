import { ContractMetadata, ContractMetadataSDKType } from "./rewards";
import { Coin, CoinSDKType, DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** ContractMetadataSetEvent is emitted when the contract metadata is created or updated. */
export interface ContractMetadataSetEvent {
    /** contract_address defines the contract address. */
    contractAddress: string;
    /** metadata defines the new contract metadata state. */
    metadata?: ContractMetadata;
}
/** ContractMetadataSetEvent is emitted when the contract metadata is created or updated. */
export interface ContractMetadataSetEventSDKType {
    /** contract_address defines the contract address. */
    contract_address: string;
    /** metadata defines the new contract metadata state. */
    metadata?: ContractMetadataSDKType;
}
/** ContractRewardCalculationEvent is emitted when the contract reward is calculated. */
export interface ContractRewardCalculationEvent {
    /** contract_address defines the contract address. */
    contractAddress: string;
    /** gas_consumed defines the total gas consumption by all WASM operations within one transaction. */
    gasConsumed: Long;
    /** inflation_rewards defines the inflation rewards portions of the rewards. */
    inflationRewards?: Coin;
    /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */
    feeRebateRewards: Coin[];
    /** metadata defines the contract metadata (if set). */
    metadata?: ContractMetadata;
}
/** ContractRewardCalculationEvent is emitted when the contract reward is calculated. */
export interface ContractRewardCalculationEventSDKType {
    /** contract_address defines the contract address. */
    contract_address: string;
    /** gas_consumed defines the total gas consumption by all WASM operations within one transaction. */
    gas_consumed: Long;
    /** inflation_rewards defines the inflation rewards portions of the rewards. */
    inflation_rewards?: CoinSDKType;
    /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */
    fee_rebate_rewards: CoinSDKType[];
    /** metadata defines the contract metadata (if set). */
    metadata?: ContractMetadataSDKType;
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific rewards_address are distributed.
 * Event could be triggered by a transaction (via CLI for example) or by a contract via WASM bindings.
 */
export interface RewardsWithdrawEvent {
    /** rewards_address defines the rewards address rewards are distributed to. */
    rewardAddress: string;
    /** rewards defines the total rewards being distributed. */
    rewards: Coin[];
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific rewards_address are distributed.
 * Event could be triggered by a transaction (via CLI for example) or by a contract via WASM bindings.
 */
export interface RewardsWithdrawEventSDKType {
    /** rewards_address defines the rewards address rewards are distributed to. */
    reward_address: string;
    /** rewards defines the total rewards being distributed. */
    rewards: CoinSDKType[];
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */
export interface MinConsensusFeeSetEvent {
    /** fee defines the updated minimum gas unit price. */
    fee?: DecCoin;
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */
export interface MinConsensusFeeSetEventSDKType {
    /** fee defines the updated minimum gas unit price. */
    fee?: DecCoinSDKType;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */
export interface ContractFlatFeeSetEvent {
    /** contract_address defines the bech32 address of the contract for which the flat fee is set */
    contractAddress: string;
    /** flat_fee defines the amount that has been set as the minimum fee for the contract */
    flatFee?: Coin;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */
export interface ContractFlatFeeSetEventSDKType {
    /** contract_address defines the bech32 address of the contract for which the flat fee is set */
    contract_address: string;
    /** flat_fee defines the amount that has been set as the minimum fee for the contract */
    flat_fee?: CoinSDKType;
}
export declare const ContractMetadataSetEvent: {
    encode(message: ContractMetadataSetEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractMetadataSetEvent;
    fromPartial(object: Partial<ContractMetadataSetEvent>): ContractMetadataSetEvent;
};
export declare const ContractRewardCalculationEvent: {
    encode(message: ContractRewardCalculationEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractRewardCalculationEvent;
    fromPartial(object: Partial<ContractRewardCalculationEvent>): ContractRewardCalculationEvent;
};
export declare const RewardsWithdrawEvent: {
    encode(message: RewardsWithdrawEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsWithdrawEvent;
    fromPartial(object: Partial<RewardsWithdrawEvent>): RewardsWithdrawEvent;
};
export declare const MinConsensusFeeSetEvent: {
    encode(message: MinConsensusFeeSetEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MinConsensusFeeSetEvent;
    fromPartial(object: Partial<MinConsensusFeeSetEvent>): MinConsensusFeeSetEvent;
};
export declare const ContractFlatFeeSetEvent: {
    encode(message: ContractFlatFeeSetEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractFlatFeeSetEvent;
    fromPartial(object: Partial<ContractFlatFeeSetEvent>): ContractFlatFeeSetEvent;
};
