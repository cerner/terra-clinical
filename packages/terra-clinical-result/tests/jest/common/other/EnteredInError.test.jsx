import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import EnteredInError from '../../../../src/common/other/_EnteredInError';

describe('EnteredInError', () => {
  it('should render a default EnteredInError', () => {
    const result = shallowWithIntl(<EnteredInError />).dive();
    expect(result).toMatchSnapshot();
  });
});
