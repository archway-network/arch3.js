"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgTimeoutResponse = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = void 0;
var _channel = require("./channel");
var _client = require("../../client/v1/client");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createBaseMsgChannelOpenInit() {
  return {
    portId: "",
    channel: undefined,
    signer: ""
  };
}
var MsgChannelOpenInit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      _channel.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = _channel.Channel.decode(reader, reader.uint32());
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
    var _object$portId, _object$signer;
    var message = createBaseMsgChannelOpenInit();
    message.portId = (_object$portId = object.portId) !== null && _object$portId !== void 0 ? _object$portId : "";
    message.channel = object.channel !== undefined && object.channel !== null ? _channel.Channel.fromPartial(object.channel) : undefined;
    message.signer = (_object$signer = object.signer) !== null && _object$signer !== void 0 ? _object$signer : "";
    return message;
  }
};
exports.MsgChannelOpenInit = MsgChannelOpenInit;
function createBaseMsgChannelOpenInitResponse() {
  return {};
}
var MsgChannelOpenInitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenInitResponse();
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
    var message = createBaseMsgChannelOpenInitResponse();
    return message;
  }
};
exports.MsgChannelOpenInitResponse = MsgChannelOpenInitResponse;
function createBaseMsgChannelOpenTry() {
  return {
    portId: "",
    previousChannelId: "",
    channel: undefined,
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgChannelOpenTry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      _channel.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = _channel.Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 7:
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
    var _object$portId2, _object$previousChann, _object$counterpartyV, _object$proofInit, _object$signer2;
    var message = createBaseMsgChannelOpenTry();
    message.portId = (_object$portId2 = object.portId) !== null && _object$portId2 !== void 0 ? _object$portId2 : "";
    message.previousChannelId = (_object$previousChann = object.previousChannelId) !== null && _object$previousChann !== void 0 ? _object$previousChann : "";
    message.channel = object.channel !== undefined && object.channel !== null ? _channel.Channel.fromPartial(object.channel) : undefined;
    message.counterpartyVersion = (_object$counterpartyV = object.counterpartyVersion) !== null && _object$counterpartyV !== void 0 ? _object$counterpartyV : "";
    message.proofInit = (_object$proofInit = object.proofInit) !== null && _object$proofInit !== void 0 ? _object$proofInit : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer2 = object.signer) !== null && _object$signer2 !== void 0 ? _object$signer2 : "";
    return message;
  }
};
exports.MsgChannelOpenTry = MsgChannelOpenTry;
function createBaseMsgChannelOpenTryResponse() {
  return {};
}
var MsgChannelOpenTryResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenTryResponse();
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
    var message = createBaseMsgChannelOpenTryResponse();
    return message;
  }
};
exports.MsgChannelOpenTryResponse = MsgChannelOpenTryResponse;
function createBaseMsgChannelOpenAck() {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgChannelOpenAck = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenAck();
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
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 7:
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
    var _object$portId3, _object$channelId, _object$counterpartyC, _object$counterpartyV2, _object$proofTry, _object$signer3;
    var message = createBaseMsgChannelOpenAck();
    message.portId = (_object$portId3 = object.portId) !== null && _object$portId3 !== void 0 ? _object$portId3 : "";
    message.channelId = (_object$channelId = object.channelId) !== null && _object$channelId !== void 0 ? _object$channelId : "";
    message.counterpartyChannelId = (_object$counterpartyC = object.counterpartyChannelId) !== null && _object$counterpartyC !== void 0 ? _object$counterpartyC : "";
    message.counterpartyVersion = (_object$counterpartyV2 = object.counterpartyVersion) !== null && _object$counterpartyV2 !== void 0 ? _object$counterpartyV2 : "";
    message.proofTry = (_object$proofTry = object.proofTry) !== null && _object$proofTry !== void 0 ? _object$proofTry : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer3 = object.signer) !== null && _object$signer3 !== void 0 ? _object$signer3 : "";
    return message;
  }
};
exports.MsgChannelOpenAck = MsgChannelOpenAck;
function createBaseMsgChannelOpenAckResponse() {
  return {};
}
var MsgChannelOpenAckResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenAckResponse();
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
    var message = createBaseMsgChannelOpenAckResponse();
    return message;
  }
};
exports.MsgChannelOpenAckResponse = MsgChannelOpenAckResponse;
function createBaseMsgChannelOpenConfirm() {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgChannelOpenConfirm = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenConfirm();
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
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
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
    var _object$portId4, _object$channelId2, _object$proofAck, _object$signer4;
    var message = createBaseMsgChannelOpenConfirm();
    message.portId = (_object$portId4 = object.portId) !== null && _object$portId4 !== void 0 ? _object$portId4 : "";
    message.channelId = (_object$channelId2 = object.channelId) !== null && _object$channelId2 !== void 0 ? _object$channelId2 : "";
    message.proofAck = (_object$proofAck = object.proofAck) !== null && _object$proofAck !== void 0 ? _object$proofAck : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer4 = object.signer) !== null && _object$signer4 !== void 0 ? _object$signer4 : "";
    return message;
  }
};
exports.MsgChannelOpenConfirm = MsgChannelOpenConfirm;
function createBaseMsgChannelOpenConfirmResponse() {
  return {};
}
var MsgChannelOpenConfirmResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelOpenConfirmResponse();
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
    var message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  }
};
exports.MsgChannelOpenConfirmResponse = MsgChannelOpenConfirmResponse;
function createBaseMsgChannelCloseInit() {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}
var MsgChannelCloseInit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelCloseInit();
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
    var _object$portId5, _object$channelId3, _object$signer5;
    var message = createBaseMsgChannelCloseInit();
    message.portId = (_object$portId5 = object.portId) !== null && _object$portId5 !== void 0 ? _object$portId5 : "";
    message.channelId = (_object$channelId3 = object.channelId) !== null && _object$channelId3 !== void 0 ? _object$channelId3 : "";
    message.signer = (_object$signer5 = object.signer) !== null && _object$signer5 !== void 0 ? _object$signer5 : "";
    return message;
  }
};
exports.MsgChannelCloseInit = MsgChannelCloseInit;
function createBaseMsgChannelCloseInitResponse() {
  return {};
}
var MsgChannelCloseInitResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelCloseInitResponse();
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
    var message = createBaseMsgChannelCloseInitResponse();
    return message;
  }
};
exports.MsgChannelCloseInitResponse = MsgChannelCloseInitResponse;
function createBaseMsgChannelCloseConfirm() {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgChannelCloseConfirm = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelCloseConfirm();
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
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
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
    var _object$portId6, _object$channelId4, _object$proofInit2, _object$signer6;
    var message = createBaseMsgChannelCloseConfirm();
    message.portId = (_object$portId6 = object.portId) !== null && _object$portId6 !== void 0 ? _object$portId6 : "";
    message.channelId = (_object$channelId4 = object.channelId) !== null && _object$channelId4 !== void 0 ? _object$channelId4 : "";
    message.proofInit = (_object$proofInit2 = object.proofInit) !== null && _object$proofInit2 !== void 0 ? _object$proofInit2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer6 = object.signer) !== null && _object$signer6 !== void 0 ? _object$signer6 : "";
    return message;
  }
};
exports.MsgChannelCloseConfirm = MsgChannelCloseConfirm;
function createBaseMsgChannelCloseConfirmResponse() {
  return {};
}
var MsgChannelCloseConfirmResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgChannelCloseConfirmResponse();
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
    var message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  }
};
exports.MsgChannelCloseConfirmResponse = MsgChannelCloseConfirmResponse;
function createBaseMsgRecvPacket() {
  return {
    packet: undefined,
    proofCommitment: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgRecvPacket = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.packet !== undefined) {
      _channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
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
    var message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = _channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
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
    var _object$proofCommitme, _object$signer7;
    var message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? _channel.Packet.fromPartial(object.packet) : undefined;
    message.proofCommitment = (_object$proofCommitme = object.proofCommitment) !== null && _object$proofCommitme !== void 0 ? _object$proofCommitme : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer7 = object.signer) !== null && _object$signer7 !== void 0 ? _object$signer7 : "";
    return message;
  }
};
exports.MsgRecvPacket = MsgRecvPacket;
function createBaseMsgRecvPacketResponse() {
  return {};
}
var MsgRecvPacketResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgRecvPacketResponse();
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
    var message = createBaseMsgRecvPacketResponse();
    return message;
  }
};
exports.MsgRecvPacketResponse = MsgRecvPacketResponse;
function createBaseMsgTimeout() {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: _helpers.Long.UZERO,
    signer: ""
  };
}
var MsgTimeout = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.packet !== undefined) {
      _channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTimeout();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = _channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64();
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
    var _object$proofUnreceiv, _object$signer8;
    var message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? _channel.Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = (_object$proofUnreceiv = object.proofUnreceived) !== null && _object$proofUnreceiv !== void 0 ? _object$proofUnreceiv : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? _helpers.Long.fromValue(object.nextSequenceRecv) : _helpers.Long.UZERO;
    message.signer = (_object$signer8 = object.signer) !== null && _object$signer8 !== void 0 ? _object$signer8 : "";
    return message;
  }
};
exports.MsgTimeout = MsgTimeout;
function createBaseMsgTimeoutResponse() {
  return {};
}
var MsgTimeoutResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTimeoutResponse();
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
    var message = createBaseMsgTimeoutResponse();
    return message;
  }
};
exports.MsgTimeoutResponse = MsgTimeoutResponse;
function createBaseMsgTimeoutOnClose() {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: _helpers.Long.UZERO,
    signer: ""
  };
}
var MsgTimeoutOnClose = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.packet !== undefined) {
      _channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = _channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64();
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
    var _object$proofUnreceiv2, _object$proofClose, _object$signer9;
    var message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== undefined && object.packet !== null ? _channel.Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = (_object$proofUnreceiv2 = object.proofUnreceived) !== null && _object$proofUnreceiv2 !== void 0 ? _object$proofUnreceiv2 : new Uint8Array();
    message.proofClose = (_object$proofClose = object.proofClose) !== null && _object$proofClose !== void 0 ? _object$proofClose : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? _helpers.Long.fromValue(object.nextSequenceRecv) : _helpers.Long.UZERO;
    message.signer = (_object$signer9 = object.signer) !== null && _object$signer9 !== void 0 ? _object$signer9 : "";
    return message;
  }
};
exports.MsgTimeoutOnClose = MsgTimeoutOnClose;
function createBaseMsgTimeoutOnCloseResponse() {
  return {};
}
var MsgTimeoutOnCloseResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgTimeoutOnCloseResponse();
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
    var message = createBaseMsgTimeoutOnCloseResponse();
    return message;
  }
};
exports.MsgTimeoutOnCloseResponse = MsgTimeoutOnCloseResponse;
function createBaseMsgAcknowledgement() {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
var MsgAcknowledgement = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.packet !== undefined) {
      _channel.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = _channel.Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
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
    var _object$acknowledgeme, _object$proofAcked, _object$signer10;
    var message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? _channel.Packet.fromPartial(object.packet) : undefined;
    message.acknowledgement = (_object$acknowledgeme = object.acknowledgement) !== null && _object$acknowledgeme !== void 0 ? _object$acknowledgeme : new Uint8Array();
    message.proofAcked = (_object$proofAcked = object.proofAcked) !== null && _object$proofAcked !== void 0 ? _object$proofAcked : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    message.signer = (_object$signer10 = object.signer) !== null && _object$signer10 !== void 0 ? _object$signer10 : "";
    return message;
  }
};
exports.MsgAcknowledgement = MsgAcknowledgement;
function createBaseMsgAcknowledgementResponse() {
  return {};
}
var MsgAcknowledgementResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgAcknowledgementResponse();
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
    var message = createBaseMsgAcknowledgementResponse();
    return message;
  }
};
exports.MsgAcknowledgementResponse = MsgAcknowledgementResponse;