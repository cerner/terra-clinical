import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ResultError from '../../../../src/common/other/_ResultError';

describe('ResultError', () => {
  it('should render a default ResultError', () => {
    const result = shallowWithIntl(<ResultError />).dive();
    expect(result).toMatchSnapshot();
  });
});
