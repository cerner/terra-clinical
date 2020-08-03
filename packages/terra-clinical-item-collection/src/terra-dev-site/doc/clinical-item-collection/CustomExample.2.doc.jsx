import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/CreatingItemCollection.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import ResponsiveListAndTableExample from '../example/ResponsiveListAndTableExample';
import ResponsiveListAndTableExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ResponsiveListAndTableExample';
import ResponsiveListAndCellGridExample from '../example/ResponsiveListAndCellGridExample';
import ResponsiveListAndCellGridExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ResponsiveListAndCellGridExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const CustomItemCollectionExamples = () => (
  <DocTemplate
    readme={ReadMe}
    examples={[
      {
        title: 'Responsive List And Table Example',
        example: <ResponsiveListAndTableExample />,
        source: ResponsiveListAndTableExampleSrc,
      },
      {
        title: 'Responsive List And Cell Grid Example',
        example: <ResponsiveListAndCellGridExample />,
        source: ResponsiveListAndCellGridExampleSrc,
      },
    ]}
  />
);

export default CustomItemCollectionExamples;
