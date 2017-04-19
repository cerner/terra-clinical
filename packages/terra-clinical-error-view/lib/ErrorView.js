'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _IconError = require('terra-icon/lib/icon/IconError');

var _IconError2 = _interopRequireDefault(_IconError);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

require('./ErrorView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The name of the error to display.
   */
  name: _react.PropTypes.string,
  /**
   * The error description to display.
   */
  description: _react.PropTypes.string,
  /**
   * The display text for the button.
   */
  buttonText: _react.PropTypes.string,
  /**
   * The click callback function that should be applied to the button.
   */
  buttonOnClick: _react.PropTypes.func,
  /**
   * Whether or not the error glyph should be displayed.
   */
  isGlyphHidden: _react.PropTypes.bool
};

var defaultProps = {
  name: '',
  description: '',
  buttonText: '',
  buttonOnClick: undefined,
  isGlyphHidden: false
};

var ErrorView = function ErrorView(_ref) {
  var name = _ref.name,
      description = _ref.description,
      buttonText = _ref.buttonText,
      buttonOnClick = _ref.buttonOnClick,
      isGlyphHidden = _ref.isGlyphHidden,
      customProps = _objectWithoutProperties(_ref, ['name', 'description', 'buttonText', 'buttonOnClick', 'isGlyphHidden']);

  var errorClassNames = (0, _classnames2.default)(['terraClinical-ErrorView', customProps.className]);

  var glyphSection = void 0;
  if (!isGlyphHidden) {
    var errorIcon = _react2.default.createElement(_IconError2.default, { height: '170', width: '170' });
    glyphSection = _react2.default.createElement(
      'div',
      { className: 'terraClinical-ErrorView-glyph' },
      errorIcon
    );
  }

  var nameSection = void 0;
  if (name) {
    nameSection = _react2.default.createElement(
      'b',
      { className: 'terraClinical-ErrorView-name' },
      name
    );
  }

  var buttonSection = void 0;
  if (buttonText) {
    var button = _react2.default.createElement(_terraButton2.default, { variant: 'secondary', text: buttonText, onClick: buttonOnClick });
    buttonSection = _react2.default.createElement(
      'div',
      { className: 'terraClinical-ErrorView-button' },
      button
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: errorClassNames }),
    glyphSection,
    _react2.default.createElement(
      'p',
      { className: 'terraClinical-ErrorView-text' },
      nameSection,
      description
    ),
    buttonSection
  );
};

ErrorView.propTypes = propTypes;
ErrorView.defaultProps = defaultProps;

exports.default = ErrorView;