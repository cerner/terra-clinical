'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconGlasses = require('terra-icon/lib/icon/IconGlasses');

var _IconGlasses2 = _interopRequireDefault(_IconGlasses);

var _ItemDisplay = require('terra-clinical-item-display/lib/ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component() {
  return _react2.default.createElement(_ItemDisplay2.default, { text: 'Display', icon: _react2.default.createElement(_IconGlasses2.default, null) });
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = component;