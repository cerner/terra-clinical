'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Application = require('../../../Application');

var _Application2 = _interopRequireDefault(_Application);

var _ContainerComponent = require('./ContainerComponent');

var _ContainerComponent2 = _interopRequireDefault(_ContainerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _Application2.default,
    { id: 'Application' },
    _react2.default.createElement(_ContainerComponent2.default, null)
  );
};