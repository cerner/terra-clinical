'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ItemCollection = require('../../../ItemCollection');

var _ItemCollection2 = _interopRequireDefault(_ItemCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultItemCollection = function (_React$Component) {
  _inherits(DefaultItemCollection, _React$Component);

  function DefaultItemCollection(props) {
    _classCallCheck(this, DefaultItemCollection);

    var _this = _possibleConstructorReturn(this, (DefaultItemCollection.__proto__ || Object.getPrototypeOf(DefaultItemCollection)).call(this, props));

    _this.state = { selectedItemKey: '1' };
    _this.handleSelection = _this.handleSelection.bind(_this);
    return _this;
  }

  _createClass(DefaultItemCollection, [{
    key: 'handleSelection',
    value: function handleSelection(event, selectedItemKey) {
      this.setState({ selectedItemKey: selectedItemKey });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'This a POC Selectable ItemCollection Example.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'This example it set up to be a single-selection example, however the Item Collection gives implementors the flexibilty to create their own selection implementation.'
        ),
        _react2.default.createElement(
          'p',
          { id: 'selected-key' },
          'Selected Item:',
          this.state.selectedItemKey
        ),
        _react2.default.createElement(
          _ItemCollection2.default,
          {
            id: 'ItemCollection',
            onSelect: this.handleSelection,
            hasStartAccessory: true,
            numberOfDisplays: 3,
            hasComment: true,
            hasEndAccessory: true,
            breakpoint: 'medium'
          },
          _react2.default.createElement(
            _ItemCollection2.default.Item,
            {
              id: 'item1',
              key: '1',
              isSelectable: true,
              isSelected: this.state.selectedItemKey === '1',
              startAccessory: _react2.default.createElement(_ItemCollection2.default.Comment, null),
              comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
              endAccessory: _react2.default.createElement(
                'button',
                { type: 'button', size: 'medium' },
                'Disclose'
              ),
              showListItemChevron: true
            },
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' })
          ),
          _react2.default.createElement(
            _ItemCollection2.default.Item,
            {
              id: 'item2',
              key: '2',
              isSelected: this.state.selectedItemKey === '2',
              isSelectable: true,
              comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' }),
              endAccessory: _react2.default.createElement(
                'button',
                { type: 'button', size: 'medium' },
                'Disclose'
              ),
              showListItemChevron: true
            },
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' })
          ),
          _react2.default.createElement(
            _ItemCollection2.default.Item,
            {
              id: 'item3',
              key: '3',
              isSelected: this.state.selectedItemKey === '3',
              isSelectable: true,
              startAccessory: _react2.default.createElement(_ItemCollection2.default.Comment, null),
              comment: _react2.default.createElement(_ItemCollection2.default.Comment, { text: 'test comment' })
            },
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 1' }),
            _react2.default.createElement(_ItemCollection2.default.Display, { text: 'Display 2' })
          )
        )
      );
    }
  }]);

  return DefaultItemCollection;
}(_react2.default.Component);

exports.default = DefaultItemCollection;