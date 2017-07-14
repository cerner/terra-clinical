import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import CommentIndicator from 'terra-icon/lib/icon/IconComment';
import ItemDisplay from './ItemDisplay';
import styles from './ItemComment.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * Whether or not the text should be truncated in display.
   */
  isTruncated: PropTypes.bool,
};

const defaultProps = {
  text: '',
  isTruncated: false,
};

const ItemComment = ({
    text,
    isTruncated,
    ...customProps
  }) => (
    <ItemDisplay
      text={text}
      isTruncated={isTruncated}
      icon={<CommentIndicator />}
      {...customProps}
      className={cx('item-comment', customProps.className)}
    />
  );

ItemComment.propTypes = propTypes;
ItemComment.defaultProps = defaultProps;

export default ItemComment;
