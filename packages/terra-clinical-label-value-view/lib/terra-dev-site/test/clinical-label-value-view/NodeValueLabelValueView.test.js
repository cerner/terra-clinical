'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabelValueView = require('../../../LabelValueView');

var _LabelValueView2 = _interopRequireDefault(_LabelValueView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _LabelValueView2.default,
    { label: 'Label' },
    _react2.default.createElement(
      'div',
      { id: 'child' },
      _react2.default.createElement(
        'h2',
        null,
        'Sample Title'
      ),
      'Sample Text to Follow'
    )
  );
};