'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemCollection = require('../../../ItemCollection');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var oneColumnItem = _react2.default.createElement(
  _ItemCollection2.default.Item,
  {
    startAccessory: 'S',
    comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
    endAccessory: 'E',
    listItemLayout: 'oneColumn'
  },
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1: Shows one column layout.' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' })
);

var twoColumnItem = _react2.default.createElement(
  _ItemCollection2.default.Item,
  {
    startAccessory: 'S',
    comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
    endAccessory: 'E',
    listItemLayout: 'twoColumns'
  },
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1: Shows two column layout.' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
  _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' })
);

var LayoutDisplay = function LayoutDisplay() {
  return _react2.default.createElement(
    _ItemCollection2.default,
    {
      hasStartAccessory: true,
      numberOfDisplays: 5,
      hasComment: true,
      hasEndAccessory: true,
      isTablePadded: true
    },
    oneColumnItem,
    twoColumnItem
  );
};

var AlignmentDisplay = function AlignmentDisplay() {
  return _react2.default.createElement(
    _ItemCollection2.default,
    {
      hasStartAccessory: true,
      numberOfDisplays: 5,
      hasComment: true,
      hasEndAccessory: true,
      isTablePadded: true
    },
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        startAccessory: 'S',
        comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
        endAccessory: 'E',
        accessoryAlignment: 'alignTop'
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1: Shows top accessory alignment.' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' })
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        startAccessory: 'S',
        comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
        endAccessory: 'E'
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1: Shows center accessory alignment.' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' })
    )
  );
};

var ItemStyles = function ItemStyles() {
  return _react2.default.createElement(
    'div',
    { id: 'ItemStyles' },
    _react2.default.createElement(
      'h3',
      null,
      'List Item Layout - One Column vs Two Columns '
    ),
    _react2.default.createElement(LayoutDisplay, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h3',
      null,
      'Accessory Alignment - Top vs Center '
    ),
    _react2.default.createElement(AlignmentDisplay, null),
    _react2.default.createElement('br', null)
  );
};

exports.default = ItemStyles;