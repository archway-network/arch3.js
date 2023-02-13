import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryBlockGasTrackingRequest, QueryBlockGasTrackingResponse } from "./query";
/** Query service for the tracking module. */
export interface Query {
    /** BlockGasTracking returns block gas tracking for the current block */
    blockGasTracking(request?: QueryBlockGasTrackingRequest): Promise<QueryBlockGasTrackingResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    blockGasTracking(request?: QueryBlockGasTrackingRequest): Promise<QueryBlockGasTrackingResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    blockGasTracking(request?: QueryBlockGasTrackingRequest): Promise<QueryBlockGasTrackingResponse>;
};
