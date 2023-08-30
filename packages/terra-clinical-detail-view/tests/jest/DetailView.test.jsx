import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import DetailView from '../../src/DetailView';

let mockSpyUuid;

beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

const defaultVariety = <DetailView />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = render(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});

it('should render a detail-view component with title', () => {
  const wrapper = shallow(<DetailView title="Detail view with Title" />);
  expect(wrapper.html('.titles-section')).toContain('<h2 class="primary-text" id="title-id-00000000-0000-0000-0000-000000000000">Detail view with Title</h2>');
  expect(wrapper).toMatchSnapshot();
});

it('should render a detail-view component with secondaryTitle', () => {
  const wrapper = shallow(<DetailView secondaryTitles={['Sodium bicarbonate 8.4% 50 mL', 'Dextrose 5% in Water 1000 mL']} />);
  expect(wrapper.html('.titles-section')).toContain('<h2 class="secondary-text">Sodium bicarbonate 8.4% 50 mL</h2><h2 class="secondary-text">Dextrose 5% in Water 1000 mL</h2>');
  expect(wrapper).toMatchSnapshot();
});

it('should render a detail-view component with subTitle', () => {
  const wrapper = shallow(<DetailView subtitles={['30 mg, Oral']} />);
  expect(wrapper.html('.titles-section')).toContain('<p class="subtitle">30 mg, Oral</p>');
  expect(wrapper).toMatchSnapshot();
});

it('should render a detail-view component with accessory', () => {
  const wrapper = shallow(<DetailView accessory={(
    <div className="text-aceesory">
      Ordered
    </div>
  )}
  />);
  expect(wrapper.html('.titles-section')).toContain('<div class="accessory"><div class="text-aceesory">Ordered</div></div>');
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
  expect(wrapper.html('.primary-text')).toContain('<h2 class="primary-text" id="title-id-00000000-0000-0000-0000-000000000000">Title</h2>');
});

it('should set the heading level for the title', () => {
  const wrapper = shallow(<DetailView level={3} title="Title" />);
  expect(wrapper.html('.primary-text')).toContain('<h3 class="primary-text" id="title-id-00000000-0000-0000-0000-000000000000">Title</h3>');
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
