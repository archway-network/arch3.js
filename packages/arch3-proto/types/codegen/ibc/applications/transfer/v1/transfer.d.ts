import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: Long;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: Long;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path: string;
    /** base denomination of the relayed fungible token. */
    baseDenom: string;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceSDKType {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path: string;
    /** base denomination of the relayed fungible token. */
    base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    sendEnabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receiveEnabled: boolean;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsSDKType {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    send_enabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receive_enabled: boolean;
}
export declare const FungibleTokenPacketData: {
    encode(message: FungibleTokenPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenPacketData;
    fromPartial(object: Partial<FungibleTokenPacketData>): FungibleTokenPacketData;
};
export declare const DenomTrace: {
    encode(message: DenomTrace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomTrace;
    fromPartial(object: Partial<DenomTrace>): DenomTrace;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
