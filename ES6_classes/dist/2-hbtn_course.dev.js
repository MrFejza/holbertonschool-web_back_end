"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HolbertonCourse =
/*#__PURE__*/
function () {
  function HolbertonCourse(name, length, students) {
    _classCallCheck(this, HolbertonCourse);

    if (typeof name !== "string") {
      throw new TypeError("Name must be string");
    }

    if (typeof length !== "number") {
      throw new TypeError("Length must be number");
    }

    if (!Array.isArray(students) || !students.every(function (student) {
      return typeof student === 'string';
    })) {
      throw new TypeError('Students must be an array of Strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  _createClass(HolbertonCourse, [{
    key: "name",
    get: function get() {
      return this.name;
    },
    set: function set(newName) {
      if (typeof newName !== 'string') {
        throw new TypeError('Name must be a string');
      }

      this._name = newName;
    }
  }, {
    key: "length",
    get: function get() {
      return this._length;
    },
    set: function set(newLength) {
      if (typeof newLength !== 'number') {
        throw new TypeError('Length must be a number');
      }

      this._length = newLength;
    }
  }, {
    key: "students",
    get: function get() {
      return this._students;
    },
    set: function set(newStudent) {
      if (!Array.isArray(newStudent) && !newStudent.every(function (student) {
        return typeof student === 'string';
      })) {
        throw new TypeError('Students must be an array of Strings');
      }

      this._students = newStudent;
    }
  }]);

  return HolbertonCourse;
}();

exports["default"] = HolbertonCourse;