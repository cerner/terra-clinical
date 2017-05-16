import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Modal from 'terra-modal';
import SlideGroup from 'terra-clinical-slide-group';

import 'terra-base/lib/baseStyles';
import './ModalPresenter.scss';

const supportedModalSizes = ['tiny', 'small', 'medium', 'large', 'huge'];

const ModalPresenter = ({ modalContent, size, isOpen, isMaximized, children }) => {
  const sizeClass = `terraClinical-ModalPresenter-modal--${supportedModalSizes.indexOf(size) > 0 ? size : 'small'}`;

  const modalClassNames = classNames([
    'terraClinical-ModalPresenter-modal',
    { [sizeClass]: !isMaximized },
  ]);

  return (
    <div className="terraClinical-ModalPresenter">
      {children}
      <Modal
        isOpened={isOpen}
        onRequestClose={() => {}}
        isFullscreen={isMaximized}
        classNameModal={modalClassNames}
        ariaLabel=""
      >
        <SlideGroup items={modalContent} />
      </Modal>
    </div>
  );
};

ModalPresenter.propTypes = {
  modalContent: PropTypes.array,
  size: PropTypes.string,
  isOpen: PropTypes.bool,
  isMaximized: PropTypes.bool,
  children: PropTypes.node,
};

export default ModalPresenter;
