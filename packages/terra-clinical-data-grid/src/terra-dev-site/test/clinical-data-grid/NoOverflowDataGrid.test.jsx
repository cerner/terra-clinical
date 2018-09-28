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
];

const overflowColumns = [
  {
    id: 'Column-1',
    text: 'Column 1',
  },
];

class NoOverflowDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-${rowIndex}`,
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
      rows: NoOverflowDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div id="no-overflow-data-grid" style={{ height: '100%', width: '100%' }}>
        <DataGrid
          id="no-overflow"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            NoOverflowDataGrid.buildSection('section_0', 1),
          ]}
          defaultColumnWidth={250}
          fill
        />
      </div>
    );
  }
}

export default NoOverflowDataGrid;
