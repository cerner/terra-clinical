import React from 'react';
// import List from 'terra-list';
import ItemView from 'terra-clinical-item-view';

// function createListView(rows, listStyles) {
function createListView(rows) {
  return (
    rows.map((row, rowIndex) => {
      const contentKey = rowIndex;
      const { itemStyles, ...itemElements } = row;
      return (
        <ItemView key={contentKey} {...itemElements} {...itemStyles} />
      );
    })
  );
}

export default createListView;

// function createListView(rows, listStyles) {
//   const listContent = rows.map((row, rowIndex) => {
//     const contentKey = rowIndex;
//     const { itemStyles, ...itemElements } = row;
//     return (
//       <SingleSelectList.Item content={<ItemView key={contentKey} {...itemElements} {...itemStyles} />} key={contentKey} />
//     );
//   })
//
//   return (
//     <List {...listStyles}>
//       {listContent}
//     </List>
//
//   );
// }
