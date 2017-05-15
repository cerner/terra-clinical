'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  items: _react.PropTypes.array,
  /**
   * When true, the transition between slides is not animated.
   */
  animationIsDisabled: _react.PropTypes.bool
};

var SlideGroup = function SlideGroup(props) {
  // We don't want to render the transition group when no children exist. Doing so will cause the first child to
  // animate into place, which in most cases we do not want.
  if (!props.items || !props.items.length) {
    return null;
  }

  // We use the key from the first child as the key for the transition group. This will cause the transition group to
  // rerender when the root child changes and subsequently prevent that child from animating into position.
  var transitionGroupKey = props.items[0].key;

  var itemCount = props.items.length;

  return _react2.default.createElement(
    _CSSTransitionGroup2.default,
    {
      key: transitionGroupKey,
      transitionEnter: !props.animationIsDisabled,
      transitionLeave: !props.animationIsDisabled,
      transitionName: 'terraClinical-Slide',
      transitionEnterTimeout: 300,
      transitionLeaveTimeout: 300
    },
    props.items.map(function (item, index) {
      return _react2.default.createElement(
        _Slide2.default,
        { key: item.key, isHidden: index !== itemCount - 1 },
        item
      );
    })
  );
};

SlideGroup.propTypes = propTypes;

exports.default = SlideGroup;