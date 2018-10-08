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

var _IconComment = require('terra-icon/lib/icon/IconComment');

var _IconComment2 = _interopRequireDefault(_IconComment);

var _ItemDisplay = require('./ItemDisplay');

var _ItemDisplay2 = _interopRequireDefault(_ItemDisplay);

var _ItemComment = require('./ItemComment.scss');

var _ItemComment2 = _interopRequireDefault(_ItemComment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
/* eslint-disable-next-line import/no-cycle */


var cx = _bind2.default.bind(_ItemComment2.default);

var propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: _propTypes2.default.string,
  /**
   * Whether or not the text should be truncated in display.
   */
  isTruncated: _propTypes2.default.bool
};

var defaultProps = {
  text: '',
  isTruncated: false
};

var ItemComment = function ItemComment(_ref) {
  var text = _ref.text,
      isTruncated = _ref.isTruncated,
      customProps = _objectWithoutProperties(_ref, ['text', 'isTruncated']);

  return _react2.default.createElement(_ItemDisplay2.default, _extends({
    text: text,
    isTruncated: isTruncated,
    icon: _react2.default.createElement(_IconComment2.default, { className: cx('inline-icon') })
  }, customProps, {
    className: cx('item-comment', customProps.className)
  }));
};

ItemComment.propTypes = propTypes;
ItemComment.defaultProps = defaultProps;

exports.default = ItemComment;