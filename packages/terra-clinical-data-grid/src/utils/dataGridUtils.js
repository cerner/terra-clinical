
/**
 * The PAGED_CONTENT_OFFSET_BUFFER represents the vertical space (in px) remaining in the vertical overflow
 * that will trigger additonal content retrieval (if onRequestContent is provided).
 */
const PAGED_CONTENT_OFFSET_BUFFER = 100;

/**
 * The Object representation of the void column. This empty column is used
 * as negative space to allow for resizing of the last overflow column.
 */
const VOID_COLUMN = {
  id: 'DataGrid-voidColumn',
  width: 150,
};

/**
 * The Object representation of the row selection column.
 */
const ROW_SELECTION_COLUMN = {
  id: 'DataGrid-rowSelectionColumn',
  width: 50,
};

/**
 * Returns an Array of HTMLElements that are children of the given 'element' parameter and have
 * the data-accessible-data-grid-content attribute defined.
 * @param {HTMLElement} element The element within which to search for accessible content.
 */
const getAccessibleContents = (element) => {
  const accessibleArray = [];
  const accessibleContentNodes = element.querySelectorAll('[data-accessible-data-grid-content]');

  for (let i = 0, numberOfNodes = accessibleContentNodes.length; i < numberOfNodes; i += 1) {
    accessibleArray.push(accessibleContentNodes[i]);
  }

  return accessibleArray;
};

/**
 * Returns the column's specified width or the default width if not width is defined.
 * @param {Object} column Object adhering to the columnData shape.
 * @param {Number} defaultColumnWidth Number (in px) indicating the default width to be used if a column's width is otherwise undefined.
 */
const getWidthForColumn = (column, defaultColumnWidth) => (column && column.width) || defaultColumnWidth;

/**
 * Returns the combined width of every column provided.
 * @param {Array} columns Array of Objects adhering to the columnData shape.
 * @param {Number} defaultColumnWidth Number (in px) indicating the default width to be used if a column's width is otherwise undefined.
 */
const getTotalColumnWidth = (columns, defaultColumnWidth) => {
  if (!columns) {
    return 0;
  }

  return columns.reduce((totalWidth, column) => totalWidth + getWidthForColumn(column, defaultColumnWidth), 0);
};

/**
 * Returns the pinned columns from the given source, including the row selection column if necessary.
 * @param {Object} props Object conforming to DataGrid's prop types.
 */
const getPinnedColumns = (props) => {
  const { pinnedColumns, hasSelectableRows } = props;

  let updatedPinnedColumns = pinnedColumns;
  if (hasSelectableRows) {
    updatedPinnedColumns = [ROW_SELECTION_COLUMN].concat(updatedPinnedColumns);
  }

  return updatedPinnedColumns;
};

/**
 * Returns the overflow columns from the given source, including the void column used for column resizing.
 * @param {Object} props Object conforming to DataGrid's prop types.
 */
const getOverflowColumns = (props) => {
  const { overflowColumns, hasResizableColumns } = props;

  if (hasResizableColumns) {
    return overflowColumns.concat([VOID_COLUMN]);
  }

  return overflowColumns;
};

/**
 * Returns true if the given element matches the given selector. Includes support for IE10.
 * @param {Element} element The element to compare against the selector.
 * @param {String} selector The selector string to test.
 */
const matchesSelector = (element, selector) => {
  if (Element.prototype.msMatchesSelector) {
    return element.msMatchesSelector(selector);
  }

  return element.matches(selector);
};

/**
 * Returns the new position and offset ratio of the scrollbar given the change in width.
 * @param {Number} scrollbarWidth The current scrollbar width.
 * @param {Number} containerWidth The width of the container in which the scrollbar is presented.
 * @param {Number} currentScrollbarPosition The current scrollbar position.
 * @param {Number} delta The desired difference in position.
 */
const calculateScrollbarPosition = (scrollbarWidth, containerWidth, currentScrollbarPosition, delta) => {
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
};

/**
 * Generates identifiers for accessible elements within the DataGrid.
 * @param {Object} props The DataGrid props.
 * @param {Object} headerCellRefs The references to accessible header cell elements.
 * @param {Object} sectionRefs The references to accessible section header elements.
 * @param {Object} cellRefs The references to accessible cell elements.
 */
const generateAccessibleContentIndex = (props, headerCellRefs, sectionRefs, cellRefs) => {
  const { sections } = props;

  const pinnedColumns = getPinnedColumns(props);
  const overflowColumns = getOverflowColumns(props);

  const orderedColumnIds = pinnedColumns.concat(overflowColumns).map(column => column.id);

  let accessibilityStack = [];

  pinnedColumns.forEach((column) => {
    const headerRef = headerCellRefs[column.id];
    if (headerRef) {
      if (column.isSelectable) {
        accessibilityStack.push(headerRef);
      }

      accessibilityStack = accessibilityStack.concat(getAccessibleContents(headerRef.parentNode));
    }
  });

  overflowColumns.forEach((column) => {
    const headerRef = headerCellRefs[column.id];

    if (headerRef) {
      if (column.isSelectable) {
        accessibilityStack.push(headerRef);
      }

      accessibilityStack = accessibilityStack.concat(getAccessibleContents(headerRef.parentNode));
    }
  });

  sections.forEach((section) => {
    const sectionRef = sectionRefs[section.id];

    if (sectionRef) {
      if (section.isCollapsible) {
        accessibilityStack.push(sectionRef);
      }

      accessibilityStack = accessibilityStack.concat(getAccessibleContents(sectionRef.parentNode));
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
        const cellRef = cellRefs[`${section.id}-${row.id}-${columnId}`];
        if (cellRef) {
          if ((cellMap[columnId] && cellMap[columnId].isSelectable) || (columnId === 'DataGrid-rowSelectionColumn' && row.isSelectable)) {
            accessibilityStack.push(cellRef);
          }

          accessibilityStack = accessibilityStack.concat(getAccessibleContents(cellRef.parentNode));
        }
      });
    });
  });

  accessibilityStack.forEach((element, index) => {
    element.setAttribute('data-accessibility-id', index);
  });

  return accessibilityStack;
};

const dataGridUtils = {
  PAGED_CONTENT_OFFSET_BUFFER,
  VOID_COLUMN,
  ROW_SELECTION_COLUMN,
  getAccessibleContents,
  getWidthForColumn,
  getTotalColumnWidth,
  getPinnedColumns,
  getOverflowColumns,
  matchesSelector,
  calculateScrollbarPosition,
  generateAccessibleContentIndex,
};

export default dataGridUtils;
export {
  PAGED_CONTENT_OFFSET_BUFFER,
  VOID_COLUMN,
  ROW_SELECTION_COLUMN,
  getAccessibleContents,
  getWidthForColumn,
  getTotalColumnWidth,
  getPinnedColumns,
  getOverflowColumns,
  matchesSelector,
  calculateScrollbarPosition,
  generateAccessibleContentIndex,
};
