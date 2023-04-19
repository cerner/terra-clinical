import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import memoize from 'memoize-one';
import ResizeObserver from 'resize-observer-polyfill';
import ContentContainer from 'terra-content-container';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import { injectIntl } from 'react-intl';

import { KEY_SHIFT, KEY_TAB } from 'keycode-js';
import Cell from './subcomponents/Cell';
import HeaderCell from './subcomponents/HeaderCell';
import RowSelectionCell from './subcomponents/RowSelectionCell';
import Row from './subcomponents/Row';
import Scrollbar from './subcomponents/Scrollbar';
import SectionHeader from './subcomponents/SectionHeader';

import dataGridUtils from './utils/dataGridUtils';

import { columnDataShape, SortIndicators as ColumnSortIndicators } from './proptypes/columnDataShape';
import sectionDataShape from './proptypes/sectionDataShape';

import styles from './DataGrid.module.scss';
import rowStyles from './subcomponents/Row.module.scss';

const cx = classNamesBind.bind(styles);
const cxRow = classNamesBind.bind(rowStyles);

const propTypes = {
  /**
   * String that will be used to identify the DataGrid. This value will be used as the id attribute of the overall DataGrid container,
   * and it will be used to prefix other id attributes used for internal componentry.
   */
  id: PropTypes.string.isRequired,
  /**
   * A Unique Identifier of the [column](/components/terra-clinical-data-grid/clinical-data-grid/clinical-data-grid#columns).
   * If provided, column with specified identifier will be highlighted in data-grid.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Design-Standards/blue) The column highlight feature should be limited specifically to
   * time and timeline concepts only, best used with special instruction and guidance from User Experience to ensure proper standards.
   */
  columnHighlightId: PropTypes.string,
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
   * Function that is called when a selectable cell is selected. Parameters: `onCellSelect(sectionId, rowId, columnId)`
   */
  onCellSelect: PropTypes.func,
  /**
   * Function that is called when a selectable header cell is selected. Parameters: `onColumnSelect(columnId)`
   */
  onColumnSelect: PropTypes.func,
  /**
   * Function that is called when a resizable column is resized. Parameters: `onRequestColumnResize(columnId, requestedWidth)`
   */
  onRequestColumnResize: PropTypes.func,
  /**
   * Function that is called when a collapsible section is selected. Parameters: `onRequestSectionCollapse(sectionId)`
   */
  onRequestSectionCollapse: PropTypes.func,
  /**
   * String that specifies the row height. Values are suggested to be in `rem`s (ex `'5rem'`), but any valid CSS height value is accepted.
   * This value can be overridden for a row by specifying a height on the given row.
   */
  rowHeight: PropTypes.string,
  /**
   * String that specifies the DataGrid header height. Values are suggested to be in `rem`s (ex `'5rem'`), but any valid CSS height value is accepted.
   */
  headerHeight: PropTypes.string,
  /**
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,
  /**
   * Function that will be called when a row is selected. Parameters: `onRowSelect(sectionId, rowId)`
   */
  onRowSelect: PropTypes.func,
  /**
   * Boolean indicating whether or not resizable columns are enabled for the DataGrid. If this prop is not enabled, the isResizable value of columns
   * will be ignored.
   */
  hasResizableColumns: PropTypes.bool,
  /**
   * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
   */
  defaultColumnWidth: PropTypes.number,
  /**
   * Function that will be called when the DataGrid's vertical overflow reaches its terminal position. This can be used to contextually
   * load additional content in the DataGrid. If there is no additional content to present, this function should not be provided.
   * The `fill` prop must also be provided as true; otherwise, the DataGrid will not overflow internally and will not know to request more content.
   * Parameters: `onRequestContent()`
   */
  onRequestContent: PropTypes.func,
  /**
   * Boolean that indicates whether or not the DataGrid should fill its parent container.
   */
  fill: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Callback ref to pass into vertical overflow container.
   */
  verticalOverflowContainerRefCallback: PropTypes.func,
  /**
   * Callback ref to pass into horizontal overflow container.
   */
  horizontalOverflowContainerRefCallback: PropTypes.func,
  /**
   * A ref to the element containing the visual name/label of the grid to provide context for screen readers. This can be a ref to a textual DOM element or a string, but a ref is recommended. Necessary to meet a11y standards.
   */
  labelRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  /**
   * A ref to an element containing description, helper text, or instructions for using the grid to provide context for screen readers. This can be a ref to a textual DOM element or a string. This information should be made visible as well outside of the grid when possible.
   */
  descriptionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
};

const defaultProps = {
  pinnedColumns: [],
  overflowColumns: [],
  rowHeight: '2.5rem',
  headerHeight: '2.5rem',
  defaultColumnWidth: 200,
  sections: [],
};

function getA11yText(ref) {
  if (!ref) {
    return null;
  }
  if (typeof ref === 'string') {
    return ref;
  }
  if (typeof ref === 'function') {
    /**
     * React.createRef/useRef use 'current' property while callback ref can be accessed directly.
     */
    return (ref() && ((ref().current && ref().current.textContent) || ref().textContent)) || null;
  }
  return null;
}

/* eslint-disable react/sort-comp, react/forbid-dom-props */
class DataGrid extends React.Component {
  /**
   * Returns a new state object containing the pinned/overflowed section widths based on the incoming props.
   * @param {Object} nextProps Object conforming to DataGrid's prop types.
   */
  static getDerivedStateFromProps(nextProps) {
    return {
      pinnedColumnWidth: dataGridUtils.getTotalColumnWidth(dataGridUtils.getPinnedColumns(nextProps), nextProps.defaultColumnWidth),
      overflowColumnWidth: dataGridUtils.getTotalColumnWidth(dataGridUtils.getOverflowColumns(nextProps), nextProps.defaultColumnWidth),
    };
  }

  constructor(props) {
    super(props);

    /**
     * Accessibility
     */
    this.handleLeadingFocusAnchorFocus = this.handleLeadingFocusAnchorFocus.bind(this);
    this.handleTerminalFocusAnchorFocus = this.handleTerminalFocusAnchorFocus.bind(this);
    this.getLabelText = this.getLabelText.bind(this);
    this.getDescriptionText = this.getDescriptionText.bind(this);

    /**
     * Column Sizing
     */
    this.updateColumnWidth = this.updateColumnWidth.bind(this);

    /**
     * Column Highlighting
     */
    this.updateColumnHighlightRowData = this.updateColumnHighlightRowData.bind(this);

    /**
     * Keyboard Events
     */
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.shiftIsPressed = false;

    /**
     * Memoized Style Generators
     */
    this.generateHeaderContainerStyle = memoize(this.generateHeaderContainerStyle);
    this.generateOverflowColumnHeaderStyle = memoize(this.generateOverflowColumnHeaderStyle);
    this.generatePinnedContainerWidthStyle = memoize(this.generatePinnedContainerWidthStyle);
    this.generatePinnedColumnHeaderStyle = memoize(this.generatePinnedColumnHeaderStyle);

    /**
     * Paging
     */
    this.checkForMoreContent = this.checkForMoreContent.bind(this);

    /**
     * Post-render Updates
     */
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
    this.renderFixedHeaderRow = this.renderFixedHeaderRow.bind(this);
    this.renderOverflowContent = this.renderOverflowContent.bind(this);
    this.renderPinnedContent = this.renderPinnedContent.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderScrollbar = this.renderScrollbar.bind(this);
    this.renderSection = this.renderSection.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);

    /**
     * Animation Frame ID's
     */
    this.animationFrameIDPinned = null;
    this.animationFrameIDVertical = null;

    /**
     * Determining the widths of the pinned and overflow sections requires iterating over the prop arrays. The widths are
     * generated and cached in state to limit the amount of iteration performed by the render functions. If column highlighting
     * is used, the first and last row information will also be cached in state to save render iterations.
     */
    this.state = {
      pinnedColumnWidth: dataGridUtils.getTotalColumnWidth(dataGridUtils.getPinnedColumns(props), props.defaultColumnWidth),
      overflowColumnWidth: dataGridUtils.getTotalColumnWidth(dataGridUtils.getOverflowColumns(props), props.defaultColumnWidth),
      columnHighlightRowData: (!props.columnHighlightId)
        ? {
          firstRowSectionId: null, firstRowId: null, lastRowSectionId: null, lastRowId: null,
        }
        : dataGridUtils.getFirstAndLastVisibleRowData(props.sections),
      /**
       * Data Accessibility ID attribute name per data grid. This appends the unique grid ID to accessibility-id attribute name so that
       * cells in the grid can be tabbed through sequencially without conflicts in case of multiple grids on a single page.
       */
      accessibilityId: `data-accessibility-id-${props.id}`,
      labelText: null,
      descriptionText: null,
    };
  }

  componentDidMount() {
    /**
     * A ResizeObserver is used to manage changes to the DataGrid's overall size. The handler will execute once upon the start of
     * observation and on every subsequent resize.
     */
    this.resizeObserver = new ResizeObserver((entries) => {
      this.animationFrameIDVertical = window.requestAnimationFrame(() => {
        this.handleDataGridResize(entries[0].contentRect.width, entries[0].contentRect.height);
      });
    });
    this.resizeObserver.observe(this.verticalOverflowContainerRef);

    /**
     * Another ResizeObserver is used to track changes to the pinned column section height.
     */
    this.pinnedColumnResizeObserver = new ResizeObserver((entries) => {
      if (this.scrollbarRef) {
        this.animationFrameIDPinned = window.requestAnimationFrame(() => {
          /**
           * The height of the overflow content region must be set to hide the horizontal scrollbar for that element. It is hidden because we
           * want defer to the custom scrollbar that rendered by the DataGrid.
           */
          this.overflowedContentContainerRef.style.height = `${entries[0].contentRect.height}px`;
        });
      }
    });
    this.pinnedColumnResizeObserver.observe(this.pinnedContentContainerRef);

    /**
     * We need to keep track of the user's usage of SHIFT to properly handle tabbing paths.
     */
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);

    /**
     * Get the label and description text from labelRef and descriptionRef props.
     */
    if (this.props.labelRef) {
      this.getLabelText();
    }

    if (this.props.descriptionRef) {
      this.getDescriptionText();
    }

    this.postRenderUpdate();
  }

  componentDidUpdate(prevProps) {
    /**
     * If the sections prop has been updated, we invalidate the content request flag before potentially requesting
     * more content, and update the first and last row information if needed for column highlighting.
     */
    if (prevProps.sections !== this.props.sections) {
      this.hasRequestedContent = false;
      this.updateColumnHighlightRowData();
    }

    /**
     * If labelRef or descriptionRef props are updated, set the new text for the label and description.
     */
    if (prevProps.labelRef !== this.props.labelRef) {
      this.getLabelText();
    }

    if (prevProps.descriptionRef !== this.props.descriptionRef) {
      this.getDescriptionText();
    }

    this.postRenderUpdate();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameIDVertical);
    this.resizeObserver.disconnect(this.verticalOverflowContainerRef);
    window.cancelAnimationFrame(this.animationFrameIDPinned);
    this.pinnedColumnResizeObserver.disconnect(this.pinnedContentContainerRef);

    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);

    /**
     * If the component is unmounting, we need to cancel any post-render manipulation before the DOM elements
     * go out of scope.
     */
    cancelAnimationFrame(this.postRenderUpdateAnimationFrame);
    cancelAnimationFrame(this.scrollSyncAnimationFrame);
  }

  /**
   * Accessibility
   */
  handleLeadingFocusAnchorFocus() {
    if (!this.shiftIsPressed) {
      const firstAccessibleElement = this.dataGridContainerRef.querySelector(`[${this.state.accessibilityId}="0"]`);
      if (firstAccessibleElement) {
        firstAccessibleElement.focus();
      }
    }
  }

  handleTerminalFocusAnchorFocus() {
    if (this.shiftIsPressed) {
      const lastAccessibleElement = this.dataGridContainerRef.querySelector(`[${this.state.accessibilityId}="${this.accessibilityStack.length - 1}"]`);

      if (lastAccessibleElement) {
        lastAccessibleElement.focus();
      }
    }
  }

  getLabelText() {
    const { labelRef } = this.props;

    this.setState({ labelText: getA11yText(labelRef) });
  }

  getDescriptionText() {
    const { descriptionRef } = this.props;

    this.setState({ descriptionText: getA11yText(descriptionRef) });
  }

  /**
   * Column Sizing
   */
  updateColumnWidth(columnId, widthDelta) {
    const { onRequestColumnResize, defaultColumnWidth } = this.props;

    if (!onRequestColumnResize) {
      return;
    }

    const pinnedColumns = dataGridUtils.getPinnedColumns(this.props);
    let columnToUpdate;
    let columnIsPinned;
    const allColumns = pinnedColumns.concat(dataGridUtils.getOverflowColumns(this.props));
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
    let newWidth = dataGridUtils.getWidthForColumn(columnToUpdate, defaultColumnWidth) + deltaForDirection;

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
   * Column Highlighting
   */
  updateColumnHighlightRowData() {
    const { columnHighlightId, sections } = this.props;

    if (!columnHighlightId) {
      /**
       * If the column highlight id prop is not valued, there is nothing to be updated.
       */
      return;
    }

    /**
     * Determine the first and last row in non-collapsed and non-empty sections, then update state with new values.
     */
    const firstAndLastVisibleRowData = dataGridUtils.getFirstAndLastVisibleRowData(sections);
    this.setState({ columnHighlightRowData: firstAndLastVisibleRowData });
  }

  /**
   * Keyboard Events
   */
  handleKeyDown(event) {
    if (event.keyCode === KEY_SHIFT) {
      this.shiftIsPressed = true;
    }

    if (event.keyCode === KEY_TAB) {
      const { activeElement } = document;

      if (!activeElement) {
        return;
      }

      if (dataGridUtils.matchesSelector(activeElement, `[${this.state.accessibilityId}]`)) {
        const currentAccessibilityId = activeElement.getAttribute(`${this.state.accessibilityId}`);
        const nextAccessibilityId = this.shiftIsPressed ? parseInt(currentAccessibilityId, 10) - 1 : parseInt(currentAccessibilityId, 10) + 1;

        if (nextAccessibilityId >= 0 && nextAccessibilityId < this.accessibilityStack.length) {
          const nextFocusElement = this.dataGridContainerRef.querySelector(`[${this.state.accessibilityId}="${nextAccessibilityId}"]`);

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
    if (event.keyCode === KEY_SHIFT) {
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

  generateOverflowColumnHeaderStyle(overflowColumnWidth, headerHeight) {
    return {
      width: `${overflowColumnWidth}px`,
      height: `${headerHeight}`,
    };
  }

  generatePinnedColumnHeaderStyle(pinnedColumnWidth, headerHeight) {
    return {
      width: `${pinnedColumnWidth}px`,
      height: `${headerHeight}`,
    };
  }

  generatePinnedContainerWidthStyle(pinnedColumnWidth) {
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

    if (containerScrollHeight - (containerScrollTop + containerHeight) <= dataGridUtils.PAGED_CONTENT_OFFSET_BUFFER) {
      this.hasRequestedContent = true;
      onRequestContent();
    }
  }

  /**
   * Post-render Updates
   */
  postRenderUpdate() {
    /**
     * The DOM is parsed after rendering to generate the accessibility identifiers used by the DataGrid's custom
     * focus implementation.
     */
    this.accessibilityStack = dataGridUtils.generateAccessibleContentIndex(this.props, this.headerCellRefs, this.sectionRefs, this.cellRefs);

    /**
     * The previous animation frame is canceled if it is still pending.
     */
    cancelAnimationFrame(this.postRenderUpdateAnimationFrame);

    this.postRenderUpdateAnimationFrame = requestAnimationFrame(() => {
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

      if (this.scrollbarRef) {
        /**
         * The height of the overflow content region must be set to hide the horizontal scrollbar for that element. It is hidden because we
         * want defer to the custom scrollbar that rendered by the DataGrid.
         */
        this.overflowedContentContainerRef.style.height = `${this.pinnedContentContainerRef.getBoundingClientRect().height}px`;
      }

      this.checkForMoreContent();
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
    this.headerScrollbarBufferRef = ref;
  }

  setHorizontalOverflowContainerRef(ref) {
    this.horizontalOverflowContainerRef = ref;
    if (this.props.horizontalOverflowContainerRefCallback) {
      this.props.horizontalOverflowContainerRefCallback(ref);
    }
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
    if (this.props.verticalOverflowContainerRefCallback) {
      this.props.verticalOverflowContainerRefCallback(ref);
    }
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
    const sectionHeaderContainers = this.dataGridContainerRef.querySelectorAll('[data-terra-clinical-data-grid-section-header-resize="true"]');

    /**
     * querySelectorAll returns a NodeList, which does not support standard iteration functions like forEach in legacy browsers.
     */
    for (let i = 0, numberOfSectionHeaders = sectionHeaderContainers.length; i < numberOfSectionHeaders; i += 1) {
      sectionHeaderContainers[i].style.width = `${width}px`;
    }
  }

  updateHeaderScrollbarBuffer() {
    const { pinnedColumnWidth } = this.state;

    if (!this.headerScrollbarBufferRef) {
      /**
       * The buffer element will not be rendered if the 'fill' prop is not provided.
       * If the ref to the buffer element does not exist, it must not be rendered, so there is no work to do here.
       */
      return;
    }

    /**
     * If there is a vertical overflow and fixed scrollbars are present (due to the presence of a mouse, etc.), the header columns
     * and content columns can move out of alignment. We need to account for the potential presence of the scrollbar and set the size of the
     * header scrollbar buffer element to equalize any differences in width.
     */
    const scrollbarOffset = this.dataGridContainerRef.clientWidth - pinnedColumnWidth - this.horizontalOverflowContainerRef.clientWidth;
    this.headerScrollbarBufferRef.style.width = `${scrollbarOffset}px`;
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

    cancelAnimationFrame(this.scrollSyncAnimationFrame);

    this.scrollSyncAnimationFrame = requestAnimationFrame(() => {
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

    cancelAnimationFrame(this.scrollSyncAnimationFrame);

    this.scrollSyncAnimationFrame = requestAnimationFrame(() => {
      this.headerOverflowContainerRef.scrollLeft = this.horizontalOverflowContainerRef.scrollLeft;

      this.updateScrollbarPosition();
    });
  }

  synchronizeScrollbar(event, data) {
    if (this.headerIsScrolling || this.contentIsScrolling) {
      return;
    }

    this.scrollbarIsScrolling = true;

    const newPosition = this.scrollbarPosition + data.deltaX;
    const scrollArea = this.horizontalOverflowContainerRef.clientWidth - this.scrollbarRef.clientWidth;

    let finalPosition;
    if (newPosition < 0) {
      finalPosition = 0;
    } else if (newPosition > scrollArea) {
      finalPosition = scrollArea;
    } else {
      finalPosition = newPosition;
    }

    this.scrollbarPosition = finalPosition;

    const positionRatio = finalPosition / scrollArea;
    const maxScrollLeft = this.horizontalOverflowContainerRef.scrollWidth - this.horizontalOverflowContainerRef.clientWidth;

    cancelAnimationFrame(this.scrollSyncAnimationFrame);

    this.scrollSyncAnimationFrame = requestAnimationFrame(() => {
      this.scrollbarRef.style.transform = `translateX(${this.scrollbarPosition}px)`;
      this.headerOverflowContainerRef.scrollLeft = maxScrollLeft * positionRatio;
      this.horizontalOverflowContainerRef.scrollLeft = maxScrollLeft * positionRatio;
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
    if (!this.scrollbarContainerRef) {
      /**
       * The scrollbar will not be rendered if the 'fill' prop is not provided.
       * If the ref to the scrollbar does not exist, it must not be rendered, so there is no work to do here.
       */
      return;
    }

    if (Math.abs(this.horizontalOverflowContainerRef.scrollWidth - this.horizontalOverflowContainerRef.getBoundingClientRect().width) < 1) {
      this.scrollbarContainerRef.setAttribute('aria-hidden', true);
    } else {
      this.scrollbarContainerRef.removeAttribute('aria-hidden');
    }
  }

  updateScrollbarPosition() {
    const { overflowColumnWidth } = this.state;

    if (!this.scrollbarRef) {
      /**
       * The scrollbar will not be rendered if the 'fill' prop is not provided.
       * If the ref to the scrollbar does not exist, it must not be rendered, so there is no work to do here.
       */
      return;
    }

    /**
     * The scrollbar width is determined by squaring the horizontal container width and dividing by the overflow value. The scrollbar cannot be larger than the container.
     */
    const scrollbarWidth = Math.min(this.horizontalOverflowContainerRef.clientWidth, (this.horizontalOverflowContainerRef.clientWidth * this.horizontalOverflowContainerRef.clientWidth) / (overflowColumnWidth));

    /**
     * The scrollbar position is determined by calculating its position within the horizontalOverflowContainerRef and applying its relative position
     * to the overall horizontal container width.
     */
    const positionRatio = this.horizontalOverflowContainerRef.scrollLeft / (this.horizontalOverflowContainerRef.scrollWidth - this.horizontalOverflowContainerRef.clientWidth);
    const position = (this.horizontalOverflowContainerRef.clientWidth - scrollbarWidth) * positionRatio;

    this.scrollbarPosition = position;
    this.scrollbarRef.style.width = `${scrollbarWidth}px`;
    this.scrollbarRef.style.transform = `translateX(${this.scrollbarPosition}px)`;
  }

  /**
   * Rendering
   */
  renderHeaderCell(columnData) {
    const columnId = columnData.id;
    const { onColumnSelect, hasResizableColumns, defaultColumnWidth } = this.props;

    /**
     * Rather than render an empty HeaderCell for the void column, we just render nothing.
     * The width of the void column is already being accounted for.
     */
    if (columnId === 'DataGrid-voidColumn') {
      return undefined;
    }

    return (
      <HeaderCell
        key={columnId}
        columnId={columnId}
        text={columnData.text}
        sortIndicator={columnData.sortIndicator}
        width={`${dataGridUtils.getWidthForColumn(columnData, defaultColumnWidth)}px`}
        isSelectable={columnData.isSelectable}
        isResizable={hasResizableColumns && columnData.isResizable}
        onResizeEnd={this.updateColumnWidth}
        onSelect={onColumnSelect}
        selectableRefCallback={(ref) => { this.headerCellRefs[columnId] = ref; }}
      >
        {columnData.component}
      </HeaderCell>
    );
  }

  renderFixedHeaderRow() {
    const {
      headerHeight,
    } = this.props;

    const {
      pinnedColumnWidth,
      overflowColumnWidth,
    } = this.state;

    return (
      <div
        className={cx(['header-container', 'fixed'])}
        style={this.generateHeaderContainerStyle(headerHeight)}
        role="row"
      >
        <div
          className={cx('pinned-header')}
          style={this.generatePinnedColumnHeaderStyle(pinnedColumnWidth, headerHeight)}
        >
          {dataGridUtils.getPinnedColumns(this.props).map(column => this.renderHeaderCell(column))}
        </div>
        <div
          className={cx('header-overflow-container')}
          ref={this.setHeaderOverflowContainerRef}
          onScroll={this.synchronizeHeaderScroll}
        >
          <div
            className={cx('overflow-header')}
            style={this.generateOverflowColumnHeaderStyle(overflowColumnWidth, headerHeight)}
          >
            {dataGridUtils.getOverflowColumns(this.props).map(column => this.renderHeaderCell(column))}
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
          data-terra-clinical-data-grid-section-header-resize={!!isPinned || undefined}
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
    const { defaultColumnWidth, columnHighlightId } = this.props;
    const cellKey = `${section.id}-${row.id}-${column.id}`;

    return (
      <RowSelectionCell
        key={cellKey}
        sectionId={section.id}
        rowId={row.id}
        columnId={column.id}
        width={`${dataGridUtils.getWidthForColumn(column, defaultColumnWidth)}px`}
        isSelectable={row.isSelectable && !row.isDecorative}
        isSelected={row.isSelected && !row.isDecorative}
        onSelect={this.props.onRowSelect}
        selectableRefCallback={(ref) => { this.cellRefs[cellKey] = ref; }}
        onHoverStart={
          () => {
            if (!row.isDecorative) {
              /**
               * Because the pinned and overflow rows are two separate elements, we need to retrieve them and add the appropriate hover styles
               * to both to ensure a consistent row styling.
               */
              const rowElements = this.dataGridContainerRef.querySelectorAll(`[data-row][data-row-id="${row.id}"][data-section-id="${section.id}"]`);
              for (let i = 0, numberOfRows = rowElements.length; i < numberOfRows; i += 1) {
                rowElements[i].classList.add(cxRow('hover'));
                if (columnHighlightId) { rowElements[i].removeAttribute('data-allow-column-highlight'); }
              }
            }
          }
        }
        onHoverEnd={
          () => {
            if (!row.isDecorative) {
              const rowElements = this.dataGridContainerRef.querySelectorAll(`[data-row][data-row-id="${row.id}"][data-section-id="${section.id}"]`);
              for (let i = 0, numberOfRows = rowElements.length; i < numberOfRows; i += 1) {
                rowElements[i].classList.remove(cxRow('hover'));
                if (columnHighlightId && !row.isSelected) { rowElements[i].setAttribute('data-allow-column-highlight', true); }
              }
            }
          }
        }
        ariaLabel={this.props.intl.formatMessage({
          id: 'Terra.data-grid.row-selection-template',
        }, {
          rowDescription: row.ariaLabel,
        })}
      />
    );
  }

  renderCell(section, row, column, isFirstRow, isLastRow, isRowHeader) {
    const { onCellSelect, defaultColumnWidth, columnHighlightId } = this.props;
    const cell = (row.cells && row.cells.find(searchCell => searchCell.columnId === column.id)) || {};
    const cellKey = `${section.id}-${row.id}-${column.id}`;
    const role = isRowHeader ? 'rowheader' : 'gridcell';

    return (
      <Cell
        key={cellKey}
        sectionId={section.id}
        rowId={row.id}
        columnId={column.id}
        width={`${dataGridUtils.getWidthForColumn(column, defaultColumnWidth)}px`}
        onSelect={onCellSelect}
        isSelectable={cell.isSelectable}
        isSelected={cell.isSelected}
        selectableRefCallback={(ref) => { this.cellRefs[cellKey] = ref; }}
        isColumnHighlighted={column.id === columnHighlightId}
        isFirstRow={isFirstRow}
        isLastRow={isLastRow}
        role={role}
      >
        {cell.component}
      </Cell>
    );
  }

  renderRow(row, section, columns, width, isPinned, isStriped, isFirstRow, isLastRow) {
    const { id, hasSelectableRows } = this.props;
    const height = row.height || this.props.rowHeight;
    /**
     * Because of the DOM structure necessary to properly render the pinned and overflow sections,
     * each 'row' of the DataGrid is actually two rows, side-by-side. However, we can use aria attributes
     * to ensure screen readers will read both rows as one contiguous row.
     */
    const ariaStyles = {};
    if (row.isDecorative) {
      ariaStyles.role = 'presentation';
      ariaStyles['aria-hidden'] = true;
    } else if (isPinned) {
      ariaStyles.id = `${id}-Pinned-Row-${row.id}-Section-${section.id}`;
      // ariaStyles['aria-owns'] = `${id}-Overflow-Row-${row.id}-Section-${section.id}`;
    } else {
      ariaStyles.id = `${id}-Overflow-Row-${row.id}-Section-${section.id}`;
    }
    const pinnedColumns = dataGridUtils.getPinnedColumns(this.props);
    const allColumns = pinnedColumns.concat(dataGridUtils.getOverflowColumns(this.props));

    return (
      <Row
        key={`${section.id}-${row.id}`}
        sectionId={section.id}
        rowId={row.id}
        width={width}
        height={height}
        isSelected={row.isSelected && !row.isDecorative}
        isStriped={isStriped}
        allowColumnHighlighting={this.props.columnHighlightId && !row.isSelected && !row.isDecorative}
        {...ariaStyles}
      >
        {columns.map((column) => {
          if (column.id === 'DataGrid-rowSelectionColumn') {
            return this.renderRowSelectionCell(section, row, column);
          }

          if (column.id === 'DataGrid-voidColumn') {
            return undefined;
          }

          let isRowHeader = false;

          if ((hasSelectableRows && column.id === allColumns[1].id) || (!hasSelectableRows && column.id === allColumns[0].id)) {
            isRowHeader = true;
          }

          return this.renderCell(section, row, column, isFirstRow, isLastRow, isRowHeader);
        })}
      </Row>
    );
  }

  renderSection(section, columns, width, isFirstRowInSection, isLastRowInSection, isPinned) {
    const { columnHighlightRowData } = this.state;

    return (
      <React.Fragment key={section.id}>
        {this.renderSectionHeader(section, isPinned)}
        {!section.isCollapsed && section.rows && section.rows.map((row, index) => (
          this.renderRow(row, section, columns, width, isPinned, !!(index % 2), (isFirstRowInSection && columnHighlightRowData.firstRowId === row.id), (isLastRowInSection && columnHighlightRowData.lastRowId === row.id))
        ))}
      </React.Fragment>
    );
  }

  renderPinnedContent() {
    const { headerHeight, fill, sections } = this.props;
    const { pinnedColumnWidth, columnHighlightRowData } = this.state;

    return (
      <React.Fragment>
        {!fill && (
          <div className={cx('header-container')} style={this.generatePinnedColumnHeaderStyle(pinnedColumnWidth, headerHeight)} role="row">
            <div className={cx('pinned-header')}>
              {dataGridUtils.getPinnedColumns(this.props).map(column => this.renderHeaderCell(column))}
            </div>
          </div>
        )}
        {sections.map((section) => (
          this.renderSection(section, dataGridUtils.getPinnedColumns(this.props), `${pinnedColumnWidth}px`, columnHighlightRowData.firstRowSectionId === section.id, columnHighlightRowData.lastRowSectionId === section.id, true)
        ))}
      </React.Fragment>
    );
  }

  renderOverflowContent() {
    const { headerHeight, fill, sections } = this.props;
    const { overflowColumnWidth, columnHighlightRowData } = this.state;

    return (
      <React.Fragment>
        {!fill && (
          <div className={cx('header-container')} style={this.generateOverflowColumnHeaderStyle(overflowColumnWidth, headerHeight)} role="row">
            <div className={cx('overflow-header')}>
              {dataGridUtils.getOverflowColumns(this.props).map(column => this.renderHeaderCell(column))}
            </div>
          </div>
        )}
        {sections.map((section) => (
          this.renderSection(section, dataGridUtils.getOverflowColumns(this.props), `${overflowColumnWidth}px`, columnHighlightRowData.firstRowSectionId === section.id, columnHighlightRowData.lastRowSectionId === section.id)
        ))}
      </React.Fragment>
    );
  }

  renderScrollbar() {
    const { pinnedColumnWidth } = this.state;

    return (
      <div className={cx('footer-container')}>
        <div
          className={cx('pinned-column-buffer')}
          style={this.generatePinnedContainerWidthStyle(pinnedColumnWidth)}
        />
        <div className={cx('scrollbar-container')}>
          <Scrollbar
            refCallback={this.setScrollbarContainerRef}
            scrollbarRefCallback={this.setScrollbarRef}
            onMove={this.synchronizeScrollbar}
            onMoveEnd={this.resetScrollbarEventMarkers}
          />
        </div>
      </div>
    );
  }

  render() {
    const {
      id,
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
      hasResizableColumns,
      defaultColumnWidth,
      fill,
      onRequestContent,
      intl,
      verticalOverflowContainerRefCallback,
      horizontalOverflowContainerRefCallback,
      columnHighlightId,
      labelRef,
      descriptionRef,
      ...customProps
    } = this.props;
    const { pinnedColumnWidth, labelText, descriptionText } = this.state;
    const theme = this.context;

    const dataGridClassnames = classNames(
      cx(
        'data-grid-container',
        { fill },
        theme.className,
      ),
      customProps.className,
    );
    const allColumns = dataGridUtils.getPinnedColumns(this.props).concat(dataGridUtils.getOverflowColumns(this.props));
    const allColumnsCount = allColumns.length;
    let rowCount = 0;
    sections.forEach(section => {
      rowCount += section.rows.length;
    });

    return (
      <div
        {...customProps}
        id={id}
        className={dataGridClassnames}
        ref={this.setDataGridContainerRef}
        role="grid"
        aria-rowcount={rowCount}
        aria-colcount={allColumnsCount}
        aria-labelledby={labelText ? `${id}-hiddenlabel` : undefined}
        aria-describedby={descriptionText ? `${id}-hiddendescription` : undefined}
      >
        {labelText ? <VisuallyHiddenText id={`${id}-hiddenlabel`} tabIndex="-1" text={labelText} /> : null}
        {descriptionText ? <VisuallyHiddenText id={`${id}-hiddendescription`} tabIndex="-1" text={descriptionText} /> : null}
        <div
          role="button"
          aria-label={intl.formatMessage({ id: 'Terra.data-grid.navigate' })}
          className={cx('leading-focus-anchor')}
          tabIndex="0"
          onFocus={this.handleLeadingFocusAnchorFocus}
          ref={this.setLeadingFocusAnchorRef}
        />
        <ContentContainer
          header={fill ? this.renderFixedHeaderRow() : undefined}
          footer={fill ? this.renderScrollbar() : undefined}
          fill={fill}
        >
          <div
            className={cx('vertical-overflow-container')}
            ref={this.setVerticalOverflowContainerRef}
            onScroll={onRequestContent ? this.checkForMoreContent : undefined}
          >
            <div
              className={cx('pinned-content-container')}
              ref={this.setPinnedContentContainerRef}
              style={this.generatePinnedContainerWidthStyle(pinnedColumnWidth)}
              role="rowgroup"
              aria-hidden={dataGridUtils.getPinnedColumns(this.props).length === 0}
            >
              {this.renderPinnedContent()}
            </div>
            <div
              className={cx('overflowed-content-container')}
              ref={this.setOverflowedContentContainerRef}
              role="rowgroup"
              aria-hidden={dataGridUtils.getOverflowColumns(this.props).length === 0}
            >
              <div
                className={cx(['horizontal-overflow-container', { 'padded-container': fill }])}
                ref={this.setHorizontalOverflowContainerRef}
                onScroll={fill ? this.synchronizeContentScroll : undefined}
              >
                {this.renderOverflowContent()}
              </div>
            </div>
          </div>
        </ContentContainer>
        <div
          role="button"
          aria-label={intl.formatMessage({ id: 'Terra.data-grid.navigate' })}
          className={cx('terminal-focus-anchor')}
          tabIndex="0"
          onFocus={this.handleTerminalFocusAnchorFocus}
          ref={this.setTerminalFocusAnchorRef}
        />
      </div>
    );
  }
}

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;
DataGrid.contextType = ThemeContext;

export default injectIntl(DataGrid);
export { ColumnSortIndicators };
