import React from 'react';
import { ResultNameHeaderCell, FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
  Body,
  Cell,
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

const SemanticTableWithResultNameHeaderCell = () => (
  <Table>
    <Header>
      <ResultNameHeaderCell key="temp" resultName="Temp" unit="degC" />
      <ResultNameHeaderCell key="bp" resultName="BP" unit="mmHg" />
      <ResultNameHeaderCell key="hr" resultName="HR" unit="mmHg" />
    </Header>
    <Body>
      <Row>
        <Cell key="temp">98.6</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={defaultBloodPressureResult} />
        <Cell key="hr">100</Cell>
      </Row>
    </Body>
  </Table>
);

export default SemanticTableWithResultNameHeaderCell;
