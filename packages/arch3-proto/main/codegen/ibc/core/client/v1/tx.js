"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgUpgradeClientResponse = exports.MsgUpgradeClient = exports.MsgUpdateClientResponse = exports.MsgUpdateClient = exports.MsgSubmitMisbehaviourResponse = exports.MsgSubmitMisbehaviour = exports.MsgCreateClientResponse = exports.MsgCreateClient = void 0;
var _any = require("../../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseMsgCreateClient() {
  return {
    clientState: undefined,
    consensusState: undefined,
    signer: ""
  };
}
var MsgCreateClient = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientState !== undefined) {
      _any.Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      _any.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$signer;
    var message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? _any.Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? _any.Any.fromPartial(object.consensusState) : undefined;
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  }
};
exports.MsgCreateClient = MsgCreateClient;
function createBaseMsgCreateClientResponse() {
  return {};
}
var MsgCreateClientResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgCreateClientResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgCreateClientResponse();
    return message;
  }
};
exports.MsgCreateClientResponse = MsgCreateClientResponse;
function createBaseMsgUpdateClient() {
  return {
    clientId: "",
    header: undefined,
    signer: ""
  };
}
var MsgUpdateClient = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header !== undefined) {
      _any.Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId, _object$signer2;
    var message = createBaseMsgUpdateClient();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.header = object.header !== undefined && object.header !== null ? _any.Any.fromPartial(object.header) : undefined;
    message.signer = (_object$signer2 = object.signer) !== null && _object$signer2 !== void 0 ? _object$signer2 : "";
    return message;
  }
};
exports.MsgUpdateClient = MsgUpdateClient;
function createBaseMsgUpdateClientResponse() {
  return {};
}
var MsgUpdateClientResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpdateClientResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpdateClientResponse();
    return message;
  }
};
exports.MsgUpdateClientResponse = MsgUpdateClientResponse;
function createBaseMsgUpgradeClient() {
  return {
    clientId: "",
    clientState: undefined,
    consensusState: undefined,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
var MsgUpgradeClient = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      _any.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      _any.Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = _any.Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId2, _object$proofUpgradeC, _object$proofUpgradeC2, _object$signer3;
    var message = createBaseMsgUpgradeClient();
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? _any.Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? _any.Any.fromPartial(object.consensusState) : undefined;
    message.proofUpgradeClient = (_object$proofUpgradeC = object.proofUpgradeClient) !== null && _object$proofUpgradeC !== void 0 ? _object$proofUpgradeC : new Uint8Array();
    message.proofUpgradeConsensusState = (_object$proofUpgradeC2 = object.proofUpgradeConsensusState) !== null && _object$proofUpgradeC2 !== void 0 ? _object$proofUpgradeC2 : new Uint8Array();
    message.signer = (_object$signer3 = object.signer) !== null && _object$signer3 !== void 0 ? _object$signer3 : "";
    return message;
  }
};
exports.MsgUpgradeClient = MsgUpgradeClient;
function createBaseMsgUpgradeClientResponse() {
  return {};
}
var MsgUpgradeClientResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgUpgradeClientResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgUpgradeClientResponse();
    return message;
  }
};
exports.MsgUpgradeClientResponse = MsgUpgradeClientResponse;
function createBaseMsgSubmitMisbehaviour() {
  return {
    clientId: "",
    misbehaviour: undefined,
    signer: ""
  };
}
var MsgSubmitMisbehaviour = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      _any.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = _any.Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId3, _object$signer4;
    var message = createBaseMsgSubmitMisbehaviour();
    message.clientId = (_object$clientId3 = object.clientId) !== null && _object$clientId3 !== void 0 ? _object$clientId3 : "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? _any.Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = (_object$signer4 = object.signer) !== null && _object$signer4 !== void 0 ? _object$signer4 : "";
    return message;
  }
};
exports.MsgSubmitMisbehaviour = MsgSubmitMisbehaviour;
function createBaseMsgSubmitMisbehaviourResponse() {
  return {};
}
var MsgSubmitMisbehaviourResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSubmitMisbehaviourResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(_) {
    var message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  }
};
exports.MsgSubmitMisbehaviourResponse = MsgSubmitMisbehaviourResponse;