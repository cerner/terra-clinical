import React from 'react';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import ItemView from 'terra-clinical-item-view';
import determineElements from './_DetermineElements';
import styles from './ItemCollection.scss';

function createListView(rows, listStyles, selectedIndex, handleSelection) {
  const itemElements = determineElements(rows[0]);
  const { startAccessoryElement, displayElements, endAccessoryElement } = itemElements;

  const listContent = rows.map((row, rowIndex) => {
    const { startAccessory, displays, comment, endAccessory, itemStyles } = row;

    let startAccessoryContent;
    if (startAccessoryElement) {
      startAccessoryContent = <div className={styles['list-accessory']}>{startAccessory}</div>;
    }

    const displayContent = displayElements ? displays.slice(0, displayElements) : null;

    let endAccessoryContent;
    if (endAccessoryElement) {
      endAccessoryContent = <div className={styles['list-accessory']}>{endAccessory}</div>;
    }

    const selected = rowIndex === selectedIndex;
    const contentKey = rowIndex;

    const listItemContent = (
      <ItemView
        startAccessory={startAccessoryContent}
        displays={displayContent}
        comment={comment}
        endAccessory={endAccessoryContent}
        {...itemStyles}
      />
    );
    return (
      <SingleSelectList.Item key={contentKey} content={listItemContent} isSelected={selected} />
    );
  });

  return (
    <SingleSelectList onChange={handleSelection} {...listStyles}>
      {listContent}
    </SingleSelectList>
  );
}

export default createListView;
