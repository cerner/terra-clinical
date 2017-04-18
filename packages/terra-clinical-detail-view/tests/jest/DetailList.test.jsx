import React from 'react';
import DetailView from '../../src/DetailView';

const defaultVariety = (
  <DetailView.DetailList title="Title">
    <DetailView.DetailListItem item={<p>Test</p>} />
  </DetailView.DetailList>);

// Snapshot Tests
it('should render a default component', () => {
  const detailList = <DetailView.DetailList />;
  const wrapper = shallow(detailList);
  expect(wrapper).toMatchSnapshot();
});

it('should render a title', () => {
  const detailList = <DetailView.DetailList title="Title" />;
  const wrapper = shallow(detailList);
  expect(wrapper).toMatchSnapshot();
});

it('should render a list', () => {
  const detailList = (
    <DetailView.DetailList>
      <DetailView.DetailListItem item={<p>Test</p>} />
      <DetailView.DetailListItem item={<p>Test</p>} />
    </DetailView.DetailList>);
  const wrapper = shallow(detailList);
  expect(wrapper).toMatchSnapshot();
});


it('should render a title and a list', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should set the title text', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.find('.terraClinical-DetailList-title').text()).toEqual('Title');
});

// Structure Tests
it('should have the class terraClinical-DetailList', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terraClinical-DetailList');
});

it('should have the class terraClinical-DetailList-title when title is provided', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.childAt(0).prop('className')).toContain('terraClinical-DetailList-title');
});

it('should have the class terraClinical-DetailList-list', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.childAt(1).prop('className')).toContain('terraClinical-DetailList-list');
});
