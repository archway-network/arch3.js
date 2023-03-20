"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryRewardsRecordsResponse = exports.QueryRewardsRecordsRequest = exports.QueryRewardsPoolResponse = exports.QueryRewardsPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryOutstandingRewardsResponse = exports.QueryOutstandingRewardsRequest = exports.QueryFlatFeeResponse = exports.QueryFlatFeeRequest = exports.QueryEstimateTxFeesResponse = exports.QueryEstimateTxFeesRequest = exports.QueryContractMetadataResponse = exports.QueryContractMetadataRequest = exports.QueryBlockRewardsTrackingResponse = exports.QueryBlockRewardsTrackingRequest = exports.BlockTracking = void 0;
var _pagination = require("../../../cosmos/base/query/v1beta1/pagination");
var _rewards = require("./rewards");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseQueryParamsRequest() {
  return {};
}
var QueryParamsRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsRequest();
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
    var message = createBaseQueryParamsRequest();
    return message;
  }
};
exports.QueryParamsRequest = QueryParamsRequest;
function createBaseQueryParamsResponse() {
  return {
    params: undefined
  };
}
var QueryParamsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _rewards.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _rewards.Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? _rewards.Params.fromPartial(object.params) : undefined;
    return message;
  }
};
exports.QueryParamsResponse = QueryParamsResponse;
function createBaseQueryContractMetadataRequest() {
  return {
    contractAddress: ""
  };
}
var QueryContractMetadataRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryContractMetadataRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
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
    var message = createBaseQueryContractMetadataRequest();
    message.contractAddress = (_object$contractAddre = object.contractAddress) !== null && _object$contractAddre !== void 0 ? _object$contractAddre : "";
    return message;
  }
};
exports.QueryContractMetadataRequest = QueryContractMetadataRequest;
function createBaseQueryContractMetadataResponse() {
  return {
    metadata: undefined
  };
}
var QueryContractMetadataResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.metadata !== undefined) {
      _rewards.ContractMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryContractMetadataResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var message = createBaseQueryContractMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? _rewards.ContractMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }
};
exports.QueryContractMetadataResponse = QueryContractMetadataResponse;
function createBaseQueryBlockRewardsTrackingRequest() {
  return {};
}
var QueryBlockRewardsTrackingRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryBlockRewardsTrackingRequest();
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
    var message = createBaseQueryBlockRewardsTrackingRequest();
    return message;
  }
};
exports.QueryBlockRewardsTrackingRequest = QueryBlockRewardsTrackingRequest;
function createBaseQueryBlockRewardsTrackingResponse() {
  return {
    block: undefined
  };
}
var QueryBlockRewardsTrackingResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.block !== undefined) {
      BlockTracking.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryBlockRewardsTrackingResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockTracking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseQueryBlockRewardsTrackingResponse();
    message.block = object.block !== undefined && object.block !== null ? BlockTracking.fromPartial(object.block) : undefined;
    return message;
  }
};
exports.QueryBlockRewardsTrackingResponse = QueryBlockRewardsTrackingResponse;
function createBaseQueryRewardsPoolRequest() {
  return {};
}
var QueryRewardsPoolRequest = {
  encode: function encode(_) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRewardsPoolRequest();
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
    var message = createBaseQueryRewardsPoolRequest();
    return message;
  }
};
exports.QueryRewardsPoolRequest = QueryRewardsPoolRequest;
function createBaseQueryRewardsPoolResponse() {
  return {
    undistributedFunds: [],
    treasuryFunds: []
  };
}
var QueryRewardsPoolResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator = _createForOfIteratorHelper(message.undistributedFunds),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.treasuryFunds),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _coin.Coin.encode(_v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseQueryRewardsPoolResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undistributedFunds.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.treasuryFunds.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$undistributed, _object$treasuryFunds;
    var message = createBaseQueryRewardsPoolResponse();
    message.undistributedFunds = ((_object$undistributed = object.undistributedFunds) === null || _object$undistributed === void 0 ? void 0 : _object$undistributed.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.treasuryFunds = ((_object$treasuryFunds = object.treasuryFunds) === null || _object$treasuryFunds === void 0 ? void 0 : _object$treasuryFunds.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryRewardsPoolResponse = QueryRewardsPoolResponse;
function createBaseQueryEstimateTxFeesRequest() {
  return {
    gasLimit: _helpers.Long.UZERO,
    contractAddress: ""
  };
}
var QueryEstimateTxFeesRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.gasLimit.isZero()) {
      writer.uint32(8).uint64(message.gasLimit);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryEstimateTxFeesRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasLimit = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractAddre2;
    var message = createBaseQueryEstimateTxFeesRequest();
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? _helpers.Long.fromValue(object.gasLimit) : _helpers.Long.UZERO;
    message.contractAddress = (_object$contractAddre2 = object.contractAddress) !== null && _object$contractAddre2 !== void 0 ? _object$contractAddre2 : "";
    return message;
  }
};
exports.QueryEstimateTxFeesRequest = QueryEstimateTxFeesRequest;
function createBaseQueryEstimateTxFeesResponse() {
  return {
    gasUnitPrice: undefined,
    estimatedFee: []
  };
}
var QueryEstimateTxFeesResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.gasUnitPrice !== undefined) {
      _coin.DecCoin.encode(message.gasUnitPrice, writer.uint32(10).fork()).ldelim();
    }
    var _iterator3 = _createForOfIteratorHelper(message.estimatedFee),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var v = _step3.value;
        _coin.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseQueryEstimateTxFeesResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasUnitPrice = _coin.DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.estimatedFee.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$estimatedFee;
    var message = createBaseQueryEstimateTxFeesResponse();
    message.gasUnitPrice = object.gasUnitPrice !== undefined && object.gasUnitPrice !== null ? _coin.DecCoin.fromPartial(object.gasUnitPrice) : undefined;
    message.estimatedFee = ((_object$estimatedFee = object.estimatedFee) === null || _object$estimatedFee === void 0 ? void 0 : _object$estimatedFee.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.QueryEstimateTxFeesResponse = QueryEstimateTxFeesResponse;
function createBaseBlockTracking() {
  return {
    inflationRewards: undefined,
    txRewards: []
  };
}
var BlockTracking = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.inflationRewards !== undefined) {
      _rewards.BlockRewards.encode(message.inflationRewards, writer.uint32(10).fork()).ldelim();
    }
    var _iterator4 = _createForOfIteratorHelper(message.txRewards),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var v = _step4.value;
        _rewards.TxRewards.encode(v, writer.uint32(18).fork()).ldelim();
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
    var message = createBaseBlockTracking();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRewards = _rewards.BlockRewards.decode(reader, reader.uint32());
          break;
        case 2:
          message.txRewards.push(_rewards.TxRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txRewards;
    var message = createBaseBlockTracking();
    message.inflationRewards = object.inflationRewards !== undefined && object.inflationRewards !== null ? _rewards.BlockRewards.fromPartial(object.inflationRewards) : undefined;
    message.txRewards = ((_object$txRewards = object.txRewards) === null || _object$txRewards === void 0 ? void 0 : _object$txRewards.map(function (e) {
      return _rewards.TxRewards.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.BlockTracking = BlockTracking;
function createBaseQueryRewardsRecordsRequest() {
  return {
    rewardsAddress: "",
    pagination: undefined
  };
}
var QueryRewardsRecordsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.pagination !== undefined) {
      _pagination.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRewardsRecordsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
          break;
        case 2:
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
    var _object$rewardsAddres;
    var message = createBaseQueryRewardsRecordsRequest();
    message.rewardsAddress = (_object$rewardsAddres = object.rewardsAddress) !== null && _object$rewardsAddres !== void 0 ? _object$rewardsAddres : "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryRewardsRecordsRequest = QueryRewardsRecordsRequest;
function createBaseQueryRewardsRecordsResponse() {
  return {
    records: [],
    pagination: undefined
  };
}
var QueryRewardsRecordsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator5 = _createForOfIteratorHelper(message.records),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var v = _step5.value;
        _rewards.RewardsRecord.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    if (message.pagination !== undefined) {
      _pagination.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryRewardsRecordsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(_rewards.RewardsRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = _pagination.PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$records;
    var message = createBaseQueryRewardsRecordsResponse();
    message.records = ((_object$records = object.records) === null || _object$records === void 0 ? void 0 : _object$records.map(function (e) {
      return _rewards.RewardsRecord.fromPartial(e);
    })) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? _pagination.PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
exports.QueryRewardsRecordsResponse = QueryRewardsRecordsResponse;
function createBaseQueryOutstandingRewardsRequest() {
  return {
    rewardsAddress: ""
  };
}
var QueryOutstandingRewardsRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryOutstandingRewardsRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var _object$rewardsAddres2;
    var message = createBaseQueryOutstandingRewardsRequest();
    message.rewardsAddress = (_object$rewardsAddres2 = object.rewardsAddress) !== null && _object$rewardsAddres2 !== void 0 ? _object$rewardsAddres2 : "";
    return message;
  }
};
exports.QueryOutstandingRewardsRequest = QueryOutstandingRewardsRequest;
function createBaseQueryOutstandingRewardsResponse() {
  return {
    totalRewards: [],
    recordsNum: _helpers.Long.UZERO
  };
}
var QueryOutstandingRewardsResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    var _iterator6 = _createForOfIteratorHelper(message.totalRewards),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var v = _step6.value;
        _coin.Coin.encode(v, writer.uint32(10).fork()).ldelim();
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (!message.recordsNum.isZero()) {
      writer.uint32(16).uint64(message.recordsNum);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryOutstandingRewardsResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalRewards.push(_coin.Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.recordsNum = reader.uint64();
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
    var message = createBaseQueryOutstandingRewardsResponse();
    message.totalRewards = ((_object$totalRewards = object.totalRewards) === null || _object$totalRewards === void 0 ? void 0 : _object$totalRewards.map(function (e) {
      return _coin.Coin.fromPartial(e);
    })) || [];
    message.recordsNum = object.recordsNum !== undefined && object.recordsNum !== null ? _helpers.Long.fromValue(object.recordsNum) : _helpers.Long.UZERO;
    return message;
  }
};
exports.QueryOutstandingRewardsResponse = QueryOutstandingRewardsResponse;
function createBaseQueryFlatFeeRequest() {
  return {
    contractAddress: ""
  };
}
var QueryFlatFeeRequest = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFlatFeeRequest();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
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
    var message = createBaseQueryFlatFeeRequest();
    message.contractAddress = (_object$contractAddre3 = object.contractAddress) !== null && _object$contractAddre3 !== void 0 ? _object$contractAddre3 : "";
    return message;
  }
};
exports.QueryFlatFeeRequest = QueryFlatFeeRequest;
function createBaseQueryFlatFeeResponse() {
  return {
    flatFeeAmount: undefined
  };
}
var QueryFlatFeeResponse = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.flatFeeAmount !== undefined) {
      _coin.Coin.encode(message.flatFeeAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseQueryFlatFeeResponse();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    var message = createBaseQueryFlatFeeResponse();
    message.flatFeeAmount = object.flatFeeAmount !== undefined && object.flatFeeAmount !== null ? _coin.Coin.fromPartial(object.flatFeeAmount) : undefined;
    return message;
  }
};
exports.QueryFlatFeeResponse = QueryFlatFeeResponse;