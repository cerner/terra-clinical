import React from 'react';
import Aggregator from 'terra-aggregator';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';

import DataGrid from '../../src/DataGrid';
import ContentCellLayout from './ContentCellLayout';

class PagingDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.handleColumnResize = this.handleColumnResize.bind(this);

    this.buildSections = this.buildSections.bind(this);
    this.buildRows = this.buildRows.bind(this);

    const columnWidths = {};

    this.state = {
      collapsedSections: {},
      columnWidths,
      sectionCount: 1,
      isLoading: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { sortedColumnKey, sortDirection, collapsedSections, columnWidths, sectionCount, isLoading } = this.state;

    if (nextState.columnWidths !== columnWidths) {
      return true;
    }

    if (nextState.sortDirection !== sortDirection) {
      return true;
    }

    if (nextState.sortedColumnKey !== sortedColumnKey) {
      return true;
    }

    if (nextState.collapsedSections !== collapsedSections) {
      return true;
    }

    if (nextState.sectionCount !== sectionCount) {
      return true;
    }

    if (nextState.isLoading !== isLoading) {
      return true;
    }

    return false;
  }

  handleColumnResize(columnId, width) {
    const { columnWidths } = this.state;

    let newWidth = width;
    if (newWidth < 50) {
      newWidth = 50;
    }

    this.setState({
      columnWidths: Object.assign({}, columnWidths, { [`${columnId}`]: newWidth }),
    });
  }

  handleHeaderClick(columnKey) {
    const { sortedColumnKey, sortDirection } = this.state;

    let newSortDirection;
    if (!sortDirection || (sortDirection === 'ascending' && sortedColumnKey === columnKey) || sortedColumnKey !== columnKey) {
      newSortDirection = 'descending';
    } else {
      newSortDirection = 'ascending';
    }

    this.setState({ sortedColumnKey: columnKey, sortDirection: newSortDirection });
  }

  handleCellClick(sectionId, rowId, columnId) {
    alert(`A DataGrid cell was clicked in Section: ${sectionId} Row: ${rowId} Column: ${columnId}`);
  }

  handleSectionClick(sectionId) {
    if (!sectionId) {
      return;
    }

    const collapsedSections = Object.assign({}, this.state.collapsedSections);
    collapsedSections[sectionId] = !collapsedSections[sectionId];

    this.setState({ collapsedSections });
  }

  buildRows(sectionId, num) {
    const { sortDirection } = this.state;

    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`column${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        isSelectable: true,
        isSelected: false,
        component: <ContentCellLayout text={`Row ${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return sortDirection === 'descending' ? rows.reverse() : rows;
  }

  buildSections() {
    const sections = [];
    for (let i = 0, length = this.state.sectionCount; i < length; i += 1) {
      const sectionId = `section_${i}`;
      sections.push({
        id: sectionId,
        isCollapsible: true,
        isCollapsed: this.state.collapsedSections[sectionId],
        text: `Section ${i}`,
        rows: this.buildRows(sectionId, 2),
      });
    }

    return sections;
  }

  render() {
    const { sortedColumnKey, sortDirection, columnWidths, isLoading } = this.state;

    return (
      <div style={{ height: '500px', position: 'relative' }}>
        <DataGrid
          pinnedColumns={[
            {
              id: 'column0',
              width: columnWidths.column0,
              isSelectable: true,
              isResizable: true,
              text: 'Column 0',
              sortIndicator: sortedColumnKey === 'column0' ? sortDirection : null,
            },
            {
              id: 'column1',
              width: columnWidths.column1,
              isSelectable: true,
              isResizable: true,
              text: 'Column 1',
              sortIndicator: sortedColumnKey === 'column1' ? sortDirection : null,
            },
          ]}
          overflowColumns={[
            {
              id: 'column2',
              width: columnWidths.column2,
              isSelectable: true,
              isResizable: true,
              text: 'Column 2',
              sortIndicator: sortedColumnKey === 'column2' ? sortDirection : null,
            },
            {
              id: 'column3',
              width: columnWidths.column3,
              isSelectable: false,
              isResizable: true,
              text: 'Column 3 - Not Sortable',
              sortIndicator: sortedColumnKey === 'column3' ? sortDirection : null,
            },
            {
              id: 'column4',
              width: columnWidths.column4,
              isSelectable: true,
              isResizable: true,
              text: 'Column 4',
              sortIndicator: sortedColumnKey === 'column4' ? sortDirection : null,
            },
            {
              id: 'column5',
              width: columnWidths.column5,
              isSelectable: true,
              isResizable: true,
              text: 'Column 5',
              sortIndicator: sortedColumnKey === 'column5' ? sortDirection : null,
            },
            {
              id: 'column6',
              width: columnWidths.column6,
              isSelectable: true,
              isResizable: false,
              text: 'Column 6 - Not Resizable',
              sortIndicator: sortedColumnKey === 'column6' ? sortDirection : null,
            },
            {
              id: 'column7',
              width: columnWidths.column7,
              isSelectable: true,
              isResizable: true,
              text: 'Column 7',
              sortIndicator: sortedColumnKey === 'column7' ? sortDirection : null,
            },
            {
              id: 'column8',
              width: columnWidths.column8,
              isSelectable: true,
              isResizable: true,
              text: 'Column 8',
              sortIndicator: sortedColumnKey === 'column8' ? sortDirection : null,
            },
            {
              id: 'column9',
              width: columnWidths.column9 || 300,
              isSelectable: true,
              isResizable: true,
              component: (
                <Button
                  text="Column 9 (Custom Component)"
                  icon={(() => {
                    if (sortedColumnKey === 'column9') {
                      if (sortDirection === 'ascending') {
                        return <IconUp />;
                      }
                      return <IconDown />;
                    }
                  })()}
                  variant="emphasis"
                  isBlock
                  data-accessible-data-grid-content
                  style={{ height: '100%' }}
                  onClick={() => {
                    this.handleHeaderClick('column9');
                  }}
                />
            ),
            },
          ]}
          sections={this.buildSections()}
          rowHeight="5rem"
          headerHeight="3rem"
          onCellClick={this.handleCellClick}
          onHeaderClick={this.handleHeaderClick}
          onRequestColumnResize={this.handleColumnResize}
          onRequestSectionCollapse={this.handleSectionClick}
          onRequestContent={this.state.sectionCount < 10 ? (() => {
            this.setState({ isLoading: true }, () => {
              setTimeout(() => {
                this.setState({ sectionCount: this.state.sectionCount + 1, isLoading: false });
              }, 2000);
            });
          }) : undefined}
          fill
        />
        {<LoadingOverlay isOpen={isLoading} isRelativeToContainer isAnimated style={{ top: 0 }} />}
      </div>

    );
  }
}

export default PagingDataGrid;
