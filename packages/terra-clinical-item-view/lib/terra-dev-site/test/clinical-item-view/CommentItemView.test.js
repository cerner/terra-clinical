'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemView = require('../../../ItemView');

var _ItemView2 = _interopRequireDefault(_ItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comment = function comment(id) {
  return _react2.default.createElement(_ItemView2.default.Comment, { id: id, text: 'comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1' });
};

var ItemViews = function ItemViews() {
  return _react2.default.createElement(
    'div',
    { style: { width: '250px' } },
    _react2.default.createElement(
      'h2',
      null,
      'Default'
    ),
    _react2.default.createElement(_ItemView2.default, { comment: comment(1), id: 'ItemView1' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Truncated'
    ),
    _react2.default.createElement(_ItemView2.default, { isTruncated: true, comment: comment(2), id: 'ItemView2' })
  );
};

exports.default = ItemViews;