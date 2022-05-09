import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import NumericOverflow from '../../../../src/common/other/_NumericOverflow';
import clinicalResultMessages from '../../../../translations/en-US.json';

const locale = 'en-US';
const messages = { ...clinicalResultMessages };

describe('NumericOverflow', () => {
  it('should render a default NumericOverflow', () => {
    const result = (
      <IntlProvider locale={locale} messages={messages}>
        <NumericOverflow />
      </IntlProvider>
    );
    expect(render(result)).toMatchSnapshot();
  });
});
