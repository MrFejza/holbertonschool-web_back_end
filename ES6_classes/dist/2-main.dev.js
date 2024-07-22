"use strict";

var _hbtn_course = _interopRequireDefault(require("./2-hbtn_course"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var c1 = new _hbtn_course["default"]('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  var c2 = new _hbtn_course["default"]('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}