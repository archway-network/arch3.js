import { TxInfo, TxInfoSDKType, ContractOperationInfo, ContractOperationInfoSDKType } from "./tracking";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
    /** tx_info_last_id defines the last unique ID for a TxInfo objs. */
    txInfoLastId: Long;
    /** tx_infos defines a list of all the tracked transactions. */
    txInfos: TxInfo[];
    /** contract_op_info_last_id defines the last unique ID for ContractOperationInfo objs. */
    contractOpInfoLastId: Long;
    /** contract_op_infos defines a list of all the tracked contract operations. */
    contractOpInfos: ContractOperationInfo[];
}
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisStateSDKType {
    /** tx_info_last_id defines the last unique ID for a TxInfo objs. */
    tx_info_last_id: Long;
    /** tx_infos defines a list of all the tracked transactions. */
    tx_infos: TxInfoSDKType[];
    /** contract_op_info_last_id defines the last unique ID for ContractOperationInfo objs. */
    contract_op_info_last_id: Long;
    /** contract_op_infos defines a list of all the tracked contract operations. */
    contract_op_infos: ContractOperationInfoSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
