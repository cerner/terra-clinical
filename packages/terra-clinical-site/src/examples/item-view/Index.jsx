/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-item-view/docs/README.md';
import { name } from 'terra-clinical-item-view/package.json';

// Component Source
import ItemViewSrc from '!raw-loader!terra-clinical-item-view/src/ItemView.jsx';

// Example Files
import ItemViewStandard from './ItemViewStandard';
import ItemViewStandardSrc from '!raw-loader!./ItemViewStandard';
import ItemViewTwoColumn from './ItemViewTwoColumn';
import ItemViewTwoColumnSrc from '!raw-loader!./ItemViewTwoColumn';
import ItemViewTwoColumnStart from './ItemViewTwoColumnStart';
import ItemViewTwoColumnStartSrc from '!raw-loader!./ItemViewTwoColumnStart';
import ItemViewComment from './ItemViewComment';
import ItemViewCommentSrc from '!raw-loader!./ItemViewComment';
import ItemViewAll from './ItemViewAll';
import ItemViewAllSrc from '!raw-loader!./ItemViewAll';
import ItemViewAllTopAligned from './ItemViewAllTopAligned';
import ItemViewAllTopAlignedSrc from '!raw-loader!./ItemViewAllTopAligned';

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
