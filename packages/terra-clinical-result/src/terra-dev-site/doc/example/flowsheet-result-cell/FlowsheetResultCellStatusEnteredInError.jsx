import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNamesBind from 'classnames/bind';
import Table, {
  Header,
  Row,
  Body,
  HeaderCell,
  Cell,
} from 'terra-html-table';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

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

export default () => (
  <Table className={cx('mock-flowsheet-table')}>
    <Header>
      <HeaderCell className={cx(['mock-flowsheet-resultcolumn', 'double-column'])} />
      <HeaderCell className={cx('mock-flowsheet-resultcolumn')} />
    </Header>
    <Body>
      <Row>
        <Cell>standard result</Cell>
        <FlowsheetResultCell resultDataSet={standardInError} hideUnit />
      </Row>
      <Row>
        <Cell>blood pressure: systolic-only</Cell>
        <FlowsheetResultCell resultDataSet={bloodpressureOneInError} hideUnit />
      </Row>
      <Row>
        <Cell>blood pressure: both systolic & diastolic</Cell>
        <FlowsheetResultCell resultDataSet={bloodpressureBothInError} hideUnit />
      </Row>
    </Body>
  </Table>
);
