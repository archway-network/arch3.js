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
            return _interopRequireWildcard(require("../cosmos/bank/v1beta1/tx.rpc.msg"));
          });
        case 3:
          _context.t0 = _context.sent.MsgClientImpl;
          _context.t1 = rpc;
          _context.t2 = new _context.t0(_context.t1);
          _context.t3 = {
            v1beta1: _context.t2
          };
          _context.next = 9;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/crisis/v1beta1/tx.rpc.msg"));
          });
        case 9:
          _context.t4 = _context.sent.MsgClientImpl;
          _context.t5 = rpc;
          _context.t6 = new _context.t4(_context.t5);
          _context.t7 = {
            v1beta1: _context.t6
          };
          _context.next = 15;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/distribution/v1beta1/tx.rpc.msg"));
          });
        case 15:
          _context.t8 = _context.sent.MsgClientImpl;
          _context.t9 = rpc;
          _context.t10 = new _context.t8(_context.t9);
          _context.t11 = {
            v1beta1: _context.t10
          };
          _context.next = 21;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/evidence/v1beta1/tx.rpc.msg"));
          });
        case 21:
          _context.t12 = _context.sent.MsgClientImpl;
          _context.t13 = rpc;
          _context.t14 = new _context.t12(_context.t13);
          _context.t15 = {
            v1beta1: _context.t14
          };
          _context.next = 27;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/gov/v1beta1/tx.rpc.msg"));
          });
        case 27:
          _context.t16 = _context.sent.MsgClientImpl;
          _context.t17 = rpc;
          _context.t18 = new _context.t16(_context.t17);
          _context.t19 = {
            v1beta1: _context.t18
          };
          _context.next = 33;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/slashing/v1beta1/tx.rpc.msg"));
          });
        case 33:
          _context.t20 = _context.sent.MsgClientImpl;
          _context.t21 = rpc;
          _context.t22 = new _context.t20(_context.t21);
          _context.t23 = {
            v1beta1: _context.t22
          };
          _context.next = 39;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/staking/v1beta1/tx.rpc.msg"));
          });
        case 39:
          _context.t24 = _context.sent.MsgClientImpl;
          _context.t25 = rpc;
          _context.t26 = new _context.t24(_context.t25);
          _context.t27 = {
            v1beta1: _context.t26
          };
          _context.next = 45;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("../cosmos/vesting/v1beta1/tx.rpc.msg"));
          });
        case 45:
          _context.t28 = _context.sent.MsgClientImpl;
          _context.t29 = rpc;
          _context.t30 = new _context.t28(_context.t29);
          _context.t31 = {
            v1beta1: _context.t30
          };
          _context.t32 = {
            bank: _context.t3,
            crisis: _context.t7,
            distribution: _context.t11,
            evidence: _context.t15,
            gov: _context.t19,
            slashing: _context.t23,
            staking: _context.t27,
            vesting: _context.t31
          };
          _context.next = 52;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./applications/transfer/v1/tx.rpc.msg"));
          });
        case 52:
          _context.t33 = _context.sent.MsgClientImpl;
          _context.t34 = rpc;
          _context.t35 = new _context.t33(_context.t34);
          _context.t36 = {
            v1: _context.t35
          };
          _context.t37 = {
            transfer: _context.t36
          };
          _context.next = 59;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./core/channel/v1/tx.rpc.msg"));
          });
        case 59:
          _context.t38 = _context.sent.MsgClientImpl;
          _context.t39 = rpc;
          _context.t40 = new _context.t38(_context.t39);
          _context.t41 = {
            v1: _context.t40
          };
          _context.next = 65;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./core/client/v1/tx.rpc.msg"));
          });
        case 65:
          _context.t42 = _context.sent.MsgClientImpl;
          _context.t43 = rpc;
          _context.t44 = new _context.t42(_context.t43);
          _context.t45 = {
            v1: _context.t44
          };
          _context.next = 71;
          return Promise.resolve().then(function () {
            return _interopRequireWildcard(require("./core/connection/v1/tx.rpc.msg"));
          });
        case 71:
          _context.t46 = _context.sent.MsgClientImpl;
          _context.t47 = rpc;
          _context.t48 = new _context.t46(_context.t47);
          _context.t49 = {
            v1: _context.t48
          };
          _context.t50 = {
            channel: _context.t41,
            client: _context.t45,
            connection: _context.t49
          };
          _context.t51 = {
            applications: _context.t37,
            core: _context.t50
          };
          return _context.abrupt("return", {
            cosmos: _context.t32,
            ibc: _context.t51
          });
        case 78:
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