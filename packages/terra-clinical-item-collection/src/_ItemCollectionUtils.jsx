import React from 'react';
import styles from './ItemCollection.scss';

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

  const startAccessoryContent = {};
  if (startAccessoryRequired) {
    startAccessoryContent.startAccessory = startAccessory;
    startAccessoryContent.hasStartAccessory = startAccessory === true;
  }

  let displayContent;
  if (displaysRequired) {
    const numberOfDisplays = displaysRequired < maxDisplays ? displaysRequired : maxDisplays;
    displayContent = children ? children.slice(0, numberOfDisplays) : null;
  }

  const commentContent = commentRequired ? comment : null;

  const endAccessoryContent = {};
  if (endAccessoryRequired) {
    startAccessoryContent.endAccessory = endAccessory;
    startAccessoryContent.hasEndAccessory = endAccessory === true;
  }

  return { ...startAccessoryContent, children: displayContent, comment: commentContent, ...endAccessoryContent };
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

  let startAccessoryContent;
  if (startAccessoryRequired) {
    startAccessoryContent = <div className={styles['table-accessory']}>{startAccessory}</div>;
  }

  let displayContent = [];
  if (displaysRequired) {
    const numberOfDisplays = displaysRequired < maxDisplays ? displaysRequired : maxDisplays;
    displayContent = React.Children.map(children, (display, index) => {
      if (index < numberOfDisplays) {
        return <div className={styles['table-display']}>{display}</div>;
      }
      return null;
    });
    // Ensure the correct number to table cells are created if the number of displays provided are fewer than
    // than the display columns expected.
    while (displayContent.length < numberOfDisplays) {
      displayContent.push(<div className={styles['table-display']} />);
    }
  }

  let commentContent;
  if (commentRequired) {
    commentContent = <div className={styles['table-comment']}>{comment}</div>;
  }

  let endAccessoryContent;
  if (endAccessoryRequired) {
    endAccessoryContent = <div className={styles['table-accessory']}>{endAccessory}</div>;
  }

  return { startAccessory: startAccessoryContent, children: displayContent, comment: commentContent, endAccessory: endAccessoryContent };
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
