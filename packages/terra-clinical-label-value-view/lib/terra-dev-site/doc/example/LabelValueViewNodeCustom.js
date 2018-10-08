'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabelValueView = require('terra-clinical-label-value-view/lib/LabelValueView');

var _LabelValueView2 = _interopRequireDefault(_LabelValueView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var divStyle = {
  border: '1px solid #d3d4d5',
  borderRadius: '5px',
  padding: '0 20px',
  width: '280px'
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions


var LabelValueViewNodeCustom = function LabelValueViewNodeCustom() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _LabelValueView2.default,
      { label: 'Label' },
      _react2.default.createElement(
        'div',
        { style: divStyle },
        _react2.default.createElement(
          'h3',
          null,
          'Custom H3 for the Value'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Custom paragraph of text for the Value. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        )
      )
    )
  );
};

exports.default = LabelValueViewNodeCustom;