import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ClinicalResultsProps from '!raw-loader!../../../../src/ClinicalResult';

// Example Files
import DefaultResult from '../example/DefaultClinicalResult';
import DefaultResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultClinicalResult.jsx';
import TruncatedDefaultResult from '../example/TruncatedClinicalResult';
import TruncatedDefaultResultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TruncatedClinicalResult.jsx';



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
        title: 'Truncated Clinical Result',
        example: <TruncatedDefaultResult />,
        source: TruncatedDefaultResultSrc,
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
