import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);

const pinnedColumnsCount = 3;
const numColumnsDisplayed = 7;
const fetchRowSize = 6;
const numberOfRowsPerSectionToDisplay = 9;
const numSectionInSourceData = 3;

class DatagridWithPaging extends React.Component {
  static buildRows(sectionData, numOfColumns, startingRow) {
    const availableRows = Math.min(sectionData.sectionRows.length - startingRow, fetchRowSize, numberOfRowsPerSectionToDisplay - startingRow);
    const rows = (new Array(availableRows)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionData.section.id}-Row${rowIndex + startingRow}`,
      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({
        columnId: sectionData.sectionRows[rowIndex + startingRow].cells[cellIndex].columnId,
        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex + startingRow].cells[cellIndex].cellContent} />,
      })),
    }));
    return rows;
  }

  static buildColumns(data, start, end) {
    const col = (new Array(end - start));
    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {
      const columnHeaderInfo = data.allColumnIds[columnIndex];
      col[currentElementIndex] = {
        id: columnHeaderInfo.id,
        text: columnHeaderInfo.displayName,
        width: 200,
      };
    }
    return col;
  }

  static buildSection(sectionData) {
    return {
      id: sectionData.section.id,
      text: sectionData.section.text,
      rows: DatagridWithPaging.buildRows(sectionData, numColumnsDisplayed, 0),
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      sectionCount: 1,
      rowcount: fetchRowSize,
      hasMoreData: true,
      isLoading: false,
      sections: [DatagridWithPaging.buildSection(gridDataJSON.sections[0])],
    };
  }

  componentWillUnmount() {
    clearTimeout(this.pagingTimeout);
  }

  getStateAfterFetchingMoreData() {
    return (prevState) => {
      let rowsAdded = [];
      const sectionData = gridDataJSON.sections[this.state.sectionCount - 1];
      let modifiedSections = [...prevState.sections];

      if (this.state.rowcount < numberOfRowsPerSectionToDisplay) {
        // Add more rows to the existing section if there are additional rows for that section in the source data.
        rowsAdded = DatagridWithPaging.buildRows(sectionData, numColumnsDisplayed, this.state.rowcount);
        modifiedSections[this.state.sectionCount - 1].rows = modifiedSections[this.state.sectionCount - 1].rows.concat(rowsAdded);
      } else if (this.state.sectionCount < gridDataJSON.sections.length) {
        // Add a new section if there are additional sections in the source data.
        this.state.sectionCount += 1;
        this.state.rowcount = fetchRowSize;
        modifiedSections = modifiedSections.concat(DatagridWithPaging.buildSection(gridDataJSON.sections[this.state.sectionCount - 1]));
      } else {
        // Done fetching all sections/rows from the source data.
        this.state.hasMoreData = false;
      }
      return {
        sectionCount: this.state.sectionCount,
        isLoading: false,
        hasMoreData: this.state.hasMoreData,
        rowcount: this.state.rowcount + rowsAdded.length,
        sections: modifiedSections,
      };
    };
  }

  render() {
    const theme = this.context;

    return (
      <div className={cx('data-grid-paging')}>
        <DataGrid
          id="paging-example"
          pinnedColumns={DatagridWithPaging.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}
          overflowColumns={DatagridWithPaging.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}
          sections={this.state.sections}
          fill
          onRequestContent={this.state.sectionCount <= numSectionInSourceData && this.state.hasMoreData ? (() => {
            this.setState({ isLoading: true }, () => {
              clearTimeout(this.pagingTimeout);
              this.pagingTimeout = setTimeout(() => {
                this.setState(this.getStateAfterFetchingMoreData());
              }, 2000);
            });
          }) : undefined}
          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
        />
        <LoadingOverlay isOpen={this.state.isLoading} isRelativeToContainer isAnimated className={cx('loading-overlay')} />
      </div>
    );
  }
}

DatagridWithPaging.contextType = ThemeContext;

export default DatagridWithPaging;
