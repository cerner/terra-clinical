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
    _react2.default.createElement(_ItemDisplay2.default, { text: 'Attention', textStyle: 'attention' }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'Strong', textStyle: 'strong' }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'Secondary', textStyle: 'secondary' }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'Strike-through', textStyle: 'strikeThrough' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = component;