import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  fixedColumnKeys: PropTypes.arrayOf(PropTypes.string),
  flexColumnKeys: PropTypes.arrayOf(PropTypes.string),
  sortedColumns: PropTypes.object,
};

const defaultProps = {
  fixedColumnKeys: [],
  flexColumnKeys: [],
  sortedColumns: {},
};

const DefaultCell = ({ text }) => (
  <div className={cx('default-cell')}>
    {text}
  </div>
);

const DefaultHeaderCell = ({ text, sortable, sortDirection }) => {
  let sortIndicator;
  if (sortable) {
    sortIndicator = (
      <div className={cx('sort-indicator')}>
        {sortDirection === 'ascending' ? <IconCaretUp /> : null}
        {sortDirection === 'descending' ? <IconCaretDown /> : null}
      </div>
    );
  }

  return (
    <div className={cx('default-header-cell')}>
      <div className={cx('text')}>
        {text}
      </div>
      {sortIndicator}
    </div>
  );
};

let stickyIsSupported;
if (!window.getComputedStyle) {
  stickyIsSupported = false;
} else {
  const testNode = document.createElement('div');

  stickyIsSupported = ['', '-webkit-', '-moz-', '-ms-'].some((prefix) => {
    try {
      testNode.style.position = `${prefix}sticky`;
    } catch (e) {
      // Exception can be thrown if position value is not supported.
    }

    return testNode.style.position !== '';
  });
}

// stickyIsSupported = false;

class DataGrid extends React.Component {
  static generateWidthState(props) {
    const fixedColumnWidth = props.fixedColumnKeys.length ?
      props.fixedColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width) : 0;

    const flexColumnWidth = props.flexColumnKeys.length ?
      props.flexColumnKeys.map(key => props.columns[key].startWidth).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    const columnWidths = {};
    Object.keys(props.columns).forEach((columnKey) => {
      columnWidths[columnKey] = props.columns[columnKey].startWidth;
    });

    return {
      fixedColumnWidth,
      flexColumnWidth,
      columnWidths,
    };
  }

  static buildSelectionMap(selectionArray) {
    const selectionMap = {};
    if (!selectionArray) {
      return {};
    }

    selectionArray.forEach((selection) => {
      if (!selection.rowKey || !selection.columnKey) {
        return;
      }

      if (!selectionMap[selection.rowKey]) {
        selectionMap[selection.rowKey] = {};
      }

      selectionMap[selection.rowKey][selection.columnKey] = true;
    });

    return selectionMap;
  }

  constructor(props) {
    super(props);

    this.updateWidths = this.updateWidths.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);

    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderFixedHeaderRow = this.renderFixedHeaderRow.bind(this);
    this.renderOverflowHeaderRow = this.renderOverflowHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderFixedContent = this.renderFixedContent.bind(this);
    this.renderContentCell = this.renderContentCell.bind(this);

    this.state = Object.assign({}, DataGrid.generateWidthState(props), {
      selectionMap: DataGrid.buildSelectionMap(props.selectedCells),
    });
  }

  componentWillReceiveProps(nextProps) {
    let newState = {};
    if (this.props.columns !== nextProps.columns) {
      /**
       * The widths are regenerated only if the columns prop has been mutated. This ensures that any temporary column widths
       * are maintained on subsequent renders.
       */
      newState = Object.assign({}, DataGrid.generateWidthState(nextProps));
    }

    if (this.props.selectedCells !== nextProps.selectedCells) {
      newState.selectionMap = DataGrid.buildSelectionMap(nextProps.selectedCells);
    }

    if (Object.keys(newState).length) {
      this.setState(newState);
    }
  }


  updateWidths(columnKey, widthDelta, minWidth) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    const minimumColumnWidth = minWidth || 50;

    if (columnWidths[columnKey] + widthDelta < minimumColumnWidth) {
      columnWidths[columnKey] = minimumColumnWidth;
    } else {
      columnWidths[columnKey] += widthDelta;
    }

    const fixedColumnWidth = this.props.fixedColumnKeys.length ?
      this.props.fixedColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width) : 0;

    const flexColumnWidth = this.props.flexColumnKeys.length ?
      this.props.flexColumnKeys.map(key => columnWidths[key]).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    this.setState({
      fixedColumnWidth,
      flexColumnWidth,
      columnWidths,
    });
  }

  renderHeaderCell(columnKey, columnData, sortedColumns) {
    let content;
    if (columnData.text) {
      content = <DefaultHeaderCell text={columnData.text} sortable={columnData.sortable} sortDirection={sortedColumns[columnKey]} />;
    } else if (columnData.component) {
      content = columnData.component;
    }

    let resizeHandle;
    if (columnData.resizable) {
      resizeHandle = (
        <DraggableCore
          onStart={(event, data) => {
            const node = data.node;

            node.classList.add(cx('react-draggable-dragging'));
            node.style.height = `${this.containerRef.clientHeight}px`;

            this.scrollPosition = 0;
          }}
          onStop={(event, data) => {
            const node = data.node;

            node.classList.remove(cx('react-draggable-dragging'));
            node.style.transform = '';
            node.style.height = '';

            this.updateWidths(columnKey, this.scrollPosition, columnData.minWidth);
          }}
          onDrag={(event, data) => {
            const node = data.node;

            this.scrollPosition += data.deltaX;
            node.style.transform = `translate3d(${this.scrollPosition}px, 0, 0)`;
          }}
        >
          <div className={cx('drag-region')} />
        </DraggableCore>
      );
    }

    return (
      <div
        key={columnKey}
        data-column-key={columnKey}
        className={cx(['cell', 'header-cell', { selectable: columnData.sortable }])}
        style={{ width: `${this.state.columnWidths[columnKey]}px` }}
        tabIndex={columnData.sortable ? '0' : null}
        onClick={this.handleHeaderClick}
      >
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }} >
          {content}
        </div>
        {resizeHandle}
      </div>
    );
  }

  renderFixedHeaderRow() {
    const { columns, fixedColumnKeys, sortedColumns } = this.props;
    const { fixedColumnWidth, flexColumnWidth } = this.state;

    return (
      <div
        className={cx('fixed-column-header-container')}
        style={{ width: `${fixedColumnWidth}px` }}
      >
        <div className={cx(['row', 'header-row'])} style={{ width: `${fixedColumnWidth}px` }}>
          {fixedColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], sortedColumns))}
        </div>
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, flexColumnKeys, sortedColumns } = this.props;
    const { flexColumnWidth } = this.state;

    return (
      <div className={cx(['row', 'header-row'])} style={{ width: `${flexColumnWidth}px` }}>
        {flexColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey], sortedColumns))}
        <div className={cx('buffer-cell')} />
      </div>
    );
  }

  renderContentCell(columnKey, rowKey, rowData) {
    const { columnWidths, selectionMap } = this.state;

    let content;
    if (rowData.text) {
      content = <DefaultCell text={rowData.text} />;
    } else if (rowData.component) {
      content = rowData.component;
    }

    return (
      <div
        onClick={this.handleContentClick}
        key={`${rowKey} - ${columnKey}`}
        className={cx(['cell', { 'no-data': rowData.noData, selectable: rowData.selectable, selected: selectionMap[rowKey] && selectionMap[rowKey][columnKey] }])}
        style={{ width: `${columnWidths[columnKey]}px` }}
        tabIndex={rowData.selectable ? '0' : undefined}
        data-column-key={columnKey}
        data-row-key={rowKey}
      >
        {content}
      </div>
    );
  }

  renderOverflowContent() {
    const { rows, flexColumnKeys, sizeClass } = this.props;

    const { flexColumnWidth } = this.state;

    return rows.map((row, index) => (
      <div key={row.key} className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])} style={{ width: `${flexColumnWidth}px` }}>
        {flexColumnKeys.map(columnKey => this.renderContentCell(columnKey, row.key, row.data[columnKey]))}
        <div className={cx('buffer-cell')} />
      </div>
    ));
  }

  renderFixedContent() {
    const { rows, fixedColumnKeys, sizeClass } = this.props;

    const { fixedColumnWidth } = this.state;

    return rows.map((row, index) => (
      <div key={row.key} className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])} style={{ width: `${fixedColumnWidth}px` }}>
        {fixedColumnKeys.map(columnKey => this.renderContentCell(columnKey, row.key, row.data[columnKey]))}
      </div>
    ));
  }

  handleHeaderClick(event) {
    const { onHeaderClick, columns } = this.props;

    /**
     * If the click event target is the resize handle, we do not want to
     * recognize the click.
     */
    if (event.target.classList.contains(cx('drag-region'))) {
      return;
    }

    const headerCellNode = event.currentTarget;

    if (!headerCellNode.classList.contains(cx('header-cell'))) {
      return;
    }

    if (headerCellNode.classList.contains(cx('selectable')) && onHeaderClick) {
      const columnKey = headerCellNode.getAttribute('data-column-key');

      onHeaderClick(headerCellNode.getAttribute('data-column-key'));
    }
  }

  handleContentClick(event) {
    const { onClick } = this.props;

    const cellNode = event.currentTarget;

    if (!cellNode.classList.contains(cx('cell'))) {
      return;
    }

    if (cellNode.classList.contains(cx('selectable')) && onClick) {
      onClick(cellNode.getAttribute('data-row-key'), cellNode.getAttribute('data-column-key'));
    }
  }

  render() {
    console.log('rendering data grid');

    return (
      <div
        className={cx(['container', { 'legacy-sticky': !stickyIsSupported }])}
        ref={(ref) => {
          this.containerRef = ref;
        }}
      >
        {this.renderFixedHeaderRow()}
        <div className={cx(['overflow-container', { 'legacy-sticky': !stickyIsSupported }])}>
          <div
            className={cx('scroll-header')}
            style={{ width: `${this.state.flexColumnWidth}px`, paddingLeft: `${this.state.fixedColumnWidth}px` }}
          >
            {this.renderOverflowHeaderRow()}
          </div>
          <div
            className={cx(['fixed-content', { 'legacy-sticky': !stickyIsSupported }])}
            style={{ width: `${this.state.fixedColumnWidth}px` }}
          >
            {this.renderFixedContent()}
          </div>
          <div
            className={cx('scroll-content')} style={{ width: `${this.state.flexColumnWidth}px`, paddingLeft: `${this.state.fixedColumnWidth}px` }}
            ref={(ref) => {
              this.scrollContentRef = ref;
              if (this.scrollContentRef) {
                // Necessary to correct initial rendering bug with Safari.
                // Without this, the sticky headers will scroll away too soon (they are positioned relative to the overflow-container height vs. the
                // overall content height).
                this.scrollContentRef.style.height = `${this.scrollContentRef.scrollHeight}px`;
              }
            }}
          >
            {this.renderOverflowContent()}
          </div>
        </div>
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
