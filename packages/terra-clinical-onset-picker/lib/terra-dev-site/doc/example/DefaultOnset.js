'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _OnsetPicker = require('terra-clinical-onset-picker/lib/OnsetPicker');

var _OnsetPicker2 = _interopRequireDefault(_OnsetPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var picker = function picker() {
  return _react2.default.createElement(_OnsetPicker2.default, {
    birthdate: (0, _moment2.default)().subtract(6, 'years').format(),
    granularitySelectName: 'doogs-granularity',
    precisionSelectName: 'doogs-precision',
    onsetDateInputName: 'doogs-onsetDate'
  });
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
/* eslint-disable import/no-extraneous-dependencies */
exports.default = picker;