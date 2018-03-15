import React from 'react';
import ResultView from '../../src/ResultView';

describe('ResultView', () => {
  const defaultRender = <ResultView />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.result-view').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class result-view', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('result-view');
  });
});
