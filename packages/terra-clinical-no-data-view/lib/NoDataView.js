'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NoDataIcon = require('./NoDataIcon');

var _NoDataIcon2 = _interopRequireDefault(_NoDataIcon);

require('./NoDataView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The title of the no data view.
   */
  heading: _react.PropTypes.string,
  /**
   * The subtext description of the no data view.
   */
  subtext: _react.PropTypes.string,
  /**
   * The element to be dispaly in the subtext content container.
   */
  subtextContent: _react.PropTypes.element,
  /**
   * Whether or not the no data glyph should be displayed.
   */
  isGlyphHidden: _react.PropTypes.bool
};

var defaultProps = {
  heading: '',
  subtext: '',
  subtextContent: undefined,
  isGlyphHidden: false
};

var NoDataView = function NoDataView(_ref) {
  var heading = _ref.heading,
      subtext = _ref.subtext,
      subtextContent = _ref.subtextContent,
      isGlyphHidden = _ref.isGlyphHidden,
      customProps = _objectWithoutProperties(_ref, ['heading', 'subtext', 'subtextContent', 'isGlyphHidden']);

  var noDataClassNames = (0, _classnames2.default)(['terraClinical-NoDataView', customProps.className]);

  var glyphSection = void 0;
  if (!isGlyphHidden) {
    var noDataIcon = _react2.default.createElement(_NoDataIcon2.default, null);
    glyphSection = _react2.default.createElement(
      'div',
      { className: 'terraClinical-NoDataView-glyph' },
      noDataIcon
    );
  }

  var headingSection = void 0;
  if (heading) {
    headingSection = _react2.default.createElement(
      'p',
      { className: 'terraClinical-NoDataView-heading' },
      heading
    );
  }

  var subtextSection = void 0;
  if (subtext) {
    subtextSection = _react2.default.createElement(
      'p',
      { className: 'terraClinical-NoDataView-subtext' },
      subtext
    );
  }

  var subtextContentSection = void 0;
  if (subtextContent) {
    subtextContentSection = _react2.default.createElement(
      'div',
      { className: 'terraClinical-NoDataView-subtextContent' },
      subtextContent
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: noDataClassNames }),
    glyphSection,
    headingSection,
    subtextSection,
    subtextContentSection
  );
};

NoDataView.propTypes = propTypes;
NoDataView.defaultProps = defaultProps;

exports.default = NoDataView;