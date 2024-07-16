"use strict";

var _promise = _interopRequireDefault(require("./0-promise.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var response = (0, _promise["default"])();
console.log(response instanceof Promise);