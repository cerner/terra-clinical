import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import Button from 'terra-button';
import ActionHeader from '../../src/ActionHeader';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

// Snapshot tests

it('should render default component', () => {
  const defaultHeader = <IntlProvider locale={locale} messages={messages}><ActionHeader /></IntlProvider>;
  const wrapper = shallow(defaultHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with title', () => {
  const titleActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader title="Title" />
    </IntlProvider>
  );
  const wrapper = shallow(titleActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with close button', () => {
  const closeActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader onClose={() => 1} />
    </IntlProvider>
  );
  const wrapper = shallow(closeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with back button', () => {
  const backActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader onBack={() => 1} />
    </IntlProvider>
  );
  const wrapper = shallow(backActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with expand button', () => {
  const expandActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader onMaximize={() => 1} />
    </IntlProvider>
  );
  const wrapper = shallow(expandActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with minimize button', () => {
  const minimizeActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader onMinimize={() => 1} />
    </IntlProvider>
  );
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with Previous-Next button when onPrevious is givien', () => {
  const minimizeActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader onPrevious={() => 1} />
    </IntlProvider>
  );
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with Previous-Next button when onNext is givien', () => {
  const minimizeActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader onNext={() => 1} />
    </IntlProvider>
  );
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('should render ActionHeader with children', () => {
  const minimizeActionHeader = (
    <IntlProvider locale={locale} messages={messages}>
      <ActionHeader>
        <Button />
      </ActionHeader>
    </IntlProvider>
  );
  const wrapper = shallow(minimizeActionHeader);
  expect(wrapper).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  try {
    shallow(<ActionHeader />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
