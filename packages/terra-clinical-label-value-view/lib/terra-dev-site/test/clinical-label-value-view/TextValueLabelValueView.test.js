'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabelValueView = require('../../../LabelValueView');

var _LabelValueView2 = _interopRequireDefault(_LabelValueView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var examples = function examples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Default Example:'
    ),
    _react2.default.createElement(_LabelValueView2.default, { id: 'LabelValueView', label: 'Label', textValue: 'Sample Text' }),
    _react2.default.createElement(
      'h3',
      null,
      'Applied max-width of 200px to show word wrapping:'
    ),
    _react2.default.createElement(
      'div',
      { style: { maxWidth: '200px' } },
      _react2.default.createElement(_LabelValueView2.default, { id: 'LongLabelValueView', label: 'supercalifragilisticexpialidocious', textValue: 'supercalifragilisticexpialidocious' })
    )
  );
};

exports.default = examples;