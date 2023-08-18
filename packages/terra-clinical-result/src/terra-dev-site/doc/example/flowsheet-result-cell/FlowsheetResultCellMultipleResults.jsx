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

const multipleResultValues = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: true,
    hasComment: true,
  },
  {
    eventId: '1602328282',
    result: {
      value: '101.2',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
  {
    eventId: '1602328293',
    result: {
      value: '101.3',
      unit: 'degC',
    },
    isNumeric: true,
    isModified: false,
    hasComment: false,
  },
];

export default () => (
  <Table className={cx('mock-flowsheet-table')}>
    <Header>
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} resultName="" />
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} resultName="" />
    </Header>
    <Body>
      <Row>
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
        <></>
      </Row>
    </Body>
  </Table>
);
