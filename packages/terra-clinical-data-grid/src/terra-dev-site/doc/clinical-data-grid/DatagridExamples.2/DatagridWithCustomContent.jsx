import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import ItemView from 'terra-clinical-item-view';
import classNames from 'classnames/bind';
import CustomHeaderCellLayout from './CustomHeaderCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);
const numColumnsDisplayed = 10;
const pinnedColumnsCount = 3;
const numRowsPerSection = 15;

class DatagridWithCustomContent extends React.Component {
  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {
    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionData.section.id}-Row${rowIndex}`,
      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({
        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,
        component: (
          <ItemView
            displays={[
              <ItemView.Display isTruncated text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,
              <ItemView.Display isTruncated text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent2} />,
              <ItemView.Display isTruncated {...(sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent2 === '' ? {} : { text: sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent3 })} />,
            ]}
            className={cx('data-grid-row-style')}
          />
        ),
      })),
    }));
    return rows;
  }

  static buildSection(sectionData, numberOfRows) {
    return {
      id: sectionData.section.id,
      rows: DatagridWithCustomContent.buildRows(sectionData, numColumnsDisplayed, numberOfRows),
    };
  }

  static buildColumns(data, start, end) {
    const col = (new Array(end - start));
    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {
      const columnHeaderInfo = data.allColumnIds[columnIndex];
      col[currentElementIndex] = {
        id: columnHeaderInfo.id,
        width: 200,
        component: (<CustomHeaderCellLayout primaryText={columnHeaderInfo.displayName} secondaryText={gridDataJSON.secondayColumnHeadings[columnIndex]} />),
      };
    }
    return col;
  }

  render() {
    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="basic-example"
          pinnedColumns={DatagridWithCustomContent.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}
          overflowColumns={DatagridWithCustomContent.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}
          sections={[
            DatagridWithCustomContent.buildSection(gridDataJSON.sections[0], numRowsPerSection),
          ]}
          rowHeight="5rem"
          headerHeight="4rem"
          fill
        />
      </div>
    );
  }
}

export default DatagridWithCustomContent;
