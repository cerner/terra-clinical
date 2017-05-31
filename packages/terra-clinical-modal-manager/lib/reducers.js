'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _disclosureReducerUtils = require('./shared/disclosureReducerUtils');

var _actionTypes = require('./actionTypes');

var supportedSizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge'
};

var defaultModalState = _extends({}, _disclosureReducerUtils.defaultState, {
  size: supportedSizes.small
});

var modalManager = function modalManager() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultModalState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.OPEN:
      return _extends({}, (0, _disclosureReducerUtils.open)(state, action), { size: action.data.size || supportedSizes.small });
    case _actionTypes.CLOSE:
      return defaultModalState;
    case _actionTypes.PUSH:
      return (0, _disclosureReducerUtils.push)(state, action);
    case _actionTypes.POP:
      return (0, _disclosureReducerUtils.pop)(state, action);
    case _actionTypes.MAXIMIZE:
      return (0, _disclosureReducerUtils.maximize)(state, action);
    case _actionTypes.MINIMIZE:
      return (0, _disclosureReducerUtils.minimize)(state, action);
    default:
      return state;
  }
};

exports.default = modalManager;