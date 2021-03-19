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
    interpretation: 'critical',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'low',
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
    interpretation: 'critical',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '120',
      unit: 'mmHg',
    },
    interpretation: 'critical',
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
    interpretation: 'high',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '90',
      unit: 'mmHg',
    },
    interpretation: 'high',
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
    interpretation: 'low',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '60',
      unit: 'mmHg',
    },
    interpretation: 'low',
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
    interpretation: 'abnormal',
  },
  diastolic: {
    eventId: '111.2',
    result: {
      value: '100',
      unit: 'mmHg',
    },
    interpretation: 'abnormal',
  },
};

setofResultValues.push(<div key="critical-bloodpressure" className={cx('bottom-space')}><ClinicalResultBloodPressure {...criticalBPResultValue} /></div>);
setofResultValues.push(<div key="high-bloodpressure" className={cx('bottom-space')}><ClinicalResultBloodPressure {...highBPResultValue} /></div>);
setofResultValues.push(<div key="low-bloodpressure" className={cx('bottom-space')}><ClinicalResultBloodPressure {...lowBPResultValue} /></div>);
setofResultValues.push(<div key="abnormal-bloodpressure" className={cx('bottom-space')}><ClinicalResultBloodPressure {...abnormalBPResultValue} /></div>);
setofResultValues.push(<div key="mixed-bloodpressure"><ClinicalResultBloodPressure {...mixedBPResultValue} /></div>);

export default () => setofResultValues;
