import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import MockDate from 'mockdate';
import { IntlProvider } from 'react-intl';
import selectMessages from 'terra-form-select/translations/en-US.json';

import OnsetPicker from '../../lib/OnsetPicker';
import onsetMessages from '../../translations/en-US.json';

const locale = 'en-US';
const messages = Object.assign({}, selectMessages, onsetMessages);

beforeEach(() => {
  MockDate.set('11/15/2017');
});

afterEach(() => {
  MockDate.reset();
});

it('should render a default onset picker with specified onset date', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        id="test"
        onsetDate="2017-09-10T17:40:49-05:00"
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render only a select when supplied with the UNKNOWN precision', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        id="test"
        precision="unknown"
      />
    </IntlProvider>);
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render with non default inputs when supplied', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularity="year"
        id="test"
        precision="before"
        onsetDate="2014-08-16T17:40:49-05:00"
      />
    </IntlProvider>);
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render the same when onChange functions are supplied', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularitySelectOnChange={() => {}}
        id="test"
        precisionSelectOnChange={() => {}}
        onsetDateInputOnChange={() => {}}
      />
    </IntlProvider>);
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render only the supplied precisions', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        id="test"
        precisionSet={[OnsetPicker.Opts.Precisions.UNKNOWN, OnsetPicker.Opts.Precisions.BEFORE, OnsetPicker.Opts.Precisions.AFTER]}
      />
    </IntlProvider>);
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  const onsetPicker = (
    <OnsetPicker
      birthdate="2011-08-16T17:40:49-05:00"
      id="test"
    />
  );

  try {
    shallow(onsetPicker);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
