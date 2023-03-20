"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fs = require("fs");
var _readline = require("readline");
var _path = require("path");
var _promises = require("fs/promises");
function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
main();
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var allProtoFiles, imports, i, stream, lines, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, line, readLine, cleanedLine, sortedImports, output, l;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return getFilesRecursive('../../../proto');
        case 2:
          allProtoFiles = _context.sent;
          imports = [];
          i = 0;
        case 5:
          if (!(i < allProtoFiles.length)) {
            _context.next = 41;
            break;
          }
          stream = (0, _fs.createReadStream)(allProtoFiles[i].filePath);
          _context.next = 9;
          return (0, _readline.createInterface)({
            input: stream,
            crlfDelay: Infinity
          });
        case 9:
          lines = _context.sent;
          _iteratorAbruptCompletion = false;
          _didIteratorError = false;
          _context.prev = 12;
          _iterator = _asyncIterator(lines);
        case 14:
          _context.next = 16;
          return _iterator.next();
        case 16:
          if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
            _context.next = 22;
            break;
          }
          line = _step.value;
          if (line.startsWith('import ')) {
            readLine = line.replace('import ', '');
            cleanedLine = clean(readLine);
            if (!imports.includes(cleanedLine)) {
              imports.push(cleanedLine);
            }
          }
        case 19:
          _iteratorAbruptCompletion = false;
          _context.next = 14;
          break;
        case 22:
          _context.next = 28;
          break;
        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](12);
          _didIteratorError = true;
          _iteratorError = _context.t0;
        case 28:
          _context.prev = 28;
          _context.prev = 29;
          if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
            _context.next = 33;
            break;
          }
          _context.next = 33;
          return _iterator["return"]();
        case 33:
          _context.prev = 33;
          if (!_didIteratorError) {
            _context.next = 36;
            break;
          }
          throw _iteratorError;
        case 36:
          return _context.finish(33);
        case 37:
          return _context.finish(28);
        case 38:
          i++;
          _context.next = 5;
          break;
        case 41:
          sortedImports = imports.sort(function (a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
          });
          output = '';
          for (l = 0; l < sortedImports.length; l++) {
            output += '- ' + sortedImports[l] + '\n';
          }
          (0, _fs.writeFileSync)('protoImports.txt', output);
        case 45:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[12, 24, 28, 38], [29,, 33, 37]]);
  }));
  return _main.apply(this, arguments);
}
function clean(item) {
  return item.replaceAll('"', '').replaceAll(';', '');
}
function getFilesRecursive(_x) {
  return _getFilesRecursive.apply(this, arguments);
}
function _getFilesRecursive() {
  _getFilesRecursive = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(dirPath) {
    var fsObjects, filesOnly, i, fsObj, filePathWithFs;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _promises.readdir)(dirPath, {
            withFileTypes: true
          });
        case 2:
          fsObjects = _context2.sent;
          filesOnly = [];
          i = 0;
        case 5:
          if (!(i < fsObjects.length)) {
            _context2.next = 23;
            break;
          }
          fsObj = fsObjects[i];
          filePathWithFs = (0, _path.resolve)(dirPath, fsObj.name);
          if (!fsObj.isDirectory()) {
            _context2.next = 19;
            break;
          }
          _context2.t0 = [];
          _context2.t1 = (0, _toConsumableArray2["default"])(filesOnly);
          _context2.t2 = _toConsumableArray2["default"];
          _context2.next = 14;
          return getFilesRecursive(filePathWithFs);
        case 14:
          _context2.t3 = _context2.sent;
          _context2.t4 = (0, _context2.t2)(_context2.t3);
          filesOnly = _context2.t0.concat.call(_context2.t0, _context2.t1, _context2.t4);
          _context2.next = 20;
          break;
        case 19:
          if (fsObj.name.includes('.proto')) {
            filesOnly.push({
              filePath: filePathWithFs,
              fileName: fsObj.name
            });
          }
        case 20:
          i++;
          _context2.next = 5;
          break;
        case 23:
          return _context2.abrupt("return", filesOnly);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getFilesRecursive.apply(this, arguments);
}