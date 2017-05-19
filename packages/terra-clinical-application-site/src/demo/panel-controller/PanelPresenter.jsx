import React from 'react';
import PropTypes from 'prop-types';

import SlidePanel from 'terra-slide-panel';
import SlideGroup from 'terra-clinical-slide-group';

const propTypes = {
  componentStack: PropTypes.array,
  behavior: PropTypes.string,
  position: PropTypes.string,
  size: PropTypes.string,
  isOpen: PropTypes.bool,
  isMaximized: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  componentStack: [],
  behavior: 'overlay',
  position: 'end',
  size: 'small',
  isOpen: false,
  isMaximized: false,
};

const PanelPresenter = ({ componentStack, behavior, position, size, isOpen, isMaximized, children, ...customProps }) => (
  <SlidePanel
    mainContent={children}
    panelContent={<SlideGroup items={componentStack} />}
    isOpen={isOpen}
    panelBehavior={behavior}
    panelSize={size}
    panelPosition={position}
    isFullscreen={isMaximized}
    fill
    {...customProps}
  />
);

PanelPresenter.propTypes = propTypes;
PanelPresenter.defaultProps = defaultProps;

export default PanelPresenter;
