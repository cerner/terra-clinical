import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
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
import styles from './ActionHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text to be displayed as the title in the header bar
   */
  title: PropTypes.string,

  /**
   * Callback function for when the close button is clicked. The back button will not display if this is not set.
   * On small viewports a back button will be displayed instead of a close button when a separate onBack callback is not set.
   */
  onClose: PropTypes.func,

  /**
   * Callback function for when the back button is clicked. The back button will not display if this is not set.
   */
  onBack: PropTypes.func,

  /**
   * Callback function for when the expand button is clicked.
   * The expand button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if onMaximize and onMinimize are set.
   */
  onMaximize: PropTypes.func,

  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
   */
  onMinimize: PropTypes.func,

  /**
   * Callback function for when the next button is clicked. The previous-next button group will not display if neither this or onPrevious are set.
   */
  onNext: PropTypes.func,

  /**
   * Callback function for when the previous button is clicked. The previous-next button group will not display if neither this or onNext are set.
   */
  onPrevious: PropTypes.func,

  /**
   * A Boolean indicating if close button should be displayed on small viewports when separate onBack callback is not set.
   */
  keepCloseButton: PropTypes.bool,

  /**
   * Child element to be displayed on the right end of the header.
   * This is intended to be used with the CollapsibleMenuView.
   */
  children: PropTypes.element,
};

const defaultProps = {
  title: '',
  onClose: null,
  onBack: null,
  onMaximize: null,
  onMinimize: null,
  onNext: null,
  onPrevious: null,
  keepCloseButton: false,
  children: null,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const ActionHeader = ({
  title,
  onClose,
  onBack,
  onMaximize,
  onMinimize,
  onPrevious,
  onNext,
  keepCloseButton,
  children,
  ...customProps }, {
  intl,
}) => {
  const attributes = Object.assign({}, customProps);
  const backText = intl.formatMessage({ id: 'Terra.Clinical.ActionHeader.back' });
  const closeText = intl.formatMessage({ id: 'Terra.Clinical.ActionHeader.close' });
  const minimizeText = intl.formatMessage({ id: 'Terra.Clinical.ActionHeader.minimize' });
  const maximizeText = intl.formatMessage({ id: 'Terra.Clinical.ActionHeader.maximize' });
  const previousText = intl.formatMessage({ id: 'Terra.Clinical.ActionHeader.previous' });
  const nextText = intl.formatMessage({ id: 'Terra.Clinical.ActionHeader.next' });

  const closeButton = onClose ? <Button isIconOnly icon={<IconClose />} text={closeText} onClick={onClose} /> : null;
  const backButton = onBack ? <Button isIconOnly icon={<IconLeft />} text={backText} onClick={onBack} /> : null;

  let closeButtonSmall;
  let backButtonSmall;
  if (onClose && !onBack && !keepCloseButton) {
    backButtonSmall = <Button isIconOnly icon={<IconLeft />} text={backText} onClick={onClose} />;
    closeButtonSmall = null;
  } else {
    closeButtonSmall = closeButton;
    backButtonSmall = backButton;
  }


  let expandButton;
  if (!backButton) {
    if (onMaximize) {
      expandButton = <Button isIconOnly icon={<IconMaximize />} text={maximizeText} onClick={onMaximize} />;
    } else if (onMinimize) {
      expandButton = <Button isIconOnly icon={<IconMinimize />} text={minimizeText} onClick={onMinimize} />;
    }
  }

  let previousNextButtonGroup = null;
  if (onPrevious || onNext) {
    previousNextButtonGroup = (
      <ButtonGroup>
        <ButtonGroup.Button icon={<IconChevronUp />} text={previousText} onClick={onPrevious} key="ActionHeaderPrevious" />
        <ButtonGroup.Button icon={<IconChevronDown />} text={nextText} onClick={onNext} key="ActionHeaderNext" />
      </ButtonGroup>
    );
  }

  const leftButtonsDefault = (
    <div className={cx('left-buttons')}>
      {backButton}
      {expandButton}
      {previousNextButtonGroup}
    </div>
  );

  const rightButtonsDefault = (
    <div className={cx('right-buttons')}>
      {closeButton}
    </div>
  );

  const leftButtonsSmall = (
    <div className={cx('left-buttons')}>
      {backButtonSmall}
      {previousNextButtonGroup}
    </div>
  );

  const rightButtonsSmall = (
    <div className={cx('right-buttons')}>
      {closeButtonSmall}
    </div>
  );

  const actionHeader = (
    <Header
      {...attributes}
      data-terra-clincial-action-header
      startContent={leftButtonsDefault}
      title={title}
      endContent={rightButtonsDefault}
    >
      {children}
    </Header>
  );

  const smallActionHeader = (
    <Header
      {...attributes}
      data-terra-clincial-action-header
      startContent={leftButtonsSmall}
      title={title}
      endContent={rightButtonsSmall}
    >
      {children}
    </Header>
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
ActionHeader.contextTypes = contextTypes;

export default ActionHeader;
