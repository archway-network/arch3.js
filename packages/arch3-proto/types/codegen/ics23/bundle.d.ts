import * as _8 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _8.HashOp;
    hashOpToJSON(object: _8.HashOp): string;
    lengthOpFromJSON(object: any): _8.LengthOp;
    lengthOpToJSON(object: _8.LengthOp): string;
    HashOp: typeof _8.HashOp;
    HashOpSDKType: typeof _8.HashOpSDKType;
    LengthOp: typeof _8.LengthOp;
    LengthOpSDKType: typeof _8.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _8.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ExistenceProof;
        fromPartial(object: Partial<_8.ExistenceProof>): _8.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _8.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.NonExistenceProof;
        fromPartial(object: Partial<_8.NonExistenceProof>): _8.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _8.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CommitmentProof;
        fromPartial(object: Partial<_8.CommitmentProof>): _8.CommitmentProof;
    };
    LeafOp: {
        encode(message: _8.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.LeafOp;
        fromPartial(object: Partial<_8.LeafOp>): _8.LeafOp;
    };
    InnerOp: {
        encode(message: _8.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InnerOp;
        fromPartial(object: Partial<_8.InnerOp>): _8.InnerOp;
    };
    ProofSpec: {
        encode(message: _8.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ProofSpec;
        fromPartial(object: Partial<_8.ProofSpec>): _8.ProofSpec;
    };
    InnerSpec: {
        encode(message: _8.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.InnerSpec;
        fromPartial(object: Partial<_8.InnerSpec>): _8.InnerSpec;
    };
    BatchProof: {
        encode(message: _8.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.BatchProof;
        fromPartial(object: Partial<_8.BatchProof>): _8.BatchProof;
    };
    BatchEntry: {
        encode(message: _8.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.BatchEntry;
        fromPartial(object: Partial<_8.BatchEntry>): _8.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _8.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CompressedBatchProof;
        fromPartial(object: Partial<_8.CompressedBatchProof>): _8.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _8.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CompressedBatchEntry;
        fromPartial(object: Partial<_8.CompressedBatchEntry>): _8.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _8.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CompressedExistenceProof;
        fromPartial(object: Partial<_8.CompressedExistenceProof>): _8.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _8.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CompressedNonExistenceProof;
        fromPartial(object: Partial<_8.CompressedNonExistenceProof>): _8.CompressedNonExistenceProof;
    };
};
