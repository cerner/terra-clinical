import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import { KEY_RETURN, KEY_SPACE } from 'keycode-js';
import ThemeContext from 'terra-theme-context';

import styles from './SectionHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the section that the SectionHeader is rendered within.
   */
  sectionId: PropTypes.string.isRequired,
  /**
   * String text rendered within the SectionHeader's default text position.
   */
  text: PropTypes.string,
  /**
   * Content rendered within the SectionHeader's default leading content position (ahead of the text).
   */
  startAccessory: PropTypes.node,
  /**
   * Content rendered within the SectionHeader's default trailing content position (after the text).
   */
  endAccessory: PropTypes.node,
  /**
   * Boolean indicating whether the SectionHeader is representing a collapsible section. If true, the SectionHeader
   * will be selectable, and an collapsiblity indicator will be rendered within the SectionHeader.
   */
  isCollapsible: PropTypes.bool,
  /**
   * Boolean indicating whether the SectionHeader is representing a collapsed section.
   */
  isCollapsed: PropTypes.bool,
  /**
   * Function called upon selection of the SectionHeader. The `isCollapsible` prop must be true for this function
   * to be executed. Parameters: `onRequestSectionCollapse(sectionId)`
   */
  onRequestSectionCollapse: PropTypes.func,
  /**
   * Function that will be called with a ref to the SectionHeader's selectable element. Parameters: `selectableRefCallback(selectableRef)`
   */
  selectableRefCallback: PropTypes.func,
  /**
   * Content to be rendered within the SectionHeader. If provided, the `text`, `startAccessory`, and `endAccessory` props are ignored.
   */
  children: PropTypes.node,
};

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    const { onRequestSectionCollapse, sectionId } = this.props;

    if (onRequestSectionCollapse) {
      onRequestSectionCollapse(sectionId);
    }
  }

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      const { onRequestSectionCollapse, sectionId } = this.props;

      if (onRequestSectionCollapse) {
        event.preventDefault();
        onRequestSectionCollapse(sectionId);
      }
    }
  }

  render() {
    const {
      sectionId, text, startAccessory, endAccessory, children, isCollapsible, isCollapsed, selectableRefCallback,
    } = this.props;

    let content;
    if (children) {
      content = (
        <div className={cx('flex-content')}>
          {children}
        </div>
      );
    } else {
      content = (
        <React.Fragment>
          {startAccessory ? (
            <div className={cx('start-accessory')}>
              {startAccessory}
            </div>
          ) : undefined}
          <div className={cx('flex-content')}>
            {text ? <div className={cx('text')}>{text}</div> : null}
          </div>
          {endAccessory ? (
            <div className={cx('end-accessory')}>
              {endAccessory}
            </div>
          ) : undefined}
        </React.Fragment>
      );
    }
    const theme = this.context;

    return (
      <div
        className={cx('section-header', theme.className)}
        data-section-header
        data-terra-clinical-data-grid-section-header-id={sectionId}
      >
        <div
          role="button"
          className={cx(['content', { selectable: isCollapsible }])}
          onClick={isCollapsible ? this.handleClick : undefined}
          onKeyDown={isCollapsible ? this.handleKeyDown : undefined}
          tabIndex={isCollapsible ? '0' : undefined}
          ref={selectableRefCallback}
        >
          {isCollapsible ? (
            <div className={cx('collapsible-icon')}>
              {isCollapsed ? <IconCaretRight /> : <IconCaretDown />}
            </div>
          ) : null}
          {content}
        </div>
      </div>
    );
  }
}

SectionHeader.propTypes = propTypes;
SectionHeader.contextType = ThemeContext;

export default SectionHeader;
