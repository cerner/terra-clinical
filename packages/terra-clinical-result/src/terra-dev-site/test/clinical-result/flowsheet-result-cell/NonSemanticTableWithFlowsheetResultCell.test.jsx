import React from 'react';
import {
  FlowsheetResultCell,
} from 'terra-clinical-result/lib/index';
import './NonSemanticTable.scss';

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

const partialResultError = [
  {
    id: '111',
    systolic: {
      eventId: '111.2',
      result: {
        value: '77',
        unit: 'mmHg',
      },
      interpretation: 'critical',
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

const enteredInError = [
  {
    id: '1577836800',
    result: {
      value: '12345.678',
      unit: 'mL',
    },
    status: 'entered-in-error',
  },
  {
    id: '1577836911',
    result: {
      value: '12345.678',
      unit: 'mL',
    },
  },
];

const numericResultsNoOverflow = [
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

const numericResultsOverflow = [
  {
    eventId: '1602328271',
    result: {
      value:
        '10111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011101110111011',
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

// eslint-disable-next-line react/prop-types
const TableColumn = ({ children }) => (
  <div className="table-col">
    <div className="center-text-container">{children}</div>
  </div>
);

const SemanticTableWithFlowsheetResultCell = () => (
  <div className="table">
    <div className="table-header">
      <div className="table-col">Notes</div>
      <div className="table-col">Clinical Results</div>
      <div className="table-col">Date</div>
    </div>
    <div className="table-row">
      {/* This example cell shows a standard result */}
      <TableColumn>
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '1', result: { value: 'Standard Result (With Unit)' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="result"
          resultDataSet={defaultBloodPressureResult}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '2', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows multiple results */}
      <TableColumn>
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[{ id: '3', result: { value: 'Multiple Results' } }]}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="result"
          resultDataSet={multipleResults}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '4', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows multiple decorated results */}
      <TableColumn>
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '5', result: { value: 'Multiple Decorated Results' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="result"
          resultDataSet={multipleDecoratedResults}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '6', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a decorated result */}
      <TableColumn>
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[{ id: '7', result: { value: 'Decorated Result' } }]}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="result"
          resultDataSet={decoratedResult}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '8', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a partial Blood Pressure no data display using the `resultNoData` property name for the Diastolic result */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '9', result: { value: 'Partial Result, Diastolic' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="result"
          resultDataSet={partialResultWithNoDataPropDiastolic}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '10', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a partial Blood Pressure no data display using the `resultNoData` property name for the Systolic result */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '11', result: { value: 'Partial Result, Systolic' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="result"
          resultDataSet={partialResultWithNoDataPropSystolic}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '12', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows an unverified result */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[{ id: '13', result: { value: 'Unverified Result' } }]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="result"
          resultDataSet={unverifiedResult}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '14', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a standard result with the `hasResultNoData` prop */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[{ id: '15', result: { value: 'No Data Result' } }]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell key="result" hasResultNoData />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '16', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows multiple numeric results without overflow present */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '23', result: { value: 'Numeric Without Overflow' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="result"
          resultDataSet={numericResultsNoOverflow}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '24', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows multiple numeric results with overflow present */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '25', result: { value: 'Numeric With Overflow' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="result"
          resultDataSet={numericResultsOverflow}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '26', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a result with a status of entered-in-error */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '21', result: { value: 'Entered-in-error Result' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        {' '}
        <FlowsheetResultCell key="result" resultDataSet={enteredInError} />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '22', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a result with an error */}
      <TableColumn>
        {' '}
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[{ id: '17', result: { value: 'Error Result' } }]}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell key="result" hasResultError />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '18', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
    <div className="table-row">
      {/* This example cell shows a result with a partial error */}
      <TableColumn>
        <FlowsheetResultCell
          key="notes"
          resultDataSet={[
            { id: '19', result: { value: 'Partial Error Result' } },
          ]}
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="result"
          resultDataSet={partialResultError}
          hideUnit
        />
      </TableColumn>
      <TableColumn>
        <FlowsheetResultCell
          key="date"
          resultDataSet={[{ id: '20', result: { value: 'May 12th' } }]}
        />
      </TableColumn>
    </div>
  </div>
);

export default SemanticTableWithFlowsheetResultCell;
