/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-no-data-view/docs/README.md';
import { name } from 'terra-clinical-no-data-view/package.json';

// Component Source
import NoDataViewSrc from '!raw-loader!terra-clinical-no-data-view/src/NoDataView.jsx';

// Example Files
import NoDataViewStandard from './NoDataViewStandard';
import NoDataViewStandardSrc from '!raw-loader!./NoDataViewStandard';
import NoDataViewContent from './NoDataViewContent';
import NoDataViewContentSrc from '!raw-loader!./NoDataViewContent';
import NoDataViewHiddenGlyph from './NoDataViewHiddenGlyph';
import NoDataViewHiddenGlyphSrc from '!raw-loader!./NoDataViewHiddenGlyph';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: '>No Data View',
        example: <NoDataViewStandard />,
        source: NoDataViewStandardSrc,
      },
      {
        title: 'No Data View With Glyph Hidden',
        example: <NoDataViewHiddenGlyph />,
        source: NoDataViewHiddenGlyphSrc,
      },
      {
        title: 'No Data View With Content',
        example: <NoDataViewContent />,
        source: NoDataViewContentSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'No Data View',
        componentSrc: NoDataViewSrc,
      },
    ]}
  />
);

export default DocPage;
