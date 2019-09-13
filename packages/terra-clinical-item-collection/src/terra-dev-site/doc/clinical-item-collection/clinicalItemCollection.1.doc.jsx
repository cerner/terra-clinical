import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import ItemCollectionPropsTable from '!terra-props-table-loader!../../../../src/ItemCollection';
import ItemPropsTable from '!terra-props-table-loader!../../../../src/Item';

// Example Files
import ItemCollectionExample from '../example/ItemCollectionExample';
import ItemCollectionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ItemCollectionExample';

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
        componentProps: ItemCollectionPropsTable,
      },
      {
        componentName: 'Item',
        componentProps: ItemPropsTable,
      },
    ]}
  />
);

export default DocPage;
