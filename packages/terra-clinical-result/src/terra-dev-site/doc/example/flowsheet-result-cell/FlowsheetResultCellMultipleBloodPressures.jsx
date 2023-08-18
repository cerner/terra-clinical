import React from 'react';
import { FlowsheetResultCell, ResultNameHeaderCell } from 'terra-clinical-result/lib/index';
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

export default () => (
  // eslint-disable-next-line react/forbid-component-props
  <Table style={{ tableLayout: 'fixed', width: '600px' }}>
    <Header>
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} resultName="" />
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} resultName="" />
    </Header>
    <Body>
      <Row>
        <FlowsheetResultCell resultDataSet={multipleResultBPValues} hideUnit />
      </Row>
    </Body>
  </Table>
);
