'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemDisplay = require('../../../../ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var views = function views() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_ItemDisplay2.default, { text: 'test text', textStyle: 'secondary', id: 'test-display-secondary' }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'test text', textStyle: 'attention', id: 'test-display-attention' }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'test text', textStyle: 'strikeThrough', id: 'test-display-strike-through' }),
    _react2.default.createElement(_ItemDisplay2.default, { text: 'test text', textStyle: 'strong', id: 'test-display-strong' })
  );
};

exports.default = views;