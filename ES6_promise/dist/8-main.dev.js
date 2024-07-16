"use strict";

var _try = _interopRequireDefault(require("./8-try"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _try["default"])(10, 2));

try {
  console.log((0, _try["default"])(10, 0));
} catch (error) {
  console.error(error.message);
}