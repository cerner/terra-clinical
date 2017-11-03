import React from 'react';
import ItemCollection from '../../src/ItemCollection';
import ListView from '../../src/_ListView';

const defaultRequiredElements = { startAccessoryRequired: true, displaysRequired: 8, commentRequired: true, endAccessoryRequired: true };

it('should render a default ListView', () => {
  const item = (<ListView />);
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});

it('should render a ListView with children', () => {
  const item = (
    <ListView requiredElements={defaultRequiredElements}>
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </ListView>
  );
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});

it('should render a ListView with list styles', () => {
  const item = (
    <ListView requiredElements={defaultRequiredElements} listStyles={{ isDivided: true }}>
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </ListView>
  );
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});
