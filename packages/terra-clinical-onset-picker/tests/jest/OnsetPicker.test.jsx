import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import OnsetPicker from '../../lib/OnsetPicker';
import messages from '../../translations/en-US.json';

const locale = 'en-US';

it('should render a default onset picker with specified onset date', () => {
  const onsetPicker = render(
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularitySelectName="test-granularity"
        precisionSelectName="test-precision"
        onsetDateInputName="test-onsetDate"
        onsetDate="2017-09-10T17:40:49-05:00"
      />
    </IntlProvider>);
  expect(onsetPicker).toMatchSnapshot();
});

it('should render only a select when supplied with the UNKNOWN precision', () => {
  const onsetPicker = render(
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularitySelectName="test-granularity"
        precisionSelectName="test-precision"
        onsetDateInputName="test-onsetDate"
        precision="unknown"
      />
    </IntlProvider>);
  expect(onsetPicker).toMatchSnapshot();
});

it('should render with non default inputs when supplied', () => {
  const onsetPicker = render(
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularitySelectName="test-granularity"
        precisionSelectName="test-precision"
        onsetDateInputName="test-onsetDate"
        precision="before"
        granularity="YEAR"
        onsetDate="2014-08-16T17:40:49-05:00"
      />
    </IntlProvider>);
  expect(onsetPicker).toMatchSnapshot();
});

it('should render as controlled when onChange functions are supplied', () => {
  const onsetPicker = render(
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularitySelectName="test-granularity"
        precisionSelectName="test-precision"
        onsetDateInputName="test-onsetDate"
        granularitySelectOnChange={() => {}}
        precisionSelectOnChange={() => {}}
        onsetDateInputOnChange={() => {}}
      />
    </IntlProvider>);
  expect(onsetPicker).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  try {
    shallow(
      <OnsetPicker
        birthdate="2011-08-16T17:40:49-05:00"
        granularitySelectName="test-granularity"
        precisionSelectName="test-precision"
        onsetDateInputName="test-onsetDate"
      />);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
