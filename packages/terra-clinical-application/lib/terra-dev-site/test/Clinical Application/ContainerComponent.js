'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraAppDelegate = require('terra-app-delegate');

var _terraAppDelegate2 = _interopRequireDefault(_terraAppDelegate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContainerComponent = function ContainerComponent(_ref) {
  var app = _ref.app;
  return _react2.default.createElement(
    'div',
    { className: 'test-ContainerComponent' },
    app ? 'App is present' : 'App is not present'
  );
};

ContainerComponent.propTypes = {
  app: _terraAppDelegate2.default.propType
};

exports.default = ContainerComponent;