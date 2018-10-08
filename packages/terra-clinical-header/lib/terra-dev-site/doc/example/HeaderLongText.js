'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('terra-clinical-header/lib/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LongTextWithButtons = function LongTextWithButtons() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, {
      title: 'Lorem ipsum dolor sit amet, sea meis iisque petentium an. Vero copiosae eu eos. Usu ocurreret definiebas eu, vim esse duis habemus at, vix at alii ubique. Nobis meliore principes te cum. Ei quando eirmod oportere eum, ei nonumy eruditi eum. In qui odio euripidis, habeo mundi praesent vim et.'
    })
  );
};
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
exports.default = LongTextWithButtons;