import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-data-grid';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';

import ContentCellLayout from './ContentCellLayout';

const pinnedColumns = [
  {
    id: 'Column-0',
    width: 200,
    text: 'Column 0',
  },
  {
    id: 'Column-1',
    width: 200,
    text: 'Column 1',
  },
  {
    id: 'Column-2',
    width: 200,
    text: 'Column 2',
  },
];

const overflowColumns = [
  {
    id: 'Column-3',
    width: 200,
    text: 'Column 3',
  },
  {
    id: 'Column-4',
    width: 200,
    text: 'Column 4',
  },
  {
    id: 'Column-5',
    width: 200,
    text: 'Column 5',
  },
  {
    id: 'Column-6',
    width: 200,
    text: 'Column 6',
  },
];

class PagingDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSections(sectionCount) {
    const sections = [];
    for (let i = 0, length = sectionCount; i < length; i += 1) {
      const sectionId = `section_${i}`;
      sections.push({
        id: sectionId,
        text: `Section ${i}`,
        rows: PagingDataGrid.buildRows(sectionId, 3),
      });
    }

    return sections;
  }


  constructor(props) {
    super(props);

    this.state = {
      sectionCount: 1,
      isLoading: false,
      sections: PagingDataGrid.buildSections(1),
    };
  }

  componentWillUnmount() {
    clearTimeout(this.pagingTimeout);
  }

  render() {
    return (
      <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
        <DataGrid
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={this.state.sections}
          rowHeight="2.5rem"
          headerHeight="3rem"
          fill
          onRequestContent={this.state.sectionCount < 10 ? (() => {
            this.setState({ isLoading: true }, () => {
              clearTimeout(this.pagingTimeout);
              this.pagingTimeout = setTimeout(() => {
                this.setState({ sectionCount: this.state.sectionCount + 1, isLoading: false, sections: PagingDataGrid.buildSections(this.state.sectionCount + 1) });
              }, 2000);
            });
          }) : undefined}
        />
        {<LoadingOverlay isOpen={this.state.isLoading} isRelativeToContainer isAnimated style={{ top: 0 }} />}
      </div>
    );
  }
}

export default PagingDataGrid;
