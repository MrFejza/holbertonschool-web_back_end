"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = guardrail;

function guardrail(mathFunction) {
  var queue = [];

  try {
    var result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push("Error: ".concat(error.message));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}