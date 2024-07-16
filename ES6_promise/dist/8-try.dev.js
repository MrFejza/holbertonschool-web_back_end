"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = divideFunction;

function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}