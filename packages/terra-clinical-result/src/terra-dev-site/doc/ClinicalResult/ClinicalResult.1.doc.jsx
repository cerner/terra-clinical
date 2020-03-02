import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ClinicalResultsProps from '!raw-loader!../../../../src/ClinicalResult';

// Example Files
import DefaultResult from '../example/clinicalresult/ClinicalResultDefault';
import DefaultResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultDefault.jsx';
import DecoratedResult from '../example/clinicalresult/ClinicalResultDecorated';
import DecoratedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultDecorated.jsx';
import UnverifiedResult from '../example/clinicalresult/ClinicalResultUnverified';
import UnverifiedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultUnverified.jsx';
import ExtraDisplaysResult from '../example/clinicalresult/ClinicalResultExtraDisplays';
import ExtraDisplaysResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultExtraDisplays.jsx';
import TruncatedResult from '../example/clinicalresult/ClinicalResultTruncated';
import TruncatedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultTruncated.jsx';
import InterpretationResults from '../example/clinicalresult/ClinicalResultInterpretation';
import InterpretationResultsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultInterpretation.jsx';
import SizeChangeResult from '../example/clinicalresult/ClinicalResultChangeSize';
import SizeChangeResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultChangeSize.jsx';
import KnownNoData from '../example/clinicalresult/ClinicalResultKnownNoData';
import KnownNoDataSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultKnownNoData.jsx';
import KnownError from '../example/clinicalresult/ClinicalResultKnownError';
import KnownErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultKnownError.jsx';
import AccidentalError from '../example/clinicalresult/ClinicalResultAccidentalError';
import AccidentalErrorSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresult/ClinicalResultAccidentalError.jsx';
import StatusEnteredInError from '../example/clinicalresult/ClinicalResultStatusEnteredInError';
import StatusEnteredInErrorSrc from '../example/clinicalresult/ClinicalResultStatusEnteredInError';

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
