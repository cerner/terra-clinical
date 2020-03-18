import React from 'react';
import ResultTimeHeaderCell from '../../../src/result-time-header-cell/ResultTimeHeaderCell';

// Snapshot Tests
describe('ResultTimeHeaderCell', () => {
  it('should render a date and time', () => {
    const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" time="10:00 PM" />);
    expect(cell).toMatchSnapshot();
  });

  it('should hide date', () => {
    const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" time="10:00 PM" hideDate />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle -', () => {
    it('should render with none', () => {
      const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" time="10:00 PM" paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with standard', () => {
      const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" time="10:00 PM" paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with compact', () => {
      const cell = shallow(<ResultTimeHeaderCell date="December 31st 1999" time="10:00 PM" paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
