import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import styles from './HeaderCellLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
  sortDirection: PropTypes.oneOf(['ascending', 'descending']),
};

const HeaderCellLayout = ({ text, sortDirection }) => {
  let sortIndicator;
  if (sortDirection) {
    sortIndicator = (
      <div className={cx('sort-indicator')}>
        {sortDirection === 'ascending' ? <IconCaretUp /> : null}
        {sortDirection === 'descending' ? <IconCaretDown /> : null}
      </div>
    );
  }

  return (
    <div className={cx('header-cell')}>
      <div className={cx('text')}>
        {text}
      </div>
      {sortIndicator}
    </div>
  );
};

HeaderCellLayout.propTypes = propTypes;

export default HeaderCellLayout;
