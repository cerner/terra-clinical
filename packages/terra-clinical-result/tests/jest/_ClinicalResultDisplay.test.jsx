import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ClinicalResultDisplay from '../../src/_ClinicalResultDisplay';
import DefaultResult from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('ClinicalResultDisplay', () => {
  it('should render a default ClinicalResultDisplay', () => {
    const result = shallowWithIntl(<ClinicalResultDisplay {...DefaultResult} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultDisplay', () => {
    const result = shallowWithIntl(<ClinicalResultDisplay {...DefaultResult} isTruncated />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultDisplay with icons moved', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} isTruncated isModified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should pass certain props to Observation ', () => {
    const resultData = {
      ...DefaultResult,
      interpretation: 'critical',
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} hideUnit />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a modified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} isModified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a commented result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} hasComment />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render an unverified result ', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} isUnverified />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a result with unit hidden', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} hideUnit />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a concept display', () => {
    const resultData = {
      ...DefaultResult,
      conceptDisplay: 'Temperature Oral',
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a date time display', () => {
    const resultData = {
      ...DefaultResult,
      datetimeDisplay: 'Nov 23, 2019 13:31:31',
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render an entered-in-error status result', () => {
    const resultData = {
      ...DefaultResult,
      status: 'entered-in-error',
      interpretation: 'critical',
    };
    const result = shallowWithIntl(<ClinicalResultDisplay {...resultData} />).shallow();
    expect(result).toMatchSnapshot();
  });
});
