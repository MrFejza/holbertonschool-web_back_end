"use strict";

var _then = _interopRequireDefault(require("./2-then"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var promise = Promise.resolve();
(0, _then["default"])(promise);