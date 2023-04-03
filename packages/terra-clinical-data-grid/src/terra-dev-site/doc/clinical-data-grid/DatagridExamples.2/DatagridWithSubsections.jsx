import React from 'react';
import Button from 'terra-button';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';
import gridDataJSON from './Datagrid.json';

const cx = classNames.bind(styles);

const numColumnsDisplayed = 10;
const pinnedColumnsCount = 3;
const numRowsPerSection = 15;
class DatagridWithSubsections extends React.Component {
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

  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {
    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionData.section.id}-Row${rowIndex}`,
      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({
        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,
        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,
      })),
    }));

    return rows;
  }

  constructor(props) {
    super(props);

    this.buildSection = this.buildSections.bind(this);

    this.state = {
      collapsedSectionId: undefined,
    };
  }

  buildSections(data, numberOfRowsToDisplay) {
    return new Array(data.sections.length).fill(0).map((sectionVal, sectionIndex) => ({
      id: data.sections[sectionIndex].section.id,
      text: data.sections[sectionIndex].section.text,
      endAccessory: (data.sections[sectionIndex].section.id === 'section_1') ? (
        <span>
          <Button text="Button 1" isCompact data-accessible-data-grid-content variant="ghost" className={cx('spacer-right-medium')} />
          <Button text="Button 2" isCompact data-accessible-data-grid-content variant="ghost" className={cx('spacer-right-medium')} />
          <Button text="Button 3" isCompact data-accessible-data-grid-content variant="emphasis" />
        </span>
      ) : null,
      isCollapsible: data.sections[sectionIndex].section.id === 'section_0',
      isCollapsed: this.state.collapsedSectionId === data.sections[sectionIndex].section.id,
      rows: DatagridWithSubsections.buildRows(data.sections[sectionIndex], data.allColumnIds.length, numberOfRowsToDisplay),
    }));
  }

  render() {
    const theme = this.context;

    return (
      <div className={cx('data-grid-basic')}>
        <DataGrid
          id="subsections-example"
          pinnedColumns={DatagridWithSubsections.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}
          overflowColumns={DatagridWithSubsections.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}
          sections={this.buildSections(gridDataJSON, numRowsPerSection)}
          onRequestSectionCollapse={(sectionId) => {
            if (this.state.collapsedSectionId === sectionId) {
              this.setState({ collapsedSectionId: undefined });
            } else {
              this.setState({ collapsedSectionId: sectionId });
            }
          }}
          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
          fill
        />
      </div>
    );
  }
}

DatagridWithSubsections.contextType = ThemeContext;

export default DatagridWithSubsections;
