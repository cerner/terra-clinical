'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraTable = require('terra-table');

var _terraTable2 = _interopRequireDefault(_terraTable);

var _TableHeaderCell = require('./TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

require('./ItemCollection.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function determineTableColumns(row) {
  var startAccessory = row.startAccessory,
      displays = row.displays,
      comment = row.comment,
      endAccessory = row.endAccessory;


  var columns = {};
  columns.startAccessoryColumn = startAccessory !== undefined;
  columns.displayColumns = displays && displays.length < 8 ? displays.length : 8;
  columns.commentColumn = comment !== undefined;
  columns.endAccessoryColumn = endAccessory !== undefined;

  return columns;
}

function createTableHeader(tableColumns) {
  var startAccessoryColumn = tableColumns.startAccessoryColumn,
      displayColumns = tableColumns.displayColumns,
      commentColumn = tableColumns.commentColumn,
      endAccessoryColumn = tableColumns.endAccessoryColumn;


  var startAccessoryHeader = void 0;
  if (startAccessoryColumn) {
    startAccessoryHeader = _react2.default.createElement(_TableHeaderCell2.default, { columnType: 'accessory', key: 'start_accessory' });
  }

  var displayHeaders = [];
  if (displayColumns) {
    for (var index = 1; index <= displayColumns; index += 1) {
      var contentKey = 'display_header_' + index;
      displayHeaders[index - 1] = _react2.default.createElement(_TableHeaderCell2.default, { columnType: 'display', key: contentKey });
    }
  }

  var commentHeader = void 0;
  if (commentColumn) {
    commentHeader = _react2.default.createElement(_TableHeaderCell2.default, { columnType: 'comment', key: 'comment' });
  }

  var endAccessoryHeader = void 0;
  if (endAccessoryColumn) {
    endAccessoryHeader = _react2.default.createElement(_TableHeaderCell2.default, { columnType: 'accessory', key: 'end_accessory' });
  }

  return _react2.default.createElement(
    _terraTable2.default.Header,
    { style: { display: 'none' } },
    startAccessoryHeader,
    displayHeaders,
    commentHeader,
    endAccessoryHeader
  );
}

function createTableRows(rows, tableColumns, selectedIndex) {
  var tableRows = rows.map(function (row, rowIndex) {
    var startAccessory = row.startAccessory,
        displays = row.displays,
        comment = row.comment,
        endAccessory = row.endAccessory,
        itemStyles = row.itemStyles,
        customProps = _objectWithoutProperties(row, ['startAccessory', 'displays', 'comment', 'endAccessory', 'itemStyles']);

    var startAccessoryColumn = tableColumns.startAccessoryColumn,
        displayColumns = tableColumns.displayColumns,
        commentColumn = tableColumns.commentColumn,
        endAccessoryColumn = tableColumns.endAccessoryColumn;


    var startAccessoryContent = void 0;
    if (startAccessoryColumn) {
      var content = startAccessory != null ? startAccessory : ' ';
      startAccessoryContent = _react2.default.createElement(_terraTable2.default.Cell, { content: content, key: 'start_accessory' });
    }

    var displayContent = [];
    if (displayColumns) {
      for (var index = 1; index <= displayColumns; index += 1) {
        var contentKey = 'display_' + index;
        var _content = row.displays[index] != null ? row.displays[index] : ' ';
        displayContent[index - 1] = _react2.default.createElement(_terraTable2.default.Cell, { content: _content, key: contentKey });
      }
    }

    var commentContent = void 0;
    if (commentColumn) {
      var _content2 = comment != null ? comment : ' ';
      commentContent = _react2.default.createElement(_terraTable2.default.Cell, { content: _content2, key: 'comment' });
    }

    var endAccessoryContent = void 0;
    if (endAccessoryColumn) {
      var _content3 = endAccessory != null ? endAccessory : ' ';
      endAccessoryContent = _react2.default.createElement(_terraTable2.default.Cell, { content: _content3, key: 'end_accessory' });
    }

    var rowKey = rowIndex;
    var selected = rowIndex === selectedIndex;
    return _react2.default.createElement(
      _terraTable2.default.Row,
      _extends({}, customProps, { key: rowKey, isSelectable: true, isSelected: selected }),
      startAccessoryContent,
      displayContent,
      commentContent,
      endAccessoryContent
    );
  });

  return tableRows;
}

function createTableView(rows, tableStyles, selectedIndex, handleSelection) {
  var tableColumns = determineTableColumns(rows[0]);
  var tableHeader = createTableHeader(tableColumns);
  var tableRows = createTableRows(rows, tableColumns, selectedIndex);
  return _react2.default.createElement(
    _terraTable2.default,
    tableStyles,
    tableHeader,
    _react2.default.createElement(
      _terraTable2.default.SingleSelectableRows,
      { onChange: handleSelection },
      tableRows
    )
  );
}

exports.default = createTableView;