"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.archway = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _0 = _interopRequireWildcard(require("./rewards/v1beta1/events"));
var _1 = _interopRequireWildcard(require("./rewards/v1beta1/genesis"));
var _2 = _interopRequireWildcard(require("./rewards/v1beta1/query"));
var _3 = _interopRequireWildcard(require("./rewards/v1beta1/rewards"));
var _4 = _interopRequireWildcard(require("./rewards/v1beta1/tx"));
var _5 = _interopRequireWildcard(require("./tracking/v1beta1/genesis"));
var _6 = _interopRequireWildcard(require("./tracking/v1beta1/query"));
var _7 = _interopRequireWildcard(require("./tracking/v1beta1/tracking"));
var _106 = _interopRequireWildcard(require("./rewards/v1beta1/query.rpc.Query"));
var _107 = _interopRequireWildcard(require("./tracking/v1beta1/query.rpc.Query"));
var _108 = _interopRequireWildcard(require("./rewards/v1beta1/tx.rpc.msg"));
var _137 = _interopRequireWildcard(require("./rpc.query"));
var _138 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var archway;
exports.archway = archway;
(function (_archway) {
  var rewards;
  (function (_rewards) {
    var v1beta1 = _rewards.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _0), _1), _2), _3), _4), _106), _108);
  })(rewards || (rewards = _archway.rewards || (_archway.rewards = {})));
  var tracking;
  (function (_tracking) {
    var v1beta1 = _tracking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _5), _6), _7), _107);
  })(tracking || (tracking = _archway.tracking || (_archway.tracking = {})));
  var ClientFactory = _archway.ClientFactory = _objectSpread(_objectSpread({}, _137), _138);
})(archway || (exports.archway = archway = {}));