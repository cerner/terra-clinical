"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DisclosureComponentRegistry = {};

var registerComponentForDisclosure = function registerComponentForDisclosure(key, Component) {
  DisclosureComponentRegistry[key] = Component;
};

var getComponentForDisclosure = function getComponentForDisclosure(key) {
  return DisclosureComponentRegistry[key];
};

exports.registerComponentForDisclosure = registerComponentForDisclosure;
exports.getComponentForDisclosure = getComponentForDisclosure;