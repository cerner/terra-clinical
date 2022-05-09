import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { IntlProvider } from 'react-intl';
import KnownNoData from '../../../../src/common/other/_KnownNoData';
import clinicalResultMessages from '../../../../translations/en-US.json';

const locale = 'en-US';
const messages = { ...clinicalResultMessages };

describe('KnownNoData', () => {
  it('should render a default KnownNoData', () => {
    const result = (
      <IntlProvider locale={locale} messages={messages}>
        <KnownNoData />
      </IntlProvider>
    );

    expect(render(result)).toMatchSnapshot();
  });
});
