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
  * The breakpoint to switch from a table view to a list view. Breakpoint options are 'tiny', 'small', 'medium', 'large', 'huge'.
  */
  breakpoint: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * The widths to apply to the table columns. Widths options are 'tiny', 'small', 'medium', 'large', 'huge'.
   **/
  columnWidths: _react.PropTypes.shape({
    startAccessoryWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    displayWidths: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])),
    commentWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
    endAccessoryWidth: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
  }).isRequired,
  /**
   * The item styles to spread to the table:
   *    isPadded: Whether or not the table cells should be padded.
   *    isStriped: Whether or not the rows should be zebra striped.
   **/
  itemStyles: _react.PropTypes.shape({
    isPadded: _react.PropTypes.bool,
    isStriped: _react.PropTypes.bool
  }),
  /**
   * The item styles to spread to the clincial items:
   *    layout: The column layout in which to present the displays.
   *    textEmphasis: The text color emphasis when using two columns.
   *    isTruncated: Whether or not all text on the view should be truncated.
   *    accessoryAlignment: The vertical alignment of the start and end accesories.
   **/
  tableStyles: _react.PropTypes.shape({
    layout: _react.PropTypes.oneOf(['oneColumn', 'twoColumns']),
    textEmphasis: _react.PropTypes.oneOf(['default', 'start']),
    isTruncated: _react.PropTypes.bool,
    accessoryAlignment: _react.PropTypes.oneOf(['alignTop', 'alignCenter'])
  }),
  /**
   * The rows to display:
   *    startAccessory: The react element to be placed in the first column.
   *    displays:
   *    comment:
   *    endAccessory: The react element to be placed in the last column.
   **/
  rows: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    startAccessory: _react.PropTypes.element,
    displays: _react.PropTypes.arrayOf(_react.PropTypes.element),
    comment: _react.PropTypes.element,
    endAccessory: _react.PropTypes.element
  }))
};

var defaultProps = {
  columnWidths: null,
  itemStyles: null,
  tableStyles: null,
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
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    return _this;
  }

  _createClass(ItemCollection, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.container) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.handleResize(entries[0].contentRect.width);
        });
        this.resizeObserver.observe(this.container);
      } else {
        this.handleResize(window.innerWidth);
        window.addEventListener('resize', this.handleWindowResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        this.resizeObserver.disconnect(this.container);
        this.container = null;
      } else {
        window.removeEventListener('resize', this.handleWindowResize);
      }
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
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.handleResize(window.innerWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          columnWidths = _props.columnWidths,
          itemStyles = _props.itemStyles,
          tableStyles = _props.tableStyles,
          rows = _props.rows,
          breakpoint = _props.breakpoint,
          customProps = _objectWithoutProperties(_props, ['columnWidths', 'itemStyles', 'tableStyles', 'rows', 'breakpoint']);

      var attributes = _extends({}, customProps);
      attributes.className = (0, _classnames2.default)(['terraClinical-ItemCollection', attributes.className]);

      var collectionDisplay = void 0;
      if (this.state.display === 'table') {
        collectionDisplay = (0, _CreateTableView2.default)(columnWidths, rows, tableStyles);
      } else if (this.state.display === 'list') {
        collectionDisplay = (0, _CreateListView2.default)(rows, itemStyles);
      }

      return _react2.default.createElement(
        'div',
        attributes,
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