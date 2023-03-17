import * as _95 from "./abci/types";
import * as _96 from "./crypto/keys";
import * as _97 from "./crypto/proof";
import * as _98 from "./libs/bits/types";
import * as _99 from "./p2p/types";
import * as _100 from "./types/block";
import * as _101 from "./types/evidence";
import * as _102 from "./types/params";
import * as _103 from "./types/types";
import * as _104 from "./types/validator";
import * as _105 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _95.CheckTxType;
        checkTxTypeToJSON(object: _95.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _95.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _95.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _95.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _95.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _95.EvidenceType;
        evidenceTypeToJSON(object: _95.EvidenceType): string;
        CheckTxType: typeof _95.CheckTxType;
        CheckTxTypeSDKType: typeof _95.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _95.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _95.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _95.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _95.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _95.EvidenceType;
        EvidenceTypeSDKType: typeof _95.EvidenceTypeSDKType;
        Request: {
            encode(message: _95.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Request;
            fromPartial(object: Partial<_95.Request>): _95.Request;
        };
        RequestEcho: {
            encode(message: _95.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestEcho;
            fromPartial(object: Partial<_95.RequestEcho>): _95.RequestEcho;
        };
        RequestFlush: {
            encode(_: _95.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestFlush;
            fromPartial(_: Partial<_95.RequestFlush>): _95.RequestFlush;
        };
        RequestInfo: {
            encode(message: _95.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestInfo;
            fromPartial(object: Partial<_95.RequestInfo>): _95.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _95.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestSetOption;
            fromPartial(object: Partial<_95.RequestSetOption>): _95.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _95.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestInitChain;
            fromPartial(object: Partial<_95.RequestInitChain>): _95.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _95.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestQuery;
            fromPartial(object: Partial<_95.RequestQuery>): _95.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _95.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestBeginBlock;
            fromPartial(object: Partial<_95.RequestBeginBlock>): _95.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _95.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestCheckTx;
            fromPartial(object: Partial<_95.RequestCheckTx>): _95.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _95.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestDeliverTx;
            fromPartial(object: Partial<_95.RequestDeliverTx>): _95.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _95.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestEndBlock;
            fromPartial(object: Partial<_95.RequestEndBlock>): _95.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _95.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestCommit;
            fromPartial(_: Partial<_95.RequestCommit>): _95.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _95.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestListSnapshots;
            fromPartial(_: Partial<_95.RequestListSnapshots>): _95.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _95.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestOfferSnapshot;
            fromPartial(object: Partial<_95.RequestOfferSnapshot>): _95.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _95.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestLoadSnapshotChunk;
            fromPartial(object: Partial<_95.RequestLoadSnapshotChunk>): _95.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _95.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.RequestApplySnapshotChunk;
            fromPartial(object: Partial<_95.RequestApplySnapshotChunk>): _95.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _95.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Response;
            fromPartial(object: Partial<_95.Response>): _95.Response;
        };
        ResponseException: {
            encode(message: _95.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseException;
            fromPartial(object: Partial<_95.ResponseException>): _95.ResponseException;
        };
        ResponseEcho: {
            encode(message: _95.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseEcho;
            fromPartial(object: Partial<_95.ResponseEcho>): _95.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _95.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseFlush;
            fromPartial(_: Partial<_95.ResponseFlush>): _95.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _95.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseInfo;
            fromPartial(object: Partial<_95.ResponseInfo>): _95.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _95.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseSetOption;
            fromPartial(object: Partial<_95.ResponseSetOption>): _95.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _95.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseInitChain;
            fromPartial(object: Partial<_95.ResponseInitChain>): _95.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _95.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseQuery;
            fromPartial(object: Partial<_95.ResponseQuery>): _95.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _95.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseBeginBlock;
            fromPartial(object: Partial<_95.ResponseBeginBlock>): _95.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _95.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseCheckTx;
            fromPartial(object: Partial<_95.ResponseCheckTx>): _95.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _95.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseDeliverTx;
            fromPartial(object: Partial<_95.ResponseDeliverTx>): _95.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _95.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseEndBlock;
            fromPartial(object: Partial<_95.ResponseEndBlock>): _95.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _95.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseCommit;
            fromPartial(object: Partial<_95.ResponseCommit>): _95.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _95.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseListSnapshots;
            fromPartial(object: Partial<_95.ResponseListSnapshots>): _95.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _95.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseOfferSnapshot;
            fromPartial(object: Partial<_95.ResponseOfferSnapshot>): _95.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _95.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseLoadSnapshotChunk;
            fromPartial(object: Partial<_95.ResponseLoadSnapshotChunk>): _95.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _95.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ResponseApplySnapshotChunk;
            fromPartial(object: Partial<_95.ResponseApplySnapshotChunk>): _95.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _95.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ConsensusParams;
            fromPartial(object: Partial<_95.ConsensusParams>): _95.ConsensusParams;
        };
        BlockParams: {
            encode(message: _95.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.BlockParams;
            fromPartial(object: Partial<_95.BlockParams>): _95.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _95.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.LastCommitInfo;
            fromPartial(object: Partial<_95.LastCommitInfo>): _95.LastCommitInfo;
        };
        Event: {
            encode(message: _95.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Event;
            fromPartial(object: Partial<_95.Event>): _95.Event;
        };
        EventAttribute: {
            encode(message: _95.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EventAttribute;
            fromPartial(object: Partial<_95.EventAttribute>): _95.EventAttribute;
        };
        TxResult: {
            encode(message: _95.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.TxResult;
            fromPartial(object: Partial<_95.TxResult>): _95.TxResult;
        };
        Validator: {
            encode(message: _95.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Validator;
            fromPartial(object: Partial<_95.Validator>): _95.Validator;
        };
        ValidatorUpdate: {
            encode(message: _95.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorUpdate;
            fromPartial(object: Partial<_95.ValidatorUpdate>): _95.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _95.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.VoteInfo;
            fromPartial(object: Partial<_95.VoteInfo>): _95.VoteInfo;
        };
        Evidence: {
            encode(message: _95.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Evidence;
            fromPartial(object: Partial<_95.Evidence>): _95.Evidence;
        };
        Snapshot: {
            encode(message: _95.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Snapshot;
            fromPartial(object: Partial<_95.Snapshot>): _95.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _97.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Proof;
            fromPartial(object: Partial<_97.Proof>): _97.Proof;
        };
        ValueOp: {
            encode(message: _97.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ValueOp;
            fromPartial(object: Partial<_97.ValueOp>): _97.ValueOp;
        };
        DominoOp: {
            encode(message: _97.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.DominoOp;
            fromPartial(object: Partial<_97.DominoOp>): _97.DominoOp;
        };
        ProofOp: {
            encode(message: _97.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ProofOp;
            fromPartial(object: Partial<_97.ProofOp>): _97.ProofOp;
        };
        ProofOps: {
            encode(message: _97.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ProofOps;
            fromPartial(object: Partial<_97.ProofOps>): _97.ProofOps;
        };
        PublicKey: {
            encode(message: _96.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.PublicKey;
            fromPartial(object: Partial<_96.PublicKey>): _96.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _98.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.BitArray;
                fromPartial(object: Partial<_98.BitArray>): _98.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _99.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.NetAddress;
            fromPartial(object: Partial<_99.NetAddress>): _99.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _99.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ProtocolVersion;
            fromPartial(object: Partial<_99.ProtocolVersion>): _99.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _99.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DefaultNodeInfo;
            fromPartial(object: Partial<_99.DefaultNodeInfo>): _99.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _99.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DefaultNodeInfoOther;
            fromPartial(object: Partial<_99.DefaultNodeInfoOther>): _99.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _104.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ValidatorSet;
            fromPartial(object: Partial<_104.ValidatorSet>): _104.ValidatorSet;
        };
        Validator: {
            encode(message: _104.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Validator;
            fromPartial(object: Partial<_104.Validator>): _104.Validator;
        };
        SimpleValidator: {
            encode(message: _104.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SimpleValidator;
            fromPartial(object: Partial<_104.SimpleValidator>): _104.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _103.BlockIDFlag;
        blockIDFlagToJSON(object: _103.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _103.SignedMsgType;
        signedMsgTypeToJSON(object: _103.SignedMsgType): string;
        BlockIDFlag: typeof _103.BlockIDFlag;
        BlockIDFlagSDKType: typeof _103.BlockIDFlagSDKType;
        SignedMsgType: typeof _103.SignedMsgType;
        SignedMsgTypeSDKType: typeof _103.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _103.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PartSetHeader;
            fromPartial(object: Partial<_103.PartSetHeader>): _103.PartSetHeader;
        };
        Part: {
            encode(message: _103.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Part;
            fromPartial(object: Partial<_103.Part>): _103.Part;
        };
        BlockID: {
            encode(message: _103.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BlockID;
            fromPartial(object: Partial<_103.BlockID>): _103.BlockID;
        };
        Header: {
            encode(message: _103.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Header;
            fromPartial(object: Partial<_103.Header>): _103.Header;
        };
        Data: {
            encode(message: _103.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Data;
            fromPartial(object: Partial<_103.Data>): _103.Data;
        };
        Vote: {
            encode(message: _103.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Vote;
            fromPartial(object: Partial<_103.Vote>): _103.Vote;
        };
        Commit: {
            encode(message: _103.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Commit;
            fromPartial(object: Partial<_103.Commit>): _103.Commit;
        };
        CommitSig: {
            encode(message: _103.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.CommitSig;
            fromPartial(object: Partial<_103.CommitSig>): _103.CommitSig;
        };
        Proposal: {
            encode(message: _103.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Proposal;
            fromPartial(object: Partial<_103.Proposal>): _103.Proposal;
        };
        SignedHeader: {
            encode(message: _103.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.SignedHeader;
            fromPartial(object: Partial<_103.SignedHeader>): _103.SignedHeader;
        };
        LightBlock: {
            encode(message: _103.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.LightBlock;
            fromPartial(object: Partial<_103.LightBlock>): _103.LightBlock;
        };
        BlockMeta: {
            encode(message: _103.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BlockMeta;
            fromPartial(object: Partial<_103.BlockMeta>): _103.BlockMeta;
        };
        TxProof: {
            encode(message: _103.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.TxProof;
            fromPartial(object: Partial<_103.TxProof>): _103.TxProof;
        };
        ConsensusParams: {
            encode(message: _102.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ConsensusParams;
            fromPartial(object: Partial<_102.ConsensusParams>): _102.ConsensusParams;
        };
        BlockParams: {
            encode(message: _102.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.BlockParams;
            fromPartial(object: Partial<_102.BlockParams>): _102.BlockParams;
        };
        EvidenceParams: {
            encode(message: _102.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.EvidenceParams;
            fromPartial(object: Partial<_102.EvidenceParams>): _102.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _102.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.ValidatorParams;
            fromPartial(object: Partial<_102.ValidatorParams>): _102.ValidatorParams;
        };
        VersionParams: {
            encode(message: _102.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.VersionParams;
            fromPartial(object: Partial<_102.VersionParams>): _102.VersionParams;
        };
        HashedParams: {
            encode(message: _102.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.HashedParams;
            fromPartial(object: Partial<_102.HashedParams>): _102.HashedParams;
        };
        Evidence: {
            encode(message: _101.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Evidence;
            fromPartial(object: Partial<_101.Evidence>): _101.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _101.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.DuplicateVoteEvidence;
            fromPartial(object: Partial<_101.DuplicateVoteEvidence>): _101.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _101.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.LightClientAttackEvidence;
            fromPartial(object: Partial<_101.LightClientAttackEvidence>): _101.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _101.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.EvidenceList;
            fromPartial(object: Partial<_101.EvidenceList>): _101.EvidenceList;
        };
        Block: {
            encode(message: _100.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Block;
            fromPartial(object: Partial<_100.Block>): _100.Block;
        };
    };
    const version: {
        App: {
            encode(message: _105.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.App;
            fromPartial(object: Partial<_105.App>): _105.App;
        };
        Consensus: {
            encode(message: _105.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Consensus;
            fromPartial(object: Partial<_105.Consensus>): _105.Consensus;
        };
    };
}
