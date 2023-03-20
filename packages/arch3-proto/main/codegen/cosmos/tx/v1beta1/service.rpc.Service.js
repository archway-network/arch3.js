"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _stargate = require("@cosmjs/stargate");
var _service = require("./service");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ServiceClientImpl = /*#__PURE__*/function () {
  function ServiceClientImpl(rpc) {
    (0, _classCallCheck2["default"])(this, ServiceClientImpl);
    (0, _defineProperty2["default"])(this, "rpc", void 0);
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
  }
  (0, _createClass2["default"])(ServiceClientImpl, [{
    key: "simulate",
    value: function simulate(request) {
      var data = _service.SimulateRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
      return promise.then(function (data) {
        return _service.SimulateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getTx",
    value: function getTx(request) {
      var data = _service.GetTxRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
      return promise.then(function (data) {
        return _service.GetTxResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "broadcastTx",
    value: function broadcastTx(request) {
      var data = _service.BroadcastTxRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
      return promise.then(function (data) {
        return _service.BroadcastTxResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "getTxsEvent",
    value: function getTxsEvent(request) {
      var data = _service.GetTxsEventRequest.encode(request).finish();
      var promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
      return promise.then(function (data) {
        return _service.GetTxsEventResponse.decode(new _m0.Reader(data));
      });
    }
  }]);
  return ServiceClientImpl;
}();
exports.ServiceClientImpl = ServiceClientImpl;
var createRpcQueryExtension = function createRpcQueryExtension(base) {
  var rpc = (0, _stargate.createProtobufRpcClient)(base);
  var queryService = new ServiceClientImpl(rpc);
  return {
    simulate: function simulate(request) {
      return queryService.simulate(request);
    },
    getTx: function getTx(request) {
      return queryService.getTx(request);
    },
    broadcastTx: function broadcastTx(request) {
      return queryService.broadcastTx(request);
    },
    getTxsEvent: function getTxsEvent(request) {
      return queryService.getTxsEvent(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;