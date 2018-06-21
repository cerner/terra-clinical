import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ContentContainer from 'terra-content-container';

import Cell from './Cell';
import HeaderCell from './HeaderCell';
import Row from './Row';
import Scrollbar from './Scrollbar';

import ContentCellLayout from './default-components/ContentCellLayout';
import HeaderCellLayout from './default-components/HeaderCellLayout';
import SectionHeader from './default-components/SectionHeader';

import { calculateScrollbarPosition } from './scrollbarUtils';
import { KEYCODES, matches } from './utils';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const Section = () => null;

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
  columnWidths: PropTypes.objectOf(PropTypes.number),
  onRequestColumnResize: PropTypes.func,
  collapsedSections: PropTypes.object,
  onRequestSectionCollapse: PropTypes.func,
  rowHeight: PropTypes.string,
  headerHeight: PropTypes.string,
  onCellClick: PropTypes.func,
  onHeaderClick: PropTypes.func,
  children: PropTypes.node,
};

const defaultProps = {
  pinnedColumns: [],
  overflowColumns: [],
  rowHeight: '2rem',
  headerHeight: '2rem',
};

class DataGrid extends React.Component {
  static generateWidthState(props, resetWidths) {
    const { columnWidths } = props;
    const { internalColumnWidths } = props;

    let widthExtractor;
    if (columnWidths) {
      widthExtractor = column => columnWidths[column.id];
    } else {
      widthExtractor = column => (resetWidths ? column.startWidth : internalColumnWidths[column.id]);
    }

    const pinnedColumnWidth = props.pinnedColumns.length ?
      props.pinnedColumns.map(widthExtractor).reduce((totalWidth, width) => totalWidth + width) : 0;

    const overflowColumnWidth = props.overflowColumns.length ?
      props.overflowColumns.map(widthExtractor).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

    let newColumnWidths;
    if (columnWidths) {
      newColumnWidths = Object.assign({}, columnWidths);
    } else if (resetWidths) {
      newColumnWidths = {};

      props.pinnedColumns.forEach((column) => {
        newColumnWidths[column.id] = column.startWidth;
      });

      props.overflowColumns.forEach((column) => {
        newColumnWidths[column.id] = column.startWidth;
      });
    } else {
      newColumnWidths = Object.assign({}, internalColumnWidths);
    }

    return {
      pinnedColumnWidth,
      overflowColumnWidth,
      internalColumnWidths: newColumnWidths,
    };
  }

  static buildSectionData(sections) {
    const sectionMap = {};

    React.Children.forEach(sections, (section) => {
      const sectionData = {};

      sectionData.id = section.props.id;
      sectionData.isCollapsible = section.props.isCollapsible;
      sectionData.isInitiallyCollapsed = section.props.isInitiallyCollapsed;
      sectionData.headerText = section.props.headerText;

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

    this.handleDataGridResize = this.handleDataGridResize.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.updateColumnWidths = this.updateColumnWidths.bind(this);

    /**
     * Refs
     */
    this.setHeaderOverflowContainerRef = this.setHeaderOverflowContainerRef.bind(this);
    this.setHorizontalOverflowContainerRef = this.setHorizontalOverflowContainerRef.bind(this);
    this.setOverflowedContentContainerRef = this.setOverflowedContentContainerRef.bind(this);
    this.setPinnedContentContainerRef = this.setPinnedContentContainerRef.bind(this);
    this.setVerticalOverflowContainerRef = this.setVerticalOverflowContainerRef.bind(this);
    this.setScrollbarRef = this.setScrollbarRef.bind(this);

    /**
     * Scroll synchronization
     */
    this.synchronizeHeaderScroll = this.synchronizeHeaderScroll.bind(this);
    this.synchronizeContentScroll = this.synchronizeContentScroll.bind(this);
    this.synchronizeScrollbar = this.synchronizeScrollbar.bind(this);
    this.resetHeaderScrollEventMarkers = this.resetHeaderScrollEventMarkers.bind(this);
    this.resetContentScrollEventMarkers = this.resetContentScrollEventMarkers.bind(this);
    this.resetScrollbarEventMarkers = this.resetScrollbarEventMarkers.bind(this);
    this.updateScrollbarPosition = this.updateScrollbarPosition.bind(this);

    /**
     * Rendering
     */
    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderHeaderRow = this.renderHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderPinnedContent = this.renderPinnedContent.bind(this);
    this.renderScrollbar = this.renderScrollbar.bind(this);

    this.scrollbarPosition = 0;

    this.state = Object.assign(
      {},
      DataGrid.generateWidthState(props, true),
      {
        sections: DataGrid.buildSectionData(props.children),
        sectionOrdering: React.Children.map(props.children, child => (child.props.id)),
      },
    );
  }

  componentDidMount() {
    /**
     * A ResizeObserver is used to manage changes to the DataGrid's overall size. The handler will execute once upon the start of
     * observation and on every subsequent resize.
     */
    this.resizeObserver = new ResizeObserver((entries) => { this.handleDataGridResize(entries[0].contentRect.width, entries[0].contentRect.height); });
    this.resizeObserver.observe(this.verticalOverflowContainerRef);

    /**
     * We need to keep track of the user's usage of SHIFT to properly handle tabbing paths.
     */
    document.addEventListener('keyup', this.handleKeyUp);

    /**
     * The elements that are sized relative to the DataGrid's overall width must updated after the initial mount.
     */
    this.handleDataGridResize(this.verticalOverflowContainerRef.clientWidth, this.verticalOverflowContainerRef.clientHeight);

    this.overflowedContentContainerRef.style.height = `${this.pinnedContentContainerRef.clientHeight}px`;
  }

  componentWillReceiveProps(nextProps) {
    let newState = {};

    if (this.props.columnWidths !== nextProps.columnWidths) {
      /**
       * If the column widths are controlled by the consuming component, the internal width calculations need to be regenerated upon changes
       * to the columnWidths component.
       */
      newState = Object.assign({}, DataGrid.generateWidthState(nextProps, false));
    }

    if (this.props.children !== nextProps.children) {
      /**
       * If the provided children differ from the previous render, they need to be reprocessed into a more convenient structure.
       */
      newState.sections = DataGrid.buildSectionData(nextProps.children);
      newState.sectionOrdering = React.Children.map(nextProps.children, child => (child.props.id));
    }

    if (Object.keys(newState).length) {
      this.setState(newState);
    }
  }

  componentDidUpdate() {
    /**
     * The scrollbar position needs to be updated on component update to account for a potential difference in the overflow size.
     */
    this.updateScrollbarPosition();

    this.overflowedContentContainerRef.style.height = `${this.pinnedContentContainerRef.clientHeight}px`;
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.verticalOverflowContainerRef);
  }

  handleDataGridResize(newWidth, newHeight) {
    /**
     * We need to update the inline widths of each section header in response to changes to the overall DataGrid width.
     * The widths are applied directly the nodes (outside of the React rendering lifecycle) to improve performance and limit
     * unnecessary rendering of other components.
     */
    const sectionHeaderContainers = document.querySelectorAll(`.${cx('pinned-content-container')} .${cx('section-header-container')}`);

    /**
     * querySelectorAll returns a NodeList, which does not support standard iteration functions like forEach in legacy browsers.
     * However, We can utilize the Array's forEach implementation to iterate through the list.
     */
    Array.prototype.forEach.call(sectionHeaderContainers, (container) => {
      container.style.width = `${newWidth}px`; // eslint-disable-line no-param-reassign
    });


    /**
     * The scrollbar position needs to be updated upon resize to accurately reflect the new horizontal spacing.
     */
    this.updateScrollbarPosition();
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

      if (matches(activeElement, '[data-cell]')) {
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
      } else if (matches(activeElement, '[data-section]')) {
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

      if (matches(activeElement, '[data-cell]')) {
        this.props.onCellClick(activeElement.getAttribute('data-row-id'), activeElement.getAttribute('data-column-id'));
      } else if (matches(activeElement, '[data-header-cell]')) {
        this.props.onHeaderClick(activeElement.getAttribute('data-column-id'));
      } else if (matches(activeElement, '[data-section]')) {
        const sectionId = activeElement.getAttribute('data-section-id');

        if (this.props.collapsedSections) {
          if (this.props.onRequestSectionCollapse) {
            this.props.onRequestSectionCollapse(sectionId);
          }
        } else {
          const currentlyCollapsedSections = Object.assign({}, this.state.collapsedSections);
          currentlyCollapsedSections[sectionId] = !currentlyCollapsedSections[sectionId];
          this.setState({ collapsedSections: currentlyCollapsedSections });
        }
      }

      event.preventDefault();
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KEYCODES.SHIFT) {
      this.shiftIsPressed = false;
    }
  }

  updateColumnWidths(columnId, widthDelta, minWidth) {
    const { columnWidths, onRequestColumnResize } = this.props;
    const { internalColumnWidths } = this.state;

    let columnWidth = columnWidths ? columnWidths[columnId] : internalColumnWidths[columnId];
    const minimumColumnWidth = minWidth || 50;

    if (columnWidth + widthDelta < minimumColumnWidth) {
      columnWidth = minimumColumnWidth;
    } else {
      columnWidth += widthDelta;
    }

    if (columnWidths) {
      if (onRequestColumnResize) {
        onRequestColumnResize(columnId, columnWidth);
      }
    } else {
      internalColumnWidths[columnId] = columnWidth;

      const pinnedColumnWidth = this.props.pinnedColumns.length ?
      this.props.pinnedColumns.map(column => internalColumnWidths[column.id]).reduce((totalWidth, width) => totalWidth + width) : 0;

      const overflowColumnWidth = this.props.overflowColumns.length ?
      this.props.overflowColumns.map(column => internalColumnWidths[column.id]).reduce((totalWidth, width) => totalWidth + width) + 150 : 150;

      this.setState({
        pinnedColumnWidth,
        overflowColumnWidth,
        internalColumnWidths,
      });
    }
  }

  /**
   * Refs
   */

  setPinnedContentContainerRef(ref) {
    this.pinnedContentContainerRef = ref;
  }

  setHeaderOverflowContainerRef(ref) {
    this.headerOverflowContainerRef = ref;
  }

  setHorizontalOverflowContainerRef(ref) {
    this.horizontalOverflowContainerRef = ref;
  }

  setOverflowedContentContainerRef(ref) {
    this.overflowedContentContainerRef = ref;
  }

  setScrollbarRef(ref) {
    this.scrollbarRef = ref;
  }

  setVerticalOverflowContainerRef(ref) {
    this.verticalOverflowContainerRef = ref;
  }

  /**
   * Scroll synchronization
   */

  synchronizeHeaderScroll() {
    if (this.scrollbarIsScrolling || this.contentIsScrolling) {
      return;
    }

    this.headerIsScrolling = true;

    if (this.synchronizeScrollTimeout) {
      clearTimeout(this.synchronizeScrollTimeout);
    }

    this.synchronizeScrollTimeout = setTimeout(this.resetHeaderScrollEventMarkers, 100);

    requestAnimationFrame(() => {
      this.horizontalOverflowContainerRef.scrollLeft = this.headerOverflowContainerRef.scrollLeft;

      this.updateScrollbarPosition();
    });
  }

  synchronizeContentScroll() {
    if (this.scrollbarIsScrolling || this.headerIsScrolling) {
      return;
    }

    this.contentIsScrolling = true;

    if (this.synchronizeScrollTimeout) {
      clearTimeout(this.synchronizeScrollTimeout);
    }

    this.synchronizeScrollTimeout = setTimeout(this.resetContentScrollEventMarkers, 100);

    requestAnimationFrame(() => {
      this.headerOverflowContainerRef.scrollLeft = this.horizontalOverflowContainerRef.scrollLeft;

      this.updateScrollbarPosition();
    });
  }

  synchronizeScrollbar(event, data) {
    const { pinnedColumnWidth, overflowColumnWidth } = this.state;

    if (this.headerIsScrolling || this.contentIsScrolling) {
      return;
    }

    this.scrollbarIsScrolling = true;

    const { position, ratio } = calculateScrollbarPosition(this.scrollbarRef, this.verticalOverflowContainerRef, this.scrollbarPosition, data.deltaX);

    this.scrollbarPosition = position;

    const maxScrollLeft = (pinnedColumnWidth + overflowColumnWidth) - this.verticalOverflowContainerRef.clientWidth;

    requestAnimationFrame(() => {
      this.scrollbarRef.style.left = `${this.scrollbarPosition}px`;
      this.headerOverflowContainerRef.scrollLeft = maxScrollLeft * ratio;
      this.horizontalOverflowContainerRef.scrollLeft = maxScrollLeft * ratio;
    });
  }

  resetHeaderScrollEventMarkers() {
    this.headerIsScrolling = false;
  }

  resetContentScrollEventMarkers() {
    this.contentIsScrolling = false;
  }

  resetScrollbarEventMarkers() {
    this.scrollbarIsScrolling = false;
  }

  updateScrollbarPosition() {
    /**
     * The scrollbar width is determined by squaring the container width and dividing by the overflow value. The scrollbar cannot be larger than the container.
     */
    const scrollbarWidth = Math.min(this.verticalOverflowContainerRef.clientWidth, (this.verticalOverflowContainerRef.clientWidth * this.verticalOverflowContainerRef.clientWidth) / (this.state.pinnedColumnWidth + this.state.overflowColumnWidth));

    /**
     * The scrollbar position is determined by calculating its position within the horizontalOverflowContainerRef and applying its relative position
     * to the overall container width.
     */
    const positionRatio = this.horizontalOverflowContainerRef.scrollLeft / (this.horizontalOverflowContainerRef.scrollWidth - this.horizontalOverflowContainerRef.clientWidth);
    const position = (this.verticalOverflowContainerRef.clientWidth - scrollbarWidth) * positionRatio;

    this.scrollbarRef.style.width = `${scrollbarWidth}px`;
    this.scrollbarRef.style.transform = `translateX(${position}px)`;
    this.scrollbarPosition = position;
  }

  /**
   * Rendering
   */

  renderHeaderCell(columnData) {
    const columnId = columnData.id;
    const { onHeaderClick } = this.props;
    const { internalColumnWidths } = this.state;

    return (
      <HeaderCell
        key={columnId}
        columnId={columnId}
        width={`${internalColumnWidths[columnId]}px`}
        isSelectable={columnData.selectable}
        isResizeable={columnData.resizable}
        onResizeEnd={this.updateColumnWidths}
        onCellClick={onHeaderClick}
      >
        {columnData.component}
      </HeaderCell>
    );
  }

  renderHeaderRow() {
    const { pinnedColumns, overflowColumns, headerHeight } = this.props;
    const { pinnedColumnWidth, overflowColumnWidth } = this.state;

    return (
      <div
        className={cx('header-container')}
        style={{
          height: headerHeight,
        }}
      >
        <div
          className={cx('header-overflow-container')}
          style={{
            paddingLeft: `${pinnedColumnWidth}px`,
          }}
          ref={this.setHeaderOverflowContainerRef}
          onScroll={this.synchronizeHeaderScroll}
        >
          <div
            className={cx('overflow-header')}
            style={{
              width: `${overflowColumnWidth}px`,
            }}
          >
            {overflowColumns.map(column => this.renderHeaderCell(column))}
          </div>
        </div>
        <div
          className={cx('pinned-header')}
          style={{
            width: `${pinnedColumnWidth}px`,
          }}
        >
          {pinnedColumns.map(column => this.renderHeaderCell(column))}
        </div>
      </div>
    );
  }

  renderSection(section, columns, width, withHeader) {
    const { rowHeight, onCellClick } = this.props;
    const { internalColumnWidths } = this.state;

    return (
      <div key={section.id}>
        {section.headerText ? (
          <div
            key={section.id}
            className={cx('section-header-container')}
            tabIndex={withHeader ? '0' : undefined}
            data-section-id={withHeader ? section.id : undefined}
            data-section={withHeader}
            onClick={withHeader ? (event) => {
              if (this.props.collapsedSections) {
                if (this.props.onRequestSectionCollapse) {
                  this.props.onRequestSectionCollapse(section.id);
                }
              } else {
                const currentlyCollapsedSections = Object.assign({}, this.state.collapsedSections);
                currentlyCollapsedSections[section.id] = !currentlyCollapsedSections[section.id];
                this.setState({ collapsedSections: currentlyCollapsedSections });
              }
            } : undefined}
          >

            { withHeader ? (
              <SectionHeader
                text={section.headerText}
                isCollapsible={section.isCollapsible}
                isCollapsed={section.isInitiallyCollapsed}
              />
            ) : null}
          </div>
        ) : null}
        {(!section.isCollapsible || !section.isInitiallyCollapsed) && section.rows && section.rowOrdering.map((rowId, index) => (
          <Row
            key={`${section.id}-${section.rows[rowId].id}`}
            sectionId={section.id}
            rowId={section.rows[rowId].id}
            width={width}
            height={rowHeight}
          >
            {columns.map((column) => {
              const cell = section.rows[rowId].cells[column.id];

              return (
                <Cell
                  key={`${section.id}-${section.rows[rowId].id}-${column.id}`}
                  sectionId={section.id}
                  rowId={section.rows[rowId].id}
                  columnId={column.id}
                  width={`${internalColumnWidths[column.id]}px`}
                  onCellClick={onCellClick || undefined}
                  isSelectable={cell.isSelectable}
                  isSelected={cell.isSelected}
                >
                  {cell.content}
                </Cell>
              );
            })}
          </Row>
        ))}
      </div>
    );
  }

  renderPinnedContent() {
    const { pinnedColumns } = this.props;
    const { sections, sectionOrdering, pinnedColumnWidth } = this.state;

    return sectionOrdering.map(sectionId => this.renderSection(sections[sectionId], pinnedColumns, `${pinnedColumnWidth}px`, true));
  }

  renderOverflowContent() {
    const { overflowColumns } = this.props;
    const { sections, sectionOrdering, overflowColumnWidth } = this.state;

    return sectionOrdering.map(sectionId => this.renderSection(sections[sectionId], overflowColumns, `${overflowColumnWidth}px`));
  }

  renderScrollbar() {
    return (
      <Scrollbar
        scrollbarRefCallback={this.setScrollbarRef}
        onMove={this.synchronizeScrollbar}
        onMoveEnd={this.resetScrollbarEventMarkers}
      />
    );
  }

  render() {
    console.log('rendering data grid');

    return (
      <ContentContainer
        header={this.renderHeaderRow()}
        footer={this.renderScrollbar()}
        fill
        onKeyDown={this.handleKeyDown}
      >
        <div
          className={cx('vertical-overflow-container')}
          ref={this.setVerticalOverflowContainerRef}
        >
          <div
            className={cx('overflowed-content-container')}
            ref={this.setOverflowedContentContainerRef}
            style={{
              paddingLeft: `${this.state.pinnedColumnWidth}px`,
            }}
          >
            <div
              className={cx('horizontal-overflow-container')}
              ref={this.setHorizontalOverflowContainerRef}
              onScroll={this.synchronizeContentScroll}
            >
              {this.renderOverflowContent()}
            </div>
          </div>
          <div
            className={cx('pinned-content-container')}
            ref={this.setPinnedContentContainerRef}
            style={{
              width: `${this.state.pinnedColumnWidth}px`,
            }}
          >
            {this.renderPinnedContent()}
          </div>
        </div>
      </ContentContainer>
    );
  }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
export { Section, Row, Cell, HeaderCell, ContentCellLayout, HeaderCellLayout };
