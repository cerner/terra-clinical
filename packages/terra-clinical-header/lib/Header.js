'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./Header.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /*
   * Content to be displayed at the start of the header, placed before the title
   */
  startContent: _react.PropTypes.element,

  /*
   * Text to be displayed as the title in the header bar
   */
  title: _react.PropTypes.string,

  /*
   * Content to be displayed at the end of the header
   */
  endContent: _react.PropTypes.element
};

var defaultProps = {
  title: '',
  startContent: null,
  endContent: null
};

var Header = function Header(_ref) {
  var title = _ref.title,
      startContent = _ref.startContent,
      endContent = _ref.endContent,
      customProps = _objectWithoutProperties(_ref, ['title', 'startContent', 'endContent']);

  var attributes = _extends({}, customProps);
  var headerClassNames = (0, _classnames2.default)(['terraClinical-Header', attributes.className]);

  var titleElement = _react2.default.createElement(
    'h1',
    { className: 'terraClinical-Header-title' },
    title
  );
  var headerContent = void 0;

  if (startContent || endContent) {
    headerContent = _react2.default.createElement(_terraArrange2.default, {
      fitStart: startContent,
      fitEnd: endContent,
      fill: titleElement,
      align: 'center'
    });
  } else {
    headerContent = titleElement;
  }

  return _react2.default.createElement(
    'header',
    _extends({}, attributes, { className: headerClassNames }),
    headerContent
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

exports.default = Header;