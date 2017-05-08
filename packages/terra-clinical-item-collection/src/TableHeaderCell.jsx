import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ItemCollection.scss';

const propTypes = {
  /**
   * The column type of the header cell.
   **/
  columnType: PropTypes.string,
};

const defaultProps = {
  columnType: '',
};

const TableHeaderCell = ({ columnType, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames({ [`terraClinical-ItemCollection-column--${columnType}`]: columnType });

  return (
    <th {...attributes} />
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
