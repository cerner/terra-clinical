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

const partialResultValueWithNoDataPropSystolic = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      resultNoData: true,
    },
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

const partialResultValueWithNoDataPropDiastolic = [
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
    diastolic: {
      eventId: '222.2',
      resultNoData: true,
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
        <FlowsheetResultCell hasResultNoData />
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataPropSystolic} hideUnit />
        <FlowsheetResultCell resultDataSet={partialResultValueWithNoDataPropDiastolic} hideUnit />
      </Row>
    </Body>
  </Table>
);
