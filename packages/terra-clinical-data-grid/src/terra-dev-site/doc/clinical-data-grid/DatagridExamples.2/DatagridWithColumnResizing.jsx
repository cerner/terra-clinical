import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);
const numColumnsDisplayed = 9;
const pinnedColumnsCount = 3;
const numRowsPerSection = 15;

class DatagridWithColumnResizing extends React.Component {
  static buildRows(sectionData, numberOfRowsToDisplay) {
    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionData.section.id}-Row${rowIndex}`,
      cells: (new Array(numColumnsDisplayed).fill(0)).map((cellVal, cellIndex) => ({
        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,
        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionData, numberOfRows) {
    return {
      id: sectionData.section.id,
      text: sectionData.section.text,
      rows: DatagridWithColumnResizing.buildRows(sectionData, numberOfRows),
    };
  }

  static buildColumns(data, start, end) {
    const col = (new Array(end - start));
    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {
      const columnHeaderInfo = data.allColumnIds[columnIndex];
      col[currentElementIndex] = {
        id: columnHeaderInfo.id,
        text: columnIndex !== 1 ? columnHeaderInfo.displayName : `${columnHeaderInfo.displayName} - Not resizable`,
        width: 200,
        ...(columnIndex !== 1) && { isResizable: true }, // The second column is not resizable in this example.
      };
    }
    return col;
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: DatagridWithColumnResizing.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1).concat(DatagridWithColumnResizing.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)),
    };
  }

  render() {
    const { columns } = this.state;
    const theme = this.context;

    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="column-resize-example"
          pinnedColumns={columns.slice(0, pinnedColumnsCount)}
          overflowColumns={columns.slice(pinnedColumnsCount, numColumnsDisplayed)}
          sections={[
            DatagridWithColumnResizing.buildSection(gridDataJSON.sections[0], numRowsPerSection),
            DatagridWithColumnResizing.buildSection(gridDataJSON.sections[1], numRowsPerSection),
          ]}
          hasResizableColumns
          fill
          onRequestColumnResize={(columnId, width) => {
            const columnToUpdate = { ...columns.find(element => element.id === columnId) };
            columnToUpdate.width = Math.max(width, 50);
            this.setState(prevState => (
              { columns: [...prevState.columns].map(val => (columnToUpdate.id === val.id ? columnToUpdate : val)) }
            ));
          }}
          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
        />
      </div>
    );
  }
}

DatagridWithColumnResizing.contextType = ThemeContext;

export default DatagridWithColumnResizing;
