var global = this;function trigger() {
}(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChangeColor = exports.ChangeColor = function () {
  function ChangeColor(color) {
    _classCallCheck(this, ChangeColor);

    var sheetId = '1-5b2cQEjpBpk4zqT6Lvn2Ze51RpkmcGnfwnKF6dPm8E';
    var sheetName = 'シート1';
    this.parent_sheet = SpreadsheetApp.openById(sheetId);
    this.source_sheet = this.parent_sheet.getSheetByName(sheetName);
    this.color = color;
  }

  _createClass(ChangeColor, [{
    key: 'changeBackgroundColor',
    value: function changeBackgroundColor() {
      var range = this.source_sheet.getRange('A1:A3');
      range.setBackgroundColor(this.color);
    }
  }]);

  return ChangeColor;
}();

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _ChangeColor = require('./ChangeColor');

global.trigger = function () {
  var color_array = ['red', 'blue', 'green'];
  var random_number = [Math.floor(Math.random() * color_array.length)];
  var trigger = new _ChangeColor.ChangeColor(color_array[random_number]);
  trigger.changeBackgroundColor();
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ChangeColor":1}]},{},[2]);
