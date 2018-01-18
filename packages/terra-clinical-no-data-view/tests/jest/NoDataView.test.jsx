import React from 'react';
import NoDataView from '../../src/NoDataView';

const defaultVariety = <NoDataView />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = render(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class no-data-view', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('no-data-view');
});

it('should render a heading', () => {
  const noDataView = <NoDataView heading="test heading" />;
  const wrapper = render(noDataView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a subtext', () => {
  const noDataView = <NoDataView subtext="test subtext." />;
  const wrapper = render(noDataView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a with subtext content', () => {
  const noDataView = <NoDataView subtextContent={<p>test subtextContent</p>} />;
  const wrapper = render(noDataView);
  expect(wrapper).toMatchSnapshot();
});

it('should not render a glyph', () => {
  const noDataView = <NoDataView isGlyphHidden />;
  const wrapper = render(noDataView);
  expect(wrapper).toMatchSnapshot();
});
