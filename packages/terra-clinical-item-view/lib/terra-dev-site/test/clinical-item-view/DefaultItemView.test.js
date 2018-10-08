'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemView = require('../../../ItemView');

var _ItemView2 = _interopRequireDefault(_ItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultItemView = function DefaultItemView() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Given no props, the div is created, but there is no content to show. The ItemView is outlined below.'
    ),
    _react2.default.createElement(
      'div',
      { style: { border: '1px solid' } },
      _react2.default.createElement(_ItemView2.default, { id: 'ItemView' })
    )
  );
};

exports.default = DefaultItemView;