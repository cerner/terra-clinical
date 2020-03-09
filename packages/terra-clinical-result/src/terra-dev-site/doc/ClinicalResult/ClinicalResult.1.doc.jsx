import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ClinicalResultsProps from '!raw-loader!../../../../src/ClinicalResult';

// Example Files
import DefaultResult from '../example/clinical-result/ClinicalResultDefault';
import DefaultResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultDefault.jsx';
import DecoratedResult from '../example/clinical-result/ClinicalResultDecorated';
import DecoratedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultDecorated.jsx';
import UnverifiedResult from '../example/clinical-result/ClinicalResultUnverified';
import UnverifiedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultUnverified.jsx';
import ExtraDisplaysResult from '../example/clinical-result/ClinicalResultExtraDisplays';
import ExtraDisplaysResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultExtraDisplays.jsx';
import TruncatedResult from '../example/clinical-result/ClinicalResultTruncated';
import TruncatedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultTruncated.jsx';
import InterpretationResults from '../example/clinical-result/ClinicalResultInterpretation';
import InterpretationResultsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultInterpretation.jsx';
import SizeChangeResult from '../example/clinical-result/ClinicalResultChangeSize';
import SizeChangeResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultChangeSize.jsx';
import KnownNoData from '../example/clinical-result/ClinicalResultKnownNoData';
import KnownNoDataSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultKnownNoData.jsx';
import KnownError from '../example/clinical-result/ClinicalResultKnownError';
import KnownErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultKnownError.jsx';
import AccidentalError from '../example/clinical-result/ClinicalResultAccidentalError';
import AccidentalErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinical-result/ClinicalResultAccidentalError.jsx';
import StatusEnteredInError from '../example/clinical-result/ClinicalResultStatusEnteredInError';
import StatusEnteredInErrorSrc from '../example/clinical-result/ClinicalResultStatusEnteredInError';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Clinical Result',
        example: <DefaultResult />,
        source: DefaultResultSrc,
      },
      {
        title: 'Modifiied Clinical Result with Comments',
        example: <DecoratedResult />,
        source: DecoratedResultSrc,
      },
      {
        title: 'Unverified Clinical Result with Hide Unit of Measure',
        example: <UnverifiedResult />,
        source: UnverifiedResultSrc,
      },
      {
        title: 'Clinical Result with additional displays',
        example: <ExtraDisplaysResult />,
        source: ExtraDisplaysResultSrc,
      },
      {
        title: 'Clinical Results with Intrepretation',
        example: <InterpretationResults />,
        source: InterpretationResultsSrc,
      },
      {
        title: 'Changing the Clinical Result Size',
        example: <SizeChangeResult />,
        source: SizeChangeResultSrc,
      },
      {
        title: 'Truncated Clinical Result',
        example: <TruncatedResult />,
        source: TruncatedResultSrc,
      },
      {
        title: 'Display for "Known No Result"',
        example: <KnownNoData />,
        source: KnownNoDataSrc,
      },
      {
        title: 'Display for "Known Error"',
        description: 'Use the \'hasResultError\' prop to show the "Error" display for the Clinical Result:',
        example: <KnownError />,
        source: KnownErrorSrc,
      },
      {
        title: 'Display for Accidental Errors',
        description: 'Built-in fallback display for when there is an error or malformation of the \'resultData\' object:',
        example: <AccidentalError />,
        source: AccidentalErrorSrc,
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
        componentName: 'Clinical Result Props',
        componentSrc: ClinicalResultsProps,
      },
    ]}
  />
);

export default DocPage;
