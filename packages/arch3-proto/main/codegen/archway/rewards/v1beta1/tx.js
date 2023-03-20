"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgWithdrawRewards_RecordsLimit = exports.MsgWithdrawRewards_RecordIDs = exports.MsgWithdrawRewardsResponse = exports.MsgWithdrawRewards = exports.MsgSetFlatFeeResponse = exports.MsgSetFlatFee = exports.MsgSetContractMetadataResponse = exports.MsgSetContractMetadata = void 0;
var _rewards = require("./rewards");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseMsgSetContractMetadata() {
  return {
    senderAddress: "",
    metadata: undefined
  };
}
var MsgSetContractMetadata = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.metadata !== undefined) {
      _rewards.ContractMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetContractMetadata();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
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
    var _object$senderAddress;
    var message = createBaseMsgSetContractMetadata();
    message.senderAddress = (_object$senderAddress = object.senderAddress) !== null && _object$senderAddress !== void 0 ? _object$senderAddress : "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? _rewards.ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
exports.MsgSetContractMetadata = MsgSetContractMetadata;
function createBaseMsgSetContractMetadataResponse() {
  return {};
}
var MsgSetContractMetadataResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetContractMetadataResponse();
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
    var message = createBaseMsgSetContractMetadataResponse();
    return message;
  }
};
exports.MsgSetContractMetadataResponse = MsgSetContractMetadataResponse;
function createBaseMsgWithdrawRewards() {
  return {
    rewardsAddress: "",
    recordsLimit: undefined,
    recordIds: undefined
  };
}
var MsgWithdrawRewards = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.recordsLimit !== undefined) {
      MsgWithdrawRewards_RecordsLimit.encode(message.recordsLimit, writer.uint32(18).fork()).ldelim();
    }
    if (message.recordIds !== undefined) {
      MsgWithdrawRewards_RecordIDs.encode(message.recordIds, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawRewards();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
          break;
        case 2:
          message.recordsLimit = MsgWithdrawRewards_RecordsLimit.decode(reader, reader.uint32());
          break;
        case 3:
          message.recordIds = MsgWithdrawRewards_RecordIDs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$rewardsAddres;
    var message = createBaseMsgWithdrawRewards();
    message.rewardsAddress = (_object$rewardsAddres = object.rewardsAddress) !== null && _object$rewardsAddres !== void 0 ? _object$rewardsAddres : "";
    message.recordsLimit = object.recordsLimit !== undefined && object.recordsLimit !== null ? MsgWithdrawRewards_RecordsLimit.fromPartial(object.recordsLimit) : undefined;
    message.recordIds = object.recordIds !== undefined && object.recordIds !== null ? MsgWithdrawRewards_RecordIDs.fromPartial(object.recordIds) : undefined;
    return message;
  }
};
exports.MsgWithdrawRewards = MsgWithdrawRewards;
function createBaseMsgWithdrawRewards_RecordsLimit() {
  return {
    limit: _helpers.Long.UZERO
  };
}
var MsgWithdrawRewards_RecordsLimit = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawRewards_RecordsLimit();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseMsgWithdrawRewards_RecordsLimit();
    message.limit = object.limit !== undefined && object.limit !== null ? _helpers.Long.fromValue(object.limit) : _helpers.Long.UZERO;
    return message;
  }
};
exports.MsgWithdrawRewards_RecordsLimit = MsgWithdrawRewards_RecordsLimit;
function createBaseMsgWithdrawRewards_RecordIDs() {
  return {
    ids: []
  };
}
var MsgWithdrawRewards_RecordIDs = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    writer.uint32(10).fork();
    var _iterator = _createForOfIteratorHelper(message.ids),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        writer.uint64(v);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    writer.ldelim();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgWithdrawRewards_RecordIDs();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            var end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$ids;
    var message = createBaseMsgWithdrawRewards_RecordIDs();
    message.ids = ((_object$ids = object.ids) === null || _object$ids === void 0 ? void 0 : _object$ids.map(function (e) {
      return _helpers.Long.fromValue(e);
    })) || [];
    return message;
  }
};
exports.MsgWithdrawRewards_RecordIDs = MsgWithdrawRewards_RecordIDs;
function createBaseMsgWithdrawRewardsResponse() {
  return {
    recordsNum: _helpers.Long.UZERO,
    totalRewards: []
  };
}
var MsgWithdrawRewardsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.recordsNum.isZero()) {
      writer.uint32(8).uint64(message.recordsNum);
    }
    var _iterator2 = _createForOfIteratorHelper(message.totalRewards),
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
    var message = createBaseMsgWithdrawRewardsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordsNum = reader.uint64();
          break;
        case 2:
          message.totalRewards.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$totalRewards;
    var message = createBaseMsgWithdrawRewardsResponse();
    message.recordsNum = object.recordsNum !== undefined && object.recordsNum !== null ? _helpers.Long.fromValue(object.recordsNum) : _helpers.Long.UZERO;
    message.totalRewards = ((_object$totalRewards = object.totalRewards) === null || _object$totalRewards === void 0 ? void 0 : _object$totalRewards.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.MsgWithdrawRewardsResponse = MsgWithdrawRewardsResponse;
function createBaseMsgSetFlatFee() {
  return {
    senderAddress: "",
    contractAddress: "",
    flatFeeAmount: undefined
  };
}
var MsgSetFlatFee = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.flatFeeAmount !== undefined) {
      _coin.Coin.encode(message.flatFeeAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetFlatFee();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.flatFeeAmount = _coin.Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$senderAddress2, _object$contractAddre;
    var message = createBaseMsgSetFlatFee();
    message.senderAddress = (_object$senderAddress2 = object.senderAddress) !== null && _object$senderAddress2 !== void 0 ? _object$senderAddress2 : "";
    message.contractAddress = (_object$contractAddre = object.contractAddress) !== null && _object$contractAddre !== void 0 ? _object$contractAddre : "";
    message.flatFeeAmount = object.flatFeeAmount !== undefined && object.flatFeeAmount !== null ? _coin.Coin.fromPartial(object.flatFeeAmount) : undefined;
    return message;
  }
};
exports.MsgSetFlatFee = MsgSetFlatFee;
function createBaseMsgSetFlatFeeResponse() {
  return {};
}
var MsgSetFlatFeeResponse = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseMsgSetFlatFeeResponse();
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
    var message = createBaseMsgSetFlatFeeResponse();
    return message;
  }
};
exports.MsgSetFlatFeeResponse = MsgSetFlatFeeResponse;