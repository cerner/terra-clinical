import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/FlowsheetResultCell.md';
import { name } from '../../../../package.json';

// Component Source
import FlowsheetResultCellProps from '!raw-loader!../../../../src/flowsheetresultcell/FlowsheetResultCell';

// Example Files
import DefaultCell from '../example/flowsheetresultcell/FlowsheetResultCellDefault';
import DefaultCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellDefault.jsx';
import MultipleResultsCell from '../example/flowsheetresultcell/FlowsheetResultCellMultipleResults';
import MultipleResultsCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellMultipleResults.jsx';
import BloodPressureCell from '../example/flowsheetresultcell/FlowsheetResultCellBloodPressure';
import BloodPressureCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellBloodPressure.jsx';
import MultipleBloodPressuresCell from '../example/flowsheetresultcell/FlowsheetResultCellMultipleBloodPressures';
import MultipleBloodPressuresCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellMultipleBloodPressures.jsx';
import UnverifiedResultsCell from '../example/flowsheetresultcell/FlowsheetResultCellUnverifiedResults';
import UnverifiedResultsCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellUnverifiedResults.jsx';
import PaddingStyleCell from '../example/flowsheetresultcell/FlowsheetResultCellPaddingStyle';
import PaddingStyleCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellPaddingStyle.jsx';
import KnownAndPartialNoData from '../example/flowsheetresultcell/FlowsheetResultCellKnownAndPartialNoData';
import KnownAndPartialNoDataSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellKnownAndPartialNoData.jsx';
import KnownErrorAndPartialError from '../example/flowsheetresultcell/FlowsheetResultCellKnownErrorAndPartialError';
import KnownErrorAndPartialErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellKnownErrorAndPartialError.jsx';

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
        example: <MultipleResultsCell />,
        source: MultipleResultsCellSrc,
      },
      {
        title: 'Flowsheet Result Cell with Blood Pressure Result',
        example: <BloodPressureCell />,
        source: BloodPressureCellSrc,
      },
      {
        title: 'Flowsheet Result Cell with Multiple Blood Pressure Results',
        example: <MultipleBloodPressuresCell />,
        source: MultipleBloodPressuresCellSrc,
      },
      {
        title: 'Flowsheet Result Cell with Unverified Results',
        description: '',
        example: <UnverifiedResultsCell />,
        source: UnverifiedResultsCellSrc,
      },
      {
        title: 'Flowsheet Result Cell Padding Styles',
        description: '',
        example: <PaddingStyleCell />,
        source: PaddingStyleCellSrc,
      },
      {
        title: 'Flowsheet Result Cell for "Known No Result" and Blood Pressure partial "No Result"',
        description: 'Use the \'hasResultNoData\' prop to show the "No Data" display for the Flowsheet Result Cell. For Blood Pressure, Use either the \'resultNoData\' property name or \' result: { value: null, }\' to show the "No Data" display for either the Systolic or Diastolic result:',
        example: <KnownAndPartialNoData />,
        source: KnownAndPartialNoDataSrc,
      },
      {
        title: 'Displays for a full "Known Error" and for partial missing results',
        description: 'Use the \'hasResultError\' prop to show the "Error" display for the full Flowsheet Result Cell. Or if there is a missing part results (e.g. Systolic or Diastolic), that portion will show the error display:',
        example: <KnownErrorAndPartialError />,
        source: KnownErrorAndPartialErrorSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Flowsheet Result Cell',
        componentSrc: FlowsheetResultCellProps,
      },
    ]}
  />
);

export default DocPage;
