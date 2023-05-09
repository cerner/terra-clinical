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

it('should render with text and graphic center aligned', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallow(<Display text="Display" icon={graphic} iconAlignment="center" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text and graphic top aligned', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallow(<Display text="Display" icon={graphic} iconAlignment="top" />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text and graphic inline aligned', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallow(<Display text="Display" icon={graphic} iconAlignment="inline" />);
  expect(itemDisplay).toMatchSnapshot();
});

// TODO: remove this test in the next major release.
it('should render disabled display with text and graphic', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallow(<Display text="Display" icon={graphic} isDisabled />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a truncated display', () => {
  const itemDisplay = shallow(<Display text="display1display1display1display1display1display1display1display1" isTruncated />);
  expect(itemDisplay).toMatchSnapshot();
});

// TODO: remove this test in the next major release.
it('should render a disabled display', () => {
  const itemDisplay = shallow(<Display text="Display" isDisabled />);
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the primary textStyle on text', () => {
  const itemDisplay = shallow(<Display text="Display" textStyle="primary" />);
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

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallow(<Display text="Display" />);
  expect(wrapper).toMatchSnapshot();
});
