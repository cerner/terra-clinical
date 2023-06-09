import React from 'react';
import DetailView from '../../src/DetailView';

jest.mock('uuid/v4', () => () => 'dacd01de-e7d0-4e1a-a8f1-eba662631b7d');

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

it('should set the default heading level of the title to h2', () => {
  const wrapper = shallow(<DetailView title="Title" />);
  expect(wrapper.html('.primary-text')).toContain('<h2 class="primary-text" id="title-id-dacd01de-e7d0-4e1a-a8f1-eba662631b7d">Title</h2>');
});

it('should set the heading level for the title', () => {
  const wrapper = shallow(<DetailView level={3} title="Title" />);
  expect(wrapper.html('.primary-text')).toContain('<h3 class="primary-text" id="title-id-dacd01de-e7d0-4e1a-a8f1-eba662631b7d">Title</h3>');
});

it('should render a smaller title', () => {
  const detailView = <DetailView title="Header" isSmallerTitles />;
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render secondaryTitles', () => {
  const detailView = (
    <DetailView
      title="Header"
      secondaryTitles={['SecondaryTitle1', 'SecondaryTitle2']}
    />
  );
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should set the appropriate heading level for the secondary titles', () => {
  const wrapper = shallow(
    <DetailView
      title="Header"
      secondaryTitles={['SecondaryTitle1', 'SecondaryTitle2']}
      level={2}
    />,
  );
  expect(wrapper.html('.secondary-text')).toContain('<h3 class="secondary-text">SecondaryTitle1</h3>');
  expect(wrapper.html('.secondary-text')).toContain('<h3 class="secondary-text">SecondaryTitle2</h3>');
});

it('should render subtitles', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
    />
  );
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render accessory', () => {
  const detailView = (
    <DetailView
      title="Header"
      accessory={<div> This is where an accessory would go </div>}
    />
  );
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render graph', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
      graph={<div> This is where a graph would go </div>}
    />
  );
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('should render details', () => {
  const detailView = (
    <DetailView
      title="Header"
      subtitles={['Subtitle 1', 'Subtitle 2']}
      details={[<p key="DetailInformation"> Detail information </p>]}
    />
  );
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
    />
  );
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
    />
  );
  const wrapper = render(detailView);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});
