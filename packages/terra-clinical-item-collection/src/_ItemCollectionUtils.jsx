const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

/**
 * This function ensures the correct elements are provided to create a consistent item view layout. To handle a
 * potential missing required accessory element, a boolean is provided to indicate if start accessory space is needed.
 *
 * @ param {childElement} obj - The react child props that will compose an item view list item.
 * @ param {requiredElements} obj - The elements expected to be displayed.
 */
function addMissingListElements(childElements, requiredElements) {
  const { hasStartAccessory, numberOfDisplays, hasComment, hasEndAccessory } = requiredElements;
  const { startAccessory, children, comment, endAccessory } = childElements;
  const itemViewPieces = { startAccessory: null, children: null, comment: null, endAccessory: null };

  itemViewPieces.startAccessory = hasStartAccessory ? startAccessory : null;
  itemViewPieces.hasStartAccessory = hasStartAccessory;

  let displayContent = [];
  if (numberOfDisplays > 0 && children) {
    // Checks if its an array of React Children or single React Child
    displayContent = children.length ? children.slice(0, numberOfDisplays) : children;
  }
  itemViewPieces.children = displayContent;

  itemViewPieces.comment = hasComment ? comment : null;
  itemViewPieces.endAccessory = hasEndAccessory ? endAccessory : null;

  return itemViewPieces;
}

/**
 * This function ensures the correct elements are provided to create a consistent table row layout. If a required
 * element is missing, an empty div is provided as cell content.
 *
 * @ param {childElement} obj - The react child props that will compose a table row.
 * @ param {requiredElements} obj - The elements expected to be displayed.
 */
function addMissingTableElements(childElements, requiredElements) {
  const { hasStartAccessory, numberOfDisplays, hasComment, hasEndAccessory } = requiredElements;
  const { startAccessory, children, comment, endAccessory } = childElements;
  const tableRowPieces = { startAccessory: null, children: null, comment: null, endAccessory: null };

  if (hasStartAccessory) {
    tableRowPieces.startAccessory = startAccessory || ' ';
  }

  let displayContent = [];
  if (numberOfDisplays > 0) {
    if (children) {
      // Checks if its an array of React Children or single React Child
      displayContent = children.length ? children.slice(0, numberOfDisplays) : [children];
    }
    while (displayContent.length < numberOfDisplays) {
      displayContent.push(' ');
    }
  }
  tableRowPieces.children = displayContent;

  if (hasComment) {
    tableRowPieces.comment = comment || ' ';
  }

  if (hasEndAccessory) {
    tableRowPieces.endAccessory = endAccessory || ' ';
  }

  return tableRowPieces;
}

const ItemCollectionUtils = {
  addMissingListElements,
  addMissingTableElements,
  KEYCODES,
};

export default ItemCollectionUtils;
