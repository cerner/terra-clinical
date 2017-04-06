/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-item-view/docs/README.md';
import { version } from 'terra-clinical-item-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import ItemViewSrc from '!raw-loader!terra-clinical-item-view/src/ItemView.jsx';

// Example Files
import ItemViewStandard from './ItemViewStandard';
import ItemViewTwoColumn from './ItemViewTwoColumn';
import ItemViewTwoColumnStart from './ItemViewTwoColumnStart';
import ItemViewComment from './ItemViewComment';
import ItemViewAll from './ItemViewAll';

const ItemViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ItemViewSrc} />
    <h2 id="standard">Standard Displays</h2>
    <ItemViewStandard />
    <h2 id="two-column">Two Column ItemView</h2>
    <ItemViewTwoColumn />
    <h2 id="start-emphasis">Start Emphasis ItemView</h2>
    <ItemViewTwoColumnStart />
    <h2 id="comment">Comment ItemView</h2>
    <ItemViewComment />
    <h2 id="all-elements">All Elements ItemView</h2>
    <ItemViewAll />
  </div>
);

export default ItemViewExamples;
