import React from 'react';
import classNames from 'classnames/bind';
import Table from 'terra-table';
import TableHeaderCell from './_TableHeaderCell';
import determineElements from './_DetermineElements';
import styles from './ItemCollection.scss';

const cx = classNames.bind(styles);


function createTableHeader(tableColumns) {
  const { startAccessoryElement, displayElements, commentElement, endAccessoryElement } = tableColumns;

  let startAccessoryHeader;
  if (startAccessoryElement) {
    startAccessoryHeader = <TableHeaderCell columnType="accessory" key="start_accessory" />;
  }

  const displayHeaders = [];
  if (displayElements) {
    for (let index = 0; index < displayElements; index += 1) {
      const contentKey = `display_header_${index + 1}`;
      displayHeaders[index] = (<TableHeaderCell columnType="display" key={contentKey} />);
    }
  }

  let commentHeader;
  if (commentElement) {
    commentHeader = <TableHeaderCell columnType="comment" key="comment" />;
  }

  let endAccessoryHeader;
  if (endAccessoryElement) {
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
  if (contentType === 'accessory') {
    return (<Table.Cell content={cellContent} key={keyValue} className={cx(`content-${contentType}`)} />);
  }
  return (<Table.Cell content={cellContent} key={keyValue} data-terra-clinical-item-collection-content={`${contentType}`} />);
}

function createTableRows(rows, tableColumns, selectedIndex) {
  const { startAccessoryElement, displayElements, commentElement, endAccessoryElement } = tableColumns;

  const tableRows = rows.map((row, rowIndex) => {
    const { startAccessory, displays, comment, endAccessory, itemStyles, ...customProps } = row;

    let startAccessoryContent;
    if (startAccessoryElement) {
      startAccessoryContent = createTableCell(startAccessory, 'start_accessory', 'accessory');
    }

    let displayContent = [];
    if (displayElements) {
      displayContent = row.displays.map((display, index) => {
        if (index < displayElements) {
          const displayKey = `display_${index + 1}`;
          return createTableCell(display, displayKey, 'display');
        }
        return null;
      });
      // Ensure the correct number to table cells are created if the number of displays provided are fewer than
      // than the display columns expected.
      while (displayContent.length < displayElements) {
        displayContent.push(createTableCell(null, `display_${displayContent.length + 1}`, 'display'));
      }
    }

    let commentContent;
    if (commentElement) {
      commentContent = createTableCell(comment, 'comment', 'comment');
    }

    let endAccessoryContent;
    if (endAccessoryElement) {
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
  const tableColumns = determineElements(rows[0]);
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
