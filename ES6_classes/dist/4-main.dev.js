"use strict";

var _pricing = _interopRequireDefault(require("./4-pricing.js"));

var _currency = _interopRequireDefault(require("./3-currency.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var p = new _pricing["default"](100, new _currency["default"]("EUR", "Euro"));
console.log(p);
console.log(p.displayFullPrice());