'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _terraClinicalSlideGroup = require('terra-clinical-slide-group');

var _terraClinicalSlideGroup2 = _interopRequireDefault(_terraClinicalSlideGroup);

require('./ModalPresenter.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalPresenter = function ModalPresenter(_ref) {
  var componentStack = _ref.componentStack,
      size = _ref.size,
      isOpen = _ref.isOpen,
      isMaximized = _ref.isMaximized,
      children = _ref.children;

  var modalClassNames = (0, _classnames2.default)(['terraClinical-ModalPresenter-modal', { 'terraClinical-ModalPresenter-modal--small': !isMaximized && (size === 'small' || !size) }, { 'terraClinical-ModalPresenter-modal--large': !isMaximized && size === 'large' }, { 'terraClinical-ModalPresenter-modal--fullscreen': isMaximized }]);

  return _react2.default.createElement(
    'div',
    { className: 'terraClinical-ModalPresenter' },
    children,
    _react2.default.createElement(
      _reactModal2.default,
      {
        isOpen: isOpen,
        className: modalClassNames,
        overlayClassName: 'terraClinical-ModalPresenter-modalOverlay',
        contentLabel: ''
      },
      _react2.default.createElement(_terraClinicalSlideGroup2.default, { items: componentStack })
    )
  );
};

ModalPresenter.propTypes = {
  componentStack: _react.PropTypes.array,
  size: _react.PropTypes.string,
  isOpen: _react.PropTypes.bool,
  isMaximized: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

exports.default = ModalPresenter;