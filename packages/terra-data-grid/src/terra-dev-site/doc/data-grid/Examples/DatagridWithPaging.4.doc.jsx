import React from 'react';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import DataGrid from 'terra-data-grid';

import ContentCellLayout from './ContentCellLayout';

const pinnedColumns = [
  {
    id: 'column0',
    width: 200,
    text: 'Column 0',
  },
  {
    id: 'column1',
    width: 200,
    text: 'Column 1',
  },
  {
    id: 'column2',
    width: 200,
    text: 'Column 2',
  },
];

const overflowColumns = [
  {
    id: 'column3',
    width: 200,
    text: 'Column 3',
  },
  {
    id: 'column4',
    width: 200,
    text: 'Column 4',
  },
  {
    id: 'column5',
    width: 200,
    text: 'Column 5',
  },
  {
    id: 'column6',
    width: 200,
    text: 'Column 6',
  },
];

class PagingDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.buildSections = this.buildSections.bind(this);
    this.buildRows = this.buildRows.bind(this);

    this.state = {
      sectionCount: 1,
      isLoading: false,
      sections: this.buildSections(1),
    }
  }

  componentWillUnmount() {
    clearTimeout(this.pagingTimeout);
  }

  buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`column${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row ${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  buildSections(sectionCount) {
    const sections = [];
    for (let i = 0, length = sectionCount; i < length; i += 1) {
      const sectionId = `section_${i}`;
      sections.push({
        id: sectionId,
        text: `Section ${i}`,
        rows: this.buildRows(sectionId, 3),
      });
    }

    return sections;
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
                this.setState({ sectionCount: this.state.sectionCount + 1, isLoading: false, sections: this.buildSections(this.state.sectionCount + 1), });
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
