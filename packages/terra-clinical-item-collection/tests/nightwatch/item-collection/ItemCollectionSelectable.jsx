import React from 'react';
import ItemCollection from '../../../src/ItemCollection';

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

class DefaultItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItemKey: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedItemKey) {
    if (event.nativeEvent.type === 'click') {
      this.setState({ selectedItemKey });
    } else if (event.nativeEvent.type === 'keydown') {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
        this.setState({ selectedItemKey });
      }
    }
  }

  render() {
    const requiredElements = { startAccessoryRequired: true, displaysRequired: 3, commentRequired: true, endAccessoryRequired: true };

    return (
      <div>
        <h3>This a POC Selectable ItemCollection Example.</h3>
        <p>This example it set up to be a sinlge-selection example, however the Item Colleciton
           gives implementors the flexibilty to create their own selection implementation. </p>
        <p id="selected-key"> Selected Item: {this.state.selectedItemKey} </p>
        <ItemCollection onSelect={this.handleSelection} id="ItemCollection" requiredElements={requiredElements} breakpoint="medium">
          <ItemCollection.Item
            id="item1"
            key="1"
            isSelectable
            isSelected={this.state.selectedItemKey === '1'}
            startAccessory={<ItemCollection.Comment />}
            comment={<ItemCollection.Comment text="test comment" />}
            endAccessory={<ItemCollection.Comment />}
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
            endAccessory={<ItemCollection.Comment />}
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

//
// To Create a Selectable Item Collection:
// - Add TabIndex to Each Item for Navigation
// - Add isSelectable to Each Item to indicate if it is selectable
// - Add onClick and
