/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-comment/docs/README.md';
import { version } from 'terra-clinical-item-comment/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ItemCommentSrc from '!raw-loader!terra-clinical-item-comment/src/ItemComment.jsx';

// Example Files
import DefaultItemComment from './DefaultItemComment';

const ItemCommentExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ItemCommentSrc} />
    <h2 id="standard">Standard Item Comment</h2>
    <DefaultItemComment />
  </div>
);

export default ItemCommentExamples;
