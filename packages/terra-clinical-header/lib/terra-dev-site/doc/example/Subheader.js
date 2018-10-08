'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Header = require('terra-clinical-header/lib/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Subheader = function Subheader() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, {
      startContent: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_terraButton2.default, { text: 'Button', style: { margin: '0 10px 0 10px' } })
      ),
      title: 'Default Subheader',
      endContent: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_terraButton2.default, { text: 'Button', style: { margin: '0 10px 0 10px' } })
      ),
      isSubheader: true
    })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = Subheader;