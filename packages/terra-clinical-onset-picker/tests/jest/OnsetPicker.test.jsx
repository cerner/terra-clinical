import React from 'react';
import MockDate from 'mockdate';
import { IntlProvider } from 'react-intl';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import selectMessages from 'terra-form-select/translations/en-US.json';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import OnsetPicker from '../../lib/OnsetPicker';
import onsetMessages from '../../translations/en-US.json';

const locale = 'en-US';
const messages = { ...selectMessages, ...onsetMessages };

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

it('should render Clinical Onset picker with the correct label for precision, granularity and age', () => {
  const wrapper = shallowWithIntl(
    <OnsetPicker
      ageUnit="years"
      birthdate="2011-08-16"
      granularity="age"
      id="test"
      precision="before"
      onsetDate="2014-08-16"
    />,
  ).dive();

  expect(wrapper.find('.precision').prop('label')).toEqual('Terra.onsetPicker.precision');
  expect(wrapper.find('.granularity').prop('label')).toEqual('Terra.onsetPicker.granularity');
  expect(wrapper.find('.age').prop('label')).toEqual('Terra.onsetPicker.age');
  expect(wrapper.find('.age-unit').prop('label')).toEqual('Terra.onsetPicker.agePrecision');

  expect(wrapper).toMatchSnapshot();
});

it('should render Clinical Onset picker with the correct label for month and year', () => {
  const wrapper = shallowWithIntl(
    <OnsetPicker
      birthdate="2011-08-16"
      granularity="month"
      id="test"
      precision="before"
    />,
  ).dive();

  expect(wrapper.find('.month').prop('label')).toEqual('Terra.onsetPicker.month');
  expect(wrapper.find('.year').prop('label')).toEqual('Terra.onsetPicker.year');
  expect(wrapper).toMatchSnapshot();
});

it('should render Clinical Onset picker with the correct label for date', () => {
  const wrapper = shallowWithIntl(
    <OnsetPicker
      birthdate="2011-08-16"
      granularity="date"
      id="test"
      precision="before"
      onsetDate="2014-08-16"
    />,
  ).dive();

  expect(wrapper.find('.date').prop('label')).toEqual('Terra.onsetPicker.date');
  expect(wrapper).toMatchSnapshot();
});

it('should render Clinical Onset picker with the aria-live region', () => {
  const wrapper = shallowWithIntl(
    <OnsetPicker
      ageUnit="years"
      birthdate="2011-08-16"
      granularity="age"
      id="test"
      precision="before"
      onsetDate="2014-08-16"
    />,
  ).dive();

  expect(wrapper.find('#dynamic_content').prop('aria-live')).toEqual('polite');
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const tabs = render(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <IntlProvider locale={locale} messages={messages}>
        <OnsetPicker
          birthdate="2011-08-16"
          id="test"
          onsetDate="2017-09-10"
        />
      </IntlProvider>
    </ThemeContextProvider>,
  );
  expect(tabs).toMatchSnapshot();
});

