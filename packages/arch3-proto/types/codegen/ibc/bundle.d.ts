import * as _74 from "./applications/transfer/v1/genesis";
import * as _75 from "./applications/transfer/v1/query";
import * as _76 from "./applications/transfer/v1/transfer";
import * as _77 from "./applications/transfer/v1/tx";
import * as _78 from "./core/channel/v1/channel";
import * as _79 from "./core/channel/v1/genesis";
import * as _80 from "./core/channel/v1/query";
import * as _81 from "./core/channel/v1/tx";
import * as _82 from "./core/client/v1/client";
import * as _83 from "./core/client/v1/genesis";
import * as _84 from "./core/client/v1/query";
import * as _85 from "./core/client/v1/tx";
import * as _86 from "./core/commitment/v1/commitment";
import * as _87 from "./core/connection/v1/connection";
import * as _88 from "./core/connection/v1/genesis";
import * as _89 from "./core/connection/v1/query";
import * as _90 from "./core/connection/v1/tx";
import * as _91 from "./core/types/v1/genesis";
import * as _92 from "./lightclients/localhost/v1/localhost";
import * as _93 from "./lightclients/solomachine/v1/solomachine";
import * as _94 from "./lightclients/tendermint/v1/tendermint";
import * as _129 from "./applications/transfer/v1/query.rpc.Query";
import * as _130 from "./core/channel/v1/query.rpc.Query";
import * as _131 from "./core/client/v1/query.rpc.Query";
import * as _132 from "./core/connection/v1/query.rpc.Query";
import * as _133 from "./applications/transfer/v1/tx.rpc.msg";
import * as _134 from "./core/channel/v1/tx.rpc.msg";
import * as _135 from "./core/client/v1/tx.rpc.msg";
import * as _136 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _133.MsgClientImpl;
                QueryClientImpl: typeof _129.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _75.QueryDenomTraceRequest): Promise<_75.QueryDenomTraceResponse>;
                    denomTraces(request?: _75.QueryDenomTracesRequest): Promise<_75.QueryDenomTracesResponse>;
                    params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                };
                MsgTransfer: {
                    encode(message: _77.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTransfer;
                    fromPartial(object: Partial<_77.MsgTransfer>): _77.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _77.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTransferResponse;
                    fromPartial(_: Partial<_77.MsgTransferResponse>): _77.MsgTransferResponse;
                };
                FungibleTokenPacketData: {
                    encode(message: _76.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.FungibleTokenPacketData;
                    fromPartial(object: Partial<_76.FungibleTokenPacketData>): _76.FungibleTokenPacketData;
                };
                DenomTrace: {
                    encode(message: _76.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.DenomTrace;
                    fromPartial(object: Partial<_76.DenomTrace>): _76.DenomTrace;
                };
                Params: {
                    encode(message: _76.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Params;
                    fromPartial(object: Partial<_76.Params>): _76.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _75.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_75.QueryDenomTraceRequest>): _75.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _75.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_75.QueryDenomTraceResponse>): _75.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _75.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_75.QueryDenomTracesRequest>): _75.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _75.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_75.QueryDenomTracesResponse>): _75.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsRequest;
                    fromPartial(_: Partial<_75.QueryParamsRequest>): _75.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsResponse;
                    fromPartial(object: Partial<_75.QueryParamsResponse>): _75.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
                    fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _134.MsgClientImpl;
                QueryClientImpl: typeof _130.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _80.QueryChannelRequest): Promise<_80.QueryChannelResponse>;
                    channels(request?: _80.QueryChannelsRequest): Promise<_80.QueryChannelsResponse>;
                    connectionChannels(request: _80.QueryConnectionChannelsRequest): Promise<_80.QueryConnectionChannelsResponse>;
                    channelClientState(request: _80.QueryChannelClientStateRequest): Promise<_80.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _80.QueryChannelConsensusStateRequest): Promise<_80.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _80.QueryPacketCommitmentRequest): Promise<_80.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _80.QueryPacketCommitmentsRequest): Promise<_80.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _80.QueryPacketReceiptRequest): Promise<_80.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _80.QueryPacketAcknowledgementRequest): Promise<_80.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _80.QueryPacketAcknowledgementsRequest): Promise<_80.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _80.QueryUnreceivedPacketsRequest): Promise<_80.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _80.QueryUnreceivedAcksRequest): Promise<_80.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _80.QueryNextSequenceReceiveRequest): Promise<_80.QueryNextSequenceReceiveResponse>;
                };
                MsgChannelOpenInit: {
                    encode(message: _81.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenInit;
                    fromPartial(object: Partial<_81.MsgChannelOpenInit>): _81.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _81.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_81.MsgChannelOpenInitResponse>): _81.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _81.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenTry;
                    fromPartial(object: Partial<_81.MsgChannelOpenTry>): _81.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _81.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_81.MsgChannelOpenTryResponse>): _81.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _81.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenAck;
                    fromPartial(object: Partial<_81.MsgChannelOpenAck>): _81.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _81.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_81.MsgChannelOpenAckResponse>): _81.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _81.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_81.MsgChannelOpenConfirm>): _81.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _81.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_81.MsgChannelOpenConfirmResponse>): _81.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _81.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelCloseInit;
                    fromPartial(object: Partial<_81.MsgChannelCloseInit>): _81.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _81.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_81.MsgChannelCloseInitResponse>): _81.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _81.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_81.MsgChannelCloseConfirm>): _81.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _81.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_81.MsgChannelCloseConfirmResponse>): _81.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _81.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgRecvPacket;
                    fromPartial(object: Partial<_81.MsgRecvPacket>): _81.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _81.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_81.MsgRecvPacketResponse>): _81.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _81.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgTimeout;
                    fromPartial(object: Partial<_81.MsgTimeout>): _81.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _81.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgTimeoutResponse;
                    fromPartial(_: Partial<_81.MsgTimeoutResponse>): _81.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _81.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_81.MsgTimeoutOnClose>): _81.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _81.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_81.MsgTimeoutOnCloseResponse>): _81.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _81.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgAcknowledgement;
                    fromPartial(object: Partial<_81.MsgAcknowledgement>): _81.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _81.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_81.MsgAcknowledgementResponse>): _81.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _80.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelRequest;
                    fromPartial(object: Partial<_80.QueryChannelRequest>): _80.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _80.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelResponse;
                    fromPartial(object: Partial<_80.QueryChannelResponse>): _80.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _80.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelsRequest;
                    fromPartial(object: Partial<_80.QueryChannelsRequest>): _80.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _80.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelsResponse;
                    fromPartial(object: Partial<_80.QueryChannelsResponse>): _80.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _80.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_80.QueryConnectionChannelsRequest>): _80.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _80.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_80.QueryConnectionChannelsResponse>): _80.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _80.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_80.QueryChannelClientStateRequest>): _80.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _80.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_80.QueryChannelClientStateResponse>): _80.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _80.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_80.QueryChannelConsensusStateRequest>): _80.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _80.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_80.QueryChannelConsensusStateResponse>): _80.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _80.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_80.QueryPacketCommitmentRequest>): _80.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _80.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_80.QueryPacketCommitmentResponse>): _80.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _80.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_80.QueryPacketCommitmentsRequest>): _80.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _80.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_80.QueryPacketCommitmentsResponse>): _80.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _80.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_80.QueryPacketReceiptRequest>): _80.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _80.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_80.QueryPacketReceiptResponse>): _80.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _80.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_80.QueryPacketAcknowledgementRequest>): _80.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _80.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_80.QueryPacketAcknowledgementResponse>): _80.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _80.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_80.QueryPacketAcknowledgementsRequest>): _80.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _80.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_80.QueryPacketAcknowledgementsResponse>): _80.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _80.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_80.QueryUnreceivedPacketsRequest>): _80.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _80.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_80.QueryUnreceivedPacketsResponse>): _80.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _80.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_80.QueryUnreceivedAcksRequest>): _80.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _80.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_80.QueryUnreceivedAcksResponse>): _80.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _80.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_80.QueryNextSequenceReceiveRequest>): _80.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _80.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_80.QueryNextSequenceReceiveResponse>): _80.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                    fromPartial(object: Partial<_79.GenesisState>): _79.GenesisState;
                };
                PacketSequence: {
                    encode(message: _79.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PacketSequence;
                    fromPartial(object: Partial<_79.PacketSequence>): _79.PacketSequence;
                };
                stateFromJSON(object: any): _78.State;
                stateToJSON(object: _78.State): string;
                orderFromJSON(object: any): _78.Order;
                orderToJSON(object: _78.Order): string;
                State: typeof _78.State;
                StateSDKType: typeof _78.StateSDKType;
                Order: typeof _78.Order;
                OrderSDKType: typeof _78.OrderSDKType;
                Channel: {
                    encode(message: _78.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Channel;
                    fromPartial(object: Partial<_78.Channel>): _78.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _78.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.IdentifiedChannel;
                    fromPartial(object: Partial<_78.IdentifiedChannel>): _78.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _78.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Counterparty;
                    fromPartial(object: Partial<_78.Counterparty>): _78.Counterparty;
                };
                Packet: {
                    encode(message: _78.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Packet;
                    fromPartial(object: Partial<_78.Packet>): _78.Packet;
                };
                PacketState: {
                    encode(message: _78.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PacketState;
                    fromPartial(object: Partial<_78.PacketState>): _78.PacketState;
                };
                Acknowledgement: {
                    encode(message: _78.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Acknowledgement;
                    fromPartial(object: Partial<_78.Acknowledgement>): _78.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _135.MsgClientImpl;
                QueryClientImpl: typeof _131.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _84.QueryClientStateRequest): Promise<_84.QueryClientStateResponse>;
                    clientStates(request?: _84.QueryClientStatesRequest): Promise<_84.QueryClientStatesResponse>;
                    consensusState(request: _84.QueryConsensusStateRequest): Promise<_84.QueryConsensusStateResponse>;
                    consensusStates(request: _84.QueryConsensusStatesRequest): Promise<_84.QueryConsensusStatesResponse>;
                    clientParams(request?: _84.QueryClientParamsRequest): Promise<_84.QueryClientParamsResponse>;
                };
                MsgCreateClient: {
                    encode(message: _85.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateClient;
                    fromPartial(object: Partial<_85.MsgCreateClient>): _85.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _85.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgCreateClientResponse;
                    fromPartial(_: Partial<_85.MsgCreateClientResponse>): _85.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _85.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUpdateClient;
                    fromPartial(object: Partial<_85.MsgUpdateClient>): _85.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _85.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_85.MsgUpdateClientResponse>): _85.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _85.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUpgradeClient;
                    fromPartial(object: Partial<_85.MsgUpgradeClient>): _85.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _85.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_85.MsgUpgradeClientResponse>): _85.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _85.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_85.MsgSubmitMisbehaviour>): _85.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _85.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_85.MsgSubmitMisbehaviourResponse>): _85.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _84.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientStateRequest;
                    fromPartial(object: Partial<_84.QueryClientStateRequest>): _84.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _84.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientStateResponse;
                    fromPartial(object: Partial<_84.QueryClientStateResponse>): _84.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _84.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientStatesRequest;
                    fromPartial(object: Partial<_84.QueryClientStatesRequest>): _84.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _84.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientStatesResponse;
                    fromPartial(object: Partial<_84.QueryClientStatesResponse>): _84.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _84.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_84.QueryConsensusStateRequest>): _84.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _84.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_84.QueryConsensusStateResponse>): _84.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _84.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_84.QueryConsensusStatesRequest>): _84.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _84.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_84.QueryConsensusStatesResponse>): _84.QueryConsensusStatesResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _84.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientParamsRequest;
                    fromPartial(_: Partial<_84.QueryClientParamsRequest>): _84.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _84.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryClientParamsResponse;
                    fromPartial(object: Partial<_84.QueryClientParamsResponse>): _84.QueryClientParamsResponse;
                };
                GenesisState: {
                    encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                    fromPartial(object: Partial<_83.GenesisState>): _83.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _83.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisMetadata;
                    fromPartial(object: Partial<_83.GenesisMetadata>): _83.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _83.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_83.IdentifiedGenesisMetadata>): _83.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _82.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.IdentifiedClientState;
                    fromPartial(object: Partial<_82.IdentifiedClientState>): _82.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _82.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_82.ConsensusStateWithHeight>): _82.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _82.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientConsensusStates;
                    fromPartial(object: Partial<_82.ClientConsensusStates>): _82.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _82.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ClientUpdateProposal;
                    fromPartial(object: Partial<_82.ClientUpdateProposal>): _82.ClientUpdateProposal;
                };
                Height: {
                    encode(message: _82.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Height;
                    fromPartial(object: Partial<_82.Height>): _82.Height;
                };
                Params: {
                    encode(message: _82.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Params;
                    fromPartial(object: Partial<_82.Params>): _82.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _86.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MerkleRoot;
                    fromPartial(object: Partial<_86.MerkleRoot>): _86.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _86.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MerklePrefix;
                    fromPartial(object: Partial<_86.MerklePrefix>): _86.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _86.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MerklePath;
                    fromPartial(object: Partial<_86.MerklePath>): _86.MerklePath;
                };
                MerkleProof: {
                    encode(message: _86.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MerkleProof;
                    fromPartial(object: Partial<_86.MerkleProof>): _86.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _136.MsgClientImpl;
                QueryClientImpl: typeof _132.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _89.QueryConnectionRequest): Promise<_89.QueryConnectionResponse>;
                    connections(request?: _89.QueryConnectionsRequest): Promise<_89.QueryConnectionsResponse>;
                    clientConnections(request: _89.QueryClientConnectionsRequest): Promise<_89.QueryClientConnectionsResponse>;
                    connectionClientState(request: _89.QueryConnectionClientStateRequest): Promise<_89.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _89.QueryConnectionConsensusStateRequest): Promise<_89.QueryConnectionConsensusStateResponse>;
                };
                MsgConnectionOpenInit: {
                    encode(message: _90.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_90.MsgConnectionOpenInit>): _90.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _90.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_90.MsgConnectionOpenInitResponse>): _90.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _90.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_90.MsgConnectionOpenTry>): _90.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _90.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_90.MsgConnectionOpenTryResponse>): _90.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _90.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_90.MsgConnectionOpenAck>): _90.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _90.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_90.MsgConnectionOpenAckResponse>): _90.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _90.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_90.MsgConnectionOpenConfirm>): _90.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _90.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_90.MsgConnectionOpenConfirmResponse>): _90.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _89.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionRequest;
                    fromPartial(object: Partial<_89.QueryConnectionRequest>): _89.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _89.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionResponse;
                    fromPartial(object: Partial<_89.QueryConnectionResponse>): _89.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _89.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionsRequest;
                    fromPartial(object: Partial<_89.QueryConnectionsRequest>): _89.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _89.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionsResponse;
                    fromPartial(object: Partial<_89.QueryConnectionsResponse>): _89.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _89.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_89.QueryClientConnectionsRequest>): _89.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _89.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_89.QueryClientConnectionsResponse>): _89.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _89.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_89.QueryConnectionClientStateRequest>): _89.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _89.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_89.QueryConnectionClientStateResponse>): _89.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _89.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_89.QueryConnectionConsensusStateRequest>): _89.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _89.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_89.QueryConnectionConsensusStateResponse>): _89.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GenesisState;
                    fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
                };
                stateFromJSON(object: any): _87.State;
                stateToJSON(object: _87.State): string;
                State: typeof _87.State;
                StateSDKType: typeof _87.StateSDKType;
                ConnectionEnd: {
                    encode(message: _87.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConnectionEnd;
                    fromPartial(object: Partial<_87.ConnectionEnd>): _87.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _87.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.IdentifiedConnection;
                    fromPartial(object: Partial<_87.IdentifiedConnection>): _87.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _87.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Counterparty;
                    fromPartial(object: Partial<_87.Counterparty>): _87.Counterparty;
                };
                ClientPaths: {
                    encode(message: _87.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientPaths;
                    fromPartial(object: Partial<_87.ClientPaths>): _87.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _87.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ConnectionPaths;
                    fromPartial(object: Partial<_87.ConnectionPaths>): _87.ConnectionPaths;
                };
                Version: {
                    encode(message: _87.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Version;
                    fromPartial(object: Partial<_87.Version>): _87.Version;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GenesisState;
                    fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _92.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ClientState;
                    fromPartial(object: Partial<_92.ClientState>): _92.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _93.DataType;
                dataTypeToJSON(object: _93.DataType): string;
                DataType: typeof _93.DataType;
                DataTypeSDKType: typeof _93.DataTypeSDKType;
                ClientState: {
                    encode(message: _93.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ClientState;
                    fromPartial(object: Partial<_93.ClientState>): _93.ClientState;
                };
                ConsensusState: {
                    encode(message: _93.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConsensusState;
                    fromPartial(object: Partial<_93.ConsensusState>): _93.ConsensusState;
                };
                Header: {
                    encode(message: _93.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Header;
                    fromPartial(object: Partial<_93.Header>): _93.Header;
                };
                Misbehaviour: {
                    encode(message: _93.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Misbehaviour;
                    fromPartial(object: Partial<_93.Misbehaviour>): _93.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _93.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignatureAndData;
                    fromPartial(object: Partial<_93.SignatureAndData>): _93.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _93.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.TimestampedSignatureData;
                    fromPartial(object: Partial<_93.TimestampedSignatureData>): _93.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _93.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignBytes;
                    fromPartial(object: Partial<_93.SignBytes>): _93.SignBytes;
                };
                HeaderData: {
                    encode(message: _93.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.HeaderData;
                    fromPartial(object: Partial<_93.HeaderData>): _93.HeaderData;
                };
                ClientStateData: {
                    encode(message: _93.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ClientStateData;
                    fromPartial(object: Partial<_93.ClientStateData>): _93.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _93.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConsensusStateData;
                    fromPartial(object: Partial<_93.ConsensusStateData>): _93.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _93.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConnectionStateData;
                    fromPartial(object: Partial<_93.ConnectionStateData>): _93.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _93.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ChannelStateData;
                    fromPartial(object: Partial<_93.ChannelStateData>): _93.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _93.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketCommitmentData;
                    fromPartial(object: Partial<_93.PacketCommitmentData>): _93.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _93.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketAcknowledgementData;
                    fromPartial(object: Partial<_93.PacketAcknowledgementData>): _93.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _93.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_93.PacketReceiptAbsenceData>): _93.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _93.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.NextSequenceRecvData;
                    fromPartial(object: Partial<_93.NextSequenceRecvData>): _93.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _94.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ClientState;
                    fromPartial(object: Partial<_94.ClientState>): _94.ClientState;
                };
                ConsensusState: {
                    encode(message: _94.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusState;
                    fromPartial(object: Partial<_94.ConsensusState>): _94.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _94.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Misbehaviour;
                    fromPartial(object: Partial<_94.Misbehaviour>): _94.Misbehaviour;
                };
                Header: {
                    encode(message: _94.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Header;
                    fromPartial(object: Partial<_94.Header>): _94.Header;
                };
                Fraction: {
                    encode(message: _94.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Fraction;
                    fromPartial(object: Partial<_94.Fraction>): _94.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _133.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _134.MsgClientImpl;
                    };
                    client: {
                        v1: _135.MsgClientImpl;
                    };
                    connection: {
                        v1: _136.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _75.QueryDenomTraceRequest): Promise<_75.QueryDenomTraceResponse>;
                            denomTraces(request?: _75.QueryDenomTracesRequest): Promise<_75.QueryDenomTracesResponse>;
                            params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _80.QueryChannelRequest): Promise<_80.QueryChannelResponse>;
                            channels(request?: _80.QueryChannelsRequest): Promise<_80.QueryChannelsResponse>;
                            connectionChannels(request: _80.QueryConnectionChannelsRequest): Promise<_80.QueryConnectionChannelsResponse>;
                            channelClientState(request: _80.QueryChannelClientStateRequest): Promise<_80.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _80.QueryChannelConsensusStateRequest): Promise<_80.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _80.QueryPacketCommitmentRequest): Promise<_80.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _80.QueryPacketCommitmentsRequest): Promise<_80.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _80.QueryPacketReceiptRequest): Promise<_80.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _80.QueryPacketAcknowledgementRequest): Promise<_80.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _80.QueryPacketAcknowledgementsRequest): Promise<_80.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _80.QueryUnreceivedPacketsRequest): Promise<_80.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _80.QueryUnreceivedAcksRequest): Promise<_80.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _80.QueryNextSequenceReceiveRequest): Promise<_80.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _84.QueryClientStateRequest): Promise<_84.QueryClientStateResponse>;
                            clientStates(request?: _84.QueryClientStatesRequest): Promise<_84.QueryClientStatesResponse>;
                            consensusState(request: _84.QueryConsensusStateRequest): Promise<_84.QueryConsensusStateResponse>;
                            consensusStates(request: _84.QueryConsensusStatesRequest): Promise<_84.QueryConsensusStatesResponse>;
                            clientParams(request?: _84.QueryClientParamsRequest): Promise<_84.QueryClientParamsResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _89.QueryConnectionRequest): Promise<_89.QueryConnectionResponse>;
                            connections(request?: _89.QueryConnectionsRequest): Promise<_89.QueryConnectionsResponse>;
                            clientConnections(request: _89.QueryClientConnectionsRequest): Promise<_89.QueryClientConnectionsResponse>;
                            connectionClientState(request: _89.QueryConnectionClientStateRequest): Promise<_89.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _89.QueryConnectionConsensusStateRequest): Promise<_89.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
