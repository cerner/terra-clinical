import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';
import { polyfill } from 'react-lifecycles-compat';
import ResizeObserver from 'resize-observer-polyfill';
import ContentContainer from 'terra-content-container';

import Cell from './subcomponents/Cell';
import HeaderCell from './subcomponents/HeaderCell';
import Row from './subcomponents/Row';
import Scrollbar from './subcomponents/Scrollbar';
import SectionHeader from './subcomponents/SectionHeader';

import { KEYCODES } from './utils/keycodes';

import columnDataShape from './proptypes/columnDataShape';
import sectionDataShape from './proptypes/sectionDataShape';

import styles from './DataGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that will be used to prefix identifiers used throughout the DataGrid for accessibility purposes. Because it will be
   * used to generate id's, this value must be unique among every instance of DataGrid mounted at the same time.
   */
  accessibilityPrefix: PropTypes.string.isRequired,
  /**
   * Data for columns that will be pinned. Columns will be presented in the order given.
   */
  pinnedColumns: PropTypes.arrayOf(columnDataShape),
  /**
   * Data for columns that will be rendered in the DataGrid's horizontal overflow. Columns will be presented in the order given.
   */
  overflowColumns: PropTypes.arrayOf(columnDataShape),
  /**
   * Data for content in the body of the DataGrid. Sections will be rendered in the order given.
   */
  sections: PropTypes.arrayOf(sectionDataShape),
  /**
   * Function that is called when a selectable cell is selected.
   */
  onCellSelect: PropTypes.func,
  /**
   * Function that is called when a selectable header cell is selected.
   */
  onColumnSelect: PropTypes.func,
  /**
   * Function that is called when a resizable column is resized.
   */
  onRequestColumnResize: PropTypes.func,
  /**
   * Function that is called when a collapsible section is selected.
   */
  onRequestSectionCollapse: PropTypes.func,
  /**
   * String that specifies the row height. Any valid CSS height value is accepted (i.e. 50px, 3rem, etc.)
   */
  rowHeight: PropTypes.string,
  /**
   * String that specifies the DataGrid header height. Any valid CSS height value is accepted (i.e. 50px, 3rem, etc.)
   */
  headerHeight: PropTypes.string,
  /**
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,
  /**
   * Function that will be called when a row is selected.
   */
  onRowSelect: PropTypes.func,
  /**
   * Function that will be called when the DataGrid's vertical overflow reaches its terminal position. This can be used to contextually
   * load additional content in the DataGrid. If there is no additional content to present, this function should not be provided.
   * The `fill` prop must also be provided as true; otherwise, the DataGrid will not overflow internally and will not know to request more content.
   */
  onRequestContent: PropTypes.func,
  /**
   * Boolean that indicates whether or not the DataGrid should fill its parent container.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  pinnedColumns: [],
  overflowColumns: [],
  rowHeight: '2.5rem',
  headerHeight: '3rem',
  sections: [],
};

/**
 * If a width is not provided for a given column, the DEFAULT_COLUMN_WIDTH value will be used.
 */
const DEFAULT_COLUMN_WIDTH = 200;

/**
 * The VOID_COLUMN_WIDTH value controls the trailing empty column size. This empty column is used
 * as negative space to allow for resizing of the last overflow column.
 */
const VOID_COLUMN_WIDTH = 150;

/**
 * The PAGED_CONTENT_OFFSET_BUFFER represents the vertical space (in px) remaining in the vertical overflow
 * that will trigger additonal content retrieval (if onRequestContent is provided).
 */
const PAGED_CONTENT_OFFSET_BUFFER = 100;

/**
 * The width of the column used for row selection.
 */
const ROW_SELECTION_COLUMN_WIDTH = 50;

/* eslint-disable react/sort-comp */
class DataGrid extends React.Component {
  /**
   * Returns an Array of HTMLElements that are children of the given 'element' parameter and have
   * the data-accessible-data-grid-content attribute defined.
   * @param {HTMLElement} element The element within which to search for accessible content.
   */
  static getAccessibleContents(element) {
    const accessibleArray = [];
    const accessibleContentNodes = element.querySelectorAll('[data-accessible-data-grid-content]');

    for (let i = 0, numberOfNodes = accessibleContentNodes.length; i < numberOfNodes; i += 1) {
      accessibleArray.push(accessibleContentNodes[i]);
    }

    return accessibleArray;
  }

  /**
   * Returns the configuration for the row selection column.
   */
  static getRowSelectionColumn() {
    return {
      id: 'DataGrid-rowSelectionColumn',
      width: ROW_SELECTION_COLUMN_WIDTH,
    };
  }

  /**
   * Returns the configuration for the void column utilized for column resizing.
   */
  static getVoidColumn() {
    return {
      id: 'DataGrid-voidColumn',
      width: VOID_COLUMN_WIDTH,
    };
  }

  /**
   * Returns the column's specified width or the default width if not width is defined.
   * @param {Object} column Object adhering to the columnData shape.
   */
  static getWidthForColumn(column) {
    return (column && column.width) || DEFAULT_COLUMN_WIDTH;
  }

  /**
   * Returns the combined width of every column provided.
   * @param {Array} columns Array of Objects adhering to the columnData shape.
   */
  static getTotalColumnWidth(columns) {
    if (!columns) {
      return 0;
    }

    return columns.reduce((totalWidth, column) => totalWidth + DataGrid.getWidthForColumn(column), 0);
  }

  /**
   * Returns the pinned columns from the given source, including the row selection column if necessary.
   * @param {Object} props Object conforming to DataGrid's prop types.
   */
  static getPinnedColumns(props) {
    const { pinnedColumns, hasSelectableRows } = props;

    let updatedPinnedColumns = pinnedColumns;
    if (hasSelectableRows) {
      updatedPinnedColumns = [DataGrid.getRowSelectionColumn()].concat(updatedPinnedColumns);
    }

    return updatedPinnedColumns;
  }

  /**
   * Returns the overflow columns from the given source, including the void column used for column resizing.
   * @param {Object} props Object conforming to DataGrid's prop types.
   */
  static getOverflowColumns(props) {
    const { overflowColumns } = props;

    return overflowColumns.concat([DataGrid.getVoidColumn()]);
  }

  /**
   * Returns true if the given element matches the given selector. Includes support for IE10.
   * @param {Element} element The element to compare against the selector.
   * @param {String} selector The selector string to test.
   */
  static matchesSelector(element, selector) {
    if (Element.prototype.msMatchesSelector) {
      return element.msMatchesSelector(selector);
    }

    return element.matches(selector);
  }

  /**
   * Returns the new position and offset ratio of the scrollbar given the change in width.
   * @param {Number} scrollbarWidth The current scrollbar width.
   * @param {Number} containerWidth The width of the container in which the scrollbar is presented.
   * @param {Number} currentScrollbarPosition The current scrollbar position.
   * @param {Number} delta The desired difference in position.
   */
  static calculateScrollbarPosition(scrollbarWidth, containerWidth, currentScrollbarPosition, delta) {
    const newPosition = currentScrollbarPosition + delta;

    let finalPosition;
    if (newPosition < 0) {
      finalPosition = 0;
    } else if (newPosition > containerWidth - scrollbarWidth) {
      finalPosition = containerWidth - scrollbarWidth;
    } else {
      finalPosition = newPosition;
    }

    const scrollerPositionRatio = finalPosition / (containerWidth - scrollbarWidth);

    return {
      position: finalPosition,
      ratio: scrollerPositionRatio,
    };
  }

  /**
   * Returns a new state object containing the pinned/overflowed section widths based on the incoming props.
   * @param {Object} nextProps Object conforming to DataGrid's prop types.
   */
  static getDerivedStateFromProps(nextProps) {
    return {
      pinnedColumnWidth: DataGrid.getTotalColumnWidth(DataGrid.getPinnedColumns(nextProps)),
      overflowColumnWidth: DataGrid.getTotalColumnWidth(DataGrid.getOverflowColumns(nextProps)),
    };
  }

  constructor(props) {
    super(props);

    /**
     * Accessibility
     */
    this.handleLeadingFocusAnchorFocus = this.handleLeadingFocusAnchorFocus.bind(this);
    this.handleTerminalFocusAnchorFocus = this.handleTerminalFocusAnchorFocus.bind(this);

    /**
     * Column Sizing
     */
    this.updateColumnWidth = this.updateColumnWidth.bind(this);

    /**
     * Keyboard Events
     */
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleGlobalShiftDown = this.handleGlobalShiftDown.bind(this);
    this.handleGlobalShiftUp = this.handleGlobalShiftUp.bind(this);
    this.shiftIsPressed = false;

    /**
     * Memoized Style Generators
     */
    this.generateHeaderContainerStyle = memoize(this.generateHeaderContainerStyle);
    this.generateOverflowContainerStyle = memoize(this.generateOverflowContainerStyle);
    this.generatePinnedContainerStyle = memoize(this.generatePinnedContainerStyle);

    /**
     * Paging
     */
    this.checkForMoreContent = this.checkForMoreContent.bind(this);

    /**
     * Post-render Updates
     */
    this.generateAccessibleContentIndex = this.generateAccessibleContentIndex.bind(this);
    this.postRenderUpdate = this.postRenderUpdate.bind(this);

    /**
     * Refs
     */
    this.setDataGridContainerRef = this.setDataGridContainerRef.bind(this);
    this.setHeaderOverflowContainerRef = this.setHeaderOverflowContainerRef.bind(this);
    this.setHeaderScrollbarBufferRef = this.setHeaderScrollbarBufferRef.bind(this);
    this.setHorizontalOverflowContainerRef = this.setHorizontalOverflowContainerRef.bind(this);
    this.setLeadingFocusAnchorRef = this.setLeadingFocusAnchorRef.bind(this);
    this.setOverflowedContentContainerRef = this.setOverflowedContentContainerRef.bind(this);
    this.setPinnedContentContainerRef = this.setPinnedContentContainerRef.bind(this);
    this.setScrollbarRef = this.setScrollbarRef.bind(this);
    this.setScrollbarContainerRef = this.setScrollbarContainerRef.bind(this);
    this.setTerminalFocusAnchorRef = this.setTerminalFocusAnchorRef.bind(this);
    this.setVerticalOverflowContainerRef = this.setVerticalOverflowContainerRef.bind(this);
    this.cellRefs = {};
    this.headerCellRefs = {};
    this.sectionRefs = {};

    /**
     * Resize Events
     */
    this.handleDataGridResize = this.handleDataGridResize.bind(this);
    this.resizeSectionHeaders = this.resizeSectionHeaders.bind(this);
    this.updateHeaderScrollbarBuffer = this.updateHeaderScrollbarBuffer.bind(this);

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
    this.renderCell = this.renderCell.bind(this);
    this.renderHeaderCell = this.renderHeaderCell.bind(this);
    this.renderRowSelectionCell = this.renderRowSelectionCell.bind(this);
    this.renderHeaderRow = this.renderHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderPinnedContent = this.renderPinnedContent.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderScrollbar = this.renderScrollbar.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);

    /**
     * Determining the widths of the pinned and overflow sections requires iterating over the prop arrays. The widths are
     * generated and cached in state to limit the amount of iteration performed by the render functions.
     */
    this.state = {
      pinnedColumnWidth: DataGrid.getTotalColumnWidth(DataGrid.getPinnedColumns(props)),
      overflowColumnWidth: DataGrid.getTotalColumnWidth(DataGrid.getOverflowColumns(props)),
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
    document.addEventListener('keydown', this.handleGlobalShiftDown);
    document.addEventListener('keyup', this.handleGlobalShiftUp);

    this.postRenderUpdate();

    this.checkForMoreContent();
  }

  componentDidUpdate(prevProps) {
    this.postRenderUpdate();

    /**
     * If the sections prop has been updated, we invalidate the content request flag before potentially requesting
     * more content.
     */
    if (prevProps.sections !== this.props.sections) {
      this.hasRequestedContent = false;
    }

    this.checkForMoreContent();
  }

  componentWillUnmount() {
    this.resizeObserver.disconnect(this.verticalOverflowContainerRef);
    document.removeEventListener('keydown', this.handleGlobalShiftDown);
    document.removeEventListener('keyup', this.handleGlobalShiftUp);
  }

  /**
   * Accessiblity
   */
  handleLeadingFocusAnchorFocus() {
    if (!this.shiftIsPressed) {
      const firstAccessibleElement = this.dataGridContainerRef.querySelector('[data-accessibility-id="0"]');
      if (firstAccessibleElement) {
        firstAccessibleElement.focus();
      }
    }
  }

  handleTerminalFocusAnchorFocus() {
    if (this.shiftIsPressed) {
      const lastAccessibleElement = this.dataGridContainerRef.querySelector(`[data-accessibility-id="${this.accessibilityStack.length - 1}"]`);

      if (lastAccessibleElement) {
        lastAccessibleElement.focus();
      }
    }
  }

  /**
   * Column Sizing
   */
  updateColumnWidth(columnId, widthDelta) {
    const { onRequestColumnResize } = this.props;

    if (!onRequestColumnResize) {
      return;
    }

    const pinnedColumns = DataGrid.getPinnedColumns(this.props);
    let columnToUpdate;
    let columnIsPinned;
    const allColumns = pinnedColumns.concat(DataGrid.getOverflowColumns(this.props));
    for (let i = 0, numberOfColumns = allColumns.length; i < numberOfColumns; i += 1) {
      if (allColumns[i].id === columnId) {
        columnToUpdate = allColumns[i];

        if (i < pinnedColumns.length) {
          columnIsPinned = true;
        }
      }
    }

    if (!columnToUpdate) {
      return;
    }

    /**
     * Depending on the page's layout direction, we need to manipulate the size calculation to account for
     * the delta's direction-agnostic value.
     */
    const pageDirection = document.documentElement.getAttribute('dir');
    const deltaForDirection = pageDirection === 'rtl' ? widthDelta * -1 : widthDelta;
    let newWidth = DataGrid.getWidthForColumn(columnToUpdate) + deltaForDirection;

    /**
     * If the column being updated is a pinned column, we need to ensure that the new width will not cause the pinned columns to overflow the
     * container's current width. Otherwise, the DataGrid may get into an unrecoverable state.
     */
    if (columnIsPinned) {
      const totalPinnedSectionWidth = pinnedColumns.reduce((totalWidth, pinnedColumn) => {
        if (pinnedColumn.id === columnId) {
          return totalWidth + newWidth;
        }

        return totalWidth + pinnedColumn.width;
      }, 0);

      const containerWidth = this.dataGridContainerRef.getBoundingClientRect().width;
      if (totalPinnedSectionWidth > containerWidth) {
        newWidth -= totalPinnedSectionWidth - containerWidth;
      }
    }

    onRequestColumnResize(columnId, newWidth);
  }

  /**
   * Keyboard Events
   */
  handleKeyDown(event) {
    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
      const { activeElement } = document;

      if (!activeElement) {
        return;
      }

      if (DataGrid.matchesSelector(activeElement, '[data-accessibility-id]')) {
        const currentAccessibilityId = activeElement.getAttribute('data-accessibility-id');
        const nextAccessibilityId = this.shiftIsPressed ? parseInt(currentAccessibilityId, 10) - 1 : parseInt(currentAccessibilityId, 10) + 1;

        if (nextAccessibilityId >= 0 && nextAccessibilityId < this.accessibilityStack.length) {
          const nextFocusElement = this.dataGridContainerRef.querySelector(`[data-accessibility-id="${nextAccessibilityId}"]`);
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

  handleGlobalShiftDown(event) {
    if (event.keyCode === KEYCODES.SHIFT) {
      this.shiftIsPressed = true;
    }
  }

  handleGlobalShiftUp(event) {
    if (event.keyCode === KEYCODES.SHIFT) {
      this.shiftIsPressed = false;
    }
  }

  /**
   * Memoized Style Generators
   *
   * These functions could technically be static functions on the DataGrid class, but then the cached values would
   * be shared across all DataGrid instances. It is recommended to make instance-based versions. Because of this,
   * the eslint rule for the usage of 'this' must be disabled.
   */

  /* eslint-disable class-methods-use-this */
  generateHeaderContainerStyle(headerHeight) {
    return {
      height: `${headerHeight}`,
    };
  }

  generateOverflowContainerStyle(overflowColumnWidth, headerHeight) {
    return {
      width: `${overflowColumnWidth}px`,
      height: `${headerHeight}`,
    };
  }

  generatePinnedContainerStyle(pinnedColumnWidth) {
    return {
      width: `${pinnedColumnWidth}px`,
    };
  }
  /* eslint-enable class-methods-use-this */

  /**
   * Paging
   */
  checkForMoreContent() {
    const { onRequestContent } = this.props;

    if (!onRequestContent || this.hasRequestedContent) {
      return;
    }

    const containerHeight = this.verticalOverflowContainerRef.getBoundingClientRect().height;
    const containerScrollHeight = this.verticalOverflowContainerRef.scrollHeight;
    const containerScrollTop = this.verticalOverflowContainerRef.scrollTop;

    if (containerScrollHeight - (containerScrollTop + containerHeight) <= PAGED_CONTENT_OFFSET_BUFFER) {
      this.hasRequestedContent = true;
      onRequestContent();
    }
  }

  /**
   * Post-render Updates
   */
  generateAccessibleContentIndex() {
    const { sections } = this.props;

    const pinnedColumns = DataGrid.getPinnedColumns(this.props);
    const overflowColumns = DataGrid.getOverflowColumns(this.props);

    const orderedColumnIds = pinnedColumns.concat(overflowColumns).map(column => column.id);

    let accessibilityStack = [];

    pinnedColumns.forEach((column) => {
      const headerRef = this.headerCellRefs[column.id];
      if (headerRef) {
        if (column.isSelectable) {
          accessibilityStack.push(headerRef);
        }

        accessibilityStack = accessibilityStack.concat(DataGrid.getAccessibleContents(headerRef.parentNode));
      }
    });

    overflowColumns.forEach((column) => {
      const headerRef = this.headerCellRefs[column.id];

      if (headerRef) {
        if (column.isSelectable) {
          accessibilityStack.push(headerRef);
        }

        accessibilityStack = accessibilityStack.concat(DataGrid.getAccessibleContents(headerRef.parentNode));
      }
    });

    sections.forEach((section) => {
      const sectionRef = this.sectionRefs[section.id];

      if (sectionRef) {
        if (section.isCollapsible) {
          accessibilityStack.push(sectionRef);
        }

        accessibilityStack = accessibilityStack.concat(DataGrid.getAccessibleContents(sectionRef.parentNode));
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
            if ((cellMap[columnId] && cellMap[columnId].isSelectable) || (columnId === 'DataGrid-rowSelectionColumn' && row.isSelectable)) {
              accessibilityStack.push(cellRef);
            }

            accessibilityStack = accessibilityStack.concat(DataGrid.getAccessibleContents(cellRef.parentNode));
          }
        });
      });
    });

    accessibilityStack.forEach((element, index) => {
      element.setAttribute('data-accessibility-id', index);
    });

    this.accessibilityStack = accessibilityStack;
  }

  postRenderUpdate() {
    /**
     * The DOM is parsed after rendering to generate the accessibility identifiers used by the DataGrid's custom
     * focus implementation.
     */
    this.generateAccessibleContentIndex();

    requestAnimationFrame(() => {
      /**
       * The SectionHeader widths must be updated after rendering to match the rendered DataGrid's width.
       */
      this.resizeSectionHeaders(this.verticalOverflowContainerRef.clientWidth);

      /**
       * The scrollbar position and visibility are determined based on the size of the DataGrid after rendering.
       */
      this.updateScrollbarPosition();
      this.updateScrollbarVisibility();

      /**
       * Ensure correct padding is set on the header to account for potentially increased row counts.
       */
      this.updateHeaderScrollbarBuffer();

      /**
       * The height of the overflow content region must be set to hide the horizontal scrollbar for that element. It is hidden because we
       * want defer to the custom scrollbar that rendered by the DataGrid.
       */
      this.overflowedContentContainerRef.style.height = `${this.pinnedContentContainerRef.clientHeight}px`;
    });
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

  setHeaderScrollbarBufferRef(ref) {
    this.headerScrollbarBuffer = ref;
  }

  setHorizontalOverflowContainerRef(ref) {
    this.horizontalOverflowContainerRef = ref;
  }

  setLeadingFocusAnchorRef(ref) {
    this.leadingFocusAnchorRef = ref;
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

  setTerminalFocusAnchorRef(ref) {
    this.terminalFocusAnchorRef = ref;
  }

  setVerticalOverflowContainerRef(ref) {
    this.verticalOverflowContainerRef = ref;
  }

  /**
   * Resize Events
   */
  handleDataGridResize(newWidth) {
    this.resizeSectionHeaders(newWidth);
    this.updateHeaderScrollbarBuffer();
    this.updateScrollbarPosition();
    this.updateScrollbarVisibility();
    this.checkForMoreContent();
  }

  resizeSectionHeaders(width) {
    /**
     * The widths are applied directly the nodes (outside of the React rendering lifecycle) to improve performance and limit
     * unnecessary rendering of other components.
     */
    const sectionHeaderContainers = this.dataGridContainerRef.querySelectorAll(`.${cx('pinned-content-container')} .${cx('section-header-container')}`);

    /**
     * querySelectorAll returns a NodeList, which does not support standard iteration functions like forEach in legacy browsers.
     */
    for (let i = 0, numberOfSectionHeaders = sectionHeaderContainers.length; i < numberOfSectionHeaders; i += 1) {
      sectionHeaderContainers[i].style.width = `${width}px`; // eslint-disable-line no-param-reassign
    }
  }

  updateHeaderScrollbarBuffer() {
    const { pinnedColumnWidth } = this.state;

    /**
     * If there is a vertical overflow and fixed scrollbars are present (due to the presence of a mouse, etc.), the header columns
     * and content columns can move out of alignment. We need to account for the potential presence of the scrollbar and set the size of the
     * header scrollbar buffer element to equalize any differences in width.
     */
    const scrollbarOffset = this.dataGridContainerRef.clientWidth - pinnedColumnWidth - this.horizontalOverflowContainerRef.clientWidth;
    this.headerScrollbarBuffer.style.width = `${scrollbarOffset}px`;
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

    const { position, ratio } = DataGrid.calculateScrollbarPosition(this.scrollbarRef.clientWidth, this.verticalOverflowContainerRef.clientWidth, this.scrollbarPosition, data.deltaX);

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
    if (Math.abs(this.horizontalOverflowContainerRef.scrollWidth - this.horizontalOverflowContainerRef.getBoundingClientRect().width) < 1) {
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
    const { onColumnSelect } = this.props;

    if (columnId === 'DataGrid-voidColumn') {
      return undefined;
    }

    return (
      <HeaderCell
        key={columnId}
        columnId={columnId}
        text={columnData.text}
        sortIndicator={columnData.sortIndicator}
        width={`${DataGrid.getWidthForColumn(columnData)}px`}
        isSelectable={columnData.isSelectable}
        isResizable={columnData.isResizable}
        onResizeEnd={this.updateColumnWidth}
        onSelect={onColumnSelect}
        selectableRefCallback={(ref) => { this.headerCellRefs[columnId] = ref; }}
      >
        {columnData.component}
      </HeaderCell>
    );
  }

  renderHeaderRow() {
    const {
      headerHeight,
    } = this.props;
    const {
      pinnedColumnWidth,
      overflowColumnWidth,
    } = this.state;

    return (
      <div
        className={cx('header-container')}
        style={this.generateHeaderContainerStyle(headerHeight)}
      >
        <div
          className={cx('pinned-header')}
          style={this.generatePinnedContainerStyle(pinnedColumnWidth)}
        >
          {DataGrid.getPinnedColumns(this.props).map(column => this.renderHeaderCell(column))}
        </div>
        <div
          className={cx('header-overflow-container')}
          ref={this.setHeaderOverflowContainerRef}
          onScroll={this.synchronizeHeaderScroll}
        >
          <div
            className={cx('overflow-header')}
            style={this.generateOverflowContainerStyle(overflowColumnWidth, headerHeight)}
          >
            {DataGrid.getOverflowColumns(this.props).map(column => this.renderHeaderCell(column))}
          </div>
        </div>
        <div
          className={cx('header-scrollbar-buffer')}
          ref={this.setHeaderScrollbarBufferRef}
        />
      </div>
    );
  }

  renderSectionHeader(section, isPinned) {
    const { onRequestSectionCollapse } = this.props;

    const shouldRenderSectionHeaderContainer = section.isCollapsible || section.text || section.startAccessory || section.endAccessory || section.component;

    return (
      shouldRenderSectionHeaderContainer ? (
        <div
          key={section.id}
          className={cx('section-header-container')}
        >
          { isPinned ? (
            <SectionHeader
              sectionId={section.id}
              text={section.text}
              startAccessory={section.startAccessory}
              endAccessory={section.endAccessory}
              isCollapsible={section.isCollapsible}
              isCollapsed={section.isCollapsed}
              onRequestSectionCollapse={onRequestSectionCollapse}
              selectableRefCallback={(ref) => {
                this.sectionRefs[section.id] = ref;
              }}
            >
              {section.component}
            </SectionHeader>
          ) : null}
        </div>
      ) : null
    );
  }

  renderRowSelectionCell(section, row, column) {
    const { onRowSelect } = this.props;
    const cellKey = `${section.id}-${row.id}-${column.id}`;

    return (
      <Cell
        key={cellKey}
        sectionId={section.id}
        rowId={row.id}
        columnId={column.id}
        width={`${DataGrid.getWidthForColumn(column)}px`}
        isSelectable={row.isSelectable}
        selectableRefCallback={(ref) => { this.cellRefs[cellKey] = ref; }}
        onHoverStart={() => {
          const rowElements = this.dataGridContainerRef.querySelectorAll(`[data-row][data-row-id="${row.id}"][data-section-id="${section.id}"]`);
          for (let i = 0, numberOfRows = rowElements.length; i < numberOfRows; i += 1) {
            rowElements[i].classList.add('hover');
          }
        }}
        onHoverEnd={() => {
          const rowElements = this.dataGridContainerRef.querySelectorAll(`[data-row][data-row-id="${row.id}"][data-section-id="${section.id}"]`);
          for (let i = 0, numberOfRows = rowElements.length; i < numberOfRows; i += 1) {
            rowElements[i].classList.remove('hover');
          }
        }}
        onSelect={onRowSelect}
      />
    );
  }

  renderCell(cell, section, row, column) {
    const { onCellSelect } = this.props;
    const cellKey = `${section.id}-${row.id}-${column.id}`;

    return (
      <Cell
        key={cellKey}
        sectionId={section.id}
        rowId={row.id}
        columnId={column.id}
        width={`${DataGrid.getWidthForColumn(column)}px`}
        onSelect={onCellSelect}
        isSelectable={cell.isSelectable}
        isSelected={cell.isSelected}
        selectableRefCallback={(ref) => { this.cellRefs[cellKey] = ref; }}
      >
        {cell.component}
      </Cell>
    );
  }

  renderRow(row, section, columns, width, isPinned) {
    const { rowHeight, accessibilityPrefix } = this.props;

    /**
     * Because of the DOM structure necessary to properly render the pinned and overflow sections,
     * each 'row' of the DataGrid is actually two rows, side-by-side. However, we can use aria attributes
     * to ensure screen readers will read both rows as one contiguous row.
     */
    const ariaStyles = {};
    if (isPinned) {
      ariaStyles.id = `${accessibilityPrefix}-Pinned-Row-${row.id}-Section-${section.id}`;
      ariaStyles['aria-owns'] = `${accessibilityPrefix}-Overflow-Row-${row.id}-Section-${section.id}`;
    } else {
      ariaStyles.id = `${accessibilityPrefix}-Overflow-Row-${row.id}-Section-${section.id}`;
    }

    return (
      <Row
        key={`${section.id}-${row.id}`}
        sectionId={section.id}
        rowId={row.id}
        width={width}
        height={rowHeight}
        isSelected={row.isSelected}
        {...ariaStyles}

      >
        {columns.map((column) => {
          if (column.id === 'DataGrid-rowSelectionColumn') {
            return this.renderRowSelectionCell(section, row, column);
          } else if (column.id === 'DataGrid-voidColumn') {
            return undefined;
          }

          const cell = (row.cells && row.cells.find(searchCell => searchCell.columnId === column.id)) || {};
          return this.renderCell(cell, section, row, column);
        })}
      </Row>
    );
  }

  renderSection(section, columns, width, isPinned) {
    return (
      <React.Fragment key={section.id}>
        {this.renderSectionHeader(section, isPinned)}
        {!section.isCollapsed && section.rows && section.rows.map(row => (
          this.renderRow(row, section, columns, width, isPinned)
        ))}
      </React.Fragment>
    );
  }

  renderPinnedContent() {
    const { sections } = this.props;
    const { pinnedColumnWidth } = this.state;

    return sections.map(section => this.renderSection(section, DataGrid.getPinnedColumns(this.props), `${pinnedColumnWidth}px`, true));
  }

  renderOverflowContent() {
    const { sections } = this.props;
    const { overflowColumnWidth } = this.state;

    return sections.map(section => this.renderSection(section, DataGrid.getOverflowColumns(this.props), `${overflowColumnWidth}px`));
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
    const {
      accessibilityPrefix,
      pinnedColumns,
      overflowColumns,
      sections,
      onCellSelect,
      onColumnSelect,
      onRequestColumnResize,
      onRequestSectionCollapse,
      rowHeight,
      headerHeight,
      hasSelectableRows,
      onRowSelect,
      fill,
      onRequestContent,
      ...customProps
    } = this.props;
    const { pinnedColumnWidth } = this.state;

    const dataGridClassnames = cx(['data-grid-container', { fill }, customProps.className]);

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
      <div
        {...customProps}
        className={dataGridClassnames}
        ref={this.setDataGridContainerRef}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
      >
        <div
          className={cx('leading-focus-anchor')}
          tabIndex="0"
          onFocus={this.handleLeadingFocusAnchorFocus}
          ref={this.setLeadingFocusAnchorRef}
        />
        <ContentContainer
          header={this.renderHeaderRow()}
          footer={this.renderScrollbar()}
          fill={fill}
        >
          <div
            className={cx('vertical-overflow-container')}
            ref={this.setVerticalOverflowContainerRef}
            onScroll={this.checkForMoreContent}
          >
            <div
              className={cx('pinned-content-container')}
              ref={this.setPinnedContentContainerRef}
              style={this.generatePinnedContainerStyle(pinnedColumnWidth)}
            >
              {this.renderPinnedContent()}
            </div>
            <div
              className={cx('overflowed-content-container')}
              ref={this.setOverflowedContentContainerRef}
            >
              <div
                className={cx('horizontal-overflow-container')}
                ref={this.setHorizontalOverflowContainerRef}
                onScroll={this.synchronizeContentScroll}
              >
                {this.renderOverflowContent()}
              </div>
            </div>
          </div>
        </ContentContainer>
        <div
          className={cx('terminal-focus-anchor')}
          tabIndex="0"
          onFocus={this.handleTerminalFocusAnchorFocus}
          ref={this.setTerminalFocusAnchorRef}
        />
      </div>
      /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
    );
  }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default polyfill(DataGrid);
