import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-clinical-data-grid';
import ItemView from 'terra-clinical-item-view';
import CustomHeaderCellLayout from './CustomHeaderCellLayout';

const pinnedColumns = [
  {
    id: 'Column-0',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 0" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-1',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 1" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-2',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 2" secondaryText="Custom Header Cell" />
    ),
  },
];

const overflowColumns = [
  {
    id: 'Column-3',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 3" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-4',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 4" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-5',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 5" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-6',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 6" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-7',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 7" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-8',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 8" secondaryText="Custom Header Cell" />
    ),
  },
  {
    id: 'Column-9',
    width: 200,
    component: (
      <CustomHeaderCellLayout primaryText="Column 9" secondaryText="Custom Header Cell" />
    ),
  },
];

class DatagridWithCustomContent extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: (
          <ItemView
            displays={[
              <ItemView.Display isTruncated text={`Row-${rowIndex}, ${columnKey}`} />,
              <ItemView.Display isTruncated text="Item View" />,
              <ItemView.Display isTruncated text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae." />,
            ]}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        ),
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: DatagridWithCustomContent.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div style={{ height: '800px' }}>
        <DataGrid
          id="basic-example"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            DatagridWithCustomContent.buildSection('section_0', 30),
          ]}
          rowHeight="5rem"
          headerHeight="4rem"
          fill
        />
      </div>
    );
  }
}

export default DatagridWithCustomContent;
