import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ClinicalResult, { ResultNameHeaderCell, ResultTimeHeaderCell, ClinicalResultBloodPressure } from '../../lib/index';
import DefaultResult, { DefaultBloodPressureResult, DefaultSystolicResult, DefaultDiastolicResult } from '../../src/terra-dev-site/test/clinical-result/TestResults';

// Snapshot Tests
it('should render a default component', () => {
  const nameHeaderCell = shallowWithIntl(<ResultNameHeaderCell resultName="Blood Pressure" unit="mmHg" />);
  expect(nameHeaderCell).toMatchSnapshot();
});

it('should render a default ResultTimeHeaderCell component', () => {
  const timeHeaderCell = shallowWithIntl(<ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" />);
  expect(timeHeaderCell).toMatchSnapshot();
});

describe('ClinicalResult', () => {
  it('should render a default ClinicalResult', () => {
    const result = shallowWithIntl(<ClinicalResult resultData={DefaultResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult', () => {
    const result = shallowWithIntl(<ClinicalResult resultData={DefaultResult} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult with icons moved', () => {
    const resultData = {
      ...DefaultResult,
      isModified: true,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should pass certain props to Observation ', () => {
    const resultData = {
      ...DefaultResult,
      interpretation: 'CRITICAL',
      type: 'ALPHA',
      status: 'registered',
      performedDateTime: '1995-12-17T03:24:00-06:00',
      updateDateTime: '1995-12-17T04:04:00-06:00',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a modified result ', () => {
    const resultData = {
      ...DefaultResult,
      isModified: true,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a commented result ', () => {
    const resultData = {
      ...DefaultResult,
      hasComment: true,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render an unverified result ', () => {
    const resultData = {
      ...DefaultResult,
      isUnverified: true,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with unit hidden', () => {
    const resultData = {
      ...DefaultResult,
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a concept display', () => {
    const resultData = {
      ...DefaultResult,
      conceptDisplay: 'Temperature Oral',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a date time display', () => {
    const resultData = {
      ...DefaultResult,
      datetimeDisplay: 'Nov 23, 2019 13:31:31',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a entered-in-error status result ', () => {
    const resultData = {
      ...DefaultResult,
      status: 'entered-in-error',
      interpretation: 'CRITICAL',
    };
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });
});

describe('ClinicalResultBloodPressure', () => {
  it('should render a default ClinicalResultBloodPressure', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={DefaultBloodPressureResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultBloodPressure', () => {
    const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={DefaultBloodPressureResult} isTruncated />);
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
    const result = shallowWithIntl(<ClinicalResult resultData={resultData} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  describe('- Systolic -', () => {
    it('should pass certain props to Observation ', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          interpretation: 'CRITICAL',
          type: 'ALPHA',
          status: 'registered',
          performedDateTime: '1995-12-17T03:24:00-06:00',
          updateDateTime: '1995-12-17T04:04:00-06:00',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} hideUnit />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} hideUnit />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a entered-in-error status result', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          status: 'entered-in-error',
          interpretation: 'CRITICAL',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });
  });

  describe('- Diastolic -', () => {
    it('should pass certain props to Observation ', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          interpretation: 'CRITICAL',
          type: 'ALPHA',
          status: 'registered',
          performedDateTime: '1995-12-17T03:24:00-06:00',
          updateDateTime: '1995-12-17T04:04:00-06:00',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} hideUnit />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} hideUnit />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a entered-in-error status result', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          status: 'entered-in-error',
          interpretation: 'CRITICAL',
        },
      };
      const result = shallowWithIntl(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });
  });
});
