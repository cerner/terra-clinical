/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-item-display/docs/README.md';
import { name } from 'terra-clinical-item-display/package.json';

// Component Source
import ItemDisplaySrc from '!raw-loader!terra-clinical-item-display/src/ItemDisplay.jsx';
import CommentSrc from '!raw-loader!terra-clinical-item-display/src/ItemComment.jsx';

// Example Files
import TextStyles from './TextStyles';
import TextStylesSrc from '!raw-loader!./TextStyles';
import TextStylesDisabled from './TextStylesDisabled';
import TextStylesDisabledSrc from '!raw-loader!./TextStylesDisabled';
import Icon from './Icon';
import IconSrc from '!raw-loader!./Icon';
import IconText from './IconText';
import IconTextSrc from '!raw-loader!./IconText';
import DefaultComment from './DefaultComment';
import DefaultCommentSrc from '!raw-loader!./DefaultComment';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Item Display: Text styles',
        example: <TextStyles />,
        source: TextStylesSrc,
      },
      {
        title: 'Disabled Item Display: Text styles',
        example: <TextStylesDisabled />,
        source: TextStylesDisabledSrc,
      },
      {
        title: 'Item Display: Icon',
        example: <Icon />,
        source: IconSrc,
      },
      {
        title: 'Item Display: Icon & Text',
        example: <IconText />,
        source: IconTextSrc,
      },
      {
        title: 'Comment Item Display',
        example: <DefaultComment />,
        source: DefaultCommentSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Item Display',
        componentSrc: ItemDisplaySrc,
      },
      {
        componentName: 'Item Comment',
        componentSrc: CommentSrc,
      },
    ]}
  />
);

export default DocPage;
