/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryEstimateCallbackFeesRequest, QueryEstimateCallbackFeesResponse, QueryCallbacksRequest, QueryCallbacksResponse } from "./query";
/** Query service for the callback module. */
export interface Query {
  /** Params returns module parameters */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EstimateCallbackFees returns the total amount of callback fees a contract needs to pay to register the callback */
  estimateCallbackFees(request: QueryEstimateCallbackFeesRequest): Promise<QueryEstimateCallbackFeesResponse>;
  /** Callbacks returns all the callbacks registered at a given height */
  callbacks(request: QueryCallbacksRequest): Promise<QueryCallbacksResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.estimateCallbackFees = this.estimateCallbackFees.bind(this);
    this.callbacks = this.callbacks.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("archway.callback.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  estimateCallbackFees(request: QueryEstimateCallbackFeesRequest): Promise<QueryEstimateCallbackFeesResponse> {
    const data = QueryEstimateCallbackFeesRequest.encode(request).finish();
    const promise = this.rpc.request("archway.callback.v1.Query", "EstimateCallbackFees", data);
    return promise.then(data => QueryEstimateCallbackFeesResponse.decode(new BinaryReader(data)));
  }
  callbacks(request: QueryCallbacksRequest): Promise<QueryCallbacksResponse> {
    const data = QueryCallbacksRequest.encode(request).finish();
    const promise = this.rpc.request("archway.callback.v1.Query", "Callbacks", data);
    return promise.then(data => QueryCallbacksResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    estimateCallbackFees(request: QueryEstimateCallbackFeesRequest): Promise<QueryEstimateCallbackFeesResponse> {
      return queryService.estimateCallbackFees(request);
    },
    callbacks(request: QueryCallbacksRequest): Promise<QueryCallbacksResponse> {
      return queryService.callbacks(request);
    }
  };
};