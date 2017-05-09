'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SingleSelectList = require('terra-list/lib/SingleSelectList');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

var _terraClinicalItemView = require('terra-clinical-item-view');

var _terraClinicalItemView2 = _interopRequireDefault(_terraClinicalItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function createListView(rows, listStyles, selectedIndex, handleSelection) {
  var listContent = rows.map(function (row, rowIndex) {
    var selected = rowIndex === selectedIndex;
    var contentKey = rowIndex;

    var itemStyles = row.itemStyles,
        itemElements = _objectWithoutProperties(row, ['itemStyles']);

    var listItemContent = _react2.default.createElement(_terraClinicalItemView2.default, _extends({}, itemElements, itemStyles));
    return _react2.default.createElement(_SingleSelectList2.default.Item, { key: contentKey, content: listItemContent, isSelectable: true, isSelected: selected });
  });

  return _react2.default.createElement(
    _SingleSelectList2.default,
    _extends({ onChange: handleSelection }, listStyles),
    listContent
  );
}

exports.default = createListView;