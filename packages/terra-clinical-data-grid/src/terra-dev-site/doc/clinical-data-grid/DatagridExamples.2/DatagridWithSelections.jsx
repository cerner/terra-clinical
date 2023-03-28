import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);

const pinnedColumnsCount = 3;
const numColumnsDisplayed = 8;
const numberOfRowsPerSectionToDisplay = 15;

class DatagridWithSelections extends React.Component {
  static buildColumns(data, start, end) {
    const col = (new Array(end - start));
    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {
      const columnHeaderInfo = data.allColumnIds[columnIndex];
      col[currentElementIndex] = {
        id: columnHeaderInfo.id,
        text: columnHeaderInfo.displayName,
        width: 200,
        isSelectable: true,
        ...(columnIndex === 0) && { sortIndicator: 'ascending' },
      };
    }
    return col;
  }

  constructor(props) {
    super(props);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    this.state = {
      selectedRow: undefined,
      selectedCell: undefined,
      columns: DatagridWithSelections.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1).concat(DatagridWithSelections.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed)),
      sortedColumnId: gridDataJSON.allColumnIds[0].id,
      sortedColumnDirection: 'ascending',
    };
  }

  buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {
    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionData.section.id}-Row${rowIndex}`,
      isSelectable: true,
      isSelected: this.state.selectedRow && this.state.selectedRow.sectionId === sectionData.section.id && this.state.selectedRow.rowId === `${sectionData.section.id}-Row${rowIndex}`,
      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({
        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,
        isSelectable: true,
        isSelected: this.state.selectedCell && this.state.selectedCell.sectionId === sectionData.section.id && this.state.selectedCell.rowId === `${sectionData.section.id}-Row${rowIndex}` && this.state.selectedCell.columnId === sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,
        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,
      })),
    }));

    return this.state.sortedColumnId && this.state.sortedColumnDirection === 'ascending' ? rows : rows.reverse();
  }

  buildSection(sectionData, numberOfRows) {
    return {
      id: sectionData.section.id,
      text: sectionData.section.text,
      rows: this.buildRows(sectionData, this.state.columns.length, numberOfRows),
    };
  }

  render() {
    const { columns } = this.state;
    const theme = this.context;

    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="selections-example"
          pinnedColumns={columns.slice(0, pinnedColumnsCount)}
          overflowColumns={columns.slice(3, numColumnsDisplayed)}
          sections={[
            this.buildSection(gridDataJSON.sections[0], numberOfRowsPerSectionToDisplay),
            this.buildSection(gridDataJSON.sections[1], numberOfRowsPerSectionToDisplay),
          ]}
          fill
          onColumnSelect={(columnId) => {
            const newColumns = {};
            const columnToSort = { ...columns.find(element => element.id === columnId) };
            columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';
            newColumns[`${columnId}`] = columnToSort;

            if (columnId !== this.state.sortedColumnId) {
              const previouslySortedColumn = { ...columns.find(element => element.id === this.state.sortedColumnId) };
              if (previouslySortedColumn) {
                previouslySortedColumn.sortIndicator = undefined;
                newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;
              }
            }

            this.setState(prevState => ({
              columns: [...prevState.columns].map(val => (newColumns[val.id] ? newColumns[val.id] : val)),
              sortedColumnId: columnId,
              sortedColumnDirection: columnToSort.sortIndicator,
            }));
          }}
          onCellSelect={(sectionId, rowId, columnId) => {
            this.setState({
              selectedRow: undefined,
              selectedCell: {
                sectionId,
                rowId,
                columnId,
              },
            });
          }}
          hasSelectableRows
          onRowSelect={(sectionId, rowId) => {
            this.setState({
              selectedCell: undefined,
              selectedRow: {
                sectionId,
                rowId,
              },
            });
          }}
          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
        />
      </div>
    );
  }
}

DatagridWithSelections.contextType = ThemeContext;

export default DatagridWithSelections;
