'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./ModalManager.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /*
  * Content to be displayed as the name
  */
  name: _propTypes2.default.string
};

var defaultProps = {
  name: 'default'
};

var ModalManager = function ModalManager(_ref) {
  var name = _ref.name,
      customProps = _objectWithoutProperties(_ref, ['name']);

  var attributes = _extends({}, customProps);
  var ModalManagerClassNames = (0, _classnames2.default)(['terraClinical-ModalManager', attributes.className]);

  return _react2.default.createElement('div', _extends({}, attributes, { className: ModalManagerClassNames }));
};

ModalManager.propTypes = propTypes;
ModalManager.defaultProps = defaultProps;

exports.default = ModalManager;