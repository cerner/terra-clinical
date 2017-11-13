import React from 'react';
import ItemCollection from '../../src/ItemCollection';
import TableView from '../../src/_TableView';

const defaultRequiredElements = { hasStartAccessory: true, numberOfDisplays: 8, hasComment: true, hasEndAccessory: true };

it('should render a default TableView', () => {
  const item = (<TableView requiredElements={defaultRequiredElements} />);
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});

it('should render a TableView with children', () => {
  const item = (
    <TableView requiredElements={defaultRequiredElements}>
      <ItemCollection.Item startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </TableView>
  );
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});

it('should render a TableView with table styles', () => {
  const item = (
    <TableView requiredElements={defaultRequiredElements} isTablePadded isTableStriped>
      <ItemCollection.Item key="1" startAccessory={<p>S</p>} comment={<ItemCollection.Comment text="test comment" />} endAccessory={<p>E</p>}>
        <ItemCollection.Display text="Display 1" />
      </ItemCollection.Item>
    </TableView>
  );
  const component = shallow(item);
  expect(component).toMatchSnapshot();
});
