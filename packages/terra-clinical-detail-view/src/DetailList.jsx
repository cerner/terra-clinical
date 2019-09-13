import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailList.module.scss';
import DetailListItem from './DetailListItem';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The detail view list title to be displayed above the list item(s).
   */
  title: PropTypes.string,

  /**
   * The detail item(s) to display information. Must be either a
   * DetailListItem element or array of DetailListItem elements.
   */
  children: PropTypes.oneOfType([
    PropTypes.objectOf(DetailListItem),
    PropTypes.arrayOf(PropTypes.objectOf(DetailListItem)),
  ]),
};

const defaultProps = {
  title: undefined,
  children: undefined,
};

const DetailList = ({ title, children, ...customProps }) => {
  let titleContent;
  if (title) {
    titleContent = (<div className={cx('title')}>{title}</div>);
  }

  return (
    <div {...customProps} data-terra-clincial-detail-list className={customProps.className}>
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
