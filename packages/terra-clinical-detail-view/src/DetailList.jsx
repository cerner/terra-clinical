import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './DetailList.scss';
import DetailListItem from './DetailListItem';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The title to be displayed above the list items.
   */
  title: PropTypes.string,

  /**
   * The detail item(s) to display information. Must be a
   * DetailListItem element.
   */
  children: PropTypes.oneOfType([
    PropTypes.objectOf(DetailListItem),
    PropTypes.arrayOf(PropTypes.objectOf(DetailListItem)),
  ]),
};

const defaultProps = {
  title: '',
};

const DetailList = ({ title, children, ...customProps }) => {
  let titleContent;
  if (title) {
    titleContent = (<div className={cx('title')}>{title}</div>);
  }

  return (
    <div {...customProps} data-class="detail-list" className={customProps.className}>
      {titleContent}
      <div className={cx('list')}>
        {children}
      </div>
    </div>
  );
};

DetailList.propTypes = propTypes;
DetailList.defaultProps = defaultProps;

export default DetailList;
