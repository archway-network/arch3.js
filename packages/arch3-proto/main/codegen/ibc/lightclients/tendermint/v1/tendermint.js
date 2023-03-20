"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Misbehaviour = exports.Header = exports.Fraction = exports.ConsensusState = exports.ClientState = void 0;
var _duration = require("../../../../google/protobuf/duration");
var _client = require("../../../core/client/v1/client");
var _proofs = require("../../../../confio/proofs");
var _timestamp = require("../../../../google/protobuf/timestamp");
var _commitment = require("../../../core/commitment/v1/commitment");
var _types = require("../../../../tendermint/types/types");
var _validator = require("../../../../tendermint/types/validator");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseClientState() {
  return {
    chainId: "",
    trustLevel: undefined,
    trustingPeriod: undefined,
    unbondingPeriod: undefined,
    maxClockDrift: undefined,
    frozenHeight: undefined,
    latestHeight: undefined,
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false
  };
}
var ClientState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.trustLevel !== undefined) {
      Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustingPeriod !== undefined) {
      _duration.Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbondingPeriod !== undefined) {
      _duration.Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxClockDrift !== undefined) {
      _duration.Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozenHeight !== undefined) {
      _client.Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestHeight !== undefined) {
      _client.Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.proofSpecs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _proofs.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.upgradePath),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        writer.uint32(74).string(_v);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }
    if (message.allowUpdateAfterMisbehaviour === true) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseClientState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.trustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustingPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbondingPeriod = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxClockDrift = _duration.Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozenHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latestHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofSpecs.push(_proofs.ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgradePath.push(reader.string());
          break;
        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;
        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$chainId, _object$proofSpecs, _object$upgradePath, _object$allowUpdateAf, _object$allowUpdateAf2;
    var message = createBaseClientState();
    message.chainId = (_object$chainId = object.chainId) !== null && _object$chainId !== void 0 ? _object$chainId : "";
    message.trustLevel = object.trustLevel !== undefined && object.trustLevel !== null ? Fraction.fromPartial(object.trustLevel) : undefined;
    message.trustingPeriod = object.trustingPeriod !== undefined && object.trustingPeriod !== null ? _duration.Duration.fromPartial(object.trustingPeriod) : undefined;
    message.unbondingPeriod = object.unbondingPeriod !== undefined && object.unbondingPeriod !== null ? _duration.Duration.fromPartial(object.unbondingPeriod) : undefined;
    message.maxClockDrift = object.maxClockDrift !== undefined && object.maxClockDrift !== null ? _duration.Duration.fromPartial(object.maxClockDrift) : undefined;
    message.frozenHeight = object.frozenHeight !== undefined && object.frozenHeight !== null ? _client.Height.fromPartial(object.frozenHeight) : undefined;
    message.latestHeight = object.latestHeight !== undefined && object.latestHeight !== null ? _client.Height.fromPartial(object.latestHeight) : undefined;
    message.proofSpecs = ((_object$proofSpecs = object.proofSpecs) === null || _object$proofSpecs === void 0 ? void 0 : _object$proofSpecs.map(function (e) {
      return _proofs.ProofSpec.fromPartial(e);
    })) || [];
    message.upgradePath = ((_object$upgradePath = object.upgradePath) === null || _object$upgradePath === void 0 ? void 0 : _object$upgradePath.map(function (e) {
      return e;
    })) || [];
    message.allowUpdateAfterExpiry = (_object$allowUpdateAf = object.allowUpdateAfterExpiry) !== null && _object$allowUpdateAf !== void 0 ? _object$allowUpdateAf : false;
    message.allowUpdateAfterMisbehaviour = (_object$allowUpdateAf2 = object.allowUpdateAfterMisbehaviour) !== null && _object$allowUpdateAf2 !== void 0 ? _object$allowUpdateAf2 : false;
    return message;
  }
};
exports.ClientState = ClientState;
function createBaseConsensusState() {
  return {
    timestamp: undefined,
    root: undefined,
    nextValidatorsHash: new Uint8Array()
  };
}
var ConsensusState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.timestamp !== undefined) {
      _timestamp.Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      _commitment.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseConsensusState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.root = _commitment.MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextValidatorsHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$nextValidator;
    var message = createBaseConsensusState();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? _timestamp.Timestamp.fromPartial(object.timestamp) : undefined;
    message.root = object.root !== undefined && object.root !== null ? _commitment.MerkleRoot.fromPartial(object.root) : undefined;
    message.nextValidatorsHash = (_object$nextValidator = object.nextValidatorsHash) !== null && _object$nextValidator !== void 0 ? _object$nextValidator : new Uint8Array();
    return message;
  }
};
exports.ConsensusState = ConsensusState;
function createBaseMisbehaviour() {
  return {
    clientId: "",
    header1: undefined,
    header2: undefined
  };
}
var Misbehaviour = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header1 !== undefined) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== undefined) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMisbehaviour();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
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
    var message = createBaseMisbehaviour();
    message.clientId = (_object$clientId = object.clientId) !== null && _object$clientId !== void 0 ? _object$clientId : "";
    message.header1 = object.header1 !== undefined && object.header1 !== null ? Header.fromPartial(object.header1) : undefined;
    message.header2 = object.header2 !== undefined && object.header2 !== null ? Header.fromPartial(object.header2) : undefined;
    return message;
  }
};
exports.Misbehaviour = Misbehaviour;
function createBaseHeader() {
  return {
    signedHeader: undefined,
    validatorSet: undefined,
    trustedHeight: undefined,
    trustedValidators: undefined
  };
}
var Header = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.signedHeader !== undefined) {
      _types.SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      _validator.ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustedHeight !== undefined) {
      _client.Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.trustedValidators !== undefined) {
      _validator.ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseHeader();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = _types.SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustedHeight = _client.Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trustedValidators = _validator.ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseHeader();
    message.signedHeader = object.signedHeader !== undefined && object.signedHeader !== null ? _types.SignedHeader.fromPartial(object.signedHeader) : undefined;
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? _validator.ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.trustedHeight = object.trustedHeight !== undefined && object.trustedHeight !== null ? _client.Height.fromPartial(object.trustedHeight) : undefined;
    message.trustedValidators = object.trustedValidators !== undefined && object.trustedValidators !== null ? _validator.ValidatorSet.fromPartial(object.trustedValidators) : undefined;
    return message;
  }
};
exports.Header = Header;
function createBaseFraction() {
  return {
    numerator: _helpers.Long.UZERO,
    denominator: _helpers.Long.UZERO
  };
}
var Fraction = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.numerator.isZero()) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (!message.denominator.isZero()) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseFraction();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;
        case 2:
          message.denominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseFraction();
    message.numerator = object.numerator !== undefined && object.numerator !== null ? _helpers.Long.fromValue(object.numerator) : _helpers.Long.UZERO;
    message.denominator = object.denominator !== undefined && object.denominator !== null ? _helpers.Long.fromValue(object.denominator) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Fraction = Fraction;