"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxTracking = exports.TxInfo = exports.ContractOperationSDKType = exports.ContractOperationInfo = exports.ContractOperation = exports.BlockTracking = void 0;
exports.contractOperationFromJSON = contractOperationFromJSON;
exports.contractOperationToJSON = contractOperationToJSON;
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/** ContractOperation denotes which operation consumed gas. */
var ContractOperation;
/** ContractOperation denotes which operation consumed gas. */
exports.ContractOperation = ContractOperation;
(function (ContractOperation) {
  ContractOperation[ContractOperation["CONTRACT_OPERATION_UNSPECIFIED"] = 0] = "CONTRACT_OPERATION_UNSPECIFIED";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_INSTANTIATION"] = 1] = "CONTRACT_OPERATION_INSTANTIATION";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_EXECUTION"] = 2] = "CONTRACT_OPERATION_EXECUTION";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_QUERY"] = 3] = "CONTRACT_OPERATION_QUERY";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_MIGRATE"] = 4] = "CONTRACT_OPERATION_MIGRATE";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_IBC"] = 5] = "CONTRACT_OPERATION_IBC";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_SUDO"] = 6] = "CONTRACT_OPERATION_SUDO";
  ContractOperation[ContractOperation["CONTRACT_OPERATION_REPLY"] = 7] = "CONTRACT_OPERATION_REPLY";
  ContractOperation[ContractOperation["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractOperation || (exports.ContractOperation = ContractOperation = {}));
var ContractOperationSDKType;
exports.ContractOperationSDKType = ContractOperationSDKType;
(function (ContractOperationSDKType) {
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_UNSPECIFIED"] = 0] = "CONTRACT_OPERATION_UNSPECIFIED";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_INSTANTIATION"] = 1] = "CONTRACT_OPERATION_INSTANTIATION";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_EXECUTION"] = 2] = "CONTRACT_OPERATION_EXECUTION";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_QUERY"] = 3] = "CONTRACT_OPERATION_QUERY";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_MIGRATE"] = 4] = "CONTRACT_OPERATION_MIGRATE";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_IBC"] = 5] = "CONTRACT_OPERATION_IBC";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_SUDO"] = 6] = "CONTRACT_OPERATION_SUDO";
  ContractOperationSDKType[ContractOperationSDKType["CONTRACT_OPERATION_REPLY"] = 7] = "CONTRACT_OPERATION_REPLY";
  ContractOperationSDKType[ContractOperationSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractOperationSDKType || (exports.ContractOperationSDKType = ContractOperationSDKType = {}));
function contractOperationFromJSON(object) {
  switch (object) {
    case 0:
    case "CONTRACT_OPERATION_UNSPECIFIED":
      return ContractOperation.CONTRACT_OPERATION_UNSPECIFIED;
    case 1:
    case "CONTRACT_OPERATION_INSTANTIATION":
      return ContractOperation.CONTRACT_OPERATION_INSTANTIATION;
    case 2:
    case "CONTRACT_OPERATION_EXECUTION":
      return ContractOperation.CONTRACT_OPERATION_EXECUTION;
    case 3:
    case "CONTRACT_OPERATION_QUERY":
      return ContractOperation.CONTRACT_OPERATION_QUERY;
    case 4:
    case "CONTRACT_OPERATION_MIGRATE":
      return ContractOperation.CONTRACT_OPERATION_MIGRATE;
    case 5:
    case "CONTRACT_OPERATION_IBC":
      return ContractOperation.CONTRACT_OPERATION_IBC;
    case 6:
    case "CONTRACT_OPERATION_SUDO":
      return ContractOperation.CONTRACT_OPERATION_SUDO;
    case 7:
    case "CONTRACT_OPERATION_REPLY":
      return ContractOperation.CONTRACT_OPERATION_REPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractOperation.UNRECOGNIZED;
  }
}
function contractOperationToJSON(object) {
  switch (object) {
    case ContractOperation.CONTRACT_OPERATION_UNSPECIFIED:
      return "CONTRACT_OPERATION_UNSPECIFIED";
    case ContractOperation.CONTRACT_OPERATION_INSTANTIATION:
      return "CONTRACT_OPERATION_INSTANTIATION";
    case ContractOperation.CONTRACT_OPERATION_EXECUTION:
      return "CONTRACT_OPERATION_EXECUTION";
    case ContractOperation.CONTRACT_OPERATION_QUERY:
      return "CONTRACT_OPERATION_QUERY";
    case ContractOperation.CONTRACT_OPERATION_MIGRATE:
      return "CONTRACT_OPERATION_MIGRATE";
    case ContractOperation.CONTRACT_OPERATION_IBC:
      return "CONTRACT_OPERATION_IBC";
    case ContractOperation.CONTRACT_OPERATION_SUDO:
      return "CONTRACT_OPERATION_SUDO";
    case ContractOperation.CONTRACT_OPERATION_REPLY:
      return "CONTRACT_OPERATION_REPLY";
    case ContractOperation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TxInfo keeps a transaction gas tracking data.
 * Object is being created at the module EndBlocker.
 */

function createBaseTxInfo() {
  return {
    id: _helpers.Long.UZERO,
    height: _helpers.Long.ZERO,
    totalGas: _helpers.Long.UZERO
  };
}
var TxInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (!message.totalGas.isZero()) {
      writer.uint32(24).uint64(message.totalGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.totalGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseTxInfo();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.totalGas = object.totalGas !== undefined && object.totalGas !== null ? _helpers.Long.fromValue(object.totalGas) : _helpers.Long.UZERO;
    return message;
  }
};
exports.TxInfo = TxInfo;
function createBaseContractOperationInfo() {
  return {
    id: _helpers.Long.UZERO,
    txId: _helpers.Long.UZERO,
    contractAddress: "",
    operationType: 0,
    vmGas: _helpers.Long.UZERO,
    sdkGas: _helpers.Long.UZERO
  };
}
var ContractOperationInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (!message.txId.isZero()) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    if (!message.vmGas.isZero()) {
      writer.uint32(40).uint64(message.vmGas);
    }
    if (!message.sdkGas.isZero()) {
      writer.uint32(48).uint64(message.sdkGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractOperationInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.txId = reader.uint64();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.operationType = reader.int32();
          break;
        case 5:
          message.vmGas = reader.uint64();
          break;
        case 6:
          message.sdkGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre, _object$operationType;
    var message = createBaseContractOperationInfo();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.txId = object.txId !== undefined && object.txId !== null ? _helpers.Long.fromValue(object.txId) : _helpers.Long.UZERO;
    message.contractAddress = (_object$contractAddre = object.contractAddress) !== null && _object$contractAddre !== void 0 ? _object$contractAddre : "";
    message.operationType = (_object$operationType = object.operationType) !== null && _object$operationType !== void 0 ? _object$operationType : 0;
    message.vmGas = object.vmGas !== undefined && object.vmGas !== null ? _helpers.Long.fromValue(object.vmGas) : _helpers.Long.UZERO;
    message.sdkGas = object.sdkGas !== undefined && object.sdkGas !== null ? _helpers.Long.fromValue(object.sdkGas) : _helpers.Long.UZERO;
    return message;
  }
};
exports.ContractOperationInfo = ContractOperationInfo;
function createBaseBlockTracking() {
  return {
    txs: []
  };
}
var BlockTracking = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.txs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        TxTracking.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockTracking();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(TxTracking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txs;
    var message = createBaseBlockTracking();
    message.txs = ((_object$txs = object.txs) === null || _object$txs === void 0 ? void 0 : _object$txs.map(function (e) {
      return TxTracking.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.BlockTracking = BlockTracking;
function createBaseTxTracking() {
  return {
    info: undefined,
    contractOperations: []
  };
}
var TxTracking = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.info !== undefined) {
      TxInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    var _iterator2 = _createForOfIteratorHelper(message.contractOperations),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        ContractOperationInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseTxTracking();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = TxInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractOperations.push(ContractOperationInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractOpera;
    var message = createBaseTxTracking();
    message.info = object.info !== undefined && object.info !== null ? TxInfo.fromPartial(object.info) : undefined;
    message.contractOperations = ((_object$contractOpera = object.contractOperations) === null || _object$contractOpera === void 0 ? void 0 : _object$contractOpera.map(function (e) {
      return ContractOperationInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxTracking = TxTracking;