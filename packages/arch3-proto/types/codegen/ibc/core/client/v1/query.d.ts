import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    clientId: string;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestSDKType {
    /** client state unique identifier */
    client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    clientState?: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseSDKType {
    /** client state associated with the request identifier */
    client_state?: AnySDKType;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightSDKType;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestSDKType {
    /** pagination request */
    pagination?: PageRequestSDKType;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    clientStates: IdentifiedClientState[];
    /** pagination response */
    pagination?: PageResponse;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseSDKType {
    /** list of stored ClientStates of the chain. */
    client_states: IdentifiedClientStateSDKType[];
    /** pagination response */
    pagination?: PageResponseSDKType;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    clientId: string;
    /** consensus state revision number */
    revisionNumber: Long;
    /** consensus state revision height */
    revisionHeight: Long;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latestHeight: boolean;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestSDKType {
    /** client identifier */
    client_id: string;
    /** consensus state revision number */
    revision_number: Long;
    /** consensus state revision height */
    revision_height: Long;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensusState?: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proofHeight?: Height;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseSDKType {
    /** consensus state associated with the client identifier at the given height */
    consensus_state?: AnySDKType;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: HeightSDKType;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    clientId: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestSDKType {
    /** client identifier */
    client_id: string;
    /** pagination request */
    pagination?: PageRequestSDKType;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensusStates: ConsensusStateWithHeight[];
    /** pagination response */
    pagination?: PageResponse;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseSDKType {
    /** consensus states associated with the identifier */
    consensus_states: ConsensusStateWithHeightSDKType[];
    /** pagination response */
    pagination?: PageResponseSDKType;
}
/** QueryClientParamsRequest is the request type for the Query/ClientParams RPC method. */
export interface QueryClientParamsRequest {
}
/** QueryClientParamsRequest is the request type for the Query/ClientParams RPC method. */
export interface QueryClientParamsRequestSDKType {
}
/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryClientParamsResponse is the response type for the Query/ClientParams RPC method. */
export interface QueryClientParamsResponseSDKType {
    /** params defines the parameters of the module. */
    params?: ParamsSDKType;
}
export declare const QueryClientStateRequest: {
    encode(message: QueryClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest;
    fromPartial(object: Partial<QueryClientStateRequest>): QueryClientStateRequest;
};
export declare const QueryClientStateResponse: {
    encode(message: QueryClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse;
    fromPartial(object: Partial<QueryClientStateResponse>): QueryClientStateResponse;
};
export declare const QueryClientStatesRequest: {
    encode(message: QueryClientStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest;
    fromPartial(object: Partial<QueryClientStatesRequest>): QueryClientStatesRequest;
};
export declare const QueryClientStatesResponse: {
    encode(message: QueryClientStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse;
    fromPartial(object: Partial<QueryClientStatesResponse>): QueryClientStatesResponse;
};
export declare const QueryConsensusStateRequest: {
    encode(message: QueryConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest;
    fromPartial(object: Partial<QueryConsensusStateRequest>): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    encode(message: QueryConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse;
    fromPartial(object: Partial<QueryConsensusStateResponse>): QueryConsensusStateResponse;
};
export declare const QueryConsensusStatesRequest: {
    encode(message: QueryConsensusStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest;
    fromPartial(object: Partial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest;
};
export declare const QueryConsensusStatesResponse: {
    encode(message: QueryConsensusStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse;
    fromPartial(object: Partial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse;
};
export declare const QueryClientParamsRequest: {
    encode(_: QueryClientParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest;
    fromPartial(_: Partial<QueryClientParamsRequest>): QueryClientParamsRequest;
};
export declare const QueryClientParamsResponse: {
    encode(message: QueryClientParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse;
    fromPartial(object: Partial<QueryClientParamsResponse>): QueryClientParamsResponse;
};
