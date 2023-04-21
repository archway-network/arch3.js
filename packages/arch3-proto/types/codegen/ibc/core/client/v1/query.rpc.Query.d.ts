import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientParamsRequest, QueryClientParamsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
};
