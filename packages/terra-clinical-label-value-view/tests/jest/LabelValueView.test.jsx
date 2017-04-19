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
      <LabelValueView label="Label" textValue="Sample Text" />
    );
    const wrapper = shallow(textInputView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render LabelValueView for an node input', () => {
    const nodeInputView = (
      <LabelValueView label="Label">
        <div>More Sample Text</div>
      </LabelValueView>
    );
    const wrapper = shallow(nodeInputView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render LabelValueView for text and node inputs', () => {
    const multipleInputsView = (
      <LabelValueView label="Label" textValue="Sample Text 1">
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
    expect(wrapper.find('.terraClinical-LabelValueView-value').text()).toEqual('--');
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

  it('should have the class terraClinical-LabelValueView-value when given a text value', () => {
    const textInputView = (
      <LabelValueView label="Label" textValue="Sample Text" />
    );
    const wrapper = shallow(textInputView);
    expect(wrapper.childAt(1).prop('className')).toContain('terraClinical-LabelValueView-value');
  });
});
