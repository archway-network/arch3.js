import * as _10 from "./auth/v1beta1/auth";
import * as _11 from "./auth/v1beta1/genesis";
import * as _12 from "./auth/v1beta1/query";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/kv/v1beta1/kv";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v1beta1/reflection";
import * as _21 from "./base/snapshots/v1beta1/snapshot";
import * as _22 from "./base/store/v1beta1/commit_info";
import * as _23 from "./base/store/v1beta1/snapshot";
import * as _24 from "./base/tendermint/v1beta1/query";
import * as _25 from "./base/v1beta1/coin";
import * as _26 from "./capability/v1beta1/capability";
import * as _27 from "./capability/v1beta1/genesis";
import * as _28 from "./crisis/v1beta1/genesis";
import * as _29 from "./crisis/v1beta1/tx";
import * as _30 from "./crypto/ed25519/keys";
import * as _31 from "./crypto/multisig/keys";
import * as _32 from "./crypto/secp256k1/keys";
import * as _33 from "./distribution/v1beta1/distribution";
import * as _34 from "./distribution/v1beta1/genesis";
import * as _35 from "./distribution/v1beta1/query";
import * as _36 from "./distribution/v1beta1/tx";
import * as _37 from "./evidence/v1beta1/evidence";
import * as _38 from "./evidence/v1beta1/genesis";
import * as _39 from "./evidence/v1beta1/query";
import * as _40 from "./evidence/v1beta1/tx";
import * as _41 from "./genutil/v1beta1/genesis";
import * as _42 from "./gov/v1beta1/genesis";
import * as _43 from "./gov/v1beta1/gov";
import * as _44 from "./gov/v1beta1/query";
import * as _45 from "./gov/v1beta1/tx";
import * as _46 from "./mint/v1beta1/genesis";
import * as _47 from "./mint/v1beta1/mint";
import * as _48 from "./mint/v1beta1/query";
import * as _49 from "./params/v1beta1/params";
import * as _50 from "./params/v1beta1/query";
import * as _51 from "./slashing/v1beta1/genesis";
import * as _52 from "./slashing/v1beta1/query";
import * as _53 from "./slashing/v1beta1/slashing";
import * as _54 from "./slashing/v1beta1/tx";
import * as _55 from "./staking/v1beta1/genesis";
import * as _56 from "./staking/v1beta1/query";
import * as _57 from "./staking/v1beta1/staking";
import * as _58 from "./staking/v1beta1/tx";
import * as _59 from "./tx/signing/v1beta1/signing";
import * as _60 from "./tx/v1beta1/service";
import * as _61 from "./tx/v1beta1/tx";
import * as _62 from "./upgrade/v1beta1/query";
import * as _63 from "./upgrade/v1beta1/upgrade";
import * as _64 from "./vesting/v1beta1/tx";
import * as _65 from "./vesting/v1beta1/vesting";
import * as _109 from "./auth/v1beta1/query.rpc.Query";
import * as _110 from "./bank/v1beta1/query.rpc.Query";
import * as _111 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _112 from "./distribution/v1beta1/query.rpc.Query";
import * as _113 from "./evidence/v1beta1/query.rpc.Query";
import * as _114 from "./gov/v1beta1/query.rpc.Query";
import * as _115 from "./mint/v1beta1/query.rpc.Query";
import * as _116 from "./params/v1beta1/query.rpc.Query";
import * as _117 from "./slashing/v1beta1/query.rpc.Query";
import * as _118 from "./staking/v1beta1/query.rpc.Query";
import * as _119 from "./tx/v1beta1/service.rpc.Service";
import * as _120 from "./upgrade/v1beta1/query.rpc.Query";
import * as _121 from "./bank/v1beta1/tx.rpc.msg";
import * as _122 from "./crisis/v1beta1/tx.rpc.msg";
import * as _123 from "./distribution/v1beta1/tx.rpc.msg";
import * as _124 from "./evidence/v1beta1/tx.rpc.msg";
import * as _125 from "./gov/v1beta1/tx.rpc.msg";
import * as _126 from "./slashing/v1beta1/tx.rpc.msg";
import * as _127 from "./staking/v1beta1/tx.rpc.msg";
import * as _128 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _109.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
            };
            QueryAccountRequest: {
                encode(message: _12.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAccountRequest;
                fromPartial(object: Partial<_12.QueryAccountRequest>): _12.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _12.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAccountResponse;
                fromPartial(object: Partial<_12.QueryAccountResponse>): _12.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsRequest;
                fromPartial(_: Partial<_12.QueryParamsRequest>): _12.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsResponse;
                fromPartial(object: Partial<_12.QueryParamsResponse>): _12.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromPartial(object: Partial<_11.GenesisState>): _11.GenesisState;
            };
            BaseAccount: {
                encode(message: _10.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.BaseAccount;
                fromPartial(object: Partial<_10.BaseAccount>): _10.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _10.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.ModuleAccount;
                fromPartial(object: Partial<_10.ModuleAccount>): _10.ModuleAccount;
            };
            Params: {
                encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Params;
                fromPartial(object: Partial<_10.Params>): _10.Params;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _121.MsgClientImpl;
            QueryClientImpl: typeof _110.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
            };
            MsgSend: {
                encode(message: _16.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgSend;
                fromPartial(object: Partial<_16.MsgSend>): _16.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _16.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgSendResponse;
                fromPartial(_: Partial<_16.MsgSendResponse>): _16.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _16.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgMultiSend;
                fromPartial(object: Partial<_16.MsgMultiSend>): _16.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _16.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.MsgMultiSendResponse;
                fromPartial(_: Partial<_16.MsgMultiSendResponse>): _16.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _15.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryBalanceRequest;
                fromPartial(object: Partial<_15.QueryBalanceRequest>): _15.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _15.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryBalanceResponse;
                fromPartial(object: Partial<_15.QueryBalanceResponse>): _15.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _15.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryAllBalancesRequest;
                fromPartial(object: Partial<_15.QueryAllBalancesRequest>): _15.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _15.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryAllBalancesResponse;
                fromPartial(object: Partial<_15.QueryAllBalancesResponse>): _15.QueryAllBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(_: _15.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryTotalSupplyRequest;
                fromPartial(_: Partial<_15.QueryTotalSupplyRequest>): _15.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _15.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryTotalSupplyResponse;
                fromPartial(object: Partial<_15.QueryTotalSupplyResponse>): _15.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _15.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySupplyOfRequest;
                fromPartial(object: Partial<_15.QuerySupplyOfRequest>): _15.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _15.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QuerySupplyOfResponse;
                fromPartial(object: Partial<_15.QuerySupplyOfResponse>): _15.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _15.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryParamsRequest;
                fromPartial(_: Partial<_15.QueryParamsRequest>): _15.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _15.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryParamsResponse;
                fromPartial(object: Partial<_15.QueryParamsResponse>): _15.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _15.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomsMetadataRequest;
                fromPartial(object: Partial<_15.QueryDenomsMetadataRequest>): _15.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _15.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomsMetadataResponse;
                fromPartial(object: Partial<_15.QueryDenomsMetadataResponse>): _15.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _15.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomMetadataRequest;
                fromPartial(object: Partial<_15.QueryDenomMetadataRequest>): _15.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _15.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.QueryDenomMetadataResponse;
                fromPartial(object: Partial<_15.QueryDenomMetadataResponse>): _15.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _14.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenesisState;
                fromPartial(object: Partial<_14.GenesisState>): _14.GenesisState;
            };
            Balance: {
                encode(message: _14.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Balance;
                fromPartial(object: Partial<_14.Balance>): _14.Balance;
            };
            Params: {
                encode(message: _13.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Params;
                fromPartial(object: Partial<_13.Params>): _13.Params;
            };
            SendEnabled: {
                encode(message: _13.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SendEnabled;
                fromPartial(object: Partial<_13.SendEnabled>): _13.SendEnabled;
            };
            Input: {
                encode(message: _13.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Input;
                fromPartial(object: Partial<_13.Input>): _13.Input;
            };
            Output: {
                encode(message: _13.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Output;
                fromPartial(object: Partial<_13.Output>): _13.Output;
            };
            Supply: {
                encode(message: _13.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Supply;
                fromPartial(object: Partial<_13.Supply>): _13.Supply;
            };
            DenomUnit: {
                encode(message: _13.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.DenomUnit;
                fromPartial(object: Partial<_13.DenomUnit>): _13.DenomUnit;
            };
            Metadata: {
                encode(message: _13.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Metadata;
                fromPartial(object: Partial<_13.Metadata>): _13.Metadata;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _17.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxResponse;
                    fromPartial(object: Partial<_17.TxResponse>): _17.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _17.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ABCIMessageLog;
                    fromPartial(object: Partial<_17.ABCIMessageLog>): _17.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _17.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.StringEvent;
                    fromPartial(object: Partial<_17.StringEvent>): _17.StringEvent;
                };
                Attribute: {
                    encode(message: _17.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Attribute;
                    fromPartial(object: Partial<_17.Attribute>): _17.Attribute;
                };
                GasInfo: {
                    encode(message: _17.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GasInfo;
                    fromPartial(object: Partial<_17.GasInfo>): _17.GasInfo;
                };
                Result: {
                    encode(message: _17.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Result;
                    fromPartial(object: Partial<_17.Result>): _17.Result;
                };
                SimulationResponse: {
                    encode(message: _17.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SimulationResponse;
                    fromPartial(object: Partial<_17.SimulationResponse>): _17.SimulationResponse;
                };
                MsgData: {
                    encode(message: _17.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgData;
                    fromPartial(object: Partial<_17.MsgData>): _17.MsgData;
                };
                TxMsgData: {
                    encode(message: _17.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxMsgData;
                    fromPartial(object: Partial<_17.TxMsgData>): _17.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _17.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SearchTxsResult;
                    fromPartial(object: Partial<_17.SearchTxsResult>): _17.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _18.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Pairs;
                    fromPartial(object: Partial<_18.Pairs>): _18.Pairs;
                };
                Pair: {
                    encode(message: _18.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Pair;
                    fromPartial(object: Partial<_18.Pair>): _18.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _19.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PageRequest;
                    fromPartial(object: Partial<_19.PageRequest>): _19.PageRequest;
                };
                PageResponse: {
                    encode(message: _19.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PageResponse;
                    fromPartial(object: Partial<_19.PageResponse>): _19.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _20.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListAllInterfacesRequest;
                    fromPartial(_: Partial<_20.ListAllInterfacesRequest>): _20.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _20.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListAllInterfacesResponse;
                    fromPartial(object: Partial<_20.ListAllInterfacesResponse>): _20.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _20.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListImplementationsRequest;
                    fromPartial(object: Partial<_20.ListImplementationsRequest>): _20.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _20.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.ListImplementationsResponse;
                    fromPartial(object: Partial<_20.ListImplementationsResponse>): _20.ListImplementationsResponse;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _21.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Snapshot;
                    fromPartial(object: Partial<_21.Snapshot>): _21.Snapshot;
                };
                Metadata: {
                    encode(message: _21.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Metadata;
                    fromPartial(object: Partial<_21.Metadata>): _21.Metadata;
                };
            };
        }
        namespace store {
            const v1beta1: {
                SnapshotItem: {
                    encode(message: _23.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotItem;
                    fromPartial(object: Partial<_23.SnapshotItem>): _23.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _23.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotStoreItem;
                    fromPartial(object: Partial<_23.SnapshotStoreItem>): _23.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _23.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SnapshotIAVLItem;
                    fromPartial(object: Partial<_23.SnapshotIAVLItem>): _23.SnapshotIAVLItem;
                };
                CommitInfo: {
                    encode(message: _22.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommitInfo;
                    fromPartial(object: Partial<_22.CommitInfo>): _22.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _22.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.StoreInfo;
                    fromPartial(object: Partial<_22.StoreInfo>): _22.StoreInfo;
                };
                CommitID: {
                    encode(message: _22.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommitID;
                    fromPartial(object: Partial<_22.CommitID>): _22.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _111.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                    getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                    getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                    getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _24.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetValidatorSetByHeightRequest;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightRequest>): _24.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _24.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetValidatorSetByHeightResponse;
                    fromPartial(object: Partial<_24.GetValidatorSetByHeightResponse>): _24.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _24.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestValidatorSetRequest;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetRequest>): _24.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _24.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestValidatorSetResponse;
                    fromPartial(object: Partial<_24.GetLatestValidatorSetResponse>): _24.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _24.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Validator;
                    fromPartial(object: Partial<_24.Validator>): _24.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _24.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetBlockByHeightRequest;
                    fromPartial(object: Partial<_24.GetBlockByHeightRequest>): _24.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _24.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetBlockByHeightResponse;
                    fromPartial(object: Partial<_24.GetBlockByHeightResponse>): _24.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _24.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestBlockRequest;
                    fromPartial(_: Partial<_24.GetLatestBlockRequest>): _24.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _24.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetLatestBlockResponse;
                    fromPartial(object: Partial<_24.GetLatestBlockResponse>): _24.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _24.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetSyncingRequest;
                    fromPartial(_: Partial<_24.GetSyncingRequest>): _24.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _24.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetSyncingResponse;
                    fromPartial(object: Partial<_24.GetSyncingResponse>): _24.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _24.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetNodeInfoRequest;
                    fromPartial(_: Partial<_24.GetNodeInfoRequest>): _24.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _24.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GetNodeInfoResponse;
                    fromPartial(object: Partial<_24.GetNodeInfoResponse>): _24.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _24.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.VersionInfo;
                    fromPartial(object: Partial<_24.VersionInfo>): _24.VersionInfo;
                };
                Module: {
                    encode(message: _24.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Module;
                    fromPartial(object: Partial<_24.Module>): _24.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _25.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Coin;
                fromPartial(object: Partial<_25.Coin>): _25.Coin;
            };
            DecCoin: {
                encode(message: _25.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DecCoin;
                fromPartial(object: Partial<_25.DecCoin>): _25.DecCoin;
            };
            IntProto: {
                encode(message: _25.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.IntProto;
                fromPartial(object: Partial<_25.IntProto>): _25.IntProto;
            };
            DecProto: {
                encode(message: _25.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DecProto;
                fromPartial(object: Partial<_25.DecProto>): _25.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _27.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisOwners;
                fromPartial(object: Partial<_27.GenesisOwners>): _27.GenesisOwners;
            };
            GenesisState: {
                encode(message: _27.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GenesisState;
                fromPartial(object: Partial<_27.GenesisState>): _27.GenesisState;
            };
            Capability: {
                encode(message: _26.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Capability;
                fromPartial(object: Partial<_26.Capability>): _26.Capability;
            };
            Owner: {
                encode(message: _26.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Owner;
                fromPartial(object: Partial<_26.Owner>): _26.Owner;
            };
            CapabilityOwners: {
                encode(message: _26.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.CapabilityOwners;
                fromPartial(object: Partial<_26.CapabilityOwners>): _26.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _122.MsgClientImpl;
            MsgVerifyInvariant: {
                encode(message: _29.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVerifyInvariant;
                fromPartial(object: Partial<_29.MsgVerifyInvariant>): _29.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _29.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVerifyInvariantResponse;
                fromPartial(_: Partial<_29.MsgVerifyInvariantResponse>): _29.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _28.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GenesisState;
                fromPartial(object: Partial<_28.GenesisState>): _28.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _30.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PubKey;
                fromPartial(object: Partial<_30.PubKey>): _30.PubKey;
            };
            PrivKey: {
                encode(message: _30.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PrivKey;
                fromPartial(object: Partial<_30.PrivKey>): _30.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _31.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.LegacyAminoPubKey;
                fromPartial(object: Partial<_31.LegacyAminoPubKey>): _31.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _32.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PubKey;
                fromPartial(object: Partial<_32.PubKey>): _32.PubKey;
            };
            PrivKey: {
                encode(message: _32.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.PrivKey;
                fromPartial(object: Partial<_32.PrivKey>): _32.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _123.MsgClientImpl;
            QueryClientImpl: typeof _112.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                validatorOutstandingRewards(request: _35.QueryValidatorOutstandingRewardsRequest): Promise<_35.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _35.QueryValidatorCommissionRequest): Promise<_35.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _35.QueryValidatorSlashesRequest): Promise<_35.QueryValidatorSlashesResponse>;
                delegationRewards(request: _35.QueryDelegationRewardsRequest): Promise<_35.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _35.QueryDelegationTotalRewardsRequest): Promise<_35.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _35.QueryDelegatorWithdrawAddressRequest): Promise<_35.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _35.QueryCommunityPoolRequest): Promise<_35.QueryCommunityPoolResponse>;
            };
            MsgSetWithdrawAddress: {
                encode(message: _36.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSetWithdrawAddress;
                fromPartial(object: Partial<_36.MsgSetWithdrawAddress>): _36.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _36.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSetWithdrawAddressResponse;
                fromPartial(_: Partial<_36.MsgSetWithdrawAddressResponse>): _36.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _36.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawDelegatorReward;
                fromPartial(object: Partial<_36.MsgWithdrawDelegatorReward>): _36.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _36.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawDelegatorRewardResponse;
                fromPartial(_: Partial<_36.MsgWithdrawDelegatorRewardResponse>): _36.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _36.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawValidatorCommission;
                fromPartial(object: Partial<_36.MsgWithdrawValidatorCommission>): _36.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _36.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgWithdrawValidatorCommissionResponse;
                fromPartial(_: Partial<_36.MsgWithdrawValidatorCommissionResponse>): _36.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _36.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgFundCommunityPool;
                fromPartial(object: Partial<_36.MsgFundCommunityPool>): _36.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _36.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgFundCommunityPoolResponse;
                fromPartial(_: Partial<_36.MsgFundCommunityPoolResponse>): _36.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(_: Partial<_35.QueryParamsRequest>): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: Partial<_35.QueryParamsResponse>): _35.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _35.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: Partial<_35.QueryValidatorOutstandingRewardsRequest>): _35.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _35.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: Partial<_35.QueryValidatorOutstandingRewardsResponse>): _35.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _35.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorCommissionRequest;
                fromPartial(object: Partial<_35.QueryValidatorCommissionRequest>): _35.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _35.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorCommissionResponse;
                fromPartial(object: Partial<_35.QueryValidatorCommissionResponse>): _35.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _35.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorSlashesRequest;
                fromPartial(object: Partial<_35.QueryValidatorSlashesRequest>): _35.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _35.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorSlashesResponse;
                fromPartial(object: Partial<_35.QueryValidatorSlashesResponse>): _35.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _35.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRewardsRequest;
                fromPartial(object: Partial<_35.QueryDelegationRewardsRequest>): _35.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _35.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRewardsResponse;
                fromPartial(object: Partial<_35.QueryDelegationRewardsResponse>): _35.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _35.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationTotalRewardsRequest;
                fromPartial(object: Partial<_35.QueryDelegationTotalRewardsRequest>): _35.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _35.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationTotalRewardsResponse;
                fromPartial(object: Partial<_35.QueryDelegationTotalRewardsResponse>): _35.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _35.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsRequest>): _35.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _35.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_35.QueryDelegatorValidatorsResponse>): _35.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _35.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: Partial<_35.QueryDelegatorWithdrawAddressRequest>): _35.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _35.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: Partial<_35.QueryDelegatorWithdrawAddressResponse>): _35.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _35.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryCommunityPoolRequest;
                fromPartial(_: Partial<_35.QueryCommunityPoolRequest>): _35.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _35.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryCommunityPoolResponse;
                fromPartial(object: Partial<_35.QueryCommunityPoolResponse>): _35.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _34.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorWithdrawInfo;
                fromPartial(object: Partial<_34.DelegatorWithdrawInfo>): _34.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _34.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorOutstandingRewardsRecord;
                fromPartial(object: Partial<_34.ValidatorOutstandingRewardsRecord>): _34.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _34.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: Partial<_34.ValidatorAccumulatedCommissionRecord>): _34.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _34.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorHistoricalRewardsRecord;
                fromPartial(object: Partial<_34.ValidatorHistoricalRewardsRecord>): _34.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _34.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorCurrentRewardsRecord;
                fromPartial(object: Partial<_34.ValidatorCurrentRewardsRecord>): _34.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _34.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DelegatorStartingInfoRecord;
                fromPartial(object: Partial<_34.DelegatorStartingInfoRecord>): _34.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _34.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ValidatorSlashEventRecord;
                fromPartial(object: Partial<_34.ValidatorSlashEventRecord>): _34.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: Partial<_34.GenesisState>): _34.GenesisState;
            };
            Params: {
                encode(message: _33.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Params;
                fromPartial(object: Partial<_33.Params>): _33.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _33.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorHistoricalRewards;
                fromPartial(object: Partial<_33.ValidatorHistoricalRewards>): _33.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _33.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorCurrentRewards;
                fromPartial(object: Partial<_33.ValidatorCurrentRewards>): _33.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _33.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorAccumulatedCommission;
                fromPartial(object: Partial<_33.ValidatorAccumulatedCommission>): _33.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _33.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorOutstandingRewards;
                fromPartial(object: Partial<_33.ValidatorOutstandingRewards>): _33.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _33.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEvent;
                fromPartial(object: Partial<_33.ValidatorSlashEvent>): _33.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _33.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEvents;
                fromPartial(object: Partial<_33.ValidatorSlashEvents>): _33.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _33.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.FeePool;
                fromPartial(object: Partial<_33.FeePool>): _33.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _33.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CommunityPoolSpendProposal;
                fromPartial(object: Partial<_33.CommunityPoolSpendProposal>): _33.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _33.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegatorStartingInfo;
                fromPartial(object: Partial<_33.DelegatorStartingInfo>): _33.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _33.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegationDelegatorReward;
                fromPartial(object: Partial<_33.DelegationDelegatorReward>): _33.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _33.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: Partial<_33.CommunityPoolSpendProposalWithDeposit>): _33.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _124.MsgClientImpl;
            QueryClientImpl: typeof _113.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _39.QueryEvidenceRequest): Promise<_39.QueryEvidenceResponse>;
                allEvidence(request?: _39.QueryAllEvidenceRequest): Promise<_39.QueryAllEvidenceResponse>;
            };
            MsgSubmitEvidence: {
                encode(message: _40.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSubmitEvidence;
                fromPartial(object: Partial<_40.MsgSubmitEvidence>): _40.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _40.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSubmitEvidenceResponse;
                fromPartial(object: Partial<_40.MsgSubmitEvidenceResponse>): _40.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _39.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryEvidenceRequest;
                fromPartial(object: Partial<_39.QueryEvidenceRequest>): _39.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _39.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryEvidenceResponse;
                fromPartial(object: Partial<_39.QueryEvidenceResponse>): _39.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _39.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAllEvidenceRequest;
                fromPartial(object: Partial<_39.QueryAllEvidenceRequest>): _39.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _39.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAllEvidenceResponse;
                fromPartial(object: Partial<_39.QueryAllEvidenceResponse>): _39.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromPartial(object: Partial<_38.GenesisState>): _38.GenesisState;
            };
            Equivocation: {
                encode(message: _37.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Equivocation;
                fromPartial(object: Partial<_37.Equivocation>): _37.Equivocation;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromPartial(object: Partial<_41.GenesisState>): _41.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _125.MsgClientImpl;
            QueryClientImpl: typeof _114.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _44.QueryProposalRequest): Promise<_44.QueryProposalResponse>;
                proposals(request: _44.QueryProposalsRequest): Promise<_44.QueryProposalsResponse>;
                vote(request: _44.QueryVoteRequest): Promise<_44.QueryVoteResponse>;
                votes(request: _44.QueryVotesRequest): Promise<_44.QueryVotesResponse>;
                params(request: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                deposit(request: _44.QueryDepositRequest): Promise<_44.QueryDepositResponse>;
                deposits(request: _44.QueryDepositsRequest): Promise<_44.QueryDepositsResponse>;
                tallyResult(request: _44.QueryTallyResultRequest): Promise<_44.QueryTallyResultResponse>;
            };
            MsgSubmitProposal: {
                encode(message: _45.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitProposal;
                fromPartial(object: Partial<_45.MsgSubmitProposal>): _45.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _45.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgSubmitProposalResponse;
                fromPartial(object: Partial<_45.MsgSubmitProposalResponse>): _45.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _45.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgVote;
                fromPartial(object: Partial<_45.MsgVote>): _45.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _45.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgVoteResponse;
                fromPartial(_: Partial<_45.MsgVoteResponse>): _45.MsgVoteResponse;
            };
            MsgDeposit: {
                encode(message: _45.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgDeposit;
                fromPartial(object: Partial<_45.MsgDeposit>): _45.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _45.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgDepositResponse;
                fromPartial(_: Partial<_45.MsgDepositResponse>): _45.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _44.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryProposalRequest;
                fromPartial(object: Partial<_44.QueryProposalRequest>): _44.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _44.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryProposalResponse;
                fromPartial(object: Partial<_44.QueryProposalResponse>): _44.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _44.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryProposalsRequest;
                fromPartial(object: Partial<_44.QueryProposalsRequest>): _44.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _44.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryProposalsResponse;
                fromPartial(object: Partial<_44.QueryProposalsResponse>): _44.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _44.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryVoteRequest;
                fromPartial(object: Partial<_44.QueryVoteRequest>): _44.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _44.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryVoteResponse;
                fromPartial(object: Partial<_44.QueryVoteResponse>): _44.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _44.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryVotesRequest;
                fromPartial(object: Partial<_44.QueryVotesRequest>): _44.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _44.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryVotesResponse;
                fromPartial(object: Partial<_44.QueryVotesResponse>): _44.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _44.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryParamsRequest;
                fromPartial(object: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _44.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryParamsResponse;
                fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _44.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDepositRequest;
                fromPartial(object: Partial<_44.QueryDepositRequest>): _44.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _44.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDepositResponse;
                fromPartial(object: Partial<_44.QueryDepositResponse>): _44.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _44.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDepositsRequest;
                fromPartial(object: Partial<_44.QueryDepositsRequest>): _44.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _44.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryDepositsResponse;
                fromPartial(object: Partial<_44.QueryDepositsResponse>): _44.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _44.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryTallyResultRequest;
                fromPartial(object: Partial<_44.QueryTallyResultRequest>): _44.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _44.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryTallyResultResponse;
                fromPartial(object: Partial<_44.QueryTallyResultResponse>): _44.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _43.VoteOption;
            voteOptionToJSON(object: _43.VoteOption): string;
            proposalStatusFromJSON(object: any): _43.ProposalStatus;
            proposalStatusToJSON(object: _43.ProposalStatus): string;
            VoteOption: typeof _43.VoteOption;
            VoteOptionSDKType: typeof _43.VoteOptionSDKType;
            ProposalStatus: typeof _43.ProposalStatus;
            ProposalStatusSDKType: typeof _43.ProposalStatusSDKType;
            TextProposal: {
                encode(message: _43.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TextProposal;
                fromPartial(object: Partial<_43.TextProposal>): _43.TextProposal;
            };
            Deposit: {
                encode(message: _43.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Deposit;
                fromPartial(object: Partial<_43.Deposit>): _43.Deposit;
            };
            Proposal: {
                encode(message: _43.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Proposal;
                fromPartial(object: Partial<_43.Proposal>): _43.Proposal;
            };
            TallyResult: {
                encode(message: _43.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TallyResult;
                fromPartial(object: Partial<_43.TallyResult>): _43.TallyResult;
            };
            Vote: {
                encode(message: _43.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Vote;
                fromPartial(object: Partial<_43.Vote>): _43.Vote;
            };
            DepositParams: {
                encode(message: _43.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.DepositParams;
                fromPartial(object: Partial<_43.DepositParams>): _43.DepositParams;
            };
            VotingParams: {
                encode(message: _43.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.VotingParams;
                fromPartial(object: Partial<_43.VotingParams>): _43.VotingParams;
            };
            TallyParams: {
                encode(message: _43.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.TallyParams;
                fromPartial(object: Partial<_43.TallyParams>): _43.TallyParams;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromPartial(object: Partial<_42.GenesisState>): _42.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _115.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                inflation(request?: _48.QueryInflationRequest): Promise<_48.QueryInflationResponse>;
                annualProvisions(request?: _48.QueryAnnualProvisionsRequest): Promise<_48.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _48.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryInflationRequest;
                fromPartial(_: Partial<_48.QueryInflationRequest>): _48.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _48.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryInflationResponse;
                fromPartial(object: Partial<_48.QueryInflationResponse>): _48.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _48.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAnnualProvisionsRequest;
                fromPartial(_: Partial<_48.QueryAnnualProvisionsRequest>): _48.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _48.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryAnnualProvisionsResponse;
                fromPartial(object: Partial<_48.QueryAnnualProvisionsResponse>): _48.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _47.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Minter;
                fromPartial(object: Partial<_47.Minter>): _47.Minter;
            };
            Params: {
                encode(message: _47.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Params;
                fromPartial(object: Partial<_47.Params>): _47.Params;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _116.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                encode(message: _50.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryParamsRequest;
                fromPartial(object: Partial<_50.QueryParamsRequest>): _50.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _50.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryParamsResponse;
                fromPartial(object: Partial<_50.QueryParamsResponse>): _50.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _49.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ParameterChangeProposal;
                fromPartial(object: Partial<_49.ParameterChangeProposal>): _49.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _49.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ParamChange;
                fromPartial(object: Partial<_49.ParamChange>): _49.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _126.MsgClientImpl;
            QueryClientImpl: typeof _117.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                signingInfo(request: _52.QuerySigningInfoRequest): Promise<_52.QuerySigningInfoResponse>;
                signingInfos(request?: _52.QuerySigningInfosRequest): Promise<_52.QuerySigningInfosResponse>;
            };
            MsgUnjail: {
                encode(message: _54.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgUnjail;
                fromPartial(object: Partial<_54.MsgUnjail>): _54.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _54.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.MsgUnjailResponse;
                fromPartial(_: Partial<_54.MsgUnjailResponse>): _54.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _53.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ValidatorSigningInfo;
                fromPartial(object: Partial<_53.ValidatorSigningInfo>): _53.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Params;
                fromPartial(object: Partial<_53.Params>): _53.Params;
            };
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _52.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QuerySigningInfoRequest;
                fromPartial(object: Partial<_52.QuerySigningInfoRequest>): _52.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _52.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QuerySigningInfoResponse;
                fromPartial(object: Partial<_52.QuerySigningInfoResponse>): _52.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _52.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QuerySigningInfosRequest;
                fromPartial(object: Partial<_52.QuerySigningInfosRequest>): _52.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _52.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QuerySigningInfosResponse;
                fromPartial(object: Partial<_52.QuerySigningInfosResponse>): _52.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _51.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.GenesisState;
                fromPartial(object: Partial<_51.GenesisState>): _51.GenesisState;
            };
            SigningInfo: {
                encode(message: _51.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SigningInfo;
                fromPartial(object: Partial<_51.SigningInfo>): _51.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _51.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ValidatorMissedBlocks;
                fromPartial(object: Partial<_51.ValidatorMissedBlocks>): _51.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _51.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MissedBlock;
                fromPartial(object: Partial<_51.MissedBlock>): _51.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _127.MsgClientImpl;
            QueryClientImpl: typeof _118.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _56.QueryValidatorsRequest): Promise<_56.QueryValidatorsResponse>;
                validator(request: _56.QueryValidatorRequest): Promise<_56.QueryValidatorResponse>;
                validatorDelegations(request: _56.QueryValidatorDelegationsRequest): Promise<_56.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _56.QueryValidatorUnbondingDelegationsRequest): Promise<_56.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _56.QueryDelegationRequest): Promise<_56.QueryDelegationResponse>;
                unbondingDelegation(request: _56.QueryUnbondingDelegationRequest): Promise<_56.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _56.QueryDelegatorDelegationsRequest): Promise<_56.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _56.QueryDelegatorUnbondingDelegationsRequest): Promise<_56.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _56.QueryRedelegationsRequest): Promise<_56.QueryRedelegationsResponse>;
                delegatorValidators(request: _56.QueryDelegatorValidatorsRequest): Promise<_56.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _56.QueryDelegatorValidatorRequest): Promise<_56.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _56.QueryHistoricalInfoRequest): Promise<_56.QueryHistoricalInfoResponse>;
                pool(request?: _56.QueryPoolRequest): Promise<_56.QueryPoolResponse>;
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
            };
            MsgCreateValidator: {
                encode(message: _58.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCreateValidator;
                fromPartial(object: Partial<_58.MsgCreateValidator>): _58.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _58.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgCreateValidatorResponse;
                fromPartial(_: Partial<_58.MsgCreateValidatorResponse>): _58.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _58.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgEditValidator;
                fromPartial(object: Partial<_58.MsgEditValidator>): _58.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _58.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgEditValidatorResponse;
                fromPartial(_: Partial<_58.MsgEditValidatorResponse>): _58.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _58.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDelegate;
                fromPartial(object: Partial<_58.MsgDelegate>): _58.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _58.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgDelegateResponse;
                fromPartial(_: Partial<_58.MsgDelegateResponse>): _58.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _58.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgBeginRedelegate;
                fromPartial(object: Partial<_58.MsgBeginRedelegate>): _58.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _58.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgBeginRedelegateResponse;
                fromPartial(object: Partial<_58.MsgBeginRedelegateResponse>): _58.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _58.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUndelegate;
                fromPartial(object: Partial<_58.MsgUndelegate>): _58.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _58.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUndelegateResponse;
                fromPartial(object: Partial<_58.MsgUndelegateResponse>): _58.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _57.BondStatus;
            bondStatusToJSON(object: _57.BondStatus): string;
            BondStatus: typeof _57.BondStatus;
            BondStatusSDKType: typeof _57.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _57.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.HistoricalInfo;
                fromPartial(object: Partial<_57.HistoricalInfo>): _57.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _57.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CommissionRates;
                fromPartial(object: Partial<_57.CommissionRates>): _57.CommissionRates;
            };
            Commission: {
                encode(message: _57.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Commission;
                fromPartial(object: Partial<_57.Commission>): _57.Commission;
            };
            Description: {
                encode(message: _57.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Description;
                fromPartial(object: Partial<_57.Description>): _57.Description;
            };
            Validator: {
                encode(message: _57.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Validator;
                fromPartial(object: Partial<_57.Validator>): _57.Validator;
            };
            ValAddresses: {
                encode(message: _57.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValAddresses;
                fromPartial(object: Partial<_57.ValAddresses>): _57.ValAddresses;
            };
            DVPair: {
                encode(message: _57.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DVPair;
                fromPartial(object: Partial<_57.DVPair>): _57.DVPair;
            };
            DVPairs: {
                encode(message: _57.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DVPairs;
                fromPartial(object: Partial<_57.DVPairs>): _57.DVPairs;
            };
            DVVTriplet: {
                encode(message: _57.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DVVTriplet;
                fromPartial(object: Partial<_57.DVVTriplet>): _57.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _57.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DVVTriplets;
                fromPartial(object: Partial<_57.DVVTriplets>): _57.DVVTriplets;
            };
            Delegation: {
                encode(message: _57.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Delegation;
                fromPartial(object: Partial<_57.Delegation>): _57.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _57.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.UnbondingDelegation;
                fromPartial(object: Partial<_57.UnbondingDelegation>): _57.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _57.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.UnbondingDelegationEntry;
                fromPartial(object: Partial<_57.UnbondingDelegationEntry>): _57.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _57.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RedelegationEntry;
                fromPartial(object: Partial<_57.RedelegationEntry>): _57.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _57.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Redelegation;
                fromPartial(object: Partial<_57.Redelegation>): _57.Redelegation;
            };
            Params: {
                encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Params;
                fromPartial(object: Partial<_57.Params>): _57.Params;
            };
            DelegationResponse: {
                encode(message: _57.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.DelegationResponse;
                fromPartial(object: Partial<_57.DelegationResponse>): _57.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _57.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RedelegationEntryResponse;
                fromPartial(object: Partial<_57.RedelegationEntryResponse>): _57.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _57.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.RedelegationResponse;
                fromPartial(object: Partial<_57.RedelegationResponse>): _57.RedelegationResponse;
            };
            Pool: {
                encode(message: _57.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Pool;
                fromPartial(object: Partial<_57.Pool>): _57.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _56.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorsRequest;
                fromPartial(object: Partial<_56.QueryValidatorsRequest>): _56.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _56.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorsResponse;
                fromPartial(object: Partial<_56.QueryValidatorsResponse>): _56.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _56.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorRequest;
                fromPartial(object: Partial<_56.QueryValidatorRequest>): _56.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _56.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorResponse;
                fromPartial(object: Partial<_56.QueryValidatorResponse>): _56.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _56.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorDelegationsRequest;
                fromPartial(object: Partial<_56.QueryValidatorDelegationsRequest>): _56.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _56.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorDelegationsResponse;
                fromPartial(object: Partial<_56.QueryValidatorDelegationsResponse>): _56.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _56.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_56.QueryValidatorUnbondingDelegationsRequest>): _56.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _56.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_56.QueryValidatorUnbondingDelegationsResponse>): _56.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _56.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegationRequest;
                fromPartial(object: Partial<_56.QueryDelegationRequest>): _56.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _56.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegationResponse;
                fromPartial(object: Partial<_56.QueryDelegationResponse>): _56.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _56.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryUnbondingDelegationRequest;
                fromPartial(object: Partial<_56.QueryUnbondingDelegationRequest>): _56.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _56.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryUnbondingDelegationResponse;
                fromPartial(object: Partial<_56.QueryUnbondingDelegationResponse>): _56.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _56.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorDelegationsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorDelegationsRequest>): _56.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _56.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorDelegationsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorDelegationsResponse>): _56.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _56.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorUnbondingDelegationsRequest>): _56.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _56.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorUnbondingDelegationsResponse>): _56.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _56.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryRedelegationsRequest;
                fromPartial(object: Partial<_56.QueryRedelegationsRequest>): _56.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _56.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryRedelegationsResponse;
                fromPartial(object: Partial<_56.QueryRedelegationsResponse>): _56.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _56.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorValidatorsRequest;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsRequest>): _56.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _56.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorValidatorsResponse;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsResponse>): _56.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _56.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorValidatorRequest;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorRequest>): _56.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _56.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryDelegatorValidatorResponse;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorResponse>): _56.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _56.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryHistoricalInfoRequest;
                fromPartial(object: Partial<_56.QueryHistoricalInfoRequest>): _56.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _56.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryHistoricalInfoResponse;
                fromPartial(object: Partial<_56.QueryHistoricalInfoResponse>): _56.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _56.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryPoolRequest;
                fromPartial(_: Partial<_56.QueryPoolRequest>): _56.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _56.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryPoolResponse;
                fromPartial(object: Partial<_56.QueryPoolResponse>): _56.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _55.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.LastValidatorPower;
                fromPartial(object: Partial<_55.LastValidatorPower>): _55.LastValidatorPower;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _59.SignMode;
                signModeToJSON(object: _59.SignMode): string;
                SignMode: typeof _59.SignMode;
                SignModeSDKType: typeof _59.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _59.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SignatureDescriptors;
                    fromPartial(object: Partial<_59.SignatureDescriptors>): _59.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _59.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SignatureDescriptor;
                    fromPartial(object: Partial<_59.SignatureDescriptor>): _59.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _59.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SignatureDescriptor_Data;
                    fromPartial(object: Partial<_59.SignatureDescriptor_Data>): _59.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _59.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SignatureDescriptor_Data_Single;
                    fromPartial(object: Partial<_59.SignatureDescriptor_Data_Single>): _59.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _59.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.SignatureDescriptor_Data_Multi;
                    fromPartial(object: Partial<_59.SignatureDescriptor_Data_Multi>): _59.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _119.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _60.SimulateRequest): Promise<_60.SimulateResponse>;
                getTx(request: _60.GetTxRequest): Promise<_60.GetTxResponse>;
                broadcastTx(request: _60.BroadcastTxRequest): Promise<_60.BroadcastTxResponse>;
                getTxsEvent(request: _60.GetTxsEventRequest): Promise<_60.GetTxsEventResponse>;
            };
            Tx: {
                encode(message: _61.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Tx;
                fromPartial(object: Partial<_61.Tx>): _61.Tx;
            };
            TxRaw: {
                encode(message: _61.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.TxRaw;
                fromPartial(object: Partial<_61.TxRaw>): _61.TxRaw;
            };
            SignDoc: {
                encode(message: _61.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.SignDoc;
                fromPartial(object: Partial<_61.SignDoc>): _61.SignDoc;
            };
            TxBody: {
                encode(message: _61.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.TxBody;
                fromPartial(object: Partial<_61.TxBody>): _61.TxBody;
            };
            AuthInfo: {
                encode(message: _61.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.AuthInfo;
                fromPartial(object: Partial<_61.AuthInfo>): _61.AuthInfo;
            };
            SignerInfo: {
                encode(message: _61.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.SignerInfo;
                fromPartial(object: Partial<_61.SignerInfo>): _61.SignerInfo;
            };
            ModeInfo: {
                encode(message: _61.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ModeInfo;
                fromPartial(object: Partial<_61.ModeInfo>): _61.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _61.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ModeInfo_Single;
                fromPartial(object: Partial<_61.ModeInfo_Single>): _61.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _61.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ModeInfo_Multi;
                fromPartial(object: Partial<_61.ModeInfo_Multi>): _61.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _61.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Fee;
                fromPartial(object: Partial<_61.Fee>): _61.Fee;
            };
            broadcastModeFromJSON(object: any): _60.BroadcastMode;
            broadcastModeToJSON(object: _60.BroadcastMode): string;
            BroadcastMode: typeof _60.BroadcastMode;
            BroadcastModeSDKType: typeof _60.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _60.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GetTxsEventRequest;
                fromPartial(object: Partial<_60.GetTxsEventRequest>): _60.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _60.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GetTxsEventResponse;
                fromPartial(object: Partial<_60.GetTxsEventResponse>): _60.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _60.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.BroadcastTxRequest;
                fromPartial(object: Partial<_60.BroadcastTxRequest>): _60.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _60.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.BroadcastTxResponse;
                fromPartial(object: Partial<_60.BroadcastTxResponse>): _60.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _60.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.SimulateRequest;
                fromPartial(object: Partial<_60.SimulateRequest>): _60.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _60.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.SimulateResponse;
                fromPartial(object: Partial<_60.SimulateResponse>): _60.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _60.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GetTxRequest;
                fromPartial(object: Partial<_60.GetTxRequest>): _60.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _60.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GetTxResponse;
                fromPartial(object: Partial<_60.GetTxResponse>): _60.GetTxResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _120.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _62.QueryCurrentPlanRequest): Promise<_62.QueryCurrentPlanResponse>;
                appliedPlan(request: _62.QueryAppliedPlanRequest): Promise<_62.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _62.QueryUpgradedConsensusStateRequest): Promise<_62.QueryUpgradedConsensusStateResponse>;
            };
            Plan: {
                encode(message: _63.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Plan;
                fromPartial(object: Partial<_63.Plan>): _63.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _63.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SoftwareUpgradeProposal;
                fromPartial(object: Partial<_63.SoftwareUpgradeProposal>): _63.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _63.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.CancelSoftwareUpgradeProposal;
                fromPartial(object: Partial<_63.CancelSoftwareUpgradeProposal>): _63.CancelSoftwareUpgradeProposal;
            };
            QueryCurrentPlanRequest: {
                encode(_: _62.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryCurrentPlanRequest;
                fromPartial(_: Partial<_62.QueryCurrentPlanRequest>): _62.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _62.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryCurrentPlanResponse;
                fromPartial(object: Partial<_62.QueryCurrentPlanResponse>): _62.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _62.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAppliedPlanRequest;
                fromPartial(object: Partial<_62.QueryAppliedPlanRequest>): _62.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _62.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryAppliedPlanResponse;
                fromPartial(object: Partial<_62.QueryAppliedPlanResponse>): _62.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _62.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryUpgradedConsensusStateRequest;
                fromPartial(object: Partial<_62.QueryUpgradedConsensusStateRequest>): _62.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _62.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryUpgradedConsensusStateResponse;
                fromPartial(object: Partial<_62.QueryUpgradedConsensusStateResponse>): _62.QueryUpgradedConsensusStateResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _128.MsgClientImpl;
            BaseVestingAccount: {
                encode(message: _65.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BaseVestingAccount;
                fromPartial(object: Partial<_65.BaseVestingAccount>): _65.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _65.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.ContinuousVestingAccount;
                fromPartial(object: Partial<_65.ContinuousVestingAccount>): _65.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _65.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.DelayedVestingAccount;
                fromPartial(object: Partial<_65.DelayedVestingAccount>): _65.DelayedVestingAccount;
            };
            Period: {
                encode(message: _65.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Period;
                fromPartial(object: Partial<_65.Period>): _65.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _65.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.PeriodicVestingAccount;
                fromPartial(object: Partial<_65.PeriodicVestingAccount>): _65.PeriodicVestingAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _64.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateVestingAccount;
                fromPartial(object: Partial<_64.MsgCreateVestingAccount>): _64.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _64.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgCreateVestingAccountResponse;
                fromPartial(_: Partial<_64.MsgCreateVestingAccountResponse>): _64.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                bank: {
                    v1beta1: _121.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _122.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _123.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _124.MsgClientImpl;
                };
                gov: {
                    v1beta1: _125.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _126.MsgClientImpl;
                };
                staking: {
                    v1beta1: _127.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _128.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        account(request: _12.QueryAccountRequest): Promise<_12.QueryAccountResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _15.QueryBalanceRequest): Promise<_15.QueryBalanceResponse>;
                        allBalances(request: _15.QueryAllBalancesRequest): Promise<_15.QueryAllBalancesResponse>;
                        totalSupply(request?: _15.QueryTotalSupplyRequest): Promise<_15.QueryTotalSupplyResponse>;
                        supplyOf(request: _15.QuerySupplyOfRequest): Promise<_15.QuerySupplyOfResponse>;
                        params(request?: _15.QueryParamsRequest): Promise<_15.QueryParamsResponse>;
                        denomMetadata(request: _15.QueryDenomMetadataRequest): Promise<_15.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _15.QueryDenomsMetadataRequest): Promise<_15.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _24.GetNodeInfoRequest): Promise<_24.GetNodeInfoResponse>;
                            getSyncing(request?: _24.GetSyncingRequest): Promise<_24.GetSyncingResponse>;
                            getLatestBlock(request?: _24.GetLatestBlockRequest): Promise<_24.GetLatestBlockResponse>;
                            getBlockByHeight(request: _24.GetBlockByHeightRequest): Promise<_24.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _24.GetLatestValidatorSetRequest): Promise<_24.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _24.GetValidatorSetByHeightRequest): Promise<_24.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _35.QueryValidatorOutstandingRewardsRequest): Promise<_35.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _35.QueryValidatorCommissionRequest): Promise<_35.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _35.QueryValidatorSlashesRequest): Promise<_35.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _35.QueryDelegationRewardsRequest): Promise<_35.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _35.QueryDelegationTotalRewardsRequest): Promise<_35.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _35.QueryDelegatorWithdrawAddressRequest): Promise<_35.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _35.QueryCommunityPoolRequest): Promise<_35.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _39.QueryEvidenceRequest): Promise<_39.QueryEvidenceResponse>;
                        allEvidence(request?: _39.QueryAllEvidenceRequest): Promise<_39.QueryAllEvidenceResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _44.QueryProposalRequest): Promise<_44.QueryProposalResponse>;
                        proposals(request: _44.QueryProposalsRequest): Promise<_44.QueryProposalsResponse>;
                        vote(request: _44.QueryVoteRequest): Promise<_44.QueryVoteResponse>;
                        votes(request: _44.QueryVotesRequest): Promise<_44.QueryVotesResponse>;
                        params(request: _44.QueryParamsRequest): Promise<_44.QueryParamsResponse>;
                        deposit(request: _44.QueryDepositRequest): Promise<_44.QueryDepositResponse>;
                        deposits(request: _44.QueryDepositsRequest): Promise<_44.QueryDepositsResponse>;
                        tallyResult(request: _44.QueryTallyResultRequest): Promise<_44.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        inflation(request?: _48.QueryInflationRequest): Promise<_48.QueryInflationResponse>;
                        annualProvisions(request?: _48.QueryAnnualProvisionsRequest): Promise<_48.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _50.QueryParamsRequest): Promise<_50.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        signingInfo(request: _52.QuerySigningInfoRequest): Promise<_52.QuerySigningInfoResponse>;
                        signingInfos(request?: _52.QuerySigningInfosRequest): Promise<_52.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _56.QueryValidatorsRequest): Promise<_56.QueryValidatorsResponse>;
                        validator(request: _56.QueryValidatorRequest): Promise<_56.QueryValidatorResponse>;
                        validatorDelegations(request: _56.QueryValidatorDelegationsRequest): Promise<_56.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _56.QueryValidatorUnbondingDelegationsRequest): Promise<_56.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _56.QueryDelegationRequest): Promise<_56.QueryDelegationResponse>;
                        unbondingDelegation(request: _56.QueryUnbondingDelegationRequest): Promise<_56.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _56.QueryDelegatorDelegationsRequest): Promise<_56.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _56.QueryDelegatorUnbondingDelegationsRequest): Promise<_56.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _56.QueryRedelegationsRequest): Promise<_56.QueryRedelegationsResponse>;
                        delegatorValidators(request: _56.QueryDelegatorValidatorsRequest): Promise<_56.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _56.QueryDelegatorValidatorRequest): Promise<_56.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _56.QueryHistoricalInfoRequest): Promise<_56.QueryHistoricalInfoResponse>;
                        pool(request?: _56.QueryPoolRequest): Promise<_56.QueryPoolResponse>;
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _60.SimulateRequest): Promise<_60.SimulateResponse>;
                        getTx(request: _60.GetTxRequest): Promise<_60.GetTxResponse>;
                        broadcastTx(request: _60.BroadcastTxRequest): Promise<_60.BroadcastTxResponse>;
                        getTxsEvent(request: _60.GetTxsEventRequest): Promise<_60.GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _62.QueryCurrentPlanRequest): Promise<_62.QueryCurrentPlanResponse>;
                        appliedPlan(request: _62.QueryAppliedPlanRequest): Promise<_62.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _62.QueryUpgradedConsensusStateRequest): Promise<_62.QueryUpgradedConsensusStateResponse>;
                    };
                };
            };
        }>;
    };
}
