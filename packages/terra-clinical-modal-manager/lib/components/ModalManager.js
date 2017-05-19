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

var _terraModal = require('terra-modal');

var _terraModal2 = _interopRequireDefault(_terraModal);

require('terra-base/lib/baseStyles');

var _terraClinicalAppDelegate = require('terra-clinical-app-delegate');

var _terraClinicalAppDelegate2 = _interopRequireDefault(_terraClinicalAppDelegate);

var _terraClinicalSlideGroup = require('terra-clinical-slide-group');

var _terraClinicalSlideGroup2 = _interopRequireDefault(_terraClinicalSlideGroup);

var _breakpoints = require('terra-responsive-element/lib/breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

require('./ModalManager.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   **/
  app: _terraClinicalAppDelegate2.default.propType,

  /**
   * Components that will receive the ModalManager's AppDelegate configuration. Components given as children must appropriately handle an `app` prop.
   **/
  children: _propTypes2.default.node,

  /**
   * From `connect`. The Array of component keys that will be used to instantiate the Modal's inner components.
   **/
  modalComponentKeys: _propTypes2.default.array,

  /**
   * From `connect`. An Object containing component data used to instantiate the Modal's inner components.
   **/
  modalComponentData: _propTypes2.default.object,

  /**
   * From `connect`. The desired size of the modal.
   **/
  size: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * From `connect`. The presentation state of the modal.
   **/
  isOpen: _propTypes2.default.bool,

  /**
   * From `connect`. The maximization state of the modal.
   **/
  isMaximized: _propTypes2.default.bool,

  /**
   * From `connect`. A function that dispatches an `open` action.
   **/
  openModal: _propTypes2.default.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `close` action.
   **/
  closeModal: _propTypes2.default.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `push` action.
   **/
  pushModal: _propTypes2.default.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `pop` action.
   **/
  popModal: _propTypes2.default.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `maximize` action.
   **/
  maximizeModal: _propTypes2.default.func.isRequired,

  /**
   * From `connect`. A function that dispatches a `minimize` action.
   **/
  minimizeModal: _propTypes2.default.func.isRequired
};

var defaultProps = {
  isOpen: false,
  isMaximized: false,
  size: 'small'
};

var ModalManager = function (_React$Component) {
  _inherits(ModalManager, _React$Component);

  function ModalManager(props) {
    _classCallCheck(this, ModalManager);

    // I'm tracking the responsive-fullscreen state outside of React and Redux state to limit the number of
    // renderings that occur.
    var _this = _possibleConstructorReturn(this, (ModalManager.__proto__ || Object.getPrototypeOf(ModalManager)).call(this, props));

    _this.forceFullscreenModal = false;

    _this.updateFullscreenState = _this.updateFullscreenState.bind(_this);
    _this.buildModalComponents = _this.buildModalComponents.bind(_this);
    return _this;
  }

  _createClass(ModalManager, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateFullscreenState();
      window.addEventListener('resize', this.updateFullscreenState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateFullscreenState);
    }
  }, {
    key: 'updateFullscreenState',
    value: function updateFullscreenState() {
      var previousFullscreenState = this.forceFullscreenModal;

      this.forceFullscreenModal = window.innerWidth < (0, _breakpoints2.default)().small;

      // Only update the modal if it's minimized, open, and changing states.
      if (!this.props.isMaximized && this.props.isOpen && previousFullscreenState !== this.forceFullscreenModal) {
        this.forceUpdate();
      }
    }
  }, {
    key: 'buildModalComponents',
    value: function buildModalComponents() {
      var _this2 = this;

      if (!this.props.modalComponentKeys || !this.props.modalComponentKeys.length) {
        return null;
      }

      return this.props.modalComponentKeys.map(function (componentKey, index) {
        var componentData = _this2.props.modalComponentData[componentKey];

        var ComponentClass = _terraClinicalAppDelegate2.default.getComponentForDisclosure(componentData.name);

        if (!ComponentClass) {
          return undefined;
        }

        var appDelegate = _terraClinicalAppDelegate2.default.create({
          disclose: function disclose(data) {
            _this2.props.pushModal(data);
          },
          dismiss: index > 0 ? function (data) {
            _this2.props.popModal(data);
          } : function (data) {
            _this2.props.closeModal(data);
          },
          closeDisclosure: function closeDisclosure() {
            _this2.props.closeModal();
          },
          goBack: index > 0 ? function () {
            _this2.props.popModal();
          } : null,
          maximize: !_this2.props.isMaximized ? function () {
            _this2.props.maximizeModal();
          } : null,
          minimize: _this2.props.isMaximized ? function () {
            _this2.props.minimizeModal();
          } : null
        });

        return _react2.default.createElement(ComponentClass, _extends({ key: componentKey }, componentData.props, { app: appDelegate }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          app = _props.app,
          openModal = _props.openModal,
          closeModal = _props.closeModal,
          size = _props.size,
          isOpen = _props.isOpen,
          isMaximized = _props.isMaximized,
          children = _props.children;


      var sizeClass = 'terraClinical-ModalManager-modal--' + size;

      var modalClassNames = (0, _classnames2.default)(['terraClinical-ModalManager-modal', _defineProperty({}, sizeClass, !(isMaximized || this.forceFullscreenModal))]);

      return _react2.default.createElement(
        'div',
        { className: 'terraClinical-ModalManager' },
        _react2.default.Children.map(children, function (child) {
          var childAppDelegate = _terraClinicalAppDelegate2.default.clone(app, {
            disclose: function disclose(data) {
              if (data.preferredType === 'modal' || !app) {
                openModal(data);
              } else {
                app.disclose(data);
              }
            }
          });

          return _react2.default.cloneElement(child, { app: childAppDelegate });
        }),
        _react2.default.createElement(
          _terraModal2.default,
          {
            isOpened: isOpen,
            isFullscreen: isMaximized || this.forceFullscreenModal,
            classNameModal: modalClassNames,
            onRequestClose: closeModal,
            closeOnEsc: true,
            closeOnOutsideClick: false,
            ariaLabel: 'Modal'
          },
          _react2.default.createElement(_terraClinicalSlideGroup2.default, { items: this.buildModalComponents() })
        )
      );
    }
  }]);

  return ModalManager;
}(_react2.default.Component);

ModalManager.propTypes = propTypes;
ModalManager.defaultProps = defaultProps;

exports.default = ModalManager;