import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);

const defaultColumnWidth = 250;
const firstColumnWidth = 400;
const numColumnsDisplayed = 10;
const pinnedColumnsCount = 3;
const numRowsPerSection = 15;

class StaticDataGrid extends React.Component {
  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {
    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionData.section.id}-Row${rowIndex}`,
      height: (rowIndex + 1) % 5 === 0 ? '7rem' : undefined,
      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({
        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,
        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionData, numberOfRows) {
    return {
      id: sectionData.section.id,
      rows: StaticDataGrid.buildRows(sectionData, numColumnsDisplayed, numberOfRows),
    };
  }

  static buildColumns(data, start, end) {
    const col = (new Array(end - start));
    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {
      const columnHeaderInfo = data.allColumnIds[columnIndex];
      col[currentElementIndex] = {
        id: columnHeaderInfo.id,
        text: columnHeaderInfo.displayName,
        ...(columnIndex === 0) && { width: firstColumnWidth },
      };
    }
    return col;
  }

  render() {
    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="basic-example"
          pinnedColumns={StaticDataGrid.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}
          overflowColumns={StaticDataGrid.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}
          sections={[
            StaticDataGrid.buildSection(gridDataJSON.sections[0], numRowsPerSection),
          ]}
          defaultColumnWidth={defaultColumnWidth}
          fill
        />
      </div>
    );
  }
}

export default StaticDataGrid;
