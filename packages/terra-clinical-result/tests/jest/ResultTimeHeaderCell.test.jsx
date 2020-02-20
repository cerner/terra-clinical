import React from 'react';
import ResultTimeHeaderCell from '../../src/resulttimeheadercell/ResultTimeHeaderCell';

// Snapshot Tests
describe('ResultTimeHeaderCell', () => {
  it('should render', () => {
    const cell = shallow(<ResultTimeHeaderCell />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a date', () => {
    const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a time', () => {
    const cell = shallow(<ResultTimeHeaderCell time="10:00 PM" />);
    expect(cell).toMatchSnapshot();
  });

  it('should hide date', () => {
    const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" hideDate />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle -', () => {
    it('should render with none', () => {
      const cell = shallow(<ResultTimeHeaderCell paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with standard', () => {
      const cell = shallow(<ResultTimeHeaderCell paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with compact', () => {
      const cell = shallow(<ResultTimeHeaderCell paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
