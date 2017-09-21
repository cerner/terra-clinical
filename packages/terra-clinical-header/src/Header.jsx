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

  /**
   * A Boolean indicating if element is a subheader.
   */
  isSubheader: PropTypes.bool,
};

const defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
  isSubheader: false,
};

const Header = ({ title, startContent, endContent, isSubheader, ...customProps }) => {
  let startElement;
  if (startContent) {
    startElement = <div className={cx('flex-end')}>{startContent}</div>;
  }

  let titleElement;
  if (title) {
    titleElement = (
      <div className={cx('title-container')}>
        <h1 className={cx('title')}>
          {title}
        </h1>
      </div>
    );
  }

  let endElement;
  if (endContent) {
    endElement = <div className={cx('flex-end')}>{endContent}</div>;
  }

  const headerClass = isSubheader ? 'flex-subheader' : 'flex-header';

  return (
    <header {...customProps} className={cx(headerClass, customProps.className)}>
      {startElement}
      <div className={cx('flex-fill')}>
        {titleElement}
      </div>
      {endElement}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
