import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Icons from '../../src/_Icons';

describe('Icons', () => {
  it('should render a default Icons', () => {
    const result = shallowWithIntl(<Icons />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render an Icons with isUnverified set', () => {
    const result = shallowWithIntl(<Icons isUnverified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render an Icons with hasComment and isModified set', () => {
    const result = shallowWithIntl(<Icons hasComment isModified />).dive();
    expect(result).toMatchSnapshot();
  });
});
