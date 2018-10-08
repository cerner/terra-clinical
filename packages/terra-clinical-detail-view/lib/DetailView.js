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

var _DetailView = require('./DetailView.scss');

var _DetailView2 = _interopRequireDefault(_DetailView);

var _DetailList = require('./DetailList');

var _DetailList2 = _interopRequireDefault(_DetailList);

var _DetailListItem = require('./DetailListItem');

var _DetailListItem2 = _interopRequireDefault(_DetailListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_DetailView2.default);

var propTypes = {
  /**
   * The primary title to display.
   */
  title: _propTypes2.default.string,

  /**
   * Additional list of title strings to display.
   */
  secondaryTitles: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * List of subtitle strings.
   */
  subtitles: _propTypes2.default.arrayOf(_propTypes2.default.string),

  /**
   * Display for minor supporting information like Status, Progress, or anything additional.
   */
  accessory: _propTypes2.default.element,

  /**
   * Display for visualization of data.
   */
  graph: _propTypes2.default.element,

  /**
   * Array of elements to display information in the body of the detail view.
   */
  details: _propTypes2.default.arrayOf(_propTypes2.default.element),

  /**
   * Text to be displayed at the footer of the detail view.
   */
  footer: _propTypes2.default.string,

  /**
   * Indicates if sections should be divided. Is applied by default.
   */
  isDivided: _propTypes2.default.bool,

  /**
   * Sets title sizes to be smaller than default sizes, good for longer titles like medication names.
   */
  isSmallerTitles: _propTypes2.default.bool
};

var defaultProps = {
  title: undefined,
  secondaryTitles: [],
  subtitles: [],
  graph: undefined,
  accessory: undefined,
  details: [],
  footer: undefined,
  isDivided: true,
  isSmallerTitles: false
};

var DetailView = function DetailView(props) {
  var title = props.title,
      secondaryTitles = props.secondaryTitles,
      subtitles = props.subtitles,
      accessory = props.accessory,
      graph = props.graph,
      details = props.details,
      footer = props.footer,
      isDivided = props.isDivided,
      isSmallerTitles = props.isSmallerTitles,
      customProps = _objectWithoutProperties(props, ['title', 'secondaryTitles', 'subtitles', 'accessory', 'graph', 'details', 'footer', 'isDivided', 'isSmallerTitles']);

  var attributes = _extends({}, customProps);
  attributes.className = cx(['detail-view', attributes.className]);

  var titleElement = title ? _react2.default.createElement(
    'h1',
    { className: cx('primary-text') },
    title
  ) : null;
  var secondaryTitlesElements = secondaryTitles.map(function (secondaryTitle, i) {
    return (
      // eslint-disable-next-line react/no-array-index-key
      _react2.default.createElement(
        'div',
        { className: cx('secondary-text'), key: '' + i },
        secondaryTitle
      )
    );
  });
  var subtitleElements = subtitles.map(function (subTitle, i) {
    return (
      // eslint-disable-next-line react/no-array-index-key
      _react2.default.createElement(
        'div',
        { className: cx('subtitle'), key: '' + i },
        subTitle
      )
    );
  });
  var accessoryElement = accessory ? _react2.default.createElement(
    'div',
    { className: cx('accessory') },
    accessory
  ) : null;
  var footerElement = footer ? _react2.default.createElement(
    'div',
    { className: cx('footer-text') },
    footer
  ) : null;

  var divider = null;
  var dividedDetails = [];

  if (isDivided) {
    divider = _react2.default.createElement('hr', { className: cx('divider') });

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
      { className: cx('titles-section', { 'titles-smaller': isSmallerTitles }) },
      titleElement,
      secondaryTitlesElements,
      subtitleElements,
      accessoryElement
    ),
    graph && divider,
    graph,
    divider,
    dividedDetails,
    footerElement
  );
};

DetailView.propTypes = propTypes;
DetailView.defaultProps = defaultProps;
DetailView.DetailList = _DetailList2.default;
DetailView.DetailListItem = _DetailListItem2.default;

exports.default = DetailView;