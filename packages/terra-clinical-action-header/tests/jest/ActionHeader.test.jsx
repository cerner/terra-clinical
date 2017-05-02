import React from 'react';
import Button from 'terra-button';
import ActionHeader from '../../src/ActionHeader';

// Snapshot tests

it('should render default component', () => {
  const defaultHeader = <ActionHeader />;
  const wrapper = shallow(defaultHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with title', () => {
  const titleActionHeader = <ActionHeader title="Title" />;
  const wrapper = shallow(titleActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with close button', () => {
  const closeActionHeader = <ActionHeader onClose={() => 1} />;
  const wrapper = shallow(closeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with back button', () => {
  const backActionHeader = <ActionHeader onBack={() => 1} />;
  const wrapper = shallow(backActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with expand button', () => {
  const expandActionHeader = <ActionHeader onExpand={() => 1} />;
  const wrapper = shallow(expandActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with minimize button', () => {
  const minimizeActionHeader = <ActionHeader onMinimize={() => 1} />;
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with Previous-Next button when onPrevious is givien', () => {
  const minimizeActionHeader = <ActionHeader onPrevious={() => 1} />;
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with Previous-Next button when onNext is givien', () => {
  const minimizeActionHeader = <ActionHeader onNext={() => 1} />;
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with children', () => {
  const minimizeActionHeader = (
    <ActionHeader>
      <Button />
    </ActionHeader>
  );
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

