'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = open;
exports.close = close;
exports.push = push;
exports.pop = pop;
exports.maximize = maximize;
exports.minimize = minimize;

var _actionTypes = require('./actionTypes');

function open(data) {
  return { type: _actionTypes.OPEN, data: data };
}

function close(data) {
  return { type: _actionTypes.CLOSE, data: data };
}

function push(data) {
  return { type: _actionTypes.PUSH, data: data };
}

function pop(data) {
  return { type: _actionTypes.POP, data: data };
}

function maximize(data) {
  return { type: _actionTypes.MAXIMIZE, data: data };
}

function minimize(data) {
  return { type: _actionTypes.MINIMIZE, data: data };
}