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
import ItemViewAllTopAligned from './ItemViewAllTopAligned';

const ItemViewExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={ItemViewSrc} />
    <h2 id="standard">ItemView - Default</h2>
    <ItemViewStandard />
    <br />
    <h2 id="two-column">ItemView - Two Column Layout</h2>
    <ItemViewTwoColumn />
    <br />
    <h2 id="start-emphasis">ItemView - Start Emphasis</h2>
    <ItemViewTwoColumnStart />
    <br />
    <h2 id="comment">ItemView - Comment</h2>
    <ItemViewComment />
    <br />
    <h2 id="all-elements">ItemView - All Elements</h2>
    <ItemViewAll />
    <br />
    <h2 id="all-elements-top">ItemView - All Elements Top Aligned</h2>
    <ItemViewAllTopAligned />
  </div>
);

export default ItemViewExamples;
