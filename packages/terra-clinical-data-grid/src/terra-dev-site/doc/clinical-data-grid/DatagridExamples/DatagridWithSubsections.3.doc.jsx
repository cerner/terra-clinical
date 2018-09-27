import React from 'react';
import ExampleTemplate from 'terra-doc-template/lib/ExampleTemplate';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DatagridWithSubsections from './DatagridWithSubsections';
import DatagridWithSubsectionsSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/clinical-data-grid/DatagridExamples/DatagridWithSubsections';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DatagridWithSubsectionsExample = () => (
  <ExampleTemplate
    description="This example features multiple subsections. Section 0 is collapsible. The header for Section 1 contains keyboard-accessible content in its endAccessory region."
    example={<DatagridWithSubsections />}
    exampleSrc={DatagridWithSubsectionsSrc}
  />
);

export default DatagridWithSubsectionsExample;
