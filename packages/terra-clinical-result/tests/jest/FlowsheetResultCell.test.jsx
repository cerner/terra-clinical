import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import FlowsheetResultCell from '../../src/flowsheetresultcell/FlowsheetResultCell';
import DefaultResult, { DefaultBloodPressureResult, DefaultSystolicResult, DefaultDiastolicResult } from '../../src/terra-dev-site/test/TestResults';

// Snapshot Tests
describe('FlowsheetResultCell', () => {
  it('should render when given result data', () => {
    const results = [
      DefaultResult,
      DefaultBloodPressureResult,
    ];
    const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} />);
    expect(cell).toMatchSnapshot();
  });

  it('should render an error when given no result data', () => {
    const cell = shallowWithIntl(<FlowsheetResultCell />);
    expect(cell).toMatchSnapshot();
  });

  it('should pass hideUnit down', () => {
    const results = [
      DefaultResult,
      DefaultBloodPressureResult,
    ];
    const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render a entered-in-error status standard result', () => {
    const results = [
      {
        ...DefaultResult,
        status: 'entered-in-error',
        interpretation: 'CRITICAL',
      },
      DefaultResult,
    ];
    const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render systolic entered-in-error status bloodpressure result', () => {
    const results = [
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'CRITICAL',
        },
        diastolic: {
          ...DefaultDiastolicResult,
        },
      },
      DefaultBloodPressureResult,
    ];
    const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  it('should render both entered-in-error status bloodpressure result', () => {
    const results = [
      {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'CRITICAL',
        },
        diastolic: {
          ...DefaultDiastolicResult,
          status: 'entered-in-error',
          interpretation: 'CRITICAL',
        },
      },
      DefaultBloodPressureResult,
    ];
    const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} hideUnit />);
    expect(cell).toMatchSnapshot();
  });

  describe('paddingStyle', () => {
    it('should render when given none', () => {
      const results = [
        DefaultResult,
        DefaultBloodPressureResult,
      ];
      const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} paddingStyle="none" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render when given standard', () => {
      const results = [
        DefaultResult,
        DefaultBloodPressureResult,
      ];
      const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} paddingStyle="standard" />);
      expect(cell).toMatchSnapshot();
    });

    it('should render when given compact', () => {
      const results = [
        DefaultResult,
        DefaultBloodPressureResult,
      ];
      const cell = shallowWithIntl(<FlowsheetResultCell resultDataSet={results} paddingStyle="compact" />);
      expect(cell).toMatchSnapshot();
    });
  });
});
