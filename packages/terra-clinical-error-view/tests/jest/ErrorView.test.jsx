import React from 'react';
import ErrorView from '../../src/ErrorView';

const defaultVariety = <ErrorView />;

// Snapshot Tests
it('should render a default component', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper).toMatchSnapshot();
});


// Prop Tests
it('should have the class terraClinical-ErrorView', () => {
  const wrapper = shallow(defaultVariety);
  expect(wrapper.prop('className')).toContain('terraClinical-ErrorView');
});

it('should render a name', () => {
  const errorView = <ErrorView name="test error name:" />;
  const wrapper = shallow(errorView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a description', () => {
  const errorView = <ErrorView description="test description." />;
  const wrapper = shallow(errorView);
  expect(wrapper).toMatchSnapshot();
});

it('should render a button with text', () => {
  const clickEvent = () => (true);
  const errorView = <ErrorView buttonText="test button text" buttonOnClick={clickEvent} />;
  const wrapper = shallow(errorView);
  expect(wrapper).toMatchSnapshot();
});

it('should not render a glyph', () => {
  const errorView = <ErrorView isGlyphHidden />;
  const wrapper = shallow(errorView);
  expect(wrapper).toMatchSnapshot();
});
