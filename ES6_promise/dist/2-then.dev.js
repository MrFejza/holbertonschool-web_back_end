"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleResponseFromAPI;

function handleResponseFromAPI(promise) {
  return promise.then(function () {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success'
    };
  })["catch"](function () {
    return new Error();
  })["finally"](function () {
    console.log('Got a response from the API');
  });
}