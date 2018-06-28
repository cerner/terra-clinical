import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ContentContainer from 'terra-content-container';

import Cell from './Cell';
import HeaderCell from './HeaderCell';
import Row from './Row';
import Scrollbar from './Scrollbar';
import SectionHeader from './SectionHeader';

import ContentCellLayout from './default-components/ContentCellLayout';
import HeaderCellLayout from './default-components/HeaderCellLayout';

import { calculateScrollbarPosition } from './scrollbarUtils';
import { KEYCODES, matches } from './utils';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const Section = () => null;

const propTypes = {
  pinnedColumns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    initialWidth: PropTypes.number,
    selectable: PropTypes.bool,
    resizable: PropTypes.bool,
    component: PropTypes.node,
  })),
  overflowColumns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    initialWidth: PropTypes.number,
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
  fill: PropTypes.bool,
};

const defaultProps = {
  pinnedColumns: [],
  overflowColumns: [],
  rowHeight: '2rem',
  headerHeight: '2rem',
};

class DataGrid extends React.Component {
  static buildSectionData(sections) {
    const sectionMap = {};

    React.Children.forEach(sections, (section) => {
      const sectionData = {};

      sectionData.id = section.props.id;
      sectionData.isCollapsible = section.props.isCollapsible;
      sectionData.isInitiallyCollapsed = section.props.isInitiallyCollapsed;
      sectionData.headerText = section.props.headerText;
      sectionData.headerStartAccessory = section.props.headerStartAccessory;
      sectionData.headerEndAccessory = section.props.headerEndAccessory;

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

    /**
     * Keyboard Interactions
     */

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.shiftIsPressed = false;

    /**
     * Accessibility
     */
    this.setElementFocus = this.setElementFocus.bind(this);
    this.generateAccessibleContentIndex = this.generateAccessibleContentIndex.bind(this);
    this.activeAccessibilityId = -1;

    /**
     * Column Sizing
     */
    this.getColumn = this.getColumn.bind(this);
    this.getWidthForColumn = this.getWidthForColumn.bind(this);
    this.getMinimumWidthForColumn = this.getMinimumWidthForColumn.bind(this);
    this.getTotalOverflowColumnWidth = this.getTotalOverflowColumnWidth.bind(this);
    this.getTotalPinnedColumnWidth = this.getTotalPinnedColumnWidth.bind(this);
    this.updateColumnWidth = this.updateColumnWidth.bind(this);

    /**
     * Refs
     */
    this.setDataGridContainerRef = this.setDataGridContainerRef.bind(this);
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

    this.headerCellRefs = {};
    this.cellRefs = {};
    this.sectionRefs = {};

    this.scrollbarPosition = 0;

    this.state = {
      pinnedColumnWidth: this.getTotalPinnedColumnWidth(),
      overflowColumnWidth: this.getTotalOverflowColumnWidth(),
      sections: DataGrid.buildSectionData(props.children),
      sectionOrdering: React.Children.map(props.children, child => (child.props.id)),
    };
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

    /**
     * The height of the overflow content region must be set to hide the horizontal scrollbar for that element. It is hidden because we
     * want defer to the custom scrollbar that rendered by the DataGrid.
     */
    this.overflowedContentContainerRef.style.height = `${this.pinnedContentContainerRef.clientHeight}px`;

    this.generateAccessibleContentIndex();
  }

  componentWillReceiveProps(nextProps) {
    const newState = {
      pinnedColumnWidth: this.getTotalPinnedColumnWidth(nextProps),
      overflowColumnWidth: this.getTotalOverflowColumnWidth(nextProps),
    };

    if (this.props.children !== nextProps.children) {
      /**
       * If the provided children differ from the previous render, they need to be reprocessed into a more convenient structure.
       */
      newState.sections = DataGrid.buildSectionData(nextProps.children);
      newState.sectionOrdering = React.Children.map(nextProps.children, child => (child.props.id));
    }

    this.setState(newState);
  }

  componentDidUpdate() {
    /**
     * The scrollbar position needs to be updated on component update to account for a potential difference in the overflow size.
     */
    requestAnimationFrame(() => {
      this.updateScrollbarPosition();
    });

    /**
     * The height of the overflow content region must be set to hide the horizontal scrollbar for that element. It is hidden because we
     * want defer to the custom scrollbar that rendered by the DataGrid.
     */
    this.overflowedContentContainerRef.style.height = `${this.pinnedContentContainerRef.clientHeight}px`;

    this.generateAccessibleContentIndex();
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.verticalOverflowContainerRef);
    document.removeEventListener('keyup', this.handleKeyUp);
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
    }

    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
      const activeElement = document.activeElement;

      if (!activeElement) {
        return;
      }

      if (matches(activeElement, '[data-accessibility-id]')) {
        const currentAccessibilityId = activeElement.getAttribute('data-accessibility-id');
        const nextAccessibilityId = this.shiftIsPressed ? parseInt(currentAccessibilityId, 10) - 1 : parseInt(currentAccessibilityId, 10) + 1;

        if (nextAccessibilityId >= 0 && nextAccessibilityId < this.totalAccessibleElements) {
          const nextFocusElement = document.querySelector(`[data-accessibility-id="${nextAccessibilityId}"]`);
          if (nextFocusElement) {
            event.preventDefault();
            this.setElementFocus(nextFocusElement);
          }
        } else if (nextAccessibilityId === -1) {
          this.leadingFocusAnchorRef.focus();
        } else {
          this.terminalFocusAnchorRef.focus();
        }
      }
    }
  }

  handleKeyUp(event) {
    if (event.keyCode === KEYCODES.SHIFT) {
      this.shiftIsPressed = false;
    }
  }

  /**
   * Accessiblity
   */

  setElementFocus(element) {
    element.focus();

    if (matches(element, `.${cx('vertical-overflow-container')} [data-cell]`) ||
        matches(element, `.${cx('vertical-overflow-container')} [data-section-header]`)) {
      const elementOffsetTop = element.offsetTop;
      const elementHeight = element.getBoundingClientRect().height;
      const verticalScrollOffset = this.verticalOverflowContainerRef.scrollTop;
      const verticalScrollHeight = this.verticalOverflowContainerRef.getBoundingClientRect().height;

      if (verticalScrollOffset > elementOffsetTop) {
        this.verticalOverflowContainerRef.scrollTop = elementOffsetTop;
      } else if ((elementOffsetTop + elementHeight) >= (verticalScrollOffset + verticalScrollHeight)) {
        this.verticalOverflowContainerRef.scrollTop = (elementOffsetTop - verticalScrollHeight) + elementHeight;
      }
    }

    if (matches(element, `.${cx('horizontal-overflow-container')} [data-cell]`)) {
      const cellOffsetLeft = element.offsetLeft;
      const cellWidth = element.getBoundingClientRect().width;
      const horizontalScrollOffset = this.horizontalOverflowContainerRef.scrollLeft;
      const horizontalScrollWidth = this.horizontalOverflowContainerRef.getBoundingClientRect().width;

      if (horizontalScrollOffset > cellOffsetLeft) {
        this.horizontalOverflowContainerRef.scrollLeft = cellOffsetLeft;
      } else if ((cellOffsetLeft + cellWidth) >= (horizontalScrollOffset + horizontalScrollWidth)) {
        this.horizontalOverflowContainerRef.scrollLeft = (cellOffsetLeft - horizontalScrollWidth) + cellWidth;
      }
    }
  }

  generateAccessibleContentIndex(source) {
    const { pinnedColumns, overflowColumns, children } = source || this.props;

    const orderedColumnIds = pinnedColumns.concat(overflowColumns).map(column => column.id);

    const accessibilityStack = [];

    pinnedColumns.forEach((column) => {
      if (column.selectable) {
        const headerRef = this.headerCellRefs[column.id];
        if (headerRef) {
          accessibilityStack.push(headerRef);

          const accessibleContent = headerRef.parentNode.querySelectorAll('[data-accessible-data-grid-content]');
          for (let i = 0, length = accessibleContent.length; i < length; i += 1) {
            accessibilityStack.push(accessibleContent[i]);
          }
        }
      }
    });

    overflowColumns.forEach((column) => {
      if (column.selectable) {
        const headerRef = this.headerCellRefs[column.id];
        if (headerRef) {
          accessibilityStack.push(headerRef);

          const accessibleContent = headerRef.parentNode.querySelectorAll('[data-accessible-data-grid-content]');
          for (let i = 0, length = accessibleContent.length; i < length; i += 1) {
            accessibilityStack.push(accessibleContent[i]);
          }
        }
      }
    });

    React.Children.forEach(children, (section) => {
      if (section.props.isCollapsible) {
        const sectionRef = this.sectionRefs[section.props.id];
        if (sectionRef) {
          accessibilityStack.push(sectionRef);

          const accessibleContent = sectionRef.parentNode.querySelectorAll('[data-accessible-data-grid-content]');
          for (let i = 0, length = accessibleContent.length; i < length; i += 1) {
            accessibilityStack.push(accessibleContent[i]);
          }
        }
      }

      if (section.props.isCollapsed) {
        /**
         * If the section is collapsed, we do not want to assign accessibility identifiers to its content.
         */
        return;
      }

      React.Children.forEach(section.props.children, (row) => {
        const cellMap = {};
        React.Children.forEach(row.props.children, (cell) => {
          cellMap[cell.props.columnId] = cell;
        });

        orderedColumnIds.forEach((columnId) => {
          if (cellMap[columnId].props.isSelectable) {
            const cellRef = this.cellRefs[`${section.props.id}-${row.props.id}-${columnId}`];
            if (cellRef) {
              accessibilityStack.push(cellRef);

              const accessibleContent = cellRef.parentNode.querySelectorAll('[data-accessible-data-grid-content]');
              for (let i = 0, length = accessibleContent.length; i < length; i += 1) {
                accessibilityStack.push(accessibleContent[i]);
              }
            }
          }
        });
      });
    });

    accessibilityStack.forEach((element, index) => {
      element.setAttribute('data-accessibility-id', index);
    });

    this.accessibilityStack = accessibilityStack;
    this.totalAccessibleElements = accessibilityStack.length;
  }

  /**
   * Column Sizing
   */

  getColumn(columnId, source) {
    const { pinnedColumns, overflowColumns } = source || this.props;

    const allColumns = (pinnedColumns || []).concat(overflowColumns);
    for (let i = 0, length = allColumns.length; i < length; i += 1) {
      if (allColumns[i].id === columnId) {
        return allColumns[i];
      }
    }

    return undefined;
  }

  getWidthForColumn(columnId, source) {
    const { columnWidths } = source || this.props;

    let width;

    if (columnWidths && columnWidths[columnId]) {
      width = columnWidths[columnId];
    } else {
      width = this.getColumn(columnId, source).initialWidth;
    }

    return width || 100;
  }

  getMinimumWidthForColumn(columnId, source) {
    return this.getColumn(columnId, source).minWidth || 50;
  }

  getTotalPinnedColumnWidth(source) {
    const { pinnedColumns } = source || this.props;

    return pinnedColumns.reduce((totalWidth, column) => totalWidth + this.getWidthForColumn(column.id, source), 0);
  }

  getTotalOverflowColumnWidth(source) {
    const { overflowColumns } = source || this.props;

    return overflowColumns.reduce((totalWidth, column) => totalWidth + this.getWidthForColumn(column.id, source), 0) + 150;
  }

  updateColumnWidth(columnId, widthDelta) {
    const { onRequestColumnResize } = this.props;

    if (!onRequestColumnResize) {
      return;
    }

    let columnWidth = this.getWidthForColumn(columnId);
    const minimumColumnWidth = this.getMinimumWidthForColumn(columnId);

    if (columnWidth + widthDelta < minimumColumnWidth) {
      columnWidth = minimumColumnWidth;
    } else {
      columnWidth += widthDelta;
    }

    onRequestColumnResize(columnId, columnWidth);
  }

  /**
   * Refs
   */
  setDataGridContainerRef(ref) {
    this.dataGridContainerRef = ref;
  }

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
    const { pinnedColumnWidth, overflowColumnWidth } = this.state;

    /**
     * The scrollbar width is determined by squaring the container width and dividing by the overflow value. The scrollbar cannot be larger than the container.
     */
    const scrollbarWidth = Math.min(this.verticalOverflowContainerRef.clientWidth, (this.verticalOverflowContainerRef.clientWidth * this.verticalOverflowContainerRef.clientWidth) / (pinnedColumnWidth + overflowColumnWidth));

    /**
     * The scrollbar position is determined by calculating its position within the horizontalOverflowContainerRef and applying its relative position
     * to the overall container width.
     */
    const positionRatio = this.horizontalOverflowContainerRef.scrollLeft / (this.horizontalOverflowContainerRef.scrollWidth - this.horizontalOverflowContainerRef.clientWidth);
    const position = (this.verticalOverflowContainerRef.clientWidth - scrollbarWidth) * positionRatio;

    this.scrollbarRef.style.width = `${scrollbarWidth}px`;
    this.scrollbarRef.style.left = `${position}px`;
    this.scrollbarPosition = position;
  }

  /**
   * Rendering
   */

  renderHeaderCell(columnData) {
    const columnId = columnData.id;
    const { onHeaderClick } = this.props;

    return (
      <HeaderCell
        key={columnId}
        columnId={columnId}
        width={`${this.getWidthForColumn(columnId)}px`}
        isSelectable={columnData.selectable}
        isResizeable={columnData.resizable}
        onResizeEnd={this.updateColumnWidth}
        onCellClick={onHeaderClick}
        refCallback={(ref) => { this.headerCellRefs[columnId] = ref; }}
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

    return (
      <div key={section.id}>
        {section.headerText ? (
          <div
            key={section.id}
            className={cx('section-header-container')}
            data-section-id={withHeader ? section.id : undefined}
            data-section={withHeader}
          >

            { withHeader ? (
              <SectionHeader
                sectionId={section.id}
                text={section.headerText}
                isCollapsible={section.isCollapsible}
                isCollapsed={section.isInitiallyCollapsed}
                startAccessory={section.headerStartAccessory}
                endAccessory={section.headerEndAccessory}
                onClick={(sectionId) => {
                  if (this.props.collapsedSections) {
                    if (this.props.onRequestSectionCollapse) {
                      this.props.onRequestSectionCollapse(sectionId);
                    }
                  }
                }}
                refCallback={(ref) => {
                  this.sectionRefs[section.id] = ref;
                }}
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
              const cellKey = `${section.id}-${section.rows[rowId].id}-${column.id}`;

              return (
                <Cell
                  key={cellKey}
                  sectionId={section.id}
                  rowId={section.rows[rowId].id}
                  columnId={column.id}
                  width={`${this.getWidthForColumn(column.id)}px`}
                  onCellClick={onCellClick}
                  isSelectable={cell.isSelectable}
                  isSelected={cell.isSelected}
                  refCallback={(ref) => { this.cellRefs[cellKey] = ref; }}
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
    const { fill } = this.props;
    const { pinnedColumnWidth } = this.state;

    console.log('rendering data grid');

    return (
      <div
        className={cx(['data-grid-container', { fill }])}
        ref={this.setDataGridContainerRef}
        onKeyDown={this.handleKeyDown}
      >
        <div
          className={cx('leading-focus-anchor')}
          tabIndex="0"
          onFocus={() => {
            if (!this.shiftIsPressed) {
              console.log('forcing focus on first element');
              this.setElementFocus(this.dataGridContainerRef.querySelector('[data-accessibility-id="0"]'));
            }
          }}
          ref={(ref) => {
            this.leadingFocusAnchorRef = ref;
          }}
        />
        <ContentContainer
          header={this.renderHeaderRow()}
          footer={this.renderScrollbar()}
          fill={fill}
        >
          <div
            className={cx('vertical-overflow-container')}
            ref={this.setVerticalOverflowContainerRef}
          >
            <div
              className={cx('overflowed-content-container')}
              ref={this.setOverflowedContentContainerRef}
              style={{
                paddingLeft: `${pinnedColumnWidth}px`,
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
                width: `${pinnedColumnWidth}px`,
              }}
            >
              {this.renderPinnedContent()}
            </div>
          </div>
        </ContentContainer>
        <div
          className={cx('terminal-focus-anchor')}
          tabIndex="0"
          onFocus={() => {
            if (this.shiftIsPressed) {
              this.setElementFocus(this.dataGridContainerRef.querySelector(`[data-accessibility-id="${this.totalAccessibleElements - 1}"]`));
            }
          }}
          ref={(ref) => {
            this.terminalFocusAnchorRef = ref;
          }}
        />
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default DataGrid;
export { Section, Row, Cell, HeaderCell, ContentCellLayout, HeaderCellLayout };
