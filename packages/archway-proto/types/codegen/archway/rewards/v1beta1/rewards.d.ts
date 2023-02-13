import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Params defines the module parameters. */
export interface Params {
    /**
     * inflation_rewards_ratio defines the percentage of minted inflation tokens that are used for dApp rewards [0.0, 1.0].
     * If set to 0.0, no inflation rewards are distributed.
     */
    inflationRewardsRatio: string;
    /**
     * tx_fee_rebate_ratio defines the percentage of tx fees that are used for dApp rewards [0.0, 1.0].
     * If set to 0.0, no fee rewards are distributed.
     */
    txFeeRebateRatio: string;
    /** max_withdraw_records defines the maximum number of RewardsRecord objects used for the withdrawal operation. */
    maxWithdrawRecords: Long;
}
/** Params defines the module parameters. */
export interface ParamsSDKType {
    /**
     * inflation_rewards_ratio defines the percentage of minted inflation tokens that are used for dApp rewards [0.0, 1.0].
     * If set to 0.0, no inflation rewards are distributed.
     */
    inflation_rewards_ratio: string;
    /**
     * tx_fee_rebate_ratio defines the percentage of tx fees that are used for dApp rewards [0.0, 1.0].
     * If set to 0.0, no fee rewards are distributed.
     */
    tx_fee_rebate_ratio: string;
    /** max_withdraw_records defines the maximum number of RewardsRecord objects used for the withdrawal operation. */
    max_withdraw_records: Long;
}
/** ContractMetadata defines the contract rewards distribution options for a particular contract. */
export interface ContractMetadata {
    /** contract_address defines the contract address (bech32 encoded). */
    contractAddress: string;
    /**
     * owner_address is the contract owner address that can modify contract reward options (bech32 encoded).
     * That could be the contract admin or the contract itself.
     * If owner_address is set to contract address, contract can modify the metadata on its own using WASM bindings.
     */
    ownerAddress: string;
    /**
     * rewards_address is an address to distribute rewards to (bech32 encoded).
     * If not set (empty), rewards are not distributed for this contract.
     */
    rewardsAddress: string;
}
/** ContractMetadata defines the contract rewards distribution options for a particular contract. */
export interface ContractMetadataSDKType {
    /** contract_address defines the contract address (bech32 encoded). */
    contract_address: string;
    /**
     * owner_address is the contract owner address that can modify contract reward options (bech32 encoded).
     * That could be the contract admin or the contract itself.
     * If owner_address is set to contract address, contract can modify the metadata on its own using WASM bindings.
     */
    owner_address: string;
    /**
     * rewards_address is an address to distribute rewards to (bech32 encoded).
     * If not set (empty), rewards are not distributed for this contract.
     */
    rewards_address: string;
}
/** BlockRewards defines block related rewards distribution data. */
export interface BlockRewards {
    /** height defines the block height. */
    height: Long;
    /** inflation_rewards is the rewards to be distributed. */
    inflationRewards?: Coin;
    /** max_gas defines the maximum gas for the block that is used to distribute inflation rewards (consensus parameter). */
    maxGas: Long;
}
/** BlockRewards defines block related rewards distribution data. */
export interface BlockRewardsSDKType {
    /** height defines the block height. */
    height: Long;
    /** inflation_rewards is the rewards to be distributed. */
    inflation_rewards?: CoinSDKType;
    /** max_gas defines the maximum gas for the block that is used to distribute inflation rewards (consensus parameter). */
    max_gas: Long;
}
/** TxRewards defines transaction related rewards distribution data. */
export interface TxRewards {
    /** tx_id is the tracking transaction ID (x/tracking is the data source for this value). */
    txId: Long;
    /** height defines the block height. */
    height: Long;
    /** fee_rewards is the rewards to be distributed. */
    feeRewards: Coin[];
}
/** TxRewards defines transaction related rewards distribution data. */
export interface TxRewardsSDKType {
    /** tx_id is the tracking transaction ID (x/tracking is the data source for this value). */
    tx_id: Long;
    /** height defines the block height. */
    height: Long;
    /** fee_rewards is the rewards to be distributed. */
    fee_rewards: CoinSDKType[];
}
/**
 * RewardsRecord defines a record that is used to distribute rewards later (lazy distribution).
 * This record is being created by the x/rewards EndBlocker and pruned after the rewards are distributed.
 * An actual rewards x/bank transfer might be triggered by a Tx (via CLI for example) or by a contract via WASM bindings.
 * For a contract to trigger rewards transfer, contract address must be set as the rewards_address in a
 * corresponding ContractMetadata.
 */
export interface RewardsRecord {
    /** id is the unique ID of the record. */
    id: Long;
    /** rewards_address is the address to distribute rewards to (bech32 encoded). */
    rewardsAddress: string;
    /** rewards are the rewards to be transferred later. */
    rewards: Coin[];
    /** calculated_height defines the block height of rewards calculation event. */
    calculatedHeight: Long;
    /** calculated_time defines the block time of rewards calculation event. */
    calculatedTime?: Timestamp;
}
/**
 * RewardsRecord defines a record that is used to distribute rewards later (lazy distribution).
 * This record is being created by the x/rewards EndBlocker and pruned after the rewards are distributed.
 * An actual rewards x/bank transfer might be triggered by a Tx (via CLI for example) or by a contract via WASM bindings.
 * For a contract to trigger rewards transfer, contract address must be set as the rewards_address in a
 * corresponding ContractMetadata.
 */
export interface RewardsRecordSDKType {
    /** id is the unique ID of the record. */
    id: Long;
    /** rewards_address is the address to distribute rewards to (bech32 encoded). */
    rewards_address: string;
    /** rewards are the rewards to be transferred later. */
    rewards: CoinSDKType[];
    /** calculated_height defines the block height of rewards calculation event. */
    calculated_height: Long;
    /** calculated_time defines the block time of rewards calculation event. */
    calculated_time?: TimestampSDKType;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
export declare const ContractMetadata: {
    encode(message: ContractMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractMetadata;
    fromPartial(object: Partial<ContractMetadata>): ContractMetadata;
};
export declare const BlockRewards: {
    encode(message: BlockRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockRewards;
    fromPartial(object: Partial<BlockRewards>): BlockRewards;
};
export declare const TxRewards: {
    encode(message: TxRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxRewards;
    fromPartial(object: Partial<TxRewards>): TxRewards;
};
export declare const RewardsRecord: {
    encode(message: RewardsRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardsRecord;
    fromPartial(object: Partial<RewardsRecord>): RewardsRecord;
};
