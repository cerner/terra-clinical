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
import TextStyles from './TextStyles';
import Icon from './Icon';
import IconText from './IconText';
import DefaultComment from './DefaultComment';

const ItemDisplayExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2> Item Display </h2>
    <PropsTable id="props" src={ItemDisplaySrc} />
    <h2> Comment Item Display </h2>
    <PropsTable id="props" src={CommentSrc} />

    <h2>Item Display: Text styles</h2>
    <TextStyles />
    <br />
    <h2>Item Display: Icon</h2>
    <Icon />
    <br />
    <h2>Item Display: Icon & Text</h2>
    <IconText />
    <br />
    <h2>Comment Item Display</h2>
    <DefaultComment />
  </div>
);

export default ItemDisplayExamples;
