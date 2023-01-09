import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';

const cx = classNames.bind(styles);

class MultipleDatagrids extends React.Component {
  constructor(props) {
    super(props);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    this.state = {
      selectedRow: undefined,
      selectedCell: undefined,
      columns: {
        'Column-0': {
          id: 'Column-0',
          width: 200,
          text: 'Column 0',
          isSelectable: true,
          sortIndicator: 'ascending',
        },
        'Column-1': {
          id: 'Column-1',
          width: 200,
          text: 'Column 1',
          isSelectable: true,
        },
        'Column-2': {
          id: 'Column-2',
          width: 200,
          text: 'Column 2',
          isSelectable: true,
        },
        'Column-3': {
          id: 'Column-3',
          width: 200,
          text: 'Column 3',
          isSelectable: true,
        },
      },
      sortedColumnId: 'Column-0',
      sortedColumnDirection: 'ascending',
    };
  }

  buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `Row-${rowIndex}`,
      isSelectable: true,
      isSelected: this.state.selectedRow && this.state.selectedRow.sectionId === sectionId && this.state.selectedRow.rowId === `Row-${rowIndex}`,
      cells: ((new Array(7).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        isSelectable: true,
        isSelected: this.state.selectedCell && this.state.selectedCell.sectionId === sectionId && this.state.selectedCell.rowId === `Row-${rowIndex}` && this.state.selectedCell.columnId === columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,
      })),
    }));

    return this.state.sortedColumnId && this.state.sortedColumnDirection === 'ascending' ? rows : rows.reverse();
  }

  buildSection(sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      rows: this.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    const { columns } = this.state;
    const theme = this.context;

    return (
      <div>
        <div className={cx('data-grid-small')}>
          <DataGrid
            id="Grid-1"
            pinnedColumns={[
              columns['Column-0'],
              columns['Column-1']
            ]}
            overflowColumns={[
              columns['Column-2'],
              columns['Column-3']
            ]}
            sections={[
              this.buildSection('Grid-1-Section-0', 'Grid 1 Section 0', 4),
              this.buildSection('Grid-1-Section-1', 'Grid 1 Section 1', 4),
            ]}
            fill
            onColumnSelect={(columnId) => {
              const newColumns = {};

              const columnToSort = { ...this.state.columns[columnId] };
              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';
              newColumns[`${columnId}`] = columnToSort;

              if (columnId !== this.state.sortedColumnId) {
                const previouslySortedColumn = { ...this.state.columns[this.state.sortedColumnId] };
                if (previouslySortedColumn) {
                  previouslySortedColumn.sortIndicator = undefined;
                  newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;
                }
              }

              this.setState(prevState => ({
                columns: { ...prevState.columns, ...newColumns },
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

        <div className={cx('data-grid-basic')}>
          <DataGrid
            id="Grid-2"
            pinnedColumns={[
              columns['Column-0'],
              columns['Column-1']
            ]}
            overflowColumns={[
              columns['Column-2'],
              columns['Column-3']
            ]}
            sections={[
              this.buildSection('Grid-2-Section-0', 'Grid 2 Section 0', 4),
              this.buildSection('Grid-2-Section-1', 'Grid 2 Section 1', 4),
            ]}
            fill
            onColumnSelect={(columnId) => {
              const newColumns = {};

              const columnToSort = { ...this.state.columns[columnId] };
              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';
              newColumns[`${columnId}`] = columnToSort;

              if (columnId !== this.state.sortedColumnId) {
                const previouslySortedColumn = { ...this.state.columns[this.state.sortedColumnId] };
                if (previouslySortedColumn) {
                  previouslySortedColumn.sortIndicator = undefined;
                  newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;
                }
              }

              this.setState(prevState => ({
                columns: { ...prevState.columns, ...newColumns },
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
      </div>
    );
  }
}

MultipleDatagrids.contextType = ThemeContext;

export default MultipleDatagrids;
