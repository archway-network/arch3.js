"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = void 0;
var _pagination = require("../../../../cosmos/base/query/v1beta1/pagination");
var _connection = require("./connection");
var _client = require("../../client/v1/client");
var _any = require("../../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseQueryConnectionRequest() {
  return {
    connectionId: ""
  };
}
var QueryConnectionRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionId;
    var message = createBaseQueryConnectionRequest();
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    return message;
  }
};
exports.QueryConnectionRequest = QueryConnectionRequest;
function createBaseQueryConnectionResponse() {
  return {
    connection: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}
var QueryConnectionResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connection !== undefined) {
      _connection.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = _connection.ConnectionEnd.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$proof;
    var message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== undefined && object.connection !== null ? _connection.ConnectionEnd.fromPartial(object.connection) : undefined;
    message.proof = (_object$proof = object.proof) !== null && _object$proof !== void 0 ? _object$proof : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryConnectionResponse = QueryConnectionResponse;
function createBaseQueryConnectionsRequest() {
  return {
    pagination: undefined
  };
}
var QueryConnectionsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = _pagination.PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryConnectionsRequest = QueryConnectionsRequest;
function createBaseQueryConnectionsResponse() {
  return {
    connections: [],
    pagination: undefined,
    height: undefined
  };
}
var QueryConnectionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.connections),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _connection.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      _client.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(_connection.IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = _client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$connections;
    var message = createBaseQueryConnectionsResponse();
    message.connections = ((_object$connections = object.connections) === null || _object$connections === void 0 ? void 0 : _object$connections.map(function (e) {
      return _connection.IdentifiedConnection.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? _client.Height.fromPartial(object.height) : undefined;
    return message;
  }
};
exports.QueryConnectionsResponse = QueryConnectionsResponse;
function createBaseQueryClientConnectionsRequest() {
  return {
    clientId: ""
  };
}
var QueryClientConnectionsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClientConnectionsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId;
    var message = createBaseQueryClientConnectionsRequest();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    return message;
  }
};
exports.QueryClientConnectionsRequest = QueryClientConnectionsRequest;
function createBaseQueryClientConnectionsResponse() {
  return {
    connectionPaths: [],
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}
var QueryClientConnectionsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator2 = _createForOfIteratorHelper(message.connectionPaths),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryClientConnectionsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionPaths.push(reader.string());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionPat, _object$proof2;
    var message = createBaseQueryClientConnectionsResponse();
    message.connectionPaths = ((_object$connectionPat = object.connectionPaths) === null || _object$connectionPat === void 0 ? void 0 : _object$connectionPat.map(function (e) {
      return e;
    })) || [];
    message.proof = (_object$proof2 = object.proof) !== null && _object$proof2 !== void 0 ? _object$proof2 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryClientConnectionsResponse = QueryClientConnectionsResponse;
function createBaseQueryConnectionClientStateRequest() {
  return {
    connectionId: ""
  };
}
var QueryConnectionClientStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionClientStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionId2;
    var message = createBaseQueryConnectionClientStateRequest();
    message.connectionId = (_object$connectionId2 = object.connectionId) !== null && _object$connectionId2 !== void 0 ? _object$connectionId2 : "";
    return message;
  }
};
exports.QueryConnectionClientStateRequest = QueryConnectionClientStateRequest;
function createBaseQueryConnectionClientStateResponse() {
  return {
    identifiedClientState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}
var QueryConnectionClientStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.identifiedClientState !== undefined) {
      _client.IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionClientStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifiedClientState = _client.IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$proof3;
    var message = createBaseQueryConnectionClientStateResponse();
    message.identifiedClientState = object.identifiedClientState !== undefined && object.identifiedClientState !== null ? _client.IdentifiedClientState.fromPartial(object.identifiedClientState) : undefined;
    message.proof = (_object$proof3 = object.proof) !== null && _object$proof3 !== void 0 ? _object$proof3 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryConnectionClientStateResponse = QueryConnectionClientStateResponse;
function createBaseQueryConnectionConsensusStateRequest() {
  return {
    connectionId: "",
    revisionNumber: _helpers.Long.UZERO,
    revisionHeight: _helpers.Long.UZERO
  };
}
var QueryConnectionConsensusStateRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionConsensusStateRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64();
          break;
        case 3:
          message.revisionHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$connectionId3;
    var message = createBaseQueryConnectionConsensusStateRequest();
    message.connectionId = (_object$connectionId3 = object.connectionId) !== null && _object$connectionId3 !== void 0 ? _object$connectionId3 : "";
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? _helpers.Long.fromValue(object.revisionNumber) : _helpers.Long.UZERO;
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? _helpers.Long.fromValue(object.revisionHeight) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryConnectionConsensusStateRequest = QueryConnectionConsensusStateRequest;
function createBaseQueryConnectionConsensusStateResponse() {
  return {
    consensusState: undefined,
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}
var QueryConnectionConsensusStateResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.consensusState !== undefined) {
      _any.Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      _client.Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryConnectionConsensusStateResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = _any.Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proofHeight = _client.Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId2, _object$proof4;
    var message = createBaseQueryConnectionConsensusStateResponse();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? _any.Any.fromPartial(object.consensusState) : undefined;
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.proof = (_object$proof4 = object.proof) !== null && _object$proof4 !== void 0 ? _object$proof4 : new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? _client.Height.fromPartial(object.proofHeight) : undefined;
    return message;
  }
};
exports.QueryConnectionConsensusStateResponse = QueryConnectionConsensusStateResponse;