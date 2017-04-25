import React from 'react';
// import List from 'terra-list';
import ItemView from 'terra-clinical-item-view';

function createListView(rows, itemStyles) {
  return (
    rows.map((row, rowIndex) => {
      const contentKey = rowIndex;
      return (
        <ItemView key={contentKey} {...row} {...itemStyles} />
      );
    })
  );
}

export default createListView;

// function createListView(rows, itemStyles) {
//   const listContent = rows.map((row, rowIndex) => {
//     const contentKey = rowIndex;
//     return (
//       <SingleSelectList.Item content={<ItemView {...row} {...itemStyles} />} key={contentKey} />
//     );
//   })
//
//   return (
//     <List>
//       {listContent}
//     </List>
//
//   );
// }
