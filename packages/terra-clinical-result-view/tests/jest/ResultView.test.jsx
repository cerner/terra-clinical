import React from 'react';
import { IntlProvider } from 'react-intl';
import ResultView from '../../src/ResultView';

const locale = 'en-US';
const results = [{ value: 503456789, unit: 'ml', normalcy: 'CRITICAL' }];
const resultsWithSeperator = [{ value: 120, unit: 'mmHg' }, { value: 80, unit: 'mmHg' }];

describe('ResultView', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const defaultResultView = <IntlProvider locale={locale} ><ResultView /></IntlProvider>;
    const wrapper = shallow(defaultResultView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Result View with no time display', () => {
    const resultView = (
      <IntlProvider locale={locale} >
        <ResultView
          results={results}
          hasDocument
          hasComment
          isPadded
        />
      </IntlProvider>);
    const wrapper = shallow(resultView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Result View with truncation by default', () => {
    const resultView = (
      <IntlProvider locale={locale} >
        <ResultView
          results={results}
          hasDocument
          hasComment
          isPadded
        />
      </IntlProvider>);
    const wrapper = shallow(resultView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Result View without truncation', () => {
    const resultView = (
      <IntlProvider locale={locale} >
        <ResultView
          results={results}
          hasDocument
          hasComment
          isPadded
          isTruncated={false}
        />
      </IntlProvider>);
    const wrapper = shallow(resultView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Result View with separator', () => {
    const resultView = (
      <IntlProvider locale={locale} >
        <ResultView
          results={resultsWithSeperator}
          hasDocument
          hasComment
          isPadded
          isTruncated={false}
        />
      </IntlProvider>);
    const wrapper = shallow(resultView);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Result View with RTL support', () => {
    const resultView = (
      <IntlProvider locale={locale} >
        <ResultView
          results={results}
          hasDocument
          hasComment
          isPadded
          isTruncated={false}
          alignEnd
        />
      </IntlProvider>);
    const wrapper = shallow(resultView);
    expect(wrapper).toMatchSnapshot();
  });
});
