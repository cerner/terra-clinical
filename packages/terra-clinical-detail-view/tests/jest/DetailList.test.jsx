import React from 'react';
import DetailView from '../../src/DetailView';

const defaultVariety = (
  <DetailView.DetailList title="Title">
    <DetailView.DetailListItem item={<p>Test</p>} />
  </DetailView.DetailList>);

// Snapshot Tests
it('should render a default component', () => {
  const detailList = <DetailView.DetailList />;
  const wrapper = render(detailList);
  expect(wrapper).toMatchSnapshot();
});

it('should render a title', () => {
  const detailList = <DetailView.DetailList title="Title" />;
  const wrapper = render(detailList);
  expect(wrapper).toMatchSnapshot();
});

it('should render a list', () => {
  const detailList = (
    <DetailView.DetailList>
      <DetailView.DetailListItem item={<p>Test</p>} />
      <DetailView.DetailListItem item={<p>Test</p>} />
    </DetailView.DetailList>);
  const wrapper = render(detailList);
  expect(wrapper).toMatchSnapshot();
});


it('should render a title and a list', () => {
  const wrapper = render(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should set the title text', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.find('.title').text()).toEqual('Title');
});

// Structure Tests
it('should have the class title when title is provided', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.childAt(0).prop('className')).toContain('title');
});

it('should have the class list', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.childAt(1).prop('className')).toContain('list');
});
