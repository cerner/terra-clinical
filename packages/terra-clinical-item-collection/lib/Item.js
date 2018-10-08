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

var _terraClinicalItemView = require('terra-clinical-item-view');

var _terraClinicalItemView2 = _interopRequireDefault(_terraClinicalItemView);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

require('terra-base/lib/baseStyles');

var _ItemCollection = require('./ItemCollection.scss');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_ItemCollection2.default);

var propTypes = {
  /**
   * The display elements to be presented.
   */
  children: _propTypes2.default.node,
  /**
   * The start accessory element to be presented.
   */
  startAccessory: _propTypes2.default.node,
  /**
   * The comment element to be presented.
   */
  comment: _propTypes2.default.node,
  /**
   * The end accessory element to be presented.
   */
  endAccessory: _propTypes2.default.node,
  /**
   * When displayed as a list item, the column layout in which to present the displays.
   */
  listItemLayout: _propTypes2.default.oneOf(['oneColumn', 'twoColumns']),
  /**
   * When displayed as a list item, the text color emphasis when using the two columns layout.
   */
  listItemTextEmphasis: _propTypes2.default.oneOf(['default', 'start']),
  /**
   * When displayed as a list item, whether or not all text should truncate.
   */
  isListItemTruncated: _propTypes2.default.bool,
  /**
   * The vertical alignment of the start and end accessories.
   */
  accessoryAlignment: _propTypes2.default.oneOf(['alignTop', 'alignCenter']),
  /**
   * When displayed as a list item, indicates whether or not space is allocated for the start accessory.
   * This will be set by the Item Collection component.
   */
  reserveStartAccessorySpace: _propTypes2.default.bool,
  /**
   * When displayed as a list item, whether or not it has a chevron. This should only be used when creating a
   * a single selectable list.
   */
  showListItemChevron: _propTypes2.default.bool,
  /**
   * Whether or not the item is selectable. If true, the item is given list and table hover and focus styles
   * and set tabIndex to 0.
   */
  isSelectable: _propTypes2.default.bool,
  /*
   * Whether or not the item is selected.
   */
  isSelected: _propTypes2.default.bool,
  /**
   * The view in which the item should be presented. Options are list or table and this will be set by the
   * Item Collection component.
   */
  view: _propTypes2.default.oneOf(['list', 'table'])
};

var defaultProps = {
  startAccessory: undefined,
  comment: undefined,
  endAccessory: undefined,
  accessoryAlignment: 'alignCenter',
  isListItemTruncated: false,
  isSelectable: false,
  isSelected: false,
  listItemLayout: 'oneColumn',
  listItemTextEmphasis: 'default',
  reserveStartAccessorySpace: false,
  showListItemChevron: false,
  view: 'list'
};

function createListItem(elements, selectableProps, customProps, isSelected, itemViewStyles, showListItemChevron) {
  var startAccessory = elements.startAccessory,
      children = elements.children,
      comment = elements.comment,
      endAccessory = elements.endAccessory,
      reserveStartAccessorySpace = elements.reserveStartAccessorySpace;


  var listItemContent = _react2.default.createElement(_terraClinicalItemView2.default, _extends({
    startAccessory: startAccessory,
    displays: _react2.default.Children.toArray(children),
    comment: comment,
    endAccessory: endAccessory,
    reserveStartAccessorySpace: reserveStartAccessorySpace
  }, itemViewStyles));

  return _react2.default.createElement(_terraList2.default.Item, _extends({
    content: listItemContent,
    isSelected: isSelected,
    hasChevron: showListItemChevron
  }, selectableProps, customProps));
}

function createTableCell(content, keyValue, contentType, accessoryAlignment) {
  var cellClassNames = cx('content-' + contentType, { 'content-end-accessory': keyValue === 'end_accessory' }, { 'content-accessory-align-center': contentType.includes('accessory') && accessoryAlignment === 'alignCenter' }, { 'content-accessory-align-top': contentType.includes('accessory') && accessoryAlignment === 'alignTop' });

  return _react2.default.createElement(_terraTable2.default.Cell, { content: content, key: keyValue, className: cellClassNames });
}

function createTableRow(elements, selectableProps, customProps, isSelected, accessoryAlignment) {
  var startAccessory = elements.startAccessory,
      children = elements.children,
      comment = elements.comment,
      endAccessory = elements.endAccessory;


  var displayContent = _react2.default.Children.map(children, function (display, index) {
    var displayKey = 'display_' + (index + 1);
    return createTableCell(display, displayKey, 'display');
  });

  return _react2.default.createElement(
    _terraTable2.default.Row,
    _extends({ isSelected: isSelected }, selectableProps, customProps),
    startAccessory && createTableCell(startAccessory, 'start_accessory', 'accessory', accessoryAlignment),
    displayContent,
    comment && createTableCell(comment, 'comment', 'comment'),
    endAccessory && createTableCell(endAccessory, 'end_accessory', 'accessory', accessoryAlignment)
  );
}

var Item = function Item(props) {
  var children = props.children,
      startAccessory = props.startAccessory,
      comment = props.comment,
      endAccessory = props.endAccessory,
      accessoryAlignment = props.accessoryAlignment,
      isListItemTruncated = props.isListItemTruncated,
      isSelectable = props.isSelectable,
      isSelected = props.isSelected,
      listItemLayout = props.listItemLayout,
      listItemTextEmphasis = props.listItemTextEmphasis,
      reserveStartAccessorySpace = props.reserveStartAccessorySpace,
      showListItemChevron = props.showListItemChevron,
      view = props.view,
      customProps = _objectWithoutProperties(props, ['children', 'startAccessory', 'comment', 'endAccessory', 'accessoryAlignment', 'isListItemTruncated', 'isSelectable', 'isSelected', 'listItemLayout', 'listItemTextEmphasis', 'reserveStartAccessorySpace', 'showListItemChevron', 'view']);

  var elements = {
    children: children, startAccessory: startAccessory, comment: comment, endAccessory: endAccessory, reserveStartAccessorySpace: reserveStartAccessorySpace
  };
  var selectableProps = isSelectable ? { isSelectable: isSelectable, tabIndex: 0 } : {};

  if (view === 'table') {
    return createTableRow(elements, selectableProps, customProps, isSelected, accessoryAlignment);
  }

  var itemViewStyles = {
    layout: listItemLayout, textEmphasis: listItemTextEmphasis, isTruncated: isListItemTruncated, accessoryAlignment: accessoryAlignment
  };
  return createListItem(elements, selectableProps, customProps, isSelected, itemViewStyles, showListItemChevron);
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
Item.Display = _terraClinicalItemView2.default.Display;
Item.Comment = _terraClinicalItemView2.default.Comment;

exports.default = Item;