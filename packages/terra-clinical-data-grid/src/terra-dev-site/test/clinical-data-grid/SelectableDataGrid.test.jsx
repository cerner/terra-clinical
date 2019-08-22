import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';

import ContentCellLayout from './ContentCellLayout';
import styles from './ClinicalDataGridCommon.test.module.scss';

const cx = classNames.bind(styles);

class SelectableDataGrid extends React.Component {
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
        'Column-4': {
          id: 'Column-4',
          width: 200,
          text: 'Column 4',
          isSelectable: true,
        },
        'Column-5': {
          id: 'Column-5',
          width: 200,
          text: 'Column 5',
          isSelectable: true,
        },
        'Column-6': {
          id: 'Column-6',
          width: 200,
          text: 'Column 6',
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
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
      isSelectable: true,
      isSelected: this.state.selectedRow && this.state.selectedRow.sectionId === sectionId && this.state.selectedRow.rowId === `Row-${rowIndex}`,
      cells: ((new Array(7).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        isSelectable: true,
        isSelected: this.state.selectedCell && this.state.selectedCell.sectionId === sectionId && this.state.selectedCell.rowId === `Row-${rowIndex}` && this.state.selectedCell.columnId === columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} label={`${sectionId}-${rowIndex}-${columnKey}`} />,
      })),
    }));

    return this.state.sortedColumnId && this.state.sortedColumnDirection === 'ascending' ? rows : rows.reverse();
  }

  buildSection(sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      isCollapsible: sectionId === 'section_1',
      rows: this.buildRows(sectionId, numberOfRows),
    };
  }

  /* eslint-disable react/forbid-dom-props */
  render() {
    const { columns } = this.state;

    return (
      <div id="selectable-data-grid" className={cx('content-wrapper')}>
        <DataGrid
          id="selections-example"
          pinnedColumns={[
            columns['Column-0'],
            columns['Column-1'],
            columns['Column-2'],
          ]}
          overflowColumns={[
            columns['Column-3'],
            columns['Column-4'],
            columns['Column-5'],
            columns['Column-6'],
          ]}
          sections={[
            this.buildSection('section_0', 'Section 0', 15),
            this.buildSection('section_1', 'Section 1', 15),
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
        />
      </div>
    );
  }
  /* eslint-enable react/forbid-dom-props */
}

export default SelectableDataGrid;
