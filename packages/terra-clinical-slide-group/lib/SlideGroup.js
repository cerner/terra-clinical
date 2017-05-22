'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

require('terra-base/lib/baseStyles');

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

require('./SlideGroup.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  items: _propTypes2.default.array,
  /**
   * When true, the transition between slides is animated.
   */
  isAnimated: _propTypes2.default.bool
};

var defaultProps = {
  isAnimated: false
};

var SlideGroup = function SlideGroup(_ref) {
  var items = _ref.items,
      isAnimated = _ref.isAnimated,
      customProps = _objectWithoutProperties(_ref, ['items', 'isAnimated']);

  // We don't want to render the transition group when no children exist. Doing so will cause the first child to
  // animate into place, which in most cases we do not want.
  if (!items || !items.length) {
    return null;
  }

  var slideGroupClassNames = (0, _classnames2.default)(['terraClinical-SlideGroup', customProps.className]);

  // We use the key from the first child as the key for the transition group. This will cause the transition group to
  // rerender when the root child changes and subsequently prevent that child from animating into position.
  var transitionGroupKey = items[0].key;

  var itemCount = items.length;

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: slideGroupClassNames }),
    _react2.default.createElement(
      _CSSTransitionGroup2.default,
      {
        key: transitionGroupKey,
        transitionEnter: isAnimated,
        transitionLeave: isAnimated,
        transitionName: 'terraClinical-Slide',
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300
      },
      items.map(function (item, index) {
        return _react2.default.createElement(
          _Slide2.default,
          { key: item.key, isHidden: index !== itemCount - 1 },
          item
        );
      })
    )
  );
};

SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;

exports.default = SlideGroup;