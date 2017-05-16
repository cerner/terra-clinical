'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _breakpoints = require('terra-responsive-element/lib/breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

var _terraClinicalAppDelegate = require('terra-clinical-app-delegate');

var _terraClinicalAppDelegate2 = _interopRequireDefault(_terraClinicalAppDelegate);

var _modalManager = require('../reducers/modalManager');

var _modalManager2 = _interopRequireDefault(_modalManager);

var _modalManager3 = require('../actions/modalManager');

var _ModalPresenter = require('../components/ModalPresenter');

var _ModalPresenter2 = _interopRequireDefault(_ModalPresenter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  children: _react.PropTypes.node,

  /**
   * From Redux. The Array of component keys that will be used to instantiate the Modal's inner components.
   **/
  componentKeysToDisclose: _react.PropTypes.array,

  /**
   * From Redux. An Object containing component data used to instantiate the Modal's inner components.
   **/
  componentDataToDisclose: _react.PropTypes.object,

  /**
   * From Redux. The desired size of the modal.
   **/
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),

  /**
   * From Redux. The presentation state of the modal.
   **/
  isOpen: _react.PropTypes.bool,

  /**
   * From Redux. The maximization state of the modal.
   **/
  isMaximized: _react.PropTypes.bool,

  /**
   * From Redux. A function that dispatches an `open` action.
   **/
  openModal: _react.PropTypes.func,

  /**
   * From Redux. A function that dispatches a `close` action.
   **/
  closeModal: _react.PropTypes.func,

  /**
   * From Redux. A function that dispatches a `push` action.
   **/
  pushModal: _react.PropTypes.func,

  /**
   * From Redux. A function that dispatches a `pop` action.
   **/
  popModal: _react.PropTypes.func,

  /**
   * From Redux. A function that dispatches a `maximize` action.
   **/
  maximizeModal: _react.PropTypes.func,

  /**
   * From Redux. A function that dispatches a `minimize` action.
   **/
  minimizeModal: _react.PropTypes.func
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
    _this.modalContent = _this.modalContent.bind(_this);
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
    key: 'modalContent',
    value: function modalContent() {
      var _this2 = this;

      if (!this.props.componentKeysToDisclose || !this.props.componentKeysToDisclose.length) {
        return null;
      }

      return this.props.componentKeysToDisclose.map(function (componentKey, index) {
        var componentData = _this2.props.componentDataToDisclose[componentKey];

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
          size = _props.size,
          isOpen = _props.isOpen,
          isMaximized = _props.isMaximized,
          children = _props.children;


      return _react2.default.createElement(
        _ModalPresenter2.default,
        {
          modalContent: this.modalContent(),
          size: size,
          isOpen: isOpen,
          isMaximized: isMaximized || this.forceFullscreenModal
        },
        _react2.default.Children.map(children, function (child) {
          var childAppDelegate = _terraClinicalAppDelegate2.default.clone(app, {
            disclose: function disclose(data) {
              openModal(data);
            }
          });

          return _react2.default.cloneElement(child, { app: childAppDelegate });
        })
      );
    }
  }]);

  return ModalManager;
}(_react2.default.Component);

ModalManager.propTypes = propTypes;

var mapStateToProps = function mapStateToProps(state) {
  return function (disclosureState) {
    return {
      componentKeysToDisclose: disclosureState.componentKeys,
      componentDataToDisclose: disclosureState.components,
      size: disclosureState.size,
      isOpen: disclosureState.isOpen,
      isMaximized: disclosureState.isMaximized
    };
  }(state.modalController);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(data) {
      dispatch((0, _modalManager3.open)(data));
    },
    closeModal: function closeModal(data) {
      dispatch((0, _modalManager3.close)(data));
    },
    pushModal: function pushModal(data) {
      dispatch((0, _modalManager3.push)(data));
    },
    popModal: function popModal(data) {
      dispatch((0, _modalManager3.pop)(data));
    },
    maximizeModal: function maximizeModal(data) {
      dispatch((0, _modalManager3.maximize)(data));
    },
    minimizeModal: function minimizeModal(data) {
      dispatch((0, _modalManager3.minimize)(data));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalManager);


var reducers = {
  modalController: _modalManager2.default
};

exports.reducers = reducers;