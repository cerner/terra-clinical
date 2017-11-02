import React from 'react';
import PropTypes from 'prop-types';
import Table from 'terra-table';
import Item from './Item';
import Utils from './_ItemCollectionUtils';
import styles from './ItemCollection.scss';

const propTypes = {
  /**
   * The items be rendered as a table row.
   */
  children: PropTypes.node,
  /**
   * The styles to spread to the table. Table style options are isPadded and isStriped.
   */
  tableStyles: PropTypes.shape({
    isPadded: PropTypes.bool,
    isStriped: PropTypes.bool,
  }),
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain
   * the provided layout.
   */
  requiredElements: PropTypes.shape({
    startAccessory: PropTypes.bool,
    displays: PropTypes.Number,
    comment: PropTypes.bool,
    endAccessory: PropTypes.bool,
  }),
};

function createTableLayout(requiredElements) {
  const displays = [];
  if (requiredElements.displaysRequired) {
    for (let i = 0; i < requiredElements.displaysRequired; i += 1) {
      displays.push(<col key={i} />);
    }
  }

  return (
    <colgroup>
      {requiredElements.startAccessoryRequired && <col className={styles['accessory-column']} />}
      {displays}
      {requiredElements.commentRequired && <col />}
      {requiredElements.endAccessoryRequired && <col className={styles['accessory-column']} />}
    </colgroup>
  );
}

function createTableRows(children, requiredElements) {
  return React.Children.map(children, (child, index) => {
    if (child.type === Item) {
      const tableRowPieces = Utils.addAnyMissingTableElements(child.props, requiredElements);
      return React.cloneElement(child, { view: 'table', index, ...tableRowPieces });
    }

    return child;
  });
}

const TableView = ({ children, tableStyles, requiredElements }) => {
  const tableLayout = createTableLayout(requiredElements);
  const tableRows = createTableRows(children, requiredElements);

  return (
    <Table className={styles.table} {...tableStyles} >
      {tableLayout}
      <Table.Rows>
        {tableRows}
      </Table.Rows>
    </Table>
  );
};

TableView.propTypes = propTypes;

export default TableView;
