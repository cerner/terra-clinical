import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const bloodpressureResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mm Hg',
    },
    interpretation: 'critical',
    isModified: true,
    hasComment: true,
    conceptDisplay: 'Systolic / Diastolic Blood Pressure',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'low',
    isModified: true,
    hasComment: true,
    conceptDisplay: 'Systolic / Diastolic Blood Pressure',
    datetimeDisplay: 'Nov 23, 2019 13:31:31',
  },
};

export default () => (
  <div className={cx('clinical-result-fontsize-21')}>
    <ClinicalResultBloodPressure resultData={bloodpressureResultValue} />
  </div>
);
