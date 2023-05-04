import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Display from '../../src/ItemDisplay';

// Snapshot Tests
it('should render a default component', () => {
  const itemDisplay = shallowWithIntl(<Display />).shallow();
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" />).shallow();
  expect(itemDisplay.find('.text').prop('children')).toEqual('Display');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with a graphic', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallowWithIntl(<Display icon={graphic} />).shallow();
  expect(itemDisplay.find('.icon').find('img').prop('alt')).toEqual('Graphic');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text and graphic center aligned', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallowWithIntl(<Display text="Display" icon={graphic} iconAlignment="center" />).shallow();
  expect(itemDisplay.prop('className')).toContain('icon-center');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text and graphic top aligned', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallowWithIntl(<Display text="Display" icon={graphic} iconAlignment="top" />).shallow();
  expect(itemDisplay.prop('className')).toContain('icon-top');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render with text and graphic inline aligned', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallowWithIntl(<Display text="Display" icon={graphic} iconAlignment="inline" />).shallow();
  expect(itemDisplay.prop('className')).toContain('icon-inline');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render disabled display with text and graphic', () => {
  const graphic = <img alt="Graphic" />;
  const itemDisplay = shallowWithIntl(<Display text="Display" icon={graphic} isDisabled />).shallow();
  expect(itemDisplay.prop('className')).toContain('is-disabled');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a truncated display', () => {
  const itemDisplay = shallowWithIntl(<Display text="display1display1display1display1display1display1display1display1" isTruncated />).shallow();
  expect(itemDisplay.find('.text').prop('className')).toContain('is-truncated');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a disabled display', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" isDisabled />).shallow();
  expect(itemDisplay.prop('className')).toContain('is-disabled');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the primary textStyle on text', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="primary" />).shallow();
  expect(itemDisplay.find('.text').prop('className')).toEqual('text');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the attention textStyle on text', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="attention" />).shallow();
  expect(itemDisplay.find('.text').prop('className')).toContain('attention');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the secondary textStyle on text', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="secondary" />).shallow();
  expect(itemDisplay.find('.text').prop('className')).toContain('secondary');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the strikeThrough textStyle on text and default meaning provided', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="strikeThrough" />).shallow();
  expect(itemDisplay.find('span').prop('aria-label')).toEqual('Terra.item-display.meaningStrikethrough: Display, Terra.item-display.meaningStrikethroughEnd');
  expect(itemDisplay.find('.text').prop('className')).toContain('strike-through');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the strikeThrough textStyle on text and aria label based on provided meaning prop', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="strikeThrough" meaning="Update" />).shallow();
  expect(itemDisplay.find('span').prop('aria-label')).toEqual('Update: Display, Terra.item-display.meaningEnd');
  expect(itemDisplay.find('.text').prop('className')).toContain('strike-through');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with a non-strikeThrough textStyle on text and aria label based on provided meaning prop', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="attention" meaning="Important" />).shallow();
  expect(itemDisplay.find('span').prop('aria-label')).toEqual('Important: Display, Terra.item-display.meaningEnd');
  expect(itemDisplay.find('.text').prop('className')).toContain('attention');
  expect(itemDisplay).toMatchSnapshot();
});

it('should render a display with the strong textStyle on text', () => {
  const itemDisplay = shallowWithIntl(<Display text="Display" textStyle="strong" />).shallow();
  expect(itemDisplay.find('.text').prop('className')).toContain('strong');
  expect(itemDisplay).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallowWithIntl(<Display text="Display" />).shallow();
  expect(wrapper.prop('className')).toContain('orion-fusion-theme');
  expect(wrapper).toMatchSnapshot();
});
