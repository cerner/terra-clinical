import React from 'react';
import classNames from 'classnames/bind';
import DataGrid from 'terra-clinical-data-grid';
import ContentCellLayout from './ContentCellLayout';
import styles from './ClinicalDataGridCommon.test.module.scss';

const cx = classNames.bind(styles);

const pinnedColumns = [
  {
    id: 'Column-0',
    text: 'Column 0',
    width: 100,
  },
  {
    id: 'Column-1',
    text: 'Column 1',
  },
];

const overflowColumns = [
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

class HighlightColumnEmptySectionsDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsedSectionList: ['Section-0', 'Section-2'],
    };
  }

  render() {
    const sectionNoRows = {
      id: 'Section-0',
      text: 'Section 0',
      isCollapsible: true,
      isCollapsed: this.state.collapsedSectionList.includes('Section-0'),
      rows: [],
    };

    const sectionWithOneRow = {
      id: 'Section-1',
      text: 'Section 1',
      isCollapsible: true,
      isCollapsed: this.state.collapsedSectionList.includes('Section-1'),
      rows: [
        {
          id: 'Section-1_Row-0',
          ariaLabel: 'Section 1, Row 0',
          cells: [
            {
              columnId: 'Column-0',
              component: (<ContentCellLayout text="Row-0, Column-0" label="Section-1_Row-0_Column-0" />),
            },
            {
              columnId: 'Column-1',
              component: (<ContentCellLayout text="Row-0, Column-1" label="Section-1_Row-0_Column-1" />),
            },
            {
              columnId: 'Column-2',
              component: (<ContentCellLayout text="Row-0, Column-2" label="Section-1_Row-0_Column-2" />),
            },
            {
              columnId: 'Column-3',
              component: (<ContentCellLayout text="Row-0, Column-3" label="Section-1_Row-0_Column-3" />),
            },
            {
              columnId: 'Column-4',
              component: (<ContentCellLayout text="Row-0, Column-4" label="Section-1_Row-0_Column-4" />),
            },
            {
              columnId: 'Column-5',
              component: (<ContentCellLayout text="Row-0, Column-5" label="Section-1_Row-0_Column-5" />),
            },
          ],
        },
      ],
    };

    const sectionCollapsedRows = {
      id: 'Section-2',
      text: 'Section 2',
      isCollapsible: true,
      isCollapsed: this.state.collapsedSectionList.includes('Section-2'),
      rows: [
        {
          id: 'Section-2_Row-0',
          ariaLabel: 'Section 2, Row 0',
          cells: [
            {
              columnId: 'Column-0',
              component: (<ContentCellLayout text="Row-0, Column-0" label="Section-2_Row-0_Column-0" />),
            },
            {
              columnId: 'Column-1',
              component: (<ContentCellLayout text="Row-0, Column-1" label="Section-2_Row-0_Column-1" />),
            },
            {
              columnId: 'Column-2',
              component: (<ContentCellLayout text="Row-0, Column-2" label="Section-2_Row-0_Column-2" />),
            },
            {
              columnId: 'Column-3',
              component: (<ContentCellLayout text="Row-0, Column-3" label="Section-2_Row-0_Column-3" />),
            },
            {
              columnId: 'Column-4',
              component: (<ContentCellLayout text="Row-0, Column-4" label="Section-2_Row-0_Column-4" />),
            },
            {
              columnId: 'Column-5',
              component: (<ContentCellLayout text="Row-0, Column-5" label="Section-2_Row-0_Column-5" />),
            },
          ],
        },
        {
          id: 'Section-2_Row-1',
          ariaLabel: 'Section 2, Row 1',
          cells: [
            {
              columnId: 'Column-0',
              component: (<ContentCellLayout text="Row-1, Column-0" label="Section-2_Row-1_Column-0" />),
            },
            {
              columnId: 'Column-1',
              component: (<ContentCellLayout text="Row-1, Column-1" label="Section-2_Row-1_Column-1" />),
            },
            {
              columnId: 'Column-2',
              component: (<ContentCellLayout text="Row-1, Column-2" label="Section-2_Row-1_Column-2" />),
            },
            {
              columnId: 'Column-3',
              component: (<ContentCellLayout text="Row-1, Column-3" label="Section-2_Row-1_Column-3" />),
            },
            {
              columnId: 'Column-4',
              component: (<ContentCellLayout text="Row-1, Column-4" label="Section-2_Row-1_Column-4" />),
            },
            {
              columnId: 'Column-5',
              component: (<ContentCellLayout text="Row-1, Column-5" label="Section-2_Row-1_Column-5" />),
            },
          ],
        },
        {
          id: 'Section-2_Row-2',
          ariaLabel: 'Section 2, Row 2, this is meant to be decorative, like a divider row',
          isDecorative: true,
          cells: [
            {
              columnId: 'Column-0',
              component: (<ContentCellLayout text="~~~~~~~~~" label="Section-2_Row-2_Column-0" />),
            },
            {
              columnId: 'Column-1',
              component: (<ContentCellLayout text="~~~~ This row is meant ~~~~" label="Section-2_Row-2_Column-1" />),
            },
            {
              columnId: 'Column-2',
              component: (<ContentCellLayout text="~~~~ to be decorative-only ~~~~" label="Section-2_Row-2_Column-2" />),
            },
            {
              columnId: 'Column-3',
              component: (<ContentCellLayout text="~~~~ and not highlighted ~~~~" label="Section-2_Row-2_Column-3" />),
            },
            {
              columnId: 'Column-4',
              component: (<ContentCellLayout text="~~~~~~~~~~~~~~" label="Section-2_Row-2_Column-4" />),
            },
            {
              columnId: 'Column-5',
              component: (<ContentCellLayout text="~~~~~~~~~~~~~~" label="Section-2_Row-2_Column-5" />),
            },
          ],
        },
      ],
    };

    return (
      <div id="highlight-column-empty-sections-data-grid" className={cx('content-wrapper')}>
        <DataGrid
          id="highlight-column-example"
          columnHighlightId="Column-3"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            sectionNoRows,
            sectionWithOneRow,
            sectionCollapsedRows,
          ]}
          onRequestSectionCollapse={(sectionId) => {
            const index = this.state.collapsedSectionList.findIndex(id => sectionId === id);
            if (index !== -1) {
              this.setState(prevState => {
                const collapsedSectionList = prevState.collapsedSectionList.filter(id => sectionId !== id);
                return { collapsedSectionList };
              });
            } else {
              this.setState(prevState => {
                const collapsedSectionList = [...prevState.collapsedSectionList, sectionId];
                return { collapsedSectionList };
              });
            }
          }}
          defaultColumnWidth={250}
          fill
        />
      </div>
    );
  }
}

export default HighlightColumnEmptySectionsDataGrid;
