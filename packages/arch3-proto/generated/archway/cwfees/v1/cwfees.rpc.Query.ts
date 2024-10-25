/* eslint-disable */
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { IsGrantingContractRequest, IsGrantingContractResponse } from "./cwfees";
export interface Query {
  /** IsGrantingContract can be used to check if a contract is a granting contract. */
  isGrantingContract(request: IsGrantingContractRequest): Promise<IsGrantingContractResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.isGrantingContract = this.isGrantingContract.bind(this);
  }
  isGrantingContract(request: IsGrantingContractRequest): Promise<IsGrantingContractResponse> {
    const data = IsGrantingContractRequest.encode(request).finish();
    const promise = this.rpc.request("archway.cwfees.v1.Query", "IsGrantingContract", data);
    return promise.then(data => IsGrantingContractResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    isGrantingContract(request: IsGrantingContractRequest): Promise<IsGrantingContractResponse> {
      return queryService.isGrantingContract(request);
    }
  };
};