import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-clinical-data-grid';

import ContentCellLayout from './ContentCellLayout';

const pinnedColumns = [
  {
    id: 'Column-0',
    text: 'Column 0',
    width: 100,
  },
  {
    id: 'Column-1',
    text: 'Column 1',
  },
  {
    id: 'Column-2',
    text: 'Column 2',
  },
];

const overflowColumns = [
  {
    id: 'Column-3',
    text: 'Column 3',
  },
  {
    id: 'Column-4',
    text: 'Column 4',
  },
  {
    id: 'Column-5',
    text: 'Column 5',
  },
  {
    id: 'Column-6',
    text: 'Column 6',
  },
  {
    id: 'Column-7',
    text: 'Column 7',
  },
  {
    id: 'Column-8',
    text: 'Column 8',
  },
  {
    id: 'Column-9',
    text: 'Column 9',
  },
  {
    id: 'Column-10',
    text: 'Column 10',
  },
  {
    id: 'Column-11',
    text: 'Column 11',
  },
  {
    id: 'Column-12',
    text: 'Column 12',
  },
];

class StandardDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-${rowIndex}`,
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
      cells: ((new Array(13).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} label={`${sectionId}-${rowIndex}-${columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: StandardDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div id="standard-data-grid" style={{ height: '100%', width: '100%' }}>
        <DataGrid
          id="standard"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            StandardDataGrid.buildSection('section_0', 30),
          ]}
          defaultColumnWidth={250}
          fill
        />
      </div>
    );
  }
}

export default StandardDataGrid;
