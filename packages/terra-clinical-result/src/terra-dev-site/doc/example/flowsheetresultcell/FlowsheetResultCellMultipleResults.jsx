import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNames from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNames.bind(styles);

const multipleResultValues = [
  {
    eventId: '111',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    type: 'NUMERIC',
    isModified: true,
    hasComment: true,
    effectiveDateTime: '10/10/2020 11:11:11',
  },
  {
    eventId: '222',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    type: 'NUMERIC',
    isModified: false,
    hasComment: false,
    effectiveDateTime: '10/10/2020 11:11:22',
  },
  {
    eventId: '333',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    type: 'NUMERIC',
    isModified: false,
    hasComment: false,
    effectiveDateTime: '10/10/2020 11:11:33',
  },
];

export default () => (
  <React.Fragment>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx('mock-flowsheet-resultcolumn-cell')}>
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
      </div>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
    </div>
    <div className={cx('mock-flowsheet-resultcolumn')}>
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
      <div className={cx(['mock-flowsheet-resultcolumn-cell', 'empty'])} />
    </div>
  </React.Fragment>
);
