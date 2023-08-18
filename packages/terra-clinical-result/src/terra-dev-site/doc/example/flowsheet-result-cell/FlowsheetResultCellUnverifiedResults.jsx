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

const unverifiedResultValue = [
  {
    eventId: '1602328271',
    result: {
      value: '101.1',
      unit: 'degC',
    },
    interpretation: 'critical',
    isUnverified: true,
  },
];

export default () => (
  // eslint-disable-next-line react/forbid-component-props
  <Table style={{ tableLayout: 'fixed', width: '600px' }}>
    <Header>
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} key="notes" resultName="" />
      <ResultNameHeaderCell className={cx('mock-flowsheet-resultcolumn')} key="notes" resultName="" />
    </Header>
    <Body>
      <Row>
        <FlowsheetResultCell resultDataSet={unverifiedResultValue} hideUnit />
        <></>
      </Row>
    </Body>
  </Table>
);
