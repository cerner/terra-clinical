import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-clinical-data-grid';

import ContentCellLayout from './ContentCellLayout';

class DatagidWithoutFill extends React.Component {
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
          isResizable: true,
          isSelectable: true,
        },
        'Column-1': {
          id: 'Column-1',
          width: 250,
          text: 'Column 1',
          isResizable: true,
          isSelectable: true,
        },
        'Column-2': {
          id: 'Column-2',
          width: 200,
          text: 'Column 2',
          isResizable: true,
          isSelectable: true,
        },
        'Column-3': {
          id: 'Column-3',
          width: 200,
          text: 'Column 3',
          isResizable: true,
          isSelectable: true,
        },
        'Column-4': {
          id: 'Column-4',
          width: 200,
          text: 'Column 4',
          isResizable: true,
          isSelectable: true,
        },
        'Column-5': {
          id: 'Column-5',
          width: 200,
          text: 'Column 5',
          isResizable: true,
          isSelectable: true,
        },
        'Column-6': {
          id: 'Column-6',
          width: 200,
          text: 'Column 6',
          isResizable: true,
          isSelectable: true,
        },
        'Column-7': {
          id: 'Column-7',
          width: 200,
          text: 'Column 7',
          isResizable: true,
          isSelectable: true,
        },
        'Column-8': {
          id: 'Column-8',
          width: 200,
          text: 'Column 8',
          isResizable: true,
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
      cells: ((new Array(9).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
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
      isCollapsible: sectionId === 'Section-0',
      isCollapsed: sectionId === this.state.collapsedSectionId,
    };
  }

  render() {
    const { columns } = this.state;

    return (
      <DataGrid
        id="without-fill"
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
          columns['Column-7'],
          columns['Column-8'],
        ]}
        sections={[
          this.buildSection('Section-0', 'Section 0', 15),
          this.buildSection('Section-1', 'Section 1', 15),
        ]}
        onColumnSelect={(columnId) => {
          const newColumns = {};

          const columnToSort = Object.assign({}, this.state.columns[columnId]);
          columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';
          newColumns[`${columnId}`] = columnToSort;

          if (columnId !== this.state.sortedColumnId) {
            const previouslySortedColumn = Object.assign({}, this.state.columns[this.state.sortedColumnId]);
            if (previouslySortedColumn) {
              previouslySortedColumn.sortIndicator = undefined;
              newColumns[`${this.state.sortedColumnId}`] = previouslySortedColumn;
            }
          }

          this.setState(prevState => ({
            columns: Object.assign({}, prevState.columns, newColumns),
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
        hasResizableColumns
        onRequestColumnResize={(columnId, width) => {
          const columnToUpdate = Object.assign({}, this.state.columns[columnId]);
          columnToUpdate.width = Math.max(width, 50);
          this.setState(prevState => (
            { columns: Object.assign({}, prevState.columns, { [`${columnId}`]: columnToUpdate }) }
          ));
        }}
        onRequestSectionCollapse={(sectionId) => {
          if (this.state.collapsedSectionId === sectionId) {
            this.setState({ collapsedSectionId: undefined });
          } else {
            this.setState({ collapsedSectionId: sectionId });
          }
        }}
      />
    );
  }
}

export default DatagidWithoutFill;
