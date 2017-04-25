'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ItemCollection.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  /**
   * The column width of the header cell.
   **/
  columnWidth: _react.PropTypes.string
};

var defaultProps = {
  columnWidth: 'small'
};

var TableHeaderCell = function TableHeaderCell(_ref) {
  var columnWidth = _ref.columnWidth;

  var attributes = _extends({});
  attributes.className = (0, _classnames2.default)(['terraClinical-ItemCollection', _defineProperty({}, 'terraClinical-ItemCollection-column-width-' + columnWidth, columnWidth)]);

  return _react2.default.createElement('th', attributes);
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

exports.default = TableHeaderCell;