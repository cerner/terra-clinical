import React from 'react';
import SlideGroup from '../../src/SlideGroup';

describe('SlideGroup', () => {
  const defaultRender = <SlideGroup />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terraClinical-SlideGroup').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terraClinical-SlideGroup', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terraClinical-SlideGroup');
  });
});
