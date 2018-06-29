import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import { KEYCODES } from './utils';

import styles from './SectionHeader.scss';

const cx = classNames.bind(styles);

const propTypes = {
  sectionId: PropTypes.string,
  text: PropTypes.string,
  startAccessory: PropTypes.node,
  endAccessory: PropTypes.node,
  isCollapsible: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  onClick: PropTypes.func,
  refCallback: PropTypes.func,
  children: PropTypes.node,
};

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleClick() {
    const { onClick, sectionId } = this.props;

    if (onClick) {
      onClick(sectionId);
    }
  }

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      const { onClick, sectionId } = this.props;

      if (onClick) {
        event.preventDefault();
        onClick(sectionId);
      }
    }
  }

  render() {
    const { sectionId, text, startAccessory, endAccessory, children, isCollapsible, isCollapsed, refCallback } = this.props;

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <div
        key={sectionId}
        className={cx('section-header')}
        data-section-header
      >
        <div
          className={cx(['touch-target', { selectable: isCollapsible }])}
          onClick={isCollapsible ? this.handleClick : undefined}
          onKeyDown={isCollapsible ? this.handleKeyDown : undefined}
          tabIndex={isCollapsible ? '0' : undefined}
          ref={refCallback}
        />
        <div className={cx('content')}>
          {isCollapsible ? (
            <div className={cx('collapsible-icon')}>
              {isCollapsed ? <IconCaretRight /> : <IconCaretDown />}
            </div>
            ) : null}
          <div className={cx('start-accessory')}>
            {startAccessory}
          </div>
          <div className={cx('flex-content')}>
            {text ? <div className={cx('text')}>{text}</div> : null}
            {children}
          </div>
          <div className={cx('end-accessory')}>
            {endAccessory}
          </div>
        </div>
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
}

SectionHeader.propTypes = propTypes;

export default SectionHeader;
