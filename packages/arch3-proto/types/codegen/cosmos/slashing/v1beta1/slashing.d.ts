import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** height at which validator was first a candidate OR was unjailed */
    startHeight: Long;
    /** index offset into signed block bit array */
    indexOffset: Long;
    /** timestamp validator cannot be unjailed until */
    jailedUntil?: Timestamp;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned: boolean;
    /** missed blocks counter (to avoid scanning the array every time) */
    missedBlocksCounter: Long;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
    address: string;
    /** height at which validator was first a candidate OR was unjailed */
    start_height: Long;
    /** index offset into signed block bit array */
    index_offset: Long;
    /** timestamp validator cannot be unjailed until */
    jailed_until?: TimestampSDKType;
    /**
     * whether or not a validator has been tombstoned (killed out of validator
     * set)
     */
    tombstoned: boolean;
    /** missed blocks counter (to avoid scanning the array every time) */
    missed_blocks_counter: Long;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: Long;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration?: Duration;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
    signed_blocks_window: Long;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration?: DurationSDKType;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    encode(message: ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSigningInfo;
    fromPartial(object: Partial<ValidatorSigningInfo>): ValidatorSigningInfo;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
};
