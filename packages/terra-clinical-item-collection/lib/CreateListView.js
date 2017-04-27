'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraClinicalItemView = require('terra-clinical-item-view');

var _terraClinicalItemView2 = _interopRequireDefault(_terraClinicalItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import List from 'terra-list';


// function createListView(rows, listStyles) {
function createListView(rows) {
  return rows.map(function (row, rowIndex) {
    var contentKey = rowIndex;

    var itemStyles = row.itemStyles,
        itemElements = _objectWithoutProperties(row, ['itemStyles']);

    return _react2.default.createElement(_terraClinicalItemView2.default, _extends({ key: contentKey }, itemElements, itemStyles));
  });
}

exports.default = createListView;

// function createListView(rows, listStyles) {
//   const listContent = rows.map((row, rowIndex) => {
//     const contentKey = rowIndex;
//     const { itemStyles, ...itemElements } = row;
//     return (
//       <SingleSelectList.Item content={<ItemView key={contentKey} {...itemElements} {...itemStyles} />} key={contentKey} />
//     );
//   })
//
//   return (
//     <List {...listStyles}>
//       {listContent}
//     </List>
//
//   );
// }