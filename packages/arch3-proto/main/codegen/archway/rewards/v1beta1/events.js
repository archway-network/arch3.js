"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardsWithdrawEvent = exports.MinConsensusFeeSetEvent = exports.ContractRewardCalculationEvent = exports.ContractMetadataSetEvent = exports.ContractFlatFeeSetEvent = void 0;
var _rewards = require("./rewards");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseContractMetadataSetEvent() {
  return {
    contractAddress: "",
    metadata: undefined
  };
}
var ContractMetadataSetEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.metadata !== undefined) {
      _rewards.ContractMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractMetadataSetEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.metadata = _rewards.ContractMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre;
    var message = createBaseContractMetadataSetEvent();
    message.contractAddress = (_object$contractAddre = object.contractAddress) !== null && _object$contractAddre !== void 0 ? _object$contractAddre : "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? _rewards.ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
exports.ContractMetadataSetEvent = ContractMetadataSetEvent;
function createBaseContractRewardCalculationEvent() {
  return {
    contractAddress: "",
    gasConsumed: _helpers.Long.UZERO,
    inflationRewards: undefined,
    feeRebateRewards: [],
    metadata: undefined
  };
}
var ContractRewardCalculationEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (!message.gasConsumed.isZero()) {
      writer.uint32(16).uint64(message.gasConsumed);
    }
    if (message.inflationRewards !== undefined) {
      _coin.Coin.encode(message.inflationRewards, writer.uint32(26).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.feeRebateRewards),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (message.metadata !== undefined) {
      _rewards.ContractMetadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractRewardCalculationEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.gasConsumed = reader.uint64();
          break;
        case 3:
          message.inflationRewards = _coin.Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.feeRebateRewards.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = _rewards.ContractMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre2, _object$feeRebateRewa;
    var message = createBaseContractRewardCalculationEvent();
    message.contractAddress = (_object$contractAddre2 = object.contractAddress) !== null && _object$contractAddre2 !== void 0 ? _object$contractAddre2 : "";
    message.gasConsumed = object.gasConsumed !== undefined && object.gasConsumed !== null ? _helpers.Long.fromValue(object.gasConsumed) : _helpers.Long.UZERO;
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? _coin.Coin.fromPartial(object.inflationRewards) : undefined;
    message.feeRebateRewards = ((_object$feeRebateRewa = object.feeRebateRewards) === null || _object$feeRebateRewa === void 0 ? void 0 : _object$feeRebateRewa.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.metadata = object.metadata !== undefined && object.metadata !== null ? _rewards.ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
exports.ContractRewardCalculationEvent = ContractRewardCalculationEvent;
function createBaseRewardsWithdrawEvent() {
  return {
    rewardAddress: "",
    rewards: []
  };
}
var RewardsWithdrawEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rewardAddress !== "") {
      writer.uint32(10).string(message.rewardAddress);
    }
    var _iterator2 = _createForOfIteratorHelper(message.rewards),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var v = _step2.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseRewardsWithdrawEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardAddress = reader.string();
          break;
        case 2:
          message.rewards.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewardAddress, _object$rewards;
    var message = createBaseRewardsWithdrawEvent();
    message.rewardAddress = (_object$rewardAddress = object.rewardAddress) !== null && _object$rewardAddress !== void 0 ? _object$rewardAddress : "";
    message.rewards = ((_object$rewards = object.rewards) === null || _object$rewards === void 0 ? void 0 : _object$rewards.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.RewardsWithdrawEvent = RewardsWithdrawEvent;
function createBaseMinConsensusFeeSetEvent() {
  return {
    fee: undefined
  };
}
var MinConsensusFeeSetEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.fee !== undefined) {
      _coin.DecCoin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMinConsensusFeeSetEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = _coin.DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMinConsensusFeeSetEvent();
    message.fee = object.fee !== undefined && object.fee !== null ? _coin.DecCoin.fromPartial(object.fee) : undefined;
    return message;
  }
};
exports.MinConsensusFeeSetEvent = MinConsensusFeeSetEvent;
function createBaseContractFlatFeeSetEvent() {
  return {
    contractAddress: "",
    flatFee: undefined
  };
}
var ContractFlatFeeSetEvent = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.flatFee !== undefined) {
      _coin.Coin.encode(message.flatFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractFlatFeeSetEvent();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.flatFee = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre3;
    var message = createBaseContractFlatFeeSetEvent();
    message.contractAddress = (_object$contractAddre3 = object.contractAddress) !== null && _object$contractAddre3 !== void 0 ? _object$contractAddre3 : "";
    message.flatFee = object.flatFee !== undefined && object.flatFee !== null ? _coin.Coin.fromPartial(object.flatFee) : undefined;
    return message;
  }
};
exports.ContractFlatFeeSetEvent = ContractFlatFeeSetEvent;