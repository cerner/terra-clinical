import React from 'react';
import classNames from 'classnames/bind';
import Aggregator from 'terra-aggregator';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';
// import DisclosureComponent from 'terra-disclosure-manager/examples/index-examples/DisclosureComponent';

import DataGrid, { Section, Row, Cell, DefaultCell } from '../../src/DataGrid';

import styles from './DataGridStandard.scss';

const cx = classNames.bind(styles);

const generateRows = num => (new Array(num)).fill().map((val, index) => (
  {
    key: `Row${index}`,
    data: {
      column0: {
        component: <div>Custom Content Component</div>,
        selectable: true,
      },
      column1: {
        text: `Row ${index} Column 1`,
        selectable: true,
      },
      column2: {
        text: `Row ${index} Column 2  (Not Selectable)`,
      },
      column3: {
        noData: true,
      },
      column4: {
        text: `Row ${index} Column 4`,
        selectable: true,
      },
      column5: {
        text: `Row ${index} Column 5`,
        selectable: true,
      },
      column6: {
        text: `Row ${index} Column 6`,
        selectable: true,
      },
      column7: {
        text: `Row ${index} Column 7`,
        selectable: true,
      },
    },
  }
));

class DataGridStandard extends React.Component {
  constructor(props) {
    super(props);

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleSectionClick = this.handleSectionClick.bind(this);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    const columns = {
      column0: {
        startWidth: 300,
        minWidth: 100,
        sortable: true,
        resizable: true,
        component: <div>Column 0 (Custom Header Component)</div>,
      },
      column1: {
        startWidth: 200,
        sortable: true,
        resizable: true,
        text: 'Column 1',
      },
      column2: {
        startWidth: 200,
        sortable: true,
        resizable: true,
        text: 'Column 2',
      },
      column3: {
        startWidth: 200,
        sortable: false,
        resizable: true,
        text: 'Column 3 (No Data)',
      },
      column4: {
        startWidth: 400,
        sortable: true,
        resizable: true,
        text: 'Column 4',
      },
      column5: {
        startWidth: 400,
        sortable: true,
        resizable: true,
        text: 'Column 5',
      },
      column6: {
        startWidth: 400,
        sortable: true,
        resizable: false,
        text: 'Column 6 (No Resize)',
      },
      column7: {
        startWidth: 200,
        sortable: true,
        resizable: true,
        text: 'Column 7',
      },
    };

    this.state = {
      columns,
      sorting: {},
      collapsedSections: {},
      rows: generateRows(30),
      fixedColumnKeys: ['column1', 'column2', 'column7'],
      flexColumnKeys: ['column4', 'column5', 'column6', 'column3', 'column0'],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { aggregatorDelegate } = this.props;
    const { sorting, collapsedSections } = this.state;

    if (nextState.sorting !== sorting) {
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

  handleHeaderClick(columnKey) {
    const { sorting } = this.state;

    if (!sorting[columnKey]) {
      this.setState({ sorting: { [columnKey]: 'ascending' }, rows: generateRows(30) });
      return;
    }

    if (sorting[columnKey] === 'ascending') {
      this.setState({ sorting: { [columnKey]: 'descending' }, rows: generateRows(30).reverse() });
    } else {
      this.setState({ sorting: { [columnKey]: 'ascending' }, rows: generateRows(30) });
    }
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
            component: <div>{`${rowKey} - ${columnKey}`}</div>,
            // component: <DisclosureComponent name={`${rowKey} - ${columnKey}`} />,
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

  buildRows(sectionName, num) {
    const { aggregatorDelegate } = this.props;

    let selectedCell;
    if (aggregatorDelegate.hasFocus) {
      selectedCell = aggregatorDelegate.itemState.selectedCell;
    }

    return (new Array(num)).fill().map((val, index) => (
      <Row
        key={`row${index}`}
        id={`${sectionName}-Row${index}`}
      >
        {Object.keys(this.state.columns).map(columnKey => (
          <Cell
            key={`${columnKey}`}
            columnId={columnKey}
            isSelectable
            isSelected={selectedCell && selectedCell.rowKey === `${sectionName}-Row${index}` && selectedCell.columnKey === columnKey}
          >
            <DefaultCell
              text={`Row ${index}, Column ${columnKey}`}
            />
          </Cell>
        ))}
      </Row>
    ));
  }

  buildSection(sectionId, sectionName) {
    return (
      <Section
        id={sectionId}
        title={sectionName}
        isCollapsible
        isCollapsed={this.state.collapsedSections[sectionId]}
      >
        {this.buildRows(sectionName, 30)}
      </Section>
    );
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { columns, rows, flexColumnKeys, fixedColumnKeys, sorting } = this.state;

    let sortedColumns;
    if (sorting) {
      sortedColumns = sorting;
    }

    return (
      <DataGrid
        fixedColumnKeys={fixedColumnKeys}
        flexColumnKeys={flexColumnKeys}
        columns={columns}
        sortedColumns={sortedColumns}
        sizeClass={cx('large-rows')}
        onClick={this.handleCellClick}
        onHeaderClick={this.handleHeaderClick}
        onSectionClick={this.handleSectionClick}
      >
        {this.buildSection('section_0', 'Section 0')}
        {this.buildSection('section_1', 'Section 1')}
        {this.buildSection('section_2', 'Section 2 - Long text Long textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong text')}
      </DataGrid>
    );

    // return (
    //   <DataGrid
    //     fixedColumnKeys={fixedColumnKeys}
    //     flexColumnKeys={flexColumnKeys}
    //     columns={columns}
    //     sortedColumns={sortedColumns}
    //     sizeClass={cx('large-rows')}
    //     selectedCells={selectedCells}
    //     onClick={this.handleCellClick}
    //     onHeaderClick={this.handleHeaderClick}
    //   >
    //     <Section
    //       id="Section_1"
    //       title="Section 1"
    //       isCollapsible
    //       isCollapsed
    //     >
    //       <Row
    //         id="Row1"
    //       >
    //         <Cell columnId="column0">
    //           <DefaultCell />
    //         </Cell>
    //         <Cell columnId="column1">
    //           <DefaultCell />
    //         </Cell>
    //         <Cell columnId="column2">
    //           <DefaultCell />
    //         </Cell>
    //         <Cell columnId="column3">
    //           <DefaultCell />
    //         </Cell>
    //       </Row>
    //     </Section>
    //   </DataGrid>
    // );
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

export default SlidePanelManagerWrapper;
