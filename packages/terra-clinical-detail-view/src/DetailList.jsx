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
   * Whether or not the Detail List is a list of label-value pairs.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) It is critical to screen reader users that the
   * isLabelValuePairList prop is set to `true` when the list contains label-value pairs. Label-value pairs should be
   * provided using the `<dt>` element for the label and the `<dd>` element for the value. The
   * `terra-clinical-label-value-view` component with `isChildOfDescriptionList={true}` can also be used as it will
   * return the label and value using the appropriate `<dt>` and `<dd>` elements.
   */
  isLabelValuePairList: PropTypes.bool,
};

const defaultProps = {
  title: undefined,
  children: undefined,
  isLabelValuePairList: false,
};

const DetailList = ({
  title, children, isLabelValuePairList, ...customProps
}) => {
  const level = useContext(HeadingLevelContext);
  const HeaderLevel = `h${level}`;
  let titleContent;

  if (title) {
    titleContent = (<HeaderLevel className={cx('title')}>{title}</HeaderLevel>);
  }

  const listContent = isLabelValuePairList
    ? <dl className={cx('list')}>{children}</dl>
    : (
      <ul className={cx('list')}>
        {Children.map(children, child => (
          child ? (
            <li key={child.id} className={cx('list-item')}>
              {child}
            </li>
          ) : null
        ))}
      </ul>
    );

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
