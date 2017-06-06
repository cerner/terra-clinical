import React from 'react';
import ItemCollection from '../../../lib/ItemCollection';
import item from './Item';

class OnChangeItemCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: null };
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
          rows={[item, item, item, item]}
          onChange={this.handleSelection}
        />
      </div>
    );
  }
}

export default OnChangeItemCollection;
