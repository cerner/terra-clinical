import React from 'react';
import ResultNameHeaderCell from '../../../src/result-name-header-cell/ResultNameHeaderCell';

// Snapshot Tests
describe('ResultNameHeaderCell', () => {
  it('should render a result name', () => {
    const cell = shallow(<ResultNameHeaderCell resultName="Name" />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a unit', () => {
    const cell = shallow(<ResultNameHeaderCell resultName="Name" unit="Unit" />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle -', () => {
    it('should render with none', () => {
      const cell = shallow(<ResultNameHeaderCell resultName="Name" paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with standard', () => {
      const cell = shallow(<ResultNameHeaderCell resultName="Name" paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with compact', () => {
      const cell = shallow(<ResultNameHeaderCell resultName="Name" paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });

  describe('typeIndicator -', () => {
    it('should render with none', () => {
      const cell = shallow(<ResultNameHeaderCell resultName="Name" typeIndicator="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render with calculated', () => {
      const cell = shallow(<ResultNameHeaderCell resultName="Name" typeIndicator="calculated" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
