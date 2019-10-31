import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ClinicalResultBloodPressure.md';
import { name } from '../../../../package.json';

// Component Source
// import ClinicalResultBloodPressureProps from '!raw-loader!../../../../src/ClinicalResultBloodPressure';


// Example Files
import DefaultResult from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureDefault';
import DefaultResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureDefault.jsx';
import DecoratedResult from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureDecorated';
import DecoratedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureDecorated.jsx';
import UnverifiedResult from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureUnverified';
import UnverifiedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureUnverified.jsx';
import ExtraDisplaysResult from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureExtraDisplays';
import ExtraDisplaysResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureExtraDisplays.jsx';
import TruncatedResult from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureTruncated';
import TruncatedResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureTruncated.jsx';
import InterpretationResults from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureInterpretation';
import InterpretationResultsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureInterpretation.jsx';
import SizeChangeResult from '../example/clinicalresultbloodpressure/ClinicalResultBloodPressureChangeSize';
import SizeChangeResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/clinicalresultbloodpressure/ClinicalResultBloodPressureChangeSize.jsx';


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
        description: '',
        example: <DecoratedResult />,
        source: DecoratedResultSrc,
      },
      {
        title: 'Unverified Blood Pressure Result with Hide Unit of Measure',
        description: '',
        example: <UnverifiedResult />,
        source: UnverifiedResultSrc,
      },
      {
        title: 'Clinical Blood Pressure Result with additional displays',
        description: '',
        example: <ExtraDisplaysResult />,
        source: ExtraDisplaysResultSrc,
      },
      {
        title: 'Blood Pressure Clinical Results with Intrepretation',
        description: '',
        example: <InterpretationResults />,
        source: InterpretationResultsSrc,
      },
      {
        title: 'Changing the Blood Pressure Clinical Result Size',
        description: '',
        example: <SizeChangeResult />,
        source: SizeChangeResultSrc,
      },
      {
        title: 'Truncated Blood Pressure Clinical Result',
        description: '',
        example: <TruncatedResult />,
        source: TruncatedResultSrc,
      },
    ]}
    /*
    propsTables={[
      {
        componentName: 'Clinical-Result-Blood-Pressure Props',
        componentSrc: ClinicalResultBloodPressureProps,
      },
    ]}
    */
  />
);

export default DocPage;
