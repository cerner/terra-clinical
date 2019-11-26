import React from 'react';
import FlowsheetResultCell from '../../src/flowsheetresultcell/FlowsheetResultCell';
import DefaultResult, { DefaultBloodpressureResult } from '../../src/terra-dev-site/test/clinical-result/TestResults';

// Snapshot Tests
describe('FlowsheetResultCell', () => {
  it('should render when given result data', () => {
    const results = [
      DefaultResult,
      DefaultBloodpressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} />);
    expect(cell).toMatchSnapshot();
  });

  it('should render an error when given no result data', () => {
    const cell = shallow(<FlowsheetResultCell />);
    expect(cell).toMatchSnapshot();
  });

  it('should pass hideUnit down', () => {
    const results = [
      DefaultResult,
      DefaultBloodpressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle', () => {
    it('should render when given none', () => {
      const results = [
        DefaultResult,
        DefaultBloodpressureResult,
      ];
      const cell = shallow(<FlowsheetResultCell resultDataSet={results} paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render when given standard', () => {
      const results = [
        DefaultResult,
        DefaultBloodpressureResult,
      ];
      const cell = shallow(<FlowsheetResultCell resultDataSet={results} paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render when given compact', () => {
      const results = [
        DefaultResult,
        DefaultBloodpressureResult,
      ];
      const cell = shallow(<FlowsheetResultCell resultDataSet={results} paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
