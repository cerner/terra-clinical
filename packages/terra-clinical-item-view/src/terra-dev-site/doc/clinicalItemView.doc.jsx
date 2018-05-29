/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../docs/README.md';
import { name } from '../../../package.json';

// Component Source
import ItemViewSrc from '!raw-loader!../../../src/ItemView.jsx';

// Example Files
import ItemViewStandard from './example/ItemViewStandard';
import ItemViewStandardSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewStandard';
import ItemViewTwoColumn from './example/ItemViewTwoColumn';
import ItemViewTwoColumnSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewTwoColumn';
import ItemViewTwoColumnStart from './example/ItemViewTwoColumnStart';
import ItemViewTwoColumnStartSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewTwoColumnStart';
import ItemViewComment from './example/ItemViewComment';
import ItemViewCommentSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewComment';
import ItemViewAll from './example/ItemViewAll';
import ItemViewAllSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewAll';
import ItemViewAllTopAligned from './example/ItemViewAllTopAligned';
import ItemViewAllTopAlignedSrc from '!raw-loader!../../../src/terra-dev-site/doc/example/ItemViewAllTopAligned';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'ItemView - Default',
        example: <ItemViewStandard />,
        source: ItemViewStandardSrc,
      },
      {
        title: 'ItemView - Two Column Layout',
        example: <ItemViewTwoColumn />,
        source: ItemViewTwoColumnSrc,
      },
      {
        title: 'ItemView - Start Emphasis',
        example: <ItemViewTwoColumnStart />,
        source: ItemViewTwoColumnStartSrc,
      },
      {
        title: 'ItemView - Comment',
        example: <ItemViewComment />,
        source: ItemViewCommentSrc,
      },
      {
        title: 'ItemView - All Elements',
        example: <ItemViewAll />,
        source: ItemViewAllSrc,
      },
      {
        title: 'ItemView - All Elements Top Aligned',
        example: <ItemViewAllTopAligned />,
        source: ItemViewAllTopAlignedSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Item View',
        componentSrc: ItemViewSrc,
      },
    ]}
  />
);

export default DocPage;
