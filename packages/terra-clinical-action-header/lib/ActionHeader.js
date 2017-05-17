'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraButtonGroup = require('terra-button-group');

var _terraButtonGroup2 = _interopRequireDefault(_terraButtonGroup);

var _IconLeft = require('terra-icon/lib/icon/IconLeft');

var _IconLeft2 = _interopRequireDefault(_IconLeft);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

var _IconMinimize = require('terra-icon/lib/icon/IconMinimize');

var _IconMinimize2 = _interopRequireDefault(_IconMinimize);

var _IconMaximize = require('terra-icon/lib/icon/IconMaximize');

var _IconMaximize2 = _interopRequireDefault(_IconMaximize);

var _IconChevronUp = require('terra-icon/lib/icon/IconChevronUp');

var _IconChevronUp2 = _interopRequireDefault(_IconChevronUp);

var _IconChevronDown = require('terra-icon/lib/icon/IconChevronDown');

var _IconChevronDown2 = _interopRequireDefault(_IconChevronDown);

var _terraClinicalHeader = require('terra-clinical-header');

var _terraClinicalHeader2 = _interopRequireDefault(_terraClinicalHeader);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

require('./ActionHeader.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Text to be displayed as the title in the header bar
   **/
  title: _propTypes2.default.string,

  /**
   * Callback function for when the close button is clicked. The back button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button when a separate onBack callback is not set.
   **/
  onClose: _propTypes2.default.func,

  /**
   * Callback function for when the back button is clicked. The back button will not display if this is not set.
   **/
  onBack: _propTypes2.default.func,

  /**
   * Callback function for when the expand button is clicked.
   * The expand button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if onMaximize and onMinimize are set.
   **/
  onMaximize: _propTypes2.default.func,

  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
   **/
  onMinimize: _propTypes2.default.func,

  /**
   * Callback function for when the next button is clicked. The previous-next button group will not display if neither this or onPrevious are set.
   **/
  onNext: _propTypes2.default.func,

  /**
   * Callback function for when the previous button is clicked. The previous-next button group will not display if neither this or onNext are set.
   **/
  onPrevious: _propTypes2.default.func,

  /**
   * Child element to be displayed on the right end of the header.
   **/
  children: _propTypes2.default.element
};

var defaultProps = {
  title: '',
  onClose: null,
  onBack: null,
  onMaximize: null,
  onMinimize: null,
  onNext: null,
  onPrevious: null,
  children: null
};

var ActionHeader = function ActionHeader(_ref) {
  var title = _ref.title,
      onClose = _ref.onClose,
      onBack = _ref.onBack,
      onMaximize = _ref.onMaximize,
      onMinimize = _ref.onMinimize,
      onPrevious = _ref.onPrevious,
      onNext = _ref.onNext,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['title', 'onClose', 'onBack', 'onMaximize', 'onMinimize', 'onPrevious', 'onNext', 'children']);

  var attributes = _extends({}, customProps);
  var closeButton = onClose ? _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconClose2.default, null), onClick: onClose }) : null;
  var backButton = onBack ? _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconLeft2.default, null), onClick: onBack }) : null;

  var closeButtonSmall = void 0;
  var backButtonSmall = void 0;
  if (onClose && !onBack) {
    backButtonSmall = _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconLeft2.default, null), onClick: onClose });
    closeButtonSmall = null;
  } else {
    closeButtonSmall = closeButton;
    backButtonSmall = backButton;
  }

  var expandButton = void 0;
  if (!backButton) {
    if (onMaximize) {
      expandButton = _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconMaximize2.default, null), onClick: onMaximize });
    } else if (onMinimize) {
      expandButton = _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconMinimize2.default, null), onClick: onMinimize });
    }
  }

  var previousNextButtonGroup = null;
  if (onPrevious || onNext) {
    previousNextButtonGroup = _react2.default.createElement(
      _terraButtonGroup2.default,
      null,
      _react2.default.createElement(_terraButtonGroup2.default.Button, { icon: _react2.default.createElement(_IconChevronUp2.default, null), onClick: onPrevious, key: 'ActionHeaderPrevious' }),
      _react2.default.createElement(_terraButtonGroup2.default.Button, { icon: _react2.default.createElement(_IconChevronDown2.default, null), onClick: onNext, key: 'ActionHeaderNext' })
    );
  }

  var leftButtonsDefault = _react2.default.createElement(
    'div',
    { className: 'terraClinical-ActionHeader-leftButtons' },
    backButton,
    expandButton,
    previousNextButtonGroup
  );

  var rightButtonsDefault = _react2.default.createElement(
    'div',
    { className: 'terraClinical-ActionHeader-rightButtons' },
    children,
    closeButton
  );

  var leftButtonsSmall = _react2.default.createElement(
    'div',
    { className: 'terraClinical-ActionHeader-leftButtons' },
    backButtonSmall,
    previousNextButtonGroup
  );

  var rightButtonsSmall = _react2.default.createElement(
    'div',
    { className: 'terraClinical-ActionHeader-rightButtons' },
    children,
    closeButtonSmall
  );

  var actionHeader = _react2.default.createElement(_terraClinicalHeader2.default, _extends({}, attributes, {
    startContent: leftButtonsDefault,
    title: title,
    endContent: rightButtonsDefault
  }));

  var smallActionHeader = _react2.default.createElement(_terraClinicalHeader2.default, _extends({}, attributes, {
    startContent: leftButtonsSmall,
    title: title,
    endContent: rightButtonsSmall
  }));

  return _react2.default.createElement(_terraResponsiveElement2.default, {
    responsiveTo: 'window',
    defaultElement: smallActionHeader,
    small: actionHeader
  });
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

exports.default = ActionHeader;