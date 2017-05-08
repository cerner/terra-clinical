'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./ItemCollection.scss');

var _breakpoint = require('./breakpoint');

var _breakpoint2 = _interopRequireDefault(_breakpoint);

var _CreateListView = require('./CreateListView');

var _CreateListView2 = _interopRequireDefault(_CreateListView);

var _CreateTableView = require('./CreateTableView');

var _CreateTableView2 = _interopRequireDefault(_CreateTableView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
  * The breakpoint to switch from a table view to a list view. Breakpoint options are tiny, small, medium, large, or huge.
  */
  breakpoint: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The columsn and widths to apply to the table columns. Widths options are tiny, small, medium, large, or huge.
   **/
  columnWidths: _react.PropTypes.shape({
    startAccessoryWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    displayWidths: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])),
    commentWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    endAccessoryWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
  }).isRequired,
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   **/
  tableStyles: _react.PropTypes.shape({
    isPadded: _react.PropTypes.bool,
    isStriped: _react.PropTypes.bool
  }),
  /**
   * The styles to spread to the list. List style options are isDivided and hasChevrons.
   **/
  listStyles: _react.PropTypes.shape({
    isDivided: _react.PropTypes.bool,
    hasChevrons: _react.PropTypes.bool
  }),
  /**
   * The array of hashes to be displayed as rows. Each hash can contain a startAccessory, endAccessory,
   * comment, array of displays and a itemStyles hash. The item style options are layout, textEmphasis,
   * isTruncated and accessoryAlignment.
   **/
  rows: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    startAccessory: _react.PropTypes.element,
    displays: _react.PropTypes.arrayOf(_react.PropTypes.element),
    comment: _react.PropTypes.element,
    endAccessory: _react.PropTypes.element,
    itemStyles: _react.PropTypes.shape({
      layout: _react.PropTypes.oneOf(['oneColumn', 'twoColumns']),
      textEmphasis: _react.PropTypes.oneOf(['default', 'start']),
      isTruncated: _react.PropTypes.bool,
      accessoryAlignment: _react.PropTypes.oneOf(['alignTop', 'alignCenter'])
    })
  }))
};

var defaultProps = {
  columnWidths: {},
  listStyles: undefined,
  tableStyles: undefined,
  rows: [],
  breakpoint: 'small'
};

var ItemCollection = function (_React$Component) {
  _inherits(ItemCollection, _React$Component);

  function ItemCollection(props) {
    _classCallCheck(this, ItemCollection);

    var _this = _possibleConstructorReturn(this, (ItemCollection.__proto__ || Object.getPrototypeOf(ItemCollection)).call(this, props));

    _this.state = { display: 'table' };
    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    return _this;
  }

  _createClass(ItemCollection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
        _this2.handleResize(entries[0].contentRect.width);
      });
      this.resizeObserver.observe(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.resizeObserver.disconnect(this.container);
      this.container = null;
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = node.parentNode;
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      var display = void 0;
      var breakpoint = (0, _breakpoint2.default)(this.props.breakpoint);
      if (width < breakpoint) {
        display = 'list';
      } else {
        display = 'table';
      }

      if (this.state.display !== display) {
        this.setState({ display: display });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columnWidths = _props.columnWidths,
          listStyles = _props.listStyles,
          tableStyles = _props.tableStyles,
          rows = _props.rows,
          breakpoint = _props.breakpoint,
          customProps = _objectWithoutProperties(_props, ['columnWidths', 'listStyles', 'tableStyles', 'rows', 'breakpoint']);

      var attributes = _extends({}, customProps);
      attributes.className = (0, _classnames2.default)(['terraClinical-ItemCollection', 'terraClinical-ItemCollection--' + this.state.display + 'View', attributes.className]);

      var collectionDisplay = void 0;
      if (this.state.display === 'table') {
        collectionDisplay = (0, _CreateTableView2.default)(columnWidths, rows, tableStyles);
      } else if (this.state.display === 'list') {
        collectionDisplay = (0, _CreateListView2.default)(rows, listStyles);
      }

      return _react2.default.createElement(
        'div',
        _extends({ ref: this.setContainer }, attributes),
        _react2.default.createElement(
          'h2',
          null,
          'Item Collection - ',
          this.state.display
        ),
        collectionDisplay
      );
    }
  }]);

  return ItemCollection;
}(_react2.default.Component);

ItemCollection.propTypes = propTypes;
ItemCollection.defaultProps = defaultProps;

exports.default = ItemCollection;