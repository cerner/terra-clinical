'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemCollection = require('../../../ItemCollection');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultItemCollection = function DefaultItemCollection() {
  return _react2.default.createElement(
    _ItemCollection2.default,
    {
      id: 'VaryingItems',
      isListDivided: true,
      hasStartAccessory: true,
      numberOfDisplays: 4,
      hasComment: true,
      hasEndAccessory: true,
      breakpoint: 'small'
    },
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        listItemLayout: 'twoColumns',
        comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
        endAccessory: _react2.default.createElement(
          'button',
          { type: 'button', size: 'medium' },
          'Disclose'
        )
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' })
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        listItemLayout: 'twoColumns',
        startAccessory: _react2.default.createElement(
          'div',
          null,
          'S'
        ),
        comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' })
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' })
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        listItemLayout: 'twoColumns',
        startAccessory: _react2.default.createElement(
          'div',
          null,
          'S'
        ),
        endAccessory: _react2.default.createElement(
          'button',
          { type: 'button', size: 'medium' },
          'Disclose'
        )
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' })
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        listItemLayout: 'twoColumns',
        comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
        endAccessory: _react2.default.createElement(
          'button',
          { type: 'button', size: 'medium' },
          'Disclose'
        )
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 6' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 7' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 8' })
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        listItemLayout: 'twoColumns',
        startAccessory: _react2.default.createElement(
          'div',
          null,
          'S'
        ),
        comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
        endAccessory: _react2.default.createElement(
          'button',
          { type: 'button', size: 'medium' },
          'Disclose'
        )
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' })
    ),
    _react2.default.createElement(
      _ItemCollection2.default.Item,
      {
        listItemLayout: 'twoColumns',
        startAccessory: _react2.default.createElement(
          'div',
          null,
          'S'
        )
      },
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' })
    )
  );
};

exports.default = DefaultItemCollection;