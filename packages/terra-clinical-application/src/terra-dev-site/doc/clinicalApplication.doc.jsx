/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

// Component Source
import ApplicationSrc from '!raw-loader!../../../src/Application.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'Application',
        componentSrc: ApplicationSrc,
      },
    ]}
  />
);

export default DocPage;
