'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./LabelValueView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The label of the LabelValueView.
   */
  label: _propTypes2.default.string.isRequired,
  /**
  * The text to be displayed underneath the label with the provided styling.
  */
  textValue: _propTypes2.default.string,
  /**
   *  Child component(s) to display underneath the label.
   */
  children: _propTypes2.default.node
};

var defaultProps = {
  textValue: '',
  children: undefined
};

var LabelValueView = function LabelValueView(_ref) {
  var label = _ref.label,
      textValue = _ref.textValue,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['label', 'textValue', 'children']);

  var labelValueViewClassNames = (0, _classnames2.default)('terraClinical-LabelValueView', _defineProperty({}, '' + customProps.className, customProps.className));

  var textValueSection = void 0;
  if (!textValue && !children) {
    textValueSection = _react2.default.createElement(
      'div',
      { className: 'terraClinical-LabelValueView-value' },
      '--'
    );
  } else if (textValue) {
    textValueSection = _react2.default.createElement(
      'div',
      { className: 'terraClinical-LabelValueView-value' },
      textValue
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: labelValueViewClassNames }),
    _react2.default.createElement(
      'div',
      { className: 'terraClinical-LabelValueView-label' },
      label
    ),
    textValueSection,
    children
  );
};

LabelValueView.propTypes = propTypes;
LabelValueView.defaultProps = defaultProps;

exports.default = LabelValueView;