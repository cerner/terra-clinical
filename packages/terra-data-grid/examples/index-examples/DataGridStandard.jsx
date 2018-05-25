import React from 'react';
import classNames from 'classnames/bind';
import Aggregator from 'terra-aggregator';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

import DataGrid, { Section, Row, Cell, ContentCell, HeaderCell } from '../../src/DataGrid';

import styles from './DataGridStandard.scss';

const cx = classNames.bind(styles);

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

    const rows = (new Array(num)).fill().map((val, index) => (
      <Row
        key={`${sectionId}-Row${index}`}
        id={`${sectionId}-Row${index}`}
      >
        {((new Array(10).fill(0)).map((val, index) => (`column${index}`))).map(columnKey => (
          <Cell
            key={`${columnKey}`}
            columnId={columnKey}
            isSelectable
            isSelected={selectedCell && selectedCell.rowKey === `${sectionId}-Row${index}` && selectedCell.columnKey === columnKey}
          >
            <ContentCell
              text={`Row ${index}, Column ${columnKey}`}
            />
          </Cell>
        ))}
      </Row>
    ));

    return sortDirection === 'descending' ? rows.reverse() : rows;
  }

  buildSection(sectionId, sectionName, numberOfRows, isCollapsible) {
    const isCollapsed = this.state.collapsedSections[sectionId];

    return (
      <Section
        id={sectionId}
        isCollapsible={isCollapsible}
        isInitiallyCollapsed={isCollapsed}
        hideHeader={false}
        headerText={sectionName}
      >
        {this.buildRows(sectionId, numberOfRows)}
      </Section>
    );
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { sortedColumnKey, sortDirection, collapsedSections } = this.state;

    return (
      <DataGrid
        pinnedColumns={[
          {
            id: 'column0',
            startWidth: 300,
            minWidth: 100,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCell
                text="Column 0"
                sortDirection={sortedColumnKey === 'column0' ? sortDirection : null}
              />
            ),
          },
          {
            id: 'column1',
            startWidth: 300,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCell
                text="Column 1"
                sortDirection={sortedColumnKey === 'column1' ? sortDirection : null}
              />
            ),
          },
        ]}
        overflowColumns={[
          {
            id: 'column2',
            startWidth: 300,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCell
                text="Column 2" sortDirection={sortedColumnKey === 'column2' ? sortDirection : null}
              />
            ),
          },
          {
            id: 'column3',
            startWidth: 300,
            selectable: false,
            resizable: true,
            component: <HeaderCell text="Column 3 (No Sort)" sortDirection={sortedColumnKey === 'column3' ? sortDirection : null} />,
          },
          {
            id: 'column4',
            startWidth: 300,
            selectable: true,
            resizable: true,
            text: 'Column 4',
            component: <HeaderCell text="Column 4" sortDirection={sortedColumnKey === 'column4' ? sortDirection : null} />,
          },
          {
            id: 'column5',
            startWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 5" sortDirection={sortedColumnKey === 'column5' ? sortDirection : null} />,
          },
          {
            id: 'column6',
            startWidth: 300,
            selectable: true,
            resizable: false,
            component: <HeaderCell text="Column 6 (No resize)" sortDirection={sortedColumnKey === 'column6' ? sortDirection : null} />,
          },
          {
            id: 'column7',
            startWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 7" sortDirection={sortedColumnKey === 'column7' ? sortDirection : null} />,
          },
          {
            id: 'column8',
            startWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 8" sortDirection={sortedColumnKey === 'column8' ? sortDirection : null} />,
          },
          {
            id: 'column9',
            startWidth: 300,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 9" sortDirection={sortedColumnKey === 'column9' ? sortDirection : null} />,
          },
        ]}
        rowHeight="5rem"
        headerHeight="3rem"
        onCellClick={this.handleCellClick}
        onHeaderClick={this.handleHeaderClick}
        columnWidths={this.state.columnWidths}
        onRequestColumnResize={this.handleColumnResize}
        collapsedSections={collapsedSections}
        onRequestSectionCollapse={this.handleSectionClick}
      >
        {this.buildSection('section_0', 'Section 0', 100, true)}
        {this.buildSection('section_1', 'Section 1', 100, true)}
        {this.buildSection('section_2', 'Section 2 - Long text Long textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong text', 100, true)}
        {this.buildSection('section_3', 'Section 3 (No collapsing)', 100)}
      </DataGrid>
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
  <div style={{ height: '750px' }}>
    <ModalManager>
      <SlidePanelManager
        panelBehavior="squish"
      >
        <AggregatorWrapper />
      </SlidePanelManager>
    </ModalManager>
  </div>
);

// const Current = () => (
//   <DataGrid>
//     <Section id="section0" isCollapsible>
//       <Row id="row0">
//         <Cell columnId="column0" isSelectable>
//           <div>Cell 0</div>
//         </Cell>
//         <Cell columnId="column1" isSelectable isSelected>
//           <div>Cell 1</div>
//         </Cell>
//       </Row>
//     </Section>
//     <Section id="section1" isCollapsible>
//       <Row id="row1">
//         <Cell columnId="column0" isSelectable>
//           <div>Cell 0</div>
//         </Cell>
//         <Cell columnId="column1" isSelectable isSelected>
//           <div>Cell 1</div>
//         </Cell>
//       </Row>
//     </Section>
//   </DataGrid>
// );

// const Alternative = () => {
//   const sections = [{
//     id: 'section0',
//     isCollapsible: true,
//     text: 'Section 0',
//     rows: [{
//       id: 'row0',
//       cells: [{
//         columnId: 'column0',
//         isSelectable: true,
//         component: (
//           <div>Cell 0</div>
//         ),
//       }, {
//         columnId: 'column1',
//         isSelectable: true,
//         isSelected: true,
//         component: (
//           <div>Cell 1</div>
//         ),
//       }],
//     }],
//   }, {
//     id: 'section1',
//     isCollapsible: true,
//     text: 'Section 1',
//     rows: [{
//       id: 'row1',
//       cells: [{
//         columnId: 'column0',
//         isSelectable: true,
//         component: (
//           <div>Cell 0</div>
//         ),
//       }, {
//         columnId: 'column1',
//         isSelectable: true,
//         isSelected: true,
//         component: (
//           <div>Cell 1</div>
//         ),
//       }],
//     }],
//   }];

//   return (
//     <DataGrid
//       sections={sections}
//     />
//   );
// };

export default SlidePanelManagerWrapper;
