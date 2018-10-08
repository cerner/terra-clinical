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

var _terraClinicalItemDisplay = require('terra-clinical-item-display');

var _terraClinicalItemDisplay2 = _interopRequireDefault(_terraClinicalItemDisplay);

require('terra-base/lib/baseStyles');

var _ItemView = require('./ItemView.scss');

var _ItemView2 = _interopRequireDefault(_ItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ItemView2.default);

var propTypes = {
  /**
   * The column layout in which to present the displays.
   */
  layout: _propTypes2.default.oneOf(['oneColumn', 'twoColumns']),
  /**
   * The text color emphasis when using two columns.
   */
  textEmphasis: _propTypes2.default.oneOf(['default', 'start']),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: _propTypes2.default.bool,
  /**
   * The vertical alignment of the start and end accesories.
   */
  accessoryAlignment: _propTypes2.default.oneOf(['alignTop', 'alignCenter']),
  /**
   * The react element to be placed in the start aligned accessory position.
   */
  startAccessory: _propTypes2.default.node,
  /**
   * Indicates whether or not space is allocated for the start accessory if none is given.
   */
  reserveStartAccessorySpace: _propTypes2.default.bool,
  /**
   * The react element to be placed in the end aligned accessory position.
   */
  endAccessory: _propTypes2.default.node,
  /**
   * An array of react display elements to be presented.
   */
  displays: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * The react element for the comment element.
   */
  comment: _propTypes2.default.node,
  /**
   * Function callback for the ref of the outer most div.
   */
  refCallback: _propTypes2.default.func
};

var defaultProps = {
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  startAccessory: undefined,
  reserveStartAccessorySpace: false,
  endAccessory: undefined,
  displays: [],
  comment: undefined
};

var renderAccessory = function renderAccessory(accessory, reserveSpace, accessoryAlignment, type) {
  var accessorySection = void 0;
  if (accessory || reserveSpace) {
    var accessoryClassNames = cx('accessory', type + '-accessory', { 'accessory-align-center': accessoryAlignment === 'alignCenter' }, { 'accessory-align-top': accessoryAlignment === 'alignTop' });

    accessorySection = _react2.default.createElement(
      'div',
      { className: accessoryClassNames },
      accessory
    );
  }
  return accessorySection;
};

var defaultEmphasisContentClassesFromIndexes = function defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
  var contentSize = 'content-primary-size';
  var contentColor = 'content-primary-color';

  if (rowIndex > 0) {
    contentSize = 'content-secondary-size';
  }

  if (rowCount === 2 && rowIndex === 1) {
    contentColor = 'content-secondary-color';
  } else if (rowIndex >= 2) {
    contentColor = 'content-secondary-color';
  }

  return [contentSize, contentColor];
};

var startEmphasisContentClassesFromIndexes = function startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
  if (contentIndex === 1) {
    return ['content-secondary-size', 'content-secondary-color'];
  }

  return defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
};

var classesForContent = function classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
  var classes = void 0;
  if (emphasis === 'start') {
    classes = startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
  } else {
    classes = defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
  }
  return ['content'].concat(classes);
};

var renderRow = function renderRow(row, rowIndex, rowCount, emphasis) {
  var rowKey = rowIndex;
  return _react2.default.createElement(
    'div',
    { className: cx('row'), key: rowKey },
    row.map(function (display, contentIndex) {
      var contentKey = contentIndex;
      var contentClasses = classesForContent(rowIndex, rowCount, contentIndex, emphasis);
      return _react2.default.createElement(
        'div',
        { className: cx(contentClasses), key: contentKey },
        display
      );
    })
  );
};

var renderRows = function renderRows(displays, layout, emphasis) {
  if (displays === null || displays === undefined || !displays.length) {
    return undefined;
  }

  var displayGroups = [];
  var displaysSlice = displays.slice(0, 8);
  var spliceValue = layout === 'twoColumns' ? 2 : 1;

  while (displaysSlice.length) {
    displayGroups.push(displaysSlice.splice(0, spliceValue));
  }

  return _react2.default.createElement(
    'div',
    { className: cx('row-container') },
    displayGroups.map(function (group, index) {
      var row = renderRow(group, index, displayGroups.length, emphasis);
      return row;
    })
  );
};

var ItemView = function ItemView(_ref) {
  var layout = _ref.layout,
      textEmphasis = _ref.textEmphasis,
      isTruncated = _ref.isTruncated,
      accessoryAlignment = _ref.accessoryAlignment,
      startAccessory = _ref.startAccessory,
      reserveStartAccessorySpace = _ref.reserveStartAccessorySpace,
      endAccessory = _ref.endAccessory,
      displays = _ref.displays,
      comment = _ref.comment,
      refCallback = _ref.refCallback,
      customProps = _objectWithoutProperties(_ref, ['layout', 'textEmphasis', 'isTruncated', 'accessoryAlignment', 'startAccessory', 'reserveStartAccessorySpace', 'endAccessory', 'displays', 'comment', 'refCallback']);

  var viewClassNames = cx(['item-view', { 'is-truncated': isTruncated }, { 'one-column': layout === 'oneColumn' }, { 'two-columns': layout === 'twoColumns' }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: viewClassNames, ref: refCallback }),
    renderAccessory(startAccessory, reserveStartAccessorySpace, accessoryAlignment, 'start'),
    _react2.default.createElement(
      'div',
      { className: cx('body') },
      renderRows(displays, layout, textEmphasis),
      comment
    ),
    renderAccessory(endAccessory, false, accessoryAlignment, 'end')
  );
};

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;
ItemView.Display = _terraClinicalItemDisplay2.default;
ItemView.Comment = _terraClinicalItemDisplay2.default.Comment;

exports.default = ItemView;