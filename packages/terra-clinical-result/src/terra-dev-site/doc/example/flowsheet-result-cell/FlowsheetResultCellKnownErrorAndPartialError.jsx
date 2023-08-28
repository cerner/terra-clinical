import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import classNamesBind from 'classnames/bind';
import Table, {
  Header,
  Row,
  Body,
  HeaderCell,
} from 'terra-html-table';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const partialResultValueWithNoSystolic = [
  {
    id: '111',
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
  },
];

const partialResultValueWithNoDiastolic = [
  {
    id: '222',
    systolic: {
      eventId: '222.1',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
  },
];

export default () => (
  <Table className={cx('mock-flowsheet-table')}>
    <Header>
      <HeaderCell className={cx('mock-flowsheet-resultcolumn')} />
      <HeaderCell className={cx('mock-flowsheet-resultcolumn')} />
      <HeaderCell className={cx('mock-flowsheet-resultcolumn')} />
    </Header>
    <Body>
      <Row>
        {/* This example cell shows how to use the `hasResultError` prop */}
        <FlowsheetResultCell hasResultError />
        {/* This example cell shows the error display when the Systolic property name is not present */}
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoSystolic} hideUnit />
        {/* This example cell shows the error display when the Diastolic property name is not present */}
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDiastolic} hideUnit />
      </Row>
    </Body>
  </Table>
);
