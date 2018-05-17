/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-error-view/docs/README.md';
import { name } from 'terra-clinical-error-view/package.json';

// Component Source
import ErrorViewSrc from '!raw-loader!terra-clinical-error-view/src/ErrorView.jsx';

// Example Files
import ErrorViewStandard from './ErrorViewStandard';
import ErrorViewStandardSrc from '!raw-loader!./ErrorViewStandard';
import ErrorViewHiddenGlyph from './ErrorViewHiddenGlyph';
import ErrorViewHiddenGlyphSrc from '!raw-loader!./ErrorViewHiddenGlyph';
import ErrorViewHiddenGlyphNoButton from './ErrorViewHiddenGlyphNoButton';
import ErrorViewHiddenGlyphNoButtonSrc from '!raw-loader!./ErrorViewHiddenGlyphNoButton';
import ErrorViewNoName from './ErrorViewNoName';
import ErrorViewNoNameSrc from '!raw-loader!./ErrorViewNoName';
import ErrorViewNoDescription from './ErrorViewNoDescription';
import ErrorViewNoDescriptionSrc from '!raw-loader!./ErrorViewNoDescription';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Error View',
        example: <ErrorViewStandard />,
        source: ErrorViewStandardSrc,
      },
      {
        title: 'Error View With Glyph Hidden',
        example: <ErrorViewHiddenGlyph />,
        source: ErrorViewHiddenGlyphSrc,
      },
      {
        title: 'Error View With Glyph Hidden and No Button',
        example: <ErrorViewHiddenGlyphNoButton />,
        source: ErrorViewHiddenGlyphNoButtonSrc,
      },
      {
        title: 'Error View With No Name',
        example: <ErrorViewNoName />,
        source: ErrorViewNoNameSrc,
      },
      {
        title: 'Error View No Description',
        example: <ErrorViewNoDescription />,
        source: ErrorViewNoDescriptionSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Error View',
        componentSrc: ErrorViewSrc,
      },
    ]}
  />
);

export default DocPage;
