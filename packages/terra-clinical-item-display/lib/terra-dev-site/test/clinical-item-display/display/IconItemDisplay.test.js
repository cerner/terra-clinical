'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconSuccess = require('terra-icon/lib/icon/IconSuccess');

var _IconSuccess2 = _interopRequireDefault(_IconSuccess);

var _ItemDisplay = require('../../../../ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_ItemDisplay2.default, { text: 'Test Text', icon: _react2.default.createElement(_IconSuccess2.default, null), id: 'ItemDisplay' });
};