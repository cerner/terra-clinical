import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/FlowsheetResultCell.md';
import { name } from '../../../../package.json';

// Component Source
import FlowsheetResultCellProps from '!raw-loader!../../../../src/flowsheet-result-cell/FlowsheetResultCell';

// Example Files
import DefaultCell from '../example/flowsheet-result-cell/FlowsheetResultCellDefault';
import DefaultCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellDefault.jsx';
import MultipleResultsCell from '../example/flowsheet-result-cell/FlowsheetResultCellMultipleResults';
import MultipleResultsCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellMultipleResults.jsx';
import BloodPressureCell from '../example/flowsheet-result-cell/FlowsheetResultCellBloodPressure';
import BloodPressureCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellBloodPressure.jsx';
import MultipleBloodPressuresCell from '../example/flowsheet-result-cell/FlowsheetResultCellMultipleBloodPressures';
import MultipleBloodPressuresCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellMultipleBloodPressures.jsx';
import UnverifiedResultsCell from '../example/flowsheet-result-cell/FlowsheetResultCellUnverifiedResults';
import UnverifiedResultsCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellUnverifiedResults.jsx';
import PaddingStyleCell from '../example/flowsheet-result-cell/FlowsheetResultCellPaddingStyle';
import PaddingStyleCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellPaddingStyle.jsx';
import KnownAndPartialNoData from '../example/flowsheet-result-cell/FlowsheetResultCellKnownAndPartialNoData';
import KnownAndPartialNoDataSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellKnownAndPartialNoData.jsx';
import KnownErrorAndPartialError from '../example/flowsheet-result-cell/FlowsheetResultCellKnownErrorAndPartialError';
import KnownErrorAndPartialErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellKnownErrorAndPartialError.jsx';
import NumericOverflow from '../example/flowsheet-result-cell/FlowsheetResultCellNumericOverflow';
import NumericOverflowSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellNumericOverflow.jsx';
import StatusEnteredInError from '../example/flowsheet-result-cell/FlowsheetResultCellStatusEnteredInError';
import StatusEnteredInErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheet-result-cell/FlowsheetResultCellStatusEnteredInError.jsx';

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
      {
        title: 'Flowsheet Result Cell with a numeric result that overflows the container',
        description: 'When displaying a result with an overflowed numeric value, instead of truncating the value, shows "View Results" message.',
        example: <NumericOverflow />,
        source: NumericOverflowSrc,
      },
      {
        title: 'Uncharted Result as "Entered In Error"',
        description: 'Display for when the result status has been set to \'entered-in-error\'',
        example: <StatusEnteredInError />,
        source: StatusEnteredInErrorSrc,
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
