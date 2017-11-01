const maxDisplays = 8;

/**
 * This function ensures the correct elements are provided to create a consistent item view layout. To handle a
 * potential missing required accessory element, a boolean indicator is provided to single accessory space is needed.
 *
 * @ param {childElement} obj - The react child props that will compose an item view list item.
 * @ param {requiredElements} obj - The elements expected to be displayed.
 */
function addAnyMissingListElements(childElements, requiredElements) {
  const { startAccessoryRequired, displaysRequired, commentRequired, endAccessoryRequired } = requiredElements;
  const { startAccessory, children, comment, endAccessory } = childElements;
  const itemViewPieces = { startAccessory: null, children: null, comment: null, endAccessory: null };

  itemViewPieces.startAccessory = startAccessoryRequired ? startAccessory : null;
  itemViewPieces.hasStartAccessory = startAccessoryRequired;

  let displayContent;
  if (displaysRequired) {
    const numberOfDisplays = displaysRequired < maxDisplays ? displaysRequired : maxDisplays;
    displayContent = children ? children.slice(0, numberOfDisplays) : null;
  }
  itemViewPieces.children = displayContent;

  itemViewPieces.comment = commentRequired ? comment : null;
  itemViewPieces.endAccessory = endAccessoryRequired ? endAccessory : null;
  itemViewPieces.hasEndAccessory = endAccessoryRequired;

  return itemViewPieces;
}

/**
 * This function ensures the correct elements are provided to create a consistent table row layout. If a required
 * element is missing, an empty div is provided as cell content.
 *
 * @ param {childElement} obj - The react child props that will compose a table row.
 * @ param {requiredElements} obj - The elements expected to be displayed.
 */
function addAnyMissingTableElements(childElements, requiredElements) {
  const { startAccessoryRequired, displaysRequired, commentRequired, endAccessoryRequired } = requiredElements;
  const { startAccessory, children, comment, endAccessory } = childElements;
  const tableRowPieces = { startAccessory: null, children: null, comment: null, endAccessory: null };

  if (startAccessoryRequired) {
    tableRowPieces.startAccessory = ' ';
    if (startAccessory) {
      tableRowPieces.startAccessory = startAccessory;
    }
  }

  let displayContent = [];
  if (displaysRequired) {
    const numberOfDisplays = displaysRequired < maxDisplays ? displaysRequired : maxDisplays;
    displayContent = children ? children.slice(0, numberOfDisplays) : null;
    while (displayContent.length < numberOfDisplays) {
      displayContent.push(' ');
    }
  }
  tableRowPieces.children = displayContent;

  if (commentRequired) {
    tableRowPieces.comment = ' ';
    if (comment) {
      tableRowPieces.comment = comment;
    }
  }

  if (endAccessoryRequired) {
    tableRowPieces.endAccessory = ' ';
    if (endAccessory) {
      tableRowPieces.endAccessory = endAccessory;
    }
  }

  return tableRowPieces;
}

/**
 * Returns the total number of required elements.
 *
 * @ param {requiredElements} obj - The elements expected to be displayed.
 */
function numberOfElements(requiredElements) {
  const { startAccessoryRequired, displaysRequired, commentRequired, endAccessoryRequired } = requiredElements;

  let elementCount = 0;
  elementCount += startAccessoryRequired ? 1 : 0;
  if (displaysRequired) {
    const numberOfDisplays = displaysRequired < maxDisplays ? displaysRequired : maxDisplays;
    elementCount += numberOfDisplays;
  }
  elementCount += commentRequired ? 1 : 0;
  elementCount += endAccessoryRequired ? 1 : 0;

  return elementCount;
}

const ItemCollectionUtils = {
  addAnyMissingListElements,
  addAnyMissingTableElements,
  numberOfElements,
};

export default ItemCollectionUtils;
