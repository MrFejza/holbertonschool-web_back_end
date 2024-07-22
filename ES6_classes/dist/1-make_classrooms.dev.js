"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classroom = _interopRequireDefault(require("./0-classroom.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function initializeRooms() {
  var room1 = 19;
  var room2 = 20;
  var room3 = 34;
  return [room1, room2, room3];
}

var _default = initializeRooms;
exports["default"] = _default;