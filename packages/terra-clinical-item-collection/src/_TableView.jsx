import React from 'react';
import PropTypes from 'prop-types';
import Table from 'terra-table';
import Item from './Item';
import Header from './Header';
import Utils from './_ItemCollectionUtils';

const propTypes = {
  /**
   * The items be rendered as a table row.
   */
  children: PropTypes.node,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   */
  tableStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain the provided layout.
   */
  requiredElements: PropTypes.shape({
    startAccessory: PropTypes.bool,
    displays: PropTypes.Number,
    comment: PropTypes.bool,
    endAccessory: PropTypes.bool,
  }),
};

function createTableHeader(header, requiredElements) {
  const numberOfCols = Utils.numberOfElements(requiredElements);
  return React.cloneElement(header, { view: 'table', colSpan: numberOfCols });
}

function createTableRows(children, requiredElements) {
  return React.Children.map(children, (child, index) => {
    if (child.type === Item) {
      const tableRowPieces = Utils.addAnyMissingTableElements(child.props, requiredElements);
      return React.cloneElement(child, { view: 'table', index, ...tableRowPieces });
    }

    if (child.type === Header) {
      // const numberOfCols = Utils.numberOfElements(requiredElements);
      // return React.cloneElement(child, { view: 'table', colSpan: numberOfCols });
      return createTableHeader(child, requiredElements);
    }
    return child;
  });
}

const TableView = ({ children, onChange, tableStyles, requiredElements }) => {
  let tableHeader;
  let tableRows;

  if (children[0].type === Header) {
    tableHeader = createTableHeader(children[0], requiredElements);
    const rows = React.Children.toArray(children);
    tableRows = createTableRows(rows.splice(1, rows.length), requiredElements);
  } else {
    tableRows = createTableRows(children, requiredElements);
  }


  return (
    <Table style={{ tableLayout: 'fixed' }} {...tableStyles} >
      {tableHeader}
      <Table.Rows onChange={onChange}>
        {tableRows}
      </Table.Rows>
    </Table>
  );
};

TableView.propTypes = propTypes;

export default TableView;
