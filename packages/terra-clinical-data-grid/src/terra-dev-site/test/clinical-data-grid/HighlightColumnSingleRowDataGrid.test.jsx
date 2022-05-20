import React from 'react';
import classNames from 'classnames/bind';
import DataGrid from 'terra-clinical-data-grid';
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
];

const sectionWithOneRow = {
  id: 'Section-0',
  rows: [
    {
      id: 'Section-0_Row-0',
      ariaLabel: 'Section 0, Row 0',
      cells: [
        {
          columnId: 'Column-0',
          component: (<ContentCellLayout text="Row-0, Column-0" label="Section-0_Row-0_Column-0" />),
        },
        {
          columnId: 'Column-1',
          component: (<ContentCellLayout text="Row-0, Column-1" label="Section-0_Row-0_Column-1" />),
        },
        {
          columnId: 'Column-2',
          component: (<ContentCellLayout text="Row-0, Column-2" label="Section-0_Row-0_Column-2" />),
        },
        {
          columnId: 'Column-3',
          component: (<ContentCellLayout text="Row-0, Column-3" label="Section-0_Row-0_Column-3" />),
        },
        {
          columnId: 'Column-4',
          component: (<ContentCellLayout text="Row-0, Column-4" label="Section-0_Row-0_Column-4" />),
        },
        {
          columnId: 'Column-5',
          component: (<ContentCellLayout text="Row-0, Column-5" label="Section-0_Row-0_Column-5" />),
        },
      ],
    },
  ],
};

const HighlightColumnSingleRowDataGrid = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div id="highlight-column-single-row-data-grid" className={cx('content-wrapper')}>
      <DataGrid
        id="highlight-column-example"
        columnHighlightId="Column-2"
        overflowColumns={overflowColumns}
        sections={[sectionWithOneRow]}
        defaultColumnWidth={250}
        rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}
        fill
      />
    </div>
  );
};

HighlightColumnSingleRowDataGrid.contextType = ThemeContext;

export default HighlightColumnSingleRowDataGrid;
