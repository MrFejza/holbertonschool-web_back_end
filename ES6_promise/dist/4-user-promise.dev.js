"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = signUpUser;

function signUpUser(firstName, lastName) {
  var myPromise = new Promise(function (resolve) {
    resolve({
      firstName: "".concat(firstName),
      lastName: "".concat(lastName)
    });
  });
  return myPromise;
}