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
   * Sets the heading level &lt;h1&gt;-&lt;h6&gt;. One of `1`, `2`, `3`, `4`, `5`, `6`. This helps screen readers to announce appropriate heading levels.
   * Changing `level` will not visually change the style of the content.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is required to be set in order for the header text to have proper accessibility.
   * _Note: if the prop is not set level 1 by default. this would result in incorrect context of header in application._
   *
   * See the [Accessibility Guide](/components/terra-clinical-header/clinical-header/accessibility-guide) for additional information.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Text to be displayed as the title in the header bar.
   */
  text: PropTypes.string,

  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * The `title` prop has been deprecated and will be removed in next major version release. Use the `text` prop instead.
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

  /**
   * IDs should be used with 'aria-labelledby' to associate headings with the corresponding page area when needing to label regions.
   *
   * For an example, read [Accessibility Guide: Labeling Section Content](/components/terra-clinical-header/clinical-header/accessibility-guide#labeling-section-content) for additional information.
   */
  id: PropTypes.string,
};

const defaultProps = {
  title: '',
  startContent: null,
  endContent: null,
  isSubheader: false,
  text: '',
};

const Header = ({
  children, title, startContent, endContent, text, level, id, isSubheader, ...customProps
}) => {
  const theme = useContext(ThemeContext);
  if (title) {
    // TODO: remove on the next major version bump
    // eslint-disable-next-line no-console
    console.warn('The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`.');
  }
  if (!level) {
    // TODO: remove on the next major version bump
    // eslint-disable-next-line no-console
    console.warn('Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently.');
  }

  let titleElement;
  if (title || text) {
    const HeaderElement = (level) ? `h${level}` : 'h1';
    titleElement = (
      <div className={cx('title-container')}>
        <HeaderElement id={id} className={cx('title')}>
          {title || text}
        </HeaderElement>
      </div>
    );
  }

  const content = React.Children.map(children, child => (
    React.cloneElement(child, {
      className: classNames([cx('flex-collapse'), child.props.className]),
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
