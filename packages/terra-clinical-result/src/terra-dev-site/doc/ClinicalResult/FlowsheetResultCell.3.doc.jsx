import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/FlowsheetResultCell.md';
import { name } from '../../../../package.json';

// Component Source
import FlowsheetResultCellProps from '!raw-loader!../../../../src/flowsheetresultcell/FlowsheetResultCell';

// Example Files
import DefaultCell from '../example/flowsheetresultcell/FlowsheetResultCellDefault';
import DefaultCellSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/flowsheetresultcell/FlowsheetResultCellDefault.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Flowsheet Result Cell',
        example: <DefaultCell />,
        source: DefaultCellSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Flowsheet Result Cell',
        componentSrc: FlowsheetResultCellProps,
      },
    ]}
  />
);

export default DocPage;
