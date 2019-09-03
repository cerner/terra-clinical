import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import LabelValueViewSrc from '!raw-loader!../../../../src/LabelValueView';

// Example Files
import LabelValueViewText from '../example/LabelValueViewText';
import LabelValueViewTextSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LabelValueViewText';
import LabelValueViewNode from '../example/LabelValueViewNode';
import LabelValueViewNodeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LabelValueViewNode';
import LabelValueViewNodeCustom from '../example/LabelValueViewNodeCustom';
import LabelValueViewNodeCustomSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/LabelValueViewNodeCustom';

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
