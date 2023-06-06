import React from 'react';
import { FlowsheetResultCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  HeaderCell,
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

const multipleResults = [
  {
    id: '4',
    systolic: {
      eventId: '5',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '6',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
  },
  {
    id: '7',
    systolic: {
      eventId: '8',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '9',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
  },
];

const multipleDecoratedResults = [
  {
    id: '10',
    systolic: {
      eventId: '11',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '12',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
      isUnverified: false,
      isModified: true,
      hasComment: true,
    },
  },
  {
    id: '13',
    systolic: {
      eventId: '14',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
    },
    diastolic: {
      eventId: '15',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
      isUnverified: true,
    },
  },
];

const decoratedResult = [
  {
    id: '16',
    systolic: {
      eventId: '17',
      result: {
        value: '85',
        unit: 'mmHg',
      },
      interpretation: 'low',
    },
    diastolic: {
      eventId: '18',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      isUnverified: false,
      isModified: true,
      hasComment: true,
    },
  },
];

const partialResultWithNoDataPropSystolic = [
  {
    id: '19',
    systolic: {
      eventId: '20',
      resultNoData: true,
    },
    diastolic: {
      eventId: '21',
      result: {
        value: '85',
        unit: 'mmHg',
      },
    },
  },
];

const partialResultWithNoDataPropDiastolic = [
  {
    id: '22',
    systolic: {
      eventId: '23',
      result: {
        value: '170',
        unit: 'mmHg',
      },
      interpretation: 'critical',
    },
    diastolic: {
      eventId: '24',
      resultNoData: true,
    },
  },
];

const unverifiedResult = [
  {
    id: '25',
    systolic: {
      eventId: '26',
      result: {
        value: '140',
        unit: 'mmHg',
      },
      interpretation: 'high',
      isUnverified: true,
    },
    diastolic: {
      eventId: '27',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
      isUnverified: true,
    },
  },
];

const SemanticTableWithFlowsheetResultCell = () => (
  <Table>
    <Header>
      <HeaderCell key="notes">Notes</HeaderCell>
      <HeaderCell key="bp">Blood Pressure</HeaderCell>
      <HeaderCell key="date">Date</HeaderCell>
    </Header>
    <Body>
      <Row>
        {/* This example cell shows a standard result */}
        <Cell key="notes">Standard Result (With Unit)</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={defaultBloodPressureResult} />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows mulitple resutls */}
        <Cell key="notes">Multiple Results</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={multipleResults} hideUnit />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows an multiple decorated results */}
        <Cell key="notes">Multiple Decorated Results</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={multipleDecoratedResults} hideUnit />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows a decorated result */}
        <Cell key="notes">Decorated Result</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={decoratedResult} hideUnit />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows a partial Blood Pressure no data display using the `resultNoData` property name for the Diastolic result */}
        <Cell key="notes">Partial Result, Diastolic</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={partialResultWithNoDataPropDiastolic} hideUnit />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows a partial Blood Pressure no data display using the `resultNoData` property name for the Systolic result */}
        <Cell key="notes">Partial Result, Systolic</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={partialResultWithNoDataPropSystolic} hideUnit />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows an unverified result */}
        <Cell key="notes">Unverified Result</Cell>
        <FlowsheetResultCell key="bp" resultDataSet={unverifiedResult} hideUnit />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows a standard result with the `hasResultNoData` prop */}
        <Cell key="notes">No Data Result</Cell>
        <FlowsheetResultCell key="bp" hasResultNoData />
        <Cell key="date">May 12th</Cell>
      </Row>
      <Row>
        {/* This example cell shows a result with an error */}
        <Cell key="notes">Error Result</Cell>
        <FlowsheetResultCell key="bp" hasResultError />
        <Cell key="date">May 12th</Cell>
      </Row>
    </Body>
  </Table>
);

export default SemanticTableWithFlowsheetResultCell;
