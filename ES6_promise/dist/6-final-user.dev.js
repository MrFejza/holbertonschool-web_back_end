"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handleProfileSignup;

var _userPromise = _interopRequireDefault(require("./4-user-promise"));

var _photoReject = _interopRequireDefault(require("./5-photo-reject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*eslint-disable*/
function handleProfileSignup(firstName, lastName, fileName) {
  var userPromise = (0, _userPromise["default"])(firstName, lastName).then(function (value) {
    return {
      status: "fulfilled",
      value: value
    };
  })["catch"](function (error) {
    return {
      status: "rejected",
      value: error.toString()
    };
  });
  var photoPromise = (0, _photoReject["default"])(fileName).then(function (value) {
    return {
      status: "fulfilled",
      value: value
    };
  })["catch"](function (error) {
    return {
      status: "rejected",
      value: error.toString()
    };
  });
  return Promise.all([userPromise, photoPromise]);
}