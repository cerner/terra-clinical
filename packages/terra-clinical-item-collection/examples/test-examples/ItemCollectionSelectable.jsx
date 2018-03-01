import React from 'react';
import ItemCollection from '../../lib/ItemCollection';

class DefaultItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItemKey: '1' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedItemKey) {
    this.setState({ selectedItemKey });
  }

  render() {
    return (
      <div>
        <h3>This a POC Selectable ItemCollection Example.</h3>
        <p>This example it set up to be a single-selection example, however the Item Collection
           gives implementors the flexibilty to create their own selection implementation. </p>
        <p id="selected-key"> Selected Item: {this.state.selectedItemKey} </p>
        <ItemCollection
          id="ItemCollection"
          onSelect={this.handleSelection}
          hasStartAccessory
          numberOfDisplays={3}
          hasComment
          hasEndAccessory
          breakpoint="medium"
        >
          <ItemCollection.Item
            id="item1"
            key="1"
            isSelectable
            isSelected={this.state.selectedItemKey === '1'}
            startAccessory={<ItemCollection.Comment />}
            comment={<ItemCollection.Comment text="test comment" />}
            endAccessory={<button size="medium">Disclose</button>}
            showListItemChevron
          >
            <ItemCollection.Display text="Display 1" />
            <ItemCollection.Display text="Display 1" />
            <ItemCollection.Display text="Display 2" />
          </ItemCollection.Item>
          <ItemCollection.Item
            id="item2"
            key="2"
            isSelected={this.state.selectedItemKey === '2'}
            isSelectable
            comment={<ItemCollection.Comment text="test comment" />}
            endAccessory={<button size="medium">Disclose</button>}
            showListItemChevron
          >
            <ItemCollection.Display text="Display 1" />
            <ItemCollection.Display text="Display 1" />
            <ItemCollection.Display text="Display 2" />
          </ItemCollection.Item>
          <ItemCollection.Item
            id="item3"
            key="3"
            isSelected={this.state.selectedItemKey === '3'}
            isSelectable
            startAccessory={<ItemCollection.Comment />}
            comment={<ItemCollection.Comment text="test comment" />}
          >
            <ItemCollection.Display text="Display 1" />
            <ItemCollection.Display text="Display 1" />
            <ItemCollection.Display text="Display 2" />
          </ItemCollection.Item>
        </ItemCollection>
      </div>
    );
  }
}

export default DefaultItemCollection;
