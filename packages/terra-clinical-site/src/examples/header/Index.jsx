/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-header/docs/README.md';
import { name } from 'terra-clinical-header/package.json';

// Component Source
import HeaderSrc from '!raw-loader!terra-clinical-header/src/Header';

// Example Files
import TitleHeader from './TitleHeader';
import TitleHeaderSrc from '!raw-loader!./TitleHeader';
import ContentHeader from './ContentHeader';
import ContentHeaderSrc from '!raw-loader!./ContentHeader';
import HeaderLongText from './HeaderLongText';
import HeaderLongTextSrc from '!raw-loader!./HeaderLongText';
import HeaderLongTextWithContent from './HeaderLongTextWithContent';
import HeaderLongTextWithContentSrc from '!raw-loader!./HeaderLongTextWithContent';
import Subheader from './Subheader';
import SubheaderSrc from '!raw-loader!./Subheader';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Header With Title Only',
        example: <TitleHeader />,
        source: TitleHeaderSrc,
      },
      {
        title: 'Header With Content',
        example: <ContentHeader />,
        source: ContentHeaderSrc,
      },
      {
        title: 'Header With Long Title',
        example: <HeaderLongText />,
        source: HeaderLongTextSrc,
      },
      {
        title: 'Header With Long Title, Children, And Content',
        example: <HeaderLongTextWithContent />,
        source: HeaderLongTextWithContentSrc,
      },
      {
        title: 'Subheader with content',
        example: <Subheader />,
        source: SubheaderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Header',
        componentSrc: HeaderSrc,
      },
    ]}
  />
);

export default DocPage;
