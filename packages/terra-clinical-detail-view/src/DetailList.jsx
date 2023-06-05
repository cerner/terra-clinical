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
   * Indicates if the DetailList should be a description list for label-value pairs.
   */
  isDescriptionList: PropTypes.bool,
};

const defaultProps = {
  title: undefined,
  children: undefined,
  isDescriptionList: false,
};

const DetailList = ({
  title, children, isDescriptionList, ...customProps
}) => {
  let titleContent;
  let listContent;

  const level = useContext(HeadingLevelContext);
  const HeaderLevel = `h${level}`;

  if (title) {
    titleContent = (<HeaderLevel className={cx('title')}>{title}</HeaderLevel>);
  }

  if (isDescriptionList) {
    listContent = (<dl className={cx('list')}>{children}</dl>);
  } else {
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
