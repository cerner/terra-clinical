'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraClinicalItemDisplay = require('terra-clinical-item-display');

var _terraClinicalItemDisplay2 = _interopRequireDefault(_terraClinicalItemDisplay);

require('terra-base/lib/baseStyles');

require('./ItemView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The column layout in which to present the displays.
   */
  layout: _propTypes2.default.oneOf(['oneColumn', 'twoColumns']),
  /**
   * The text color emphasis when using two columns.
   */
  textEmphasis: _propTypes2.default.oneOf(['default', 'start']),
  /**
   * Whether or not all text on the view should be truncated.
   */
  isTruncated: _propTypes2.default.bool,
  /**
   * The vertical alignment of the start and end accesories.
   */
  accessoryAlignment: _propTypes2.default.oneOf(['alignTop', 'alignCenter']),
  /**
   * The react element to be placed in the start aligned accessory position.
   */
  startAccessory: _propTypes2.default.element,
  /**
   * The react element to be placed in the end aligned accessory position.
   */
  endAccessory: _propTypes2.default.element,
  /**
   * An array of react display elements to be presented.
   */
  displays: _propTypes2.default.arrayOf(_propTypes2.default.element),
  /**
   * The react element for the comment element.
   */
  comment: _propTypes2.default.element
};

var defaultProps = {
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  startAccessory: undefined,
  endAccessory: undefined,
  displays: [],
  comment: undefined
};

var ItemView = function (_React$Component) {
  _inherits(ItemView, _React$Component);

  function ItemView() {
    _classCallCheck(this, ItemView);

    return _possibleConstructorReturn(this, (ItemView.__proto__ || Object.getPrototypeOf(ItemView)).apply(this, arguments));
  }

  _createClass(ItemView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          layout = _props.layout,
          textEmphasis = _props.textEmphasis,
          isTruncated = _props.isTruncated,
          accessoryAlignment = _props.accessoryAlignment,
          startAccessory = _props.startAccessory,
          endAccessory = _props.endAccessory,
          displays = _props.displays,
          comment = _props.comment,
          customProps = _objectWithoutProperties(_props, ['layout', 'textEmphasis', 'isTruncated', 'accessoryAlignment', 'startAccessory', 'endAccessory', 'displays', 'comment']);

      var viewClassNames = (0, _classnames2.default)(['terraClinical-ItemView', { 'terraClinical-ItemView--isTruncated': isTruncated }, _defineProperty({}, 'terraClinical-ItemView--' + layout, layout), customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: viewClassNames }),
        ItemView.renderAccessory(startAccessory, accessoryAlignment),
        _react2.default.createElement(
          'div',
          { className: 'terraClinical-ItemView-body' },
          ItemView.renderRows(displays, layout, textEmphasis),
          comment
        ),
        ItemView.renderAccessory(endAccessory, accessoryAlignment)
      );
    }
  }], [{
    key: 'renderAccessory',
    value: function renderAccessory(accessory, accessoryAlignment) {
      var accessoryClassNames = (0, _classnames2.default)(['terraClinical-ItemView-accessory', _defineProperty({}, 'terraClinical-ItemView-accessory--' + accessoryAlignment, accessoryAlignment)]);

      var accessorySection = void 0;
      if (accessory) {
        accessorySection = _react2.default.createElement(
          'div',
          { className: accessoryClassNames },
          accessory
        );
      }
      return accessorySection;
    }
  }, {
    key: 'renderRows',
    value: function renderRows(displays, layout, emphasis) {
      if (displays === null || displays === undefined || !displays.length) {
        return undefined;
      }

      var displayGroups = [];
      var displaysSlice = displays.slice(0, 8);
      var spliceValue = layout === 'twoColumns' ? 2 : 1;

      while (displaysSlice.length) {
        displayGroups.push(displaysSlice.splice(0, spliceValue));
      }

      return _react2.default.createElement(
        'div',
        { className: 'terraClinical-ItemView-rowContainer' },
        displayGroups.map(function (group, index) {
          var row = ItemView.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })
      );
    }
  }, {
    key: 'renderRow',
    value: function renderRow(row, rowIndex, rowCount, emphasis) {
      var rowKey = rowIndex;
      return _react2.default.createElement(
        'div',
        { className: 'terraClinical-ItemView-row', key: rowKey },
        row.map(function (display, contentIndex) {
          var contentKey = contentIndex;
          var contentClasses = ItemView.classesForContent(rowIndex, rowCount, contentIndex, emphasis);
          return _react2.default.createElement(
            'div',
            { className: contentClasses, key: contentKey },
            display
          );
        })
      );
    }
  }, {
    key: 'classesForContent',
    value: function classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
      var classes = void 0;
      if (emphasis === 'start') {
        classes = ItemView.startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
      } else {
        classes = ItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
      }
      return ['terraClinical-ItemView-content'].concat(classes).join(' ');
    }
  }, {
    key: 'defaultEmphasisContentClassesFromIndexes',
    value: function defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
      var contentSize = 'terraClinical-ItemView-content--primarySize';
      var contentColor = 'terraClinical-ItemView-content--primaryColor';

      if (rowIndex > 0) {
        contentSize = 'terraClinical-ItemView-content--secondarySize';
      }

      if (rowCount === 2 && rowIndex === 1) {
        contentColor = 'terraClinical-ItemView-content--secondaryColor';
      } else if (rowIndex >= 2) {
        contentColor = 'terraClinical-ItemView-content--secondaryColor';
      }

      return [contentSize, contentColor];
    }
  }, {
    key: 'startEmphasisContentClassesFromIndexes',
    value: function startEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
      if (contentIndex === 1) {
        return ['terraClinical-ItemView-content--secondarySize', 'terraClinical-ItemView-content--secondaryColor'];
      }

      return ItemView.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
  }]);

  return ItemView;
}(_react2.default.Component);

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;
ItemView.Display = _terraClinicalItemDisplay2.default;
ItemView.Comment = _terraClinicalItemDisplay2.default.Comment;

exports.default = ItemView;