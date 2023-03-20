"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _query = require("./query");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var QueryClientImpl = /*#__PURE__*/function () {
  function QueryClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, QueryClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.evidence = this.evidence.bind(this);
    this.allEvidence = this.allEvidence.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "evidence",
    value: function evidence(request) {
      var data = _query.QueryEvidenceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
      return promise.then(function (data) {
        return _query.QueryEvidenceResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "allEvidence",
    value: function allEvidence() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryAllEvidenceRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
      return promise.then(function (data) {
        return _query.QueryAllEvidenceResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return QueryClientImpl;
}();
exports.QueryClientImpl = QueryClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new QueryClientImpl(rpc);
  return {
    evidence: function evidence(request) {
      return queryService.evidence(request);
    },
    allEvidence: function allEvidence(request) {
      return queryService.allEvidence(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;