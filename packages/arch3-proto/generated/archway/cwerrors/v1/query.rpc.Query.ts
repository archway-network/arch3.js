/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryErrorsRequest, QueryErrorsResponse, QueryIsSubscribedRequest, QueryIsSubscribedResponse } from "./query";
/** Query service for the cwerrors module. */
export interface Query {
  /** Params queries all the module parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Errors queries all the errors for a given contract. */
  errors(request: QueryErrorsRequest): Promise<QueryErrorsResponse>;
  /** IsSubscribed queries if a contract is subscribed to sudo error callbacks. */
  isSubscribed(request: QueryIsSubscribedRequest): Promise<QueryIsSubscribedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.errors = this.errors.bind(this);
    this.isSubscribed = this.isSubscribed.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("archway.cwerrors.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  errors(request: QueryErrorsRequest): Promise<QueryErrorsResponse> {
    const data = QueryErrorsRequest.encode(request).finish();
    const promise = this.rpc.request("archway.cwerrors.v1.Query", "Errors", data);
    return promise.then(data => QueryErrorsResponse.decode(new BinaryReader(data)));
  }
  isSubscribed(request: QueryIsSubscribedRequest): Promise<QueryIsSubscribedResponse> {
    const data = QueryIsSubscribedRequest.encode(request).finish();
    const promise = this.rpc.request("archway.cwerrors.v1.Query", "IsSubscribed", data);
    return promise.then(data => QueryIsSubscribedResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    errors(request: QueryErrorsRequest): Promise<QueryErrorsResponse> {
      return queryService.errors(request);
    },
    isSubscribed(request: QueryIsSubscribedRequest): Promise<QueryIsSubscribedResponse> {
      return queryService.isSubscribed(request);
    }
  };
};