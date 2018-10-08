'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraClinicalItemDisplay = require('terra-clinical-item-display');

var _terraClinicalItemDisplay2 = _interopRequireDefault(_terraClinicalItemDisplay);

var _IconCritical = require('terra-icon/lib/icon/IconCritical');

var _IconCritical2 = _interopRequireDefault(_IconCritical);

var _LabelValueView = require('terra-clinical-label-value-view/lib/LabelValueView');

var _LabelValueView2 = _interopRequireDefault(_LabelValueView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelValueViewNode = function LabelValueViewNode() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _LabelValueView2.default,
      { label: 'Label' },
      _react2.default.createElement(_terraClinicalItemDisplay2.default, { text: 'Clinical-Item-Display as Value', textStyle: 'attention', icon: _react2.default.createElement(_IconCritical2.default, null) })
    )
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = LabelValueViewNode;