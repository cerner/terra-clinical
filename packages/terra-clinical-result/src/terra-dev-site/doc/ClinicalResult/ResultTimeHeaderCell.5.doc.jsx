import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ResultTimeHeaderCell.md';
import { name } from '../../../../package.json';

// Component Source
import ResultSrc from '!raw-loader!../../../../src/result-time-header-cell/ResultTimeHeaderCell';

// Example Files
import Default from '../example/result-time-header-cell/ResultTimeHeaderCell';
import DefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/result-time-header-cell/ResultTimeHeaderCell.jsx';
import FlowsheetExample from '../example/result-time-header-cell/ResultTimeHeaderFlowsheetExample';
import FlowsheetExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/result-time-header-cell/ResultTimeHeaderFlowsheetExample.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Result Time Header Cell',
        example: <Default />,
        source: DefaultSrc,
      },
      {
        title: 'Result Time Header Cells in Sample Flowsheet',
        example: <FlowsheetExample />,
        source: FlowsheetExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Result Time Header Cell',
        componentSrc: ResultSrc,
      },
    ]}
  />
);

export default DocPage;
