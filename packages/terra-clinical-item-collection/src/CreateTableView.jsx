import React from 'react';
import Table from 'terra-table';
import TableHeaderCell from './TableHeaderCell';
import './ItemCollection.scss';

function createTableHeader(columnWidths) {
  const { startAccessoryWidth, displayWidths, commentWidth, endAccessoryWidth } = columnWidths;

  let startAccessoryHeader;
  if (startAccessoryWidth) {
    startAccessoryHeader = <TableHeaderCell columnWidth={startAccessoryWidth} key={'start_accessory'} />;
  }

  let displayHeaders;
  if (displayWidths) {
    displayHeaders = (
      displayWidths.slice(0, 8).map((displayWidth, index) => {
        const contentKey = `display_${index}`;
        return (<TableHeaderCell columnWidth={displayWidth} key={contentKey} />);
      })
    );
  }

  let commentHeader;
  if (commentWidth) {
    commentHeader = <TableHeaderCell columnWidth={commentWidth} key={'comment'} />;
  }

  let endAccessoryHeader;
  if (endAccessoryWidth) {
    endAccessoryHeader = <TableHeaderCell columnWidth={endAccessoryWidth} key={'end_accessory'} />;
  }

  return (
    <Table.Header style={{ display: 'none' }} >
      { startAccessoryHeader }
      { displayHeaders }
      { commentHeader }
      { endAccessoryHeader }
    </Table.Header>
  );
}

function createTableRows(rows, columnStructure) {
  const tableRows = rows.map((row, rowIndex) => {
    const { startAccessory, displays, comment, endAccessory, itemStyles, ...customProps } = row;
    const { startAccessoryWidth, displayWidths, commentWidth, endAccessoryWidth } = columnStructure;

    let startAccessoryContent;
    if (startAccessoryWidth) {
      const content = startAccessory != null ? startAccessory : ' ';
      startAccessoryContent = <Table.Cell content={content} key={'start_accessory'} />;
    }

    let displayContent;
    if (displayWidths) {
      displayContent = (
        displayWidths.slice(0, 8).map((display, index) => {
          const contentKey = `display_${index}`;
          const content = row.displays[index] != null ? row.displays[index] : ' ';
          return (<Table.Cell content={content} key={contentKey} />);
        })
      );
    }

    let commentContent;
    if (commentWidth) {
      const content = comment != null ? comment : ' ';
      commentContent = <Table.Cell content={content} key={'comment'} />;
    }

    let endAccessoryContent;
    if (endAccessoryWidth) {
      const content = endAccessory != null ? endAccessory : ' ';
      endAccessoryContent = <Table.Cell content={content} key={'end_accessory'} />;
    }

    const rowKey = rowIndex;
    return (
      <Table.Row {...customProps} key={rowKey}>
        {startAccessoryContent}
        {displayContent}
        {commentContent}
        {endAccessoryContent}
      </Table.Row>
    );
  });

  return tableRows;
}

function createTableView(columnWidths, rows, tableStyles) {
  const tableHeader = createTableHeader(columnWidths);
  const tableRows = createTableRows(rows, columnWidths);
  return (
    <Table {...tableStyles}>
      {tableHeader}
      <Table.SingleSelectableRows>
        {tableRows}
      </Table.SingleSelectableRows>
    </Table>
  );
}

export default createTableView;
