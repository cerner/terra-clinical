import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import Item from './Item';
import Utils from './_ItemCollectionUtils';

const propTypes = {
  /**
   * The items be rendered as a list item.
   */
  children: PropTypes.node,
  /**
   * The callback function that is assigned as to a child's onClick and onKeyDown callback if the child isSelectable.
   */
  onSelect: PropTypes.func,
  /**
   * Whether or not the list items should be divided.
   */
  isListDivided: PropTypes.bool,
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to
   * maintain the provided layout.
   */
  requiredElements: PropTypes.shape({
    hasStartAccessory: PropTypes.bool,
    numberOfDisplays: PropTypes.number,
    hasComment: PropTypes.bool,
    hasEndAccessory: PropTypes.bool,
  }),
};

function createListItems(children, onSelect, requiredElements) {
  return React.Children.map(children, (child) => {
    if (child.type === Item) {
      const itemViewPieces = Utils.addMissingListElements(child.props, requiredElements);
      return React.cloneElement(child, { view: 'list', itemKey: child.key, onSelect, ...itemViewPieces });
    }

    return child;
  });
}

const ListView = ({ children, onSelect, isListDivided, requiredElements }) => {
  const listItems = createListItems(children, onSelect, requiredElements);

  return (
    <List data-terra-clinical-item-collection-list-view isDivided={isListDivided} >
      {listItems}
    </List>
  );
};

ListView.propTypes = propTypes;

export default ListView;
