import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

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
  accessibilityId: PropTypes.number,
};

const SectionHeader = ({ sectionId, text, startAccessory, endAccessory, isCollapsible, isCollapsed, onClick, accessibilityId }) => (
  <div
    key={sectionId}
    className={cx('section-header')}
    data-section-header
    data-accessibility-id={accessibilityId}
  >
    {isCollapsible ? (
      <div
        className={cx(['touch-target', { selectable: isCollapsible }])}
        onClick={onClick && isCollapsible ? ((event) => { onClick(event, sectionId); }) : null}
      />
    ) : null}
    <div className={cx('content')}>
      {isCollapsible ? (
        <div className={cx('collapsible-icon')}>
          {isCollapsed ? <IconCaretRight /> : <IconCaretDown />}
        </div>
        ) : null}
      <div className={cx('start-accessory')}>
        {startAccessory}
      </div>
      <div className={cx('text')}>
        {text}
      </div>
      <div className={cx('end-accessory')}>
        {endAccessory}
      </div>
    </div>
  </div>
);

SectionHeader.propTypes = propTypes;

export default SectionHeader;
