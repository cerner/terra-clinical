'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconCheckmark = require('terra-icon/lib/icon/IconCheckmark');

var _IconCheckmark2 = _interopRequireDefault(_IconCheckmark);

var _ItemDisplay = require('../../../../ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var views = function views() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ItemDisplay2.default, { text: 'test text', id: 'test-display-text', isDisabled: true }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'Test Text', icon: _react2.default.createElement(_IconCheckmark2.default, null), id: 'test-display-icon', isDisabled: true })
  );
};

exports.default = views;