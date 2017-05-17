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
var OPEN = exports.OPEN = 'MODAL_MANAGER_OPEN';
var CLOSE = exports.CLOSE = 'MODAL_MANAGER_CLOSE';
var PUSH = exports.PUSH = 'MODAL_MANAGER_PUSH';
var POP = exports.POP = 'MODAL_MANAGER_POP';
var MAXIMIZE = exports.MAXIMIZE = 'MODAL_MANAGER_MAXIMIZE';
var MINIMIZE = exports.MINIMIZE = 'MODAL_MANAGER_MINIMIZE';

function open(data) {
  return { type: OPEN, data: data };
}

function close(data) {
  return { type: CLOSE, data: data };
}

function push(data) {
  return { type: PUSH, data: data };
}

function pop(data) {
  return { type: POP, data: data };
}

function maximize(data) {
  return { type: MAXIMIZE, data: data };
}

function minimize(data) {
  return { type: MINIMIZE, data: data };
}