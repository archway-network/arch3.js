"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesisState = void 0;
var _tracking = require("./tracking");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createBaseGenesisState() {
  return {
    txInfoLastId: _helpers.Long.UZERO,
    txInfos: [],
    contractOpInfoLastId: _helpers.Long.UZERO,
    contractOpInfos: []
  };
}
var GenesisState = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.txInfoLastId.isZero()) {
      writer.uint32(8).uint64(message.txInfoLastId);
    }
    var _iterator = _createForOfIteratorHelper(message.txInfos),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var v = _step.value;
        _tracking.TxInfo.encode(v, writer.uint32(18).fork()).ldelim();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (!message.contractOpInfoLastId.isZero()) {
      writer.uint32(24).uint64(message.contractOpInfoLastId);
    }
    var _iterator2 = _createForOfIteratorHelper(message.contractOpInfos),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _v = _step2.value;
        _tracking.ContractOperationInfo.encode(_v, writer.uint32(34).fork()).ldelim();
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
    var message = createBaseGenesisState();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txInfoLastId = reader.uint64();
          break;
        case 2:
          message.txInfos.push(_tracking.TxInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contractOpInfoLastId = reader.uint64();
          break;
        case 4:
          message.contractOpInfos.push(_tracking.ContractOperationInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$txInfos, _object$contractOpInf;
    var message = createBaseGenesisState();
    message.txInfoLastId = object.txInfoLastId !== undefined && object.txInfoLastId !== null ? _helpers.Long.fromValue(object.txInfoLastId) : _helpers.Long.UZERO;
    message.txInfos = ((_object$txInfos = object.txInfos) === null || _object$txInfos === void 0 ? void 0 : _object$txInfos.map(function (e) {
      return _tracking.TxInfo.fromPartial(e);
    })) || [];
    message.contractOpInfoLastId = object.contractOpInfoLastId !== undefined && object.contractOpInfoLastId !== null ? _helpers.Long.fromValue(object.contractOpInfoLastId) : _helpers.Long.UZERO;
    message.contractOpInfos = ((_object$contractOpInf = object.contractOpInfos) === null || _object$contractOpInf === void 0 ? void 0 : _object$contractOpInf.map(function (e) {
      return _tracking.ContractOperationInfo.fromPartial(e);
    })) || [];
    return message;
  }
};
exports.GenesisState = GenesisState;