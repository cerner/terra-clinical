import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  attributes.className = classNames([
    'terraClinical-ItemCollection-column',
    { [`terraClinical-ItemCollection-column--${columnType}`]: columnType },
  ]);

  return (
    <th {...attributes} />
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
