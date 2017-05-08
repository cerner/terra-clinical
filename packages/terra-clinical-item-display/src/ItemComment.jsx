import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import CommentIndicator from 'terra-icon/lib/icon/IconComment';
import ItemDisplay from './ItemDisplay';
import './ItemComment.scss';

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
  }) => {
  const commentClassNames = classNames([
    'terraClinical-ItemComment',
    customProps.className,
  ]);

  const commentIcon = <CommentIndicator />;

  return (
    <ItemDisplay
      text={text}
      isTruncated={isTruncated}
      icon={commentIcon}
      {...customProps}
      className={commentClassNames}
    />
  );
};

ItemComment.propTypes = propTypes;
ItemComment.defaultProps = defaultProps;

export default ItemComment;
