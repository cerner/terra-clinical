import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';

const cx = classNames.bind(styles);

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
];

class StaticDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      height: rowIndex % 5 === 0 ? '7rem' : undefined,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: StaticDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="basic-example"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            StaticDataGrid.buildSection('section_0', 30),
          ]}
          defaultColumnWidth={250}
          fill
        />
      </div>
    );
  }
}

export default StaticDataGrid;
