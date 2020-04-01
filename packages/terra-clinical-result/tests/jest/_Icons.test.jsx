import React from 'react';
import Icons from '../../src/_Icons';

describe('Icons', () => {
  it('should render a default Icons', () => {
    const result = shallow(<Icons />);
    expect(result).toMatchSnapshot();
  });

  it('should render an Icons with isUnverified set', () => {
    const result = shallow(<Icons isUnverified />);
    expect(result).toMatchSnapshot();
  });

  it('should render an Icons with hasComment and isModified set', () => {
    const result = shallow(<Icons hasComment isModified />);
    expect(result).toMatchSnapshot();
  });
});
