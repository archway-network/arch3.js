"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _telescope = _interopRequireDefault(require("@osmonauts/telescope"));
var _path = require("path");
var _rimraf = _interopRequireDefault(require("rimraf"));
var rimraf = _rimraf["default"].sync;
var protoDirs = [(0, _path.join)(__dirname, '/../../../proto')];
var outPath = (0, _path.join)(__dirname, '../src/codegen');
rimraf(outPath);
(0, _telescope["default"])({
  protoDirs: protoDirs,
  outPath: outPath,
  // all options are totally optional ;)
  options: {
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
        duration: 'duration'
      },
      methods: {
        toJSON: false,
        fromJSON: false
      }
    },
    aminoEncoding: {
      enabled: false
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})["catch"](function (e) {
  process.exit(1);
});