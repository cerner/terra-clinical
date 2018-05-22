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

const Section = () => null;
const Row = () => null;
const Cell = () => null;

const propTypes = {
  pinnedColumns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    startWidth: PropTypes.number,
    selectable: PropTypes.bool,
    resizable: PropTypes.bool,
    component: PropTypes.node,
  })),
  overflowColumns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    startWidth: PropTypes.number,
    selectable: PropTypes.bool,
    resizable: PropTypes.bool,
    component: PropTypes.node,
  })),
  rowHeight: PropTypes.string,
  onCellClick: PropTypes.func,
  onHeaderClick: PropTypes.func,
  onSectionClick: PropTypes.func,
  children: PropTypes.node,
};

const defaultProps = {
  pinnedColumns: [],
  overflowColumns: [],
  rowHeight: '2rem',
};

const stickyIsSupported = isStickySupported();

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  TAB: 9,
  SHIFT: 16,
};

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector;
}

class DataGrid extends React.Component {
  static generateWidthState(props) {
    const pinnedColumnWidth = props.pinnedColumns.length ?
      props.pinnedColumns.map(column => column.startWidth).reduce((totalWidth, width) => totalWidth + width) : 0;

    const overflowColumnWidth = props.overflowColumns.length ?
      props.overflowColumns.map(column => column.startWidth).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    const columnWidths = {};
    props.pinnedColumns.forEach((column) => {
      columnWidths[column.id] = column.startWidth;
    });
    props.overflowColumns.forEach((column) => {
      columnWidths[column.id] = column.startWidth;
    });

    return {
      pinnedColumnWidth,
      overflowColumnWidth,
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

  static buildSectionData(sections) {
    const sectionMap = {};

    React.Children.forEach(sections, (section) => {
      const sectionData = {};

      sectionData.id = section.props.id;
      sectionData.onClick = section.props.onClick;
      sectionData.isCollapsible = section.props.isCollapsible;
      sectionData.isCollapsed = section.props.isCollapsed;
      sectionData.text = section.props.text;

      sectionData.rows = {};
      sectionData.rowOrdering = [];
      React.Children.forEach(section.props.children, (row) => {
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

        sectionData.rows[rowData.id] = rowData;
        sectionData.rowOrdering.push(rowData.id);
      });

      sectionMap[sectionData.id] = sectionData;
    });

    return sectionMap;
  }

  constructor(props) {
    super(props);

    this.handleResize = this.handleResize.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.updateColumnWidths = this.updateColumnWidths.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);

    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderResizeHandle = this.renderResizeHandle.bind(this);
    this.renderFixedHeaderRow = this.renderFixedHeaderRow.bind(this);
    this.renderOverflowHeaderRow = this.renderOverflowHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderFixedContent = this.renderFixedContent.bind(this);

    this.state = Object.assign({}, DataGrid.generateWidthState(props), {
      selectionMap: DataGrid.buildSelectionMap(props.selectedCells),
      sections: DataGrid.buildSectionData(props.children),
      sectionOrdering: React.Children.map(props.children, child => (child.props.id)),
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

    /**
     * We need to keep track of the user's usage of SHIFT to properly handle tabbing paths.
     */
    document.addEventListener('keyup', this.handleKeyUp);
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
      newState.sections = DataGrid.buildSectionData(nextProps.children);
      newState.sectionOrdering = React.Children.map(nextProps.children, child => (child.props.id));
    }

    if (Object.keys(newState).length) {
      this.setState(newState);
    }
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

  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.SHIFT) {
      this.shiftIsPressed = true;
      return;
    }

    const mergedColumns = [].concat(this.props.pinnedColumns).concat(this.props.overflowColumns).map(column => column.id);

    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
      const activeElement = document.activeElement;

      if (!activeElement) {
        return;
      }

      if (activeElement.matches('[data-cell]')) {
        const columnId = activeElement.getAttribute('data-column-id');
        const rowId = activeElement.getAttribute('data-row-id');
        const sectionId = activeElement.getAttribute('data-section-id');

        const currentColumnIndex = mergedColumns.indexOf(columnId);

        const sectionData = this.state.sections[sectionId];
        const currentRowIndex = sectionData.rowOrdering.indexOf(rowId);

        if (currentColumnIndex === 0 && this.shiftIsPressed) {
          if (currentRowIndex !== 0) {
            const newRowId = this.shiftIsPressed ? sectionData.rowOrdering[currentRowIndex - 1] : sectionData.rowOrdering[currentRowIndex + 1];

            const newFocusElement = document.querySelector(`[data-section-id=${sectionId}][data-row-id=${newRowId}][data-column-id=${mergedColumns[mergedColumns.length - 1]}]`);
            newFocusElement.focus();

            event.preventDefault();
          } else {
            const newFocusElement = document.querySelector(`[data-section][data-section-id=${sectionId}]`);
            newFocusElement.focus();

            event.preventDefault();
          }
        } else if (currentColumnIndex === mergedColumns.length - 1 && !this.shiftIsPressed) {
          if (currentRowIndex !== sectionData.rowOrdering.length - 1) {
            const newRowId = this.shiftIsPressed ? sectionData.rowOrdering[currentRowIndex - 1] : sectionData.rowOrdering[currentRowIndex + 1];

            const newFocusElement = document.querySelector(`[data-section-id=${sectionId}][data-row-id=${newRowId}][data-column-id=${mergedColumns[0]}]`);
            newFocusElement.focus();

            event.preventDefault();
          } else {
            const currentSectionIndex = this.state.sectionOrdering.indexOf(sectionId);
            const nextSectionIndex = currentSectionIndex + 1;

            if (currentSectionIndex < this.state.sectionOrdering.length - 1) {
              const newSectionData = this.state.sections[this.state.sectionOrdering[nextSectionIndex]];

              const sectionHeader = document.querySelector(`.${cx('section-header-container')}[data-section][data-section-id=${newSectionData.id}]`);

              if (sectionHeader) {
                sectionHeader.focus();

                event.preventDefault();
              }
            }
          }
        } else {
          const newFocusElement = document.querySelector(`[data-section-id=${sectionId}][data-row-id=${rowId}][data-column-id=${this.shiftIsPressed ? mergedColumns[currentColumnIndex - 1] : mergedColumns[currentColumnIndex + 1]}]`);
          newFocusElement.focus();

          event.preventDefault();
        }
      } else if (activeElement.matches('[data-section]')) {
        const sectionId = activeElement.getAttribute('data-section-id');

        if (this.shiftIsPressed) {
          const currentSectionIndex = this.state.sectionOrdering.indexOf(sectionId);

          if (currentSectionIndex !== 0 && currentSectionIndex !== this.state.sectionOrdering.length - 1) {
            const sectionData = this.state.sections[this.state.sectionOrdering[currentSectionIndex - 1]];
            const newRowId = sectionData.rowOrdering[sectionData.rowOrdering.length - 1];
            const newColumnId = mergedColumns[mergedColumns.length - 1];

            const newFocusElement = document.querySelector(`[data-section-id=${sectionData.id}][data-row-id=${newRowId}][data-column-id=${newColumnId}]`);

            if (newFocusElement) {
              newFocusElement.focus();

              event.preventDefault();
            }
          }
        } else {
          const newActiveSectionData = this.state.sections[sectionId];

          const newRowId = newActiveSectionData.rowOrdering[0];
          const newColumnId = mergedColumns[0];
          const newActiveElement = document.querySelector(`[data-section-id=${newActiveSectionData.id}][data-row-id=${newRowId}][data-column-id=${newColumnId}]`);

          if (newActiveElement) {
            newActiveElement.focus();

            event.preventDefault();
          }
        }
      }

      return;
    }

    if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
      const activeElement = document.activeElement;

      if (activeElement.matches('[data-cell]')) {
        this.props.onCellClick(activeElement.getAttribute('data-row-id'), activeElement.getAttribute('data-column-id'));
      } else if (activeElement.matches('[data-header-cell]')) {
        this.props.onHeaderClick(activeElement.getAttribute('data-column-id'));
      } else if (activeElement.matches('[data-section]')) {
        this.props.onSectionClick(undefined, activeElement.getAttribute('data-section-id'));
      }

      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KEYCODES.SHIFT) {
      this.shiftIsPressed = false;
    }
  }

  updateColumnWidths(columnKey, widthDelta, minWidth) {
    const columnWidths = Object.assign({}, this.state.columnWidths);
    const minimumColumnWidth = minWidth || 50;

    if (columnWidths[columnKey] + widthDelta < minimumColumnWidth) {
      columnWidths[columnKey] = minimumColumnWidth;
    } else {
      columnWidths[columnKey] += widthDelta;
    }

    const pinnedColumnWidth = this.props.pinnedColumns.length ?
      this.props.pinnedColumns.map(column => columnWidths[column.id]).reduce((totalWidth, width) => totalWidth + width) : 0;

    const overflowColumnWidth = this.props.overflowColumns.length ?
      this.props.overflowColumns.map(column => columnWidths[column.id]).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    this.setState({
      pinnedColumnWidth,
      overflowColumnWidth,
      columnWidths,
    });
  }

  renderResizeHandle(columnData) {
    return (
      <DraggableCore
        onStart={(event, data) => {
          const node = data.node;

          node.classList.add(cx('dragging'));
          node.style.height = `${this.containerRef.clientHeight}px`;

          this.scrollPosition = 0;
        }}
        onStop={(event, data) => {
          const node = data.node;

          node.classList.remove(cx('dragging'));
          node.style.transform = '';
          node.style.height = '';

          this.updateColumnWidths(columnData.id, this.scrollPosition, columnData.minWidth);
        }}
        onDrag={(event, data) => {
          const node = data.node;

          this.scrollPosition += data.deltaX;
          node.style.transform = `translate3d(${this.scrollPosition}px, 0, 0)`;
        }}
      >
        <div className={cx('resize-handle')} />
      </DraggableCore>
    );
  }

  renderHeaderCell(columnData) {
    const columnId = columnData.id;

    return (
      <div
        key={columnId}
        data-column-id={columnId}
        className={cx(['cell-container', 'header-cell-container', { selectable: columnData.selectable }])}
        style={{ width: `${this.state.columnWidths[columnId]}px` }}
        tabIndex={columnData.selectable ? '0' : null}
        onClick={this.handleHeaderClick}
        data-header-cell
        data-column-id={columnId}
      >
        <div style={{ height: '100%', width: '100%', overflow: 'hidden' }} >
          {columnData.component}
        </div>
        {columnData.resizable ? this.renderResizeHandle(columnData) : null }
      </div>
    );
  }

  renderFixedHeaderRow() {
    const { columns, pinnedColumns } = this.props;
    const { pinnedColumnWidth } = this.state;

    return (
      <div
        className={cx('fixed-column-header-container')}
        style={{ width: `${pinnedColumnWidth}px` }}
      >
        <div className={cx(['row', 'header-row'])} style={{ width: `${pinnedColumnWidth}px` }}>
          {pinnedColumns.map(column => this.renderHeaderCell(column))}
        </div>
      </div>
    );
  }

  renderOverflowHeaderRow() {
    const { columns, overflowColumns } = this.props;
    const { overflowColumnWidth } = this.state;

    return (
      <div className={cx(['row', 'header-row'])} style={{ width: `${overflowColumnWidth}px` }}>
        {overflowColumns.map(column => this.renderHeaderCell(column))}
      </div>
    );
  }

  renderSection(section, columns, width, withHeader) {
    const { rowHeight } = this.props;
    const { columnWidths } = this.state;

    return (
      <React.Fragment key={section.id}>
        {section.text ? (
          <div
            key={section.id}
            className={cx('section-header-container')}
            tabIndex={withHeader ? '0' : undefined}
            data-section-id={withHeader ? section.id : undefined}
            data-section={withHeader}
            onClick={withHeader ? (event) => { this.props.onSectionClick(event, section.id); } : undefined}
          >

            { withHeader ? (
              <SectionHeader
                text={section.text}
                isCollapsible={section.isCollapsible}
                isCollapsed={section.isCollapsed}
              />
            ) : null}
          </div>
        ) : null}
        {(!section.isCollapsible || !section.isCollapsed) && section.rows && section.rowOrdering.map((rowId, index) => (
          <div
            key={`${section.id}-${section.rows[rowId].id}`}
            className={cx(['row', { striped: index % 2 > 0 }])}
            style={{ width, height: rowHeight }}
            data-row
            data-row-id={section.rows[rowId].id}
            data-section-id={section.id}
          >
            {columns.map((column) => {
              const cell = section.rows[rowId].cells[column.id];

              return (
                <div
                  onClick={this.handleContentClick}
                  key={`${section.id}-${section.rows[rowId].id}-${column.id}`}
                  className={cx(['cell-container', { selectable: cell.isSelectable, selected: cell.isSelected }])}
                  style={{ width: `${columnWidths[column.id]}px` }}
                  tabIndex={cell.isSelectable ? '0' : undefined}
                  data-cell
                  data-column-id={column.id}
                  data-row-id={section.rows[rowId].id}
                  data-section-id={section.id}
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
    const { pinnedColumns } = this.props;
    const { sections, sectionOrdering, pinnedColumnWidth } = this.state;

    return sectionOrdering.map(sectionId => this.renderSection(sections[sectionId], pinnedColumns, `${pinnedColumnWidth}px`, true));
  }

  renderOverflowContent() {
    const { overflowColumns } = this.props;
    const { sections, sectionOrdering, overflowColumnWidth } = this.state;

    return sectionOrdering.map(sectionId => this.renderSection(sections[sectionId], overflowColumns, `${overflowColumnWidth}px`));
  }

  handleHeaderClick(event) {
    const { onHeaderClick } = this.props;

    /**
     * If the click event target is the resize handle, we do not want to
     * recognize the click.
     */
    if (event.target.classList.contains(cx('resize-handle'))) {
      return;
    }

    const headerCellNode = event.currentTarget;

    if (!headerCellNode.classList.contains(cx('header-cell-container'))) {
      return;
    }

    if (headerCellNode.classList.contains(cx('selectable')) && onHeaderClick) {
      onHeaderClick(headerCellNode.getAttribute('data-column-id'));
    }
  }

  handleContentClick(event) {
    const { onCellClick } = this.props;

    const cellNode = event.currentTarget;

    if (!cellNode.classList.contains(cx('cell-container'))) {
      return;
    }

    if (cellNode.classList.contains(cx('selectable')) && onCellClick) {
      onCellClick(cellNode.getAttribute('data-row-id'), cellNode.getAttribute('data-column-id'));
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
        onKeyDown={this.handleKeyDown}
      >
        {this.renderFixedHeaderRow()}
        <div className={cx(['overflow-container', { 'legacy-sticky': !stickyIsSupported }])}>
          <div
            className={cx('scroll-header')}
            style={{
              width: `${this.state.overflowColumnWidth}px`,
              minWidth: `calc(100% - ${this.state.pinnedColumnWidth}px`,
              paddingLeft: `${this.state.pinnedColumnWidth}px`,
            }}
          >
            {this.renderOverflowHeaderRow()}
          </div>
          <div
            className={cx(['fixed-content', { 'legacy-sticky': !stickyIsSupported }])}
            style={{ width: `${this.state.pinnedColumnWidth}px` }}
          >
            {this.renderFixedContent()}
          </div>
          <div
            className={cx('scroll-content')}
            style={{
              width: `${this.state.overflowColumnWidth}px`,
              minWidth: `calc(100% - ${this.state.pinnedColumnWidth}px`,
              paddingLeft: `${this.state.pinnedColumnWidth}px`,
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
export { Section, Row, Cell, ContentCell, HeaderCell };
