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
import { I18nProvider, i18nLoader } from 'terra-i18n';
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
   * Only the expand button will be rendered if onMaximize and onMinimize are set.
   **/
  onMaximize: PropTypes.func,

  /**
   * Callback function for when the minimize button is clicked.
   * The minimize button will not display if this is not set or on small viewports.
   * Only the expand button will be rendered if both onMaximize and onMinimize are set.
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

  locale: PropTypes.string,

  /**
   * Child element to be displayed on the right end of the header.
   **/
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
  children: null,
  locale: 'en-US',
};

class ActionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      areTranslationsLoaded: false,
      locale: this.props.locale,
      messages: {},
    };
  }

  componentDidMount() {
    i18nLoader(this.state.locale, this.setState, this);
  }

  render() {
    const {
      title,
      onClose,
      onBack,
      onMaximize,
      onMinimize,
      onPrevious,
      onNext,
      children,
      locale,
      ...customProps
    } = this.props;

    const attributes = Object.assign({}, customProps);

    const closeButton = onClose ? <Button icon={<IconClose aria-label="Close" />} onClick={onClose} /> : null;
    const backButton = onBack ? <Button icon={<IconLeft aria-label={BackAltText} />} onClick={onBack} /> : null;

    let closeButtonSmall;
    let backButtonSmall;
    if (onClose && !onBack) {
      backButtonSmall = <Button icon={<IconLeft aria-label="Back"/>} onClick={onClose} />;
      closeButtonSmall = null;
    } else {
      closeButtonSmall = closeButton;
      backButtonSmall = backButton;
    }


    let expandButton;
    if (!backButton) {
      if (onMaximize) {
        expandButton = <Button icon={<IconMaximize aria-label="Maximize" />} onClick={onMaximize} />;
      } else if (onMinimize) {
        expandButton = <Button icon={<IconMinimize aria-label="Minimize" />} onClick={onMinimize} />;
      }
    }

    let previousNextButtonGroup = null;
    if (onPrevious || onNext) {
      previousNextButtonGroup = (
        <ButtonGroup>
          <ButtonGroup.Button icon={<IconChevronUp aria-label="Previous" />} onClick={onPrevious} key="ActionHeaderPrevious" />
          <ButtonGroup.Button icon={<IconChevronDown aria-label="Next"/>} onClick={onNext} key="ActionHeaderNext" />
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

    const leftButtonsSmall = (
      <div className="terraClinical-ActionHeader-leftButtons">
        {backButtonSmall}
        {previousNextButtonGroup}
      </div>
    );

    const rightButtonsSmall = (
      <div className="terraClinical-ActionHeader-rightButtons">
        {children}
        {closeButtonSmall}
      </div>
    );

    const actionHeader = (
      <I18nProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <Header
          {...attributes}
          startContent={leftButtonsDefault}
          title={title}
          endContent={rightButtonsDefault}
        />
      </I18nProvider>
    );

    const smallActionHeader = (
      <I18nProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        <Header
          {...attributes}
          startContent={leftButtonsSmall}
          title={title}
          endContent={rightButtonsSmall}
        />
      </I18nProvider>
    );

    return (
      <ResponsiveElement
        responsiveTo="window"
        defaultElement={smallActionHeader}
        small={actionHeader}
      />
    );

  }
}

ActionHeader.propTypes = propTypes;
ActionHeader.defaultProps = defaultProps;

export default ActionHeader;
