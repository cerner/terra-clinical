import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './DetailListItem.scss';

const propTypes = {
  /**
   * The item to be displayed.
   **/
  item: PropTypes.element.isRequired,
};

const defaultProps = {
  item: undefined,
};

const DetailListItem = ({ item, ...customProps }) => {
  const detailListItemClassNames = classNames([
    'terraClinical-DetailListItem',
    customProps.className,
  ]);

  return (
    <div className={detailListItemClassNames}>
      {item}
    </div>
  );
};

DetailListItem.propTypes = propTypes;
DetailListItem.defaultProps = defaultProps;

export default DetailListItem;
