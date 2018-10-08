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

var _Header = require('./Header.scss');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_Header2.default);

var propTypes = {
  /**
   * Child element to be displayed on the right end of the header.
   * The element passed as children will be decorated with flex attributes.
   */
  children: _propTypes2.default.element,

  /**
   * Content to be displayed at the start of the header, placed before the title
   */
  startContent: _propTypes2.default.element,

  /**
   * Text to be displayed as the title in the header bar
   */
  title: _propTypes2.default.string,

  /**
   * Content to be displayed at the end of the header
   * The element passed as endContent will be wrapped in a div with flex attributes.
   */
  endContent: _propTypes2.default.element,

  /**
   * A Boolean indicating if element is a subheader.
   */
  isSubheader: _propTypes2.default.bool
};

var defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
  isSubheader: false
};

var Header = function Header(_ref) {
  var children = _ref.children,
      title = _ref.title,
      startContent = _ref.startContent,
      endContent = _ref.endContent,
      isSubheader = _ref.isSubheader,
      customProps = _objectWithoutProperties(_ref, ['children', 'title', 'startContent', 'endContent', 'isSubheader']);

  var startElement = void 0;
  if (startContent) {
    startElement = _react2.default.createElement(
      'div',
      { className: cx('flex-end') },
      startContent
    );
  }

  var titleElement = void 0;
  if (title) {
    titleElement = _react2.default.createElement(
      'div',
      { className: cx('title-container') },
      _react2.default.createElement(
        'h1',
        { className: cx('title') },
        title
      )
    );
  }

  var endElement = void 0;
  if (endContent) {
    endElement = _react2.default.createElement(
      'div',
      { className: cx('flex-end') },
      endContent
    );
  }

  var childElement = void 0;
  if (children) {
    var childClassNames = cx(['flex-collapse', children.props.className]);
    childElement = _react2.default.cloneElement(children, { className: childClassNames });
  }

  var headerClass = isSubheader ? 'flex-subheader' : 'flex-header';

  return _react2.default.createElement(
    'header',
    _extends({}, customProps, { className: cx(headerClass, customProps.className) }),
    startElement,
    _react2.default.createElement(
      'div',
      { className: cx('flex-fill') },
      titleElement
    ),
    childElement,
    endElement
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

exports.default = Header;