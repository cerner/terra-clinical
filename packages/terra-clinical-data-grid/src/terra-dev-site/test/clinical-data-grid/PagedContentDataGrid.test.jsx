import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DataGrid from 'terra-clinical-data-grid';

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

class PagedContentDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
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
        rows: PagedContentDataGrid.buildRows(sectionId, 3),
      });
    }

    return sections;
  }


  constructor(props) {
    super(props);

    this.state = {
      sectionCount: 1,
      sections: PagedContentDataGrid.buildSections(1),
    };
  }

  render() {
    return (
      <div id="paged-data-grid" style={{ height: '100%', width: '100%' }}>
        <DataGrid
          id="paging-example"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={this.state.sections}
          fill
          onRequestContent={this.state.sectionCount < 2 ? (() => {
            this.setState(prevState => ({ sectionCount: prevState.sectionCount + 1, sections: PagedContentDataGrid.buildSections(prevState.sectionCount + 1) }));
          }) : undefined}
        />
      </div>
    );
  }
}

export default PagedContentDataGrid;
