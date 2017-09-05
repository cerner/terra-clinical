import React from 'react';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import ItemView from 'terra-clinical-item-view';
import styles from './ItemCollection.scss';

function createListView(rows, listStyles, selectedIndex, handleSelection) {
  const numberOfDisplays = rows[0].displays.length;

  const listContent = rows.map((row, rowIndex) => {
    const { startAccessory, displays, comment, endAccessory, itemStyles } = row;

    const startAccessoryContent = <div className={styles['list-accessory']}>{startAccessory}</div>;
    const displayContent = numberOfDisplays ? displays.slice(0, numberOfDisplays) : null;
    const endAccessoryContent = <div className={styles['list-accessory']}>{endAccessory}</div>;

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
