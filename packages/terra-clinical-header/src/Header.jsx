import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed at the start of the header, placed before the title
   */
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar
   */
  title: PropTypes.string,

  /**
   * Content to be displayed at the end of the header
   */
  endContent: PropTypes.element,
};

const defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
};

const Header = ({ title, startContent, endContent, ...customProps }) => {
  const titleElement = <h1 className={cx('title')}>{title}</h1>;
  let headerContent;

  if (startContent || endContent) {
    headerContent = (
      <Arrange
        fitStart={startContent}
        fitEnd={endContent}
        fill={titleElement}
        align="center"
      />
    );
  } else {
    headerContent = titleElement;
  }

  return (
    <header {...customProps} className={cx('header', customProps.className)}>
      {headerContent}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
