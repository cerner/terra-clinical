import React from 'react';
import DetailView from '../../src/DetailView';

const defaultVariety = <DetailView.DetailListItem item={<p>Test</p>} />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = render(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

// Structure Tests
it('should have the class detail-list-item', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('detail-list-item');
});
