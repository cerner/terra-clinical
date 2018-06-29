import React from 'react';
import Aggregator from 'terra-aggregator';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

import DataGrid, { ContentCellLayout, HeaderCellLayout } from '../../src/DataGrid';

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
    this.handleColumnResize = this.handleColumnResize.bind(this);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    const columnWidths = {};
    (new Array(10)).fill(0).forEach((val, index) => {
      columnWidths[`column${index}`] = 200;
    });

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

    return false;
  }

  handleColumnResize(columnId, width) {
    const { columnWidths } = this.state;

    this.setState({
      columnWidths: Object.assign({}, columnWidths, { [`${columnId}`]: width }),
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

  handleCellClick(rowKey, columnKey) {
    const { aggregatorDelegate } = this.props;
    if (!aggregatorDelegate) {
      return;
    }

    const currentSelectedItem = aggregatorDelegate && aggregatorDelegate.hasFocus ? aggregatorDelegate.itemState.selectedCell : {};
    if (currentSelectedItem.rowKey === rowKey && currentSelectedItem.columnKey === columnKey) {
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

  buildRows(sectionId, num) {
    const { aggregatorDelegate } = this.props;
    const { sortDirection } = this.state;

    let selectedCell;
    if (aggregatorDelegate.hasFocus) {
      selectedCell = aggregatorDelegate.itemState.selectedCell;
    }

    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`column${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        isSelectable: true,
        isSelected: selectedCell && selectedCell.rowKey === `${sectionId}-Row${rowIndex}` && selectedCell.columnKey === columnKey,
        content: <ContentCellLayout text={`Row ${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return sortDirection === 'descending' ? rows.reverse() : rows;
  }

  buildSection(sectionId, sectionName, numberOfRows, isCollapsible) {
    if (sectionId === 'section_0') {
      return {
        id: sectionId,
        isCollapsible,
        headerText: sectionName,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    } else if (sectionId === 'section_1') {
      return {
        id: sectionId,
        isCollapsible,
        headerText: sectionName,
        headerStartAccessory: <Button text="Start Accessory" data-accessible-data-grid-content />,
        headerEndAccessory: <Button text="End Accessory" data-accessible-data-grid-content />,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    } else if (sectionId === 'section_2') {
      return {
        id: sectionId,
        isCollapsible,
        headerText: sectionName,
        headerEndAccessory: <span><Button text="Button 1" data-accessible-data-grid-content /><Button text="Button 2" data-accessible-data-grid-content /></span>,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    } else if (sectionId === 'section_3') {
      return {
        id: sectionId,
        isCollapsible,
        headerComponent: <marquee behavior="alternate" direction="right" scrollamount="10" style={{ color: 'blue', verticalAlign: 'center' }}>Section Header 3 - Custom Content</marquee>,
        rows: this.buildRows(sectionId, numberOfRows),
      };
    }

    return {
      id: sectionId,
      isCollapsible,
      headerText: sectionName,
      headerEndAccessory: <span><Button text="Button 1" data-accessible-data-grid-content /><Button text="Button 2" data-accessible-data-grid-content /></span>,
      rows: this.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { sortedColumnKey, sortDirection, collapsedSections } = this.state;

    return (
      <DataGrid
        pinnedColumns={[
          {
            id: 'column0',
            initialWidth: 300,
            minWidth: 100,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCellLayout
                text="Column 0"
                sortDirection={sortedColumnKey === 'column0' ? sortDirection : null}
              />
            ),
          },
          {
            id: 'column1',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCellLayout
                text="Column 1"
                sortDirection={sortedColumnKey === 'column1' ? sortDirection : null}
              />
            ),
          },
          {
            id: 'column2',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCellLayout
                text="Column 2" sortDirection={sortedColumnKey === 'column2' ? sortDirection : null}
              />
            ),
          },
        ]}
        overflowColumns={[
          {
            id: 'column3',
            initialWidth: 300,
            selectable: false,
            resizable: true,
            component: <HeaderCellLayout text="Column 3 (No Sort)" sortDirection={sortedColumnKey === 'column3' ? sortDirection : null} />,
          },
          {
            id: 'column4',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            text: 'Column 4',
            component: <HeaderCellLayout text="Column 4" sortDirection={sortedColumnKey === 'column4' ? sortDirection : null} />,
          },
          {
            id: 'column5',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCellLayout text="Column 5" sortDirection={sortedColumnKey === 'column5' ? sortDirection : null} />,
          },
          {
            id: 'column6',
            initialWidth: 300,
            selectable: true,
            resizable: false,
            component: <HeaderCellLayout text="Column 6 (No resize)" sortDirection={sortedColumnKey === 'column6' ? sortDirection : null} />,
          },
          {
            id: 'column7',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCellLayout text="Column 7" sortDirection={sortedColumnKey === 'column7' ? sortDirection : null} />,
          },
          {
            id: 'column8',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCellLayout text="Column 8" sortDirection={sortedColumnKey === 'column8' ? sortDirection : null} />,
          },
          {
            id: 'column9',
            initialWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCellLayout text="Column 9" sortDirection={sortedColumnKey === 'column9' ? sortDirection : null} />,
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
        onCellClick={this.handleCellClick}
        onHeaderClick={this.handleHeaderClick}
        columnWidths={this.state.columnWidths}
        onRequestColumnResize={this.handleColumnResize}
        collapsedSections={collapsedSections}
        onRequestSectionCollapse={this.handleSectionClick}
        fill
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
