import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DraggableCore } from 'react-draggable';
import ResizeObserver from 'resize-observer-polyfill';

import ContentCell from './default-components/ContentCell';
import HeaderCell from './default-components/HeaderCell';
import SectionHeader from './default-components/SectionHeader';
import { isStickySupported } from './utils';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  fixedColumnKeys: PropTypes.arrayOf(PropTypes.string),
  flexColumnKeys: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  fixedColumnKeys: [],
  flexColumnKeys: [],
};

const stickyIsSupported = isStickySupported();

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

    this.handleResize = this.handleResize.bind(this);
    this.updateWidths = this.updateWidths.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);

    this.buildSectionData = this.buildSectionData.bind(this);

    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderFixedHeaderRow = this.renderFixedHeaderRow.bind(this);
    this.renderOverflowHeaderRow = this.renderOverflowHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderFixedContent = this.renderFixedContent.bind(this);

    this.state = Object.assign({}, DataGrid.generateWidthState(props), {
      selectionMap: DataGrid.buildSelectionMap(props.selectedCells),
      sectionData: this.buildSectionData(props.children),
    });
  }

  componentDidMount() {
    /**
     * In Safari, the 'sticky' positioned elements do not render appropriately.
     * They are positioned relative to the overall DataGrid height, rather than the overflow height (which
     * is desired). This results in headers that will eventually scroll out of view. This is bad.
     *
     * Attempts at solving this problem with CSS have failed. However, accessing the scrollHeight of the containerRef
     * triggers a redraw/repaint of the component. Upon completion of the redraw, rendering within Safari behaves as desired.
     * This is weird, but it works, and it should have an insignificant impact on performance.
     */
    const height = this.containerRef.scrollHeight; // eslint-disable-line no-unused-vars

    /**
     * A ResizeObserver is used to manage changes to the DataGrid's overall size. The handler will execute once upon the start of
     * observation and on every subsequent resize.
     */
    this.resizeObserver = new ResizeObserver((entries) => { this.handleResize(entries[0].contentRect.width, entries[0].contentRect.height); });
    this.resizeObserver.observe(this.containerRef);
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.containerRef);
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

    if (this.props.children !== nextProps.children) {
      newState.sectionData = this.buildSectionData(nextProps.children);
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

  handleResize(newWidth, newHeight) {
    /**
     * We need to update the inline widths of each section header in response to changes to the overall DataGrid width.
     * The widths are applied directly the nodes outside of the React lifecycle to improve performance.
     */
    document.querySelectorAll(`.${cx('fixed-content')} .${cx('section-header-container')}`).forEach((el) => {
      el.style.width = `${newWidth}px`; // eslint-disable-line no-param-reassign
    });
  }

  renderHeaderCell(columnKey, columnData) {
    const content = columnData.component;

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
    const { columns, fixedColumnKeys } = this.props;
    const { fixedColumnWidth } = this.state;

    return (
      <div
        className={cx('fixed-column-header-container')}
        style={{ width: `${fixedColumnWidth}px` }}
      >
        <div className={cx(['row', 'header-row'])} style={{ width: `${fixedColumnWidth}px` }}>
          {fixedColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey]))}
        </div>
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, flexColumnKeys } = this.props;
    const { flexColumnWidth } = this.state;

    return (
      <div className={cx(['row', 'header-row'])} style={{ width: `${flexColumnWidth}px` }}>
        {flexColumnKeys.map(columnKey => this.renderHeaderCell(columnKey, columns[columnKey]))}
      </div>
    );
  }

  renderSection(section, columnKeys, width, withHeader) {
    const { sizeClass } = this.props;
    const { columnWidths } = this.state;

    return (
      <React.Fragment key={section.id}>
        {section.header ? (
          <div
            key={section.id}
            className={cx('section-header-container')}
            tabIndex={withHeader ? '0' : undefined}
          >
            { withHeader ? section.header : null}
          </div>
        ) : null}
        {(!section.isCollapsible || !section.isCollapsed) && section.rows && section.rows.map((row, index) => (
          <div key={`${section.id}-${row.id}`} className={cx(['row', { 'stripe-row': index % 2 > 0 }, sizeClass])} style={{ width }}>
            {columnKeys.map((columnKey) => {
              const cell = row.cells[columnKey];

              return (
                <div
                  onClick={this.handleContentClick}
                  key={`${section.id}-${row.id}-${columnKey}`}
                  className={cx(['cell', { 'no-data': cell.noData, selectable: cell.isSelectable, selected: cell.isSelected }])}
                  style={{ width: `${columnWidths[columnKey]}px` }}
                  tabIndex={cell.isSelectable ? '0' : undefined}
                  data-column-key={columnKey}
                  data-row-key={row.id}
                >
                  {cell.content}
                </div>
              );
            })}
          </div>
        ))}
      </React.Fragment>
    );
  }

  renderFixedContent() {
    const { fixedColumnKeys } = this.props;
    const { sectionData, fixedColumnWidth } = this.state;

    return sectionData.map(section => this.renderSection(section, fixedColumnKeys, `${fixedColumnWidth}px`, true));
  }

  renderOverflowContent() {
    const { flexColumnKeys } = this.props;
    const { sectionData, flexColumnWidth } = this.state;

    return sectionData.map(section => this.renderSection(section, flexColumnKeys, `${flexColumnWidth}px`));
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

  buildSectionData(sections) {
    return React.Children.map(sections, (section) => {
      const sectionData = {};

      sectionData.id = section.props.id;
      sectionData.onClick = section.props.onClick;
      sectionData.isCollapsible = section.props.isCollapsible;
      sectionData.isCollapsed = section.props.isCollapsed;
      sectionData.header = section.props.header;
      sectionData.rows = React.Children.map(section.props.children, (row) => {
        const rowData = {};
        rowData.id = row.props.id;
        rowData.cells = {};

        React.Children.forEach(row.props.children, (cell) => {
          if (!cell.props.columnId) {
            return;
          }

          const cellData = {};
          cellData.columnId = cell.props.columnId;
          cellData.isSelectable = cell.props.isSelectable;
          cellData.isSelected = cell.props.isSelected;
          cellData.content = cell.props.children;

          rowData.cells[cell.props.columnId] = cellData;
        });
        return rowData;
      });

      return sectionData;
    });
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
            style={{
              width: `${this.state.flexColumnWidth}px`,
              minWidth: `calc(100% - ${this.state.fixedColumnWidth}px`,
              marginLeft: `${this.state.fixedColumnWidth}px`,
            }}
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
            className={cx('scroll-content')}
            style={{
              width: `${this.state.flexColumnWidth}px`,
              minWidth: `calc(100% - ${this.state.fixedColumnWidth}px`,
              marginLeft: `${this.state.fixedColumnWidth}px`,
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

const Section = () => null;
const Row = () => null;
const Cell = () => null;

export default DataGrid;
export { Section, Row, Cell, ContentCell, HeaderCell, SectionHeader };
