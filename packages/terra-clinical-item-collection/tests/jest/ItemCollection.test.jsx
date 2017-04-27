import React from 'react';
import ItemCollection from '../../src/ItemCollection';

// Snapshot Tests
it('should render a default component', () => {
  const itemCollection = shallow(<ItemCollection />);
  expect(itemCollection).toMatchSnapshot();
});

// Structure Tests
it('should have the class terraClinical-ItemCollection', () => {
  const itemCollection = shallow(<ItemCollection />);
  expect(itemCollection.prop('className')).toContain('terraClinical-ItemCollection');
});

it('should have the inital class terraClinical-ItemCollection--tableView', () => {
  const itemCollection = shallow(<ItemCollection />);
  expect(itemCollection.prop('className')).toContain('terraClinical-ItemCollection--tableView');
});
