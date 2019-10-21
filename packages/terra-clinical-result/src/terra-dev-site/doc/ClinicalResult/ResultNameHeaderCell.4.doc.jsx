import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ResultNameHeaderCell.md';
import { name } from '../../../../package.json';

// Component Source
import ResultSrc from '!raw-loader!../../../../src/resultnameheadercell/ResultNameHeaderCell';

// Example Files
import Default from '../example/resultnameheadercell/ResultNameHeaderCell';
import DefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/resultnameheadercell/ResultNameHeaderCell.jsx';
import FlowsheetExample from '../example/resultnameheadercell/ResultNameHeaderFlowsheetExample';
import FlowsheetExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/resultnameheadercell/ResultNameHeaderFlowsheetExample.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Result Name Header Cell',
        example: <Default />,
        source: DefaultSrc,
      },
      {
        title: 'Result Name Header Cells in Sample Flowsheet',
        example: <FlowsheetExample />,
        source: FlowsheetExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Result Name Header Cell',
        componentSrc: ResultSrc,
      },
    ]}
  />
);

export default DocPage;
