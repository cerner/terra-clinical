import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const partialStandard = {
  result: {
    value: '12345.678',
    unit: 'mL',
  },
};

const partialSystolic = {
  eventId: '1602328271.1',
  result: {
    value: '120',
    unit: 'mmHg',
  },
};

const partialDiastolic = {
  eventId: '1602328271.2',
  result: {
    value: '80',
    unit: 'mmHg',
  },
};

const standardInError = [
  {
    eventId: '1577836800',
    ...partialStandard,
    status: 'entered-in-error',
  },
  {
    eventId: '1577836911',
    ...partialStandard,
  },
];

const bloodpressureOneInError = [
  {
    id: '111',
    systolic: {
      ...partialSystolic,
      status: 'entered-in-error',
    },
    diastolic: {
      ...partialDiastolic,
      status: 'final',
    },
  },
  {
    id: '112',
    systolic: {
      ...partialSystolic,
    },
    diastolic: {
      ...partialDiastolic,
    },
  },
];

const bloodpressureBothInError = [
  {
    id: '211',
    systolic: {
      ...partialSystolic,
      status: 'entered-in-error',
    },
    diastolic: {
      ...partialDiastolic,
      status: 'entered-in-error',
    },
  },
  {
    id: '212',
    systolic: {
      ...partialSystolic,
    },
    diastolic: {
      ...partialDiastolic,
    },
  },
];

//
/*
    conceptDisplay: 'Temperature Oral',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
    effectiveDateTime: '10/10/2020 11:11:11',

    conceptDisplay: 'Temperature Oral',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
    isModified: false,
    hasComment: false,
    effectiveDateTime: '10/10/2020 11:11:22',

    interpretation: 'HIGH',
    isModified: true,
    hasComment: true,
    resultDateTime: '10/10/2020 11:11',

    interpretation: 'LOW',
    isModified: true,
    hasComment: true,
    resultDateTime: '10/10/2020 11:11',
*/
//

/*
const SingleResultValue = {
  ...DefaultResult,
  conceptDisplay: 'Temperature Oral',
  datetimeDisplay: 'Nov 23, 2019 13:31:31',
};

const DecoratedBloodPressureResult = [
  {
    id: '111',
    systolic: {
      ...partialSystolic,
      isModified: false,
      hasComment: true,
      isUnverified: true,
    },
    diastolic: {
      ...partialDiastolic,
      isModified: true,
      hasComment: false,
      isUnverified: true,
    },
  },
];

const multipleBPResults = [
  {
    id: '1602328271-1',
    systolic: {
      eventId: '1602328271-1.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '1602328271-1.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'LOW',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
  {
    id: '1602328271-2',
    systolic: {
      eventId: '1602328271-2.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'HIGH',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
    diastolic: {
      eventId: '1602328271-2.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'LOW',
      isModified: true,
      hasComment: true,
      resultDateTime: '10/10/2020 11:11',
    },
  },
];
*/

export default () => (
  <React.Fragment>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        standard result
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        partial bp
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        full bp
      </div>
    </div>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={standardInError} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={bloodpressureOneInError} hideUnit />
      </div>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={bloodpressureBothInError} hideUnit />
      </div>
    </div>
  </React.Fragment>
);
