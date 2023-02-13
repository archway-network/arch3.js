import * as _68 from "./api/http";
import * as _69 from "./api/httpbody";
import * as _70 from "./protobuf/any";
import * as _71 from "./protobuf/timestamp";
import * as _72 from "./protobuf/descriptor";
import * as _73 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _69.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.HttpBody;
            fromPartial(object: Partial<_69.HttpBody>): _69.HttpBody;
        };
        Http: {
            encode(message: _68.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Http;
            fromPartial(object: Partial<_68.Http>): _68.Http;
        };
        HttpRule: {
            encode(message: _68.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.HttpRule;
            fromPartial(object: Partial<_68.HttpRule>): _68.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _68.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.CustomHttpPattern;
            fromPartial(object: Partial<_68.CustomHttpPattern>): _68.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _73.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Duration;
            fromPartial(object: Partial<_73.Duration>): _73.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _72.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _72.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _72.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _72.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _72.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _72.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _72.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _72.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _72.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _72.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _72.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _72.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _72.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _72.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _72.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _72.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _72.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _72.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _72.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _72.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _72.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _72.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _72.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _72.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _72.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.FileDescriptorSet;
            fromPartial(object: Partial<_72.FileDescriptorSet>): _72.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _72.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.FileDescriptorProto;
            fromPartial(object: Partial<_72.FileDescriptorProto>): _72.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _72.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.DescriptorProto;
            fromPartial(object: Partial<_72.DescriptorProto>): _72.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _72.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_72.DescriptorProto_ExtensionRange>): _72.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _72.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_72.DescriptorProto_ReservedRange>): _72.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _72.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ExtensionRangeOptions;
            fromPartial(object: Partial<_72.ExtensionRangeOptions>): _72.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _72.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.FieldDescriptorProto;
            fromPartial(object: Partial<_72.FieldDescriptorProto>): _72.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _72.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.OneofDescriptorProto;
            fromPartial(object: Partial<_72.OneofDescriptorProto>): _72.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _72.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EnumDescriptorProto;
            fromPartial(object: Partial<_72.EnumDescriptorProto>): _72.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _72.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_72.EnumDescriptorProto_EnumReservedRange>): _72.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _72.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EnumValueDescriptorProto;
            fromPartial(object: Partial<_72.EnumValueDescriptorProto>): _72.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _72.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ServiceDescriptorProto;
            fromPartial(object: Partial<_72.ServiceDescriptorProto>): _72.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _72.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MethodDescriptorProto;
            fromPartial(object: Partial<_72.MethodDescriptorProto>): _72.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _72.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.FileOptions;
            fromPartial(object: Partial<_72.FileOptions>): _72.FileOptions;
        };
        MessageOptions: {
            encode(message: _72.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MessageOptions;
            fromPartial(object: Partial<_72.MessageOptions>): _72.MessageOptions;
        };
        FieldOptions: {
            encode(message: _72.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.FieldOptions;
            fromPartial(object: Partial<_72.FieldOptions>): _72.FieldOptions;
        };
        OneofOptions: {
            encode(message: _72.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.OneofOptions;
            fromPartial(object: Partial<_72.OneofOptions>): _72.OneofOptions;
        };
        EnumOptions: {
            encode(message: _72.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EnumOptions;
            fromPartial(object: Partial<_72.EnumOptions>): _72.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _72.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.EnumValueOptions;
            fromPartial(object: Partial<_72.EnumValueOptions>): _72.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _72.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.ServiceOptions;
            fromPartial(object: Partial<_72.ServiceOptions>): _72.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _72.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MethodOptions;
            fromPartial(object: Partial<_72.MethodOptions>): _72.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _72.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UninterpretedOption;
            fromPartial(object: Partial<_72.UninterpretedOption>): _72.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _72.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_72.UninterpretedOption_NamePart>): _72.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _72.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SourceCodeInfo;
            fromPartial(object: Partial<_72.SourceCodeInfo>): _72.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _72.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.SourceCodeInfo_Location;
            fromPartial(object: Partial<_72.SourceCodeInfo_Location>): _72.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _72.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GeneratedCodeInfo;
            fromPartial(object: Partial<_72.GeneratedCodeInfo>): _72.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _72.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_72.GeneratedCodeInfo_Annotation>): _72.GeneratedCodeInfo_Annotation;
        };
        Timestamp: {
            encode(message: _71.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Timestamp;
            fromPartial(object: Partial<_71.Timestamp>): _71.Timestamp;
        };
        Any: {
            encode(message: _70.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Any;
            fromPartial(object: Partial<_70.Any>): _70.Any;
        };
    };
}
