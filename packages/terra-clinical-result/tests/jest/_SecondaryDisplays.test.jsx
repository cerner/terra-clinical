import React from 'react';
import SecondaryDisplays from '../../src/_SecondaryDisplays';

describe('SecondaryDisplays', () => {
  it('should render a default SecondaryDisplays', () => {
    const result = shallow(<SecondaryDisplays />);
    expect(result).toMatchSnapshot();
  });

  it('should render a SecondaryDisplays with concept display', () => {
    const result = shallow(<SecondaryDisplays conceptDisplay="concept" />);
    expect(result).toMatchSnapshot();
  });

  it('should render a SecondaryDisplays with datetime displays', () => {
    const result = shallow(<SecondaryDisplays datetimeDisplay="datetime" />);
    expect(result).toMatchSnapshot();
  });

  it('should render a SecondaryDisplays with all displays', () => {
    const result = shallow(<SecondaryDisplays conceptDisplay="concept" datetimeDisplay="datetime" />);
    expect(result).toMatchSnapshot();
  });
});
