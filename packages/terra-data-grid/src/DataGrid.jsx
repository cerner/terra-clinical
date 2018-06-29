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

import { calculateScrollbarPosition } from './scrollbarUtils';
import { KEYCODES, matches } from './utils';

import columnDataShape from './prop-types/columnDataShape';
import sectionDataShape from './prop-types/sectionDataShape';

import styles from './DataGrid.scss';

const cx = classNames.bind(styles);

const propTypes = {
  pinnedColumns: PropTypes.arrayOf(columnDataShape),
  overflowColumns: PropTypes.arrayOf(columnDataShape),
  columnWidths: PropTypes.objectOf(PropTypes.number),
  onRequestColumnResize: PropTypes.func,
  collapsedSections: PropTypes.object,
  onRequestSectionCollapse: PropTypes.func,
  rowHeight: PropTypes.string,
  headerHeight: PropTypes.string,
  onCellClick: PropTypes.func,
  onHeaderClick: PropTypes.func,
  sections: PropTypes.arrayOf(sectionDataShape),
  fill: PropTypes.bool,
};

const defaultProps = {
  pinnedColumns: [],
  overflowColumns: [],
  sections: [],
  rowHeight: '2rem',
  headerHeight: '2rem',
};

class DataGrid extends React.Component {
  constructor(props) {
    super(props);

    /**
     * Resize Events
     */
    this.handleDataGridResize = this.handleDataGridResize.bind(this);

    /**
     * Keyboard Events
     */
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.shiftIsPressed = false;

    /**
     * Accessibility
     */
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
    this.setScrollbarRef = this.setScrollbarRef.bind(this);
    this.setScrollbarContainerRef = this.setScrollbarContainerRef.bind(this);
    this.setVerticalOverflowContainerRef = this.setVerticalOverflowContainerRef.bind(this);
    this.headerCellRefs = {};
    this.cellRefs = {};
    this.sectionRefs = {};

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
    this.updateScrollbarVisibility = this.updateScrollbarVisibility.bind(this);
    this.scrollbarPosition = 0;

    /**
     * Rendering
     */
    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderHeaderRow = this.renderHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderPinnedContent = this.renderPinnedContent.bind(this);
    this.renderScrollbar = this.renderScrollbar.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);

    this.state = {
      pinnedColumnWidth: this.getTotalPinnedColumnWidth(),
      overflowColumnWidth: this.getTotalOverflowColumnWidth(),
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

    this.updateScrollbarPosition();
    this.updateScrollbarVisibility();
  }

  componentWillReceiveProps(nextProps) {
    const newState = {
      pinnedColumnWidth: this.getTotalPinnedColumnWidth(nextProps),
      overflowColumnWidth: this.getTotalOverflowColumnWidth(nextProps),
    };

    this.setState(newState);
  }

  componentDidUpdate() {
    /**
     * The scrollbar position needs to be updated on component update to account for a potential difference in the overflow size.
     */
    requestAnimationFrame(() => {
      this.updateScrollbarPosition();
      this.updateScrollbarVisibility();
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

  /**
   * Resize Events
   */

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

  /**
   * Keyboard Events
   */
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

        if (nextAccessibilityId >= 0 && nextAccessibilityId < this.accessibilityStack.length) {
          const nextFocusElement = document.querySelector(`[data-accessibility-id="${nextAccessibilityId}"]`);
          if (nextFocusElement) {
            event.preventDefault();
            nextFocusElement.focus();
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
  getAccessibleContents(element) {
    const accessibleArray = [];
    const accessibleContentNodes = element.querySelectorAll('[data-accessible-data-grid-content]');

    for (let i = 0, length = accessibleContentNodes.length; i < length; i += 1) {
      accessibleArray.push(accessibleContentNodes[i]);
    }

    return accessibleArray;
  }

  generateAccessibleContentIndex(source) {
    const { pinnedColumns, overflowColumns, sections } = source || this.props;

    const orderedColumnIds = pinnedColumns.concat(overflowColumns).map(column => column.id);

    let accessibilityStack = [];

    pinnedColumns.forEach((column) => {
      const headerRef = this.headerCellRefs[column.id];
      if (headerRef) {
        if (column.selectable) {
          accessibilityStack.push(headerRef);
        }

        accessibilityStack = accessibilityStack.concat(this.getAccessibleContents(headerRef.parentNode));
      }
    });

    overflowColumns.forEach((column) => {
      const headerRef = this.headerCellRefs[column.id];

      if (headerRef) {
        if (column.selectable) {
          accessibilityStack.push(headerRef);
        }

        accessibilityStack = accessibilityStack.concat(this.getAccessibleContents(headerRef.parentNode));
      }
    });

    sections.forEach((section) => {
      const sectionRef = this.sectionRefs[section.id];

      if (sectionRef) {
        if (section.isCollapsible) {
          accessibilityStack.push(sectionRef);
        }

        accessibilityStack = accessibilityStack.concat(this.getAccessibleContents(sectionRef.parentNode));
      }

      if (section.isCollapsed) {
        /**
         * If the section is collapsed, we do not want to assign accessibility identifiers to its content.
         */
        return;
      }

      section.rows.forEach((row) => {
        const cellMap = {};
        row.cells.forEach((cell) => {
          cellMap[cell.columnId] = cell;
        });

        orderedColumnIds.forEach((columnId) => {
          const cellRef = this.cellRefs[`${section.id}-${row.id}-${columnId}`];
          if (cellRef) {
            if (cellMap[columnId].isSelectable) {
              accessibilityStack.push(cellRef);
            }

            accessibilityStack = accessibilityStack.concat(this.getAccessibleContents(cellRef.parentNode));
          }
        });
      });
    });

    accessibilityStack.forEach((element, index) => {
      element.setAttribute('data-accessibility-id', index);
    });

    this.accessibilityStack = accessibilityStack;
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

  setScrollbarContainerRef(ref) {
    this.scrollbarContainerRef = ref;
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

  updateScrollbarVisibility() {
    if (this.horizontalOverflowContainerRef.scrollWidth <= this.horizontalOverflowContainerRef.getBoundingClientRect().width) {
      this.scrollbarContainerRef.setAttribute('aria-hidden', true);
    } else {
      this.scrollbarContainerRef.removeAttribute('aria-hidden');
    }
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
        text={columnData.text}
        sortIndicator={columnData.sortIndicator}
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

  renderSectionHeader(section, sectionIsCollapsed, hideHeader) {
    const { onRequestSectionCollapse } = this.props;

    const shouldRenderSectionHeader = section.isCollapsible || section.headerText || section.headerStartAccessory || section.headerEndAccessory || section.headerComponent;

    return (
      shouldRenderSectionHeader ? (
        <div
          key={section.id}
          className={cx('section-header-container')}
        >
          { !hideHeader ? (
            <SectionHeader
              sectionId={section.id}
              text={section.headerText}
              startAccessory={section.headerStartAccessory}
              endAccessory={section.headerEndAccessory}
              isCollapsible={section.isCollapsible}
              isCollapsed={sectionIsCollapsed}
              onClick={(sectionId) => {
                if (onRequestSectionCollapse) {
                  onRequestSectionCollapse(sectionId);
                }
              }}
              refCallback={(ref) => {
                this.sectionRefs[section.id] = ref;
              }}
            >
              {section.headerComponent}
            </SectionHeader>
          ) : null}
        </div>
      ) : null
    );
  }

  renderSection(section, columns, width, hideHeader) {
    const { collapsedSections, rowHeight, onCellClick } = this.props;

    let isSectionCollapsed;
    if (collapsedSections) {
      isSectionCollapsed = collapsedSections[section.id];
    }

    return (
      <div key={section.id}>
        {this.renderSectionHeader(section, isSectionCollapsed, hideHeader)}
        {!isSectionCollapsed && section.rows && section.rows.map(row => (
          <Row
            key={`${section.id}-${row.id}`}
            sectionId={section.id}
            rowId={row.id}
            width={width}
            height={rowHeight}
          >
            {columns.map((column) => {
              const cell = (row.cells && row.cells.find(searchCell => searchCell.columnId === column.id)) || {};
              const cellKey = `${section.id}-${row.id}-${column.id}`;

              return (
                <Cell
                  key={cellKey}
                  sectionId={section.id}
                  rowId={row.id}
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
    const { pinnedColumns, sections } = this.props;
    const { pinnedColumnWidth } = this.state;

    return sections.map(section => this.renderSection(section, pinnedColumns, `${pinnedColumnWidth}px`));
  }

  renderOverflowContent() {
    const { overflowColumns, sections } = this.props;
    const { overflowColumnWidth } = this.state;

    return sections.map(section => this.renderSection(section, overflowColumns, `${overflowColumnWidth}px`, true));
  }

  renderScrollbar() {
    return (
      <Scrollbar
        refCallback={this.setScrollbarContainerRef}
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
              const firstAccessibleElement = this.dataGridContainerRef.querySelector('[data-accessibility-id="0"]');
              if (firstAccessibleElement) {
                firstAccessibleElement.focus();
              }
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
              const lastAccessibleElement = this.dataGridContainerRef.querySelector(`[data-accessibility-id="${this.accessibilityStack.length - 1}"]`);

              if (lastAccessibleElement) {
                lastAccessibleElement.focus();
              }
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
export { ContentCellLayout };
