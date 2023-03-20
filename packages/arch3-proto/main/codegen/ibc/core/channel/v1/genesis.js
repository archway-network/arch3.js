"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PacketSequence = exports.GenesisState = void 0;
var _channel = require("./channel");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGenesisState() {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    sendSequences: [],
    recvSequences: [],
    ackSequences: [],
    nextChannelSequence: _helpers.Long.UZERO
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.channels),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _channel.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.acknowledgements),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _channel.PacketState.encode(_v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.commitments),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _channel.PacketState.encode(_v2, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var _iterator4 = _createForOfIteratorHelper(message.receipts),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _channel.PacketState.encode(_v3, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var _iterator5 = _createForOfIteratorHelper(message.sendSequences),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _v4 = _step5.value;
        PacketSequence.encode(_v4, writer.uint32(42).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var _iterator6 = _createForOfIteratorHelper(message.recvSequences),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _v5 = _step6.value;
        PacketSequence.encode(_v5, writer.uint32(50).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    var _iterator7 = _createForOfIteratorHelper(message.ackSequences),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _v6 = _step7.value;
        PacketSequence.encode(_v6, writer.uint32(58).fork()).ldelim();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!message.nextChannelSequence.isZero()) {
      writer.uint32(64).uint64(message.nextChannelSequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(_channel.IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.acknowledgements.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(_channel.PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nextChannelSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$channels, _object$acknowledgeme, _object$commitments, _object$receipts, _object$sendSequences, _object$recvSequences, _object$ackSequences;
    var message = createBaseGenesisState();
    message.channels = ((_object$channels = object.channels) === null || _object$channels === void 0 ? void 0 : _object$channels.map(function (e) {
      return _channel.IdentifiedChannel.fromPartial(e);
    })) || [];
    message.acknowledgements = ((_object$acknowledgeme = object.acknowledgements) === null || _object$acknowledgeme === void 0 ? void 0 : _object$acknowledgeme.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.commitments = ((_object$commitments = object.commitments) === null || _object$commitments === void 0 ? void 0 : _object$commitments.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.receipts = ((_object$receipts = object.receipts) === null || _object$receipts === void 0 ? void 0 : _object$receipts.map(function (e) {
      return _channel.PacketState.fromPartial(e);
    })) || [];
    message.sendSequences = ((_object$sendSequences = object.sendSequences) === null || _object$sendSequences === void 0 ? void 0 : _object$sendSequences.map(function (e) {
      return PacketSequence.fromPartial(e);
    })) || [];
    message.recvSequences = ((_object$recvSequences = object.recvSequences) === null || _object$recvSequences === void 0 ? void 0 : _object$recvSequences.map(function (e) {
      return PacketSequence.fromPartial(e);
    })) || [];
    message.ackSequences = ((_object$ackSequences = object.ackSequences) === null || _object$ackSequences === void 0 ? void 0 : _object$ackSequences.map(function (e) {
      return PacketSequence.fromPartial(e);
    })) || [];
    message.nextChannelSequence = object.nextChannelSequence !== undefined && object.nextChannelSequence !== null ? _helpers.Long.fromValue(object.nextChannelSequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.GenesisState = GenesisState;
function createBasePacketSequence() {
  return {
    portId: "",
    channelId: "",
    sequence: _helpers.Long.UZERO
  };
}
var PacketSequence = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBasePacketSequence();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$portId, _object$channelId;
    var message = createBasePacketSequence();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? _helpers.Long.fromValue(object.sequence) : _helpers.Long.UZERO;
    return message;
  }
};
exports.PacketSequence = PacketSequence;