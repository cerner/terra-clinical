import React from 'react';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import ItemView from 'terra-clinical-item-view';

function createListView(rows, listStyles, selectedIndex, handleSelection) {
  const listContent = rows.map((row, rowIndex) => {
    const selected = rowIndex === selectedIndex;
    const contentKey = rowIndex;
    const { itemStyles, isSelected, ...itemElements } = row;
    const listItemContent = <ItemView {...itemElements} {...itemStyles} />;
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
