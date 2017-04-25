'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./breakpoints.scss');

var breakpoint = void 0;

/**
 * Translates SASS defined breakpoints into a javascript accessible object
 * @returns {Object} - Returns SASS defined breakpoints in pixels units as key value pairs
 */
var getBreakpoints = function getBreakpoints(desiredBreakpoint) {
  if (breakpoint) {
    return breakpoint;
  }

  var data = void 0;
  var datasource = document.createElement('div');
  datasource.className = 'terraClinical-Breakpoints';

  document.body.appendChild(datasource);

  data = window.getComputedStyle(datasource, ':before').getPropertyValue('content');
  data = data.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');

  var breakpoints = JSON.parse(data);
  breakpoint = breakpoints[desiredBreakpoint];

  document.body.removeChild(datasource);

  return breakpoint;
};

exports.default = getBreakpoints;