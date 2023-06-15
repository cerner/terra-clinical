import React, { Children, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailList.module.scss';
import DetailListItem from './DetailListItem';
import { HeadingLevelContext } from './HeadingLevelContext';

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

  /**
   * The list type based on whether the list items are single HTML elements or label-value pairs.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is critical to screen reader users that the
   * DetailList type prop is set to the value that matches the items in the list. Label-value pairs should be provided
   * using the `<dt>` element for the label and the `<dd>` element for the value. The `terra-clinical-label-value-view`
   * component with `isChildOfDescriptionList={true}` can also be used as it will return the label and value using the
   * appropriate `<dt>` and `<dd>` elements.
   *
   * One of `'singleItem'` or `'labelValuePair'`.
   */
  type: PropTypes.oneOf(['singleItem', 'labelValuePair']),
};

const defaultProps = {
  title: undefined,
  children: undefined,
  type: 'singleItem',
};

const DetailList = ({
  title, children, type, ...customProps
}) => {
  const level = useContext(HeadingLevelContext);
  const HeaderLevel = `h${level}`;
  let titleContent;
  let listContent;

  if (title) {
    titleContent = (<HeaderLevel className={cx('title')}>{title}</HeaderLevel>);
  }

  if (type === 'labelValuePair') {
    listContent = (<dl className={cx('list')}>{children}</dl>);
  } else if (type === 'singleItem') {
    listContent = (
      <ul className={cx('list')}>
        {Children.map(children, child => (
          <li key={child.id} className={cx('list-item')}>
            {child}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div {...customProps} data-terra-clinical-detail-list className={customProps.className}>
      {titleContent}
      {listContent}
    </div>
  );
};

DetailList.propTypes = propTypes;
DetailList.defaultProps = defaultProps;

export default DetailList;
