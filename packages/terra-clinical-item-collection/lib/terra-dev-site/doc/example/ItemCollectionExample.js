'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconAttachment = require('terra-icon/lib/icon/IconAttachment');

var _IconAttachment2 = _interopRequireDefault(_IconAttachment);

var _IconPerson = require('terra-icon/lib/icon/IconPerson');

var _IconPerson2 = _interopRequireDefault(_IconPerson);

var _IconAlert = require('terra-icon/lib/icon/IconAlert');

var _IconAlert2 = _interopRequireDefault(_IconAlert);

var _IconInformation = require('terra-icon/lib/icon/IconInformation');

var _IconInformation2 = _interopRequireDefault(_IconInformation);

var _ItemCollection = require('terra-clinical-item-collection/lib/ItemCollection');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var display1 = _react2.default.createElement(_ItemCollection2.default.Display, { icon: _react2.default.createElement(_IconPerson2.default, null), text: 'Asif Khan' });
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

var display2 = _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Care Position: Primary' });
var display3 = _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Room 100A' });
var display4 = _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Acuity: 5' });
var display5 = _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Start Time: 08-05-2016 12:00:00' });
var display6 = _react2.default.createElement(_ItemCollection2.default.Display, { text: 'End Time: 08-05-2016 16:00:00' });
var comment = _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'Faint red rash appeared at 08-05-2016 13:24:00' });

var startAccessory = _react2.default.createElement(_IconAlert2.default, null);
var endAccessory = _react2.default.createElement(_IconInformation2.default, null);

var DefaultItemCollection = function DefaultItemCollection() {
  return _react2.default.createElement(
    _ItemCollection2.default,
    {
      hasStartAccessory: true,
      numberOfDisplays: 6,
      hasComment: true,
      hasEndAccessory: true,
      isListDivided: true,
      isTableStriped: true
    },
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        startAccessory: startAccessory,
        comment: comment,
        endAccessory: endAccessory
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { icon: _react2.default.createElement(_IconPerson2.default, null), text: 'Asif Khan', textStyle: 'attention' }),
      display2,
      display3,
      display4,
      display5,
      display6
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        startAccessory: startAccessory,
        comment: comment,
        endAccessory: endAccessory,
        listItemLayout: 'twoColumns'
      },
      display1,
      display2,
      display3,
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Acuity: 5', icon: _react2.default.createElement(_IconAttachment2.default, null) }),
      display5,
      display6
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        comment: comment,
        endAccessory: endAccessory
      },
      display1,
      display2,
      display3,
      display4,
      display5,
      display6
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        comment: comment,
        endAccessory: endAccessory
      },
      display1,
      display2,
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Room 100A', textStyle: 'strikeThrough' }),
      display4,
      display5
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        startAccessory: startAccessory,
        comment: comment,
        listItemLayout: 'twoColumns'
      },
      display1,
      display2,
      display3,
      display4,
      display5,
      display6
    )
  );
};

exports.default = DefaultItemCollection;