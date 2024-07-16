"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = loadBalancer;

function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}