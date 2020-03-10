import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ClinicalResultBloodPressure from '../../src/ClinicalResultBloodPressure';
import { DefaultBloodPressureResult, DefaultSystolicResult, DefaultDiastolicResult, NoDataResult } from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('ClinicalResultBloodPressure', () => {
  it('should render a ResultError if hasResultError is true', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure hasResultError />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a NoData if hasResultNoData is true', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure hasResultNoData />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a default ClinicalResultBloodPressure', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure {...DefaultBloodPressureResult} />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultBloodPressure', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure {...DefaultBloodPressureResult} isTruncated />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultBloodPressure with icons moved', () => {
    const resultData = {
      id: '111',
      systolic: {
        ...DefaultSystolicResult,
        isModified: true,
      },
      diastolic: {
        ...DefaultDiastolicResult,
        isModified: true,
      },
    };
    const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} isTruncated />).dive();
    expect(result).toMatchSnapshot();
  });

  it('should render systolic and diastolic with no data', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure
      systolic={NoDataResult}
      diastolic={NoDataResult}
    />).dive();
    expect(result).toMatchSnapshot();
  });

  describe('- Systolic -', () => {
    it('should pass certain props to Observation ', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          interpretation: 'critical',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} hideUnit />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a modified result ', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          isModified: true,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a commented result ', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          hasComment: true,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render an unverified result ', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          isUnverified: true,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} hideUnit />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a result with a concept display', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          conceptDisplay: 'Temperature Oral',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a result with a date time display', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          datetimeDisplay: 'Nov 23, 2019 13:31:31',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a entered-in-error status result', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render with error', () => {
      const result = shallowWithIntl(<ClinicalResultBloodPressure diastolic={DefaultDiastolicResult} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render with no data', () => {
      const result = shallowWithIntl(<ClinicalResultBloodPressure
        systolic={NoDataResult}
        diastolic={DefaultDiastolicResult}
      />).dive();
      expect(result).toMatchSnapshot();
    });
  });

  describe('- Diastolic -', () => {
    it('should pass certain props to Observation ', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          interpretation: 'critical',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} hideUnit />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a modified result ', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          isModified: true,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a commented result ', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          hasComment: true,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render an unverified result ', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          isUnverified: true,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} hideUnit />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a result with a concept display', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          conceptDisplay: 'Temperature Oral',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a result with a date time display', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          datetimeDisplay: 'Nov 23, 2019 13:31:31',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render a entered-in-error status result', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          status: 'entered-in-error',
          interpretation: 'critical',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure {...resultData} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render with error', () => {
      const result = shallowWithIntl(<ClinicalResultBloodPressure systolic={DefaultSystolicResult} />).dive();
      expect(result).toMatchSnapshot();
    });

    it('should render diastolic with no data', () => {
      const result = shallowWithIntl(<ClinicalResultBloodPressure
        systolic={DefaultSystolicResult}
        diastolic={NoDataResult}
      />).dive();
      expect(result).toMatchSnapshot();
    });
  });
});
