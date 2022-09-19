/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/.src/js/front/blocks/estimatives-area.js":
/*!*********************************************************!*\
  !*** ./assets/.src/js/front/blocks/estimatives-area.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard_plugins_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/plugins/i18n */ "./assets/.src/js/front/dashboard/plugins/i18n.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/api */ "./assets/.src/js/front/utils/api.js");
/* harmony import */ var _utils_filters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/filters */ "./assets/.src/js/front/utils/filters.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}





var _window$luxon = window.luxon,
    DateTime = _window$luxon.DateTime,
    Interval = _window$luxon.Interval;
document.defaultView.document.addEventListener('DOMContentLoaded', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var updated, lastDate, now, startOfYear, thisYear, daysThisYear, lastWeek, lastFriday;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_utils_api__WEBPACK_IMPORTED_MODULE_3__["fetchLastDate"])();

        case 2:
          updated = _context.sent;
          lastDate = DateTime.fromISO(updated.deter_last_date, {
            zone: 'utc'
          });
          now = DateTime.now();
          startOfYear = lastDate.startOf('year');
          _context.next = 8;
          return Object(_utils_api__WEBPACK_IMPORTED_MODULE_3__["fetchDeterData"])({
            data1: startOfYear.toISODate(),
            data2: updated.deter_last_date
          });

        case 8:
          thisYear = _context.sent;
          daysThisYear = Interval.fromDateTimes(startOfYear, lastDate);
          _context.next = 12;
          return Object(_utils_api__WEBPACK_IMPORTED_MODULE_3__["fetchDeterData"])({
            data1: lastDate.minus({
              days: 6
            }).toISODate(),
            data2: updated.deter_last_date
          });

        case 12:
          lastWeek = _context.sent;
          lastFriday = DateTime.fromObject({
            weekday: 5,
            hour: 3
          });
          document.querySelectorAll('[data-deter]').forEach(function (el) {
            var deterLabel = el.dataset.deter;

            if (deterLabel === 'hectaresLastWeek') {
              var hectaresLastWeek = Number(lastWeek[0].areamunkm) * 100;
              el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(hectaresLastWeek);
            } else if (deterLabel === 'hectaresPerDay') {
              var hectaresPerDay = Number(thisYear[0].areamunkm) * 100 / daysThisYear.count('days');
              el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(hectaresPerDay);
            } else if (deterLabel === 'sourcesLastWeek') {
              var sourcesLastWeek = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(Object(_dashboard_plugins_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Source: DETER/INPE • Latest Update: %s with alerts detected until %s.', 'plenamata'), Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["shortDate"])(updated.last_sync), Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["shortDate"])(updated.deter_last_date));
              el.textContent = sourcesLastWeek;
            } else if (deterLabel === 'hectaresThisYear') {
              var areaThisYear = Number(thisYear[0].areamunkm);
              var areaLastWeek = Number(lastWeek[0].areamunkm);
              var areaPerSecondLastWeek = areaLastWeek / 604800;

              if (now < lastFriday) {
                lastFriday = lastFriday.minus({
                  weeks: 1
                });
              }

              var startDate = lastFriday.year === now.year ? lastFriday : now.startOf('year');
              var elapsedTime = Interval.fromDateTimes(startDate, now);
              var areaCount = areaThisYear - areaLastWeek + elapsedTime.count('seconds') * areaPerSecondLastWeek;
              el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(areaCount * 100);
              setInterval(function () {
                areaCount += areaPerSecondLastWeek;
                el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(areaCount * 100);
              }, 1000);
            } else if (deterLabel === 'treesEstimative') {
              var treesThisYear = Number(thisYear[0].num_arvores),
                  treesLastWeek = Number(lastWeek[0].num_arvores),
                  treesPerSecondLastWeek = treesLastWeek / 604800;

              if (now < lastFriday) {
                lastFriday = lastFriday.minus({
                  weeks: 1
                });
              }

              var _startDate = lastFriday.year === now.year ? lastFriday : now.startOf('year');

              var _elapsedTime = Interval.fromDateTimes(_startDate, now);

              var treeCount = treesThisYear - treesLastWeek + _elapsedTime.count('seconds') * treesPerSecondLastWeek;
              el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(treeCount);
              setInterval(function () {
                treeCount += treesPerSecondLastWeek;
                el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(treeCount);
              }, 1000);
            } else if (deterLabel === 'treesPerDay') {
              var treesPerDay = Number(thisYear[0].num_arvores) / daysThisYear.count('days');
              el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(treesPerDay);
            }
          });
          document.querySelectorAll('[data-mask=true]').forEach(function (el) {
            var num = Number(el.textContent);

            if (num) {
              el.textContent = Object(_utils_filters__WEBPACK_IMPORTED_MODULE_4__["roundNumber"])(+num);
            }
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ }),

/***/ "./assets/.src/js/front/dashboard/plugins/i18n.js":
/*!********************************************************!*\
  !*** ./assets/.src/js/front/dashboard/plugins/i18n.js ***!
  \********************************************************/
/*! exports provided: __, _x, sprintf, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_x", function() { return _x; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sprintf", function() { return _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"]; });


var i18n = window.PlenamataDashboard.i18n;
var __ = function __(text, domain) {
  var _i18n$__$text, _i18n$__;

  return (_i18n$__$text = i18n === null || i18n === void 0 ? void 0 : (_i18n$__ = i18n.__) === null || _i18n$__ === void 0 ? void 0 : _i18n$__[text]) !== null && _i18n$__$text !== void 0 ? _i18n$__$text : text;
};
var _x = function _x(text, context, domain) {
  var _i18n$_x$context$text, _i18n$_x, _i18n$_x$context;

  return (_i18n$_x$context$text = i18n === null || i18n === void 0 ? void 0 : (_i18n$_x = i18n._x) === null || _i18n$_x === void 0 ? void 0 : (_i18n$_x$context = _i18n$_x[context]) === null || _i18n$_x$context === void 0 ? void 0 : _i18n$_x$context[text]) !== null && _i18n$_x$context$text !== void 0 ? _i18n$_x$context$text : text;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    Vue.prototype.__ = __;
    Vue.prototype._x = _x;
    Vue.prototype.sprintf = _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["sprintf"];
  }
});

/***/ }),

/***/ "./assets/.src/js/front/utils/api.js":
/*!*******************************************!*\
  !*** ./assets/.src/js/front/utils/api.js ***!
  \*******************************************/
/*! exports provided: fetchConservationUnits, fetchDeterData, fetchIndigenousLands, fetchLastDate, fetchMunicipalities, fetchNews, fetchUniqueNews, fetchProdesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConservationUnits", function() { return fetchConservationUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDeterData", function() { return fetchDeterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIndigenousLands", function() { return fetchIndigenousLands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchLastDate", function() { return fetchLastDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMunicipalities", function() { return fetchMunicipalities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNews", function() { return fetchNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUniqueNews", function() { return fetchUniqueNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProdesData", function() { return fetchProdesData; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["estado", "municipio", "ti", "uc"],
    _excluded2 = ["estado", "municipio", "ti", "uc"];


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var BASE_URL = 'https://plenamata.solved.eco.br/api/';
var cache = new Map();

function get(_x) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url) {
    var cacheable,
        saveHeaders,
        req,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cacheable = _args.length > 1 && _args[1] !== undefined ? _args[1] : true;
            saveHeaders = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;

            if (!(cacheable && cache.has(url))) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", Promise.resolve(cache.get(url)));

          case 4:
            _context.prev = 4;
            _context.next = 7;
            return window.fetch(url, {
              method: 'GET'
            });

          case 7:
            req = _context.sent;
            _context.next = 10;
            return req.json();

          case 10:
            data = _context.sent;

            if (cacheable) {
              cache.set(url, data);
            }

            if (saveHeaders) {
              window.lastGetRequestHeader = req.headers;
            }

            return _context.abrupt("return", data);

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);
            console.error(_context.t0);
            return _context.abrupt("return", Promise.resolve([]));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 16]]);
  }));
  return _get.apply(this, arguments);
}

function searchParams(object) {
  var params = new URLSearchParams();

  for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    params.set(key, value);
  }

  return params;
}

function fetchConservationUnits() {
  return _fetchConservationUnits.apply(this, arguments);
}

function _fetchConservationUnits() {
  _fetchConservationUnits = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", get("".concat(BASE_URL, "deter/lista/uc")));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchConservationUnits.apply(this, arguments);
}

function fetchDeterData(_x2) {
  return _fetchDeterData.apply(this, arguments);
}

function _fetchDeterData() {
  _fetchDeterData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref) {
    var estado, municipio, ti, uc, args, params;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            estado = _ref.estado, municipio = _ref.municipio, ti = _ref.ti, uc = _ref.uc, args = _objectWithoutProperties(_ref, _excluded);
            params = searchParams(args);

            if (!municipio) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", get("".concat(BASE_URL, "deter/municipios?geocode=").concat(municipio, "&").concat(params)));

          case 6:
            if (!estado) {
              _context3.next = 10;
              break;
            }

            return _context3.abrupt("return", get("".concat(BASE_URL, "deter/estados?estado=").concat(estado, "&").concat(params)));

          case 10:
            if (!ti) {
              _context3.next = 14;
              break;
            }

            return _context3.abrupt("return", get("".concat(BASE_URL, "deter/ti?cod=").concat(ti, "&").concat(params)));

          case 14:
            if (!uc) {
              _context3.next = 18;
              break;
            }

            return _context3.abrupt("return", get("".concat(BASE_URL, "deter/uc?cod=").concat(uc, "&").concat(params)));

          case 18:
            return _context3.abrupt("return", get("".concat(BASE_URL, "deter/basica?").concat(params)));

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchDeterData.apply(this, arguments);
}

function fetchIndigenousLands() {
  return _fetchIndigenousLands.apply(this, arguments);
}

function _fetchIndigenousLands() {
  _fetchIndigenousLands = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", get("".concat(BASE_URL, "deter/lista/ti")));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fetchIndigenousLands.apply(this, arguments);
}

function fetchLastDate() {
  return _fetchLastDate.apply(this, arguments);
}

function _fetchLastDate() {
  _fetchLastDate = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", get("".concat(BASE_URL, "deter/last_date")));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fetchLastDate.apply(this, arguments);
}

function fetchMunicipalities(_x3) {
  return _fetchMunicipalities.apply(this, arguments);
}

function _fetchMunicipalities() {
  _fetchMunicipalities = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(uf) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", get("".concat(BASE_URL, "deter/lista/municipio?uf=").concat(uf)));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _fetchMunicipalities.apply(this, arguments);
}

function fetchNews() {
  return _fetchNews.apply(this, arguments);
}

function _fetchNews() {
  _fetchNews = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
    var state,
        pageNum,
        _args7 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            state = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : '';
            pageNum = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 1;
            console.info("state");
            console.log(state);
            return _context7.abrupt("return", get("".concat(window.PlenamataDashboard.restUrl, "wp/v2/posts/?_embed&state=").concat(state, "&page=").concat(pageNum), false, true));

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _fetchNews.apply(this, arguments);
}

function fetchUniqueNews(_x4) {
  return _fetchUniqueNews.apply(this, arguments);
}

function _fetchUniqueNews() {
  _fetchUniqueNews = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(postId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", get("".concat(window.PlenamataDashboard.restUrl, "wp/v2/posts/").concat(postId, "/?_embed"), false, false));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _fetchUniqueNews.apply(this, arguments);
}

function fetchProdesData(_x5) {
  return _fetchProdesData.apply(this, arguments);
}

function _fetchProdesData() {
  _fetchProdesData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(_ref2) {
    var estado, municipio, ti, uc, args, params;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            estado = _ref2.estado, municipio = _ref2.municipio, ti = _ref2.ti, uc = _ref2.uc, args = _objectWithoutProperties(_ref2, _excluded2);
            params = searchParams(args);

            if (!municipio) {
              _context9.next = 6;
              break;
            }

            return _context9.abrupt("return", get("".concat(BASE_URL, "prodes/municipios?geocode=").concat(municipio, "&").concat(params)));

          case 6:
            if (!estado) {
              _context9.next = 10;
              break;
            }

            return _context9.abrupt("return", get("".concat(BASE_URL, "prodes/taxaanoestado?uf=").concat(estado)));

          case 10:
            if (!ti) {
              _context9.next = 14;
              break;
            }

            return _context9.abrupt("return", get("".concat(BASE_URL, "prodes/ti?cod=").concat(ti, "&").concat(params)));

          case 14:
            if (!uc) {
              _context9.next = 18;
              break;
            }

            return _context9.abrupt("return", get("".concat(BASE_URL, "prodes/uc?cod=").concat(uc, "&").concat(params)));

          case 18:
            return _context9.abrupt("return", get("".concat(BASE_URL, "prodes/taxaano")));

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _fetchProdesData.apply(this, arguments);
}

/***/ }),

/***/ "./assets/.src/js/front/utils/filters.js":
/*!***********************************************!*\
  !*** ./assets/.src/js/front/utils/filters.js ***!
  \***********************************************/
/*! exports provided: firstValue, longDate, humanNumber, roundNumber, shortDate, stateCodeByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstValue", function() { return firstValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longDate", function() { return longDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanNumber", function() { return humanNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundNumber", function() { return roundNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortDate", function() { return shortDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateCodeByName", function() { return stateCodeByName; });
var locale = window.PlenamataDashboard.language || 'en';
var longDateLocale = new Intl.DateTimeFormat(locale, {
  dateStyle: 'long',
  timeZone: 'UTC'
});
var numberLocale = new Intl.NumberFormat(locale, {
  maximumFractionDigits: 2
});
var shortDateLocale = new Intl.DateTimeFormat(locale, {
  dateStyle: 'short',
  timeZone: 'UTC'
});
function firstValue(value) {
  return Array.isArray(value) ? value[0] : value;
}
function longDate(dateStr) {
  var date = new Date(dateStr);
  return longDateLocale.format(date);
}
function humanNumber(number) {
  return numberLocale.format(number);
}
function roundNumber(number) {
  if (Math.abs(number) < 1) {
    var roundedNumber = numberLocale.format(number);
    return roundedNumber === '-0' ? '0' : roundedNumber;
  }

  return numberLocale.format(Math.round(number));
}
function shortDate(dateStr) {
  var date = new Date(dateStr);
  return shortDateLocale.format(date);
}
function stateCodeByName(state) {
  var states = {
    'Acre': 'AC',
    'Alagoas': 'AL',
    'Amazonas': 'AM',
    'Amapá': 'AP',
    'Bahia': 'BA',
    'Ceará': 'CE',
    'Espírito Santo': 'ES',
    'Goiás': 'GO',
    'Maranhão': 'MA',
    'Mato Grosso': 'MT',
    'Mato Grosso do Sul': 'MS',
    'Minas Gerais': 'MG',
    'Pará': 'PA',
    'Paraíba': 'PB',
    'Paraná': 'PR',
    'Pernambuco': 'PE',
    'Piauí': 'PI',
    'Rio de Janeiro': 'RJ',
    'Rio Grande do Norte': 'RN',
    'Rondônia': 'RO',
    'Roraima': 'RR',
    'Santa Catarina': 'SC',
    'São Paulo': 'SP',
    'Sergipe': 'SE',
    'Tocantins': 'TO',
    'Distrito Federal': 'DF'
  };

  if (typeof states[state] == 'string') {
    return states[state];
  } else {
    return false;
  }
}

/***/ }),

/***/ 5:
/*!***************************************************************!*\
  !*** multi ./assets/.src/js/front/blocks/estimatives-area.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/plenamata/code/wp-content/plugins/plenamata-plugin/assets/.src/js/front/blocks/estimatives-area.js */"./assets/.src/js/front/blocks/estimatives-area.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=estimatives-area.js.map