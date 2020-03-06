import React from 'react';
import ClinicalResult from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const setofResultValues = [];

const criticalResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
  interpretation: 'critical',
};

const highResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
  interpretation: 'high',
};

const lowResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
  interpretation: 'low',
};

const abnormalResultValue = {
  eventId: '111',
  result: {
    value: '12345.678',
    unit: 'mL',
  },
  interpretation: 'abnormal',
};

setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResult {...criticalResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResult {...highResultValue} /></div>);
setofResultValues.push(<div className={cx('bottom-space')}><ClinicalResult {...lowResultValue} /></div>);
setofResultValues.push(<div><ClinicalResult {...abnormalResultValue} /></div>);

export default () => setofResultValues;
