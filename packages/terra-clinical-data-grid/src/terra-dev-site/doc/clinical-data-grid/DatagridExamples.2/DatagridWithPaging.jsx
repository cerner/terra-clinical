import React from 'react';
import DataGrid from 'terra-clinical-data-grid';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentCellLayout from './ContentCellLayout';
import styles from './Datagrid.module.scss';

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
];

class DatagridWithPaging extends React.Component {
  static buildRows(sectionId, num) {
    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({
      id: `${sectionId}-Row${rowIndex}`,
      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({
        columnId: columnKey,
        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,
      })),
    }));

    return rows;
  }

  static buildSections(sectionCount) {
    const sections = [];
    for (let i = 0, length = sectionCount; i < length; i += 1) {
      const sectionId = `section_${i}`;
      sections.push({
        id: sectionId,
        text: `Section ${i}`,
        rows: DatagridWithPaging.buildRows(sectionId, 3),
      });
    }

    return sections;
  }

  constructor(props) {
    super(props);

    this.state = {
      sectionCount: 1,
      isLoading: false,
      sections: DatagridWithPaging.buildSections(1),
    };
  }

  componentWillUnmount() {
    clearTimeout(this.pagingTimeout);
  }

  render() {
    const theme = this.context;

    return (
      <div className={cx('data-grid-paging')}>
        <DataGrid
          id="paging-example"
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          sections={this.state.sections}
          fill
          onRequestContent={this.state.sectionCount < 10 ? (() => {
            this.setState({ isLoading: true }, () => {
              clearTimeout(this.pagingTimeout);
              this.pagingTimeout = setTimeout(() => {
                this.setState(prevState => ({ sectionCount: prevState.sectionCount + 1, isLoading: false, sections: DatagridWithPaging.buildSections(prevState.sectionCount + 1) }));
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
