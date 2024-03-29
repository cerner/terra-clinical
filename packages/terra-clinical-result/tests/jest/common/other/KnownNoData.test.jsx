import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import KnownNoData from '../../../../src/common/other/_KnownNoData';

describe('KnownNoData', () => {
  it('should render a default KnownNoData', () => {
    const result = shallowWithIntl(<KnownNoData />).dive();
    expect(result.find('VisuallyHiddenText').at(0).prop('text')).toEqual('Terra.clinicalResult.resultNoData');
    expect(result).toMatchSnapshot();
  });
});
