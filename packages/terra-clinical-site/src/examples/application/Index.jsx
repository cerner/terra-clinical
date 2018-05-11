/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-application/docs/README.md';
import { name } from 'terra-clinical-application/package.json';

// Component Source
import ApplicationSrc from '!raw-loader!terra-clinical-application/src/Application';

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
