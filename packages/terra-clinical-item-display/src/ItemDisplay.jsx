import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ItemDisplay.module.scss';

const cx = classNamesBind.bind(styles);

const TextStyles = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ATTENTION: 'attention',
  STRIKETHROUGH: 'strikeThrough',
  STRONG: 'strong',
};

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * The visual style to be applied to the display element.
   * One of `'primary'`, `'secondary'`, `'strong'`, `'attention'`, or `'strikeThrough'`.
   */
  textStyle: PropTypes.oneOf(Object.values(TextStyles)),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: PropTypes.bool,
  //  TODO: remove isDisabled in the next major release.
  /**
   * (Deprecated) Whether or not the display is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: PropTypes.element,
  /**
   * The position of the icon to be displayed next to the text,
   * noticeable when the text display wraps multiple line.
   * One of `'center'`, `'top'`, `'inline'`.
   */
  iconAlignment: PropTypes.oneOf(['center', 'top', 'inline']),
};

const defaultProps = {
  text: '',
  textStyle: 'primary',
  isTruncated: false,
  isDisabled: false,
  icon: undefined,
  iconAlignment: 'center',
};

const ItemDisplay = ({
  text,
  textStyle,
  isTruncated,
  isDisabled,
  icon,
  iconAlignment,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const componentClassNames = classNames(
    cx(
      'item-display',
      { 'is-disabled': isDisabled },
      { [`icon-${iconAlignment}`]: icon },
      theme.className,
    ),
    customProps.className,
  );
  const textClassNames = cx([
    'text',
    { 'is-truncated': isTruncated },
    { [`${textStyle}`]: textStyle === TextStyles.SECONDARY },
    { [`${textStyle}`]: textStyle === TextStyles.ATTENTION },
    { [`${textStyle}`]: textStyle === TextStyles.STRONG },
    { 'strike-through': textStyle === TextStyles.STRIKETHROUGH },
  ]);

  // TODO: remove this warning in the next major release.
  if (isDisabled) {
    // eslint-disable-next-line no-console
    console.warn('The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release.');
  }

  let displayIcon;
  if (icon) {
    displayIcon = <div className={cx('icon')}>{icon}</div>;
  }

  return (
    <div {...customProps} className={componentClassNames} aria-disabled={isDisabled}>
      {displayIcon}
      <div data-terra-clinical-item-display-text className={textClassNames}>{text}</div>
    </div>
  );
};

ItemDisplay.propTypes = propTypes;
ItemDisplay.defaultProps = defaultProps;

export default ItemDisplay;
export { TextStyles };
