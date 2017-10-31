import React from 'react';
import ItemView from 'terra-clinical-item-view';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

const selectedItem = {
  startAccessory: <p>S</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />, <ItemView.Display text="Display 3" />],
  comment: <ItemView.Comment text="test comment" />,
  endAccessory: <p>E</p>,
  isSelected: true,
};

class OnChangeItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 2 };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    return (
      <div>
        <div id="selected-index">
          <h3>Selected Item: {this.state.selectedIndex}</h3>
        </div>
        <ItemCollection
          rows={[item, item, selectedItem, item]}
          onChange={this.handleSelection}
          id="ItemCollection"
        />
      </div>
    );
  }
}

export default OnChangeItemCollection;
