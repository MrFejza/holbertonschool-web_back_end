"use strict";

var _currency = _interopRequireDefault(require("./3-currency.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dollar = new _currency["default"]('$', 'Dollars');
console.log(dollar.displayFullCurrency());