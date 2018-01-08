import React from 'react';
import Display from '../../src/ItemDisplay';

// Snapshot Tests
it('should render a default component', () => {
  const itemDisplay = shallow(<Display />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text', () => {
  const itemDisplay = shallow(<Display text="Display" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with a graphic', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallow(<Display icon={graphic} />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text and graphic', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallow(<Display text="Display" icon={graphic} />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a truncated display', () => {
  const itemDisplay = shallow(<Display text="display1display1display1display1display1display1display1display1" isTruncated />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the attention textStyle on text', () => {
  const itemDisplay = shallow(<Display text="Display" textStyle="attention" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the secondary textStyle on text', () => {
  const itemDisplay = shallow(<Display text="Display" textStyle="secondary" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the strikeThrough textStyle on text', () => {
  const itemDisplay = shallow(<Display text="Display" textStyle="strikeThrough" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the strong textStyle on text', () => {
  const itemDisplay = shallow(<Display text="Display" textStyle="strong" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the disabled textStyle on text', () => {
  const itemDisplay = shallow(<Display text="Display" textStyle="disabled" />);
  expect(itemDisplay).toMatchSnapshot();
});
