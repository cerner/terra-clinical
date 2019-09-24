import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ResultTimeHeaderCell.md';
import { name } from '../../../../package.json';

// Component Source
import ResultSrc from '!raw-loader!../../../../src/resulttimeheadercell/ResultTimeHeaderCell';

// Example Files
import Default from '../examples/ResultTimeHeaderCell';
import DefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/examples/ResultTimeHeaderCell.jsx';

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
