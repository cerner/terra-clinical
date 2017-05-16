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
var OPEN_MODAL = exports.OPEN_MODAL = 'MM_OPEN_MODAL';
var CLOSE_MODAL = exports.CLOSE_MODAL = 'MM_CLOSE_MODAL';
var PUSH_MODAL = exports.PUSH_MODAL = 'MM_PUSH_MODAL';
var POP_MODAL = exports.POP_MODAL = 'MM_POP_MODAL';
var MAXIMIZE_MODAL = exports.MAXIMIZE_MODAL = 'MM_MAXIMIZE_MODAL';
var MINIMIZE_MODAL = exports.MINIMIZE_MODAL = 'MM_MINIMIZE_MODAL';

function open(data) {
  return { type: OPEN_MODAL, data: data };
}

function close(data) {
  return { type: CLOSE_MODAL, data: data };
}

function push(data) {
  return { type: PUSH_MODAL, data: data };
}

function pop(data) {
  return { type: POP_MODAL, data: data };
}

function maximize(data) {
  return { type: MAXIMIZE_MODAL, data: data };
}

function minimize(data) {
  return { type: MINIMIZE_MODAL, data: data };
}