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
        birthdate="2011-08-16"
        id="test"
        onsetDate="2017-09-10"
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render only a select when supplied with the UNKNOWN precision', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16"
        id="test"
        precision="unknown"
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render with non default inputs when supplied', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16"
        granularity="year"
        id="test"
        precision="before"
        onsetDate="2014-08-16"
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render with age inputs filled in when supplied', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        ageUnit="years"
        birthdate="2011-08-16"
        granularity="age"
        id="test"
        precision="before"
        onsetDate="2014-08-16"
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render the same when onChange function is supplied', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16"
        id="test"
        onsetOnChange={() => {}}
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('should render only the supplied precisions', () => {
  const onsetPicker = (
    <IntlProvider locale={locale} messages={messages}>
      <OnsetPicker
        birthdate="2011-08-16"
        id="test"
        precisionSet={['unknown', 'before', 'after']}
      />
    </IntlProvider>
  );
  expect(render(onsetPicker)).toMatchSnapshot();
});

it('throws error on missing locale prop in Base', () => {
  const onsetPicker = (
    <OnsetPicker
      birthdate="2011-08-16"
      id="test"
    />
  );

  try {
    shallow(onsetPicker);
  } catch (e) {
    expect(e.message).toContain('add locale prop to Base component');
  }
});
