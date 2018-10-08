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
      id: 'ItemCollection',
      hasStartAccessory: true,
      numberOfDisplays: 8,
      hasComment: true,
      hasEndAccessory: true
    },
    _react2.default.createElement(
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
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 3' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 4' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 5' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 6' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 7' }),
      _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 8' })
    )
  );
};

exports.default = DefaultItemCollection;