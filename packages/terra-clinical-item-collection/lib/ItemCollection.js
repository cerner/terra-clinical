'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _ListView = require('./_ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _TableView = require('./_TableView');

var _TableView2 = _interopRequireDefault(_TableView);

require('./ItemCollection.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var maxDisplays = 8;

var propTypes = {
  /**
   * The breakpoint to switch from a table view to a list view. Breakpoint options are tiny, small, medium, large, or huge.
   */
  breakpoint: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The items that will flex between either a list item or a table row.
   */
  children: _propTypes2.default.node.isRequired,
  /**
  * Whether or not the item collection should display a start accessory.
  */
  hasStartAccessory: _propTypes2.default.bool,
  /**
  * The number of displays the item collection should display.
  */
  numberOfDisplays: _propTypes2.default.number,
  /**
  * Whether or not the item collection should display a comment.
  */
  hasComment: _propTypes2.default.bool,
  /**
  * Whether or not the item collection should display an end accessory.
  */
  hasEndAccessory: _propTypes2.default.bool,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child is selectable. The first
   * parameter returned is the event and the second parameter is the child key. Function is not applied if child is not selectable.
   */
  onSelect: _propTypes2.default.func,
  /**
   * Whether or not the list items should be divided.
   */
  isListDivided: _propTypes2.default.bool,
  /**
   * Whether or not the table cells should be padded.
   */
  isTablePadded: _propTypes2.default.bool,
  /**
   * Whether or not the table rows should be zebra striped.
   */
  isTableStriped: _propTypes2.default.bool
};

var defaultProps = {
  breakpoint: 'small',
  hasStartAccessory: false,
  numberOfDisplays: 0,
  hasComment: false,
  hasEndAccessory: false,
  onSelect: undefined,
  isListDivided: false,
  isTablePadded: false,
  isTableStriped: false
};

var ItemCollection = function ItemCollection(props) {
  var children = props.children,
      breakpoint = props.breakpoint,
      onSelect = props.onSelect,
      hasStartAccessory = props.hasStartAccessory,
      numberOfDisplays = props.numberOfDisplays,
      hasComment = props.hasComment,
      hasEndAccessory = props.hasEndAccessory,
      isListDivided = props.isListDivided,
      isTablePadded = props.isTablePadded,
      isTableStriped = props.isTableStriped,
      customProps = _objectWithoutProperties(props, ['children', 'breakpoint', 'onSelect', 'hasStartAccessory', 'numberOfDisplays', 'hasComment', 'hasEndAccessory', 'isListDivided', 'isTablePadded', 'isTableStriped']);

  var displaysRequired = numberOfDisplays < maxDisplays ? numberOfDisplays : maxDisplays;
  var requiredElements = {
    hasStartAccessory: hasStartAccessory,
    numberOfDisplays: displaysRequired,
    hasComment: hasComment,
    hasEndAccessory: hasEndAccessory
  };

  var listDisplay = _react2.default.createElement(
    _ListView2.default,
    {
      requiredElements: requiredElements,
      onSelect: onSelect,
      isListDivided: isListDivided
    },
    children
  );

  var tableDisplay = _react2.default.createElement(
    _TableView2.default,
    {
      requiredElements: requiredElements,
      onSelect: onSelect,
      isTablePadded: isTablePadded,
      isTableStriped: isTableStriped
    },
    children
  );

  var breakpointDisplay = {};
  breakpointDisplay[breakpoint] = tableDisplay;

  return _react2.default.createElement(
    'div',
    customProps,
    _react2.default.createElement(_terraResponsiveElement2.default, _extends({
      responsiveTo: 'parent',
      defaultElement: listDisplay
    }, breakpointDisplay))
  );
};

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

// Item Collection Building Blocks
ItemCollection.Item = _Item2.default;
ItemCollection.Comment = _Item2.default.Comment;
ItemCollection.Display = _Item2.default.Display;

exports.default = ItemCollection;