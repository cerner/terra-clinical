'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./ItemCollection.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The column type of the header cell.
   **/
  columnType: _propTypes2.default.string
};

var defaultProps = {
  columnType: ''
};

var TableHeaderCell = function TableHeaderCell(_ref) {
  var columnType = _ref.columnType,
      customProps = _objectWithoutProperties(_ref, ['columnType']);

  var attributes = _extends({}, customProps);
  attributes.className = (0, _classnames2.default)(['terraClinical-ItemCollection-column', _defineProperty({}, 'terraClinical-ItemCollection-column--' + columnType, columnType)]);

  return _react2.default.createElement('th', attributes);
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

exports.default = TableHeaderCell;