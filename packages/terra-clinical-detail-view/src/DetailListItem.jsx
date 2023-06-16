import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailListItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The detail view list item to be displayed.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is critical to screen reader users that the
   * isLabelValuePairList prop is set to true when the list contains label-value pairs. Label-value pairs should be
   * provided using the `<dt>` element for the label and the `<dd>` element for the value. The
   * `terra-clinical-label-value-view` component with `isChildOfDescriptionList={true}` can also be used as it will
   * return the label and value using the appropriate `<dt>` and `<dd>` elements.
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
