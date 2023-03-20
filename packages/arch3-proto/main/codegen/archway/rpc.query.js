"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRPCQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _tendermintRpc = require("@cosmjs/tendermint-rpc");
var _stargate = require("@cosmjs/stargate");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createRPCQueryClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var rpcEndpoint, tmClient, client;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpcEndpoint = _ref.rpcEndpoint;
          _context.next = 3;
          return _tendermintRpc.Tendermint34Client.connect(rpcEndpoint);
        case 3:
          tmClient = _context.sent;
          client = new _stargate.QueryClient(tmClient);
          _context.next = 7;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./rewards/v1beta1/query.rpc.Query"));
          });
        case 7:
          _context.t0 = _context.sent.createRpcQueryExtension(client);
          _context.t1 = {
            v1beta1: _context.t0
          };
          _context.next = 11;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./tracking/v1beta1/query.rpc.Query"));
          });
        case 11:
          _context.t2 = _context.sent.createRpcQueryExtension(client);
          _context.t3 = {
            v1beta1: _context.t2
          };
          _context.t4 = {
            rewards: _context.t1,
            tracking: _context.t3
          };
          _context.next = 16;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/auth/v1beta1/query.rpc.Query"));
          });
        case 16:
          _context.t5 = _context.sent.createRpcQueryExtension(client);
          _context.t6 = {
            v1beta1: _context.t5
          };
          _context.next = 20;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/query.rpc.Query"));
          });
        case 20:
          _context.t7 = _context.sent.createRpcQueryExtension(client);
          _context.t8 = {
            v1beta1: _context.t7
          };
          _context.next = 24;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service"));
          });
        case 24:
          _context.t9 = _context.sent.createRpcQueryExtension(client);
          _context.t10 = {
            v1beta1: _context.t9
          };
          _context.t11 = {
            tendermint: _context.t10
          };
          _context.next = 29;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/query.rpc.Query"));
          });
        case 29:
          _context.t12 = _context.sent.createRpcQueryExtension(client);
          _context.t13 = {
            v1beta1: _context.t12
          };
          _context.next = 33;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/query.rpc.Query"));
          });
        case 33:
          _context.t14 = _context.sent.createRpcQueryExtension(client);
          _context.t15 = {
            v1beta1: _context.t14
          };
          _context.next = 37;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/query.rpc.Query"));
          });
        case 37:
          _context.t16 = _context.sent.createRpcQueryExtension(client);
          _context.t17 = {
            v1beta1: _context.t16
          };
          _context.next = 41;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/mint/v1beta1/query.rpc.Query"));
          });
        case 41:
          _context.t18 = _context.sent.createRpcQueryExtension(client);
          _context.t19 = {
            v1beta1: _context.t18
          };
          _context.next = 45;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/params/v1beta1/query.rpc.Query"));
          });
        case 45:
          _context.t20 = _context.sent.createRpcQueryExtension(client);
          _context.t21 = {
            v1beta1: _context.t20
          };
          _context.next = 49;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/query.rpc.Query"));
          });
        case 49:
          _context.t22 = _context.sent.createRpcQueryExtension(client);
          _context.t23 = {
            v1beta1: _context.t22
          };
          _context.next = 53;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/query.rpc.Query"));
          });
        case 53:
          _context.t24 = _context.sent.createRpcQueryExtension(client);
          _context.t25 = {
            v1beta1: _context.t24
          };
          _context.next = 57;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/tx/v1beta1/service.rpc.Service"));
          });
        case 57:
          _context.t26 = _context.sent.createRpcQueryExtension(client);
          _context.t27 = {
            v1beta1: _context.t26
          };
          _context.next = 61;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/upgrade/v1beta1/query.rpc.Query"));
          });
        case 61:
          _context.t28 = _context.sent.createRpcQueryExtension(client);
          _context.t29 = {
            v1beta1: _context.t28
          };
          _context.t30 = {
            auth: _context.t6,
            bank: _context.t8,
            base: _context.t11,
            distribution: _context.t13,
            evidence: _context.t15,
            gov: _context.t17,
            mint: _context.t19,
            params: _context.t21,
            slashing: _context.t23,
            staking: _context.t25,
            tx: _context.t27,
            upgrade: _context.t29
          };
          return _context.abrupt("return", {
            archway: _context.t4,
            cosmos: _context.t30
          });
        case 65:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createRPCQueryClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createRPCQueryClient = createRPCQueryClient;