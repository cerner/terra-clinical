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

const bloodpressureResultValue = [
  {
    id: '111',
    systolic: {
      eventId: '111.1',
      result: {
        value: '111',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
    diastolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
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
        <FlowsheetResultCell resultDataSet={bloodpressureResultValue} hideUnit />
      </Row>
    </Body>
  </Table>
);
