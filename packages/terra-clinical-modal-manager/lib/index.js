'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = exports.mapDispatchToProps = exports.mapStateToProps = undefined;

var _reactRedux = require('react-redux');

var _ModalManager = require('./ModalManager');

var _ModalManager2 = _interopRequireDefault(_ModalManager);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return function (disclosureState) {
    return {
      modalComponentData: disclosureState.componentKeys.map(function (key) {
        return disclosureState.components[key];
      }),
      size: disclosureState.size,
      isOpen: disclosureState.isOpen,
      isMaximized: disclosureState.isMaximized
    };
  }(state.modalManager);
};

exports.mapStateToProps = mapStateToProps;


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(data) {
      dispatch((0, _actions.open)(data));
    },
    closeModal: function closeModal(data) {
      dispatch((0, _actions.close)(data));
    },
    pushModal: function pushModal(data) {
      dispatch((0, _actions.push)(data));
    },
    popModal: function popModal(data) {
      dispatch((0, _actions.pop)(data));
    },
    maximizeModal: function maximizeModal(data) {
      dispatch((0, _actions.maximize)(data));
    },
    minimizeModal: function minimizeModal(data) {
      dispatch((0, _actions.minimize)(data));
    }
  };
};

exports.mapDispatchToProps = mapDispatchToProps;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ModalManager2.default);


var reducers = {
  modalManager: _reducers2.default
};

exports.reducers = reducers;