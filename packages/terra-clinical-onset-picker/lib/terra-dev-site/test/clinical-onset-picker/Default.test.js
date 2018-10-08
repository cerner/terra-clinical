'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _OnsetPicker = require('../../../OnsetPicker');

var _OnsetPicker2 = _interopRequireDefault(_OnsetPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  // Lock date to September 20, 2016
  _moment2.default.now = function () {
    return new Date(2016, 8, 20);
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Onset picker with minimum required fields, birthdate of 2011-09-20'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Current date locked to September 20, 2016'
    ),
    _react2.default.createElement(_OnsetPicker2.default, {
      birthdate: (0, _moment2.default)('2011-09-20').format(),
      granularitySelectName: 'test-granularity',
      precisionSelectName: 'test-precision',
      onsetDateInputName: 'test-onsetDate'
    })
  );
};