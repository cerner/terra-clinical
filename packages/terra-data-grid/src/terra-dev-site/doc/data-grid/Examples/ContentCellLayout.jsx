import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
// import Button from 'terra-button';

import styles from './ContentCellLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
};

const ContentCellLayout = ({ text }) => (
  <div className={cx('content-cell')}>
    {text}
    {/* <div>
      <Button
        text="Button" onClick={(event) => {
          alert('You clicked a button, but you did not select a cell');
          event.stopPropagation();
        }}
        data-accessible-data-grid-content
      />
    </div> */}
  </div>
);

ContentCellLayout.propTypes = propTypes;

export default ContentCellLayout;
