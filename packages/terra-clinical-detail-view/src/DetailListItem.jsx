import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The detail view list item to be displayed.
   */
  item: PropTypes.element.isRequired,
};

const defaultProps = {
};

const DetailListItem = ({ item, ...customProps }) => {
  const detailListItemClassNames = cx([
    'detail-list-item',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={detailListItemClassNames}>
      {item}
    </div>
  );
};

DetailListItem.propTypes = propTypes;
DetailListItem.defaultProps = defaultProps;

export default DetailListItem;
