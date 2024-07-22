"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _currency = _interopRequireDefault(require("./3-currency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pricing =
/*#__PURE__*/
function () {
  function Pricing(amount, currency) {
    _classCallCheck(this, Pricing);

    this.amount = amount;
    this.currency = currency;
  }

  _createClass(Pricing, [{
    key: "displayFullPrice",
    value: function displayFullPrice() {
      return "".concat(this._amount, " ").concat(this._currency.name, " (").concat(this._currency.code, ")");
    }
  }, {
    key: "amount",
    get: function get() {
      return this._amount;
    },
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Amount must be a number');
      }

      this._amount = value;
    }
  }, {
    key: "currency",
    get: function get() {
      return this._currency;
    },
    set: function set(value) {
      if (!(value instanceof _currency["default"])) {
        throw new TypeError('Currency must be an instance of Currency');
      }

      this._currency = value;
    }
  }], [{
    key: "convertPrice",
    value: function convertPrice(amount, conversionRate) {
      if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
        throw new TypeError('Both amount and conversion rate must be numbers');
      }

      return amount * conversionRate;
    }
  }]);

  return Pricing;
}();

exports["default"] = Pricing;