import React from 'react';
import Table from 'terra-table';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import TableHeaderCell from './_TableHeaderCell';
import './ItemCollection.scss';

function determineTableColumns(row) {
  const { startAccessory, displays, comment, endAccessory } = row;

  const columns = {};
  columns.startAccessoryColumn = startAccessory !== undefined;
  if (displays) {
    columns.displayColumns = displays.length < 8 ? displays.length : 8;
  }
  columns.commentColumn = comment !== undefined;
  columns.endAccessoryColumn = endAccessory !== undefined;

  return columns;
}

function createTableHeader(tableColumns) {
  const { startAccessoryColumn, displayColumns, commentColumn, endAccessoryColumn } = tableColumns;

  let startAccessoryHeader;
  if (startAccessoryColumn) {
    startAccessoryHeader = <TableHeaderCell columnType="accessory" key="start_accessory" />;
  }

  const displayHeaders = [];
  if (displayColumns) {
    for (let index = 0; index < displayColumns; index += 1) {
      const contentKey = `display_header_${index + 1}`;
      displayHeaders[index] = (<TableHeaderCell columnType="display" key={contentKey} />);
    }
  }

  let commentHeader;
  if (commentColumn) {
    commentHeader = <TableHeaderCell columnType="comment" key="comment" />;
  }

  let endAccessoryHeader;
  if (endAccessoryColumn) {
    endAccessoryHeader = <TableHeaderCell columnType="accessory" key="end_accessory" />;
  }

  return (
    <Table.Header style={{ visibility: 'hidden' }} >
      { startAccessoryHeader }
      { displayHeaders }
      { commentHeader }
      { endAccessoryHeader }
    </Table.Header>
  );
}

function createTableRows(rows, tableColumns, selectedIndex) {
  const tableRows = rows.map((row, rowIndex) => {
    const { startAccessory, displays, comment, endAccessory, itemStyles, ...customProps } = row;
    const { startAccessoryColumn, displayColumns, commentColumn, endAccessoryColumn } = tableColumns;

    let startAccessoryContent;
    if (startAccessoryColumn) {
      const content = startAccessory != null ? startAccessory : ' ';
      startAccessoryContent = <Table.Cell content={content} key="start_accessory" />;
    }

    const displayContent = [];
    if (displayColumns) {
      for (let index = 0; index < displayColumns; index += 1) {
        const contentKey = `display_${index + 1}`;
        const content = row.displays[index] != null ? row.displays[index] : ' ';
        displayContent[index] = (<Table.Cell content={content} key={contentKey} />);
      }
    }

    let commentContent;
    if (commentColumn) {
      const content = comment != null ? comment : ' ';
      commentContent = <Table.Cell content={content} key="comment" />;
    }

    let endAccessoryContent;
    if (endAccessoryColumn) {
      const content = endAccessory != null ? endAccessory : ' ';
      endAccessoryContent = <Table.Cell content={content} key="end_accessory" />;
    }

    const rowKey = rowIndex;
    const selected = rowIndex === selectedIndex;
    return (
      <Table.Row {...customProps} key={rowKey} isSelectable isSelected={selected}>
        {startAccessoryContent}
        {displayContent}
        {commentContent}
        {endAccessoryContent}
      </Table.Row>
    );
  });

  return tableRows;
}

function createTableView(rows, tableStyles, selectedIndex, handleSelection) {
  const tableColumns = determineTableColumns(rows[0]);
  const tableHeader = createTableHeader(tableColumns);
  const tableRows = createTableRows(rows, tableColumns, selectedIndex);
  return (
    <Table style={{ tableLayout: 'fixed' }} {...tableStyles} >
      {tableHeader}
      <Table.SingleSelectableRows onChange={handleSelection}>
        {tableRows}
      </Table.SingleSelectableRows>
    </Table>
  );
}

export default createTableView;
