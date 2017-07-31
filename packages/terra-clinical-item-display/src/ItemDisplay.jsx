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
];

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * The visual styles to be applied to the display element.
   */
  textStyle: PropTypes.oneOf(textStyles),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: PropTypes.element,
};

const defaultProps = {
  text: '',
  textStyle: undefined,
  isTruncated: false,
  icon: undefined,
};

const ItemDisplay = ({
    text,
    textStyle,
    isTruncated,
    icon,
    ...customProps
  }) => {
  const textClassNames = cx([
    'text',
    { 'is-truncated': isTruncated },
    { [`${textStyle}`]: textStyle },
  ]);

  let displayIcon;
  if (icon) {
    displayIcon = <div className={cx('inline-icon')}>{icon}</div>;
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
