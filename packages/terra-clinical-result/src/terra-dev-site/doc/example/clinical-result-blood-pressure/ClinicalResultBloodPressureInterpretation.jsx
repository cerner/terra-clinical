import React from 'react';
import { ClinicalResultBloodPressure } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const setofResultValues = [];

const mixedBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const criticalBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '180',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '120',
      unit: 'mmHg',
    },
    interpretation: 'CRITICAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const highBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '140',
      unit: 'mmHg',
    },
    interpretation: 'HIGH',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '90',
      unit: 'mmHg',
    },
    interpretation: 'HIGH',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const lowBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '88',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'LOW',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

const abnormalBPResultValue = {
  id: '111',
  systolic: {
    eventId: '111.1',
    result: {
      value: '100',
      unit: 'mmHg',
    },
    interpretation: 'ABNORMAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '100',
      unit: 'mmHg',
    },
    interpretation: 'ABNORMAL',
    effectiveDateTime: '2015-02-07T13:28:17-05:00',
  },
};

setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={criticalBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={highBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={lowBPResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResultBloodPressure resultData={abnormalBPResultValue} /></div>);
setofResultValues.push(<div><ClinicalResultBloodPressure resultData={mixedBPResultValue} /></div>);

export default () => setofResultValues;
