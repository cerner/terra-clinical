import React from 'react';
import ClinicalResultBloodPressure from '../../src/ClinicalResultBloodPressure';
import {
  DefaultBloodPressureResult,
  DefaultSystolicResult,
  DefaultDiastolicResult,
  NoDataResult,
} from '../../src/terra-dev-site/test/clinical-result/TestResults';

describe('ClinicalResultBloodPressure', () => {
  it('should render a ResultError if hasResultError is true', () => {
    const result = shallow(<ClinicalResultBloodPressure hasResultError />);
    expect(result).toMatchSnapshot();
  });

  it('should render a NoData if hasResultNoData is true', () => {
    const result = shallow(<ClinicalResultBloodPressure hasResultNoData />);
    expect(result).toMatchSnapshot();
  });

  it('should render a default ClinicalResultBloodPressure', () => {
    const result = shallow(<ClinicalResultBloodPressure {...DefaultBloodPressureResult} />);
    expect(result).toMatchSnapshot();
  });

  it('should render a truncated ClinicalResultBloodPressure', () => {
    const result = shallow(<ClinicalResultBloodPressure {...DefaultBloodPressureResult} isTruncated />);
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
    const result = shallow(<ClinicalResultBloodPressure {...resultData} isTruncated />);
    expect(result).toMatchSnapshot();
  });

  it('should render systolic and diastolic with no data', () => {
    const result = shallow(<ClinicalResultBloodPressure
      systolic={NoDataResult}
      diastolic={NoDataResult}
    />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} hideUnit />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        systolic: {
          ...DefaultSystolicResult,
        },
      };
      const result = shallow(<ClinicalResultBloodPressure {...resultData} hideUnit />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render with error', () => {
      const result = shallow(<ClinicalResultBloodPressure diastolic={DefaultDiastolicResult} />);
      expect(result).toMatchSnapshot();
    });

    it('should render with no data', () => {
      const result = shallow(<ClinicalResultBloodPressure
        systolic={NoDataResult}
        diastolic={DefaultDiastolicResult}
      />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} hideUnit />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render a result with unit hidden', () => {
      const resultData = {
        id: '111',
        diastolic: {
          ...DefaultDiastolicResult,
        },
      };
      const result = shallow(<ClinicalResultBloodPressure {...resultData} hideUnit />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
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
      const result = shallow(<ClinicalResultBloodPressure {...resultData} />);
      expect(result).toMatchSnapshot();
    });

    it('should render with error', () => {
      const result = shallow(<ClinicalResultBloodPressure systolic={DefaultSystolicResult} />);
      expect(result).toMatchSnapshot();
    });

    it('should render diastolic with no data', () => {
      const result = shallow(<ClinicalResultBloodPressure
        systolic={DefaultSystolicResult}
        diastolic={NoDataResult}
      />);
      expect(result).toMatchSnapshot();
    });
  });
});
