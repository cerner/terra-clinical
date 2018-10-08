'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemDisplay = require('terra-clinical-item-display/lib/ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var component = function component() {
  return _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(_ItemDisplay2.default.Comment, { text: 'Comment' }),
    _react2.default.createElement(_ItemDisplay2.default.Comment, { text: 'Disabled Comment', isDisabled: true })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = component;