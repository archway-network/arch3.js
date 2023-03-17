import { Params, ParamsSDKType, ContractMetadata, ContractMetadataSDKType, BlockRewards, BlockRewardsSDKType, TxRewards, TxRewardsSDKType, RewardsRecord, RewardsRecordSDKType } from "./rewards";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
    /** params defines all the module parameters. */
    params?: Params;
    /** contracts_metadata defines a list of all contracts metadata. */
    contractsMetadata: ContractMetadata[];
    /** block_rewards defines a list of all block rewards objects. */
    blockRewards: BlockRewards[];
    /** tx_rewards defines a list of all tx rewards objects. */
    txRewards: TxRewards[];
    /** min_consensus_fee defines the minimum gas unit price. */
    minConsensusFee?: DecCoin;
    /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */
    rewardsRecordLastId: Long;
    /** rewards_records defines a list of all active (undistributed) rewards records. */
    rewardsRecords: RewardsRecord[];
}
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisStateSDKType {
    /** params defines all the module parameters. */
    params?: ParamsSDKType;
    /** contracts_metadata defines a list of all contracts metadata. */
    contracts_metadata: ContractMetadataSDKType[];
    /** block_rewards defines a list of all block rewards objects. */
    block_rewards: BlockRewardsSDKType[];
    /** tx_rewards defines a list of all tx rewards objects. */
    tx_rewards: TxRewardsSDKType[];
    /** min_consensus_fee defines the minimum gas unit price. */
    min_consensus_fee?: DecCoinSDKType;
    /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */
    rewards_record_last_id: Long;
    /** rewards_records defines a list of all active (undistributed) rewards records. */
    rewards_records: RewardsRecordSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
