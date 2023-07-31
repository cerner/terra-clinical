import React from 'react';
import DetailView from '../../src/DetailView';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const defaultVariety = (
  <DetailView.DetailList title="Title">
    <DetailView.DetailListItem item={<p>Test</p>} />
  </DetailView.DetailList>
);

const labelValuePairList = (
  <DetailView.DetailList title="Title" isLabelValuePairList>
    <DetailView.DetailListItem item={(
      <>
        <dt>label</dt>
        <dd>value</dd>
      </>
 )} />
  </DetailView.DetailList>
);

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
    </DetailView.DetailList>
  );
  const wrapper = render(detailList);
  expect(wrapper).toMatchSnapshot();
});

it('should render a list when null is passed', () => {
  const detailList = (
    <DetailView.DetailList>
      <DetailView.DetailListItem item={<p>Test</p>} />
      {null}
    </DetailView.DetailList>
  );
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

it('should set the heading level for the title', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.html('.title')).toContain('<h2 class="title" id="list-title-id-00000000-0000-0000-0000-000000000000">Title</h2>');
});

it('should render a description list when isLabelValuePairList is true', () => {
  const wrapper = render(labelValuePairList);
  const shallowWrapper = shallow(labelValuePairList);
  expect(shallowWrapper.find('.list').last().type()).toEqual('dl');
  expect(wrapper).toMatchSnapshot();
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

it('should have the appropriate aria-labelledby value when title is provided and isLabelValuePairList is false', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.childAt(1).prop('aria-labelledby')).toEqual('list-title-id-00000000-0000-0000-0000-000000000000');
});

it('should have the appropriate aria-labelledby value when title is provided and isLabelValuePairList is true', () => {
  const wrapper = shallow(labelValuePairList);
  expect(wrapper.childAt(1).prop('aria-labelledby')).toEqual('list-title-id-00000000-0000-0000-0000-000000000000');
});
