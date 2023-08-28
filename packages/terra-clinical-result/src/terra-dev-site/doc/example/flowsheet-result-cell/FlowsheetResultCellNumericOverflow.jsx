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

const multipleResultValues = [
  {
    eventId: '1602328271',
    result: {
      value: '101.123456789123456789123456789123456789123456789',
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
      <HeaderCell className={cx('mock-flowsheet-resultcolumn')} />
      <HeaderCell className={cx(['mock-flowsheet-resultcolumn', 'half-column'])} />
      <HeaderCell className={cx(['mock-flowsheet-resultcolumn', 'triple-column'])} />
    </Header>
    <Body>
      <Row>
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
      </Row>
      <Row>
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
        <FlowsheetResultCell resultDataSet={multipleResultValues} hideUnit />
      </Row>
    </Body>
  </Table>
);
