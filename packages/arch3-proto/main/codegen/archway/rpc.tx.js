"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRPCMsgClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var createRPCMsgClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var rpc;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rpc = _ref.rpc;
          _context.next = 3;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./rewards/v1beta1/tx.rpc.msg"));
          });
        case 3:
          _context.t0 = _context.sent.MsgClientImpl;
          _context.t1 = rpc;
          _context.t2 = new _context.t0(_context.t1);
          _context.t3 = {
            v1beta1: _context.t2
          };
          _context.t4 = {
            rewards: _context.t3
          };
          _context.next = 10;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/tx.rpc.msg"));
          });
        case 10:
          _context.t5 = _context.sent.MsgClientImpl;
          _context.t6 = rpc;
          _context.t7 = new _context.t5(_context.t6);
          _context.t8 = {
            v1beta1: _context.t7
          };
          _context.next = 16;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/crisis/v1beta1/tx.rpc.msg"));
          });
        case 16:
          _context.t9 = _context.sent.MsgClientImpl;
          _context.t10 = rpc;
          _context.t11 = new _context.t9(_context.t10);
          _context.t12 = {
            v1beta1: _context.t11
          };
          _context.next = 22;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/tx.rpc.msg"));
          });
        case 22:
          _context.t13 = _context.sent.MsgClientImpl;
          _context.t14 = rpc;
          _context.t15 = new _context.t13(_context.t14);
          _context.t16 = {
            v1beta1: _context.t15
          };
          _context.next = 28;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/tx.rpc.msg"));
          });
        case 28:
          _context.t17 = _context.sent.MsgClientImpl;
          _context.t18 = rpc;
          _context.t19 = new _context.t17(_context.t18);
          _context.t20 = {
            v1beta1: _context.t19
          };
          _context.next = 34;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/tx.rpc.msg"));
          });
        case 34:
          _context.t21 = _context.sent.MsgClientImpl;
          _context.t22 = rpc;
          _context.t23 = new _context.t21(_context.t22);
          _context.t24 = {
            v1beta1: _context.t23
          };
          _context.next = 40;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/tx.rpc.msg"));
          });
        case 40:
          _context.t25 = _context.sent.MsgClientImpl;
          _context.t26 = rpc;
          _context.t27 = new _context.t25(_context.t26);
          _context.t28 = {
            v1beta1: _context.t27
          };
          _context.next = 46;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/tx.rpc.msg"));
          });
        case 46:
          _context.t29 = _context.sent.MsgClientImpl;
          _context.t30 = rpc;
          _context.t31 = new _context.t29(_context.t30);
          _context.t32 = {
            v1beta1: _context.t31
          };
          _context.next = 52;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/vesting/v1beta1/tx.rpc.msg"));
          });
        case 52:
          _context.t33 = _context.sent.MsgClientImpl;
          _context.t34 = rpc;
          _context.t35 = new _context.t33(_context.t34);
          _context.t36 = {
            v1beta1: _context.t35
          };
          _context.t37 = {
            bank: _context.t8,
            crisis: _context.t12,
            distribution: _context.t16,
            evidence: _context.t20,
            gov: _context.t24,
            slashing: _context.t28,
            staking: _context.t32,
            vesting: _context.t36
          };
          return _context.abrupt("return", {
            archway: _context.t4,
            cosmos: _context.t37
          });
        case 58:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createRPCMsgClient(_x) {
    return _ref2.apply(this, arguments);
  };
}();
exports.createRPCMsgClient = createRPCMsgClient;