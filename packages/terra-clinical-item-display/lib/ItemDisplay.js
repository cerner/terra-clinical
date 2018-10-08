'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

require('terra-base/lib/baseStyles');

var _ItemDisplay = require('./ItemDisplay.scss');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

var _ItemComment = require('./ItemComment');

var _ItemComment2 = _interopRequireDefault(_ItemComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable-next-line import/no-cycle */


var cx = _bind2.default.bind(_ItemDisplay2.default);

var textStyles = ['secondary', 'attention', 'strikeThrough', 'strong'];

var propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: _propTypes2.default.string,
  /**
   * The visual style to be applied to the display element. One of: `secondary`, `attention`, `strikeThrough`, or `strong`.
   */
  textStyle: _propTypes2.default.oneOf(textStyles),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: _propTypes2.default.bool,
  /**
   * Whether or not the display is disabled.
   */
  isDisabled: _propTypes2.default.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: _propTypes2.default.element
};

var defaultProps = {
  text: '',
  textStyle: undefined,
  isTruncated: false,
  isDisabled: false,
  icon: undefined
};

var ItemDisplay = function ItemDisplay(_ref) {
  var text = _ref.text,
      textStyle = _ref.textStyle,
      isTruncated = _ref.isTruncated,
      isDisabled = _ref.isDisabled,
      icon = _ref.icon,
      customProps = _objectWithoutProperties(_ref, ['text', 'textStyle', 'isTruncated', 'isDisabled', 'icon']);

  var componentClassNames = cx(['item-display', { 'is-disabled': isDisabled }, customProps.className]);
  var textClassNames = cx(['text', { 'is-truncated': isTruncated }, _defineProperty({ 'strike-through': textStyle === 'strikeThrough' }, '' + textStyle, textStyle)]);

  var displayIcon = void 0;
  if (icon) {
    displayIcon = _react2.default.createElement(
      'div',
      { className: cx('inline-icon') },
      icon
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: componentClassNames }),
    displayIcon,
    _react2.default.createElement(
      'div',
      { className: textClassNames },
      text
    )
  );
};

ItemDisplay.propTypes = propTypes;
ItemDisplay.defaultProps = defaultProps;
ItemDisplay.Comment = _ItemComment2.default;

exports.default = ItemDisplay;