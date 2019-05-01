import KeyCode from 'keycode-js';
/**
 * This function ensures the correct elements are provided to create a consistent item view layout. To handle a
 * potential missing required accessory element, a boolean is provided to indicate if start accessory space is needed.
 *
 * @ param {childProps} obj - The react child props that will compose an item view list item.
 * @ param {requiredElements} obj - The boolean indicators that determine which elements should be displayed.
 */
function addMissingListElements(childProps, requiredElements) {
  const {
    hasStartAccessory, numberOfDisplays, hasComment, hasEndAccessory,
  } = requiredElements;
  const {
    startAccessory, children, comment, endAccessory,
  } = childProps;
  const itemViewPieces = {
    startAccessory: null, children: null, comment: null, endAccessory: null,
  };

  itemViewPieces.startAccessory = hasStartAccessory ? startAccessory : null;
  itemViewPieces.reserveStartAccessorySpace = hasStartAccessory;

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
 * @ param {childProps} obj - The react child props that will compose a table row.
 * @ param {requiredElements} obj - The boolean indicators that determine which elements should be displayed.
 */
function addMissingTableElements(childProps, requiredElements) {
  const {
    hasStartAccessory, numberOfDisplays, hasComment, hasEndAccessory,
  } = requiredElements;
  const {
    startAccessory, children, comment, endAccessory,
  } = childProps;
  const tableRowPieces = {
    startAccessory: null, children: null, comment: null, endAccessory: null,
  };

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

/**
 * This function creates the onClick and onKeyDown props for a selectable react child. For both the onClick and onKeyDown,
 * the first parameter returned is the event and the second parameter is the child key.
 *
 * @ param {onSelect} func - he callback function that is assigned as to a child's onClick and onKeyDown.
 * @ param {key} string - The react child's key value.
 */
function createOnSelectProps(onSelect, key) {
  const selectableProps = {};

  if (!key && process.env.NODE_ENV !== 'production') {
    /* eslint-disable no-console */
    console.warn('Keys are required for correct onSelect implementation.');
    /* eslint-disable no-console */
  }

  selectableProps.onClick = (event) => {
    onSelect(event, key);
  };

  selectableProps.onKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
      onSelect(event, key);
    }
  };

  return selectableProps;
}

const ItemCollectionUtils = {
  addMissingListElements,
  addMissingTableElements,
  createOnSelectProps,
};

export default ItemCollectionUtils;
