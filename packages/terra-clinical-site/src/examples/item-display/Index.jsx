/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-display/docs/README.md';
import { version } from 'terra-clinical-item-display/package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ItemDisplaySrc from '!raw-loader!terra-clinical-item-display/src/ItemDisplay.jsx';
import CommentSrc from '!raw-loader!terra-clinical-item-display/src/ItemComment.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import TextItemDisplay from './TextItemDisplay';
import IconItemDisplay from './IconItemDisplay';
import TextIconItemDisplay from './TextIconItemDisplay';
import DefaultComment from './DefaultComment';

const ItemDisplayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2> Item Display </h2>
    <PropsTable id="props" src={ItemDisplaySrc} />
    <h2> Item Display-Comment </h2>
    <PropsTable id="props" src={CommentSrc} />
    <h2 id="text">Text Display</h2>
    <TextItemDisplay />
    <br />
    <h2 id="icon">Icon Display</h2>
    <IconItemDisplay />
    <br />
    <h2 id="icon">Icon and Text Display</h2>
    <TextIconItemDisplay />
    <br />
    <h2 id="standard">Comment Display</h2>
    <DefaultComment />
  </div>
);

export default ItemDisplayExamples;
