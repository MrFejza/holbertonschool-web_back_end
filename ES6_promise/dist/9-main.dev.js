"use strict";

var _try = _interopRequireDefault(require("./9-try"));

var _try2 = _interopRequireDefault(require("./8-try"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _try["default"])(function () {
  return (0, _try2["default"])(10, 2);
}));
console.log((0, _try["default"])(function () {
  return (0, _try2["default"])(10, 0);
}));