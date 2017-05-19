'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _reactRedux = require('react-redux');

var _ModalManager = require('../components/ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _modalManager = require('../reducers/modalManager');

var _modalManager2 = _interopRequireDefault(_modalManager);

var _modalManager3 = require('../actions/modalManager');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return function (disclosureState) {
    return {
      modalComponentKeys: disclosureState.componentKeys,
      modalComponentData: disclosureState.components,
      size: disclosureState.size,
      isOpen: disclosureState.isOpen,
      isMaximized: disclosureState.isMaximized
    };
  }(state.modalManager);
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

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModalManager2.default);


var reducers = {
  modalManager: _modalManager2.default
};

exports.reducers = reducers;