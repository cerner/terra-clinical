import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import ItemDisplaySrc from '!raw-loader!../../../../src/ItemDisplay';
import CommentSrc from '!raw-loader!../../../../src/ItemComment';

// Example Files
import TextStyles from '../example/TextStyles';
import TextStylesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextStyles';
import TextStylesDisabled from '../example/TextStylesDisabled';
import TextStylesDisabledSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TextStylesDisabled';
import Icon from '../example/Icon';
import IconSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Icon';
import IconText from '../example/IconText';
import IconTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/IconText';
import DefaultComment from '../example/DefaultComment';
import DefaultCommentSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultComment';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
