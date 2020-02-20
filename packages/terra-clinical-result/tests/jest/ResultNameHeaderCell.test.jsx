import React from 'react';
import ResultNameHeaderCell from '../../src/resultnameheadercell/ResultNameHeaderCell';

// Snapshot Tests
describe('ResultNameHeaderCell', () => {
  it('should render', () => {
    const cell = shallow(<ResultNameHeaderCell />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a result name', () => {
    const cell = shallow(<ResultNameHeaderCell resultName="Name" />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a unit', () => {
    const cell = shallow(<ResultNameHeaderCell unit="Unit" />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle -', () => {
    it('should render with none', () => {
      const cell = shallow(<ResultNameHeaderCell paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with standard', () => {
      const cell = shallow(<ResultNameHeaderCell paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with compact', () => {
      const cell = shallow(<ResultNameHeaderCell paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });

  describe('typeIndicator -', () => {
    it('should render with none', () => {
      const cell = shallow(<ResultNameHeaderCell typeIndicator="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with calculated', () => {
      const cell = shallow(<ResultNameHeaderCell typeIndicator="calculated" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
