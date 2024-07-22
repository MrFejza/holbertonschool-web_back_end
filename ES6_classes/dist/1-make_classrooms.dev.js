"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classroom = _interopRequireDefault(require("./0-classroom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initializeRooms() {
  return [new _classroom["default"](19), new _classroom["default"](20), new _classroom["default"](34)];
}

var _default = initializeRooms;
exports["default"] = _default;