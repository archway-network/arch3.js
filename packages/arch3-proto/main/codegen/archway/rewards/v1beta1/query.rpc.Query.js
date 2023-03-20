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
    this.params = this.params.bind(this);
    this.contractMetadata = this.contractMetadata.bind(this);
    this.blockRewardsTracking = this.blockRewardsTracking.bind(this);
    this.rewardsPool = this.rewardsPool.bind(this);
    this.estimateTxFees = this.estimateTxFees.bind(this);
    this.rewardsRecords = this.rewardsRecords.bind(this);
    this.outstandingRewards = this.outstandingRewards.bind(this);
    this.flatFee = this.flatFee.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "params",
    value: function params() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryParamsRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "Params", data);
      return promise.then(function (data) {
        return _query.QueryParamsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "contractMetadata",
    value: function contractMetadata(request) {
      var data = _query.QueryContractMetadataRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "ContractMetadata", data);
      return promise.then(function (data) {
        return _query.QueryContractMetadataResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "blockRewardsTracking",
    value: function blockRewardsTracking() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryBlockRewardsTrackingRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "BlockRewardsTracking", data);
      return promise.then(function (data) {
        return _query.QueryBlockRewardsTrackingResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "rewardsPool",
    value: function rewardsPool() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = _query.QueryRewardsPoolRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "RewardsPool", data);
      return promise.then(function (data) {
        return _query.QueryRewardsPoolResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "estimateTxFees",
    value: function estimateTxFees(request) {
      var data = _query.QueryEstimateTxFeesRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "EstimateTxFees", data);
      return promise.then(function (data) {
        return _query.QueryEstimateTxFeesResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "rewardsRecords",
    value: function rewardsRecords(request) {
      var data = _query.QueryRewardsRecordsRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "RewardsRecords", data);
      return promise.then(function (data) {
        return _query.QueryRewardsRecordsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "outstandingRewards",
    value: function outstandingRewards(request) {
      var data = _query.QueryOutstandingRewardsRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "OutstandingRewards", data);
      return promise.then(function (data) {
        return _query.QueryOutstandingRewardsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "flatFee",
    value: function flatFee(request) {
      var data = _query.QueryFlatFeeRequest.encode(request).finish();
      var promise = this.rpc.request("archway.rewards.v1beta1.Query", "FlatFee", data);
      return promise.then(function (data) {
        return _query.QueryFlatFeeResponse.decode(new _m0.Reader(data));
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
    params: function params(request) {
      return queryService.params(request);
    },
    contractMetadata: function contractMetadata(request) {
      return queryService.contractMetadata(request);
    },
    blockRewardsTracking: function blockRewardsTracking(request) {
      return queryService.blockRewardsTracking(request);
    },
    rewardsPool: function rewardsPool(request) {
      return queryService.rewardsPool(request);
    },
    estimateTxFees: function estimateTxFees(request) {
      return queryService.estimateTxFees(request);
    },
    rewardsRecords: function rewardsRecords(request) {
      return queryService.rewardsRecords(request);
    },
    outstandingRewards: function outstandingRewards(request) {
      return queryService.outstandingRewards(request);
    },
    flatFee: function flatFee(request) {
      return queryService.flatFee(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;