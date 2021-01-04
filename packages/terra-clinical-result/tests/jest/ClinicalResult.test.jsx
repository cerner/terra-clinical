import React from 'react';
import ClinicalResult from '../../src/ClinicalResult';
import DefaultResult from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('ClinicalResult', () => {
  it('should render a default ClinicalResult', () => {
    const result = shallow(<ClinicalResult {...DefaultResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult', () => {
    const result = shallow(<ClinicalResult {...DefaultResult} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult with icons moved', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResult {...resultData} isTruncated isModified />);
    expect(result).toMatchSnapshot();
  });

  it('should pass certain props to Observation ', () => {
    const resultData = {
      ...DefaultResult,
      interpretation: 'critical',
    };
    const result = shallow(<ClinicalResult {...resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a modified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResult {...resultData} isModified />);
    expect(result).toMatchSnapshot();
  });

  it('should render a commented result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResult {...resultData} hasComment />);
    expect(result).toMatchSnapshot();
  });

  it('should render an unverified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResult {...resultData} isUnverified />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with unit hidden', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResult {...resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a concept display', () => {
    const resultData = {
      ...DefaultResult,
      conceptDisplay: 'Temperature Oral',
    };
    const result = shallow(<ClinicalResult {...resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a date time display', () => {
    const resultData = {
      ...DefaultResult,
      datetimeDisplay: 'Nov 23, 2019 13:31:31',
    };
    const result = shallow(<ClinicalResult {...resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a entered-in-error status result', () => {
    const resultData = {
      ...DefaultResult,
      status: 'entered-in-error',
      interpretation: 'critical',
    };
    const result = shallow(<ClinicalResult {...resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a ResultError if hasResultError is true', () => {
    const result = shallow(<ClinicalResult hasResultError />);
    expect(result).toMatchSnapshot();
  });

  it('should render a NoData if hasResultNoData is true', () => {
    const result = shallow(<ClinicalResult hasResultNoData />);
    expect(result).toMatchSnapshot();
  });
});
