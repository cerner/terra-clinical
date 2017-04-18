import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './DetailList.scss';
import DetailListItem from './DetailListItem';

const propTypes = {
  /**
   * The title to be displayed abo list.
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
    <div className={detailListClassNames}>
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
