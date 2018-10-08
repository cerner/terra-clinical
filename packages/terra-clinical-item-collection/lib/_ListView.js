'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

var _ItemCollectionUtils = require('./_ItemCollectionUtils');

var _ItemCollectionUtils2 = _interopRequireDefault(_ItemCollectionUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The items be rendered as a list item.
   */
  children: _propTypes2.default.node,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child is selectable.
   */
  onSelect: _propTypes2.default.func,
  /**
   * Whether or not the list items should be divided.
   */
  isListDivided: _propTypes2.default.bool,
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to
   * maintain the provided layout.
   */
  requiredElements: _propTypes2.default.shape({
    hasStartAccessory: _propTypes2.default.bool,
    numberOfDisplays: _propTypes2.default.number,
    hasComment: _propTypes2.default.bool,
    hasEndAccessory: _propTypes2.default.bool
  })
};

function createListItems(children, onSelect, requiredElements) {
  return _react2.default.Children.map(children, function (child) {
    var itemViewPieces = _ItemCollectionUtils2.default.addMissingListElements(child.props, requiredElements);
    var onSelectProps = onSelect && child.props.isSelectable ? _ItemCollectionUtils2.default.createOnSelectProps(onSelect, child.key) : {};
    return _react2.default.cloneElement(child, _extends({ view: 'list' }, onSelectProps, itemViewPieces));
  });
}

var ListView = function ListView(_ref) {
  var children = _ref.children,
      onSelect = _ref.onSelect,
      isListDivided = _ref.isListDivided,
      requiredElements = _ref.requiredElements;

  var hasSelectableChild = _react2.default.Children.toArray(children).some(function (child) {
    return child.props.isSelectable;
  });

  var listItems = createListItems(children, onSelect, requiredElements);
  var roleSpread = hasSelectableChild ? { role: 'listbox' } : {};

  return _react2.default.createElement(
    _terraList2.default,
    _extends({ 'data-terra-clinical-item-collection-list-view': true, isDivided: isListDivided }, roleSpread),
    listItems
  );
};

ListView.propTypes = propTypes;

exports.default = ListView;