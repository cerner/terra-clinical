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
    startElement = <div className={cx('fit')}>{startContent}</div>;
  }

  let titleElement;
  if (title) {
    titleElement = (
      <div className={cx('titleContainer')}>
        <div className={cx('titleInner')}>
          <h1 className={cx('title')}>
            {title}
          </h1>
        </div>
      </div>
    );
  }

  let endElement;
  if (endContent) {
    endElement = <div className={cx('fit')}>{endContent}</div>;
  }

  return (
    <header {...customProps} className={cx('header', customProps.className)}>
      <div className={cx('alignment', customProps.className)}>
        {startElement}
        {titleElement}
        {endElement}
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
