import React from 'react';
import Table from 'terra-table';
import TableHeaderCell from './_TableHeaderCell';

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
      {startAccessoryHeader}
      {displayHeaders}
      {commentHeader}
      {endAccessoryHeader}
    </Table.Header>
  );
}

function createTableCell(content, keyValue, contentType) {
  const cellContent = content != null ? content : ' ';
  const cellName = `terraClinical-ItemCollection--${contentType}`;
  return <Table.Cell content={cellContent} key={keyValue} className={cellName} />;
}

function createTableRows(rows, tableColumns, selectedIndex) {
  const tableRows = rows.map((row, rowIndex) => {
    const { startAccessory, displays, comment, endAccessory, itemStyles, ...customProps } = row;
    const { startAccessoryColumn, displayColumns, commentColumn, endAccessoryColumn } = tableColumns;

    let startAccessoryContent;
    if (startAccessoryColumn) {
      startAccessoryContent = createTableCell(startAccessory, 'start_accessory', 'accessory');
    }

    let displayContent = [];
    if (displayColumns) {
      displayContent = row.displays.map((display, index) => {
        const displayKey = `display_${index + 1}`;
        return createTableCell(display, displayKey, 'display');
      });
    }

    let commentContent;
    if (commentColumn) {
      commentContent = createTableCell(comment, 'comment', 'comment');
    }

    let endAccessoryContent;
    if (endAccessoryColumn) {
      endAccessoryContent = createTableCell(endAccessory, 'end_accessory', 'accessory');
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
