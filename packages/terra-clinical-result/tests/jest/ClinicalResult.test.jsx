import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ClinicalResult from '../../src/ClinicalResult';
import DefaultResult from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('ClinicalResult', () => {
  it('should render a default ClinicalResult', () => {
    const result = shallowWithIntl(<ClinicalResult resultData={DefaultResult} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult', () => {
    const result = shallowWithIntl(<ClinicalResult resultData={DefaultResult} isTruncated />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult with icons moved', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} isTruncated isModified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should pass certain props to Observation ', () => {
    const resultData = {
      ...DefaultResult,
      interpretation: 'critical',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} hideUnit />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a modified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} isModified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a commented result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} hasComment />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render an unverified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} isUnverified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a result with unit hidden', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} hideUnit />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a concept display', () => {
    const resultData = {
      ...DefaultResult,
      conceptDisplay: 'Temperature Oral',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a date time display', () => {
    const resultData = {
      ...DefaultResult,
      datetimeDisplay: 'Nov 23, 2019 13:31:31',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a entered-in-error status result', () => {
    const resultData = {
      ...DefaultResult,
      status: 'entered-in-error',
      interpretation: 'critical',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a ResultError if hasResultError is true', () => {
    const result = shallowWithIntl(<ClinicalResult hasResultError />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a NoData if hasResultNoData is true', () => {
    const result = shallowWithIntl(<ClinicalResult hasResultNoData />).dive();
    expect(result).toMatchSnapshot();
  });
});
