import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-data-grid';

import ContentCellLayout from './ContentCellLayout';

class DataGridWithColumnResizing extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `Row-${rowIndex}`,
      cells: ((new Array(7).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      rows: DataGridWithColumnResizing.buildRows(sectionId, numberOfRows),
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      columns: {
        'Column-0': {
          id: 'Column-0',
          width: 200,
          text: 'Column 0',
          isResizable: true,
        },
        'Column-1': {
          id: 'Column-1',
          width: 200,
          text: 'Column 1',
          isResizable: true,
        },
        'Column-2': {
          id: 'Column-2',
          width: 200,
          text: 'Column 2',
          isResizable: true,
        },
        'Column-3': {
          id: 'Column-3',
          width: 200,
          text: 'Column 3',
          isResizable: true,
        },
        'Column-4': {
          id: 'Column-4',
          width: 200,
          text: 'Column 4',
          isResizable: true,
        },
        'Column-5': {
          id: 'Column-5',
          width: 200,
          text: 'Column 5',
          isResizable: true,
        },
        'Column-6': {
          id: 'Column-6',
          width: 200,
          text: 'Column 6',
          isResizable: true,
        },
      },
    };
  }

  render() {
    const { columns } = this.state;

    return (
      <div style={{ height: '100%', padding: '15px' }}>
        <DataGrid
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
            DataGridWithColumnResizing.buildSection('Section-0', 'Section 0', 15),
            DataGridWithColumnResizing.buildSection('Section-1', 'Section 1', 15),
          ]}
          rowHeight="2.5rem"
          headerHeight="3rem"
          fill
          onRequestColumnResize={(columnId, width) => {
            const columnToUpdate = Object.assign({}, this.state.columns[columnId]);
            columnToUpdate.width = Math.max(width, 50);
            this.setState({
              columns: Object.assign({}, this.state.columns, { [`${columnId}`]: columnToUpdate }),
            });
          }}
        />
      </div>
    );
  }
}

export default DataGridWithColumnResizing;
