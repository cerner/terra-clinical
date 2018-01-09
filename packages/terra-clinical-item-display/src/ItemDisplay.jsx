import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ItemDisplay.scss';
import ItemComment from './ItemComment';

const cx = classNames.bind(styles);

const textStyles = [
  'secondary',
  'attention',
  'strikeThrough',
  'strong',
];

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * The visual style to be applied to the display element. One of: `secondary`, `attention`, `strikeThrough`, `strong`.
   */
  textStyle: PropTypes.oneOf(textStyles),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * Whether or not the text should be styled as invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: PropTypes.element,
};

const defaultProps = {
  text: '',
  textStyle: undefined,
  isTruncated: false,
  isInvalid: false,
  icon: undefined,
};

const ItemDisplay = ({
    text,
    textStyle,
    isTruncated,
    isInvalid,
    icon,
    ...customProps
  }) => {
  const textClassNames = cx([
    'text',
    { 'is-invalid': isInvalid },
    { 'is-truncated': isTruncated },
    { 'strike-through': textStyle === 'strikeThrough', [`${textStyle}`]: textStyle },
  ]);

  let displayIcon;
  if (icon) {
    const iconClasses = cx('inline-icon', { 'is-invalid': isInvalid });
    displayIcon = <div className={iconClasses}>{icon}</div>;
  }

  return (
    <div {...customProps} className={cx('item-display', customProps.className)}>
      {displayIcon}
      <div className={textClassNames}>{text}</div>
    </div>
  );
};

ItemDisplay.propTypes = propTypes;
ItemDisplay.defaultProps = defaultProps;
ItemDisplay.Comment = ItemComment;

export default ItemDisplay;
