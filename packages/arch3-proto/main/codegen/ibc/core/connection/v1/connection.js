"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Version = exports.StateSDKType = exports.State = exports.IdentifiedConnection = exports.Counterparty = exports.ConnectionPaths = exports.ConnectionEnd = exports.ClientPaths = void 0;
exports.stateFromJSON = stateFromJSON;
exports.stateToJSON = stateToJSON;
var _commitment = require("../../commitment/v1/commitment");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
exports.State = State;
(function (State) {
  State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  State[State["STATE_INIT"] = 1] = "STATE_INIT";
  State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
  State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (exports.State = State = {}));
var StateSDKType;
exports.StateSDKType = StateSDKType;
(function (StateSDKType) {
  StateSDKType[StateSDKType["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
  StateSDKType[StateSDKType["STATE_INIT"] = 1] = "STATE_INIT";
  StateSDKType[StateSDKType["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
  StateSDKType[StateSDKType["STATE_OPEN"] = 3] = "STATE_OPEN";
  StateSDKType[StateSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StateSDKType || (exports.StateSDKType = StateSDKType = {}));
function stateFromJSON(object) {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
function stateToJSON(object) {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */

function createBaseConnectionEnd() {
  return {
    clientId: "",
    versions: [],
    state: 0,
    counterparty: undefined,
    delayPeriod: _helpers.Long.UZERO
  };
}
var ConnectionEnd = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    var _iterator = _createForOfIteratorHelper(message.versions),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        Version.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConnectionEnd();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 3:
          message.state = reader.int32();
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId, _object$versions, _object$state;
    var message = createBaseConnectionEnd();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.versions = ((_object$versions = object.versions) === null || _object$versions === void 0 ? void 0 : _object$versions.map(function (e) {
      return Version.fromPartial(e);
    })) || [];
    message.state = (_object$state = object.state) !== null && _object$state !== void 0 ? _object$state : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? _helpers.Long.fromValue(object.delayPeriod) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ConnectionEnd = ConnectionEnd;
function createBaseIdentifiedConnection() {
  return {
    id: "",
    clientId: "",
    versions: [],
    state: 0,
    counterparty: undefined,
    delayPeriod: _helpers.Long.UZERO
  };
}
var IdentifiedConnection = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    var _iterator2 = _createForOfIteratorHelper(message.versions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        Version.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
    }
    if (!message.delayPeriod.isZero()) {
      writer.uint32(48).uint64(message.delayPeriod);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseIdentifiedConnection();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.versions.push(Version.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32();
          break;
        case 5:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 6:
          message.delayPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$id, _object$clientId2, _object$versions2, _object$state2;
    var message = createBaseIdentifiedConnection();
    message.id = (_object$id = object.id) !== null && _object$id !== void 0 ? _object$id : "";
    message.clientId = (_object$clientId2 = object.clientId) !== null && _object$clientId2 !== void 0 ? _object$clientId2 : "";
    message.versions = ((_object$versions2 = object.versions) === null || _object$versions2 === void 0 ? void 0 : _object$versions2.map(function (e) {
      return Version.fromPartial(e);
    })) || [];
    message.state = (_object$state2 = object.state) !== null && _object$state2 !== void 0 ? _object$state2 : 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delayPeriod = object.delayPeriod !== undefined && object.delayPeriod !== null ? _helpers.Long.fromValue(object.delayPeriod) : _helpers.Long.UZERO;
    return message;
  }
};
exports.IdentifiedConnection = IdentifiedConnection;
function createBaseCounterparty() {
  return {
    clientId: "",
    connectionId: "",
    prefix: undefined
  };
}
var Counterparty = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.prefix !== undefined) {
      _commitment.MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCounterparty();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.prefix = _commitment.MerklePrefix.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId3, _object$connectionId;
    var message = createBaseCounterparty();
    message.clientId = (_object$clientId3 = object.clientId) !== null && _object$clientId3 !== void 0 ? _object$clientId3 : "";
    message.connectionId = (_object$connectionId = object.connectionId) !== null && _object$connectionId !== void 0 ? _object$connectionId : "";
    message.prefix = object.prefix !== undefined && object.prefix !== null ? _commitment.MerklePrefix.fromPartial(object.prefix) : undefined;
    return message;
  }
};
exports.Counterparty = Counterparty;
function createBaseClientPaths() {
  return {
    paths: []
  };
}
var ClientPaths = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator3 = _createForOfIteratorHelper(message.paths),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        writer.uint32(10).string(v);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClientPaths();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$paths;
    var message = createBaseClientPaths();
    message.paths = ((_object$paths = object.paths) === null || _object$paths === void 0 ? void 0 : _object$paths.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ClientPaths = ClientPaths;
function createBaseConnectionPaths() {
  return {
    clientId: "",
    paths: []
  };
}
var ConnectionPaths = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    var _iterator4 = _createForOfIteratorHelper(message.paths),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConnectionPaths();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.paths.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$clientId4, _object$paths2;
    var message = createBaseConnectionPaths();
    message.clientId = (_object$clientId4 = object.clientId) !== null && _object$clientId4 !== void 0 ? _object$clientId4 : "";
    message.paths = ((_object$paths2 = object.paths) === null || _object$paths2 === void 0 ? void 0 : _object$paths2.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.ConnectionPaths = ConnectionPaths;
function createBaseVersion() {
  return {
    identifier: "",
    features: []
  };
}
var Version = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    var _iterator5 = _createForOfIteratorHelper(message.features),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        writer.uint32(18).string(v);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseVersion();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.features.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$identifier, _object$features;
    var message = createBaseVersion();
    message.identifier = (_object$identifier = object.identifier) !== null && _object$identifier !== void 0 ? _object$identifier : "";
    message.features = ((_object$features = object.features) === null || _object$features === void 0 ? void 0 : _object$features.map(function (e) {
      return e;
    })) || [];
    return message;
  }
};
exports.Version = Version;