import React from 'react';
import LabelValueView from '../../src/LabelValueView';

describe('LabelValueView', () => {
  const defaultView = <LabelValueView label="Label" />;

  // Snapshot Tests
  it('should render a default LabelValueView', () => {
    const wrapper = shallow(defaultView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a LabelValueView for text input', () => {
    const textInputView = (
      <LabelValueView label="Label">Sample Text</LabelValueView>
    );
    const wrapper = shallow(textInputView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a LabelValueView for integer input', () => {
    const integerInputView = <LabelValueView label="Label">5</LabelValueView>;
    const wrapper = shallow(integerInputView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render LabelValueView for multiple inputs', () => {
    const multipleInputsView = (
      <LabelValueView label="Label">
        Sample Text
        <div>More Sample Text</div>
      </LabelValueView>
    );
    const wrapper = shallow(multipleInputsView);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should set the label text', () => {
    const wrapper = shallow(defaultView);
    expect(wrapper.find('.terraClinical-LabelValueView-label').text()).toEqual('Label');
  });

  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultView);
    expect(wrapper.unrendered.props.children).toEqual('--');
    expect(wrapper.childAt(1).text()).toEqual('--');
  });

  // Structure Tests
  it('should have the class terraClinical-LabelValueView', () => {
    const wrapper = shallow(defaultView);
    expect(wrapper.prop('className')).toContain('terraClinical-LabelValueView');
  });

  it('should have the class terraClinical-LabelValueView-label', () => {
    const wrapper = shallow(defaultView);
    expect(wrapper.childAt(0).prop('className')).toContain('terraClinical-LabelValueView-label');
  });

  it('should have the class terraClinical-LabelValueView-value', () => {
    const wrapper = shallow(defaultView);
    expect(wrapper.childAt(1).prop('className')).toContain('terraClinical-LabelValueView-value');
  });
});
