import React from 'react';
import ModalManager from '../../src/ModalManager';

describe('ModalManager', () => {
  const defaultRender = <ModalManager />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.terraClinical-ModalManager').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class terraClinical-ModalManager', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('terraClinical-ModalManager');
  });
});
