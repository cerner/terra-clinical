import React from 'react';
import Aggregator from 'terra-aggregator';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';

import DataGrid from 'terra-data-grid';
import ContentCellLayout from './ContentCellLayout';

const DisclosureComponent = ({ app, text }) => (
  <div style={{ height: '100%' }}>
    <p>{text}</p>
    <Button text="Close" onClick={app.closeDisclosure} />
  </div>
);

class DataGridStandard extends React.Component {
  constructor(props) {
    super(props);

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.handleColumnResize = this.handleColumnResize.bind(this);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    const columnWidths = {};

    this.state = {
      collapsedSections: {},
      columnWidths,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { aggregatorDelegate } = this.props;
    const { sortedColumnKey, sortDirection, collapsedSections, columnWidths } = this.state;

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

    const currentSelectedCell = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedCell : undefined;
    const nextSelectedCell = nextProps.aggregatorDelegate && nextProps.aggregatorDelegate.hasFocus ? nextProps.aggregatorDelegate.itemState.selectedCell : undefined;

    if (currentSelectedCell) {
      if (!nextSelectedCell) {
        return true;
      } else if (nextSelectedCell.rowKey !== currentSelectedCell.rowKey && nextSelectedCell.columnKey !== currentSelectedCell.columnKey) {
        return true;
      }
    } else if (nextSelectedCell) {
      return true;
    }

    const currentSelectedRow = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedRow : undefined
    const nextSelectedRow = nextProps.aggregatorDelegate && nextProps.aggregatorDelegate.hasFocus ? nextProps.aggregatorDelegate.itemState.selectedRow : undefined;

    if (currentSelectedRow) {
      if (!nextSelectedRow) {
        return true;
      } else if (nextSelectedRow.rowKey !== currentSelectedRow.rowKey && nextSelectedRow.sectionKey !== currentSelectedRow.sectionKey) {
        return true;
      }
    } else if (nextSelectedRow) {
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

  handleCellClick(sectionId, rowKey, columnKey) {
    const { aggregatorDelegate } = this.props;
    if (!aggregatorDelegate) {
      return;
    }

    const currentSelectedItem = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedCell : {};
    if (currentSelectedItem && currentSelectedItem.rowKey === rowKey && currentSelectedItem.columnKey === columnKey) {
      aggregatorDelegate.releaseFocus();
    } else {
      aggregatorDelegate.requestFocus({
        selectedCell: {
          rowKey,
          columnKey,
        },
      }).then(({ disclose }) => {
        disclose({
          preferredType: 'panel',
          size: 'small',
          content: {
            key: 'worklist-disclose',
            component: <DisclosureComponent text={`${rowKey} - ${columnKey}`} />,
          },
        });
      });
    }
  }

  handleSectionClick(sectionId) {
    if (!sectionId) {
      return;
    }

    const collapsedSections = Object.assign({}, this.state.collapsedSections);
    collapsedSections[sectionId] = !collapsedSections[sectionId];

    this.setState({ collapsedSections });
  }

  handleRowClick(sectionId, rowId) {
    const { aggregatorDelegate } = this.props;
    if (!aggregatorDelegate) {
      return;
    }

    const currentSelectedRow = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedRow : {};
    if (currentSelectedRow && currentSelectedRow.rowKey === rowId && currentSelectedRow.sectionKey === sectionId) {
      aggregatorDelegate.releaseFocus();
    } else {
      aggregatorDelegate.requestFocus({
        selectedRow: {
          rowKey: rowId,
          sectionKey: sectionId,
        },
      }).then(({ disclose }) => {
        disclose({
          preferredType: 'panel',
          size: 'small',
          content: {
            key: 'worklist-disclose',
            component: <DisclosureComponent text={`Row Selected: ${sectionId} - ${rowId}`} />,
          },
        });
      });
    }
  }

  buildRows(sectionId, num) {
    const { aggregatorDelegate } = this.props;
    const { sortDirection } = this.state;

    let selectedCell;
    let selectedRow;
    if (aggregatorDelegate.hasFocus) {
      selectedCell = aggregatorDelegate.itemState.selectedCell;
      selectedRow = aggregatorDelegate.itemState.selectedRow;
    }

    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      isSelectable: true,
      isSelected: selectedRow && selectedRow.rowKey === `${sectionId}-Row${rowIndex}` && selectedRow.sectionKey === sectionId,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`column${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        isSelectable: true,
        isSelected: selectedCell && selectedCell.rowKey === `${sectionId}-Row${rowIndex}` && selectedCell.columnKey === columnKey,
        component: <ContentCellLayout text={`Row ${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return sortDirection === 'descending' ? rows.reverse() : rows;
  }

  buildSection(sectionId, sectionName, numberOfRows, isCollapsible) {
    if (sectionId === 'section_0') {
      return {
        id: sectionId,
        isCollapsible,
        isCollapsed: this.state.collapsedSections[sectionId],
        text: sectionName,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    } else if (sectionId === 'section_1') {
      return {
        id: sectionId,
        isCollapsible,
        isCollapsed: this.state.collapsedSections[sectionId],
        text: sectionName,
        startAccessory: <Button text="Start Accessory" data-accessible-data-grid-content />,
        endAccessory: <Button text="End Accessory" data-accessible-data-grid-content />,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    } else if (sectionId === 'section_2') {
      return {
        id: sectionId,
        isCollapsible,
        isCollapsed: this.state.collapsedSections[sectionId],
        text: sectionName,
        endAccessory: <span><Button text="Button 1" data-accessible-data-grid-content /><Button text="Button 2" data-accessible-data-grid-content /></span>,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    } else if (sectionId === 'section_3') {
      return {
        id: sectionId,
        isCollapsible,
        isCollapsed: this.state.collapsedSections[sectionId],
        component: <marquee behavior="alternate" direction="right" scrollamount="10" style={{ color: 'blue', verticalAlign: 'center' }}>Section Header 3 (Custom Component)</marquee>,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    }

    return {
      id: sectionId,
      isCollapsible,
      isCollapsed: this.state.collapsedSections[sectionId],
      text: sectionName,
      endAccessory: <span><Button text="Button 1" data-accessible-data-grid-content /><Button text="Button 2" data-accessible-data-grid-content /></span>,
      rows: this.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { sortedColumnKey, sortDirection, collapsedSections, columnWidths } = this.state;

    return (
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
          {
            id: 'column2',
            width: columnWidths.column2,
            isSelectable: true,
            isResizable: true,
            text: 'Column 2',
            sortIndicator: sortedColumnKey === 'column2' ? sortDirection : null,
          },
        ]}
        overflowColumns={[
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
        sections={[
          this.buildSection('section_0', 'Section Header 0 - Text', 10, true),
          this.buildSection('section_1', 'Section Header 1 - Text w/ Accessory Content', 10, true),
          this.buildSection('section_2', 'Section Header 2 - Long text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo erat lorem, sed ornare erat blandit ac. Nullam porta elit eget pretium eleifend. Donec lobortis malesuada mauris, ac rutrum nibh dictum quis. In vel consectetur sem. Nullam in rutrum erat, eget ultricies urna. Nam pharetra nisi ipsum, et posuere sapien', 10, true),
          this.buildSection('section_3', 'Section Header 3 - Custom', 10, true),
          this.buildSection('section_4', 'Section Header 4 - Not Collapsible', 10),
        ]}
        rowHeight="5rem"
        headerHeight="3rem"
        onCellSelect={this.handleCellClick}
        onColumnSelect={this.handleHeaderClick}
        onRequestColumnResize={this.handleColumnResize}
        onRequestSectionCollapse={this.handleSectionClick}
        fill
        hasSelectableRows
        onRowSelect={this.handleRowClick}
      />
    );
  }
}

const AggregatorWrapper = props => (
  <Aggregator
    items={[{
      key: 'Worklist',
      component: (
        <DataGridStandard />
      ),
    }]}
    disclose={props.app.disclose}
    render={renderData => (
      <div style={{ height: '100%' }}>
        {renderData.items}
      </div>
      )
    }
  />
);

const SlidePanelManagerWrapper = () => (
  <div style={{ height: '500px' }}>
    <ModalManager>
      <SlidePanelManager
        panelBehavior="squish"
      >
        <AggregatorWrapper />
      </SlidePanelManager>
    </ModalManager>
  </div>
);

export default SlidePanelManagerWrapper;
