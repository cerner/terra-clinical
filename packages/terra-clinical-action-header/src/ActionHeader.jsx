import React, { PropTypes } from 'react';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import IconLeft from 'terra-icon/lib/icon/IconLeft';
import IconClose from 'terra-icon/lib/icon/IconClose';
import IconMinimize from 'terra-icon/lib/icon/IconMinimize';
import IconMaximize from 'terra-icon/lib/icon/IconMaximize';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import Header from 'terra-clinical-header';
import ResponsiveElement from 'terra-responsive-element';
import 'terra-base/lib/baseStyles';
import './ActionHeader.scss';

const propTypes = {
  /**
   * Text to be displayed as the title in the header bar
   **/
  title: PropTypes.string,

  /**
   * Callback function for when the close button is clicked. The back button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button when a separate onBack callback is not set.
   **/
  onClose: PropTypes.func,

  /**
   * Callback function for when the back button is clicked. The back button will not display if this is not set.
   **/
  onBack: PropTypes.func,

  /**
   * Callback function for when the expand button is clicked.
   * The expand button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if onExpand and onMinimize are set.
   **/
  onExpand: PropTypes.func,

  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onExpand and onMinimize are set.
   **/
  onMinimize: PropTypes.func,

  /**
   * Callback function for when the next button is clicked. The previous-next button group will not display if neither this or onPrevious are set.
   **/
  onNext: PropTypes.func,

  /**
   * Callback function for when the previous button is clicked. The previous-next button group will not display if neither this or onNext are set.
   **/
  onPrevious: PropTypes.func,

  /**
   * Child element to be displayed on the right end of the header.
   **/
  children: PropTypes.element,
};

const defaultProps = {
  title: '',
  onClose: null,
  onBack: null,
  onExpand: null,
  onMinimize: null,
  onNext: null,
  onPrevious: null,
  children: null,
};

const ActionHeader = ({
  title,
  onClose,
  onBack,
  onExpand,
  onMinimize,
  onPrevious,
  onNext,
  children,
  ...customProps
}) => {
  const attributes = Object.assign({}, customProps);
  let closeButton = onClose ? <Button icon={<IconClose />} onClick={onClose} /> : null;
  let backButton = onBack ? <Button icon={<IconLeft />} onClick={onBack} /> : null;

  let expandButton;
  if (!backButton) {
    if (onExpand) {
      expandButton = <Button icon={<IconMaximize />} onClick={onExpand} />;
    } else if (onMinimize) {
      expandButton = <Button icon={<IconMinimize />} onClick={onMinimize} />;
    }
  }

  let previousNextButtonGroup = null;
  if (onPrevious || onNext) {
    previousNextButtonGroup = (
      <ButtonGroup>
        <ButtonGroup.Button icon={<IconChevronUp />} onClick={onPrevious} />
        <ButtonGroup.Button icon={<IconChevronDown />} onClick={onNext} />
      </ButtonGroup>
    );
  }

  const leftButtonsDefault = (
    <div className="terraClinical-ActionHeader-leftButtons">
      {backButton}
      {expandButton}
      {previousNextButtonGroup}
    </div>
  );

  const rightButtonsDefault = (
    <div className="terraClinical-ActionHeader-rightButtons">
      {children}
      {closeButton}
    </div>
  );

  if (onClose && !onBack) {
    backButton = <Button icon={<IconLeft />} onClick={onClose} />;
    closeButton = null;
  }

  const leftButtonsSmall = (
    <div className="terraClinical-ActionHeader-leftButtons">
      {backButton}
      {previousNextButtonGroup}
    </div>
  );

  const rightButtonsSmall = (
    <div className="terraClinical-ActionHeader-rightButtons">
      {children}
      {closeButton}
    </div>
  );

  const actionHeader = (
    <Header
      {...attributes}
      startContent={leftButtonsDefault}
      title={title}
      endContent={rightButtonsDefault}
    />
  );

  const smallActionHeader = (
    <Header
      {...attributes}
      startContent={leftButtonsSmall}
      title={title}
      endContent={rightButtonsSmall}
    />
  );

  return (
    <ResponsiveElement
      responsiveTo="window"
      defaultElement={smallActionHeader}
      small={actionHeader}
    />
  );
};

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

export default ActionHeader;
