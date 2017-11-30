/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-collection/docs/README.md';
import { version } from 'terra-clinical-item-collection/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ItemCollectionSrc from '!raw-loader!terra-clinical-item-collection/src/ItemCollection';
import ItemSrc from '!raw-loader!terra-clinical-item-collection/src/Item';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ItemCollectionExample from './ItemCollectionExample';

const ItemCollectionExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ItemCollectionSrc} componentName="Item Collection" />
    <h2> Item Collection Item </h2>
    <p>This component handles the rendering of a list item or table row for the ItemCollection. By default, this renders an ListItem with an ItemView as the content. Else it will render a TableRow with the element layout of startAccessory, displays, comment, and endAccessory. This component does not handle missing element logic, but provides a clean way to represent an item as a child within the item collection.</p>

    <p>Additionally, this component will export the ItemView.Display and ItemView.Comment components as Item.Display & Item.Comment.</p>
    <PropsTable id="props" src={ItemSrc} componentName="Item" />
    <h1>Item Collection Example</h1>
    <ItemCollectionExample />
  </div>
);

export default ItemCollectionExamples;
