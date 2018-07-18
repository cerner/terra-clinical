import React from 'react';

import DataGrid from 'terra-data-grid';
import ContentCellLayout from './ContentCellLayout';

const pinnedColumns = [
  {
    id: 'Column-0',
    width: 200,
    text: 'Column 0',
    isSelectable: true,
  },
  {
    id: 'Column-1',
    width: 200,
    text: 'Column 1',
    isSelectable: true,
  },
  {
    id: 'Column-2',
    width: 200,
    text: 'Column 2',
    isSelectable: true,
  },
];

const overflowColumns = [
  {
    id: 'Column-3',
    width: 200,
    text: 'Column 3',
    isSelectable: true,
  },
  {
    id: 'Column-4',
    width: 200,
    text: 'Column 4',
    isSelectable: true,
  },
  {
    id: 'Column-5',
    width: 200,
    text: 'Column 5',
    isSelectable: true,
  },
  {
    id: 'Column-6',
    width: 200,
    text: 'Column 6',
    isSelectable: true,
  },
];

class SelectableDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);
  }

  buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `Row-${rowIndex}`,
      isSelectable: true,
      cells: ((new Array(7).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        isSelectable: true,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  buildSection(sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      rows: this.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div style={{ height: '600px' }}>
        <DataGrid
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            this.buildSection('Section-0', 'Section 0', 15),
            this.buildSection('Section-1', 'Section 1', 15),
          ]}
          rowHeight="2.5rem"
          headerHeight="3rem"
          fill
          onColumnSelect={(columnId) => {
            alert(`You selected a column! Column: ${columnId}`);
          }}
          onCellSelect={(sectionId, rowId, columnId) => {
            alert(`You selected a cell! Section: ${sectionId}, Row: ${rowId}, Column: ${columnId}`);
          }}
          hasSelectableRows
          onRowSelect={(sectionId, rowId) => {
            alert(`You selected a row! Section: ${sectionId}, Row: ${rowId}`);
          }}
        />
      </div>
    );
  }
}

export default SelectableDataGrid;
