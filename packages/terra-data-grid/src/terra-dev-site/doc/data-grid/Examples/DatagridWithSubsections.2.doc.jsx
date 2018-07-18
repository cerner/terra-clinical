import React from 'react';

import DataGrid from 'terra-data-grid';
import Button from 'terra-button';
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
  {
    id: 'column7',
    width: 200,
    text: 'Column 7',
  },
  {
    id: 'column8',
    width: 200,
    text: 'Column 8',
  },
  {
    id: 'column9',
    width: 200,
    text: 'Column 9',
  },
];

class SubsectionDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    this.state = {
      section2IsCollapsed: false,
    }
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

  buildSection(sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      endAccessory: (sectionId === 'section_1') ? <span><Button text="Button 1" data-accessible-data-grid-content /><Button text="Button 2" data-accessible-data-grid-content /></span> : null,
      isCollapsible: sectionId === 'section_2',
      isCollapsed: sectionId === 'section_2' && this.state.section2IsCollapsed,
      rows: this.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    return (
      <div style={{ height: '100%', padding: '15px' }}>
        <DataGrid
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            this.buildSection('section_0', 'Section 0', 15),
            this.buildSection('section_1', 'Section 1', 15),
            this.buildSection('section_2', 'Section 2', 15),
          ]}
          rowHeight="2.5rem"
          headerHeight="3rem"
          onRequestSectionCollapse={(sectionId) => {
            this.setState({
              section2IsCollapsed: !this.state.section2IsCollapsed,
            });
          }}
          fill
        />
      </div>
    );
  }
}

export default SubsectionDataGrid;
