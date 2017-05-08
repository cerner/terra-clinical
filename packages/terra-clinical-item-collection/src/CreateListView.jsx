import React from 'react';
import SingleSelectList from 'terra-list/lib/SingleSelectList';
import ItemView from 'terra-clinical-item-view';

function createListView(rows, listStyles) {
  const listContent = rows.map((row, rowIndex) => {
    const contentKey = rowIndex;
    const { itemStyles, ...itemElements } = row;
    const listItemContent = <ItemView {...itemElements} {...itemStyles} />;
    return (
      <SingleSelectList.Item key={contentKey} content={listItemContent} isSelectable />
    );
  });

  return (
    <SingleSelectList {...listStyles}>
      {listContent}
    </SingleSelectList>

  );
}

export default createListView;
