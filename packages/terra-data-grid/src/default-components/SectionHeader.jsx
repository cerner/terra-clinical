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
  isCollapsible: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  onClick: PropTypes.func,
};

const SectionHeader = ({ sectionId, text, isCollapsible, isCollapsed, onClick }) => (
  <div
    key={sectionId}
    className={cx(['section-header', { selectable: isCollapsible }])}
    onClick={onClick ? ((event) => { onClick(event, sectionId); }) : null}
  >
    {isCollapsible ? (
      <div className={cx('collapsible-icon')}>
        {isCollapsed ? <IconCaretRight /> : <IconCaretDown />}
      </div>
      ) : null}
    <div className={cx('text')}>
      {text}
    </div>
  </div>
);

SectionHeader.propTypes = propTypes;

export default SectionHeader;
