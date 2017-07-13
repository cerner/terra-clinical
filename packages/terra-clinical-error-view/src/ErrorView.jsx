import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Button from 'terra-button';
import ErrorIcon from './ErrorIcon';
import styles from './ErrorView.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The name of the error to display.
   */
  name: PropTypes.string,
  /**
   * The error description to display.
   */
  description: PropTypes.string,
  /**
   * The display text for the button.
   */
  buttonText: PropTypes.string,
  /**
   * The click callback function that should be applied to the button.
   */
  buttonOnClick: PropTypes.func,
  /**
   * Whether or not the error glyph should be displayed.
   */
  isGlyphHidden: PropTypes.bool,
};

const defaultProps = {
  name: '',
  description: '',
  buttonText: '',
  buttonOnClick: undefined,
  isGlyphHidden: false,
};

const ErrorView = ({
    name,
    description,
    buttonText,
    buttonOnClick,
    isGlyphHidden,
    ...customProps
  }) => {
  let glyphSection;
  if (!isGlyphHidden) {
    const errorIcon = <ErrorIcon />;
    glyphSection = <div className={cx('glyph')}>{errorIcon}</div>;
  }

  let nameSection;
  if (name) {
    let nameDisplay = name;
    if (name && description) {
      nameDisplay += '.  ';
    }
    nameSection = <b>{nameDisplay}</b>;
  }

  let buttonSection;
  if (buttonText) {
    const button = <Button variant="secondary" text={buttonText} onClick={buttonOnClick} />;
    buttonSection = <div className={cx('button')}>{button}</div>;
  }

  return (
    <div {...customProps} className={cx('error-view', customProps.className)}>
      {glyphSection}
      <p className={cx('text')}>
        {nameSection}
        {description}
      </p>
      {buttonSection}
    </div>
  );
};

ErrorView.propTypes = propTypes;
ErrorView.defaultProps = defaultProps;

export default ErrorView;
