import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);
const defaultColumnWidth = 200;
const firstColumnWidth = 200;
const numColumnsDisplayed = 10;
const pinnedColumnsCount = 0;
const numRowsPerSection = 15;

class DatagridWithNoPinnedColumns extends React.Component {
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
      rows: DatagridWithNoPinnedColumns.buildRows(sectionData, numColumnsDisplayed, numberOfRows),
    };
  }

  static buildColumns(data, start, end) {
    const col = (new Array(end - start));
    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {
      col[currentElementIndex] = {
        id: data.allColumnIds[columnIndex].id,
        text: data.allColumnIds[columnIndex].displayName,
        ...(columnIndex === 0) && { width: firstColumnWidth },
      };
    }
    return col;
  }

  render() {
    const theme = this.context;

    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="no-pinning-example"
          overflowColumns={DatagridWithNoPinnedColumns.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}
          sections={[
            DatagridWithNoPinnedColumns.buildSection(gridDataJSON.sections[0], numRowsPerSection),
          ]}
          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
          defaultColumnWidth={defaultColumnWidth}
          fill
        />
      </div>
    );
  }
}

DatagridWithNoPinnedColumns.contextType = ThemeContext;

export default DatagridWithNoPinnedColumns;
