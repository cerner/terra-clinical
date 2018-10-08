'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

var _ItemCollectionUtils = require('./_ItemCollectionUtils');

var _ItemCollectionUtils2 = _interopRequireDefault(_ItemCollectionUtils);

var _ItemCollection = require('./ItemCollection.scss');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The items be rendered as a table row.
   */
  children: _propTypes2.default.node,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child is selectable.
   */
  onSelect: _propTypes2.default.func,
  /**
   * Whether or not the table cells should be padded.
   */
  isTablePadded: _propTypes2.default.bool,
  /**
   * Whether or not the table rows should be zebra striped.
   */
  isTableStriped: _propTypes2.default.bool,
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain
   * the provided layout.
   */
  requiredElements: _propTypes2.default.shape({
    hasStartAccessory: _propTypes2.default.bool,
    numberOfDisplays: _propTypes2.default.number,
    hasComment: _propTypes2.default.bool,
    hasEndAccessory: _propTypes2.default.bool
  })
};

function createTableLayout(requiredElements) {
  var hasStartAccessory = requiredElements.hasStartAccessory,
      numberOfDisplays = requiredElements.numberOfDisplays,
      hasComment = requiredElements.hasComment,
      hasEndAccessory = requiredElements.hasEndAccessory;


  var displays = [];
  if (numberOfDisplays) {
    for (var i = 0; i < numberOfDisplays; i += 1) {
      displays.push(_react2.default.createElement('col', { key: i, 'data-terra-clinical-item-collection-display-column': true }));
    }
  }

  return _react2.default.createElement(
    'colgroup',
    null,
    hasStartAccessory && _react2.default.createElement('col', { className: _ItemCollection2.default['start-accessory-column'] }),
    displays,
    hasComment && _react2.default.createElement('col', { 'data-terra-clinical-item-collection-comment-column': true }),
    hasEndAccessory && _react2.default.createElement('col', { 'data-terra-clinical-item-collection-end-accessory-column': true })
  );
}

function createTableRows(children, onSelect, requiredElements) {
  return _react2.default.Children.map(children, function (child) {
    var tableRowPieces = _ItemCollectionUtils2.default.addMissingTableElements(child.props, requiredElements);
    var onSelectProps = onSelect && child.props.isSelectable ? _ItemCollectionUtils2.default.createOnSelectProps(onSelect, child.key) : {};
    return _react2.default.cloneElement(child, _extends({ view: 'table' }, onSelectProps, tableRowPieces));
  });
}

var TableView = function TableView(_ref) {
  var children = _ref.children,
      onSelect = _ref.onSelect,
      isTablePadded = _ref.isTablePadded,
      isTableStriped = _ref.isTableStriped,
      requiredElements = _ref.requiredElements;

  var tableLayout = createTableLayout(requiredElements);
  var tableRows = createTableRows(children, onSelect, requiredElements);

  return _react2.default.createElement(
    _terraTable2.default,
    {
      'data-terra-clinical-item-collection-table-view': true,
      className: _ItemCollection2.default.table,
      isPadded: isTablePadded,
      isStriped: isTableStriped
    },
    tableLayout,
    _react2.default.createElement(
      _terraTable2.default.Rows,
      null,
      tableRows
    )
  );
};

TableView.propTypes = propTypes;

exports.default = TableView;