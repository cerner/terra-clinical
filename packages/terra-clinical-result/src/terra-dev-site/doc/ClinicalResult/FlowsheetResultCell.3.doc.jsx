import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/FlowsheetResultCell.md';
import { name } from '../../../../package.json';

// Component Source
// import FlowsheetResultCellProps from '!raw-loader!../../../../src/flowsheetresultcell/FlowsheetResultCell';

// Example Files
import DefaultCell from '../example/flowsheetresultcell/FlowsheetResultCellDefault';
import DefaultCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellDefault.jsx';
import MulitpleResultsCell from '../example/flowsheetresultcell/FlowsheetResultCellMultipleResults';
import MulitpleResultsCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellMultipleResults.jsx';
import BloodPressureCell from '../example/flowsheetresultcell/FlowsheetResultCellBloodPressure';
import BloodPressureCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellBloodPressure.jsx';
import MultipleBloodPressuresCell from '../example/flowsheetresultcell/FlowsheetResultCellMultipleBloodPressures';
import MultipleBloodPressuresCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellMultipleBloodPressures.jsx';
import EmptyValueCell from '../example/flowsheetresultcell/FlowsheetResultCellEmptyValue';
import EmptyValueCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellEmptyValue.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Flowsheet Result Cell',
        description: '',
        example: <DefaultCell />,
        source: DefaultCellSrc,
      },
      {
        title: 'Flowsheet Result Cell with Multiple Results',
        description: '',
        example: <MulitpleResultsCell />,
        source: MulitpleResultsCellSrc,
      },
      {
        title: 'Flowsheet Result Cell with Blood Pressure Result',
        description: '',
        example: <BloodPressureCell />,
        source: BloodPressureCellSrc,
      },
      {
        title: 'Flowsheet Result Cell with Multiple Blood Pressure Results',
        description: '',
        example: <MultipleBloodPressuresCell />,
        source: MultipleBloodPressuresCellSrc,
      },
      {
        title: 'Flowsheet Result Cell and empty value',
        description: '',
        example: <EmptyValueCell />,
        source: EmptyValueCellSrc,
      },
    ]}
    /*
    propsTables={[
      {
        componentName: 'Flowsheet Result Cell',
        componentSrc: FlowsheetResultCellProps,
      },
    ]}
    */
  />
);

export default DocPage;
