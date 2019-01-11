import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DetailViewSrc from '!raw-loader!../../../../src/DetailView';
import DetailListSrc from '!raw-loader!../../../../src/DetailList';
import DetailListItemSrc from '!raw-loader!../../../../src/DetailListItem';

// Example files
import DetailViewDivided from '../example/DetailViewDivided';
import DetailViewDividedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DetailViewDivided';
import DetailViewNoDivider from '../example/DetailViewNoDivider';
import DetailViewNoDividerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DetailViewNoDivider';
import DetailViewDividedSmallerTitles from '../example/DetailViewDividedSmallerTitles';
import DetailViewDividedSmallerTitlesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DetailViewDividedSmallerTitles';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Divided Detail View',
        example: <DetailViewDivided />,
        source: DetailViewDividedSrc,
      },
      {
        title: 'Non-Divided Detail View',
        example: <DetailViewNoDivider />,
        source: DetailViewNoDividerSrc,
      },
      {
        title: 'Divided Detail View with Smaller Titles',
        example: <DetailViewDividedSmallerTitles />,
        source: DetailViewDividedSmallerTitlesSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Detail View',
        componentSrc: DetailViewSrc,
      },
      {
        componentName: 'Detail List',
        componentSrc: DetailListSrc,
      },
      {
        componentName: 'Detail List Item',
        componentSrc: DetailListItemSrc,
      },
    ]}
  />
);

export default DocPage;
