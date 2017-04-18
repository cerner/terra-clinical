import React from 'react';
import DetailView from '../../src/DetailView';

const defaultVariety = <DetailView.DetailListItem item={<p>Test</p>} />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

// Structure Tests
it('should have the class terraClinical-DetailListItem', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terraClinical-DetailList');
});
