import React from 'react';
import { FlowsheetResultCell, ResultNameHeaderCell } from 'terra-clinical-result/lib/index';
import Table, {
  Header,
  Row,
  Body,
} from 'terra-html-table';

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
  <Table>
    <Header>
      <ResultNameHeaderCell key="padding" resultName="Padding Type" />
      <ResultNameHeaderCell key="bp" resultName="Blood Pressure Result" />
      <ResultNameHeaderCell key="temp" resultName="Unverified Temperature Result" />
    </Header>
    <Body>
      <Row>
        {/* This example cell shows results with no padding style */}
        <FlowsheetResultCell key="padding" resultDataSet={[{ id: 1, result: { value: 'None' } }]} paddingStyle="none" />
        <FlowsheetResultCell key="bp" resultDataSet={multipleResultBPValues} hideUnit paddingStyle="none" />
        <FlowsheetResultCell key="temp" resultDataSet={unverifiedResultValue} hideUnit paddingStyle="none" />
      </Row>
      <Row>
        {/* This example cell shows results with a compact padding style */}
        <FlowsheetResultCell key="padding" resultDataSet={[{ id: 3, result: { value: 'Compact' } }]} paddingStyle="compact" />
        <FlowsheetResultCell key="bp" resultDataSet={multipleResultBPValues} hideUnit paddingStyle="compact" />
        <FlowsheetResultCell key="temp" resultDataSet={unverifiedResultValue} hideUnit paddingStyle="compact" />
      </Row>
      <Row>
        {/* This example cell shows results with a standard padding style */}
        <FlowsheetResultCell key="padding" resultDataSet={[{ id: 5, result: { value: 'Standard' } }]} paddingStyle="standard" />
        <FlowsheetResultCell key="bp" resultDataSet={multipleResultBPValues} hideUnit paddingStyle="standard" />
        <FlowsheetResultCell key="temp" resultDataSet={unverifiedResultValue} hideUnit paddingStyle="standard" />
      </Row>
    </Body>
  </Table>
);
