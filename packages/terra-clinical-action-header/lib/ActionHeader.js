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

var _terraI18n = require('terra-i18n');

require('terra-base/lib/baseStyles');

require('./ActionHeader.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

  locale: _react.PropTypes.string,

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
  children: null,
  locale: 'en-US'
};

var ActionHeader = function (_React$Component) {
  _inherits(ActionHeader, _React$Component);

  function ActionHeader(props) {
    _classCallCheck(this, ActionHeader);

    var _this = _possibleConstructorReturn(this, (ActionHeader.__proto__ || Object.getPrototypeOf(ActionHeader)).call(this, props));

    _this.state = {
      areTranslationsLoaded: false,
      locale: _this.props.locale,
      messages: {}
    };
    return _this;
  }

  _createClass(ActionHeader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _terraI18n.i18nLoader)(this.state.locale, this.setState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          onClose = _props.onClose,
          onBack = _props.onBack,
          onMaximize = _props.onMaximize,
          onMinimize = _props.onMinimize,
          onPrevious = _props.onPrevious,
          onNext = _props.onNext,
          children = _props.children,
          locale = _props.locale,
          customProps = _objectWithoutProperties(_props, ['title', 'onClose', 'onBack', 'onMaximize', 'onMinimize', 'onPrevious', 'onNext', 'children', 'locale']);

      var attributes = _extends({}, customProps);
      var backAltText = this.state.messages['Terra.Clinical.ActionHeader.back'];

      var closeButton = onClose ? _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconClose2.default, { ariaLabel: 'Close' }), onClick: onClose }) : null;
      var backButton = onBack ? _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconLeft2.default, { ariaLabel: backAltText }), onClick: onBack }) : null;

      var closeButtonSmall = void 0;
      var backButtonSmall = void 0;
      if (onClose && !onBack) {
        backButtonSmall = _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconLeft2.default, { ariaLabel: backAltText }), onClick: onClose });
        closeButtonSmall = null;
      } else {
        closeButtonSmall = closeButton;
        backButtonSmall = backButton;
      }

      var expandButton = void 0;
      if (!backButton) {
        if (onMaximize) {
          expandButton = _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconMaximize2.default, { ariaLabel: 'Maximize' }), onClick: onMaximize });
        } else if (onMinimize) {
          expandButton = _react2.default.createElement(_terraButton2.default, { icon: _react2.default.createElement(_IconMinimize2.default, { ariaLabel: 'Minimize' }), onClick: onMinimize });
        }
      }

      var previousNextButtonGroup = null;
      if (onPrevious || onNext) {
        previousNextButtonGroup = _react2.default.createElement(
          _terraButtonGroup2.default,
          null,
          _react2.default.createElement(_terraButtonGroup2.default.Button, { icon: _react2.default.createElement(_IconChevronUp2.default, { ariaLabel: 'Previous' }), onClick: onPrevious, key: 'ActionHeaderPrevious' }),
          _react2.default.createElement(_terraButtonGroup2.default.Button, { icon: _react2.default.createElement(_IconChevronDown2.default, { ariaLabel: 'Next' }), onClick: onNext, key: 'ActionHeaderNext' })
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

      var actionHeader = _react2.default.createElement(
        _terraI18n.I18nProvider,
        {
          locale: this.state.locale,
          messages: this.state.messages
        },
        _react2.default.createElement(_terraClinicalHeader2.default, _extends({}, attributes, {
          startContent: leftButtonsDefault,
          title: title,
          endContent: rightButtonsDefault
        }))
      );

      var smallActionHeader = _react2.default.createElement(
        _terraI18n.I18nProvider,
        {
          locale: this.state.locale,
          messages: this.state.messages
        },
        _react2.default.createElement(_terraClinicalHeader2.default, _extends({}, attributes, {
          startContent: leftButtonsSmall,
          title: title,
          endContent: rightButtonsSmall
        }))
      );

      return _react2.default.createElement(_terraResponsiveElement2.default, {
        responsiveTo: 'window',
        defaultElement: smallActionHeader,
        small: actionHeader
      });
    }
  }]);

  return ActionHeader;
}(_react2.default.Component);

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

exports.default = ActionHeader;