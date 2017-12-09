import React from 'react';
import PropTypes from 'prop-types';
import Table from 'terra-table';
import Utils from './_ItemCollectionUtils';
import styles from './ItemCollection.scss';

const propTypes = {
  /**
   * The items be rendered as a table row.
   */
  children: PropTypes.node,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child is selectable.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the table cells should be padded.
   */
  isTablePadded: PropTypes.bool,
  /**
   * Whether or not the table rows should be zebra striped.
   */
  isTableStriped: PropTypes.bool,
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain
   * the provided layout.
   */
  requiredElements: PropTypes.shape({
    hasStartAccessory: PropTypes.bool,
    numberOfDisplays: PropTypes.number,
    hasComment: PropTypes.bool,
    hasEndAccessory: PropTypes.bool,
  }),
};

function createTableLayout(requiredElements) {
  const { hasStartAccessory, numberOfDisplays, hasComment, hasEndAccessory } = requiredElements;

  const displays = [];
  if (numberOfDisplays) {
    for (let i = 0; i < numberOfDisplays; i += 1) {
      displays.push(<col key={i} data-terra-clinical-item-collection-display-column />);
    }
  }

  return (
    <colgroup>
      {hasStartAccessory && <col className={styles['start-accessory-column']} />}
      {displays}
      {hasComment && <col data-terra-clinical-item-collection-comment-column />}
      {hasEndAccessory && <col data-terra-clinical-item-collection-end-accessory-column />}
    </colgroup>
  );
}

function createTableRows(children, onSelect, requiredElements) {
  return React.Children.map(children, (child) => {
    const tableRowPieces = Utils.addMissingTableElements(child.props, requiredElements);
    const onSelectProps = onSelect && child.props.isSelectable ? Utils.createOnSelectProps(onSelect, child.key) : {};
    return React.cloneElement(child, { view: 'table', ...onSelectProps, ...tableRowPieces });
  });
}

const TableView = ({ children, onSelect, isTablePadded, isTableStriped, requiredElements }) => {
  const tableLayout = createTableLayout(requiredElements);
  const tableRows = createTableRows(children, onSelect, requiredElements);

  return (
    <Table
      data-terra-clinical-item-collection-table-view
      className={styles.table}
      isPadded={isTablePadded}
      isStriped={isTableStriped}
    >
      {tableLayout}
      <Table.Rows>
        {tableRows}
      </Table.Rows>
    </Table>
  );
};

TableView.propTypes = propTypes;

export default TableView;
