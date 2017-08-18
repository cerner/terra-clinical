/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-clinical-header/docs/README.md';
import { version } from 'terra-clinical-header/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HeaderSrc from '!raw-loader!terra-clinical-header/src/Header';

// Example Files
import TitleHeader from './TitleHeader';
import ContentHeader from './ContentHeader';
import HeaderLongText from './HeaderLongText';
import HeaderLongTextWithContent from './HeaderLongTextWithContent';
import Subheader from './Subheader';

const HeaderExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={HeaderSrc} />
    <h1> Header With Title Only </h1>
    <TitleHeader />
    <h1> Header With Content </h1>
    <ContentHeader />
    <h1> Header With Long Title </h1>
    <HeaderLongText />
    <h1> Header With Long Title And Content </h1>
    <HeaderLongTextWithContent />
    <h1> Subheader with content </h1>
    <Subheader />
  </div>
);

export default HeaderExamples;
