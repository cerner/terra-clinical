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

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    this.state = {
      collapsedSections: {},
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { aggregatorDelegate } = this.props;
    const { sortedColumnKey, sortDirection, collapsedSections } = this.state;

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
        isCollapsed={isCollapsed}
        text={sectionName}
      >
        {this.buildRows(sectionId, numberOfRows)}
      </Section>
    );
  }

  render() {
    const { aggregatorDelegate } = this.props;
    const { rows, sortedColumnKey, sortDirection } = this.state;

    return (
      <DataGrid
        pinnedColumns={[
          {
            id: 'column0',
            startWidth: 200,
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
            startWidth: 200,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCell
                text="Column 1"
                sortDirection={sortedColumnKey === 'column1' ? sortDirection : null}
              />
            ),
          },
          {
            id: 'column2',
            startWidth: 200,
            selectable: true,
            resizable: true,
            component: (
              <HeaderCell
                text="Column 2" sortDirection={sortedColumnKey === 'column2' ? sortDirection : null}
              />
            ),
          },
        ]}
        overflowColumns={[
          {
            id: 'column3',
            startWidth: 200,
            selectable: false,
            resizable: true,
            component: <HeaderCell text="Column 3 (No Sort)" sortDirection={sortedColumnKey === 'column3' ? sortDirection : null} />,
          },
          {
            id: 'column4',
            startWidth: 200,
            selectable: true,
            resizable: true,
            text: 'Column 4',
            component: <HeaderCell text="Column 4" sortDirection={sortedColumnKey === 'column4' ? sortDirection : null} />,
          },
          {
            id: 'column5',
            startWidth: 200,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 5" sortDirection={sortedColumnKey === 'column5' ? sortDirection : null} />,
          },
          {
            id: 'column6',
            startWidth: 200,
            selectable: true,
            resizable: false,
            component: <HeaderCell text="Column 6 (No resize)" sortDirection={sortedColumnKey === 'column6' ? sortDirection : null} />,
          },
          {
            id: 'column7',
            startWidth: 200,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 7" sortDirection={sortedColumnKey === 'column7' ? sortDirection : null} />,
          },
          {
            id: 'column8',
            startWidth: 200,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 8" sortDirection={sortedColumnKey === 'column8' ? sortDirection : null} />,
          },
          {
            id: 'column9',
            startWidth: 200,
            selectable: true,
            resizable: true,
            component: <HeaderCell text="Column 9" sortDirection={sortedColumnKey === 'column9' ? sortDirection : null} />,
          },
        ]}
        rowHeight="5rem"
        onCellClick={this.handleCellClick}
        onHeaderClick={this.handleHeaderClick}
        onSectionClick={this.handleSectionClick}
      >
        {this.buildSection('section_0', 'Section 0', 30, true)}
        {this.buildSection('section_1', 'Section 1', 10, true)}
        {this.buildSection('section_2', 'Section 2 - Long text Long textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong textLong text', 60, true)}
        {this.buildSection('section_3', 'Section 3 (No collapsing)', 10)}
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
