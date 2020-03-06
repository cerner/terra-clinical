import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ClinicalResultBloodPressure.md';
import { name } from '../../../../package.json';

// Component Source
import ClinicalResultBloodPressureProps from '!raw-loader!../../../../src/ClinicalResultBloodPressure';

// Example Files
import DefaultResult from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureDefault';
import DefaultResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureDefault.jsx';
import DecoratedResult from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureDecorated';
import DecoratedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureDecorated.jsx';
import UnverifiedResult from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureUnverified';
import UnverifiedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureUnverified.jsx';
import ExtraDisplaysResult from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureExtraDisplays';
import ExtraDisplaysResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureExtraDisplays.jsx';
import TruncatedResult from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureTruncated';
import TruncatedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureTruncated.jsx';
import InterpretationResults from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureInterpretation';
import InterpretationResultsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureInterpretation.jsx';
import SizeChangeResult from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureChangeSize';
import SizeChangeResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureChangeSize.jsx';
import KnownNoData from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureKnownNoData';
import KnownNoDataSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureKnownNoData.jsx';
import PartialNoData from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressurePartialNoData';
import PartialNoDataSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressurePartialNoData.jsx';
import KnownErrorAndPartialError from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureKnownErrorAndPartialError';
import KnownErrorAndPartialErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureKnownErrorAndPartialError.jsx';
import StatusEnteredInError from '../example/clinical-result-blood-pressure/ClinicalResultBloodPressureStatusEnteredInError';
import StatusEnteredInErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result-blood-pressure/ClinicalResultBloodPressureStatusEnteredInError.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Blood Pressure Clinical Result',
        example: <DefaultResult />,
        source: DefaultResultSrc,
      },
      {
        title: 'Modified Blood Pressure Clinical Result with Comments',
        example: <DecoratedResult />,
        source: DecoratedResultSrc,
      },
      {
        title: 'Unverified Blood Pressure Result with Hide Unit of Measure',
        example: <UnverifiedResult />,
        source: UnverifiedResultSrc,
      },
      {
        title: 'Clinical Blood Pressure Result with additional displays',
        example: <ExtraDisplaysResult />,
        source: ExtraDisplaysResultSrc,
      },
      {
        title: 'Blood Pressure Clinical Results with Intrepretation',
        example: <InterpretationResults />,
        source: InterpretationResultsSrc,
      },
      {
        title: 'Changing the Blood Pressure Clinical Result Size',
        example: <SizeChangeResult />,
        source: SizeChangeResultSrc,
      },
      {
        title: 'Truncated Blood Pressure Clinical Result',
        example: <TruncatedResult />,
        source: TruncatedResultSrc,
      },
      {
        title: 'Display for "Known No Result"',
        description: 'Use the \'hasResultNoData\' prop to show the "No Data" display for the Blood Pressure Clinical Result:',
        example: <KnownNoData />,
        source: KnownNoDataSrc,
      },
      {
        title: 'Display for a Partial "No Result"',
        description: 'Use the \'resultNoData\' property name to show the "No Data" display for either the Systolic or Diastolic result:',
        example: <PartialNoData />,
        source: PartialNoDataSrc,
      },
      {
        title: 'Displays for a full "Known Error" and for partial missing results',
        description: 'Use the \'hasResultError\' prop to show the "Error" display for the full Blood Pressure result. Or if there is a missing Systolic or Diastolic result, that portion will show the error display:',
        example: <KnownErrorAndPartialError />,
        source: KnownErrorAndPartialErrorSrc,
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
        componentName: 'Clinical-Result-Blood-Pressure Props',
        componentSrc: ClinicalResultBloodPressureProps,
      },
    ]}
  />
);

export default DocPage;
