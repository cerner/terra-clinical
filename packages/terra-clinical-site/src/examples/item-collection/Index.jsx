/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-collection/docs/README.md';
import { version } from 'terra-clinical-item-collection/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ItemCollectionSrc from '!raw-loader!terra-clinical-item-collection/src/ItemCollection';

// Example Files
import ItemCollectionExample from './ItemCollectionExample';

const ItemCollectionExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ItemCollectionSrc} />
    <h1>Item Collection Example</h1>
    <ItemCollectionExample />
  </div>
);

export default ItemCollectionExamples;
