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

var display1 = _react2.default.createElement(_ItemView2.default.Display, { text: 'Display for context' });
var displays = [display1, display1, display1, display1, display1, display1];

var views = function views() {
  return _react2.default.createElement(
    'div',
    { style: { maxWidth: '700px', border: '1px grey solid' } },
    _react2.default.createElement(
      'p',
      null,
      'Applied width of 700px to show the start and end accessory alignment.'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Start Acessory'
    ),
    _react2.default.createElement(_ItemView2.default, {
      startAccessory: _react2.default.createElement(_IconAlert2.default, { id: 'StartAccessory' }),
      id: 'test-start-accessory'
    }),
    _react2.default.createElement(
      'h2',
      null,
      'End Acessory'
    ),
    _react2.default.createElement(_ItemView2.default, {
      endAccessory: _react2.default.createElement(_IconInformation2.default, { id: 'EndAccessory' }),
      id: 'test-end-accessory'
    }),
    _react2.default.createElement(
      'h2',
      null,
      'Start and End Acessory'
    ),
    _react2.default.createElement(_ItemView2.default, {
      startAccessory: _react2.default.createElement(_IconAlert2.default, { id: 'StartAccessory2' }),
      displays: displays,
      endAccessory: _react2.default.createElement(
        'button',
        { type: 'button', id: 'EndAccessory2', size: 'medium' },
        'Disclose'
      ),
      layout: 'twoColumns',
      accessoryAlignment: 'alignTop',
      id: 'test-both-accessory-top'
    }),
    _react2.default.createElement(
      'h2',
      null,
      'Reserve Start Acessory Space'
    ),
    _react2.default.createElement(_ItemView2.default, {
      reserveStartAccessorySpace: true,
      displays: displays,
      endAccessory: _react2.default.createElement(
        'button',
        { type: 'button', id: 'EndAccessory3', size: 'medium' },
        'Disclose'
      ),
      layout: 'twoColumns',
      id: 'test-reserve-start-accessory'
    }),
    _react2.default.createElement(
      'h2',
      null,
      'Start Accessory with Font Size 100px'
    ),
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'The max-height and max-width of 40px is maintained'
        )
      )
    ),
    _react2.default.createElement(_ItemView2.default, { startAccessory: _react2.default.createElement(_IconAlert2.default, null), id: 'test-scale', style: { fontSize: '100px' } })
  );
};

exports.default = views;