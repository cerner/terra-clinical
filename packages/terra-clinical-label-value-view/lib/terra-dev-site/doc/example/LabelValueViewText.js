'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabelValueView = require('terra-clinical-label-value-view/lib/LabelValueView');

var _LabelValueView2 = _interopRequireDefault(_LabelValueView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelValueViewText = function LabelValueViewText() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_LabelValueView2.default, { label: 'Label', textValue: 'Sample Text as Value' })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = LabelValueViewText;