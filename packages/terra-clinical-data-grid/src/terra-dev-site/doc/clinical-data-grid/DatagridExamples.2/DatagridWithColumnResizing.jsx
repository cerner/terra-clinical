import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.scss';

const cx = classNames.bind(styles);

class DatagridWithColumnResizing extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `Row-${rowIndex}`,
      cells: ((new Array(9).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
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
      rows: DatagridWithColumnResizing.buildRows(sectionId, numberOfRows),
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
          width: 250,
          text: 'Column 1 (Not Resizable)',
          isResizable: false,
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
        'Column-7': {
          id: 'Column-7',
          width: 200,
          text: 'Column 7',
          isResizable: true,
        },
        'Column-8': {
          id: 'Column-8',
          width: 200,
          text: 'Column 8',
          isResizable: true,
        },
      },
    };
  }

  render() {
    const { columns } = this.state;

    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="column-resize-example"
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
            DatagridWithColumnResizing.buildSection('Section-0', 'Section 0', 15),
            DatagridWithColumnResizing.buildSection('Section-1', 'Section 1', 15),
          ]}
          hasResizableColumns
          fill
          onRequestColumnResize={(columnId, width) => {
            const columnToUpdate = Object.assign({}, this.state.columns[columnId]);
            columnToUpdate.width = Math.max(width, 50);
            this.setState(prevState => (
              { columns: Object.assign({}, prevState.columns, { [`${columnId}`]: columnToUpdate }) }
            ));
          }}
        />
      </div>
    );
  }
}

export default DatagridWithColumnResizing;
