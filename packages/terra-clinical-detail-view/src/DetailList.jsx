import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailList.module.scss';
import DetailListItem from './DetailListItem';
import { LevelContext } from './LevelContext';

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
};

const defaultProps = {
  title: undefined,
  children: undefined,
};

const DetailList = ({ title, children, ...customProps }) => {
  let titleContent;
  let listContent;
  const level = useContext(LevelContext);
  const HeaderLevel = `h${level}`;
  if (title) {
    titleContent = (<HeaderLevel className={cx('title')}>{title}</HeaderLevel>);
  }

  if (children[0].props.useItem) {
    listContent = (
      <ul className={cx('list')}>
        {children.map((name) => (
          <li key={name.id}>
            {name}
          </li>
        ))}
      </ul>
    );
  } else {
    listContent = (
      <dl className={cx('list')}>
        {children.map((name) => (
          <React.Fragment>
            <dt>{name.props.label}</dt>
            <dd>{name.props.textValue}</dd>
          </React.Fragment>
        ))}
      </dl>
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
