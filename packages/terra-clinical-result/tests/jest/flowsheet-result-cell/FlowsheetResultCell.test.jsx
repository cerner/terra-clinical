import React from 'react';
import FlowsheetResultCell from '../../../src/flowsheet-result-cell/FlowsheetResultCell';
import DefaultResult, {
  DefaultBloodPressureResult, DefaultSystolicResult, DefaultDiastolicResult, DefaultResultWithNoEventId, DefaultBloodPressureDiastolicResultWithNoId, DefaultBloodPressureSystolicResultWithNoId,
} from '../../../src/terra-dev-site/test/clinical-result/TestResults';

// Snapshot Tests
describe('FlowsheetResultCell', () => {
  it('should render a ResultError if hasResultError is true', () => {
    const result = shallow(<FlowsheetResultCell hasResultError />);
    expect(result).toMatchSnapshot();
  });

  it('should render a NoData if hasResultNoData is true', () => {
    const result = shallow(<FlowsheetResultCell hasResultNoData />);
    expect(result).toMatchSnapshot();
  });

  it('should render an error with bad data', () => {
    const result = shallow(<FlowsheetResultCell />);
    expect(result).toMatchSnapshot();
  });

  it('should render when given result data', () => {
    const results = [
      DefaultResult,
      DefaultBloodPressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} />);
    expect(cell).toMatchSnapshot();
  });

  it('should render when given result data with no event id', () => {
    const results = [
      DefaultResultWithNoEventId,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} />);
    expect(cell).toMatchSnapshot();
  });

  it('should render when given blood pressure systolic result data with no id', () => {
    const results = [
      DefaultBloodPressureSystolicResultWithNoId,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} />);
    expect(cell).toMatchSnapshot();
  });

  it('should render when given blood pressure diastolic result data with no id', () => {
    const results = [
      DefaultBloodPressureDiastolicResultWithNoId,
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
      DefaultBloodPressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a entered-in-error status standard result', () => {
    const results = [
      {
        ...DefaultResult,
        status: 'entered-in-error',
        interpretation: 'critical',
      },
      DefaultResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render correctly with an interpretation and unverified result', () => {
    const results = [
      {
        ...DefaultResult,
        isUnverified: true,
        interpretation: 'critical',
      },
      {
        ...DefaultResult,
        isUnverified: true,
        interpretation: 'critical',
      },
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render systolic entered-in-error status bloodpressure result', () => {
    const results = [
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
        diastolic: {
          ...DefaultDiastolicResult,
        },
      },
      DefaultBloodPressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render both entered-in-error status bloodpressure result', () => {
    const results = [
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
        diastolic: {
          ...DefaultDiastolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
      },
      DefaultBloodPressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render the extra results icon with no regard to an entered in error result\'s interpretation.', () => {
    const results = [
      DefaultResult,
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
        diastolic: {
          ...DefaultDiastolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
      },
      DefaultBloodPressureResult,
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell.find('.additional-end-display').hasClass('interpretation-critical')).toBe(false);
  });

  it('should render blood pressure correctly with an interpretation and unverified result', () => {
    const results = [
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          isUnverified: true,
          interpretation: 'critical',
        },
        diastolic: {
          ...DefaultDiastolicResult,
          isUnverified: true,
          interpretation: 'critical',
        },
      },
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          isUnverified: true,
          interpretation: 'critical',
        },
        diastolic: {
          ...DefaultDiastolicResult,
          isUnverified: true,
          interpretation: 'critical',
        },
      },
    ];
    const cell = shallow(<FlowsheetResultCell resultDataSet={results} />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle', () => {
    it('should render when given none', () => {
      const results = [
        DefaultResult,
        DefaultBloodPressureResult,
      ];
      const cell = shallow(<FlowsheetResultCell resultDataSet={results} paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render when given standard', () => {
      const results = [
        DefaultResult,
        DefaultBloodPressureResult,
      ];
      const cell = shallow(<FlowsheetResultCell resultDataSet={results} paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render when given compact', () => {
      const results = [
        DefaultResult,
        DefaultBloodPressureResult,
      ];
      const cell = shallow(<FlowsheetResultCell resultDataSet={results} paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
