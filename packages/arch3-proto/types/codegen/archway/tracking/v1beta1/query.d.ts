import { BlockTracking, BlockTrackingSDKType } from "./tracking";
import * as _m0 from "protobufjs/minimal";
/** QueryBlockGasTrackingRequest is the request for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingRequest {
}
/** QueryBlockGasTrackingRequest is the request for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingRequestSDKType {
}
/** QueryBlockGasTrackingResponse is the response for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingResponse {
    block?: BlockTracking;
}
/** QueryBlockGasTrackingResponse is the response for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingResponseSDKType {
    block?: BlockTrackingSDKType;
}
export declare const QueryBlockGasTrackingRequest: {
    encode(_: QueryBlockGasTrackingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasTrackingRequest;
    fromPartial(_: Partial<QueryBlockGasTrackingRequest>): QueryBlockGasTrackingRequest;
};
export declare const QueryBlockGasTrackingResponse: {
    encode(message: QueryBlockGasTrackingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBlockGasTrackingResponse;
    fromPartial(object: Partial<QueryBlockGasTrackingResponse>): QueryBlockGasTrackingResponse;
};
