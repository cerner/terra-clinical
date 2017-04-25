/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-display/docs/README.md';
import { version } from 'terra-clinical-item-display/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ItemDisplaySrc from '!raw-loader!terra-clinical-item-display/src/ItemDisplay.jsx';

// Example Files
import TextItemDisplay from './TextItemDisplay';
import IconItemDisplay from './IconItemDisplay';
import TextIconItemDisplay from './TextIconItemDisplay';

const ItemDisplayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ItemDisplaySrc} />
    <h2 id="text">Text Display</h2>
    <TextItemDisplay />
    <br />
    <h2 id="icon">Icon Display</h2>
    <IconItemDisplay />
    <br />
    <h2 id="icon">Icon and Text Display</h2>
    <TextIconItemDisplay />
  </div>
);

export default ItemDisplayExamples;
