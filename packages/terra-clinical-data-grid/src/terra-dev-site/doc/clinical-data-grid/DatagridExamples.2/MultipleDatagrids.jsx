import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';

const cx = classNames.bind(styles);
const grid1 = 'Grid1';
const grid2 = 'Grid2';

class MultipleDatagrids extends React.Component {
  constructor(props) {
    super(props);

    this.buildSection = this.buildSection.bind(this);
    this.buildRows = this.buildRows.bind(this);

    this.state = {
      gridData: {
        [grid1]: {
          sortedColumnId: 'Column-0',
          sortedColumnDirection: 'ascending',
          selectedRow: undefined,
          selectedCell: undefined,
          columnHighlightId: 'Column-1',
          collapsedSectionList: [],
          columns: {
            'Column-0': {
              id: 'Column-0',
              width: 200,
              text: 'Grid 1 Column 0',
              isSelectable: true,
              sortIndicator: 'ascending',
              isResizable: true,
            },
            'Column-1': {
              id: 'Column-1',
              width: 200,
              text: 'Grid 1 Column 1',
              isSelectable: true,
              isResizable: true,
            },
            'Column-2': {
              id: 'Column-2',
              width: 200,
              text: 'Grid 1 Column 2',
              isSelectable: true,
              isResizable: true,
            },
            'Column-3': {
              id: 'Column-3',
              width: 200,
              text: 'Grid 1 Column 3',
              isSelectable: true,
              isResizable: true,
            },
          },
        },
        [grid2]: {
          sortedColumnId: 'Column-0',
          sortedColumnDirection: 'descending',
          selectedRow: undefined,
          selectedCell: undefined,
          columnHighlightId: 'Column-0',
          collapsedSectionList: [],
          columns: {
            'Column-0': {
              id: 'Column-0',
              width: 200,
              text: 'Column 0',
              isSelectable: true,
              sortIndicator: 'descending',
              isResizable: true,
            },
            'Column-1': {
              id: 'Column-1',
              width: 200,
              text: 'Column 1',
              isSelectable: true,
              isResizable: true,
            },
            'Column-2': {
              id: 'Column-2',
              width: 200,
              text: 'Column 2',
              isSelectable: true,
              isResizable: true,
            },
            'Column-3': {
              id: 'Column-3',
              width: 200,
              text: 'Column 3',
              isSelectable: true,
              isResizable: true,
            },
          },
        },
      },
    };
  }

  buildRows(gridId, sectionId, numOfRows) {
    const gridData = this.state.gridData[gridId];
    const rows = (new Array(numOfRows)).fill().map((rowVal, rowIndex) => ({
      id: `Row-${rowIndex}`,
      isSelectable: true,
      isSelected: gridData.selectedRow && gridData.selectedRow.sectionId === sectionId && gridData.selectedRow.rowId === `Row-${rowIndex}`,
      cells: ((new Array(4).fill(0)).map((cellVal, cellIndex) => (Object.values(gridData.columns)[cellIndex].id))).map((columnKey) => ({
        columnId: columnKey,
        isSelectable: true,
        isSelected: gridData.selectedCell && gridData.selectedCell.sectionId === sectionId && gridData.selectedCell.rowId === `Row-${rowIndex}` && gridData.selectedCell.columnId === columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,
      })),
    }));

    return gridData.sortedColumnId && gridData.sortedColumnDirection === 'ascending' ? rows : rows.reverse();
  }

  buildSection(gridId, sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      isCollapsible: true,
      isCollapsed: this.state.gridData[gridId].collapsedSectionList.includes(sectionId),
      rows: this.buildRows(gridId, sectionId, numberOfRows),
    };
  }

  render() {
    const { gridData } = this.state;
    const theme = this.context;
    return (
      <div>
        <div className={cx('data-grid-small')}>
          <DataGrid
            id={grid1}
            pinnedColumns={[
              gridData[grid1].columns['Column-0'],
              gridData[grid1].columns['Column-1'],
            ]}
            overflowColumns={[
              gridData[grid1].columns['Column-2'],
              gridData[grid1].columns['Column-3'],
            ]}
            columnHighlightId={gridData[grid1].columnHighlightId}
            sections={[
              this.buildSection(grid1, 'Grid-1-Section-0', 'Grid 1 Section 0', 4),
              this.buildSection(grid1, 'Grid-1-Section-1', 'Grid 1 Section 1', 4),
            ]}
            fill
            onColumnSelect={(columnId) => {
              const newColumns = {};
              const myGridData = this.state.gridData[grid1];

              const columnToSort = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };
              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';
              newColumns[`${columnId}`] = columnToSort;

              if (columnId !== myGridData.sortedColumnId) {
                const previouslySortedColumn = { ...Object.values(myGridData.columns).find(element => element.id === myGridData.sortedColumnId) };
                if (previouslySortedColumn) {
                  previouslySortedColumn.sortIndicator = undefined;
                  newColumns[`${myGridData.sortedColumnId}`] = previouslySortedColumn;
                }
              }
              this.setState(prevState => {
                const changedData = {
                  sortedColumnId: columnId,
                  sortedColumnDirection: columnToSort.sortIndicator,
                  columns: { ...prevState.gridData[grid1].columns, ...newColumns },
                };
                return { gridData: { ...prevState.gridData, ...{ [grid1]: { ...prevState.gridData[grid1], ...changedData } } } };
              });
            }}
            onCellSelect={(sectionId, rowId, columnId) => {
              this.setState((prevState) => {
                const gridWithSelectedCell = { [grid1]: { ...prevState.gridData[grid1], ...{ selectedRow: undefined, selectedCell: { sectionId, rowId, columnId } } } };
                return { gridData: { ...prevState.gridData, ...gridWithSelectedCell } };
              });
            }}
            hasSelectableRows
            onRowSelect={(sectionId, rowId) => {
              this.setState((prevState) => {
                const gridWithSelectedRow = { [grid1]: { ...prevState.gridData[grid1], ...{ selectedRow: { sectionId, rowId }, selectedCell: undefined } } };
                return { gridData: { ...prevState.gridData, ...gridWithSelectedRow } };
              });
            }}
            onRequestSectionCollapse={(sectionId) => {
              const index = this.state.gridData[grid1].collapsedSectionList.findIndex(id => sectionId === id);
              if (index !== -1) {
                this.setState(prevState => {
                  const gridWithSectionCollapse = { [grid1]: { ...prevState.gridData[grid1], ...{ collapsedSectionList: prevState.gridData[grid1].collapsedSectionList.filter(id => sectionId !== id) } } };
                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };
                });
              } else {
                this.setState(prevState => {
                  const gridWithSectionCollapse = { [grid1]: { ...prevState.gridData[grid1], ...{ collapsedSectionList: [...prevState.gridData[grid1].collapsedSectionList, sectionId] } } };
                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };
                });
              }
            }}
            rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
            hasResizableColumns
            onRequestColumnResize={(columnId, width) => {
              const newColumns = {};
              const myGridData = this.state.gridData[grid1];
              const columnToUpdate = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };
              columnToUpdate.width = Math.max(width, 50);
              newColumns[`${columnId}`] = columnToUpdate;
              this.setState(prevState => {
                const changedData = { columns: { ...prevState.gridData[grid1].columns, ...newColumns } };
                return { gridData: { ...prevState.gridData, ...{ [grid1]: { ...prevState.gridData[grid1], ...changedData } } } };
              });
            }}
          />
        </div>

        <div className={cx('data-grid-basic')}>
          <DataGrid
            id={grid2}
            pinnedColumns={[
              gridData[grid2].columns['Column-0'],
              gridData[grid2].columns['Column-1'],
            ]}
            overflowColumns={[
              gridData[grid2].columns['Column-2'],
            ]}
            columnHighlightId={gridData[grid2].columnHighlightId}
            sections={[
              this.buildSection(grid2, 'Grid-2-Section-0', 'Grid 2 Section 0', 4),
              this.buildSection(grid2, 'Grid-2-Section-1', 'Grid 2 Section 1', 4),
            ]}
            fill
            onColumnSelect={(columnId) => {
              const newColumns = {};
              const myGridData = this.state.gridData[grid2];

              const columnToSort = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };
              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';
              newColumns[`${columnId}`] = columnToSort;

              if (columnId !== myGridData.sortedColumnId) {
                const previouslySortedColumn = { ...Object.values(myGridData.columns).find(element => element.id === myGridData.sortedColumnId) };
                if (previouslySortedColumn) {
                  previouslySortedColumn.sortIndicator = undefined;
                  newColumns[`${myGridData.sortedColumnId}`] = previouslySortedColumn;
                }
              }
              this.setState(prevState => {
                const changedData = {
                  sortedColumnId: columnId,
                  sortedColumnDirection: columnToSort.sortIndicator,
                  columns: { ...prevState.gridData[grid2].columns, ...newColumns },
                };
                return { gridData: { ...prevState.gridData, ...{ [grid2]: { ...prevState.gridData[grid2], ...changedData } } } };
              });
            }}
            onCellSelect={(sectionId, rowId, columnId) => {
              this.setState((prevState) => {
                const gridWithSelectedCell = { [grid2]: { ...prevState.gridData[grid2], ...{ selectedRow: undefined, selectedCell: { sectionId, rowId, columnId } } } };
                return { gridData: { ...prevState.gridData, ...gridWithSelectedCell } };
              });
            }}
            hasSelectableRows
            onRowSelect={(sectionId, rowId) => {
              this.setState((prevState) => {
                const gridWithSelectedRow = { [grid2]: { ...prevState.gridData[grid2], ...{ selectedRow: { sectionId, rowId }, selectedCell: undefined } } };
                return { gridData: { ...prevState.gridData, ...gridWithSelectedRow } };
              });
            }}
            onRequestSectionCollapse={(sectionId) => {
              const index = this.state.gridData[grid2].collapsedSectionList.findIndex(id => sectionId === id);
              if (index !== -1) {
                this.setState(prevState => {
                  const gridWithSectionCollapse = { [grid2]: { ...prevState.gridData[grid2], ...{ collapsedSectionList: prevState.gridData[grid2].collapsedSectionList.filter(id => sectionId !== id) } } };
                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };
                });
              } else {
                this.setState(prevState => {
                  const gridWithSectionCollapse = { [grid2]: { ...prevState.gridData[grid2], ...{ collapsedSectionList: [...prevState.gridData[grid2].collapsedSectionList, sectionId] } } };
                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };
                });
              }
            }}
            rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
            hasResizableColumns
            onRequestColumnResize={(columnId, width) => {
              const newColumns = {};
              const myGridData = this.state.gridData[grid2];
              const columnToUpdate = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };
              columnToUpdate.width = Math.max(width, 50);
              newColumns[`${columnId}`] = columnToUpdate;
              this.setState(prevState => {
                const changedData = { columns: { ...prevState.gridData[grid2].columns, ...newColumns } };
                return { gridData: { ...prevState.gridData, ...{ [grid2]: { ...prevState.gridData[grid2], ...changedData } } } };
              });
            }}
          />
        </div>
      </div>
    );
  }
}

MultipleDatagrids.contextType = ThemeContext;

export default MultipleDatagrids;
