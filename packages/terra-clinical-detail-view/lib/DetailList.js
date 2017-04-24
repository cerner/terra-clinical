'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./DetailList.scss');

var _DetailListItem = require('./DetailListItem');

var _DetailListItem2 = _interopRequireDefault(_DetailListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The title to be displayed above the list items.
   **/
  title: _react.PropTypes.string,

  /**
   * The detail item(s) to display information. Must be a
   * DetailListItem element.
   **/
  children: _react.PropTypes.oneOfType([_react.PropTypes.objectOf(_DetailListItem2.default), _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_DetailListItem2.default))])
};

var defaultProps = {
  title: ''
};

var DetailList = function DetailList(_ref) {
  var title = _ref.title,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['title', 'children']);

  var detailListClassNames = (0, _classnames2.default)(['terraClinical-DetailList', customProps.className]);

  var titleContent = void 0;
  if (title) {
    titleContent = _react2.default.createElement(
      'div',
      { className: 'terraClinical-DetailList-title' },
      title
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: detailListClassNames }),
    titleContent,
    _react2.default.createElement(
      'div',
      { className: 'terraClinical-DetailList-list' },
      children
    )
  );
};

DetailList.propTypes = propTypes;
DetailList.defaultProps = defaultProps;

exports.default = DetailList;