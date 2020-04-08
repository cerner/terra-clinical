import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Header.module.scss';

const cx = classNamesBind.bind(styles);

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

const Header = ({
  children, title, startContent, endContent, isSubheader, ...customProps
}) => {
  const theme = useContext(ThemeContext) || {};

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

  const content = React.Children.map(children, child => (
    React.cloneElement(child, {
      className: classNames([cx('flex-collapse'), children.props.className]),
    })
  ));

  const headerClassNames = classNames([
    cx([
      'flex-header',
      { subheader: isSubheader },
      theme.className,
    ]),
    customProps.className,
  ]);

  return (
    <header {...customProps} className={headerClassNames}>
      {startContent && <div className={cx('flex-end')}>{startContent}</div>}
      <div className={cx('flex-fill')}>
        {titleElement}
      </div>
      {content}
      {endContent && <div className={cx('flex-end')}>{endContent}</div>}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
