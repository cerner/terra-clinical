'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _DisclosureComponentRegistry = require('../disclosure-component-registry/DisclosureComponentRegistry');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var supportedAttributes = ['disclose', 'dismiss', 'closeDisclosure', 'goBack', 'maximize', 'minimize'];

var AppDelegateInstance = function AppDelegateInstance(data) {
  var _this = this;

  _classCallCheck(this, AppDelegateInstance);

  supportedAttributes.forEach(function (attribute) {
    if (data[attribute]) {
      _this[attribute] = data[attribute];
    }
  });
};

var create = function create(data) {
  return Object.freeze(new AppDelegateInstance(data));
};

var clone = function clone(delegate, data) {
  var ancestorDelegate = delegate || {};

  var mergedData = {};
  supportedAttributes.forEach(function (attribute) {
    mergedData[attribute] = data[attribute] || ancestorDelegate[attribute];
  });

  return create(mergedData);
};

var isEqual = function isEqual(delegateA, delegateB) {
  if (!delegateA || !delegateB) {
    return false;
  }

  if (delegateA === delegateB) {
    return true;
  }

  return !supportedAttributes.some(function (attribute) {
    return delegateA[attribute] !== delegateB[attribute];
  });
};

var AppDelegate = {
  propType: _react.PropTypes.instanceOf(AppDelegateInstance),
  create: create,
  clone: clone,
  isEqual: isEqual,
  registerComponentForDisclosure: _DisclosureComponentRegistry.registerComponentForDisclosure,
  getComponentForDisclosure: _DisclosureComponentRegistry.getComponentForDisclosure
};

exports.default = AppDelegate;