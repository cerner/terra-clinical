'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemCollection = require('../../../ItemCollection');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultItem = _react2.default.createElement(
  _ItemCollection2.default.Item,
  {
    startAccessory: _react2.default.createElement(
      'div',
      null,
      'S'
    ),
    comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
    endAccessory: _react2.default.createElement(
      'div',
      null,
      'E'
    )
  },
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' })
);

var DividedList = function DividedList() {
  return _react2.default.createElement(
    _ItemCollection2.default,
    {
      hasStartAccessory: true,
      numberOfDisplays: 3,
      hasComment: true,
      hasEndAccessory: true,
      isListDivided: true
    },
    defaultItem,
    defaultItem,
    defaultItem
  );
};

var ListStyles = function ListStyles() {
  return _react2.default.createElement(
    'div',
    { id: 'ListStyles' },
    _react2.default.createElement(
      'h3',
      null,
      'List Style - Divided '
    ),
    _react2.default.createElement(DividedList, null)
  );
};

exports.default = ListStyles;