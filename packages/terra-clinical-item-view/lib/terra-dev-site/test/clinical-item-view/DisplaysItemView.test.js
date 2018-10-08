'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemView = require('../../../ItemView');

var _ItemView2 = _interopRequireDefault(_ItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var display1 = _react2.default.createElement(_ItemView2.default.Display, { text: 'display1display1display1display1display1display1display1display1display1display1display1display1display1display1', key: '123' });
var display2 = _react2.default.createElement(_ItemView2.default.Display, { text: 'display2display2display2display2display2display2display2display2display2display2display2display2display2display2', key: '124' });
var display3 = _react2.default.createElement(_ItemView2.default.Display, { text: 'display 3', key: '125' });
var display4 = _react2.default.createElement(_ItemView2.default.Display, { text: 'display 4', key: '126' });
var display5 = _react2.default.createElement(_ItemView2.default.Display, { text: 'display 5', key: '127' });
var display6 = _react2.default.createElement(_ItemView2.default.Display, { text: 'display 6', key: '128' });
var displays = [display1, display2, display3, display4, display5, display6];

var views = function views() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'One Column Layout'
    ),
    _react2.default.createElement(_ItemView2.default, { displays: displays, id: 'test-displays' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Two Column Layout '
    ),
    _react2.default.createElement(_ItemView2.default, { displays: displays, layout: 'twoColumns', id: 'test-displays-two' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Two Column Layout with Start TextEmphasis'
    ),
    _react2.default.createElement(_ItemView2.default, { displays: displays, layout: 'twoColumns', textEmphasis: 'start', id: 'test-displays-two-start' })
  );
};

exports.default = views;