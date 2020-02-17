import React from 'react';
import ClinicalResult, { ResultNameHeaderCell, ResultTimeHeaderCell, ClinicalResultBloodPressure } from '../../lib/index';
import DefaultResult, { DefaultBloodPressureResult, DefaultSystolicResult, DefaultDiastolicResult } from '../../src/terra-dev-site/test/clinical-result/TestResults';

// Snapshot Tests
it('should render a default component', () => {
  const nameHeaderCell = shallow(<ResultNameHeaderCell resultName="Blood Pressure" unit="mmHg" />);
  expect(nameHeaderCell).toMatchSnapshot();
});

it('should render a default ResultTimeHeaderCell component', () => {
  const timeHeaderCell = shallow(<ResultTimeHeaderCell date="Dec 21, 2010" time="23:59" />);
  expect(timeHeaderCell).toMatchSnapshot();
});

describe('ClinicalResult', () => {
  it('should render a default ClinicalResult', () => {
    const result = shallow(<ClinicalResult resultData={DefaultResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult', () => {
    const result = shallow(<ClinicalResult resultData={DefaultResult} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResult with icons moved', () => {
    const resultData = {
      ...DefaultResult,
      isModified: true,
    };
    const result = shallow(<ClinicalResult resultData={resultData} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should pass certain props to Observation ', () => {
    const resultData = {
      ...DefaultResult,
      interpretation: 'CRITICAL',
      type: 'ALPHA',
      status: 'registered',
      performedDateTime: new Date('December 17, 1995 03:24:00'),
      updateDateTime: new Date('October 21, 1995 04:24:00'),
    };
    const result = shallow(<ClinicalResult resultData={resultData} hideUnit />);
    expect(result).toMatchSnapshot();
  });

  it('should render a modified result ', () => {
    const resultData = {
      ...DefaultResult,
      isModified: true,
    };
    const result = shallow(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a commented result ', () => {
    const resultData = {
      ...DefaultResult,
      hasComment: true,
    };
    const result = shallow(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render an unverified result ', () => {
    const resultData = {
      ...DefaultResult,
      isUnverified: true,
    };
    const result = shallow(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with unit hidden', () => {
    const resultData = {
      ...DefaultResult,
      hideUnit: true,
    };
    const result = shallow(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a concept display', () => {
    const resultData = {
      ...DefaultResult,
      conceptDisplay: 'Temperature Oral',
    };
    const result = shallow(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a result with a date time display', () => {
    const resultData = {
      ...DefaultResult,
      datetimeDisplay: 'Nov 23, 2019 13:31:31',
    };
    const result = shallow(<ClinicalResult resultData={resultData} />);
    expect(result).toMatchSnapshot();
  });
});

describe('ClinicalResultBloodPressure', () => {
  it('should render a default ClinicalResultBloodPressure', () => {
    const result = shallow(<ClinicalResultBloodPressure resultData={DefaultBloodPressureResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultBloodPressure', () => {
    const result = shallow(<ClinicalResultBloodPressure resultData={DefaultBloodPressureResult} isTruncated />);
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
    const result = shallow(<ClinicalResult resultData={resultData} isTruncated />);
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
          performedDateTime: new Date('December 17, 1995 03:24:00'),
          updateDateTime: new Date('October 21, 1995 04:24:00'),
        },
      };
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} hideUnit />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
          hideUnit: true,
        },
      };
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
          performedDateTime: new Date('December 17, 1995 03:24:00'),
          updateDateTime: new Date('October 21, 1995 04:24:00'),
        },
      };
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} hideUnit />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
          hideUnit: true,
        },
      };
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure resultData={resultData} />);
      expect(result).toMatchSnapshot();
    });
  });
});
