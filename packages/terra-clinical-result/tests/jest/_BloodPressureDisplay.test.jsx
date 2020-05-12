import React from 'react';
import BloodPressureDisplay from '../../src/_BloodPressureDisplay';
import { DefaultBloodPressureResult } from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('BloodPressureDisplay', () => {
  const defaultResult = {
    ...DefaultBloodPressureResult.systolic,
    statusInError: false,
    cleanedUnit: 'mmhg',
    noData: false,
  };
  const {
    id,
  } = DefaultBloodPressureResult;
  const type = 'Systolic';

  it('should render a default BloodPressureDisplay', () => {
    const display = shallow(<BloodPressureDisplay result={defaultResult} id={id} type={type} />);
    expect(display).toMatchSnapshot();
  });

  it('should render a ResultError', () => {
    const display = shallow(<BloodPressureDisplay id={id} type={type} />);
    expect(display).toMatchSnapshot();
  });

  it('should render a NoData', () => {
    const result = {
      ...defaultResult,
      noData: true,
    };
    const display = shallow(<BloodPressureDisplay result={result} id={id} type={type} />);
    expect(display).toMatchSnapshot();
  });

  it('shouldn\'t render interpretation if statusInError', () => {
    const result = {
      ...defaultResult,
      statusInError: true,
      interpretation: 'critical',
    };
    const display = shallow(<BloodPressureDisplay result={result} id={id} type={type} />);
    expect(display).toMatchSnapshot();
  });

  it('should hide the unit if hideUnit is true', () => {
    const display = shallow(<BloodPressureDisplay result={defaultResult} id={id} type={type} hideUnit />);
    expect(display).toMatchSnapshot();
  });

  it('should hide the unit if data\'s cleanedUnit is equal to diastolicUnit prop', () => {
    const display = shallow(<BloodPressureDisplay result={defaultResult} id={id} type={type} diastolicUnit={defaultResult.cleanedUnit} />);
    expect(display).toMatchSnapshot();
  });

  it('shouldn\'t hide the unit if data\'s statusInError is true', () => {
    const result = {
      ...defaultResult,
      statusInError: true,
      interpretation: 'critical',
    };
    const display = shallow(<BloodPressureDisplay result={result} id={id} type={type} diastolicUnit={defaultResult.cleanedUnit} />);
    expect(display).toMatchSnapshot();
  });
});
