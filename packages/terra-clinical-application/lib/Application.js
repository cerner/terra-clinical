'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraBase = require('terra-base');

var _terraBase2 = _interopRequireDefault(_terraBase);

var _terraClinicalAppDelegate = require('terra-clinical-app-delegate');

var _terraClinicalAppDelegate2 = _interopRequireDefault(_terraClinicalAppDelegate);

require('./Application.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The AppDelegate instance that will be propagated to the Application's children.
   **/
  app: _terraClinicalAppDelegate2.default.propType,

  /**
   * The components to display within the Application.
   **/
  children: _react.PropTypes.node.isRequired
};

var Application = function Application(_ref) {
  var app = _ref.app,
      children = _ref.children,
      customProps = _objectWithoutProperties(_ref, ['app', 'children']);

  var childrenToRender = children;

  if (app) {
    childrenToRender = _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, { app: app });
    });
  }

  return _react2.default.createElement(
    _terraBase2.default,
    _extends({}, customProps, { className: (0, _classnames2.default)([customProps.className, 'terraClinical-Application']) }),
    childrenToRender
  );
};

Application.propTypes = propTypes;

exports.default = Application;