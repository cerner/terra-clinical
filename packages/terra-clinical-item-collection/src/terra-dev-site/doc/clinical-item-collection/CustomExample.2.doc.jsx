import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/CreatingItemCollection.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import CustomExample from '../example/CustomExample';
import CustomExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomExample';
import CustomTableExample from '../example/CustomTableExample';
import CustomTableExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomTableExample';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const CustomItemCollectionExamples = () => (
  <DocTemplate
    readme={ReadMe}
    examples={[
      {
        title: 'Custom Example',
        example: <CustomExample />,
        source: CustomExampleSrc,
      },
      {
        title: 'Custom Table Example',
        example: <CustomTableExample />,
      source: CustomTableExampleSrc,
      },
    ]}
  />
);

export default CustomItemCollectionExamples;
