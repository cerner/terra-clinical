import React from 'react';
import Application from '../../src/Application';

describe('Application', () => {
  const defaultRender = <Application />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terraClinical-Application').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terraClinical-Application', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terraClinical-Application');
  });
});
