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

require('terra-base/lib/baseStyles');

var _DetailList = require('./DetailList.scss');

var _DetailList2 = _interopRequireDefault(_DetailList);

var _DetailListItem = require('./DetailListItem');

var _DetailListItem2 = _interopRequireDefault(_DetailListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var cx = _bind2.default.bind(_DetailList2.default);

var propTypes = {
  /**
   * The detail view list title to be displayed above the list item(s).
   */
  title: _propTypes2.default.string,

  /**
   * The detail item(s) to display information. Must be either a
   * DetailListItem element or array of DetailListItem elements.
   */
  children: _propTypes2.default.oneOfType([_propTypes2.default.objectOf(_DetailListItem2.default), _propTypes2.default.arrayOf(_propTypes2.default.objectOf(_DetailListItem2.default))])
};

var defaultProps = {
  title: undefined,
  children: undefined
};

var DetailList = function DetailList(_ref) {
  var title = _ref.title,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['title', 'children']);

  var titleContent = void 0;
  if (title) {
    titleContent = _react2.default.createElement(
      'div',
      { className: cx('title') },
      title
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { 'data-terra-clincial-detail-list': true, className: customProps.className }),
    titleContent,
    _react2.default.createElement(
      'div',
      { className: cx('list') },
      children
    )
  );
};

DetailList.propTypes = propTypes;
DetailList.defaultProps = defaultProps;

exports.default = DetailList;