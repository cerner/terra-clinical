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
   * Content to be displayed at the end of the header
   * The element passed as endContent will be wrapped in a div with flex attributes.
   */
  endContent: PropTypes.element,

  /*
  * IDs should be used with ‘aria-labelledby’ to associate headings with the corresponding page region.
  */
  id: PropTypes.string,

  /**
   * A Boolean indicating if element is a subheader.
   */
  isSubheader: PropTypes.bool,

  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing 'level' will not visually change the style of the content.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * Content to be displayed at the start of the header, placed before the title
   */
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar
   */
  text: PropTypes.string,

};

const defaultProps = {
  text: '',
  startContent: null,
  endContent: null,
  isSubheader: false,
  level: undefined,
  id: undefined,
};

const Header = ({
  children, text, startContent, endContent, isSubheader, level, id, ...customProps
}) => {
  const theme = useContext(ThemeContext);

  let titleElement;
  if (text && level) {
    const HeaderElement = `h${level}`;
    titleElement = (
      <div className={cx('title-container')}>
        <HeaderElement id={id} className={cx('title')}>
          {text}
        </HeaderElement>
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
