import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ContentCellLayout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
};

const ContentCellLayout = ({ text }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx(['content-cell', theme.className])}>
      {text}
    </div>
  );
};

ContentCellLayout.contextType = ThemeContext;
ContentCellLayout.propTypes = propTypes;

export default ContentCellLayout;
