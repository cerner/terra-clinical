import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './ClinicalDataGridCommon.test.module.scss';

const cx = classNames.bind(styles);

const overflowColumns = [
  {
    id: 'Column-0',
    text: 'Column 0',
    width: 100,
  },
  {
    id: 'Column-1',
    text: 'Column 1',
  },
  {
    id: 'Column-2',
    text: 'Column 2',
  },
  {
    id: 'Column-3',
    text: 'Column 3',
  },
  {
    id: 'Column-4',
    text: 'Column 4',
  },
  {
    id: 'Column-5',
    text: 'Column 5',
  },
  {
    id: 'Column-6',
    text: 'Column 6',
  },
];

class HighlightColumnNotSelectableDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-${rowIndex}`,
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
      cells: ((new Array(13).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} label={`${sectionId}-${rowIndex}-${columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSection(sectionId, numberOfRows) {
    return {
      id: sectionId,
      rows: HighlightColumnNotSelectableDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    const theme = this.context;

    return (
      <div id="highlight-column-not-selectable-data-grid" className={cx('content-wrapper')}>
        <DataGrid
          id="highlight-column-example"
          columnHighlightId="Column-2"
          overflowColumns={overflowColumns}
          sections={[
            HighlightColumnNotSelectableDataGrid.buildSection('section_0', 19),
          ]}
          defaultColumnWidth={250}
          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
          fill
        />
      </div>
    );
  }
}

HighlightColumnNotSelectableDataGrid.contextType = ThemeContext;

export default HighlightColumnNotSelectableDataGrid;
