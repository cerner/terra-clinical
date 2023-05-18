import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The detail view list item to be displayed.
   */
  item: PropTypes.element,
  /**
   * The label of the detail view list item.
   */
  label: PropTypes.string,
  /**
  * The text to be displayed underneath the label with the provided styling.
  */
  textValue: PropTypes.string,
  /**
  * Boolean that indicates whether or not the item or label and textValue should be displayed.
  */
  useItem: PropTypes.bool,
};

const defaultProps = {
  item: undefined,
  label: undefined,
  textValue: undefined,
  useItem: true,
};

const DetailListItem = ({
  item, label, textValue, useItem, ...customProps
}) => {
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
