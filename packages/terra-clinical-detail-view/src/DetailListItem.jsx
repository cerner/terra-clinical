import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './DetailListItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The item to be displayed.
   */
  item: PropTypes.element.isRequired,
};

const defaultProps = {
  item: undefined,
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
