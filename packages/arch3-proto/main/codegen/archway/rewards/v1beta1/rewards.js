"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TxRewards = exports.RewardsRecord = exports.Params = exports.ContractMetadata = exports.BlockRewards = void 0;
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _timestamp = require("../../../google/protobuf/timestamp");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseParams() {
  return {
    inflationRewardsRatio: "",
    txFeeRebateRatio: "",
    maxWithdrawRecords: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.inflationRewardsRatio !== "") {
      writer.uint32(10).string(message.inflationRewardsRatio);
    }
    if (message.txFeeRebateRatio !== "") {
      writer.uint32(18).string(message.txFeeRebateRatio);
    }
    if (!message.maxWithdrawRecords.isZero()) {
      writer.uint32(24).uint64(message.maxWithdrawRecords);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRewardsRatio = reader.string();
          break;
        case 2:
          message.txFeeRebateRatio = reader.string();
          break;
        case 3:
          message.maxWithdrawRecords = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$inflationRewa, _object$txFeeRebateRa;
    var message = createBaseParams();
    message.inflationRewardsRatio = (_object$inflationRewa = object.inflationRewardsRatio) !== null && _object$inflationRewa !== void 0 ? _object$inflationRewa : "";
    message.txFeeRebateRatio = (_object$txFeeRebateRa = object.txFeeRebateRatio) !== null && _object$txFeeRebateRa !== void 0 ? _object$txFeeRebateRa : "";
    message.maxWithdrawRecords = object.maxWithdrawRecords !== undefined && object.maxWithdrawRecords !== null ? _helpers.Long.fromValue(object.maxWithdrawRecords) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;
function createBaseContractMetadata() {
  return {
    contractAddress: "",
    ownerAddress: "",
    rewardsAddress: ""
  };
}
var ContractMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(26).string(message.rewardsAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.rewardsAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre, _object$ownerAddress, _object$rewardsAddres;
    var message = createBaseContractMetadata();
    message.contractAddress = (_object$contractAddre = object.contractAddress) !== null && _object$contractAddre !== void 0 ? _object$contractAddre : "";
    message.ownerAddress = (_object$ownerAddress = object.ownerAddress) !== null && _object$ownerAddress !== void 0 ? _object$ownerAddress : "";
    message.rewardsAddress = (_object$rewardsAddres = object.rewardsAddress) !== null && _object$rewardsAddres !== void 0 ? _object$rewardsAddres : "";
    return message;
  }
};
exports.ContractMetadata = ContractMetadata;
function createBaseBlockRewards() {
  return {
    height: _helpers.Long.ZERO,
    inflationRewards: undefined,
    maxGas: _helpers.Long.UZERO
  };
}
var BlockRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.inflationRewards !== undefined) {
      _coin.Coin.encode(message.inflationRewards, writer.uint32(18).fork()).ldelim();
    }
    if (!message.maxGas.isZero()) {
      writer.uint32(24).uint64(message.maxGas);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseBlockRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.inflationRewards = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseBlockRewards();
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? _coin.Coin.fromPartial(object.inflationRewards) : undefined;
    message.maxGas = object.maxGas !== undefined && object.maxGas !== null ? _helpers.Long.fromValue(object.maxGas) : _helpers.Long.UZERO;
    return message;
  }
};
exports.BlockRewards = BlockRewards;
function createBaseTxRewards() {
  return {
    txId: _helpers.Long.UZERO,
    height: _helpers.Long.ZERO,
    feeRewards: []
  };
}
var TxRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.txId.isZero()) {
      writer.uint32(8).uint64(message.txId);
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    var _iterator = _createForOfIteratorHelper(message.feeRewards),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
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
    var message = createBaseTxRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.feeRewards.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$feeRewards;
    var message = createBaseTxRewards();
    message.txId = object.txId !== undefined && object.txId !== null ? _helpers.Long.fromValue(object.txId) : _helpers.Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? _helpers.Long.fromValue(object.height) : _helpers.Long.ZERO;
    message.feeRewards = ((_object$feeRewards = object.feeRewards) === null || _object$feeRewards === void 0 ? void 0 : _object$feeRewards.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.TxRewards = TxRewards;
function createBaseRewardsRecord() {
  return {
    id: _helpers.Long.UZERO,
    rewardsAddress: "",
    rewards: [],
    calculatedHeight: _helpers.Long.ZERO,
    calculatedTime: undefined
  };
}
var RewardsRecord = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(18).string(message.rewardsAddress);
    }
    var _iterator2 = _createForOfIteratorHelper(message.rewards),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!message.calculatedHeight.isZero()) {
      writer.uint32(32).int64(message.calculatedHeight);
    }
    if (message.calculatedTime !== undefined) {
      _timestamp.Timestamp.encode(message.calculatedTime, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseRewardsRecord();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.rewardsAddress = reader.string();
          break;
        case 3:
          message.rewards.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.calculatedHeight = reader.int64();
          break;
        case 5:
          message.calculatedTime = _timestamp.Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewardsAddres2, _object$rewards;
    var message = createBaseRewardsRecord();
    message.id = object.id !== undefined && object.id !== null ? _helpers.Long.fromValue(object.id) : _helpers.Long.UZERO;
    message.rewardsAddress = (_object$rewardsAddres2 = object.rewardsAddress) !== null && _object$rewardsAddres2 !== void 0 ? _object$rewardsAddres2 : "";
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.calculatedHeight = object.calculatedHeight !== undefined && object.calculatedHeight !== null ? _helpers.Long.fromValue(object.calculatedHeight) : _helpers.Long.ZERO;
    message.calculatedTime = object.calculatedTime !== undefined && object.calculatedTime !== null ? _timestamp.Timestamp.fromPartial(object.calculatedTime) : undefined;
    return message;
  }
};
exports.RewardsRecord = RewardsRecord;