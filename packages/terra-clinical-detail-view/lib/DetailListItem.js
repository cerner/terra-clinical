'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./DetailListItem.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The item to be displayed.
   **/
  item: _react.PropTypes.element.isRequired
};

var defaultProps = {
  item: undefined
};

var DetailListItem = function DetailListItem(_ref) {
  var item = _ref.item,
      customProps = _objectWithoutProperties(_ref, ['item']);

  var detailListItemClassNames = (0, _classnames2.default)(['terraClinical-DetailListItem', customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: detailListItemClassNames }),
    item
  );
};

DetailListItem.propTypes = propTypes;
DetailListItem.defaultProps = defaultProps;

exports.default = DetailListItem;