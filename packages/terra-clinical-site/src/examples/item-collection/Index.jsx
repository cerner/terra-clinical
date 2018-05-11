/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-item-collection/docs/README.md';
import { name } from 'terra-clinical-item-collection/package.json';

// Component Source
import ItemCollectionSrc from '!raw-loader!terra-clinical-item-collection/src/ItemCollection';
import ItemSrc from '!raw-loader!terra-clinical-item-collection/src/Item';

// Example Files
import ItemCollectionExample from './ItemCollectionExample';
import ItemCollectionExampleSrc from '!raw-loader!./ItemCollectionExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Divided Detail View',
        example: <ItemCollectionExample />,
        source: ItemCollectionExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Item Collection',
        componentSrc: ItemCollectionSrc,
      },
      {
        componentName: 'Item',
        componentSrc: ItemSrc,
      },
    ]}
  />
);

export default DocPage;
