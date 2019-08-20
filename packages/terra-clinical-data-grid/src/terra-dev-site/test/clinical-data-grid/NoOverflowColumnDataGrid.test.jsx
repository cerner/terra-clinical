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

class NoOverflowColumnDataGrid extends React.Component {
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
      rows: NoOverflowColumnDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  /* eslint-disable react/forbid-dom-props */
  render() {
    return (
      <div id="no-overflow-column-data-grid" style={{ height: '100%', width: '100%' }}>
        <DataGrid
          id="no-overflow-column"
          pinnedColumns={pinnedColumns}
          sections={[
            NoOverflowColumnDataGrid.buildSection('section_0', 30),
          ]}
          defaultColumnWidth={250}
          fill
        />
      </div>
    );
  }
  /* eslint-enable react/forbid-dom-props */
}

export default NoOverflowColumnDataGrid;
