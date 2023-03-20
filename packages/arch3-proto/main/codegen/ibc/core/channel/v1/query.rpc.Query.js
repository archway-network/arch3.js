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
    this.channel = this.channel.bind(this);
    this.channels = this.channels.bind(this);
    this.connectionChannels = this.connectionChannels.bind(this);
    this.channelClientState = this.channelClientState.bind(this);
    this.channelConsensusState = this.channelConsensusState.bind(this);
    this.packetCommitment = this.packetCommitment.bind(this);
    this.packetCommitments = this.packetCommitments.bind(this);
    this.packetReceipt = this.packetReceipt.bind(this);
    this.packetAcknowledgement = this.packetAcknowledgement.bind(this);
    this.packetAcknowledgements = this.packetAcknowledgements.bind(this);
    this.unreceivedPackets = this.unreceivedPackets.bind(this);
    this.unreceivedAcks = this.unreceivedAcks.bind(this);
    this.nextSequenceReceive = this.nextSequenceReceive.bind(this);
  }
  (0, _createClass2["default"])(QueryClientImpl, [{
    key: "channel",
    value: function channel(request) {
      var data = _query.QueryChannelRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
      return promise.then(function (data) {
        return _query.QueryChannelResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "channels",
    value: function channels() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        pagination: undefined
      };
      var data = _query.QueryChannelsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
      return promise.then(function (data) {
        return _query.QueryChannelsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "connectionChannels",
    value: function connectionChannels(request) {
      var data = _query.QueryConnectionChannelsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
      return promise.then(function (data) {
        return _query.QueryConnectionChannelsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "channelClientState",
    value: function channelClientState(request) {
      var data = _query.QueryChannelClientStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
      return promise.then(function (data) {
        return _query.QueryChannelClientStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "channelConsensusState",
    value: function channelConsensusState(request) {
      var data = _query.QueryChannelConsensusStateRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
      return promise.then(function (data) {
        return _query.QueryChannelConsensusStateResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetCommitment",
    value: function packetCommitment(request) {
      var data = _query.QueryPacketCommitmentRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
      return promise.then(function (data) {
        return _query.QueryPacketCommitmentResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetCommitments",
    value: function packetCommitments(request) {
      var data = _query.QueryPacketCommitmentsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
      return promise.then(function (data) {
        return _query.QueryPacketCommitmentsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetReceipt",
    value: function packetReceipt(request) {
      var data = _query.QueryPacketReceiptRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
      return promise.then(function (data) {
        return _query.QueryPacketReceiptResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetAcknowledgement",
    value: function packetAcknowledgement(request) {
      var data = _query.QueryPacketAcknowledgementRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
      return promise.then(function (data) {
        return _query.QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "packetAcknowledgements",
    value: function packetAcknowledgements(request) {
      var data = _query.QueryPacketAcknowledgementsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
      return promise.then(function (data) {
        return _query.QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unreceivedPackets",
    value: function unreceivedPackets(request) {
      var data = _query.QueryUnreceivedPacketsRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
      return promise.then(function (data) {
        return _query.QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "unreceivedAcks",
    value: function unreceivedAcks(request) {
      var data = _query.QueryUnreceivedAcksRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
      return promise.then(function (data) {
        return _query.QueryUnreceivedAcksResponse.decode(new _m0.Reader(data));
      });
    }
  }, {
    key: "nextSequenceReceive",
    value: function nextSequenceReceive(request) {
      var data = _query.QueryNextSequenceReceiveRequest.encode(request).finish();
      var promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
      return promise.then(function (data) {
        return _query.QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data));
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
    channel: function channel(request) {
      return queryService.channel(request);
    },
    channels: function channels(request) {
      return queryService.channels(request);
    },
    connectionChannels: function connectionChannels(request) {
      return queryService.connectionChannels(request);
    },
    channelClientState: function channelClientState(request) {
      return queryService.channelClientState(request);
    },
    channelConsensusState: function channelConsensusState(request) {
      return queryService.channelConsensusState(request);
    },
    packetCommitment: function packetCommitment(request) {
      return queryService.packetCommitment(request);
    },
    packetCommitments: function packetCommitments(request) {
      return queryService.packetCommitments(request);
    },
    packetReceipt: function packetReceipt(request) {
      return queryService.packetReceipt(request);
    },
    packetAcknowledgement: function packetAcknowledgement(request) {
      return queryService.packetAcknowledgement(request);
    },
    packetAcknowledgements: function packetAcknowledgements(request) {
      return queryService.packetAcknowledgements(request);
    },
    unreceivedPackets: function unreceivedPackets(request) {
      return queryService.unreceivedPackets(request);
    },
    unreceivedAcks: function unreceivedAcks(request) {
      return queryService.unreceivedAcks(request);
    },
    nextSequenceReceive: function nextSequenceReceive(request) {
      return queryService.nextSequenceReceive(request);
    }
  };
};
exports.createRpcQueryExtension = createRpcQueryExtension;