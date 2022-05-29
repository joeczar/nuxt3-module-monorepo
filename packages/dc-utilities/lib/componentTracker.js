"use strict";

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable */
// I don't know if this file is still in use, but it hase some eslint issues.
// If it is in use:
// @TODO -> remove disable and clean file
var _require = require("path"),
    resolve = _require.resolve;

var fs = require("fs");

var _require$promises = require("fs").promises,
    readdir = _require$promises.readdir,
    stat = _require$promises.stat; // logSizes(__dirname);


var arg = "styleguide"; // const arg = process.argv[2];

var path = resolve(__dirname, "../");
var srcPath = "".concat(path, "/").concat(arg, "/src");
console.log(srcPath); // const moduleArr = getDirNames(`${path}`);

var vueFiles = getComponents(srcPath);
var filesJSON = JSON.stringify(vueFiles, null, 4);
fs.writeFileSync("testLog/files.json", filesJSON);

function getDirNames(path) {
  var files = fs.readdirSync(path, {
    withFileTypes: true
  }); // const obj = {};

  var modules = [];

  var _iterator = _createForOfIteratorHelper(files),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var file = _step.value;
      var name = files[file].name;
      var pathName = "".concat(path, "/").concat(name);
      var stats = fs.statSync(pathName);

      if (!stats.isFile()) {
        modules.push(name);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return modules;
}

function getComponents(path) {
  var files = fs.readdirSync(path, {
    withFileTypes: true
  });
  var obj = {};

  var _iterator2 = _createForOfIteratorHelper(files),
      _step2;

  try {
    var _loop = function _loop() {
      var file = _step2.value;
      var name = file.name;
      var pathName = "".concat(path, "/").concat(name);
      var stats = fs.statSync(pathName);
      var nameArr = name.split(".");
      var ext = nameArr[nameArr.length - 1]; // console.log({ name }, stats.isFile() && ext === "vue");

      if (stats.isFile() && ext === "vue") {
        try {
          var lineReader = require("readline").createInterface({
            input: require("fs").createReadStream(pathName)
          });

          obj[name] = {
            "lang=ts": false,
            "defineComponent(": false,
            h1: false
          };
          lineReader.on("line", function (line) {
            for (var key in obj[name]) {
              console.log({
                key: key,
                val: line.includes(key),
                line: line
              });
            }
          });
        } catch (err) {
          console.log({
            err: err
          });
        }
      } else if (stats.isDirectory() && name !== "__snapshots__") {
        obj[name] = getComponents(pathName);
      }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return obj;
} // get .vue files