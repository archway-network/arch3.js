"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tendermint = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _95 = _interopRequireWildcard(require("./abci/types"));
var _96 = _interopRequireWildcard(require("./crypto/keys"));
var _97 = _interopRequireWildcard(require("./crypto/proof"));
var _98 = _interopRequireWildcard(require("./libs/bits/types"));
var _99 = _interopRequireWildcard(require("./p2p/types"));
var _100 = _interopRequireWildcard(require("./types/block"));
var _101 = _interopRequireWildcard(require("./types/evidence"));
var _102 = _interopRequireWildcard(require("./types/params"));
var _103 = _interopRequireWildcard(require("./types/types"));
var _104 = _interopRequireWildcard(require("./types/validator"));
var _105 = _interopRequireWildcard(require("./version/types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var tendermint;
exports.tendermint = tendermint;
(function (_tendermint) {
  var abci = _tendermint.abci = _objectSpread({}, _95);
  var crypto = _tendermint.crypto = _objectSpread(_objectSpread({}, _96), _97);
  var libs;
  (function (_libs) {
    var bits = _libs.bits = _objectSpread({}, _98);
  })(libs || (libs = _tendermint.libs || (_tendermint.libs = {})));
  var p2p = _tendermint.p2p = _objectSpread({}, _99);
  var types = _tendermint.types = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _100), _101), _102), _103), _104);
  var version = _tendermint.version = _objectSpread({}, _105);
})(tendermint || (exports.tendermint = tendermint = {}));