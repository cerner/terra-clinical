'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Slide.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  isHidden: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

var Slide = function Slide(props) {
  return _react2.default.createElement(
    'div',
    { className: 'terraClinical-Slide', 'aria-hidden': props.isHidden || null },
    _react2.default.createElement('div', { className: 'terraClinical-Slide-shadow' }),
    props.children
  );
};

Slide.propTypes = propTypes;

exports.default = Slide;