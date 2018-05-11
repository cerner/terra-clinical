/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-clinical-label-value-view/docs/README.md';
import { name } from 'terra-clinical-label-value-view/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import LabelValueViewSrc from '!raw-loader!terra-clinical-label-value-view/src/LabelValueView';

// Example Files
import LabelValueViewText from './LabelValueViewText';
import LabelValueViewTextSrc from '!raw-loader!./LabelValueViewText';
import LabelValueViewNode from './LabelValueViewNode';
import LabelValueViewNodeSrc from '!raw-loader!./LabelValueViewNode';
import LabelValueViewNodeCustom from './LabelValueViewNodeCustom';
import LabelValueViewNodeCustomSrc from '!raw-loader!./LabelValueViewNodeCustom';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-clinical/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Label Value View with a Text Input',
        example: <LabelValueViewText />,
        source: LabelValueViewTextSrc,
      },
      {
        title: 'Label Value View with a Node Input',
        example: <LabelValueViewNode />,
        source: LabelValueViewNodeSrc,
      },
      {
        title: 'Label Value View with a Node Input (Custom)',
        example: <LabelValueViewNodeCustom />,
        source: LabelValueViewNodeCustomSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Label Value View',
        componentSrc: LabelValueViewSrc,
      },
    ]}
  />
);

export default DocPage;
