import React from 'react';
import Button from 'terra-button';
import DataGrid from 'terra-clinical-data-grid';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './ClinicalDataGridCommon.test.module.scss';

const cx = classNames.bind(styles);

const pinnedColumns = [
  {
    id: 'Column-0',
    width: 200,
    text: 'Column 0',
  },
  {
    id: 'Column-1',
    width: 200,
    text: 'Column 1',
  },
  {
    id: 'Column-2',
    width: 200,
    text: 'Column 2',
  },
];

const overflowColumns = [
  {
    id: 'Column-3',
    width: 200,
    text: 'Column 3',
  },
  {
    id: 'Column-4',
    width: 200,
    text: 'Column 4',
  },
  {
    id: 'Column-5',
    width: 200,
    text: 'Column 5',
  },
  {
    id: 'Column-6',
    width: 200,
    text: 'Column 6',
  },
  {
    id: 'Column-7',
    width: 200,
    text: 'Column 7',
  },
  {
    id: 'Column-8',
    width: 200,
    text: 'Column 8',
  },
  {
    id: 'Column-9',
    width: 200,
    text: 'Column 9',
  },
];

class SubsectionDataGrid extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      ariaLabel: `Row ${sectionId}-${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  constructor(props) {
    super(props);

    this.buildSection = this.buildSection.bind(this);

    this.state = {
      collapsedSectionId: undefined,
    };
  }

  buildSection(sectionId, sectionName, numberOfRows) {
    return {
      id: sectionId,
      text: sectionName,
      endAccessory: (sectionId === 'section_1') ? (
        <span>
          <Button text="Button 1" isCompact data-accessible-data-grid-content variant="ghost" className={cx('spacer-right-medium')} />
          <Button text="Button 2" isCompact data-accessible-data-grid-content variant="ghost" className={cx('spacer-right-medium')} />
          <Button text="Button 3" isCompact data-accessible-data-grid-content variant="emphasis" />
        </span>
      ) : null,
      isCollapsible: sectionId === 'section_0',
      isCollapsed: this.state.collapsedSectionId === sectionId,
      rows: SubsectionDataGrid.buildRows(sectionId, numberOfRows),
    };
  }

  render() {
    const theme = this.context;

    return (
      <div id="subsection-data-grid" className={cx('content-wrapper')}>
        <DataGrid
          id="subsections-example"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={[
            this.buildSection('section_0', 'Section 0', 15),
            this.buildSection('section_1', 'Section 1', 15),
            this.buildSection('section_2', 'Section 2', 15),
          ]}
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

SubsectionDataGrid.contextType = ThemeContext;

export default SubsectionDataGrid;
