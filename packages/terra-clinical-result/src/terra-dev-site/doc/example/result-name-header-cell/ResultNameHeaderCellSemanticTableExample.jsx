import React from 'react';
import { ResultNameHeaderCell, FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
  Body,
} from 'terra-html-table';

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

const tempResult = [
  {
    id: '2',
    result: {
      value: '98.6',
    },
  },
];

const hrResult = [
  {
    id: '3',
    result: {
      value: '101',
    },
  },
];

export default () => (
  <Table>
    <Header>
      <ResultNameHeaderCell key="temp" resultName="Temp" unit="degC" />
      <ResultNameHeaderCell key="bp" resultName="BP" unit="mmHg" />
      <ResultNameHeaderCell key="hr" resultName="HR" unit="bpm" />
    </Header>
    <Body>
      <Row>
        <FlowsheetResultCell key="temp" resultDataSet={tempResult} />
        <FlowsheetResultCell key="bp" resultDataSet={defaultBloodPressureResult} />
        <FlowsheetResultCell key="hr" resultDataSet={hrResult} />
      </Row>
    </Body>
  </Table>
);
