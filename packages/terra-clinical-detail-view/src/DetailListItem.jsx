import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
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
    <div {...customProps} className={detailListItemClassNames}>
      {item}
    </div>
  );
};

DetailListItem.propTypes = propTypes;
DetailListItem.defaultProps = defaultProps;

export default DetailListItem;
