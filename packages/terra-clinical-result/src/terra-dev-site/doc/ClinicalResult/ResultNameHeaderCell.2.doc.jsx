import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/ResultNameHeaderCell.md';
import { name } from '../../../../package.json';

// Component Source
import ResultSrc from '!raw-loader!../../../../src/resultnameheadercell/ResultNameHeaderCell';

// Example Files
import Default from '../examples/ResultNameHeaderCell';
import DefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/examples/ResultNameHeaderCell.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Result Name Header Cell (for flowsheets)',
        example: <Default />,
        source: DefaultSrc,
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
