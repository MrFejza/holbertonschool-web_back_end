"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleProfileSignup;

var _utils = require("./utils");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function handleProfileSignup() {
  return Promise.all([(0, _utils.uploadPhoto)(), (0, _utils.createUser)()]).then(function (results) {
    var _results = _slicedToArray(results, 2),
        photo = _results[0],
        user = _results[1];

    console.log("".concat(photo.body, " ").concat(user.firstName, " ").concat(user.lastName));
  })["catch"](function () {
    console.log('Signup system offline');
  });
}