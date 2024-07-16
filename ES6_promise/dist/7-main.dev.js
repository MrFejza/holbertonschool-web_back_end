"use strict";

var _load_balancer = _interopRequireDefault(require("./7-load_balancer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ukSuccess = 'Downloading from UK is faster';
var frSuccess = 'Downloading from FR is faster';
var promiseUK = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, ukSuccess);
});
var promiseUKSlow = new Promise(function (resolve, reject) {
  setTimeout(resolve, 400, ukSuccess);
});
var promiseFR = new Promise(function (resolve, reject) {
  setTimeout(resolve, 200, frSuccess);
});

var test = function test() {
  return regeneratorRuntime.async(function test$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = console;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _load_balancer["default"])(promiseUK, promiseFR));

        case 3:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

          _context.t2 = console;
          _context.next = 8;
          return regeneratorRuntime.awrap((0, _load_balancer["default"])(promiseUKSlow, promiseFR));

        case 8:
          _context.t3 = _context.sent;

          _context.t2.log.call(_context.t2, _context.t3);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

test();