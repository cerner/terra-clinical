import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import EnteredInError from '../../../../src/common/other/_EnteredInError';
import clinicalResultMessages from '../../../../translations/en-US.json';

const locale = 'en-US';
const messages = { ...clinicalResultMessages };

describe('EnteredInError', () => {
  it('should render a default EnteredInError', () => {
    const result = (
      <IntlProvider locale={locale} messages={messages}>
        <EnteredInError />
      </IntlProvider>
    );
    expect(render(result)).toMatchSnapshot();
  });
});
