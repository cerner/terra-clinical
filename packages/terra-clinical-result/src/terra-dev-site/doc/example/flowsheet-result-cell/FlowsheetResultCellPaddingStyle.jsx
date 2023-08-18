import React from 'react';
import { FlowsheetResultCell, ResultNameHeaderCell } from 'terra-clinical-result/lib';
import Table, {
  Header,
  Row,
  Body,
} from 'terra-html-table';
import classNamesBind from 'classnames/bind';
import styles from '../Examples.module.scss';

const cx = classNamesBind.bind(styles);

const multipleResultBPValues = [
  {
    id: '1602328271-1',
    systolic: {
      eventId: '1602328271-1.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'high',
      isModified: true,
      hasComment: true,
    },
    diastolic: {
      eventId: '1602328271-1.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'low',
      isModified: true,
      hasComment: true,
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
      interpretation: 'high',
      isModified: true,
      hasComment: true,
    },
    diastolic: {
      eventId: '1602328271-2.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'low',
      isModified: true,
      hasComment: true,
    },
  },
  {
    id: '1602328271-3',
    systolic: {
      eventId: '1602328271-3.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
    },
    diastolic: {
      eventId: '1602328271-3.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      isModified: true,
      hasComment: true,
    },
  },
];

const unverifiedResultValue = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    isNumeric: true,
    isUnverified: true,
  },
];

export default () => (
  <Table className={cx('mock-flowsheet-table')}>
    <Header>
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} key="notes" resultName="" />
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} key="notes" resultName="" />
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} key="notes" resultName="" />
    </Header>
    <Body>
      <Row>
        <>none</>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="none" />
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="none" />
      </Row>
      <Row>
        <>compact</>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </Row>
      <Row>
        <>standard</>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit paddingStyle="standard" />
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit paddingStyle="standard" />
      </Row>
    </Body>
  </Table>
);
