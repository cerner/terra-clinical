import React from 'react';
import ClinicalResultDisplay from '../../src/_ClinicalResultDisplay';
import DefaultResult from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('ClinicalResultDisplay', () => {
  it('should render a default ClinicalResultDisplay', () => {
    const result = shallow(<ClinicalResultDisplay {...DefaultResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultDisplay', () => {
    const result = shallow(<ClinicalResultDisplay {...DefaultResult} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultDisplay with icons moved', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} isTruncated isModified />);
    expect(result).toMatchSnapshot();
  });

  it('should pass certain props to Observation ', () => {
    const resultData = {
      ...DefaultResult,
      interpretation: 'critical',
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a modified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} isModified />);
    expect(result).toMatchSnapshot();
  });

  it('should render a commented result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} hasComment />);
    expect(result).toMatchSnapshot();
  });

  it('should render an unverified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} isUnverified />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with unit hidden', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a concept display', () => {
    const resultData = {
      ...DefaultResult,
      conceptDisplay: 'Temperature Oral',
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a date time display', () => {
    const resultData = {
      ...DefaultResult,
      datetimeDisplay: 'Nov 23, 2019 13:31:31',
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a entered-in-error status result', () => {
    const resultData = {
      ...DefaultResult,
      status: 'entered-in-error',
      interpretation: 'critical',
    };
    const result = shallow(<ClinicalResultDisplay {...resultData} />);
    expect(result).toMatchSnapshot();
  });
});
