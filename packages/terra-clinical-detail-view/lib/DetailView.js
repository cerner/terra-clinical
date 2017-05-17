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

require('./DetailView.scss');

var _DetailList = require('./DetailList');

var _DetailList2 = _interopRequireDefault(_DetailList);

var _DetailListItem = require('./DetailListItem');

var _DetailListItem2 = _interopRequireDefault(_DetailListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The title to display
   **/
  title: _propTypes2.default.string,

  /**
   * List of subtitle strings
   **/
  subtitles: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * Display for visualization data
   **/
  graph: _propTypes2.default.element,

  /**
   * Array of elements to display detail information
   **/
  details: _propTypes2.default.arrayOf(_propTypes2.default.element),

  /**
   * Text to be displayed at the footer of the view
   **/
  footer: _propTypes2.default.string,

  /**
   * Indicates if sections should be devided
   **/
  isDivided: _propTypes2.default.bool
};

var defaultProps = {
  title: '',
  subtitles: [],
  details: [],
  isDivided: true
};

var DetailView = function DetailView(_ref) {
  var title = _ref.title,
      subtitles = _ref.subtitles,
      graph = _ref.graph,
      details = _ref.details,
      footer = _ref.footer,
      isDivided = _ref.isDivided,
      customProps = _objectWithoutProperties(_ref, ['title', 'subtitles', 'graph', 'details', 'footer', 'isDivided']);

  var attributes = _extends({}, customProps);
  attributes.className = (0, _classnames2.default)(['terraClinical-DetailView', attributes.className]);

  var divider = null;
  var dividedDetails = [];

  var subtitleElements = subtitles.map(function (subtitle, i) {
    return (
      // eslint-disable-next-line react/no-array-index-key
      _react2.default.createElement(
        'div',
        { className: 'terraClinical-DetailView-subtitle', key: i },
        subtitle
      )
    );
  });

  if (isDivided) {
    divider = _react2.default.createElement('hr', { className: 'terraClinical-DetailView-divider' });

    for (var i = 0; i < details.length; i += 1) {
      dividedDetails.push(details[i]);
      dividedDetails.push(divider);
    }
  } else {
    dividedDetails = details;
  }

  return _react2.default.createElement(
    'div',
    attributes,
    _react2.default.createElement(
      'div',
      { className: 'terraClinical-DetailView-title' },
      _react2.default.createElement(
        'h1',
        { className: 'terraClinical-DetailView-primaryText' },
        title
      ),
      subtitleElements
    ),
    divider,
    graph,
    divider,
    dividedDetails,
    _react2.default.createElement(
      'div',
      { className: 'terraClinical-DetailView-footerText' },
      footer
    )
  );
};

DetailView.propTypes = propTypes;

DetailView.defaultProps = defaultProps;
DetailView.DetailList = _DetailList2.default;
DetailView.DetailListItem = _DetailListItem2.default;

exports.default = DetailView;