import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
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
    const display = shallowWithIntl(<BloodPressureDisplay result={defaultResult} id={id} type={type} />).dive();
    expect(display).toMatchSnapshot();
  });

  it('should render a ResultError', () => {
    const display = shallowWithIntl(<BloodPressureDisplay id={id} type={type} />).dive();
    expect(display).toMatchSnapshot();
  });

  it('should render a NoData', () => {
    const result = {
      ...defaultResult,
      noData: true,
    };
    const display = shallowWithIntl(<BloodPressureDisplay result={result} id={id} type={type} />).dive();
    expect(display).toMatchSnapshot();
  });

  it('shouldn\'t render interpretation if statusInError', () => {
    const result = {
      ...defaultResult,
      statusInError: true,
      interpretation: 'critical',
    };
    const display = shallowWithIntl(<BloodPressureDisplay result={result} id={id} type={type} />).dive();
    expect(display).toMatchSnapshot();
  });

  it('should hide the unit if hideUnit is true', () => {
    const display = shallowWithIntl(<BloodPressureDisplay result={defaultResult} id={id} type={type} hideUnit />).dive();
    expect(display).toMatchSnapshot();
  });

  it('should hide the unit if data\'s cleanedUnit is equal to diastolicUnit prop', () => {
    const display = shallowWithIntl(<BloodPressureDisplay result={defaultResult} id={id} type={type} diastolicUnit={defaultResult.cleanedUnit} />).dive();
    expect(display).toMatchSnapshot();
  });

  it('shouldn\'t hide the unit if data\'s statusInError is true', () => {
    const result = {
      ...defaultResult,
      statusInError: true,
      interpretation: 'critical',
    };
    const display = shallowWithIntl(<BloodPressureDisplay result={result} id={id} type={type} diastolicUnit={defaultResult.cleanedUnit} />).dive();
    expect(display).toMatchSnapshot();
  });
});
