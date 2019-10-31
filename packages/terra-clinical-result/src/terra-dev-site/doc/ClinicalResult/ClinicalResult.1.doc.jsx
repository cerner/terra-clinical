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
        description: '',
        example: <DecoratedResult />,
        source: DecoratedResultSrc,
      },
      {
        title: 'Unverified Clinical Result with Hide Unit of Measure',
        description: '',
        example: <UnverifiedResult />,
        source: UnverifiedResultSrc,
      },
      {
        title: 'Clinical Result with additional displays',
        description: '',
        example: <ExtraDisplaysResult />,
        source: ExtraDisplaysResultSrc,
      },
      {
        title: 'Clinical Results with Intrepretation',
        description: '',
        example: <InterpretationResults />,
        source: InterpretationResultsSrc,
      },
      {
        title: 'Changing the Clinical Result Size',
        description: '',
        example: <SizeChangeResult />,
        source: SizeChangeResultSrc,
      },
      {
        title: 'Truncated Clinical Result',
        description: '',
        example: <TruncatedResult />,
        source: TruncatedResultSrc,
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
