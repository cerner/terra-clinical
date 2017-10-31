import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ItemCollection.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The column type of the header cell.
   */
  columnType: PropTypes.string,
};

const defaultProps = {
  columnType: '',
};

const TableHeaderCell = ({ columnType, ...customProps }) => {
  if (columnType === 'accessory') {
    return (<th {...customProps} className={cx(`column-${columnType}`)} />);
  }
  return (<th {...customProps} data-terra-clinical-item-collection-column={`${columnType}`} />);
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
