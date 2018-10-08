'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DetailView = require('../../../../DetailView');

var _DetailView2 = _interopRequireDefault(_DetailView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var item = _react2.default.createElement(
  'p',
  null,
  'A Detail List Item'
);
var item2 = _react2.default.createElement(
  'p',
  null,
  'A Detail List Item to prove float concept when screen readjusts.'
);

var DefaultDetailList = function DefaultDetailList() {
  return _react2.default.createElement(
    _DetailView2.default.DetailList,
    { title: 'Detail List Title', key: 'detailInfo-1' },
    _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item }),
    _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item }),
    _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item2 }),
    _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item }),
    _react2.default.createElement(_DetailView2.default.DetailListItem, { item: item })
  );
};

exports.default = DefaultDetailList;