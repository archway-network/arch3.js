import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name: string;
    /**
     * The time after which the upgrade must be performed.
     * Leave set to its zero value to use a pre-defined Height instead.
     */
    time?: Timestamp;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     */
    height: Long;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info: string;
    /**
     * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
     * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
     * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
     * previous version of the chain.
     * This will allow IBC connections to persist smoothly across planned chain upgrades
     */
    upgradedClientState?: Any;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanSDKType {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name: string;
    /**
     * The time after which the upgrade must be performed.
     * Leave set to its zero value to use a pre-defined Height instead.
     */
    time?: TimestampSDKType;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     */
    height: Long;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info: string;
    /**
     * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
     * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
     * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
     * previous version of the chain.
     * This will allow IBC connections to persist smoothly across planned chain upgrades
     */
    upgraded_client_state?: AnySDKType;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
    title: string;
    description: string;
    plan?: Plan;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposalSDKType {
    title: string;
    description: string;
    plan?: PlanSDKType;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
    title: string;
    description: string;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposalSDKType {
    title: string;
    description: string;
}
export declare const Plan: {
    encode(message: Plan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Plan;
    fromPartial(object: Partial<Plan>): Plan;
};
export declare const SoftwareUpgradeProposal: {
    encode(message: SoftwareUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SoftwareUpgradeProposal;
    fromPartial(object: Partial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal;
};
export declare const CancelSoftwareUpgradeProposal: {
    encode(message: CancelSoftwareUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelSoftwareUpgradeProposal;
    fromPartial(object: Partial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal;
};
