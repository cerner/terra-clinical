import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import ResultError from '../../../../src/common/other/_ResultError';
import clinicalResultMessages from '../../../../translations/en-US.json';

const locale = 'en-US';
const messages = { ...clinicalResultMessages };

describe('ResultError', () => {
  it('should render a default ResultError', () => {
    const result = (
      <IntlProvider locale={locale} messages={messages}>
        <ResultError />
      </IntlProvider>
    );
    expect(render(result)).toMatchSnapshot();
  });
});
