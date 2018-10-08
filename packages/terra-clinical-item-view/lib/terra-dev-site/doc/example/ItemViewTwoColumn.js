'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconPerson = require('terra-icon/lib/icon/IconPerson');

var _IconPerson2 = _interopRequireDefault(_IconPerson);

var _ItemView = require('terra-clinical-item-view/lib/ItemView');

var _ItemView2 = _interopRequireDefault(_ItemView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var display1 = _react2.default.createElement(_ItemView2.default.Display, { icon: _react2.default.createElement(_IconPerson2.default, null), text: 'Asif Khan' });

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var display2 = _react2.default.createElement(_ItemView2.default.Display, { text: 'Care Position: Primary' });
var display3 = _react2.default.createElement(_ItemView2.default.Display, { text: 'Room 100A' });
var display4 = _react2.default.createElement(_ItemView2.default.Display, { text: 'Acuity: 5' });
var display5 = _react2.default.createElement(_ItemView2.default.Display, { text: 'Start Time: 08-05-2016 12:00:00' });
var display6 = _react2.default.createElement(_ItemView2.default.Display, { text: 'End Time: 08-05-2016 16:00:00' });
var displays = [display1, display2, display3, display4, display5, display6];

exports.default = function () {
  return _react2.default.createElement(_ItemView2.default, { displays: displays, layout: 'twoColumns' });
};