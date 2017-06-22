import React from 'react';
import ItemView from 'terra-clinical-item-view';
import ItemCollection from '../../src/ItemCollection';

const item = {
  startAccessory: <p>Start Accessory</p>,
  displays: [<ItemView.Display text="Display 1" />, <ItemView.Display text="Display 2" />],
  comment: <ItemView.Comment text="test comment" />,
  endAccessory: <p>End Accessory</p>,
};

// Snapshot Tests
it('should render a default component', () => {
  const itemCollection = shallow(<ItemCollection />);
  expect(itemCollection).toMatchSnapshot();
});

it('should render with one row', () => {
  const itemCollection = shallow(<ItemCollection rows={[item]} />);
  expect(itemCollection).toMatchSnapshot();
});

it('should render with multiple rows', () => {
  const itemCollection = shallow(<ItemCollection rows={[item, item, item]} />);
  expect(itemCollection).toMatchSnapshot();
});

it('should render with a given breakpoint', () => {
  const itemCollection = shallow(<ItemCollection breakpoint="medium" rows={[item, item, item]} />);
  expect(itemCollection).toMatchSnapshot();
});
