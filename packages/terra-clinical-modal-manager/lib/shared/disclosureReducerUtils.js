"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var cloneDisclosureState = function cloneDisclosureState(state) {
  var newState = _extends({}, state);
  newState.componentKeys = _extends([], newState.componentKeys);
  newState.components = _extends({}, newState.components);

  return newState;
};

var defaultState = Object.freeze({
  isOpen: false,
  isMaximized: false,
  componentKeys: [],
  components: {}
});

var open = function open(state, action) {
  var newState = cloneDisclosureState(state);

  newState.isOpen = true;
  newState.componentKeys = [action.data.content.key];
  newState.components[action.data.content.key] = {
    name: action.data.content.name,
    props: action.data.content.props,
    key: action.data.content.key
  };

  return newState;
};

var close = function close() {
  return defaultState;
};

var push = function push(state, action) {
  var newState = cloneDisclosureState(state);

  newState.componentKeys.push(action.data.content.key);
  newState.components[action.data.content.key] = {
    name: action.data.content.name,
    props: action.data.content.props,
    key: action.data.content.key
  };

  return newState;
};

var pop = function pop(state) {
  var newState = cloneDisclosureState(state);

  newState.components[newState.componentKeys.pop()] = undefined;

  return newState;
};

var maximize = function maximize(state) {
  var newState = cloneDisclosureState(state);

  newState.isMaximized = true;

  return newState;
};

var minimize = function minimize(state) {
  var newState = cloneDisclosureState(state);

  newState.isMaximized = false;

  return newState;
};

exports.defaultState = defaultState;
exports.open = open;
exports.close = close;
exports.push = push;
exports.pop = pop;
exports.maximize = maximize;
exports.minimize = minimize;