import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import CommentIndicator from 'terra-icon/lib/icon/IconComment';
import ItemDisplay from './ItemDisplay';
import styles from './ItemComment.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * Whether or not the text should be truncated in display. Note: To ensure keyboard accessibility,
   * if this prop is used, consumers will need to provide a method to disclose the rest of the text
   * so that it is accessible to keyboard users.
   */
  isTruncated: PropTypes.bool,
  /**
   * When true, will disable the comment.
   */
  isDisabled: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  text: '',
  isTruncated: false,
};

const ItemComment = ({
  text,
  isTruncated,
  isDisabled,
  intl,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const commentClass = classNames(
    cx(
      'item-comment',
      theme.className,
    ),
    customProps.className,
  );
  const commentIcon = isDisabled ? intl.formatMessage({ id: 'Terra.itemDisplay.disabledComment' }) : intl.formatMessage({ id: 'Terra.itemDisplay.comment' });
  return (
    <ItemDisplay
      text={text}
      isTruncated={isTruncated}
      isDisabled={isDisabled}
      icon={<CommentIndicator a11yLabel={commentIcon} className={cx('inline-icon')} />}
      {...customProps}
      className={commentClass}
    />
  );
};

ItemComment.propTypes = propTypes;
ItemComment.defaultProps = defaultProps;

export default injectIntl(ItemComment);
