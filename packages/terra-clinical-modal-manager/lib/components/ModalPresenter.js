'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraModal = require('terra-modal');

var _terraModal2 = _interopRequireDefault(_terraModal);

var _terraClinicalSlideGroup = require('terra-clinical-slide-group');

var _terraClinicalSlideGroup2 = _interopRequireDefault(_terraClinicalSlideGroup);

require('terra-base/lib/baseStyles');

require('./ModalPresenter.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var supportedModalSizes = ['tiny', 'small', 'medium', 'large', 'huge'];

var ModalPresenter = function ModalPresenter(_ref) {
  var modalContent = _ref.modalContent,
      size = _ref.size,
      isOpen = _ref.isOpen,
      isMaximized = _ref.isMaximized,
      children = _ref.children;

  var sizeClass = 'terraClinical-ModalPresenter-modal--' + (supportedModalSizes.indexOf(size) > 0 ? size : 'small');

  var modalClassNames = (0, _classnames2.default)(['terraClinical-ModalPresenter-modal', _defineProperty({}, sizeClass, !isMaximized)]);

  return _react2.default.createElement(
    'div',
    { className: 'terraClinical-ModalPresenter' },
    children,
    _react2.default.createElement(
      _terraModal2.default,
      {
        isOpened: isOpen,
        onRequestClose: function onRequestClose() {},
        isFullscreen: isMaximized,
        classNameModal: modalClassNames,
        ariaLabel: ''
      },
      _react2.default.createElement(_terraClinicalSlideGroup2.default, { items: modalContent })
    )
  );
};

ModalPresenter.propTypes = {
  modalContent: _react.PropTypes.array,
  size: _react.PropTypes.string,
  isOpen: _react.PropTypes.bool,
  isMaximized: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

exports.default = ModalPresenter;