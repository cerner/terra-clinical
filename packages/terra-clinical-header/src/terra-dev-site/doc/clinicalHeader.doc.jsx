import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import HeaderSrc from '!raw-loader!../../../src/Header';

// Example Files
import TitleHeader from './example/TitleHeader';
import TitleHeaderSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/TitleHeader';
import ContentHeader from './example/ContentHeader';
import ContentHeaderSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ContentHeader';
import HeaderLongText from './example/HeaderLongText';
import HeaderLongTextSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/HeaderLongText';
import HeaderLongTextWithContent from './example/HeaderLongTextWithContent';
import HeaderLongTextWithContentSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/HeaderLongTextWithContent';
import Subheader from './example/Subheader';
import SubheaderSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/Subheader';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
