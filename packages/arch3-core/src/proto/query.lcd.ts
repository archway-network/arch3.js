import { BlockGasTracking, ContractInstanceMetadata } from "./types";
import { LCDClient } from "@osmonauts/lcd";
import { QueryContractMetadataRequest, QueryContractMetadataResponse, QueryBlockGasTrackingRequest, QueryBlockGasTrackingResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* ContractMetadata returns gastracker metadata of contract */
  async contractMetadata(params: QueryContractMetadataRequest): Promise<QueryContractMetadataResponse> {
    const endpoint = `archway/gastracker/v1/contract/metadata/${params.address}`;
    return await this.request(endpoint);
  }

  /* BlockGasTracking returns block gas tracking for the latest block */
  async blockGasTracking(params: QueryBlockGasTrackingRequest): Promise<QueryBlockGasTrackingResponse> {
    const endpoint = `archway/gastracker/v1/block_gas_tracking/`;
    return await this.request(endpoint);
  }

}