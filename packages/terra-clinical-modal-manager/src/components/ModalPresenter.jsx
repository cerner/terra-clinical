import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Modal from 'terra-Modal';
import SlideGroup from 'terra-clinical-slide-group';

import 'terra-base/lib/baseStyles';
import './ModalPresenter.scss';

const ModalPresenter = ({ componentStack, size, isOpen, isMaximized, children }) => {
  const modalClassNames = classNames([
    'terraClinical-ModalPresenter-modal',
    { 'terraClinical-ModalPresenter-modal--small': !isMaximized && (size === 'small' || !size) },
    { 'terraClinical-ModalPresenter-modal--large': !isMaximized && size === 'large' },
  ]);

  return (
    <div className="terraClinical-ModalPresenter">
      {children}
      <Modal
        isOpened={isOpen}
        isFullscreen={isMaximized}
        classNameModal={modalClassNames}
        ariaLabel=""
      >
        <SlideGroup items={componentStack} />
      </Modal>
    </div>
  );
};

ModalPresenter.propTypes = {
  componentStack: PropTypes.array,
  size: PropTypes.string,
  isOpen: PropTypes.bool,
  isMaximized: PropTypes.bool,
  children: PropTypes.node,
};

export default ModalPresenter;
