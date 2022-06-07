import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from '@cerner/terra-enzyme-intl';
import KnownNoData from '../../../../src/common/other/_KnownNoData';

describe('KnownNoData', () => {
  it('should render a default KnownNoData', () => {
    const result = shallowWithIntl(<KnownNoData />).dive().dive();
    expect(result).toMatchSnapshot();
  });
});
