import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';
import SlideGroup from 'terra-clinical-slide-group';

import './ModalPresenter.scss';

const ModalPresenter = ({ componentStack, size, isOpen, isMaximized, children }) => {
  const modalClassNames = classNames([
    'terraClinical-ModalPresenter-modal',
    { 'terraClinical-ModalPresenter-modal--small': !isMaximized && (size === 'small' || !size) },
    { 'terraClinical-ModalPresenter-modal--large': !isMaximized && size === 'large' },
    { 'terraClinical-ModalPresenter-modal--fullscreen': isMaximized },
  ]);

  return (
    <div className="terraClinical-ModalPresenter">
      {children}
      <Modal
        isOpen={isOpen}
        className={modalClassNames}
        overlayClassName="terraClinical-ModalPresenter-modalOverlay"
        contentLabel=""
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
