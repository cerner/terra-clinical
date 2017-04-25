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

function createTableHeader(columnWidths) {
  var startAccessoryWidth = columnWidths.startAccessoryWidth,
      displayWidths = columnWidths.displayWidths,
      commentWidth = columnWidths.commentWidth,
      endAccessoryWidth = columnWidths.endAccessoryWidth;


  var startAccessoryHeader = void 0;
  if (startAccessoryWidth) {
    startAccessoryHeader = _react2.default.createElement(_TableHeaderCell2.default, { columnWidth: startAccessoryWidth, key: 'start_accessory' });
  }

  var displayHeaders = void 0;
  if (displayWidths) {
    displayHeaders = displayWidths.slice(0, 8).map(function (displayWidth, index) {
      var contentKey = 'display_' + index;
      return _react2.default.createElement(_TableHeaderCell2.default, { columnWidth: displayWidth, key: contentKey });
    });
  }

  var commentHeader = void 0;
  if (commentWidth) {
    commentHeader = _react2.default.createElement(_TableHeaderCell2.default, { columnWidth: commentWidth, key: 'comment' });
  }

  var endAccessoryHeader = void 0;
  if (endAccessoryWidth) {
    endAccessoryHeader = _react2.default.createElement(_TableHeaderCell2.default, { columnWidth: endAccessoryWidth, key: 'end_accessory' });
  }

  return _react2.default.createElement(
    _terraTable2.default.Header,
    null,
    startAccessoryHeader,
    displayHeaders,
    commentHeader,
    endAccessoryHeader
  );
}

function createTableRows(rows, columnStructure) {
  var tableRows = rows.map(function (row, rowIndex) {
    var startAccessory = row.startAccessory,
        displays = row.displays,
        comment = row.comment,
        endAccessory = row.endAccessory,
        customProps = _objectWithoutProperties(row, ['startAccessory', 'displays', 'comment', 'endAccessory']);

    var startAccessoryWidth = columnStructure.startAccessoryWidth,
        displayWidths = columnStructure.displayWidths,
        commentWidth = columnStructure.commentWidth,
        endAccessoryWidth = columnStructure.endAccessoryWidth;


    var startAccessoryContent = void 0;
    if (startAccessoryWidth) {
      var content = startAccessory != null ? startAccessory : ' ';
      startAccessoryContent = _react2.default.createElement(_terraTable2.default.Cell, { content: content, key: 'start_accessory' });
    }

    var displayContent = void 0;
    if (displayWidths) {
      displayContent = displayWidths.slice(0, 8).map(function (display, index) {
        var contentKey = 'display_' + index;
        var content = row.displays[index] != null ? row.displays[index] : ' ';
        return _react2.default.createElement(_terraTable2.default.Cell, { content: content, key: contentKey });
      });
    }

    var commentContent = void 0;
    if (commentWidth) {
      var _content = comment != null ? comment : ' ';
      commentContent = _react2.default.createElement(_terraTable2.default.Cell, { content: _content, key: 'comment' });
    }

    var endAccessoryContent = void 0;
    if (endAccessoryWidth) {
      var _content2 = endAccessory != null ? endAccessory : ' ';
      endAccessoryContent = _react2.default.createElement(_terraTable2.default.Cell, { content: _content2, key: 'end_accessory' });
    }

    var rowKey = rowIndex;
    var isSelected = rowKey === 0;
    console.log(isSelected);
    return _react2.default.createElement(
      _terraTable2.default.Row,
      _extends({}, customProps, { key: rowKey }),
      startAccessoryContent,
      displayContent,
      commentContent,
      endAccessoryContent
    );
  });

  return tableRows;
}

function createTableView(columnWidths, rows, tableStyles) {
  var tableHeader = createTableHeader(columnWidths);
  var tableRows = createTableRows(rows, columnWidths);
  return _react2.default.createElement(
    _terraTable2.default,
    tableStyles,
    tableHeader,
    _react2.default.createElement(
      _terraTable2.default.SingleSelectableRows,
      null,
      tableRows
    )
  );
}

exports.default = createTableView;