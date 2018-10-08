'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../../../Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = _react2.default.createElement('div', {
  id: 'headerTest--content',
  style: {
    backgroundColor: 'black', height: '30px', width: '300px', margin: '0 10px 0 0'
  }
});

exports.default = function () {
  return _react2.default.createElement(_Header2.default, {
    endContent: content
  });
};