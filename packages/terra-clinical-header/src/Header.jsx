import React from 'react';
import PropTypes from 'prop-types';
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
  let startElement;
  if (startContent) {
    startElement = <div className={cx('flexEnd')}>{startContent}</div>;
  }

  let titleElement;
  if (title) {
    titleElement = (
      <div className={cx('titleContainer')}>
        <h1 className={cx('title')}>
          {title}
        </h1>
      </div>
    );
  }

  let endElement;
  if (endContent) {
    endElement = <div className={cx('flexEnd')}>{endContent}</div>;
  }

  return (
    <header {...customProps} className={cx('flexHeader', customProps.className)}>
      {startElement}
      <div className={cx('flexFill')}>
        {titleElement}
      </div>
      {endElement}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
