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
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "connection",
    value: function connection(request) {
      var data = _query.QueryConnectionRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
      return promise.then(function (data) {
        return _query.QueryConnectionResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connections",
    value: function connections() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryConnectionsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
      return promise.then(function (data) {
        return _query.QueryConnectionsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "clientConnections",
    value: function clientConnections(request) {
      var data = _query.QueryClientConnectionsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
      return promise.then(function (data) {
        return _query.QueryClientConnectionsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionClientState",
    value: function connectionClientState(request) {
      var data = _query.QueryConnectionClientStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
      return promise.then(function (data) {
        return _query.QueryConnectionClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionConsensusState",
    value: function connectionConsensusState(request) {
      var data = _query.QueryConnectionConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data));
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
    connection: function connection(request) {
      return queryService.connection(request);
    },
    connections: function connections(request) {
      return queryService.connections(request);
    },
    clientConnections: function clientConnections(request) {
      return queryService.clientConnections(request);
    },
    connectionClientState: function connectionClientState(request) {
      return queryService.connectionClientState(request);
    },
    connectionConsensusState: function connectionConsensusState(request) {
      return queryService.connectionConsensusState(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;