import * as _0 from "./rewards/v1beta1/events";
import * as _1 from "./rewards/v1beta1/genesis";
import * as _2 from "./rewards/v1beta1/query";
import * as _3 from "./rewards/v1beta1/rewards";
import * as _4 from "./rewards/v1beta1/tx";
import * as _5 from "./tracking/v1beta1/genesis";
import * as _6 from "./tracking/v1beta1/query";
import * as _7 from "./tracking/v1beta1/tracking";
import * as _106 from "./rewards/v1beta1/query.rpc.Query";
import * as _107 from "./tracking/v1beta1/query.rpc.Query";
import * as _108 from "./rewards/v1beta1/tx.rpc.msg";
export declare namespace archway {
    namespace rewards {
        const v1beta1: {
            MsgClientImpl: typeof _108.MsgClientImpl;
            QueryClientImpl: typeof _106.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                contractMetadata(request: _2.QueryContractMetadataRequest): Promise<_2.QueryContractMetadataResponse>;
                blockRewardsTracking(request?: _2.QueryBlockRewardsTrackingRequest): Promise<_2.QueryBlockRewardsTrackingResponse>;
                rewardsPool(request?: _2.QueryRewardsPoolRequest): Promise<_2.QueryRewardsPoolResponse>;
                estimateTxFees(request: _2.QueryEstimateTxFeesRequest): Promise<_2.QueryEstimateTxFeesResponse>;
                rewardsRecords(request: _2.QueryRewardsRecordsRequest): Promise<_2.QueryRewardsRecordsResponse>;
                outstandingRewards(request: _2.QueryOutstandingRewardsRequest): Promise<_2.QueryOutstandingRewardsResponse>;
                flatFee(request: _2.QueryFlatFeeRequest): Promise<_2.QueryFlatFeeResponse>;
            };
            MsgSetContractMetadata: {
                encode(message: _4.MsgSetContractMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgSetContractMetadata;
                fromPartial(object: Partial<_4.MsgSetContractMetadata>): _4.MsgSetContractMetadata;
            };
            MsgSetContractMetadataResponse: {
                encode(_: _4.MsgSetContractMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgSetContractMetadataResponse;
                fromPartial(_: Partial<_4.MsgSetContractMetadataResponse>): _4.MsgSetContractMetadataResponse;
            };
            MsgWithdrawRewards: {
                encode(message: _4.MsgWithdrawRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgWithdrawRewards;
                fromPartial(object: Partial<_4.MsgWithdrawRewards>): _4.MsgWithdrawRewards;
            };
            MsgWithdrawRewards_RecordsLimit: {
                encode(message: _4.MsgWithdrawRewards_RecordsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgWithdrawRewards_RecordsLimit;
                fromPartial(object: Partial<_4.MsgWithdrawRewards_RecordsLimit>): _4.MsgWithdrawRewards_RecordsLimit;
            };
            MsgWithdrawRewards_RecordIDs: {
                encode(message: _4.MsgWithdrawRewards_RecordIDs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgWithdrawRewards_RecordIDs;
                fromPartial(object: Partial<_4.MsgWithdrawRewards_RecordIDs>): _4.MsgWithdrawRewards_RecordIDs;
            };
            MsgWithdrawRewardsResponse: {
                encode(message: _4.MsgWithdrawRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgWithdrawRewardsResponse;
                fromPartial(object: Partial<_4.MsgWithdrawRewardsResponse>): _4.MsgWithdrawRewardsResponse;
            };
            MsgSetFlatFee: {
                encode(message: _4.MsgSetFlatFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgSetFlatFee;
                fromPartial(object: Partial<_4.MsgSetFlatFee>): _4.MsgSetFlatFee;
            };
            MsgSetFlatFeeResponse: {
                encode(_: _4.MsgSetFlatFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgSetFlatFeeResponse;
                fromPartial(_: Partial<_4.MsgSetFlatFeeResponse>): _4.MsgSetFlatFeeResponse;
            };
            Params: {
                encode(message: _3.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Params;
                fromPartial(object: Partial<_3.Params>): _3.Params;
            };
            ContractMetadata: {
                encode(message: _3.ContractMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.ContractMetadata;
                fromPartial(object: Partial<_3.ContractMetadata>): _3.ContractMetadata;
            };
            BlockRewards: {
                encode(message: _3.BlockRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.BlockRewards;
                fromPartial(object: Partial<_3.BlockRewards>): _3.BlockRewards;
            };
            TxRewards: {
                encode(message: _3.TxRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.TxRewards;
                fromPartial(object: Partial<_3.TxRewards>): _3.TxRewards;
            };
            RewardsRecord: {
                encode(message: _3.RewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.RewardsRecord;
                fromPartial(object: Partial<_3.RewardsRecord>): _3.RewardsRecord;
            };
            QueryParamsRequest: {
                encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsRequest;
                fromPartial(_: Partial<_2.QueryParamsRequest>): _2.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsResponse;
                fromPartial(object: Partial<_2.QueryParamsResponse>): _2.QueryParamsResponse;
            };
            QueryContractMetadataRequest: {
                encode(message: _2.QueryContractMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryContractMetadataRequest;
                fromPartial(object: Partial<_2.QueryContractMetadataRequest>): _2.QueryContractMetadataRequest;
            };
            QueryContractMetadataResponse: {
                encode(message: _2.QueryContractMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryContractMetadataResponse;
                fromPartial(object: Partial<_2.QueryContractMetadataResponse>): _2.QueryContractMetadataResponse;
            };
            QueryBlockRewardsTrackingRequest: {
                encode(_: _2.QueryBlockRewardsTrackingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBlockRewardsTrackingRequest;
                fromPartial(_: Partial<_2.QueryBlockRewardsTrackingRequest>): _2.QueryBlockRewardsTrackingRequest;
            };
            QueryBlockRewardsTrackingResponse: {
                encode(message: _2.QueryBlockRewardsTrackingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryBlockRewardsTrackingResponse;
                fromPartial(object: Partial<_2.QueryBlockRewardsTrackingResponse>): _2.QueryBlockRewardsTrackingResponse;
            };
            QueryRewardsPoolRequest: {
                encode(_: _2.QueryRewardsPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryRewardsPoolRequest;
                fromPartial(_: Partial<_2.QueryRewardsPoolRequest>): _2.QueryRewardsPoolRequest;
            };
            QueryRewardsPoolResponse: {
                encode(message: _2.QueryRewardsPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryRewardsPoolResponse;
                fromPartial(object: Partial<_2.QueryRewardsPoolResponse>): _2.QueryRewardsPoolResponse;
            };
            QueryEstimateTxFeesRequest: {
                encode(message: _2.QueryEstimateTxFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryEstimateTxFeesRequest;
                fromPartial(object: Partial<_2.QueryEstimateTxFeesRequest>): _2.QueryEstimateTxFeesRequest;
            };
            QueryEstimateTxFeesResponse: {
                encode(message: _2.QueryEstimateTxFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryEstimateTxFeesResponse;
                fromPartial(object: Partial<_2.QueryEstimateTxFeesResponse>): _2.QueryEstimateTxFeesResponse;
            };
            BlockTracking: {
                encode(message: _2.BlockTracking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BlockTracking;
                fromPartial(object: Partial<_2.BlockTracking>): _2.BlockTracking;
            };
            QueryRewardsRecordsRequest: {
                encode(message: _2.QueryRewardsRecordsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryRewardsRecordsRequest;
                fromPartial(object: Partial<_2.QueryRewardsRecordsRequest>): _2.QueryRewardsRecordsRequest;
            };
            QueryRewardsRecordsResponse: {
                encode(message: _2.QueryRewardsRecordsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryRewardsRecordsResponse;
                fromPartial(object: Partial<_2.QueryRewardsRecordsResponse>): _2.QueryRewardsRecordsResponse;
            };
            QueryOutstandingRewardsRequest: {
                encode(message: _2.QueryOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryOutstandingRewardsRequest;
                fromPartial(object: Partial<_2.QueryOutstandingRewardsRequest>): _2.QueryOutstandingRewardsRequest;
            };
            QueryOutstandingRewardsResponse: {
                encode(message: _2.QueryOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryOutstandingRewardsResponse;
                fromPartial(object: Partial<_2.QueryOutstandingRewardsResponse>): _2.QueryOutstandingRewardsResponse;
            };
            QueryFlatFeeRequest: {
                encode(message: _2.QueryFlatFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryFlatFeeRequest;
                fromPartial(object: Partial<_2.QueryFlatFeeRequest>): _2.QueryFlatFeeRequest;
            };
            QueryFlatFeeResponse: {
                encode(message: _2.QueryFlatFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryFlatFeeResponse;
                fromPartial(object: Partial<_2.QueryFlatFeeResponse>): _2.QueryFlatFeeResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromPartial(object: Partial<_1.GenesisState>): _1.GenesisState;
            };
            ContractMetadataSetEvent: {
                encode(message: _0.ContractMetadataSetEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ContractMetadataSetEvent;
                fromPartial(object: Partial<_0.ContractMetadataSetEvent>): _0.ContractMetadataSetEvent;
            };
            ContractRewardCalculationEvent: {
                encode(message: _0.ContractRewardCalculationEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ContractRewardCalculationEvent;
                fromPartial(object: Partial<_0.ContractRewardCalculationEvent>): _0.ContractRewardCalculationEvent;
            };
            RewardsWithdrawEvent: {
                encode(message: _0.RewardsWithdrawEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.RewardsWithdrawEvent;
                fromPartial(object: Partial<_0.RewardsWithdrawEvent>): _0.RewardsWithdrawEvent;
            };
            MinConsensusFeeSetEvent: {
                encode(message: _0.MinConsensusFeeSetEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.MinConsensusFeeSetEvent;
                fromPartial(object: Partial<_0.MinConsensusFeeSetEvent>): _0.MinConsensusFeeSetEvent;
            };
            ContractFlatFeeSetEvent: {
                encode(message: _0.ContractFlatFeeSetEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ContractFlatFeeSetEvent;
                fromPartial(object: Partial<_0.ContractFlatFeeSetEvent>): _0.ContractFlatFeeSetEvent;
            };
        };
    }
    namespace tracking {
        const v1beta1: {
            QueryClientImpl: typeof _107.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                blockGasTracking(request?: _6.QueryBlockGasTrackingRequest): Promise<_6.QueryBlockGasTrackingResponse>;
            };
            contractOperationFromJSON(object: any): _7.ContractOperation;
            contractOperationToJSON(object: _7.ContractOperation): string;
            ContractOperation: typeof _7.ContractOperation;
            ContractOperationSDKType: typeof _7.ContractOperationSDKType;
            TxInfo: {
                encode(message: _7.TxInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.TxInfo;
                fromPartial(object: Partial<_7.TxInfo>): _7.TxInfo;
            };
            ContractOperationInfo: {
                encode(message: _7.ContractOperationInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ContractOperationInfo;
                fromPartial(object: Partial<_7.ContractOperationInfo>): _7.ContractOperationInfo;
            };
            BlockTracking: {
                encode(message: _7.BlockTracking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.BlockTracking;
                fromPartial(object: Partial<_7.BlockTracking>): _7.BlockTracking;
            };
            TxTracking: {
                encode(message: _7.TxTracking, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.TxTracking;
                fromPartial(object: Partial<_7.TxTracking>): _7.TxTracking;
            };
            QueryBlockGasTrackingRequest: {
                encode(_: _6.QueryBlockGasTrackingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryBlockGasTrackingRequest;
                fromPartial(_: Partial<_6.QueryBlockGasTrackingRequest>): _6.QueryBlockGasTrackingRequest;
            };
            QueryBlockGasTrackingResponse: {
                encode(message: _6.QueryBlockGasTrackingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryBlockGasTrackingResponse;
                fromPartial(object: Partial<_6.QueryBlockGasTrackingResponse>): _6.QueryBlockGasTrackingResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenesisState;
                fromPartial(object: Partial<_5.GenesisState>): _5.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            archway: {
                rewards: {
                    v1beta1: _108.MsgClientImpl;
                };
            };
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
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            archway: {
                rewards: {
                    v1beta1: {
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        contractMetadata(request: _2.QueryContractMetadataRequest): Promise<_2.QueryContractMetadataResponse>;
                        blockRewardsTracking(request?: _2.QueryBlockRewardsTrackingRequest): Promise<_2.QueryBlockRewardsTrackingResponse>;
                        rewardsPool(request?: _2.QueryRewardsPoolRequest): Promise<_2.QueryRewardsPoolResponse>;
                        estimateTxFees(request: _2.QueryEstimateTxFeesRequest): Promise<_2.QueryEstimateTxFeesResponse>;
                        rewardsRecords(request: _2.QueryRewardsRecordsRequest): Promise<_2.QueryRewardsRecordsResponse>;
                        outstandingRewards(request: _2.QueryOutstandingRewardsRequest): Promise<_2.QueryOutstandingRewardsResponse>;
                        flatFee(request: _2.QueryFlatFeeRequest): Promise<_2.QueryFlatFeeResponse>;
                    };
                };
                tracking: {
                    v1beta1: {
                        blockGasTracking(request?: _6.QueryBlockGasTrackingRequest): Promise<_6.QueryBlockGasTrackingResponse>;
                    };
                };
            };
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
        }>;
    };
}
