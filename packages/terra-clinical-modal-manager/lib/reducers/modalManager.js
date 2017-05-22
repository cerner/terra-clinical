'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _disclosureUtils = require('./disclosureUtils');

var _modalManager = require('../actions/modalManager');

var supportedSizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
};

var defaultModalState = _extends({}, _disclosureUtils.defaultState, {
  size: supportedSizes.small
});

var modalManager = function modalManager() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultModalState;
  var action = arguments[1];

  switch (action.type) {
    case _modalManager.OPEN:
      return _extends({}, (0, _disclosureUtils.open)(state, action), { size: action.data.size || supportedSizes.small });
    case _modalManager.CLOSE:
      return defaultModalState;
    case _modalManager.PUSH:
      return (0, _disclosureUtils.push)(state, action);
    case _modalManager.POP:
      return (0, _disclosureUtils.pop)(state, action);
    case _modalManager.MAXIMIZE:
      return (0, _disclosureUtils.maximize)(state, action);
    case _modalManager.MINIMIZE:
      return (0, _disclosureUtils.minimize)(state, action);
    default:
      return state;
  }
};

exports.default = modalManager;