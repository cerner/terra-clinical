import React from 'react';
import DetailView from '../../src/DetailView';

const defaultVariety = <DetailView />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = render(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

// Prop Tests
it('should have the class detail-view', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('detail-view');
});

it('should render a title', () => {
  const detailView = <DetailView title="Header" />;
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render subtitles', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
    />);
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render graph', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
      graph={<div> This is where a graph would go </div>}
    />);
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render details', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
      details={[<p key="DetailInformation"> Detail information </p>]}
    />);
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render footer', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
      details={[<p key="DetailInformation"> Detail information </p>]}
      footer="Footer text"
    />);
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render without a divider when indicated', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
      details={[<p key="DetailInformation"> Detail information </p>]}
      footer="Footer text"
      isDivided={false}
    />);
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});
