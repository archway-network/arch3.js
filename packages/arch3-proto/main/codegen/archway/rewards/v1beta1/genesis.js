"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _rewards = require("./rewards");
var _coin = require("../../../cosmos/base/v1beta1/coin");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGenesisState() {
  return {
    params: undefined,
    contractsMetadata: [],
    blockRewards: [],
    txRewards: [],
    minConsensusFee: undefined,
    rewardsRecordLastId: _helpers.Long.UZERO,
    rewardsRecords: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.params !== undefined) {
      _rewards.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    var _iterator = _createForOfIteratorHelper(message.contractsMetadata),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _rewards.ContractMetadata.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var _iterator2 = _createForOfIteratorHelper(message.blockRewards),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _rewards.BlockRewards.encode(_v, writer.uint32(26).fork()).ldelim();
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var _iterator3 = _createForOfIteratorHelper(message.txRewards),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _v2 = _step3.value;
        _rewards.TxRewards.encode(_v2, writer.uint32(34).fork()).ldelim();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (message.minConsensusFee !== undefined) {
      _coin.DecCoin.encode(message.minConsensusFee, writer.uint32(42).fork()).ldelim();
    }
    if (!message.rewardsRecordLastId.isZero()) {
      writer.uint32(48).uint64(message.rewardsRecordLastId);
    }
    var _iterator4 = _createForOfIteratorHelper(message.rewardsRecords),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _v3 = _step4.value;
        _rewards.RewardsRecord.encode(_v3, writer.uint32(58).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = _rewards.Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractsMetadata.push(_rewards.ContractMetadata.decode(reader, reader.uint32()));
          break;
        case 3:
          message.blockRewards.push(_rewards.BlockRewards.decode(reader, reader.uint32()));
          break;
        case 4:
          message.txRewards.push(_rewards.TxRewards.decode(reader, reader.uint32()));
          break;
        case 5:
          message.minConsensusFee = _coin.DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.rewardsRecordLastId = reader.uint64();
          break;
        case 7:
          message.rewardsRecords.push(_rewards.RewardsRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$contractsMeta, _object$blockRewards, _object$txRewards, _object$rewardsRecord;
    var message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? _rewards.Params.fromPartial(object.params) : undefined;
    message.contractsMetadata = ((_object$contractsMeta = object.contractsMetadata) === null || _object$contractsMeta === void 0 ? void 0 : _object$contractsMeta.map(function (e) {
      return _rewards.ContractMetadata.fromPartial(e);
    })) || [];
    message.blockRewards = ((_object$blockRewards = object.blockRewards) === null || _object$blockRewards === void 0 ? void 0 : _object$blockRewards.map(function (e) {
      return _rewards.BlockRewards.fromPartial(e);
    })) || [];
    message.txRewards = ((_object$txRewards = object.txRewards) === null || _object$txRewards === void 0 ? void 0 : _object$txRewards.map(function (e) {
      return _rewards.TxRewards.fromPartial(e);
    })) || [];
    message.minConsensusFee = object.minConsensusFee !== undefined && object.minConsensusFee !== null ? _coin.DecCoin.fromPartial(object.minConsensusFee) : undefined;
    message.rewardsRecordLastId = object.rewardsRecordLastId !== undefined && object.rewardsRecordLastId !== null ? _helpers.Long.fromValue(object.rewardsRecordLastId) : _helpers.Long.UZERO;
    message.rewardsRecords = ((_object$rewardsRecord = object.rewardsRecords) === null || _object$rewardsRecord === void 0 ? void 0 : _object$rewardsRecord.map(function (e) {
      return _rewards.RewardsRecord.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;