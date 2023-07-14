import React from 'react';
import { ResultTimeHeaderCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
  Body,
} from 'terra-html-table';
import FlowsheetResultCell from '../../../../flowsheet-result-cell/FlowsheetResultCell';

const defaultBloodPressureResult = [
  {
    id: '1',
    systolic: {
      eventId: '2',
      result: {
        value: '130',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '3',
      result: {
        value: '80',
        unit: 'mmHg',
      },
    },
  },
];

export default () => (
  <Table>
    <Header>
      <ResultTimeHeaderCell key="time1" date="Dec 29, 2010" time="20:59" />
      <ResultTimeHeaderCell key="time2" date="Dec 30, 2010" time="22:00" />
      <ResultTimeHeaderCell key="time3" date="Jan 01, 2011" time="23:59" />
    </Header>
    <Body>
      <Row>
        <FlowsheetResultCell key="time1" resultDataSet={defaultBloodPressureResult} />
        <FlowsheetResultCell key="time2" resultDataSet={defaultBloodPressureResult} />
        <FlowsheetResultCell key="time3" resultDataSet={defaultBloodPressureResult} />
      </Row>
    </Body>
  </Table>
);
