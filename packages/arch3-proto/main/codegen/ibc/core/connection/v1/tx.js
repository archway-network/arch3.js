"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = void 0;
var _connection = require("./connection");
var _any = require("../../../../google/protobuf/any");
var _client = require("../../client/v1/client");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseMsgConnectionOpenInit() {
  return {
    clientId: "",
    counterparty: undefined,
    version: undefined,
    delayPeriod: _helpers.Long.UZERO,
    signer: ""
  };
}
var MsgConnectionOpenInit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== undefined) {
      _connection.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== undefined) {
      _connection.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(32).uint64(message.delayPeriod);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenInit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = _connection.Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = _connection.Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.delayPeriod = reader.uint64();
          break;
        case 5:
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
    var _object$clientId, _object$signer;
    var message = createBaseMsgConnectionOpenInit();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? _connection.Counterparty.fromPartial(object.counterparty) : undefined;
    message.version = object.version !== undefined && object.version !== null ? _connection.Version.fromPartial(object.version) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? _helpers.Long.fromValue(object.delayPeriod) : _helpers.Long.UZERO;
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  }
};
exports.MsgConnectionOpenInit = MsgConnectionOpenInit;
function createBaseMsgConnectionOpenInitResponse() {
  return {};
}
var MsgConnectionOpenInitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenInitResponse();
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
    var message = createBaseMsgConnectionOpenInitResponse();
    return message;
  }
};
exports.MsgConnectionOpenInitResponse = MsgConnectionOpenInitResponse;
function createBaseMsgConnectionOpenTry() {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: undefined,
    counterparty: undefined,
    delayPeriod: _helpers.Long.UZERO,
    counterpartyVersions: [],
    proofHeight: undefined,
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: ""
  };
}
var MsgConnectionOpenTry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== "") {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== undefined) {
      _any.Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      _connection.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    var _iterator = _createForOfIteratorHelper(message.counterpartyVersions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _connection.Version.encode(v, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      _client.Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenTry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.previousConnectionId = reader.string();
          break;
        case 3:
          message.clientState = _any.Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = _connection.Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        case 6:
          message.counterpartyVersions.push(_connection.Version.decode(reader, reader.uint32()));
          break;
        case 7:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofInit = reader.bytes();
          break;
        case 9:
          message.proofClient = reader.bytes();
          break;
        case 10:
          message.proofConsensus = reader.bytes();
          break;
        case 11:
          message.consensusHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 12:
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
    var _object$clientId2, _object$previousConne, _object$counterpartyV, _object$proofInit, _object$proofClient, _object$proofConsensu, _object$signer2;
    var message = createBaseMsgConnectionOpenTry();
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.previousConnectionId = (_object$previousConne = object.previousConnectionId) !== null && _object$previousConne !== void 0 ? _object$previousConne : "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? _any.Any.fromPartial(object.clientState) : undefined;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? _connection.Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? _helpers.Long.fromValue(object.delayPeriod) : _helpers.Long.UZERO;
    message.counterpartyVersions = ((_object$counterpartyV = object.counterpartyVersions) === null || _object$counterpartyV === void 0 ? void 0 : _object$counterpartyV.map(function (e) {
      return _connection.Version.fromPartial(e);
    })) || [];
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.proofInit = (_object$proofInit = object.proofInit) !== null && _object$proofInit !== void 0 ? _object$proofInit : new Uint8Array();
    message.proofClient = (_object$proofClient = object.proofClient) !== null && _object$proofClient !== void 0 ? _object$proofClient : new Uint8Array();
    message.proofConsensus = (_object$proofConsensu = object.proofConsensus) !== null && _object$proofConsensu !== void 0 ? _object$proofConsensu : new Uint8Array();
    message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? _client.Height.fromPartial(object.consensusHeight) : undefined;
    message.signer = (_object$signer2 = object.signer) !== null && _object$signer2 !== void 0 ? _object$signer2 : "";
    return message;
  }
};
exports.MsgConnectionOpenTry = MsgConnectionOpenTry;
function createBaseMsgConnectionOpenTryResponse() {
  return {};
}
var MsgConnectionOpenTryResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenTryResponse();
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
    var message = createBaseMsgConnectionOpenTryResponse();
    return message;
  }
};
exports.MsgConnectionOpenTryResponse = MsgConnectionOpenTryResponse;
function createBaseMsgConnectionOpenAck() {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: undefined,
    clientState: undefined,
    proofHeight: undefined,
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: undefined,
    signer: ""
  };
}
var MsgConnectionOpenAck = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== "") {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== undefined) {
      _connection.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== undefined) {
      _any.Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      _client.Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenAck();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.counterpartyConnectionId = reader.string();
          break;
        case 3:
          message.version = _connection.Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = _any.Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.proofTry = reader.bytes();
          break;
        case 7:
          message.proofClient = reader.bytes();
          break;
        case 8:
          message.proofConsensus = reader.bytes();
          break;
        case 9:
          message.consensusHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 10:
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
    var _object$connectionId, _object$counterpartyC, _object$proofTry, _object$proofClient2, _object$proofConsensu2, _object$signer3;
    var message = createBaseMsgConnectionOpenAck();
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.counterpartyConnectionId = (_object$counterpartyC = object.counterpartyConnectionId) !== null && _object$counterpartyC !== void 0 ? _object$counterpartyC : "";
    message.version = object.version !== undefined && object.version !== null ? _connection.Version.fromPartial(object.version) : undefined;
    message.clientState = object.clientState !== undefined && object.clientState !== null ? _any.Any.fromPartial(object.clientState) : undefined;
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.proofTry = (_object$proofTry = object.proofTry) !== null && _object$proofTry !== void 0 ? _object$proofTry : new Uint8Array();
    message.proofClient = (_object$proofClient2 = object.proofClient) !== null && _object$proofClient2 !== void 0 ? _object$proofClient2 : new Uint8Array();
    message.proofConsensus = (_object$proofConsensu2 = object.proofConsensus) !== null && _object$proofConsensu2 !== void 0 ? _object$proofConsensu2 : new Uint8Array();
    message.consensusHeight = object.consensusHeight !== undefined && object.consensusHeight !== null ? _client.Height.fromPartial(object.consensusHeight) : undefined;
    message.signer = (_object$signer3 = object.signer) !== null && _object$signer3 !== void 0 ? _object$signer3 : "";
    return message;
  }
};
exports.MsgConnectionOpenAck = MsgConnectionOpenAck;
function createBaseMsgConnectionOpenAckResponse() {
  return {};
}
var MsgConnectionOpenAckResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenAckResponse();
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
    var message = createBaseMsgConnectionOpenAckResponse();
    return message;
  }
};
exports.MsgConnectionOpenAckResponse = MsgConnectionOpenAckResponse;
function createBaseMsgConnectionOpenConfirm() {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgConnectionOpenConfirm = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenConfirm();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.proofAck = reader.bytes();
          break;
        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 4:
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
    var _object$connectionId2, _object$proofAck, _object$signer4;
    var message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    message.proofAck = (_object$proofAck = object.proofAck) !== null && _object$proofAck !== void 0 ? _object$proofAck : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer4 = object.signer) !== null && _object$signer4 !== void 0 ? _object$signer4 : "";
    return message;
  }
};
exports.MsgConnectionOpenConfirm = MsgConnectionOpenConfirm;
function createBaseMsgConnectionOpenConfirmResponse() {
  return {};
}
var MsgConnectionOpenConfirmResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgConnectionOpenConfirmResponse();
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
    var message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  }
};
exports.MsgConnectionOpenConfirmResponse = MsgConnectionOpenConfirmResponse;