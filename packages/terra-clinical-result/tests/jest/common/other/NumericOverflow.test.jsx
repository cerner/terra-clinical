import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import NumericOverflow from '../../../../src/common/other/_NumericOverflow';

describe('NumericOverflow', () => {
  it('should render a default NumericOverflow', () => {
    const result = shallowWithIntl(<NumericOverflow />).dive();
    expect(result).toMatchSnapshot();
  });
});
