import React from 'react';
import AppDelegate from '../../src/AppDelegate';

describe('AppDelegate', () => {
  const defaultRender = <AppDelegate />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terraClinical-AppDelegate').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terraClinical-AppDelegate', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terraClinical-AppDelegate');
  });
});
