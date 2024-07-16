"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadPhoto = uploadPhoto;
exports.createUser = createUser;

function uploadPhoto() {
  return new Promise(function (resolve, reject) {
    resolve({
      body: 'photo-profile-1'
    });
  });
}

function createUser() {
  return new Promise(function (resolve, reject) {
    resolve({
      firstName: 'Guillaume',
      lastName: 'Salva'
    });
  });
}