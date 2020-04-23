import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemDisplay.module.scss';
/* eslint-disable-next-line import/no-cycle */
import ItemComment from './ItemComment';

const cx = classNames.bind(styles);

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
  /**
   * Whether or not the display is disabled.
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
  // TODO: textStyle should be set to 'primary' on the next major version bump: https://github.com/cerner/terra-clinical/issues/526
  textStyle: undefined,
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
  const componentClassNames = cx([
    'item-display',
    { 'is-disabled': isDisabled },
    { [`icon-${iconAlignment}`]: icon },
    customProps.className,
  ]);
  const textClassNames = cx([
    'text',
    { 'is-truncated': isTruncated },
    { 'strike-through': textStyle === TextStyles.STRIKETHROUGH, [`${textStyle}`]: textStyle },
  ]);

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

ItemDisplay.Comment = ItemComment;

export default ItemDisplay;
export { TextStyles };
