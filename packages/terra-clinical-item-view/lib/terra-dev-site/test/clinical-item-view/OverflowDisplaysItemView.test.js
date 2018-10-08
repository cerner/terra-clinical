'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconAlert = require('terra-icon/lib/icon/IconAlert');

var _IconAlert2 = _interopRequireDefault(_IconAlert);

var _IconInformation = require('terra-icon/lib/icon/IconInformation');

var _IconInformation2 = _interopRequireDefault(_IconInformation);

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

var accessoryStart = function accessoryStart(id) {
  return _react2.default.createElement(_IconAlert2.default, { id: id });
};
var accessoryEnd = function accessoryEnd(id) {
  return _react2.default.createElement(_IconInformation2.default, { id: id });
};
var comment = function comment(id) {
  return _react2.default.createElement(_ItemView2.default.Comment, { id: id, text: 'comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1comment1' });
};

var views = function views() {
  return _react2.default.createElement(
    'div',
    { style: { maxWidth: '900px' } },
    _react2.default.createElement(
      'p',
      null,
      'Applied width of 900px to show the default vs truncated styling.'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Full Examples - Default'
    ),
    _react2.default.createElement(_ItemView2.default, { comment: comment(1), startAccessory: accessoryStart(5), endAccessory: accessoryEnd(9), displays: displays, id: 'ItemView-one-wrap' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ItemView2.default, { comment: comment(2), startAccessory: accessoryStart(6), endAccessory: accessoryEnd(10), displays: displays, layout: 'twoColumns', id: 'ItemView-two-wrap' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      null,
      'Full Examples - Truncated'
    ),
    _react2.default.createElement(_ItemView2.default, { displays: displays, isTruncated: true, comment: comment(3), startAccessory: accessoryStart(7), endAccessory: accessoryEnd(11), textEmphasis: 'start', id: 'ItemView-one-truncate' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_ItemView2.default, { displays: displays, isTruncated: true, comment: comment(4), startAccessory: accessoryStart(8), endAccessory: accessoryEnd(12), layout: 'twoColumns', textEmphasis: 'start', id: 'ItemView-two-truncate' })
  );
};

exports.default = views;