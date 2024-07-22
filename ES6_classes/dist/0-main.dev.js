"use strict";

var _classroom = _interopRequireDefault(require("./0-classroom.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var room = new _classroom["default"](10);
console.log(room._maxStudentsSize);