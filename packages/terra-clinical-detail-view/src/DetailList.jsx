import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './DetailList.scss';
import DetailListItem from './DetailListItem';

const propTypes = {
  /**
   * The title to be displayed above the list items.
   **/
  title: PropTypes.string,

  /**
   * The detail item(s) to display information. Must be a
   * DetailListItem element.
   **/
  children: PropTypes.oneOfType([
    PropTypes.objectOf(DetailListItem),
    PropTypes.arrayOf(PropTypes.objectOf(DetailListItem)),
  ]),
};

const defaultProps = {
  title: '',
};

const DetailList = ({ title, children, ...customProps }) => {
  const detailListClassNames = classNames([
    'terraClinical-DetailList',
    customProps.className,
  ]);

  let titleContent;
  if (title) {
    titleContent = (<div className="terraClinical-DetailList-title">{title}</div>);
  }

  return (
    <div {...customProps} className={detailListClassNames}>
      {titleContent}
      <div className="terraClinical-DetailList-list">
        {children}
      </div>
    </div>
  );
};

DetailList.propTypes = propTypes;
DetailList.defaultProps = defaultProps;

export default DetailList;
