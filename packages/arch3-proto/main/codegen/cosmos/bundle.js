"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cosmos = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _10 = _interopRequireWildcard(require("./auth/v1beta1/auth"));
var _11 = _interopRequireWildcard(require("./auth/v1beta1/genesis"));
var _12 = _interopRequireWildcard(require("./auth/v1beta1/query"));
var _13 = _interopRequireWildcard(require("./bank/v1beta1/bank"));
var _14 = _interopRequireWildcard(require("./bank/v1beta1/genesis"));
var _15 = _interopRequireWildcard(require("./bank/v1beta1/query"));
var _16 = _interopRequireWildcard(require("./bank/v1beta1/tx"));
var _17 = _interopRequireWildcard(require("./base/abci/v1beta1/abci"));
var _18 = _interopRequireWildcard(require("./base/kv/v1beta1/kv"));
var _19 = _interopRequireWildcard(require("./base/query/v1beta1/pagination"));
var _20 = _interopRequireWildcard(require("./base/reflection/v1beta1/reflection"));
var _21 = _interopRequireWildcard(require("./base/snapshots/v1beta1/snapshot"));
var _22 = _interopRequireWildcard(require("./base/store/v1beta1/commit_info"));
var _23 = _interopRequireWildcard(require("./base/store/v1beta1/snapshot"));
var _24 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query"));
var _25 = _interopRequireWildcard(require("./base/v1beta1/coin"));
var _26 = _interopRequireWildcard(require("./capability/v1beta1/capability"));
var _27 = _interopRequireWildcard(require("./capability/v1beta1/genesis"));
var _28 = _interopRequireWildcard(require("./crisis/v1beta1/genesis"));
var _29 = _interopRequireWildcard(require("./crisis/v1beta1/tx"));
var _30 = _interopRequireWildcard(require("./crypto/ed25519/keys"));
var _31 = _interopRequireWildcard(require("./crypto/multisig/keys"));
var _32 = _interopRequireWildcard(require("./crypto/secp256k1/keys"));
var _33 = _interopRequireWildcard(require("./distribution/v1beta1/distribution"));
var _34 = _interopRequireWildcard(require("./distribution/v1beta1/genesis"));
var _35 = _interopRequireWildcard(require("./distribution/v1beta1/query"));
var _36 = _interopRequireWildcard(require("./distribution/v1beta1/tx"));
var _37 = _interopRequireWildcard(require("./evidence/v1beta1/evidence"));
var _38 = _interopRequireWildcard(require("./evidence/v1beta1/genesis"));
var _39 = _interopRequireWildcard(require("./evidence/v1beta1/query"));
var _40 = _interopRequireWildcard(require("./evidence/v1beta1/tx"));
var _41 = _interopRequireWildcard(require("./genutil/v1beta1/genesis"));
var _42 = _interopRequireWildcard(require("./gov/v1beta1/genesis"));
var _43 = _interopRequireWildcard(require("./gov/v1beta1/gov"));
var _44 = _interopRequireWildcard(require("./gov/v1beta1/query"));
var _45 = _interopRequireWildcard(require("./gov/v1beta1/tx"));
var _46 = _interopRequireWildcard(require("./mint/v1beta1/genesis"));
var _47 = _interopRequireWildcard(require("./mint/v1beta1/mint"));
var _48 = _interopRequireWildcard(require("./mint/v1beta1/query"));
var _49 = _interopRequireWildcard(require("./params/v1beta1/params"));
var _50 = _interopRequireWildcard(require("./params/v1beta1/query"));
var _51 = _interopRequireWildcard(require("./slashing/v1beta1/genesis"));
var _52 = _interopRequireWildcard(require("./slashing/v1beta1/query"));
var _53 = _interopRequireWildcard(require("./slashing/v1beta1/slashing"));
var _54 = _interopRequireWildcard(require("./slashing/v1beta1/tx"));
var _55 = _interopRequireWildcard(require("./staking/v1beta1/genesis"));
var _56 = _interopRequireWildcard(require("./staking/v1beta1/query"));
var _57 = _interopRequireWildcard(require("./staking/v1beta1/staking"));
var _58 = _interopRequireWildcard(require("./staking/v1beta1/tx"));
var _59 = _interopRequireWildcard(require("./tx/signing/v1beta1/signing"));
var _60 = _interopRequireWildcard(require("./tx/v1beta1/service"));
var _61 = _interopRequireWildcard(require("./tx/v1beta1/tx"));
var _62 = _interopRequireWildcard(require("./upgrade/v1beta1/query"));
var _63 = _interopRequireWildcard(require("./upgrade/v1beta1/upgrade"));
var _64 = _interopRequireWildcard(require("./vesting/v1beta1/tx"));
var _65 = _interopRequireWildcard(require("./vesting/v1beta1/vesting"));
var _109 = _interopRequireWildcard(require("./auth/v1beta1/query.rpc.Query"));
var _110 = _interopRequireWildcard(require("./bank/v1beta1/query.rpc.Query"));
var _111 = _interopRequireWildcard(require("./base/tendermint/v1beta1/query.rpc.Service"));
var _112 = _interopRequireWildcard(require("./distribution/v1beta1/query.rpc.Query"));
var _113 = _interopRequireWildcard(require("./evidence/v1beta1/query.rpc.Query"));
var _114 = _interopRequireWildcard(require("./gov/v1beta1/query.rpc.Query"));
var _115 = _interopRequireWildcard(require("./mint/v1beta1/query.rpc.Query"));
var _116 = _interopRequireWildcard(require("./params/v1beta1/query.rpc.Query"));
var _117 = _interopRequireWildcard(require("./slashing/v1beta1/query.rpc.Query"));
var _118 = _interopRequireWildcard(require("./staking/v1beta1/query.rpc.Query"));
var _119 = _interopRequireWildcard(require("./tx/v1beta1/service.rpc.Service"));
var _120 = _interopRequireWildcard(require("./upgrade/v1beta1/query.rpc.Query"));
var _121 = _interopRequireWildcard(require("./bank/v1beta1/tx.rpc.msg"));
var _122 = _interopRequireWildcard(require("./crisis/v1beta1/tx.rpc.msg"));
var _123 = _interopRequireWildcard(require("./distribution/v1beta1/tx.rpc.msg"));
var _124 = _interopRequireWildcard(require("./evidence/v1beta1/tx.rpc.msg"));
var _125 = _interopRequireWildcard(require("./gov/v1beta1/tx.rpc.msg"));
var _126 = _interopRequireWildcard(require("./slashing/v1beta1/tx.rpc.msg"));
var _127 = _interopRequireWildcard(require("./staking/v1beta1/tx.rpc.msg"));
var _128 = _interopRequireWildcard(require("./vesting/v1beta1/tx.rpc.msg"));
var _139 = _interopRequireWildcard(require("./rpc.query"));
var _140 = _interopRequireWildcard(require("./rpc.tx"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cosmos;
exports.cosmos = cosmos;
(function (_cosmos) {
  var auth;
  (function (_auth) {
    var v1beta1 = _auth.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _10), _11), _12), _109);
  })(auth || (auth = _cosmos.auth || (_cosmos.auth = {})));
  var bank;
  (function (_bank) {
    var v1beta1 = _bank.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _13), _14), _15), _16), _110), _121);
  })(bank || (bank = _cosmos.bank || (_cosmos.bank = {})));
  var base;
  (function (_base) {
    var abci;
    (function (_abci) {
      var v1beta1 = _abci.v1beta1 = _objectSpread({}, _17);
    })(abci || (abci = _base.abci || (_base.abci = {})));
    var kv;
    (function (_kv) {
      var v1beta1 = _kv.v1beta1 = _objectSpread({}, _18);
    })(kv || (kv = _base.kv || (_base.kv = {})));
    var query;
    (function (_query) {
      var v1beta1 = _query.v1beta1 = _objectSpread({}, _19);
    })(query || (query = _base.query || (_base.query = {})));
    var reflection;
    (function (_reflection) {
      var v1beta1 = _reflection.v1beta1 = _objectSpread({}, _20);
    })(reflection || (reflection = _base.reflection || (_base.reflection = {})));
    var snapshots;
    (function (_snapshots) {
      var v1beta1 = _snapshots.v1beta1 = _objectSpread({}, _21);
    })(snapshots || (snapshots = _base.snapshots || (_base.snapshots = {})));
    var store;
    (function (_store) {
      var v1beta1 = _store.v1beta1 = _objectSpread(_objectSpread({}, _22), _23);
    })(store || (store = _base.store || (_base.store = {})));
    var tendermint;
    (function (_tendermint) {
      var v1beta1 = _tendermint.v1beta1 = _objectSpread(_objectSpread({}, _24), _111);
    })(tendermint || (tendermint = _base.tendermint || (_base.tendermint = {})));
    var v1beta1 = _base.v1beta1 = _objectSpread({}, _25);
  })(base || (base = _cosmos.base || (_cosmos.base = {})));
  var capability;
  (function (_capability) {
    var v1beta1 = _capability.v1beta1 = _objectSpread(_objectSpread({}, _26), _27);
  })(capability || (capability = _cosmos.capability || (_cosmos.capability = {})));
  var crisis;
  (function (_crisis) {
    var v1beta1 = _crisis.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _28), _29), _122);
  })(crisis || (crisis = _cosmos.crisis || (_cosmos.crisis = {})));
  var crypto;
  (function (_crypto) {
    var ed25519 = _crypto.ed25519 = _objectSpread({}, _30);
    var multisig = _crypto.multisig = _objectSpread({}, _31);
    var secp256k1 = _crypto.secp256k1 = _objectSpread({}, _32);
  })(crypto || (crypto = _cosmos.crypto || (_cosmos.crypto = {})));
  var distribution;
  (function (_distribution) {
    var v1beta1 = _distribution.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _33), _34), _35), _36), _112), _123);
  })(distribution || (distribution = _cosmos.distribution || (_cosmos.distribution = {})));
  var evidence;
  (function (_evidence) {
    var v1beta1 = _evidence.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _37), _38), _39), _40), _113), _124);
  })(evidence || (evidence = _cosmos.evidence || (_cosmos.evidence = {})));
  var genutil;
  (function (_genutil) {
    var v1beta1 = _genutil.v1beta1 = _objectSpread({}, _41);
  })(genutil || (genutil = _cosmos.genutil || (_cosmos.genutil = {})));
  var gov;
  (function (_gov) {
    var v1beta1 = _gov.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _42), _43), _44), _45), _114), _125);
  })(gov || (gov = _cosmos.gov || (_cosmos.gov = {})));
  var mint;
  (function (_mint) {
    var v1beta1 = _mint.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _46), _47), _48), _115);
  })(mint || (mint = _cosmos.mint || (_cosmos.mint = {})));
  var params;
  (function (_params) {
    var v1beta1 = _params.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _49), _50), _116);
  })(params || (params = _cosmos.params || (_cosmos.params = {})));
  var slashing;
  (function (_slashing) {
    var v1beta1 = _slashing.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _51), _52), _53), _54), _117), _126);
  })(slashing || (slashing = _cosmos.slashing || (_cosmos.slashing = {})));
  var staking;
  (function (_staking) {
    var v1beta1 = _staking.v1beta1 = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _55), _56), _57), _58), _118), _127);
  })(staking || (staking = _cosmos.staking || (_cosmos.staking = {})));
  var tx;
  (function (_tx) {
    var signing;
    (function (_signing) {
      var v1beta1 = _signing.v1beta1 = _objectSpread({}, _59);
    })(signing || (signing = _tx.signing || (_tx.signing = {})));
    var v1beta1 = _tx.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _60), _61), _119);
  })(tx || (tx = _cosmos.tx || (_cosmos.tx = {})));
  var upgrade;
  (function (_upgrade) {
    var v1beta1 = _upgrade.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _62), _63), _120);
  })(upgrade || (upgrade = _cosmos.upgrade || (_cosmos.upgrade = {})));
  var vesting;
  (function (_vesting) {
    var v1beta1 = _vesting.v1beta1 = _objectSpread(_objectSpread(_objectSpread({}, _64), _65), _128);
  })(vesting || (vesting = _cosmos.vesting || (_cosmos.vesting = {})));
  var ClientFactory = _cosmos.ClientFactory = _objectSpread(_objectSpread({}, _139), _140);
})(cosmos || (exports.cosmos = cosmos = {}));