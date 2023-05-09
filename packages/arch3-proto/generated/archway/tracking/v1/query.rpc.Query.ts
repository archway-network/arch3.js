/* eslint-disable */
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBlockGasTrackingRequest, QueryBlockGasTrackingResponse } from "./query";
/** Query service for the tracking module. */
export interface Query {
  /** BlockGasTracking returns block gas tracking for the current block */
  blockGasTracking(request?: QueryBlockGasTrackingRequest): Promise<QueryBlockGasTrackingResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.blockGasTracking = this.blockGasTracking.bind(this);
  }
  blockGasTracking(request: QueryBlockGasTrackingRequest = {}): Promise<QueryBlockGasTrackingResponse> {
    const data = QueryBlockGasTrackingRequest.encode(request).finish();
    const promise = this.rpc.request("archway.tracking.v1.Query", "BlockGasTracking", data);
    return promise.then(data => QueryBlockGasTrackingResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    blockGasTracking(request?: QueryBlockGasTrackingRequest): Promise<QueryBlockGasTrackingResponse> {
      return queryService.blockGasTracking(request);
    }
  };
};