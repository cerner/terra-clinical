import React from 'react';
import PropTypes from 'prop-types';
import List from 'terra-list';
import Item from './Item';
import Header from './Header';
import Utils from './_ItemCollectionUtils';

const propTypes = {
  /**
   * The items be rendered as a list item.
   */
  children: PropTypes.node,
  /**
   * A callback event that will be triggered when selection state changes.
   */
  onChange: PropTypes.func,
  /**
   * The styles to spread to the list. List style options are isDivided and hasChevrons.
   */
  listStyles: PropTypes.shape({
    isDivided: PropTypes.bool,
    hasChevrons: PropTypes.bool,
  }),
  /**
   * The elements expected to be displayed. If a child is missing an element, ItemCollection will allocate space to maintain the provided layout.
   */
  requiredElements: PropTypes.shape({
    startAccessory: PropTypes.bool,
    displays: PropTypes.Number,
    comment: PropTypes.bool,
    endAccessory: PropTypes.bool,
  }),
};

function createListItems(children, requiredElements) {
  return React.Children.map(children, (child, index) => {
    if (child.type === Item) {
      const itemViewPieces = requiredElements ? Utils.addAnyMissingListElements(child.props, requiredElements) : { children: child.props.children };
      return React.cloneElement(child, { view: 'list', index, ...itemViewPieces });
    }

    if (child.type === Header) {
      return React.cloneElement(child, { view: 'list' });
    }

    return child;
  });
}

const ListView = ({ children, onChange, listStyles, requiredElements }) => {
  const listItems = createListItems(children, requiredElements);

  return (
    <List {...listStyles} onChange={onChange}>
      {listItems}
    </List>
  );
};

ListView.propTypes = propTypes;

export default ListView;
