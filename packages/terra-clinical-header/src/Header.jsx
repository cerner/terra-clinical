import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child element to be displayed on the right end of the header.
   * The element passed as children will be decorated with flex attributes.
   */
  children: PropTypes.element,

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
   * The element passed as endContent will be wrapped in a div with flex attributes.
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

const Header = ({ children, title, startContent, endContent, isSubheader, ...customProps }) => {
  let startElement;
  if (startContent) {
    startElement = <div className={cx(['start-content', 'flex-end'])}>{startContent}</div>;
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
    endElement = <div className={cx(['end-content', 'flex-end'])}>{endContent}</div>;
  }

  let childElement;
  if (children) {
    const childClassNames = cx([
      'flex-collapse',
      children.props.className,
    ]);
    childElement = React.cloneElement(children, { className: childClassNames });
  }

  const headerClass = isSubheader ? 'flex-subheader' : 'flex-header';

  return (
    <header {...customProps} className={cx(headerClass, customProps.className)}>
      {startElement}
      <div className={cx('flex-fill')}>
        {titleElement}
      </div>
      {childElement}
      {endElement}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
