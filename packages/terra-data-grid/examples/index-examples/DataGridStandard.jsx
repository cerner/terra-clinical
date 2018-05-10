import React from 'react';
import classNames from 'classnames/bind';
import Aggregator from 'terra-aggregator';
import Button from 'terra-button';
import ModalManager from 'terra-modal-manager';
import SlidePanelManager from 'terra-slide-panel-manager';

import DataGrid, { Section, Row, Cell, ContentCell, HeaderCell, SectionHeader } from '../../src/DataGrid';

import styles from './DataGridStandard.scss';

const cx = classNames.bind(styles);

const CustomHeaderCell = ({ text }) => (
  <div style={{ color: 'blue' }}>
    {text}
  </div>
);

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

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    const columns = {
      column0: {
        startWidth: 300,
        minWidth: 100,
        sortable: true,
        resizable: true,
        component: <CustomHeaderCell text="Column 0 (CustomHeaderCell)" />,
      },
      column1: {
        startWidth: 200,
        sortable: true,
        resizable: true,
        component: <HeaderCell text="Column 1" />,
      },
      column2: {
        startWidth: 200,
        sortable: true,
        resizable: true,
        component: <HeaderCell text="Column 2" />,
      },
      column3: {
        startWidth: 200,
        sortable: false,
        resizable: true,
        component: <HeaderCell text="Column 3 (No Data)" />,
      },
      column4: {
        startWidth: 400,
        sortable: true,
        resizable: true,
        text: 'Column 4',
        component: <HeaderCell text="Column 4" />,
      },
      column5: {
        startWidth: 400,
        sortable: true,
        resizable: true,
        component: <HeaderCell text="Column 5" />,
      },
      column6: {
        startWidth: 400,
        sortable: true,
        resizable: false,
        component: <HeaderCell text="Column 6 (No resize)" />,
      },
      column7: {
        startWidth: 200,
        sortable: true,
        resizable: true,
        component: <HeaderCell text="Column 7" />,
      },
    };

    this.state = {
      columns,
      collapsedSections: {},
      fixedColumnKeys: ['column1', 'column2', 'column7'],
      flexColumnKeys: ['column4', 'column5', 'column6', 'column3', 'column0'],
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { aggregatorDelegate } = this.props;
    const { columns, sortedColumnKey, sortDirection, collapsedSections } = this.state;

    if (nextState.columns !== columns) {
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

  handleHeaderClick(columnKey) {
    const { sortedColumnKey } = this.state;

    const columns = Object.assign({}, this.state.columns);

    if (!columns[columnKey]) {
      return;
    }

    const headerCellComponent = columns[columnKey].component;

    if (!headerCellComponent) {
      return;
    }

    let sortDirection;
    if (!headerCellComponent.props.sortDirection || headerCellComponent.props.sortDirection === 'ascending') {
      sortDirection = 'descending';
    } else {
      sortDirection = 'ascending';
    }

    columns[columnKey].component = React.cloneElement(headerCellComponent, { sortDirection });

    /**
     * For the example implementation only one column can be sorted, so we have to keep track of the previously sorted column
     * and remove its indicator when necessary.
     */
    if (sortedColumnKey && sortedColumnKey !== columnKey && columns[sortedColumnKey] && columns[sortedColumnKey].component) {
      columns[sortedColumnKey].component = React.cloneElement(columns[sortedColumnKey].component, { sortDirection: undefined });
    }

    this.setState({ columns, sortedColumnKey: columnKey, sortDirection });
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

  handleSectionClick(event, sectionId) {
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
        {Object.keys(this.state.columns).map(columnKey => (
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

  buildSection(sectionId, sectionName) {
    const isCollapsed = this.state.collapsedSections[sectionId];

    return (
      <Section
        id={sectionId}
        component={
          <SectionHeader
            sectionId={sectionId}
            text={sectionName}
            isCollapsible
            isCollapsed={isCollapsed}
            onClick={this.handleSectionClick}
          />
        }
      >
        {!isCollapsed ? this.buildRows(sectionId, 30) : null}
      </Section>
    );
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { columns, rows, flexColumnKeys, fixedColumnKeys } = this.state;

    return (
      <DataGrid
        fixedColumnKeys={fixedColumnKeys}
        flexColumnKeys={flexColumnKeys}
        columns={columns}
        sizeClass={cx('large-rows')}
        onClick={this.handleCellClick}
        onHeaderClick={this.handleHeaderClick}
      >
        {this.buildSection('section_0', 'Section 0')}
        {this.buildSection('section_1', 'Section 1')}
        {this.buildSection('section_2', 'Section 2 - Long text Long textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong text')}
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

export default SlidePanelManagerWrapper;
