import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './ItemCollection.scss';

const propTypes = {
  /**
   * The column width of the header cell.
   **/
  columnWidth: PropTypes.string,
};

const defaultProps = {
  columnWidth: 'small',
};

const TableHeaderCell = ({ columnWidth, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames(['terraClinical-ItemCollection-column-width',
    { [`terraClinical-ItemCollection-column-width-${columnWidth}`]: columnWidth },
  ]);

  return (
    <th {...attributes} />
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
